import { STARTUP_REQUEST_DATA } from "@/utils/type";
import { useState } from "react";
import { startupControllers } from "@/app/api/startupControllers";

export const useCreateStartup = () => {
  const [loading, setLoading] = useState(false);
  const createStartup = async (data: STARTUP_REQUEST_DATA) => {
    try {
      setLoading(true);
      const res = await startupControllers.createStartup(data);
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  return { createStartup, loading };
};
