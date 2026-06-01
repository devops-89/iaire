import { schoolControllers } from "@/app/api/schoolControllers";
import {
  INNOVATION_FORM_PROPS,
  INNOVATION_RESPONSE_DATA_PROPS,
  SCHOOL_ADD_INNOVATION_REQUEST_PROPS,
} from "@/utils/type";
import { useState } from "react";

export const useCreateInnovation = () => {
  const [loading, setLoading] = useState(false);

  const createInnovation = async (data: INNOVATION_FORM_PROPS) => {
    setLoading(true);
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
        console.log("data in Innovation List>>>>>>", res);
        const data = res.data.data;

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
