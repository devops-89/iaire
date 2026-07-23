import { useState } from "react";
import { AuthControllers } from "@/app/api/authControllers";
import useSnackbar from "@/store/useSnackbar";

export const useForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useSnackbar();

  const forgetPassword = async (email: string) => {
    if (!email) {
      setSnackbar(
        "Please enter your email address first to reset password",
        "error"
      );
      return false;
    }

    try {
      setLoading(true);
      const res = await AuthControllers.forgetPassword(email);
      setSnackbar(
        res?.message || "Password reset link sent to your email",
        "success"
      );
      return true;
    } catch (error: any) {
      setSnackbar(
        error?.response?.data?.message || "Failed to send reset link",
        "error"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (data: any) => {
    try {
      setLoading(true);
      const res = await AuthControllers.resetPassword(data);
      setSnackbar(
        res?.message || "Password reset successfully",
        "success"
      );
      return true;
    } catch (error: any) {
      setSnackbar(
        error?.response?.data?.message || "Failed to reset password",
        "error"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { forgetPassword, resetPassword, loading };
};
