"use client";
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  MenuBook,
  CheckCircle,
  AccessTime,
  Assignment,
} from "@mui/icons-material";

const stats = [
  {
    label: "Active Courses",
    value: "12",
    icon: <MenuBook sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    color: "#E3F2FD",
  },
  {
    label: "Completed",
    value: "45",
    icon: <CheckCircle sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    color: "#E8F5E9",
  },
  {
    label: "Hours Spent",
    value: "128h",
    icon: <AccessTime sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    color: "#FFF3E0",
  },
  {
    label: "Assignments",
    value: "05",
    icon: <Assignment sx={{ fontSize: 32, color: COLORS.ACCENT_TAN }} />,
    color: "#F3E5F5",
  },
];

const StatsCards = () => {
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
              alignItems: "center",
              gap: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                borderColor: COLORS.ACCENT_TAN,
              },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(209, 160, 84, 0.1)",
              }}
            >
              {stat.icon}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.5)",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                  fontFamily: roboto.style.fontFamily,
                }}
              >
                {stat.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;
