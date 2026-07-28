import { batchSecuredApi } from "./config";

export const batchControllers = {
  getAllBatches: async (category?: string) => {
    try {
      const result = await batchSecuredApi.get("/all", {
        params: { search: category },
      });
      return result?.data;
    } catch (error) {
      throw error;
    }
  },
  assignTeachers: async (data: {
    batchId: number;
    participantIds: number[];
  }) => {
    try {
      const result = await batchSecuredApi.post("/assign-teachers", data);
      return result?.data;
    } catch (error) {
      throw error;
    }
  },
};
