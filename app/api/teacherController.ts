import {
  MENTOR_SIGNUP_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
} from "@/utils/type";
import { trainingSecuredApi, userPublicApi } from "./config";

export const teacherController = {
  signup: async (data: MENTOR_SIGNUP_REQUEST) => {
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
        "/self-register-teacher",
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

  teacherSelfNominated: async (data: NOMINATE_TEACHER_FOR_TRAINING_REQUEST) => {
    try {
      const result = await trainingSecuredApi.post("/self-nominate", data);
      return result;
    } catch (error) {
      throw error;
    }
  },

  getTeacherSelfNominatedList: async (status?: string) => {
    try {
      let result = await trainingSecuredApi.get("/teachers/all", {
        params: status ? { status } : {},
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
};
