import {
  INSTITUTION_ADD_EDUCATOR_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
} from "@/utils/type";
import { trainingSecuredApi, userSecuredApi } from "./config";

export const schoolControllers = {
  createTeacher: async (data: INSTITUTION_ADD_EDUCATOR_REQUEST) => {
    try {
      const result = await userSecuredApi.post("/create-teacher", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  nominateTeacherForTraining: async (
    data: NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
  ) => {
    try {
      const result = await trainingSecuredApi.post("/nominate-teacher", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
