import { USER_ROLES } from "@/utils/enum";
import { plansApi } from "./config";

export const planControllers = {
  getAllPlans: async (role: string) => {
    try {
      const result = await plansApi.get(`all?role=${role}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
