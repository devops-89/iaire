import { useState } from "react";
import { schoolControllers } from "@/app/api/schoolControllers";
import { REPORT_MENTOR_PROPS } from "@/utils/type";
import useSnackbar from "@/store/useSnackbar";
import { useModal } from "@/store/useModal";

export const useReportTeacher = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useSnackbar();
  const { hideModal } = useModal();

  const reportTeacher = async (data: REPORT_MENTOR_PROPS) => {
    setLoading(true);
    await schoolControllers
      .reportTeacher(data)
      .then((res) => {
        setSnackbar(res?.message || "Report submitted successfully", "success");
        setLoading(false);
        hideModal();
      })
      .catch((err) => {
        const error =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong";
        setSnackbar(error, "error");
        setLoading(false);
      });
  };

  return { loading, reportTeacher };
};
