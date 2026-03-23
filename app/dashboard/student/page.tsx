import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import React from "react";

import WelcomeBanner from "@/components/dashboard/student/WelcomeBanner";
import StatsCards from "@/components/dashboard/student/StatsCards";
import CourseProgress from "@/components/dashboard/student/CourseProgress";
import UpcomingSchedules from "@/components/dashboard/student/UpcomingSchedules";
import { Grid } from "@mui/material";

const StudentDashboard = () => {
  return (
    <StudentDashboardLayout>
      <WelcomeBanner name="Student" />
      <StatsCards />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <CourseProgress />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <UpcomingSchedules />
        </Grid>
      </Grid>
    </StudentDashboardLayout>
  );
};

export default StudentDashboard;
