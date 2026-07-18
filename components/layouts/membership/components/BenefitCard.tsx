"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import { inter } from "@/utils/fonts";

interface BenefitCardProps {
  benefit: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const BenefitCard = ({
  benefit,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: BenefitCardProps) => (
  <Box
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    sx={{
      width: "100%",
      p: 2.5,
      borderRadius: "12px",
      border: "1px solid rgba(27, 54, 93, 0.06)",
      backgroundColor: isHovered ? "rgba(59, 130, 246, 0.03)" : "rgba(27, 54, 93, 0.02)",
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      cursor: "default",
      transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      boxShadow: isHovered ? "0 8px 20px rgba(59, 130, 246, 0.05)" : "none",
    }}
  >
    <CheckCircleIcon
      sx={{
        color: isHovered ? "#3B82F6" : "#1B365D",
        fontSize: 18,
        flexShrink: 0,
        transition: "color 0.2s ease",
      }}
    />
    <Typography
      sx={{
        fontFamily: inter.style.fontFamily,
        fontSize: "13px",
        fontWeight: 600,
        lineHeight: 1.4,
        color: isHovered ? "#0B1727" : "#4B5563",
        transition: "color 0.2s ease",
      }}
    >
      {benefit}
    </Typography>
  </Box>
);
