"use client";
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  School,
  Lightbulb,
  Description,
  VerifiedUser,
} from "@mui/icons-material";

const stats = [
  {
    label: "Total Educators",
    value: "24",
    icon: <School sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    trend: "+2 this month",
  },
  {
    label: "Innovations",
    value: "08",
    icon: <Lightbulb sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    trend: "3 under review",
  },
  {
    label: "Research Papers",
    value: "15",
    icon: <Description sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    trend: "5 published",
  },
  {
    label: "Membership",
    value: "Active",
    icon: <VerifiedUser sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    trend: "Renew in 45 days",
  },
];

const InstitutionStatsCards = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((stat, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "20px",
              border: "1px solid #f0f0f0",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                borderColor: COLORS.ACCENT_TAN,
                "& .icon-bg": {
                  transform: "scale(1.1)",
                  backgroundColor: COLORS.ACCENT_TAN,
                  "& svg": { color: COLORS.WHITE },
                },
              },
            }}
          >
            <Box
              className="icon-bg"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(209, 160, 84, 0.1)",
                transition: "all 0.3s ease",
                mb: 1,
              }}
            >
              {stat.icon}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.5)",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                  fontFamily: roboto.style.fontFamily,
                  lineHeight: 1.2,
                  my: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: COLORS.ACCENT_TAN,
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 500,
                }}
              >
                {stat.trend}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default InstitutionStatsCards;
