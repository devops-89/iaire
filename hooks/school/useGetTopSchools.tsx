import { schoolControllers } from "@/app/api/schoolControllers";
import { useState, useEffect } from "react";

export const useGetTopSchools = () => {
  const [loading, setLoading] = useState(false);
  const [topSchools, setTopSchools] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  const fetchTopSchools = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await schoolControllers.getTopSchools();
      console.log("Top Schools API Response:", res);
      // The API return structure: schoolControllers.getTopSchools returns result.data or similar.
      // We safely check if the returned value is already the array or has it nested in a 'data' field.
      const payload = res?.data !== undefined ? res.data : res;
      setTopSchools(Array.isArray(payload) ? payload : (payload?.schools || []));
    } catch (err: any) {
      console.error("Error fetching top schools:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopSchools();
  }, []);

  return { loading, topSchools, fetchTopSchools, error };
};
