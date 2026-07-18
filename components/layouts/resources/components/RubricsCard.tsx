"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";

interface RubricsCardProps {
  areaName: string;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const RubricsCard = ({
  areaName,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: RubricsCardProps) => {
  const displayNum = String(index + 1).padStart(2, "0");

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        width: "100%",
        p: 2.5,
        borderRadius: "16px",
        border: isHovered ? "1px solid #93C5FD" : "1px solid rgba(255, 255, 255, 0.06)",
        background: isHovered
          ? "linear-gradient(135deg, rgba(147, 197, 253, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 3,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 15px 30px rgba(147, 197, 253, 0.12), inset 0 0 12px rgba(147, 197, 253, 0.05)"
          : "0 4px 20px rgba(0, 0, 0, 0.15)",
        minHeight: "120px",
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "8px",
          backgroundColor: isHovered ? "#93C5FD" : "rgba(255, 255, 255, 0.06)",
          color: isHovered ? "#0B1528" : "#93C5FD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "12px",
          fontWeight: 700,
          transition: "all 0.25s ease",
          alignSelf: "flex-start",
          boxShadow: isHovered ? "0 0 10px rgba(147, 197, 253, 0.4)" : "none",
        }}
      >
        {displayNum}
      </Box>
      
      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "12.5px",
          fontWeight: 700,
          lineHeight: 1.4,
          color: isHovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.85)",
          transition: "color 0.2s ease",
        }}
      >
        {areaName}
      </Typography>
    </Box>
  );
};
