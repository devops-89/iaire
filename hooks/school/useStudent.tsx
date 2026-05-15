import { schoolControllers } from "@/app/api/schoolControllers";
import useSnackbar from "@/store/useSnackbar";
import { INSTITUTION_ADD_STUDENT_REQUEST } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useAddStudent = () => {
  const [createLoading, setCreateLoading] = useState(false);
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  const createStudent = (data: INSTITUTION_ADD_STUDENT_REQUEST) => {
    setCreateLoading(true);
    schoolControllers
      .createStudent(data)
      .then((res) => {
        setSnackbar(res?.data?.message, "success");
        setCreateLoading(false);
        router.back();
      })
      .catch((err) => {
        console.log("first", err);
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong";
        setSnackbar(errorMessage, "error");
        setCreateLoading(false);
      });
  };

  return { createLoading, createStudent };
};
