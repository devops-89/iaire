import {
  ALL_USER_REQUEST_PROPS,
  InstitutionInfo,
  recommendHeadBoyOrGirl,
} from "@/utils/type";
import { basePublicApi, userPublicApi, userSecuredApi } from "./config";
import { APPROVAL_STATUS } from "@/utils/enum";

export const userControllers = {
  signupSchool: async (data: InstitutionInfo) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as any);
        }
      });

      const result: any = await userPublicApi.post(
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

  getAllUsers: async ({
    page,
    limit,
    role,
    approvalStatus,
    search,
    isComplete,
    userId,
  }: ALL_USER_REQUEST_PROPS) => {
    try {
      const params = Object.fromEntries(
        Object.entries({
          page,
          limit,
          role,
          approvalStatus,
          search,
          isComplete,
          userId,
        }).filter(([_, v]) => v !== null && v !== undefined && v !== ""),
      );
      const result = await userSecuredApi.get("/all", {
        params,
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  updateUserStatus: async (
    id: string | number,
    status: APPROVAL_STATUS,
    rejectReason?: string,
  ) => {
    try {
      const result = await userSecuredApi.patch(`/${id}/school-admin-approve`, {
        status,
        ...(rejectReason ? { rejectReason } : {}),
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  getUserDetails: async () => {
    try {
      const result = await userSecuredApi.get("/details");
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getUserDetailsPublic: async ({ userId }: { userId: string | null }) => {
    try {
      const result = await userPublicApi.get(`public/details/${userId}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  getUserDetailsById: async ({ userId }: { userId: string | null }) => {
    try {
      const result = await userSecuredApi.get(`details/${userId}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  recommendHeadBoyOrGirl: async (data: recommendHeadBoyOrGirl) => {
    const { id, ...payload } = data;
    try {
      const result = await userSecuredApi.post(`nominate-head/${id}`, payload);
      return result.data;
    } catch (err) {
      throw err;
    }
  },
};
