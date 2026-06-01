import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { userPublicApi } from "./config";

export const studentControllers = {
  updateSelfProfileBeforeSignup: async (
    data: UPDATE_PROFILE_FORM_PROPS,
    id: number,
  ) => {
    try {
      if (data.profileImage) {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
          if (key === "profileImage") return;
          if (value !== null && value !== undefined) {
            formData.append(key, String(value));
          }
        });

        formData.append("profileImage", data.profileImage);

        const result = await userPublicApi.patch(
          `setup-student-details/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        return result.data;
      }

      const result = await userPublicApi.patch(
        `setup-student-details/${id}`,
        data,
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
