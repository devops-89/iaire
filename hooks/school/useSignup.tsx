import { teacherController } from "@/app/api/teacherController";
import { userControllers } from "@/app/api/userControllers";
import VerifyOtp from "@/components/modals/common/VerifyOtp";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { InstitutionInfo } from "@/utils/type";
import { useEffect, useState } from "react";

export const useSchoolSignup = () => {
  const [loading, setLoading] = useState(false);
  const { showModal, hideModal } = useModal();
  const { setSnackbar } = useSnackbar();

  const createSchool = async (data: InstitutionInfo) => {
    setLoading(true);
    await userControllers
      .signupSchool(data)
      .then((res) => {
        setSnackbar(res.data.message, "success");
        showModal(<VerifyOtp email={data.email} />);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong";
        setSnackbar(errorMessage, "error");
      });
  };

  return { createSchool, loading };
};
