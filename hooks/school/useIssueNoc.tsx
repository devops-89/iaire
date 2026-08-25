import { useState } from "react";
import { schoolControllers } from "@/app/api/schoolControllers";
import { NOC_PROPS_DATA } from "@/utils/type";
import useSnackbar from "@/store/useSnackbar";
import { useModal } from "@/store/useModal";

export const useIssueNoc = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useSnackbar();
  const { hideModal } = useModal();

  const issueNoc = async (data: NOC_PROPS_DATA) => {
    setLoading(true);
    await schoolControllers
      .issueNoc(data)
      .then((res) => {
        setSnackbar(res.data?.message || "NOC issued successfully", "success");
        setLoading(false);
        hideModal();
      })
      .catch((err) => {
        const error =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong";
        setSnackbar(error, "error");
        setLoading(false);
      });
  };

  return { loading, issueNoc };
};
