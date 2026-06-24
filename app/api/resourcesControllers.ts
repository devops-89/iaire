import { resourcesSecuredApi } from "./config";

export const ResourceControllers = {
  getAllResources: async () => {
    try {
      const result = await resourcesSecuredApi.get("/all");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
