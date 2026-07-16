"use client";

import React from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

// Custom vector SVG icons representing the 6 core programs
const EducatorCapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const StudentPathIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M9 6h6M6 9v6M15 15l-6-6" strokeDasharray="2,2" />
  </svg>
);

const HubNodesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a7 7 0 0 1 7 7c0 3.18-2.12 5.86-5 6.71V2H10v6.71c-2.88-.85-5-3.53-5-6.71a7 7 0 0 1 7-7z" />
  </svg>
);

const DesktopDashboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
    <line x1="12" y1="17" x2="12" y2="20" />
  </svg>
);

const ScienceLockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const programsData = [
  {
    title: "Innovation Educator Certification",
    description: "A professional certification program for teachers who wish to become Innovation & Research Mentors.",
    icon: <EducatorCapIcon />,
  },
  {
    title: "Student Innovation Program",
    description: "A structured learning journey that introduces students to innovation, research, problem-solving, and entrepreneurship.",
    icon: <StudentPathIcon />,
  },
  {
    title: "School Innovation Hubs",
    description: "A school-based model for establishing long-term innovation capability within institutions.",
    icon: <HubNodesIcon />,
  },
  {
    title: "Top Young Innovator Competition",
    description: "A national and international platform to recognize outstanding student innovators.",
    icon: <TrophyIcon />,
  },
  {
    title: "Digital Platform",
    description: "An integrated online platform for learning, mentoring, resources, documentation, and program delivery.",
    icon: <DesktopDashboardIcon />,
  },
  {
    title: "Research & IP Support",
    description: "Guidance for promising innovations, research projects, intellectual property development, and publication pathways.",
    icon: <ScienceLockIcon />,
  },
];

const AboutPrograms = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#090A0E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - subtle glowing orange flare */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={8} alignItems="center">
          
          {/* Header */}
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
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
                CORE OFFERINGS
              </Typography>
              <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              IAIRE Programs
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "16px",
                color: "#9D9DA7",
                maxWidth: "600px",
                lineHeight: 1.5,
              }}
            >
              IAIRE offers a comprehensive set of programs for schools, educators, and students. Each program is designed to build capability, confidence, creativity, and measurable innovation outcomes.
            </Typography>
          </Stack>

          {/* Programs Grid */}
          <Grid container spacing={3}>
            {programsData.map((prog, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: "flex" }}>
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    width: "100%",
                    borderRadius: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.35)",
                      transform: "translateY(-6px)",
                      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(248, 93, 0, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {prog.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {prog.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      color: "#9D9DA7",
                      lineHeight: 1.6,
                    }}
                  >
                    {prog.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA Footer Block */}
          <Box sx={{ pt: 2 }}>
            <Button
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none",
                color: "#FFFFFF",
                backgroundColor: "#1B365D",
                borderRadius: "30px",
                p: "14px 36px",
                boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e05400",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                },
              }}
            >
              Find the Right Program
            </Button>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPrograms;
