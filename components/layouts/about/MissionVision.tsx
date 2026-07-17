"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssignmentIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import SectionBadge from "@/components/widgets/SectionBadge";

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
  { title: "Continuous Evolution", desc: "Iterative improvement of frameworks" },
];

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const tabs = [
    { id: "mission", num: "01", label: "Mission Statement", desc: "Our tactical roadmap for academic impact" },
    { id: "vision", num: "02", label: "Vision Statement", desc: "Our long-term global aspiration" },
    { id: "values", num: "03", label: "Core Values", desc: "The tenets that guide every decision" },
  ] as const;

  return (
    <Box
      id="mission"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 0 },
        backgroundColor: "#F8F9FC",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background Decorative Blur Flares */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          left: "-5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Cyber Grid pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.02,
          backgroundImage: `linear-gradient(rgba(27, 54, 93, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(27, 54, 93, 0.1) 1px, transparent 1px)`,
          backgroundSize: "35px 35px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          
          {/* Left Column: Interactive Swapper Menu */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <SectionBadge
                  label="Core Purpose"
                  align="left"
                  textColor="#1B365D"
                  glowColor="#1B365D"
                  borderColor="rgba(27, 54, 93, 0.25)"
                  backgroundColor="rgba(27, 54, 93, 0.08)"
                />

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 950,
                    fontSize: { xs: "32px", sm: "40px", md: "46px" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Our Core <br />
                  <span
                    style={{
                      background: "linear-gradient(90deg, #1B365D 0%, #3B82F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Foundations
                  </span>
                </Typography>
              </Stack>

              {/* Vertical Tab Selections */}
              <Stack spacing={2} sx={{ position: "relative" }}>
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <Box
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      sx={{
                        p: 2.25,
                        borderRadius: "16px",
                        border: "1px solid",
                        borderColor: isActive ? "rgba(27, 54, 93, 0.1)" : "transparent",
                        backgroundColor: isActive ? "#FFFFFF" : "transparent",
                        boxShadow: isActive ? "0 10px 30px rgba(27, 54, 93, 0.04)" : "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 2.5,
                        "&:hover": {
                          backgroundColor: isActive ? "#FFFFFF" : "rgba(27, 54, 93, 0.02)",
                          transform: isActive ? "translateX(4px)" : "translateX(2px)",
                        },
                      }}
                    >
                      {/* Stepper Index Number */}
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "18px",
                          fontWeight: 900,
                          color: isActive ? "#3B82F6" : "#A0AEC0",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {tab.num}
                      </Typography>

                      <Stack spacing={0.25}>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "15px",
                            fontWeight: 800,
                            color: isActive ? "#0B1727" : "#4B5563",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {tab.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "11.5px",
                            color: isActive ? "#6B7280" : "#9CA3AF",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {tab.desc}
                        </Typography>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Sliding/Fading Dynamic Content Display Screen */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                width: "100%",
                minHeight: { xs: "360px", sm: "400px", md: "430px" },
                borderRadius: "28px",
                border: "1px solid rgba(27, 54, 93, 0.06)",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(27, 54, 93, 0.03)",
                p: { xs: 4, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                boxSizing: "border-box",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Active Tab Panel: MISSION */}
              {activeTab === "mission" && (
                <Stack spacing={3} sx={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "rgba(27, 54, 93, 0.06)",
                        color: "#1B365D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AssignmentIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 900,
                        fontSize: "19px",
                        color: "#0B1727",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      IAIRE Mission Statement
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#4B5563",
                      fontWeight: 500,
                    }}
                  >
                    To advance innovation, research, and entrepreneurship education by establishing standards, certification frameworks, mentorship systems, quality-assurance processes, and recognition pathways that empower schools, educators, and students to create meaningful intellectual, academic, entrepreneurial, and societal impact.
                  </Typography>

                  <Box sx={{ pt: 1 }}>
                    <Link href="/login" style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13px",
                          fontWeight: 700,
                          textTransform: "none",
                          color: "#1B365D",
                          borderColor: "#1B365D",
                          borderWidth: "1.5px",
                          borderRadius: "50px",
                          px: 3.5,
                          py: 1,
                          "&:hover": {
                            borderWidth: "1.5px",
                            backgroundColor: "rgba(27, 54, 93, 0.04)",
                            borderColor: "#122744",
                            "& .arrow-icon": { transform: "translateX(4px)" },
                          },
                        }}
                      >
                        Join the IAIRE Community
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              )}

              {/* Active Tab Panel: VISION */}
              {activeTab === "vision" && (
                <Stack spacing={3} sx={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "rgba(59, 130, 246, 0.06)",
                        color: "#3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <VisibilityIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 900,
                        fontSize: "19px",
                        color: "#0B1727",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      IAIRE Vision Statement
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#4B5563",
                      fontWeight: 500,
                    }}
                  >
                    To build a globally respected academic and professional society that enables schools to become centers of innovation and research, educators to become certified mentors and leaders, and students to become innovators, researchers, inventors, entrepreneurs, and responsible problem-solvers.
                  </Typography>

                  <Box sx={{ pt: 1 }}>
                    <Link href="/login" style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13px",
                          fontWeight: 700,
                          textTransform: "none",
                          color: "#1B365D",
                          borderColor: "#1B365D",
                          borderWidth: "1.5px",
                          borderRadius: "50px",
                          px: 3.5,
                          py: 1,
                          "&:hover": {
                            borderWidth: "1.5px",
                            backgroundColor: "rgba(27, 54, 93, 0.04)",
                            borderColor: "#122744",
                            "& .arrow-icon": { transform: "translateX(4px)" },
                          },
                        }}
                      >
                        Join the IAIRE Community
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              )}

              {/* Active Tab Panel: CORE VALUES */}
              {activeTab === "values" && (
                <Stack spacing={2} sx={{ animation: "fadeInUp 0.5s ease forwards", height: "100%", justifyContent: "center" }}>
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
                              backgroundColor: isHovered ? "rgba(59, 130, 246, 0.03)" : "rgba(27, 54, 93, 0.01)",
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
              )}

            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* Embedded slide-up CSS animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default MissionVision;
