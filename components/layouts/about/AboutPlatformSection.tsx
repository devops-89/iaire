"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

const platformFeatures = [
  "Teacher training modules",
  "Student learning resources",
  "Innovation curriculum",
  "Documentation templates",
  "Research resources",
  "Mentoring support",
  "Assessment tools",
  "Certification tracking",
  "Competition submissions",
  "Program announcements",
];

const AboutPlatformSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
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
          {/* Left Column: Heading, Features & Copy */}
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
            data-aos-duration="800"
            order={{ xs: 2, lg: 1 }}
          >
            <Stack spacing={3.5}>
              <SectionBadge label="DIGITAL ECOSYSTEM" align="left" />

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
                Digital Platform
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
                  A Digital-First Ecosystem for Global Innovation Education
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  The IAIRE Digital Platform enables schools, teachers, and
                  students to access innovation education from anywhere,
                  supporting learning, mentoring, and certification through one
                  integrated system.
                </Typography>
              </Stack>

              {/* Platform Features Grid */}
              <Box sx={{ pt: 1 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#121214",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                  }}
                >
                  Platform Features
                </Typography>
                <Grid container spacing={1.5}>
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
                            fontSize: "14px",
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

              {/* Scalable Callout */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  color: "#1B365D",
                  fontWeight: 500,
                  lineHeight: 1.65,
                  borderLeft: "2px solid #1B365D",
                  pl: 2.5,
                }}
              >
                <Box
                  component="span"
                  sx={{ fontWeight: 700, display: "block", mb: 0.5 }}
                >
                  Scalable. Accessible. Connected.
                </Box>
                The digital-first model allows IAIRE to serve schools across
                geographies while maintaining consistency and quality.
              </Typography>

              <Box sx={{ pt: 1.5, display: { lg: "block", xs: "none" } }}>
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
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Access the IAIRE Platform
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Platform Dashboard Mockup */}
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "24px",
                border: "1px solid #E5E5E9",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#F9F9FB",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 30px 60px rgba(27, 54, 93, 0.05)",
                  borderColor: "rgba(27, 54, 93, 0.15)",
                },
              }}
            >
              <Image
                src="/images/homepage/platform_dashboard_v2.png"
                alt="IAIRE Digital Platform Dashboard"
                width={1024}
                height={1024}
                layout="responsive"
                priority
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ pt: 1.5, display: { lg: "none", xs: "block" } }}>
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
                boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#122744",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                },
              }}
            >
              Access the IAIRE Platform
            </BeamButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPlatformSection;
