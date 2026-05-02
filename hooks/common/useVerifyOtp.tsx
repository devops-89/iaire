import { VERIFY_OTP_REQUEST } from "@/utils/type";
import { AuthControllers } from "@/app/api/authControllers";
import { useState } from "react";
import { USER_ROLES } from "@/utils/enum";
import { useRouter } from "next/navigation";
import { useModal } from "@/store/useModal";

export const useVerifyOtp = ({ email, otp }: VERIFY_OTP_REQUEST) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { hideModal } = useModal();
  const verifyOtp = async () => {
    try {
      setLoading(true);
      const result = await AuthControllers.verifyOtp({ email, otp });
      const tokens = result?.data?.tokens;
      const user = result.data.user;
      localStorage.setItem("token", tokens?.accessToken);
      if (user?.role === USER_ROLES.SCHOOL_ADMIN) {
        localStorage.setItem("role", USER_ROLES.INSTITUTION);
        router.push(`/signup/payment?role=${USER_ROLES.INSTITUTION}`);
        hideModal();
      } else if (user?.role === USER_ROLES.TEACHER) {
        localStorage.setItem("role", USER_ROLES.EDUCATOR);
        router.push(`/signup/payment?role=${USER_ROLES.EDUCATOR}`);
        hideModal();
      }
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, verifyOtp };
};
