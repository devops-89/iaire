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
};
