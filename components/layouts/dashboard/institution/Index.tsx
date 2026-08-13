import { useSignup } from "@/store/useSignup";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { Backdrop, Box, Typography } from "@mui/material";
import React from "react";

const InstitutionDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { institutionData } = useSignup();
  // console.log("institutionData", institutionData);
  const isMember = institutionData?.payments?.some(
    (val: any) => val.membership?.status === "ACTIVE",
  );
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Box
        sx={{
          ml: { xs: 0, md: "250px" },
          pt: "120px",
          pb: 4,
          px: { xs: 2, md: 4, lg: 6 },
          transition: "margin-left 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default InstitutionDashboardLayout;
