import { schoolControllers } from "@/app/api/schoolControllers";
import useSnackbar from "@/store/useSnackbar";
import { INSTITUTION_ADD_EDUCATOR_REQUEST } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useTeacherAddBySchool = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setSnackbar } = useSnackbar();
  const addTeacher = async (data: INSTITUTION_ADD_EDUCATOR_REQUEST) => {
    setLoading(true);
    await schoolControllers
      .createTeacher(data)
      .then((res) => {
        setSnackbar(res.data.message, "success");
        setLoading(false);
        router.push("/dashboard/institution/educator-management");
      })
      .catch((err) => {
        const error = err.data || err.data.message || console.log("err", err);
        setLoading(false);
      });
  };
  return { loading, addTeacher };
};
