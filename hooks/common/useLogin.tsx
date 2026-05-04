import { AuthControllers } from "@/app/api/authControllers";
import { useState } from "react";
import { LOGIN_REQUEST } from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import useSnackbar from "@/store/useSnackbar";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  const login = async (data: LOGIN_REQUEST) => {
    setLoading(true);
    await AuthControllers.login(data)
      .then((res) => {
        // console.log("res", res);
        const tokens = res.data.tokens;

        localStorage.setItem("token", tokens?.accessToken);
        if (res.data.user.role === USER_ROLES.SCHOOL_ADMIN) {
          localStorage.setItem("role", USER_ROLES.INSTITUTION);
          router.push("/dashboard/institution");
        }
        if (res.data.user.role === USER_ROLES.TEACHER) {
          localStorage.setItem("role", USER_ROLES.EDUCATOR);
          router.push("/dashboard/educator");
        }

        setSnackbar("Login successful!", "success");
      })
      .catch((err) => {
        console.log("err", err);
        setSnackbar(
          err?.response?.data?.message || "Login failed. Please try again.",
          "error",
        );
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { login, loading };
};
