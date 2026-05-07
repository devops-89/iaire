import { ALL_USER_REQUEST_PROPS, InstitutionInfo } from "@/utils/type";
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

  getAllUsers: async ({
    page,
    limit,
    role,
    approvalStatus,
  }: ALL_USER_REQUEST_PROPS) => {
    try {
      const params = Object.fromEntries(
        Object.entries({ page, limit, role, approvalStatus }).filter(
          ([_, v]) => v !== null && v !== undefined && v !== "",
        ),
      );
      const result = await userSecuredApi.get("/all", {
        params,
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  updateUserStatus: async (id: string | number, status: APPROVAL_STATUS) => {
    try {
      const result = await userSecuredApi.patch(`/${id}/school-admin-approve`, {
        status,
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
};
