import {
  CREATE_TEAM_REQUEST,
  INSTITUTION_ADD_EDUCATOR_REQUEST,
  INSTITUTION_ADD_STUDENT_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
  SCHOOL_ADD_INNOVATION_REQUEST_PROPS,
} from "@/utils/type";
import {
  innovationSecuredApi,
  teamSecuredApi,
  trainingSecuredApi,
  userSecuredApi,
} from "./config";
import { CATEGORY } from "@/utils/enum";

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
    id: number | string,
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
  getTeam: async ({ type }: { type?: CATEGORY }) => {
    try {
      const result = await teamSecuredApi.get("/all", {
        params: {
          type: type,
        },
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  addInnovationBySchool: async (data: SCHOOL_ADD_INNOVATION_REQUEST_PROPS) => {
    try {
      if (data.attomeyFinalTemplate) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            formData.append(key, value as any);
          }
        });
        const result = await innovationSecuredApi.post("/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return result.data;
      }
      const result = await innovationSecuredApi.post("/create", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  getAllInnovations: async () => {
    try {
      let result = await innovationSecuredApi.get("/all");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
