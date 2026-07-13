import { schoolControllers } from "@/app/api/schoolControllers";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import {
  INSTITUTION_ADD_EDUCATOR_REQUEST,
  NOMINATE_TEACHER_FOR_TRAINING_REQUEST,
} from "@/utils/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMakePayment } from "../common/useCreatePayment";

export const useTeacherAddBySchool = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { makePayment } = useMakePayment();
  const { setSnackbar } = useSnackbar();
  const addTeacher = async ({
    data,
    planId,
  }: {
    data: INSTITUTION_ADD_EDUCATOR_REQUEST;
    planId?: number | string;
  }) => {
    setLoading(true);
    await schoolControllers
      .createTeacher(data)
      .then((res) => {
        const userId = res.data.data.id;
        // if (data?.isSchoolPay && planId) {
        //   makePayment({ planId, userId });
        // } else {
        //   router.push("/dashboard/institution/educator-management");
        // }
        router.push("/dashboard/institution/educator-management");

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        const error =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong";
        setSnackbar(error, "error");
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
        const error =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong";
        setSnackbar(error, "error");
        setNominateLoading(false);
      });
  };
  return { nominateLoading, nominateTeacher };
};

export const useGetNomineeTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [nominatedTeacherData, setNominatedTeacherData] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetchNominatedTeacher = async () => {
      await schoolControllers
        .getAllNominatingTeacher()
        .then((res) => {
          console.log("ress", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    fetchNominatedTeacher();
  }, []);
  return { loading, nominatedTeacherData };
};

export const useApprovedNominateTeacher = () => {
  const [approveTeacherNominationLoading, setApproveTeacherNominationLoading] =
    useState(false);

  const ApproveTeacherNomination = async (
    id: number | string,
    status: string,
  ) => {
    setApproveTeacherNominationLoading(true);
    await schoolControllers
      .approveTeacherNomination(id, status)
      .then((res) => {
        console.log("res", res);
        setApproveTeacherNominationLoading(false);
      })
      .catch((err) => {
        console.log("error in approve teacher nomination", err);
        setApproveTeacherNominationLoading(false);
      });
  };
  return { approveTeacherNominationLoading, ApproveTeacherNomination };
};
