"use client";
import React from "react";
import { Box, Typography, Paper, LinearProgress, Avatar, AvatarGroup, IconButton } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { ArrowForward } from "@mui/icons-material";

const trainings = [
  { label: "Innovation Mentorship", progress: 75, participants: 8 },
  { label: "Entrepreneurship Training", progress: 40, participants: 5 },
  { label: "Advanced Researcher Course", progress: 90, participants: 3 },
];

const EducatorOverview = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "24px",
        border: "1px solid #f0f0f0",
        height: "100%",
        backgroundColor: COLORS.WHITE,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontWeight: 700,
            color: COLORS.PRIMARY_NAVY,
          }}
        >
          Educator Training
        </Typography>
        <IconButton size="small" sx={{ color: COLORS.ACCENT_TAN }}>
          <ArrowForward fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {trainings.map((training, index) => (
          <Box key={index}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.7)",
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                {training.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: COLORS.ACCENT_TAN,
                  fontFamily: roboto.style.fontFamily,
                }}
              >
                {training.progress}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={training.progress}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: "rgba(209, 160, 84, 0.1)",
                "& .MuiLinearProgress-bar": {
                  bgcolor: COLORS.ACCENT_TAN,
                  borderRadius: 4,
                },
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", mt: 1.5, gap: 1 }}>
               <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: 24, height: 24, fontSize: "10px" } }}>
                {[...Array(training.participants)].map((_, i) => (
                  <Avatar key={i} sx={{ bgcolor: COLORS.PRIMARY_NAVY }} />
                ))}
              </AvatarGroup>
              <Typography sx={{ fontSize: "12px", color: "gray", fontFamily: montserrat.style.fontFamily }}>
                {training.participants} Nominated
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default EducatorOverview;
