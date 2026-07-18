"use client";

import React from "react";
import { Box, Card, Stack, Typography, LinearProgress } from "@mui/material";
import { inter } from "@/utils/fonts";
import VerifiedIcon from "@mui/icons-material/Verified";

const rubricRows = [
  { metric: "Creativity & Originality", level: "L4 (Advanced)", value: 92, color: "#3B82F6" },
  { metric: "Technical Feasibility", level: "L3 (Proficient)", value: 78, color: "#10B981" },
  { metric: "Research Depth", level: "L4 (Advanced)", value: 95, color: "#F59E0B" },
  { metric: "IP & Patent Readiness", level: "L3 (Proficient)", value: 80, color: "#8B5CF6" },
];

export const RubricsScorecard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "440px",
        animation: "floatAnimation 6s ease-in-out infinite",
        "@keyframes floatAnimation": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      }}
    >
      {/* Glow highlight inside card */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-20%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <Stack spacing={3}>
        {/* Scorecard Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={1.5} alignItems="center">
            <VerifiedIcon sx={{ color: "#3B82F6", fontSize: 24 }} />
            <Box>
              <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.05em" }}>
                ASSESSMENT SCORECARD
              </Typography>
              <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "10px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.02em" }}>
                IAIRE QUALITY STANDARD V2.1
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: "6px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 800, color: "#10B981" }}>
              PASS
            </Typography>
          </Box>
        </Stack>

        {/* Evaluation Metrics List */}
        <Stack spacing={2.5}>
          {rubricRows.map((row, idx) => (
            <Stack key={idx} spacing={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", fontWeight: 600, color: "rgba(255, 255, 255, 0.85)" }}>
                  {row.metric}
                </Typography>
                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: row.color }}>
                  {row.level}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={row.value}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 3,
                    backgroundColor: row.color,
                  },
                }}
              />
            </Stack>
          ))}
        </Stack>

        {/* Scorecard Footer */}
        <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", pt: 2.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "9px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              OVERALL GRADE
            </Typography>
            <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "18px", fontWeight: 900, color: "#FFFFFF", mt: 0.25 }}>
              A (EXCELLENT)
            </Typography>
          </Box>
          <Box sx={{ width: 44, height: 44, borderRadius: "50%", border: "2px dashed rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 800, color: "rgba(255,255,255,0.4)" }}>
              90%
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
};
