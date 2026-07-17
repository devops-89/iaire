"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import RevolvingBadge from "./RevolvingBadge";
import logoWhite from "@/images/logo/iaire_logo_white.png";

const ORBIT_BADGES = [
  {
    label: "Innovation",
    icon: "⚡",
    startAngle: 0,
    radius: 150,
    speed: 20,
    clockwise: true,
  },
  {
    label: "Research",
    icon: "🔬",
    startAngle: 180,
    radius: 150,
    speed: 20,
    clockwise: true,
  },
  {
    label: "Entrepreneurship",
    icon: "🚀",
    startAngle: 90,
    radius: 200,
    speed: 25,
    clockwise: false,
  },
  {
    label: "Patent Pathways",
    icon: "📜",
    startAngle: 270,
    radius: 200,
    speed: 25,
    clockwise: false,
  },
];

const OrbitingSystem = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "360px", sm: "420px", md: "460px" },
        maxWidth: "460px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Spinning Orbit 1 */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1.5px solid rgba(59, 130, 246, 0.22)",
          transform: "rotateX(65deg) rotateY(-10deg)",
          animation: "ring-spin-cw 20s linear infinite",
          "@keyframes ring-spin-cw": {
            "0%": { transform: "rotateX(65deg) rotateY(-10deg) rotate(0deg)" },
            "100%": {
              transform: "rotateX(65deg) rotateY(-10deg) rotate(360deg)",
            },
          },
        }}
      />

      {/* Spinning Orbit 2 (Dashed & Glowing) */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1.5px dashed rgba(147, 197, 253, 0.12)",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.05)",
          transform: "rotateX(65deg) rotateY(10deg)",
          animation: "ring-spin-ccw 25s linear infinite",
          "@keyframes ring-spin-ccw": {
            "0%": { transform: "rotateX(65deg) rotateY(10deg) rotate(360deg)" },
            "100%": { transform: "rotateX(65deg) rotateY(10deg) rotate(0deg)" },
          },
        }}
      />

      {/* Inner core capsule glass sphere */}
      <Box
        sx={{
          width: "105px",
          height: "105px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(27, 54, 93, 0.5) 45%, rgba(7, 12, 21, 0.98) 100%)",
          border: "1px solid rgba(147, 197, 253, 0.4)",
          boxShadow:
            "0 0 35px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "pulse-glow 3.5s ease-in-out infinite",
          "@keyframes pulse-glow": {
            "0%, 100%": {
              boxShadow:
                "0 0 25px rgba(59, 130, 246, 0.25), inset 0 0 15px rgba(59, 130, 246, 0.12)",
              transform: "scale(1)",
            },
            "50%": {
              boxShadow:
                "0 0 45px rgba(59, 130, 246, 0.45), inset 0 0 25px rgba(59, 130, 246, 0.25)",
              transform: "scale(1.02)",
            },
          },
        }}
      >
        <Image
          src={logoWhite}
          alt="IAIRE"
          width={70}
          style={{
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
          }}
        />
      </Box>

      {ORBIT_BADGES.map((badge, idx) => (
        <RevolvingBadge
          key={idx}
          label={badge.label}
          icon={badge.icon}
          startAngle={badge.startAngle}
          radius={badge.radius}
          speed={badge.speed}
          clockwise={badge.clockwise}
        />
      ))}
    </Box>
  );
};

export default OrbitingSystem;
