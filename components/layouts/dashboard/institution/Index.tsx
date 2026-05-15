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
          pt: "90px",
          pb: 4,
          px: { xs: 2, md: 4, lg: 6 },
          transition: "margin-left 0.3s ease",
        }}
      >
        <Backdrop
          open={!isMember}
          sx={{
            zIndex: 9999,
            color: "#000",
            "&.MuiBackdrop-root": {
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              ml: { xs: 0, md: "250px" },
              mt: "70px",
              backdropFilter: "blur(15px)",
              width: { xs: "100%", md: "calc(100% - 250px)" },
              height: "calc(100% - 70px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: 30, textAlign: "center", color: COLORS.WHITE }}
            >
              Your membership is not active
            </Typography>
            <Typography sx={{ color: COLORS.WHITE, fontSize: 18, mt: 1 }}>
              Activate your membership now to unlock full access to your
              educator dashboard and features.
            </Typography>
          </Box>
        </Backdrop>
        {children}
      </Box>
    </Box>
  );
};

export default InstitutionDashboardLayout;
