"use client";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import WelcomeBanner from "@/components/dashboard/student/WelcomeBanner";
import React, { useEffect, useState } from "react";
import { useSignup } from "@/store/useSignup";
import SchoolStatsCards from "@/components/dashboard/school/SchoolStatsCards";
import SubmissionStatus from "@/components/dashboard/school/SubmissionStatus";
import TeacherOverview from "@/components/dashboard/school/TeacherOverview";
import MembershipProgress from "@/components/dashboard/school/MembershipProgress";
import { Grid, Box } from "@mui/material";
import { MEMBERSHIP_LEVEL } from "@/utils/type";

const SchoolDashboard = () => {
  const { schoolData: schoolInfo } = useSignup();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SchoolDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 } }}>
        <WelcomeBanner name={schoolInfo?.schoolName || "School"} />
        <MembershipProgress 
          currentLevel={schoolInfo?.membershipLevel || MEMBERSHIP_LEVEL.INSTITUTIONAL}
          teachers={schoolInfo?.certifiedTeachers || 0}
          publications={schoolInfo?.publications || 0}
          approved={schoolInfo?.hasSelectionBoardApproval || false}
        />
        <SchoolStatsCards />
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <SubmissionStatus />
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <TeacherOverview />
          </Grid>
        </Grid>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default SchoolDashboard;
