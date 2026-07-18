"use client";

import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface EducatorStatsProps {
  stats: StatItem[];
}

export const EducatorStats = ({ stats }: EducatorStatsProps) => (
  <Box sx={{ width: "100%" }}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: "16px",
            border: "1px solid rgba(27, 54, 93, 0.08)",
            background: "linear-gradient(135deg, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0.98) 100%)",
            display: "flex",
            alignItems: "center",
            gap: 2,
            boxShadow: "0 10px 25px rgba(27, 54, 93, 0.02)",
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              backgroundColor: stat.bgColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: stat.color,
            }}
          >
            {stat.icon}
          </Box>
          <Box>
            <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "18px", fontWeight: 800, color: "#0B1727" }}>
              {stat.value}
            </Typography>
            <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", color: "#5F5F6A" }}>
              {stat.label}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  </Box>
);
