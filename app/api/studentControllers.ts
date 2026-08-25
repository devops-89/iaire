import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { platformSecuredApi, userPublicApi } from "./config";

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

  signup: async (data: any) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((val) => formData.append(key, val as any));
          } else {
            formData.append(key, value as any);
          }
        }
      });

      const result = await userPublicApi.post(
        "/self-register-student",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
  getStudentDashboard: async () => {
    try {
      const result = await platformSecuredApi.get("/dashboard/student");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
