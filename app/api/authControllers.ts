import { LOGIN_REQUEST, VERIFY_OTP_REQUEST } from "@/utils/type";
import { authApi } from "./config";

export const AuthControllers = {
  verifyOtp: async ({ email, otp }: VERIFY_OTP_REQUEST) => {
    try {
      const result = await authApi.post("/verify-email", { email, otp });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  login: async ({ identifier, password }: LOGIN_REQUEST) => {
    try {
      const result = await authApi.post("/login", { identifier, password });
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  forgetPassword: async (identifier: string) => {
    try {
      const result = await authApi.post("/forgot-password", {
        identifier: identifier,
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  },
  resetPassword: async (data: any) => {
    try {
      const result = await authApi.patch("/reset-password", data);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
