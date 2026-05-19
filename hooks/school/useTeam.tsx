import { schoolControllers } from "@/app/api/schoolControllers";
import { useModal } from "@/store/useModal";
import { CREATE_TEAM_REQUEST } from "@/utils/type";
import { useState } from "react";

export const useAddTeam = () => {
  const [loading, setLoading] = useState(false);
  const { hideModal } = useModal();
  const createTeam = async (data: CREATE_TEAM_REQUEST) => {
    setLoading(true);
    schoolControllers
      .createTeam(data)
      .then((res) => {
        console.log("res", res);
        hideModal();
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in creating team", err);
        setLoading(false);
      });
  };

  return { loading, createTeam };
};

// export const
