import { userControllers } from "@/app/api/userControllers";
import { COUNTRIES } from "@/utils/constant";
import { BOARDDATAPROPS, COUNTRYDATAPROPS } from "@/utils/type";
import { useEffect, useState } from "react";

export const useBoardByCountry = (country: COUNTRYDATAPROPS | null) => {
  const [boardLoading, setBoardLoading] = useState(false);
  const [boardData, setBoardData] = useState<BOARDDATAPROPS[]>([]);

  useEffect(() => {
    const fetchBoard = async () => {
      if (country?.code) {
        setBoardLoading(true);
        if (country?.code === "IN") {
          try {
            const result = await userControllers.getBoardByCountry(
              country?.code,
            );
            setBoardData(result?.data?.data || result);
          } catch (error) {
            console.log("Error in fetching board by country", error);
          } finally {
            setBoardLoading(false);
          }
        } else if (country?.code === "US") {
          try {
            const result = await userControllers.getIsdByCountry(country.id);
            // console.log("res", result);
            setBoardData(result?.data?.data?.isdCodes);
          } catch (error) {
            console.log("Error in fetching board by country", error);
          } finally {
            setBoardLoading(false);
          }
        } else {
          try {
            const result = await userControllers.getBoardByCountry(
              country?.code,
            );
            setBoardData(result?.data?.data || result);
          } catch (error) {
            console.log("Error in fetching board by country", error);
          } finally {
            setBoardLoading(false);
          }
        }
      }
    };

    fetchBoard();
  }, [country?.code]);

  return { boardLoading, boardData };
};
