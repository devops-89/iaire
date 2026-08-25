import { useState } from "react";
import { userControllers } from "@/app/api/userControllers";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { recommendHeadBoyOrGirl as recommendHeadBoyOrGirlType } from "@/utils/type";

export const useRecommendHeadBoyOrGirl = () => {
  const [loading, setLoading] = useState(false);
  const { hideModal } = useModal();
  const { setSnackbar } = useSnackbar();

  const recommendHeadBoyOrGirl = async (data: recommendHeadBoyOrGirlType) => {
    setLoading(true);
    userControllers
      .recommendHeadBoyOrGirl(data)
      .then((res) => {
        setSnackbar(res?.message || "Successfully nominated!", "success");
        hideModal();
      })
      .catch((err) => {
        console.log("error in recommend head boy/girl", err);
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong";
        setSnackbar(errorMessage, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, recommendHeadBoyOrGirl };
};
