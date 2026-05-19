import {
  CREATE_TEAM_REQUEST,
  INSTITUTION_ADD_EDUCATOR_REQUEST,
  INSTITUTION_ADD_STUDENT_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
} from "@/utils/type";
import { teamSecuredApi, trainingSecuredApi, userSecuredApi } from "./config";

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
  getAllNominatingTeacher: async () => {
    try {
      const result = await trainingSecuredApi.get("/all-nominating-teacher");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  createStudent: async (data: INSTITUTION_ADD_STUDENT_REQUEST) => {
    try {
      let result = await userSecuredApi.post("/create-student", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  approveTeacherNomination: async (
    id: string,
    status: string,
    rejectReason?: string,
  ) => {
    try {
      const result = await trainingSecuredApi.patch(`school-approve/${id}`, {
        action: status,
        ...(rejectReason && { rejectReason }),
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  createTeam: async (data: CREATE_TEAM_REQUEST) => {
    try {
      const result = await teamSecuredApi.post("/create", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
