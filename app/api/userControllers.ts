import { InstitutionInfo } from "@/utils/type";
import { basePublicApi, userPublicApi } from "./config";

export const userControllers = {
  signupSchool: async (data: InstitutionInfo) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as any);
        }
      });

      const result = await userPublicApi.post(
        "/self-register-school-admin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
