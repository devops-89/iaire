"use client";

import React from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import SectionBadge from "@/components/widgets/SectionBadge";

const trainingModules = [
  "Introduction to Innovation",
  "Innovation Mindset",
  "Lifecycle of Innovation",
  "Identifying a Problem",
  "Writing a Problem Statement",
  "STAR Method of Thinking",
  "Dividing Complex Problems",
  "Brainstorming for Innovation",
  "Root-Cause Analysis",
  "Design Thinking",
  "Basics of Patentability and Intellectual Property",
];

const certificationStages = [
  {
    title: "1. Train",
    desc: "Acquire core innovation concepts, frameworks, and tools through our structured educator syllabus.",
  },
  {
    title: "2. Experience",
    desc: "Apply structured methodologies inside the classroom to guide students through real-world problem-solving.",
  },
  {
    title: "3. Certify",
    desc: "Submit portfolios of evidence for peer and board review to earn the official official Mentor credentials.",
  },
  {
    title: "4. Lead",
    desc: "Drive regional or school-wide innovation labs and mentor new cohorts within the IAIRE ecosystem.",
  },
];

const EducatorCertification = () => {
  return (
    <Box
      id="educator-certification"
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
          {/* Left Column: Title, description, and module tags list */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex" }}>
                <SectionBadge
                  label="Innovation Educator Certification"
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
                  IAIRE Innovation <br />
                  <span style={{ color: "#93C5FD", textShadow: "0 0 35px rgba(147, 197, 253, 0.2)" }}>
                    Educator Certification
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
                  Train. Experience. Certify. Lead.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  The IAIRE Innovation Educator Certification Programme prepares teachers to become Innovation Mentors capable of guiding students through the complete innovation lifecycle.
                </Typography>
              </Stack>

              {/* Module Tags */}
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
                  Training Syllabus Includes:
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                  {trainingModules.map((module, idx) => (
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
                      {module}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Milestone Journey Tracker Card */}
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
                Certification Stages
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
                    background: "linear-gradient(to bottom, #3B82F6 0%, rgba(147, 197, 253, 0.1) 100%)",
                  }}
                />

                {certificationStages.map((stage, idx) => (
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
                        border: "2px solid #3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#93C5FD",
                        fontFamily: "monospace",
                        fontSize: "13px",
                        fontWeight: 700,
                        boxShadow: "0 0 12px rgba(59, 130, 246, 0.4)",
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
                        {stage.title}
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
                        {stage.desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EducatorCertification;
