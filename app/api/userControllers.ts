import { InstitutionInfo } from "@/utils/type";
import { basePublicApi, userPublicApi } from "./config";

export const userControllers = {
  signupSchool: async (data: InstitutionInfo) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as any);
        }
      });

      const result = await userPublicApi.post(
        "/self-register-school-admin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getCountries: async () => {
    try {
      const result = await basePublicApi.get("/countries/dropdown");
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  getBoardByCountry: async (country: string) => {
    try {
      const result = await basePublicApi.get(
        `/boards/dropdown?country=${country}`,
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  getIsdByCountry: async (country: number) => {
    try {
      const result = await basePublicApi.get(`/countries/${country}/isd`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
