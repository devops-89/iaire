import { countryControllers } from "@/app/api/countryControllers";
import { useEffect, useState } from "react";

export const useGetIsdByCountry = (countryId?: number | null) => {
  const [isdData, setIsdData] = useState<string[]>([]);
  const [isdLoading, setIsdLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchIsd = async () => {
      if (!countryId) return;
      setIsdLoading(true);
      try {
        const result = await countryControllers.getIsdByCountry(countryId);
        const codes =
          result?.data?.isdCodes ||
          result?.data?.data?.isdCodes ||
          (Array.isArray(result?.data) ? result.data : []);
        setIsdData(codes);
      } catch (error) {
        console.error("Error fetching ISD codes by country:", error);
      } finally {
        setIsdLoading(false);
      }
    };

    fetchIsd();
  }, [countryId]);

  return { isdData, isdLoading };
};
