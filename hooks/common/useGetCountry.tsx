import { countryControllers } from "@/app/api/countryControllers";
import { userControllers } from "@/app/api/userControllers";
import { COUNTRYDATAPROPS } from "@/utils/type";
import { useState, useEffect } from "react";

export const useGetCountries = () => {
  const [countryData, setCountryData] = useState<COUNTRYDATAPROPS[]>([]);
  const [countryLoading, setCountryLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountryLoading(true);
      try {
        const res = await countryControllers.getCountries();
        setCountryData(res.data.data);
      } catch (error) {
        console.log("error in country listing", error);
      } finally {
        setCountryLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return {
    countryData,
    countryLoading,
  };
};
