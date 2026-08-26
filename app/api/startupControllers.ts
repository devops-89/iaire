import { STARTUP_REQUEST_DATA } from "@/utils/type";
import { startupSecuredApi } from "./config";

export const startupControllers = {
  createStartup: async (data: STARTUP_REQUEST_DATA) => {
    try {
      let result = await startupSecuredApi.post("/create", data);
      return result?.data;
    } catch (error) {
      throw error;
    }
  },
};
