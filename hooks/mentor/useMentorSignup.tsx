import { teacherController } from "@/app/api/teacherController";
import { MENTOR_SIGNUP_REQUEST } from "@/utils/type";
import { useState } from "react";

export const useMentorSignup = () => {
  const [loading, setLoading] = useState(false);
  const signupTeacher = async (data: MENTOR_SIGNUP_REQUEST) => {
    setLoading(true);
    return teacherController
      .signup(data)
      .then((res) => {
        console.log("res", res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error in teacher signup", err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signupTeacher, loading };
};
