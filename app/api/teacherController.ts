import {
  ASSISTANCE_RESPONSE_DATA_PROPS,
  MENTOR_SIGNUP_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
  REQUEST_HONORARIUM_REQUEST_PROPS,
  TEACHER_SELF_INNOVATION,
} from "@/utils/type";
import {
  honorariumSecuredApi,
  innovationSecuredApi,
  needAssistance,
  nocSecuredApi,
  platformSecuredApi,
  trainingSecuredApi,
  userPublicApi,
} from "./config";

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

  getTrainingTeacherDetails: async (id: number | string) => {
    try {
      let result = await trainingSecuredApi.get(`/teachers/details/${id}`);
      return result;
    } catch (error) {
      throw error;
    }
  },

  innovationCreateByTeacher: async (data: TEACHER_SELF_INNOVATION) => {
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
      let result = await innovationSecuredApi.post("/create-teacher", formData);
      return result;
    } catch (error) {
      throw error;
    }
  },
  needAssistance: async (data: ASSISTANCE_RESPONSE_DATA_PROPS) => {
    try {
      let result = await needAssistance.post("/create", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getAllTickets: async () => {
    try {
      let result = await needAssistance.get("/all");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  requestHonorarium: async (data: REQUEST_HONORARIUM_REQUEST_PROPS) => {
    try {
      let result = await honorariumSecuredApi.post("/create", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getAllHonorariums: async () => {
    try {
      let result = await honorariumSecuredApi.get("/all");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getHonorariumsDetails: async (id: string) => {
    try {
      let result = await honorariumSecuredApi.get(`/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getDashboardStats: async () => {
    try {
      let result = await platformSecuredApi.get("/dashboard/teacher");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getAllnocs: async () => {
    try {
      let result = await nocSecuredApi.get("/all");
      return result;
    } catch (error) {
      throw error;
    }
  },
  downloadNoc: async (id: string) => {
    try {
      let result = await nocSecuredApi.get(`/${id}/download`);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
