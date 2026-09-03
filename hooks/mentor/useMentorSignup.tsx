import { teacherController } from "@/app/api/teacherController";
import VerifyOtp from "@/components/modals/common/VerifyOtp";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { MENTOR_SIGNUP_REQUEST } from "@/utils/type";
import { useState } from "react";

export const useMentorSignup = () => {
  const [loading, setLoading] = useState(false);
  const { showModal } = useModal();
  const { setSnackbar } = useSnackbar();
  const signupTeacher = async (data: MENTOR_SIGNUP_REQUEST) => {
    setLoading(true);
    return teacherController
      .signup(data)
      .then((res) => {
        // console.log("res", res);
        setSnackbar(res.data.message, "success");
        showModal(<VerifyOtp email={data?.email} />);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in teacher signup", err);
        setSnackbar(
          err?.response?.data?.message || "Something went wrong",
          "error"
        );
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signupTeacher, loading };
};
