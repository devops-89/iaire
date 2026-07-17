"use client";

import React from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

// Custom vector SVG icons representing the 9 support categories
const FrameworkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const CertificateIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

const PathwaysIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M9 6h6M6 9v6M15 15l-6-6" strokeDasharray="2,2" />
  </svg>
);

const HubsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const ResearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a7 7 0 0 1 7 7c0 3.18-2.12 5.86-5 6.71V2H10v6.71c-2.88-.85-5-3.53-5-6.71a7 7 0 0 1 7-7z" />
  </svg>
);

const LaptopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
    <line x1="12" y1="17" x2="12" y2="20" />
  </svg>
);

const RibbonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const supportFrameworks = [
  { label: "Innovation education frameworks", icon: <FrameworkIcon /> },
  { label: "Educator certification programs", icon: <CertificateIcon /> },
  { label: "Student innovation learning pathways", icon: <PathwaysIcon /> },
  { label: "School Innovation Hubs", icon: <HubsIcon /> },
  { label: "Research and intellectual property support", icon: <ResearchIcon /> },
  { label: "Innovation competitions", icon: <TrophyIcon /> },
  { label: "Digital learning platforms", icon: <LaptopIcon /> },
  { label: "Institutional recognition", icon: <RibbonIcon /> },
  { label: "Global collaboration opportunities", icon: <GlobeIcon /> },
];

const WhatWeDo = () => {
  return (
    <Box
      id="what-we-do"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - warm flare glow on top-right */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(95px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={7} alignItems="center">
          
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
                WHAT IAIRE DOES
              </Typography>
              <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: 800,
                color: "#0B1727",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Supporting Educational Institutions Worldwide
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "16px",
                color: "#5F5F6A",
                maxWidth: "600px",
                lineHeight: 1.5,
              }}
            >
              IAIRE supports institutions through comprehensive frameworks, certifications, and pathways designed to bring innovation to the core of schooling:
            </Typography>
          </Stack>

          {/* 3x3 Grid of Support Areas */}
          <Grid container spacing={3}>
            {supportFrameworks.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: "flex" }}>
                <Card
                  elevation={0}
                  sx={{
                    p: 3.5,
                    width: "100%",
                    borderRadius: "16px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E5E9",
                    display: "flex",
                    alignItems: "center",
                    gap: 2.5,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: "rgba(248, 93, 0, 0.25)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(248, 93, 0, 0.05)",
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
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14.5px",
                      fontWeight: 700,
                      color: "#0B1727",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Why IAIRE Matters closing banner */}
          <Box
            sx={{
              width: "100%",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #090A0E 0%, #161720 100%)",
              p: { xs: 5, md: 7 },
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Ambient orange glow inside the banner */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-50%",
                right: "-10%",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(248, 93, 0, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
                filter: "blur(50px)",
                zIndex: 0,
              }}
            />

            <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={2}>
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
                    WHY IAIRE MATTERS
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: { xs: "24px", md: "30px" },
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Preparing Learners for a Future that Belongs to Innovators
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      color: "#9D9DA7",
                      lineHeight: 1.6,
                    }}
                  >
                    The future belongs to students who can think critically, solve problems, innovate responsibly, and create new value. IAIRE helps schools prepare learners for that future.
                  </Typography>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
                <Button
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    color: "#FFFFFF",
                    backgroundColor: "#1B365D",
                    borderRadius: "30px",
                    p: "14px 32px",
                    boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e05400",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                    },
                  }}
                >
                  Explore IAIRE Programs
                </Button>
              </Grid>
            </Grid>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default WhatWeDo;