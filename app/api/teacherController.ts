import { MENTOR_SIGNUP_REQUEST } from "@/utils/type";
import { userPublicApi } from "./config";

export const teacherController = {
  signup: async (data: MENTOR_SIGNUP_REQUEST) => {
    try {
      const result = await userPublicApi.post("/self-register-teacher", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
