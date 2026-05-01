import { COUNTRYDATAPROPS } from "@/utils/type";
import { basePublicApi } from "./config";

export const countryControllers = {
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

  getInstitutionByBoard: async ({
    country,
    boardId,
  }: {
    country: COUNTRYDATAPROPS;
    boardId: string;
  }) => {
    try {
      const result = await basePublicApi.get(
        `/countries/${country?.id}/schools?${country?.code == "IN" ? `boardId=${boardId}` : `${country?.code === "US" ? `isdName=${boardId}` : ``}`}`,
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
