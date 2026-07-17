"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import SectionBadge from "@/components/widgets/SectionBadge";

const phase1Steps = [
  { step: "01", label: "Introduction to Innovation" },
  { step: "02", label: "Innovation Mindset" },
  { step: "03", label: "Lifecycle of Innovation" },
  { step: "04", label: "Problem Identification" },
];

const phase2Steps = [
  { step: "05", label: "Problem Statement Writing" },
  { step: "06", label: "Creative Thinking Methods" },
  { step: "07", label: "Root-Cause Analysis" },
  { step: "08", label: "Design Thinking" },
];

const phase3Steps = [
  { step: "09", label: "Research Exploration" },
  { step: "10", label: "Intellectual Property Awareness" },
  { step: "11", label: "Innovation Presentation" },
];

const studentOutcomes = [
  "Creativity",
  "Critical Thinking",
  "Research Capability",
  "Communication",
  "Problem Solving",
  "Collaboration",
  "Leadership",
  "Entrepreneurial Thinking",
  "Confidence",
];

const CheckIcon = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      mt: 0.25,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(248, 93, 0, 0.12)"
        stroke="#1B365D"
        strokeWidth="2"
      />
      <path
        d="M8.5 12.5l2.5 2.5 4.5-5"
        stroke="#1B365D"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

const AccordionHeader = ({
  phase,
  title,
  subtitle,
  isActive,
  onClick,
}: {
  phase: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Box
    onClick={onClick}
    sx={{
      p: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      userSelect: "none",
    }}
  >
    <Stack spacing={0.5}>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "10px",
          fontWeight: 700,
          color: isActive ? "#1B365D" : "#8E8E93",
          letterSpacing: "0.1em",
        }}
      >
        {phase}
      </Typography>
      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "17px",
          fontWeight: 800,
          color: "#0B1727",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "12.5px",
          color: "#8E8E93",
        }}
      >
        {subtitle}
      </Typography>
    </Stack>

    {/* Plus / Minus indicator */}
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: isActive ? "rgba(248, 93, 0, 0.1)" : "#F0F0F3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      >
        <path
          d={isActive ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
          stroke={isActive ? "#1B365D" : "#5F5F6A"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  </Box>
);

const StudentProgSection = () => {
  const [activePhase, setActivePhase] = useState<1 | 2 | 3>(1);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.02) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 8, md: 6 }} alignItems="flex-start">
          {/* Left Column: Program Detail, Outcomes & CTA */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4.5}>
              {/* Header texts */}
              <Stack spacing={2.5}>
              <SectionBadge
                label="For Students"
                align="left"
                textColor="#1B365D"
                glowColor="#1B365D"
                borderColor="rgba(27, 54, 93, 0.25)"
                backgroundColor="rgba(27, 54, 93, 0.08)"
              />

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", md: "38px" },
                    fontWeight: 850,
                    color: "#0B1727",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Student Innovation Program
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#121214",
                    lineHeight: 1.55,
                  }}
                >
                  Helping Students Think, Create, Research & Innovate
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  The program introduces students to structured innovation
                  learning, research fundamentals, design thinking, and
                  intellectual property awareness.
                </Typography>
              </Stack>

              {/* Quote Block */}
              <Box sx={{ pl: 2.25, borderLeft: "2px solid #1B365D" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    color: "#1B365D",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  "The goal is not only to create projects. The goal is to
                  create future-ready thinkers."
                </Typography>
              </Box>

              {/* Outcomes Badges */}
              <Stack spacing={1.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#8E8E93",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  DEVELOPMENTAL OUTCOMES
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {studentOutcomes.map((outcome, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 1.75,
                        py: 0.5,
                        borderRadius: "20px",
                        backgroundColor: "#F9F9FB",
                        border: "1px solid #E5E5E9",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#3D3D48",
                      }}
                    >
                      {outcome}
                    </Box>
                  ))}
                </Box>
              </Stack>

              {/* CTA button */}
              <Box>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#FFFFFF",
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 4.5,
                      py: 1.4,
                      boxShadow: "0 8px 25px rgba(27, 54, 93, 0.2)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(27, 54, 93, 0.32)",
                      },
                    }}
                  >
                    Start Your Innovation Journey
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Interactive Accordion Roadmap */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 4 } }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0B1727",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E5E5E9",
                  pb: 1.5,
                  mb: 1,
                }}
              >
                THE DEVELOPMENTAL ROADMAP
              </Typography>

              {/* Phase 1 Accordion */}
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: activePhase === 1 ? "#FFFFFF" : "#F9F9FB",
                  border:
                    activePhase === 1
                      ? "1.5px solid rgba(248, 93, 0, 0.35)"
                      : "1px solid #E5E5E9",
                  borderLeft:
                    activePhase === 1
                      ? "5px solid #1B365D"
                      : "5px solid #E5E5E9",
                  overflow: "hidden",
                  boxShadow:
                    activePhase === 1
                      ? "0 10px 30px rgba(248, 93, 0, 0.04)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <AccordionHeader
                  phase="PHASE 01"
                  title="Foundation & Discovery"
                  subtitle="Mindset & Problem Identification"
                  isActive={activePhase === 1}
                  onClick={() => setActivePhase(1)}
                />

                <Box
                  sx={{
                    maxHeight: activePhase === 1 ? "300px" : "0px",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ p: 4, pt: 0, borderTop: "1px solid #E5E5E9" }}>
                    <Grid container spacing={2.5} sx={{ pt: 3 }}>
                      {phase1Steps.map((step, idx) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                          <Stack
                            direction="row"
                            spacing={1.5}
                            alignItems="flex-start"
                          >
                            <CheckIcon />
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "14px",
                                fontWeight: 650,
                                color: "#3D3D48",
                              }}
                            >
                              {step.label}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Box>

              {/* Phase 2 Accordion */}
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: activePhase === 2 ? "#FFFFFF" : "#F9F9FB",
                  border:
                    activePhase === 2
                      ? "1.5px solid rgba(248, 93, 0, 0.35)"
                      : "1px solid #E5E5E9",
                  borderLeft:
                    activePhase === 2
                      ? "5px solid #1B365D"
                      : "5px solid #E5E5E9",
                  overflow: "hidden",
                  boxShadow:
                    activePhase === 2
                      ? "0 10px 30px rgba(248, 93, 0, 0.04)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <AccordionHeader
                  phase="PHASE 02"
                  title="Analysis & Design"
                  subtitle="Problem Engineering & Design Thinking"
                  isActive={activePhase === 2}
                  onClick={() => setActivePhase(2)}
                />

                <Box
                  sx={{
                    maxHeight: activePhase === 2 ? "300px" : "0px",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ p: 4, pt: 0, borderTop: "1px solid #E5E5E9" }}>
                    <Grid container spacing={2.5} sx={{ pt: 3 }}>
                      {phase2Steps.map((step, idx) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                          <Stack
                            direction="row"
                            spacing={1.5}
                            alignItems="flex-start"
                          >
                            <CheckIcon />
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "14px",
                                fontWeight: 650,
                                color: "#3D3D48",
                              }}
                            >
                              {step.label}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Box>

              {/* Phase 3 Accordion */}
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: activePhase === 3 ? "#FFFFFF" : "#F9F9FB",
                  border:
                    activePhase === 3
                      ? "1.5px solid rgba(248, 93, 0, 0.35)"
                      : "1px solid #E5E5E9",
                  borderLeft:
                    activePhase === 3
                      ? "5px solid #1B365D"
                      : "5px solid #E5E5E9",
                  overflow: "hidden",
                  boxShadow:
                    activePhase === 3
                      ? "0 10px 30px rgba(248, 93, 0, 0.04)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <AccordionHeader
                  phase="PHASE 03"
                  title="Research & IP Launch"
                  subtitle="Academic Papers & Patent Protection"
                  isActive={activePhase === 3}
                  onClick={() => setActivePhase(3)}
                />

                <Box
                  sx={{
                    maxHeight: activePhase === 3 ? "300px" : "0px",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ p: 4, pt: 0, borderTop: "1px solid #E5E5E9" }}>
                    <Grid container spacing={2.5} sx={{ pt: 3 }}>
                      {phase3Steps.map((step, idx) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                          <Stack
                            direction="row"
                            spacing={1.5}
                            alignItems="flex-start"
                          >
                            <CheckIcon />
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "14px",
                                fontWeight: 650,
                                color: "#3D3D48",
                              }}
                            >
                              {step.label}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentProgSection;
