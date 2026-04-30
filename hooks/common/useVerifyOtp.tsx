import { VERIFY_OTP_REQUEST } from "@/utils/type";
import { AuthControllers } from "@/app/api/authControllers";
import { useState } from "react";

export const useVerifyOtp = ({ email, otp }: VERIFY_OTP_REQUEST) => {
  const [loading, setLoading] = useState(false);

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const result = await AuthControllers.verifyOtp({ email, otp });
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, verifyOtp };
};
