import { schoolControllers } from "@/app/api/schoolControllers";
import { useState, useEffect } from "react";

export const useSchoolDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await schoolControllers.dashboardAnalytics();
      console.log("School Dashboard API Response:", res);
      // The API return structure: schoolControllers.dashboardAnalytics returns result.data
      // Let's support both nested data structures just in case
      const payload = res?.data !== undefined ? res.data : res;
      setDashboardData(payload);
    } catch (err: any) {
      console.error("Error fetching school dashboard analytics:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return { loading, dashboardData, fetchDashboardData, error };
};
