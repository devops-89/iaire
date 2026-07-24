"use client";

import React from "react";
import { Box, Typography, keyframes } from "@mui/material";
import { inter } from "@/utils/fonts";

const pulseDot = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

interface SectionBadgeProps {
  label: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  glowColor?: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const SectionBadge = ({
  label,
  align = "left",
  theme = "light",
  glowColor,
  textColor,
  borderColor,
  backgroundColor,
}: SectionBadgeProps) => {
  const isDark = theme === "dark";

  const finalGlowColor = glowColor || (isDark ? "#3B82F6" : "#1B365D");
  const finalTextColor = textColor || (isDark ? "#93C5FD" : "#1B365D");
  const finalBorderColor =
    borderColor ||
    (isDark ? "rgba(59, 130, 246, 0.25)" : "rgba(27, 54, 93, 0.25)");
  const finalBackgroundColor =
    backgroundColor ||
    (isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(27, 54, 93, 0.08)");
  const getJustifyContent = () => {
    if (align === "center") return "center";
    if (align === "right") return "flex-end";
    return "flex-start";
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: getJustifyContent(),
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          backgroundColor: finalBackgroundColor,
          border: `1px solid ${finalBorderColor}`,
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
            backgroundColor: finalGlowColor,
            boxShadow: `0 0 8px ${finalGlowColor}`,
            animation: `${pulseDot} 2s infinite ease-in-out`,
          }}
        />
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "10.5px",
            fontWeight: 800,
            color: finalTextColor,
            letterSpacing: "0.12em",
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
