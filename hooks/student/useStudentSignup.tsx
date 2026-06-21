import { studentControllers } from "@/app/api/studentControllers";
import VerifyOtp from "@/components/modals/common/VerifyOtp";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { useState } from "react";

export const useStudentSignup = () => {
  const [loading, setLoading] = useState(false);
  const { showModal } = useModal();
  const { setSnackbar } = useSnackbar();

  const signupStudent = async (data: any) => {
    setLoading(true);
    return studentControllers
      .signup(data)
      .then((res) => {
        setSnackbar(res.data?.message || "Registration initiated", "success");
        showModal(<VerifyOtp email={data?.email} />);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in student signup", err);
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong";
        setSnackbar(errorMessage, "error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { signupStudent, loading };
};
