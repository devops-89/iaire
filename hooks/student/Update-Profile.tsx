import { studentControllers } from "@/app/api/studentControllers";
import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useUpdateProfileStudent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const UpdateProfile = async (data: UPDATE_PROFILE_FORM_PROPS, id: number) => {
    setLoading(true);
    await studentControllers
      .updateSelfProfileBeforeSignup(data, id)
      .then((res) => {
        const tokens = res?.tokens;
        const user = res?.user;

        if (tokens) {
          localStorage.setItem("token", tokens.accessToken);
          localStorage.setItem("refreshToken", tokens.refreshToken);
        }
        if (user?.role) {
          localStorage.setItem("role", user.role);
        }

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
