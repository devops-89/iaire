import { InstitutionInfo } from "@/utils/type";
import { publicApi, userPublicApi } from "./config";

export const userControllers = {
  signupSchool: async (data: InstitutionInfo) => {
    try {
      const result = await userPublicApi.post(
        "/self-register-school-admin",
        data,
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getCountries: async () => {
    try {
      const result = await publicApi.get("/countries/dropdown");
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  getBoardByCountry: async (country: string) => {
    try {
      const result = await publicApi.get(`/boards/dropdown?country=${country}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
