import React from "react";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import CurrentPlanCard from "@/components/dashboard/student/membership/CurrentPlanCard";
import PaymentHistory from "@/components/dashboard/student/membership/PaymentHistory";
import UpgradePlans from "@/components/dashboard/student/membership/UpgradePlans";
import { Box, Typography } from "@mui/material";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const MembershipManagement = () => {
  return (
    <StudentDashboardLayout>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontFamily: roboto.style.fontFamily,
            color: COLORS.PRIMARY_NAVY,
            mb: 1,
          }}
        >
          Membership Management
        </Typography>
        <Typography
          sx={{
            color: "rgba(0,0,0,0.5)",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          View your current plan, billing history, and upgrade options.
        </Typography>
      </Box>

      <CurrentPlanCard />
      <PaymentHistory />
      <UpgradePlans />
    </StudentDashboardLayout>
  );
};

export default MembershipManagement;
