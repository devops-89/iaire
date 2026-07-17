"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";

interface SectionBadgeProps {
  label: string;
  align?: "left" | "center" | "right";
  glowColor?: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const SectionBadge = ({
  label,
  align = "left",
  glowColor = "#3B82F6",
  textColor = "#93C5FD",
  borderColor = "rgba(59, 130, 246, 0.25)",
  backgroundColor = "rgba(59, 130, 246, 0.1)",
}: SectionBadgeProps) => {
  const getJustifyContent = () => {
    if (align === "center") return "center";
    if (align === "right") return "flex-end";
    return "flex-start";
  };

  return (
    <Box sx={{ display: "flex", justifyContent: getJustifyContent(), width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          backgroundColor: backgroundColor,
          border: `1px solid ${borderColor}`,
          borderRadius: "100px",
          px: 2.25,
          py: 0.75,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: glowColor,
            boxShadow: `0 0 8px ${glowColor}`,
            animation: "pulseDot 2s infinite ease-in-out",
            "@keyframes pulseDot": {
              "0%, 100%": { opacity: 0.5, transform: "scale(0.8)" },
              "50%": { opacity: 1, transform: "scale(1.2)" },
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "10.5px",
            fontWeight: 700,
            color: textColor,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionBadge;
