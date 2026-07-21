"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";

const studentSteps = [
  { label: "Innovation mindset", phase: "INITIALIZE", num: "01" },
  { label: "Problem-solving", phase: "IDENTIFY", num: "02" },
  { label: "Brainstorming", phase: "IDEATE", num: "03" },
  { label: "Root-cause analysis", phase: "ANALYZE", num: "04" },
  { label: "Design thinking", phase: "DESIGN", num: "05" },
  { label: "Research exploration", phase: "EXPLORE", num: "06" },
  { label: "Intellectual property awareness", phase: "PROTECT", num: "07" },
  { label: "Innovation presentation", phase: "SHOWCASE", num: "08" },
];

const StudentSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle warm accent glow on the bottom-left */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Heading & Content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }}
                />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#1B365D",
                    textTransform: "uppercase",
                  }}
                >
                  THE STUDENT
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 800,
                  color: "#0B1727",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                Inspiring Students to Become Innovators
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#121214",
                    lineHeight: 1.5,
                  }}
                >
                  Students are naturally curious. IAIRE helps convert that
                  curiosity into structured innovation.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  Through IAIRE’s Student Innovation Program, students learn how
                  to identify real-world problems, think creatively, conduct
                  research, develop solutions, document their ideas, and present
                  innovations with confidence.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  They are guided through a step-by-step journey that builds
                  confidence and critical skills.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#1B365D",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    borderLeft: "2px solid #1B365D",
                    pl: 2,
                  }}
                >
                  The goal is not only to create projects. The goal is to create
                  future-ready thinkers.
                </Typography>
              </Stack>

              <Box sx={{ pt: 1.5 }}>
                <Link href="/login">
                  <BeamButton
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 600,
                      textTransform: "none",
                      color: "#FFFFFF",
                      backgroundColor: "#1B365D",
                      borderRadius: "30px",
                      p: "12px 28px",
                      boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#e05400",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                      },
                    }}
                  >
                    Start the Student Innovation Journey
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Grid of Stepped Cards */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2.5}>
              {studentSteps.map((step, index) => (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E5E9",
                      borderRadius: "14px",
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        borderColor: "rgba(248, 93, 0, 0.25)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(248, 93, 0, 0.06)",
                      },
                    }}
                  >
                    {/* Giant Faint Background Number */}
                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: -15,
                        right: 15,
                        fontSize: "90px",
                        fontWeight: 900,
                        fontFamily: "monospace",
                        color: "rgba(248, 93, 0, 0.04)",
                        userSelect: "none",
                        lineHeight: 1,
                        zIndex: 0,
                      }}
                    >
                      {step.num}
                    </Typography>

                    <Stack spacing={1} sx={{ position: "relative", zIndex: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "10.5px",
                          fontWeight: 700,
                          color: "#1B365D",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {step.num} / {step.phase}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#121214",
                          lineHeight: 1.4,
                          pt: 0.5,
                        }}
                      >
                        {step.label}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentSection;
