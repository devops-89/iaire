import { countryControllers } from "@/app/api/countryControllers";
import { COUNTRYDATAPROPS, INSTITUTION_BY_BOARD_PROPS } from "@/utils/type";
import { useEffect, useState } from "react";

export const useInstitutionByBoard = ({
  country,
  boardId,
}: {
  country?: COUNTRYDATAPROPS | null;
  boardId?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [institutionData, setInstitutionData] = useState<
    INSTITUTION_BY_BOARD_PROPS[]
  >([]);

  useEffect(() => {
    if (!country || !boardId) {
      setInstitutionData([]);
      return;
    }

    setLoading(true);
    const fetchBoard = () => {
      try {
        countryControllers
          .getInstitutionByBoard({ country, boardId })
          .then((res) => {
            setInstitutionData(
              res.data?.data?.schools || res.data.schools || [],
            );
            setLoading(false);
          })
          .catch((error) => {
            console.log("error in fetching institution Data by board", error);
            setLoading(false);
          });
      } catch (error) {
        console.log("error in fetching insitution by board", error);
        setLoading(false);
      }
    };
    fetchBoard();
  }, [country, boardId]);
  return { institutionData, loading };
};
