import { studentControllers } from "@/app/api/studentControllers";
import { useState } from "react";

export const useDashboardStats = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const getStudentDashboardCount = () => {
    studentControllers
      .getStudentDashboard()
      .then((res) => {
        // console.log("res", res);
        setStats(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };
  return {
    getStudentDashboardCount,
    stats,
    loading,
  };
};
