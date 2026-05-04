import { schoolControllers } from "@/app/api/schoolControllers";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import {
  INSTITUTION_ADD_EDUCATOR_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
} from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useTeacherAddBySchool = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setSnackbar } = useSnackbar();
  const addTeacher = async (data: INSTITUTION_ADD_EDUCATOR_REQUEST) => {
    setLoading(true);
    await schoolControllers
      .createTeacher(data)
      .then((res) => {
        setSnackbar(res.data.message, "success");
        setLoading(false);
        router.push("/dashboard/institution/educator-management");
      })
      .catch((err) => {
        const error = err.data || err.data.message || console.log("err", err);
        setLoading(false);
      });
  };
  return { loading, addTeacher };
};

export const useNominateTeacherForTraining = () => {
  const [nominateLoading, setNominateLoading] = useState(false);
  const { setSnackbar } = useSnackbar();
  const { hideModal } = useModal();
  const nominateTeacher = async (
    data: NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
  ) => {
    setNominateLoading(true);
    await schoolControllers
      .nominateTeacherForTraining(data)
      .then((res) => {
        setSnackbar(res.data.message, "success");
        setNominateLoading(false);
        hideModal();
      })
      .catch((err) => {
        const error = err.data || err.data.message || "Something Went Wrong";
        setSnackbar(error, "error");
        setNominateLoading(false);
      });
  };
  return { nominateLoading, nominateTeacher };
};
