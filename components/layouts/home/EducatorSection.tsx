"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";

// Custom premium vector SVG icons representing each skill
const ProblemIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DesignIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ResearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const InnovationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6M10 22h4" />
  </svg>
);

const IpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const DocIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const MentorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AssessmentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M22 12H12V2" />
  </svg>
);

const mentoringSkills = [
  { label: "Problem identification", icon: <ProblemIcon /> },
  { label: "Design thinking", icon: <DesignIcon /> },
  { label: "Research methodology", icon: <ResearchIcon /> },
  { label: "Innovation development", icon: <InnovationIcon /> },
  { label: "Intellectual property basics", icon: <IpIcon /> },
  { label: "Project documentation", icon: <DocIcon /> },
  { label: "Student mentoring", icon: <MentorIcon /> },
  { label: "Innovation assessment", icon: <AssessmentIcon /> },
];

const EducatorSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle warm accent glow on the side */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(70px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Grid of Mentoring Skills */}
          <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
            <Grid container spacing={2.5}>
              {mentoringSkills.map((skill, index) => (
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
                      alignItems: "center",
                      gap: 2.5,
                      width: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        borderColor: "rgba(248, 93, 0, 0.25)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(248, 93, 0, 0.06)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "10px",
                        backgroundColor: "rgba(248, 93, 0, 0.07)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#121214",
                        lineHeight: 1.4,
                      }}
                    >
                      {skill.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column: Heading & Content */}
          <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
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
                  THE EDUCATOR
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
                Empowering Teachers as Innovation Leaders
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
                  Teachers are the foundation of every meaningful educational
                  transformation.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  IAIRE trains and certifies educators as Innovation & Research
                  Mentors, equipping them with the knowledge, tools, confidence,
                  and practical experience required to guide students through
                  the complete innovation journey.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  Certified educators learn how to mentor students in the core
                  innovation disciplines.
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
                  When teachers become innovation mentors, schools gain
                  long-term internal capability.
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
                    Explore Innovation Educator Certification
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EducatorSection;
