"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";

const WelcomeBanner = ({ name = "Student" }: { name?: string }) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        borderRadius: "20px",
        p: { xs: 3, md: 5 },
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        mb: 4,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.ACCENT_TAN}22 0%, transparent 70%)`,
        },
      }}
    >
      <Typography
        sx={{
          color: COLORS.ACCENT_TAN,
          fontFamily: montserrat.style.fontFamily,
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        {today}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: COLORS.WHITE,
          fontFamily: roboto.style.fontFamily,
          fontWeight: 700,
          fontSize: { xs: "24px", md: "36px" },
          mb: 1,
        }}
      >
        Welcome back, {name}! 👋
      </Typography>
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: montserrat.style.fontFamily,
          fontSize: "16px",
        }}
      >
        Everything you need to manage your learning journey is right here.
      </Typography>
    </Box>
  );
};

export default WelcomeBanner;
