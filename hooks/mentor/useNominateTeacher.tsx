"use client";
import { teacherController } from "@/app/api/teacherController";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { NOMINATE_TEACHER_FOR_TRAINING_REQUEST } from "@/utils/type";
import { useEffect, useState } from "react";

export const useTrainingList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getTeacherTrainingList = async (status?: string) => {
    setLoading(true);
    await teacherController
      .getTeacherSelfNominatedList(status)
      .then((res) => {
        // console.log("res", res);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  return { loading, data, getTeacherTrainingList };
};

export const useSelfNominateTeacher = (onSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);
  const { hideModal } = useModal();
  const { setSnackbar } = useSnackbar();
  const selfNominateTeacher = async (
    data: NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
  ) => {
    setLoading(true);
    await teacherController
      .teacherSelfNominated(data)
      .then((res) => {
        // console.log("res", res);
        setSnackbar(res.data.message, "success");
        hideModal();
        if (onSuccess) onSuccess();

        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        // let errMessage =
        //   err.response || err.response.data.message || err.response;
        setLoading(false);
      });
  };
  return { loading, selfNominateTeacher };
};
