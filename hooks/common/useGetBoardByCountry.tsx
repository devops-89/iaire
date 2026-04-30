import { userControllers } from "@/app/api/userControllers";
import { BOARDDATAPROPS } from "@/utils/type";
import { useEffect, useState } from "react";

export const useBoardByCountry = (country: string) => {
  const [boardLoading, setBoardLoading] = useState(false);
  const [boardData, setBoardData] = useState<BOARDDATAPROPS[]>([]);

  useEffect(() => {
    const fetchBoard = async () => {
      if (country) {
        setBoardLoading(true);
        try {
          const result = await userControllers.getBoardByCountry(country);
          setBoardData(result?.data?.data || result);
        } catch (error) {
          console.log("Error in fetching board by country", error);
        } finally {
          setBoardLoading(false);
        }
      }
    };

    fetchBoard();
  }, [country]);

  return { boardLoading, boardData };
};
