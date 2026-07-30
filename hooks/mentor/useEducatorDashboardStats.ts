"use client";
import { teacherController } from "@/app/api/teacherController";
import { useEffect, useState } from "react";

export const useEducatorDashboardStats = () => {
  const [loading, setLoading] = useState(false);
  const [statsData, setStatsData] = useState<any>(null);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await teacherController.getDashboardStats();
      if (res?.success && res?.data) {
        setStatsData(res.data);
      } else if (res?.data) {
        setStatsData(res.data);
      } else if (res) {
        setStatsData(res);
      }
    } catch (err) {
      console.log("Error fetching educator dashboard stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { statsData, loading, fetchStats };
};
