"use client";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import React from "react";

import { Grid } from "@mui/material";
import Dashboard from "@/components/layouts/dashboard/student/Dashboard";

const StudentDashboard = () => {
  return (
    <StudentDashboardLayout>
      <Dashboard />
    </StudentDashboardLayout>
  );
};

export default StudentDashboard;
