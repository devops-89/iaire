import { USER_ROLES } from "@/utils/enum";
import { plansApi, securedPlansApi } from "./config";

export const planControllers = {
  getAllPlans: async (role: string) => {
    try {
      const result = await securedPlansApi.get(`all?role=${role}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
