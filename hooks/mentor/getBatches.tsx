import { batchControllers } from "@/app/api/batchControllers";
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
          setBatchData(res.data.data);
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
