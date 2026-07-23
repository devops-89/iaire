"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const platformFeatures = [
  "Teacher training",
  "Student learning",
  "Project documentation",
  "Research resources",
  "Mentoring support",
  "Competition entry",
  "Certification tracking",
  "Implementation support",
];

// Miniature High-Fidelity Platform Dashboard Mockup
const PlatformDashboardMockup = () => (
  <Box
    sx={{
      width: "100%",
      height: { xs: "360px", sm: "400px" },
      backgroundColor: "#0D0D11",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "20px",
      p: 2,
      display: "flex",
      gap: 2,
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
      position: "relative",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "translateY(-6px) scale(1.01)",
        boxShadow: "0 30px 60px rgba(248, 93, 0, 0.1)",
        borderColor: "rgba(248, 93, 0, 0.25)",
      },
    }}
  >
    {/* Mini Sidebar */}
    <Box
      sx={{
        width: "28%",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        borderRadius: "12px",
        p: 1.5,
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid rgba(255, 255, 255, 0.03)",
      }}
    >
      <Stack spacing={2.5}>
        {/* Logo block */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#1B365D",
            }}
          />
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
              fontFamily: "monospace",
            }}
          >
            IAIRE PORTAL
          </Typography>
        </Stack>

        {/* Menu Nodes */}
        <Stack spacing={0.75}>
          {[
            { label: "Overview", active: true },
            { label: "Training", active: false },
            { label: "Research", active: false },
            { label: "Mentoring", active: false },
            { label: "Certificates", active: false },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                px: 1.5,
                py: 1,
                borderRadius: "6px",
                backgroundColor: item.active
                  ? "rgba(248, 93, 0, 0.12)"
                  : "transparent",
                color: item.active ? "#1B365D" : "#8E8E93",
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: item.active
                    ? "rgba(248, 93, 0, 0.12)"
                    : "rgba(255, 255, 255, 0.04)",
                  color: item.active ? "#1B365D" : "#FFFFFF",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  fontFamily: inter.style.fontFamily,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      {/* User profile node */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ opacity: 0.8 }}
      >
        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: "#1B365D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "9px",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          M
        </Box>
        <Typography
          sx={{
            fontSize: "9px",
            fontWeight: 600,
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Mentor Hub
        </Typography>
      </Stack>
    </Box>

    {/* Main Content Area */}
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Top Stats Cards */}
      <Grid container spacing={1.5}>
        <Grid size={6}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "10px",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "9px",
                color: "#8E8E93",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontFamily: "monospace",
              }}
            >
              Training Progress
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="baseline"
              sx={{ mt: 0.5 }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontFamily: inter.style.fontFamily,
                }}
              >
                84%
              </Typography>
              <Typography
                sx={{ fontSize: "9px", color: "#00B159", fontWeight: 700 }}
              >
                +12%
              </Typography>
            </Stack>
            {/* Mini Progress Bar */}
            <Box
              sx={{
                width: "100%",
                height: 3,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 10,
                mt: 1,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "84%",
                  height: "100%",
                  backgroundColor: "#00B159",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "10px",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "9px",
                color: "#8E8E93",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontFamily: "monospace",
              }}
            >
              Ecosystem Reach
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="baseline"
              sx={{ mt: 0.5 }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontFamily: inter.style.fontFamily,
                }}
              >
                45k+
              </Typography>
              <Typography
                sx={{ fontSize: "9px", color: "#1B365D", fontWeight: 700 }}
              >
                Students
              </Typography>
            </Stack>
            {/* Mini Progress Bar */}
            <Box
              sx={{
                width: "100%",
                height: 3,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 10,
                mt: 1,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "70%",
                  height: "100%",
                  backgroundColor: "#1B365D",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Active Projects Registry Feed */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.015)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "12px",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: inter.style.fontFamily,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            pb: 1,
          }}
        >
          Active Projects Registry
        </Typography>

        <Stack spacing={1} sx={{ overflow: "hidden" }}>
          {[
            {
              name: "Solar Desalination Rover",
              status: "IP Pending",
              color: "#3B82F6",
              bg: "rgba(59, 130, 246, 0.12)",
            },
            {
              name: "Biodegradable Filter V2",
              status: "Mentoring",
              color: "#1B365D",
              bg: "rgba(248, 93, 0, 0.12)",
            },
            {
              name: "AI Agriculture Crop Health",
              status: "Certified",
              color: "#00B159",
              bg: "rgba(0, 177, 89, 0.12)",
            },
          ].map((proj, idx) => (
            <Stack
              key={idx}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: 1,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#E2E2E9",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "160px",
                }}
              >
                {proj.name}
              </Typography>
              <Box
                sx={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: proj.color,
                  backgroundColor: proj.bg,
                  px: 1,
                  py: 0.25,
                  borderRadius: "4px",
                  textTransform: "uppercase",
                }}
              >
                {proj.status}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  </Box>
);

const OrangeCheck = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      mt: 0.25,
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

const PlatformSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle warm accent glow on the top-right */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Heading & Content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3.5}>
              <SectionBadge label="DIGITAL INFRASTRUCTURE" align="left" />

              <Typography
                variant="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "32px", md: "40px" },
                  fontWeight: 800,
                  color: "#0B1727",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                A Digital Platform for Scalable Impact
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
                  To make innovation education accessible globally, IAIRE uses a
                  digital-first delivery model.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  Through the IAIRE digital platform, schools, teachers, and
                  students can access learning modules, mentoring resources,
                  templates, implementation guides, certification pathways,
                  research support, innovation documentation, and program
                  updates.
                </Typography>
              </Stack>

              {/* Feature Grid List */}
              <Box sx={{ pt: 1 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#121214",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                  }}
                >
                  The platform supports:
                </Typography>
                <Grid container spacing={2}>
                  {platformFeatures.map((feat, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="flex-start"
                      >
                        <OrangeCheck />
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "14.5px",
                            fontWeight: 500,
                            color: "#3D3D48",
                            lineHeight: 1.4,
                          }}
                        >
                          {feat}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>

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
                This enables IAIRE programs to reach schools across cities,
                regions, countries, and continents.
              </Typography>

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
                    Explore the Digital Platform
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: High-Fidelity Mockup Dashboard */}
          <Grid size={{ xs: 12, md: 7 }}>
            <PlatformDashboardMockup />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlatformSection;
