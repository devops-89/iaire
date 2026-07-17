"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export interface RevolvingBadgeProps {
  label: string;
  icon: string;
  startAngle: number;
  radius: number;
  tiltX?: number;
  tiltY?: number;
  speed?: number;
  clockwise?: boolean;
}

const RevolvingBadge = ({
  label,
  icon,
  startAngle,
  radius,
  tiltX = 65,
  tiltY = -10,
  speed = 22,
  clockwise = true,
}: RevolvingBadgeProps) => {
  const animName = `orbit-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const dir = clockwise ? 1 : -1;

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 2,
        transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          animation: `${animName} ${speed}s linear infinite`,
          pointerEvents: "auto",
          [`@keyframes ${animName}`]: {
            "0%": {
              transform: `rotateZ(${startAngle}deg) translateX(${radius}px) rotateZ(${-startAngle}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`,
            },
            "100%": {
              transform: `rotateZ(${startAngle + dir * 360}deg) translateX(${radius}px) rotateZ(${-(startAngle + dir * 360)}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`,
            },
          },
          backgroundColor: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(147, 197, 253, 0.25)",
          borderLeft: "3.5px solid #3B82F6",
          borderRadius: "10px",
          px: 1.75,
          py: 1,
          boxShadow: "0 8px 24px rgba(59, 130, 246, 0.12)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          gap: 1,
          whiteSpace: "nowrap",
          "&:hover": {
            transform: "scale(1.06)",
            borderLeftColor: "#93C5FD",
            borderColor: "rgba(147, 197, 253, 0.4)",
            boxShadow: "0 12px 28px rgba(59, 130, 246, 0.22)",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
          },
        }}
      >
        <Typography sx={{ fontSize: "12.5px" }}>{icon}</Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "10px",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default RevolvingBadge;
