import { planControllers } from "@/app/api/planControllers";
import { PLAN_RESPONSE_PROPS } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetPlans = ({ role }: { role: string }) => {
  const [planData, setPlanData] = useState<PLAN_RESPONSE_PROPS[]>([]);
  const [planLoading, setPlanLoading] = useState(false);
  // console.log("first")

  useEffect(() => {
    const fetchPlans = async () => {
      setPlanLoading(true);
      try {
        const res = await planControllers.getAllPlans(role);
        setPlanData(res.data.data || []);
      } catch (err) {
        console.log("error in fetching plans", err);
      } finally {
        setPlanLoading(false);
      }
    };

    if (role) {
      fetchPlans();
    }
  }, [role]);

  return { planData, planLoading };
};
