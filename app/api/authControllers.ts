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
};
