"use client";
import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";

const submissions = [
  {
    id: "INV-2024-001",
    title: "AI-Powered Waste Management System",
    type: "Innovation",
    status: "Under Review",
    date: "March 15, 2024",
    statusColor: COLORS.ACCENT_TAN,
  },
  {
    id: "RES-2024-045",
    title: "Impact of Renewable Energy in Rural Areas",
    type: "Research",
    status: "Published",
    date: "March 10, 2024",
    statusColor: "#2e7d32",
  },
  {
    id: "INV-2024-002",
    title: "Smart Traffic Monitoring System",
    type: "Innovation",
    status: "Pending Details",
    date: "March 08, 2024",
    statusColor: "#ed6c02",
  },
];

const SubmissionStatus = () => {
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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontWeight: 700,
            color: COLORS.PRIMARY_NAVY,
          }}
        >
          Recent Submissions
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: COLORS.ACCENT_TAN,
            fontWeight: 600,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View All
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {submissions.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              backgroundColor: "#fcfcfc",
              border: "1px solid #f5f5f5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "all 0.2s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                borderColor: COLORS.ACCENT_TAN,
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.4)",
                  fontWeight: 600,
                  fontFamily: montserrat.style.fontFamily,
                  mb: 0.5,
                }}
              >
                {item.id} • {item.type}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                  fontFamily: roboto.style.fontFamily,
                  mb: 0.5,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "gray",
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                Submitted on {item.date}
              </Typography>
            </Box>
            <Chip
              label={item.status}
              sx={{
                bgcolor: `${item.statusColor}11`,
                color: item.statusColor,
                fontWeight: 600,
                fontSize: "12px",
                borderRadius: "8px",
                border: `1px solid ${item.statusColor}33`,
              }}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default SubmissionStatus;
