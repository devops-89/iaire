import { useMutation } from "@tanstack/react-query";
import { AuthControllers } from "../../app/api/authControllers";
import { LOGIN_REQUEST } from "@/utils/type";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LOGIN_REQUEST) => {
      return AuthControllers.login(data);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
