"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";

const PayDuesHeader = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontWeight: 700,
          color: COLORS.PRIMARY_NAVY,
          mb: 1,
        }}
      >
        Membership Dues
      </Typography>
      <Typography
        sx={{
          fontFamily: montserrat.style.fontFamily,
          color: "rgba(0,0,0,0.6)",
        }}
      >
        Securely pay your institutional membership dues to maintain access to premium features.
      </Typography>
    </Box>
  );
};

export default PayDuesHeader;
