"use client";

import React from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import SectionBadge from "@/components/widgets/SectionBadge";

// Import Modular Components
import { RubricsActions } from "./components/RubricsActions";

const assessmentAreas = [
  "Problem discovery",
  "Creativity",
  "Technical feasibility",
  "Research depth",
  "Prototype development",
  "Intellectual property readiness",
  "Market understanding",
  "Communication",
  "Teamwork",
  "Impact and sustainability",
];

const rubricLevels = [
  {
    label: "L1 — Emerging",
    desc: "Student identifies surface-level problems with limited scope or validation.",
    color: "#64748B",
  },
  {
    label: "L2 — Developing",
    desc: "Applies basic research methods and adapts known solutions with modifications.",
    color: "#3B82F6",
  },
  {
    label: "L3 — Proficient",
    desc: "Conducts structured analysis, builds working prototypes, and validates hypotheses.",
    color: "#10B981",
  },
  {
    label: "L4 — Advanced",
    desc: "Demonstrates originality, publishes research, and creates IP-ready innovations.",
    color: "#F59E0B",
  },
];

const StandardsRubrics = () => {
  return (
    <Box
      id="standards-rubrics"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "120px", md: "90px" },
        pb: { xs: "60px", md: "35px" },
        background: "linear-gradient(135deg, #0B1528 0%, #1A2847 100%)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" sx={{ mb: 5 }}>
          {/* Left Column: Title, description, and assessment area tags */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex" }}>
                <SectionBadge
                  label="Academic Quality Assurance"
                  align="left"
                  textColor="#93C5FD"
                  glowColor="#93C5FD"
                  borderColor="rgba(147, 197, 253, 0.25)"
                  backgroundColor="rgba(255, 255, 255, 0.08)"
                />
              </Box>

              <Stack spacing={2}>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "36px", md: "40px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: COLORS.WHITE,
                  }}
                >
                  Standards & <br />
                  <span style={{ color: "#93C5FD", textShadow: "0 0 35px rgba(147, 197, 253, 0.2)" }}>
                    Rubrics Framework
                  </span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#93C5FD",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Transparent Standards for Measurable Outcomes
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  IAIRE provides structured rubrics and assessment frameworks for innovation, research, and entrepreneurship education.
                </Typography>
              </Stack>

              {/* Assessment Area Tags */}
              <Stack spacing={1.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#93C5FD",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Core Assessment Areas:
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                  {assessmentAreas.map((area, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 2,
                        py: 0.75,
                        borderRadius: "100px",
                        border: "1px solid rgba(147, 197, 253, 0.12)",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: inter.style.fontFamily,
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        cursor: "default",
                        "&:hover": {
                          borderColor: "#93C5FD",
                          backgroundColor: "rgba(147, 197, 253, 0.08)",
                          color: "#FFFFFF",
                          transform: "translateY(-1.5px)",
                          boxShadow: "0 4px 12px rgba(147, 197, 253, 0.1)",
                        },
                      }}
                    >
                      {area}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Rubric Levels Progression Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              elevation={0}
              sx={{
                p: { xs: 3.5, md: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.35)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#93C5FD",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 3.5,
                }}
              >
                Rubric Progression Levels
              </Typography>

              <Stack spacing={3.5} sx={{ position: "relative" }}>
                {/* Continuous connector line */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 15,
                    top: 20,
                    bottom: 20,
                    width: 2,
                    background: "linear-gradient(to bottom, #64748B 0%, #3B82F6 33%, #10B981 66%, #F59E0B 100%)",
                  }}
                />

                {rubricLevels.map((level, idx) => (
                  <Stack
                    key={idx}
                    direction="row"
                    spacing={2.5}
                    alignItems="flex-start"
                    sx={{ position: "relative", zIndex: 1 }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "#0B1528",
                        border: `2px solid ${level.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: level.color,
                        fontFamily: "monospace",
                        fontSize: "13px",
                        fontWeight: 700,
                        boxShadow: `0 0 12px ${level.color}66`,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: 800,
                          color: "#FFFFFF",
                        }}
                      >
                        {level.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "rgba(255, 255, 255, 0.65)",
                          mt: 0.5,
                          lineHeight: 1.45,
                        }}
                      >
                        {level.desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>

        {/* Bottom Section: Centered Actions Row */}
        <RubricsActions />
      </Container>
    </Box>
  );
};

export default StandardsRubrics;
