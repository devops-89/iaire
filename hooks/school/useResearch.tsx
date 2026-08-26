import { schoolControllers } from "@/app/api/schoolControllers";
import {
  RESEARCH_FORM_PROPS,
  RESEARCH_SUBMISSION_RESPONSE_DATA_PROPS,
} from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateResearch = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const addResearch = async (data: RESEARCH_FORM_PROPS) => {
    setLoading(true);
    await schoolControllers
      .createResearch(data)
      .then((res) => {
        setLoading(false);

        router.back();
      })
      .catch((err) => {
        console.log("error in research", err);
        setLoading(false);
      });
  };
  return { addResearch, loading };
};

export const useGetAllResearch = () => {
  const [loading, setLoading] = useState(false);

  const [researchData, setResearchData] =
    useState<RESEARCH_SUBMISSION_RESPONSE_DATA_PROPS[]>();

  const fetchResearchData = async () => {
    await schoolControllers
      .getAllResearch()
      .then((res) => {
        setResearchData(res?.data?.data);
      })
      .catch((err) => {
        console.log("error in research response", err);
      });
  };

  return { fetchResearchData, researchData, loading };
};
