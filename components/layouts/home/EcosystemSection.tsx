"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";

const OrangeCheck = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(248, 93, 0, 0.15)"
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

const ecosystemItems = [
  "Teacher training and certification",
  "Student innovation pathways",
  "School-based Innovation Hubs",
  "Digital learning resources",
  "Structured mentoring frameworks",
  "Research and intellectual property support",
  "National and international competitions",
  "Recognition for schools, teachers, and students",
];

const EcosystemSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#0D0D11",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - subtle orange glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Heading & Paragraphs */}
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
                  THE SYSTEM
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                From Classrooms to Innovation Ecosystems
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#9D9DA7",
                    lineHeight: 1.6,
                  }}
                >
                  Every school has creative students. Every teacher has the
                  potential to inspire innovation. Every institution can become
                  a center of research, creativity, and entrepreneurship.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#9D9DA7",
                    lineHeight: 1.6,
                  }}
                >
                  But for innovation to thrive, schools need more than
                  enthusiasm.{" "}
                  <Box
                    component="span"
                    sx={{ color: "#FFFFFF", fontWeight: 600 }}
                  >
                    They need a system.
                  </Box>{" "}
                  IAIRE provides that system.
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
                  Our approach helps schools move from isolated projects to a
                  continuous innovation culture.
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
                    Discover the IAIRE Ecosystem
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Grid of System Components */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2.5}>
              {ecosystemItems.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "14px",
                      p: 3,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      width: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        borderColor: "rgba(248, 93, 0, 0.3)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <OrangeCheck />
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#E2E2E9",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </Typography>
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

export default EcosystemSection;
