import { schoolControllers } from "@/app/api/schoolControllers";
import {
  INNOVATION_FORM_PROPS,
  INNOVATION_RESPONSE_DATA_PROPS,
  SCHOOL_ADD_INNOVATION_REQUEST_PROPS,
} from "@/utils/type";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSnackbar from "@/store/useSnackbar";

export const useCreateStudentInnovation = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setSnackbar } = useSnackbar();

  const createStudentInnovation = async (data: any, isDraft: boolean) => {
    setLoading(true);

    const payload: SCHOOL_ADD_INNOVATION_REQUEST_PROPS = {
      title: data.title,
      problemDescription: data.problemDescription,
      solution: data.solutionDescription,
      attomeyFinalTemplate: data.file,
    };
    if (isDraft) {
      payload.isDraft = true;
    }

    try {
      const res = await schoolControllers.addInnovationBySchool(payload);
      setSnackbar(
        res?.message || "Innovation created successfully!",
        "success",
      );
      router.back();
    } catch (err: any) {
      console.log("Error creating student innovation:", err);
      const errMsg = err?.response?.data?.message || "Something went wrong";
      setSnackbar(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, createStudentInnovation };
};

export const useCreateInnovation = () => {
  const [loading, setLoading] = useState(false);

  const createInnovation = async (data: INNOVATION_FORM_PROPS) => {
    setLoading(true);
    const router = useRouter();
    const payload: SCHOOL_ADD_INNOVATION_REQUEST_PROPS = {
      title: data.title,
      problemDescription: data.problemDescription,
      solution: data.solutionDescription,
      teamId: data.team?.id,
      attomeyFinalTemplate: data.file,
    };
    schoolControllers
      .addInnovationBySchool(payload)
      .then((res) => {
        console.log("res", res);
        router.back();
      })
      .catch((err) => {
        console.log("error in creating innovation", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, createInnovation };
};

export const useGetAllInnovation = () => {
  const [loading, setLoading] = useState(false);

  const [innovationData, setInnovationData] =
    useState<INNOVATION_RESPONSE_DATA_PROPS[]>();
  const fetchInnovationList = () => {
    setLoading(true);
    schoolControllers
      .getAllInnovations()
      .then((res) => {
        const data = res.data;

        setInnovationData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in innovation list", err);
        setLoading(false);
      });
  };

  return { innovationData, fetchInnovationList, loading };
};

export const useGetInnovationDetails = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [innovationDetails, setInnovationDetails] =
    useState<INNOVATION_RESPONSE_DATA_PROPS | null>(null);

  const fetchInnovationDetails = () => {
    if (!id) return;
    setLoading(true);
    schoolControllers
      .getInnovationDetails(id)
      .then((res) => {
        setInnovationDetails(res?.data?.data || res?.data || res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in fetching innovation details", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInnovationDetails();
  }, [id]);

  return { loading, innovationDetails, fetchInnovationDetails };
};
