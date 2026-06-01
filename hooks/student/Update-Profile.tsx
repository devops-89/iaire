import { studentControllers } from "@/app/api/studentControllers";
import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { useState } from "react";

export const useUpdateProfileStudent = () => {
  const [loading, setLoading] = useState(false);

  const UpdateProfile = async (data: UPDATE_PROFILE_FORM_PROPS, id: number) => {
    setLoading(true);
    await studentControllers
      .updateSelfProfileBeforeSignup(data, id)
      .then((res) => {
        console.log("res", res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  return {
    UpdateProfile,
    loading,
  };
};
