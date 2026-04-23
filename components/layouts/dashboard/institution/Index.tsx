import { Box } from "@mui/material";
import React from "react";

const InstitutionDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Box
        sx={{
          ml: { xs: 0, md: "250px" },
          pt: "90px",
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
