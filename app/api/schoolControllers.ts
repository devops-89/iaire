import { INSTITUTION_ADD_EDUCATOR_REQUEST } from "@/utils/type";
import { userSecuredApi } from "./config";

export const schoolControllers = {
  createTeacher: async (data: INSTITUTION_ADD_EDUCATOR_REQUEST) => {
    try {
      const result = await userSecuredApi.post("/create-teacher", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
