import { batchControllers } from "@/app/api/batchControllers";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { useEffect, useState } from "react";

export const useBatches = (category: string) => {
  const [batchLoading, setBatchLoading] = useState(false);
  const [batchData, setBatchData] = useState<any[]>([]);
  useEffect(() => {
    const fetchBatches = async () => {
      setBatchLoading(true);
      batchControllers
        .getAllBatches(category)
        .then((res) => {
          setBatchData(res.data);
          setBatchLoading(false);
        })
        .catch((err) => {
          setBatchLoading(false);
        });
    };
    fetchBatches();
  }, [category]);

  return { batchData, batchLoading };
};

export const useAssignTeachersToBatch = () => {
  const [assignLoading, setAssignLoading] = useState(false);
  const { hideModal } = useModal();
  const { setSnackbar } = useSnackbar();

  const assignTeachersToBatch = async (data: {
    batchId: number;
    teacherIds: number[];
  }) => {
    setAssignLoading(true);
    try {
      const result = await batchControllers.assignTeachers(data);
      setSnackbar(
        result?.message || "Teachers assigned to batch successfully",
        "success",
      );
      hideModal();
      return result;
    } catch (error: any) {
      setSnackbar(
        error?.response?.data?.message || "Failed to assign teachers",
        "error",
      );
      throw error;
    } finally {
      setAssignLoading(false);
    }
  };

  return { assignLoading, assignTeachersToBatch };
};
