"use client";
import React from "react";
import { Box, Typography, LinearProgress, Paper, Grid } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";

const activeCourses = [
  {
    title: "Introduction to AI & Ethics",
    progress: 75,
    instructor: "Dr. Sarah Johnson",
  },
  {
    title: "Advanced Machine Learning",
    progress: 40,
    instructor: "Prof. Michael Chen",
  },
  {
    title: "Data Visualization Basics",
    progress: 90,
    instructor: "Jane Smith",
  },
];

const CourseProgress = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 700,
          fontFamily: roboto.style.fontFamily,
          color: COLORS.PRIMARY_NAVY,
        }}
      >
        My Course Progress
      </Typography>
      <Grid container spacing={3}>
        {activeCourses.map((course, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: "20px",
                border: "1px solid #f0f0f0",
                height: "100%",
                background: COLORS.WHITE,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  borderColor: COLORS.ACCENT_TAN,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  mb: 1,
                  color: COLORS.PRIMARY_NAVY,
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                {course.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.5)",
                  mb: 2,
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                {course.instructor}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  sx={{
                    flexGrow: 1,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "#f0f0f0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: COLORS.ACCENT_TAN,
                      borderRadius: 5,
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: COLORS.ACCENT_TAN,
                    fontFamily: roboto.style.fontFamily,
                    minWidth: "35px",
                  }}
                >
                  {course.progress}%
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseProgress;
