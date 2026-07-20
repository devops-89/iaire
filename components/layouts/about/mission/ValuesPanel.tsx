import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";

const valuesList = [
  { title: "Scientific Integrity", desc: "Rigorous standards & peer review" },
  { title: "Academic Excellence", desc: "Highest benchmarks of pedagogy" },
  { title: "Ethical Innovation", desc: "Intellectual property & values" },
  { title: "Inclusion & Access", desc: "Global opportunities for all youth" },
  { title: "Measurable Outcomes", desc: "Focus on tangible achievements" },
  { title: "Quality Assurance", desc: "Continuous audits of systems" },
  { title: "Student Wellbeing", desc: "Nurturing safe learning spaces" },
  { title: "Cross-Disciplinary Unity", desc: "Bridging science & business" },
  { title: "Service to Society", desc: "Solving real-world local problems" },
  {
    title: "Continuous Evolution",
    desc: "Iterative improvement of frameworks",
  },
];

const ValuesPanel = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Stack
      spacing={2}
      sx={{
        animation: "fadeInUp 0.5s ease forwards",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontWeight: 900,
          fontSize: "16px",
          color: "#0B1727",
          mb: 0.5,
        }}
      >
        Tenets of Academic Integrity & Service
      </Typography>

      <Grid container spacing={1.5}>
        {valuesList.map((val, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <Grid size={{ xs: 12, sm: 6 }} key={idx} sx={{ display: "flex" }}>
              <Box
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                sx={{
                  width: "100%",
                  p: 1.5,
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: isHovered ? "#3B82F6" : "rgba(27, 54, 93, 0.06)",
                  backgroundColor: isHovered
                    ? "rgba(59, 130, 246, 0.03)"
                    : "rgba(27, 54, 93, 0.01)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.25,
                  transition: "all 0.2s ease",
                  cursor: "default",
                  transform: isHovered ? "translateY(-1.5px)" : "translateY(0)",
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: isHovered ? "#3B82F6" : "#1B365D",
                    fontSize: 15,
                    flexShrink: 0,
                    transition: "color 0.2s ease",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: isHovered ? "#0B1727" : "#4B5563",
                    transition: "color 0.2s ease",
                  }}
                >
                  {val.title}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default ValuesPanel;
