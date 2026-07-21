"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import heroImg from "@/public/images/membership/membership.jpg";
import BeamButton from "@/components/widgets/BeamButton";

const MemberHero = () => {
  return (
    <Box
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        background: "linear-gradient(135deg, #0B1528 0%, #1A2847 100%)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Decorative gradient glow elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
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
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
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
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          {/* Left Column: Title, Copy, and CTA Buttons */}
          <Grid
            size={{ xs: 12, md: 6.5 }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Stack spacing={4} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#93C5FD",
                    px: 2.25,
                    py: 0.75,
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 700,
                    fontFamily: inter.style.fontFamily,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  IAIRE Membership
                </Box>
              </Box>

              {/* Title & Narrative */}
              <Stack spacing={2.5}>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", sm: "40px", md: "46px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: COLORS.WHITE,
                  }}
                >
                  Membership in a <br />
                  <span
                    style={{
                      color: "#93C5FD",
                      textShadow: "0 0 40px rgba(147, 197, 253, 0.2)",
                    }}
                  >
                    Professional Society
                  </span>{" "}
                  for Innovation & Research
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <strong>IAIRE</strong> membership provides schools, educators,
                  and students access to a structured ecosystem of standards,
                  resources, certification pathways, mentoring support,
                  recognition opportunities, professional development, and
                  innovation and research programmes.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Membership is designed to support long-term participation,
                  quality assurance, measurable outcomes, and progression
                  through recognized achievement pathways.
                </Typography>
              </Stack>

              {/* CTA Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2.25}
                sx={{ pt: 1, width: "100%" }}
                alignItems="center"
              >
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton variant="contained" sx={{ whiteSpace: "nowrap" }}>
                    Become a Member
                  </BeamButton>
                </Link>

                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="outlined"
                    endIcon={
                      <ArrowForwardIcon
                        className="arrow-icon"
                        sx={{
                          transition: "transform 0.25s ease",
                          color: COLORS.WHITE,
                        }}
                      />
                    }
                    sx={{ whiteSpace: "nowrap", color: COLORS.WHITE }}
                  >
                    Contact Membership Team
                  </BeamButton>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Visual illustration container */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: { md: 4 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "360px", sm: "440px", md: "460px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Floating colorful accent blur background behind the image */}
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(27, 54, 93, 0.05) 70%)",
                  filter: "blur(40px)",
                  zIndex: 1,
                  animation: "pulseGlow 8s ease-in-out infinite",
                  "@keyframes pulseGlow": {
                    "0%, 100%": { transform: "scale(1)", opacity: 0.6 },
                    "50%": { transform: "scale(1.15)", opacity: 0.85 },
                  },
                }}
              />

              {/* The main card with glass borders and float effect */}
              <Box
                sx={{
                  position: "relative",
                  width: "90%",
                  height: "90%",
                  borderRadius: "28px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(12px)",
                  padding: "16px",
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
                  zIndex: 2,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "floatAnimation 6s ease-in-out infinite",
                  "@keyframes floatAnimation": {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-12px) rotate(0.5deg)" },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={heroImg}
                    alt="IAIRE Membership"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>

                {/* Glossy overlay sheen */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "-150%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)",
                    transform: "skewX(-20deg)",
                    animation: "sheen 6s infinite ease-in-out",
                    "@keyframes sheen": {
                      "0%": { left: "-150%" },
                      "50%": { left: "150%" },
                      "100%": { left: "150%" },
                    },
                  }}
                />
              </Box>

              {/* Floating Badge: Global Network */}
              <Box
                sx={{
                  position: "absolute",
                  top: "12%",
                  left: "-2%",
                  backgroundColor: "rgba(11, 21, 40, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  px: 2.5,
                  py: 1.5,
                  zIndex: 3,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  animation: "floatSlow 5s ease-in-out infinite",
                  "@keyframes floatSlow": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-6px)" },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#3B82F6",
                    boxShadow: "0 0 10px #3B82F6",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Global Network
                </Typography>
              </Box>

              {/* Floating Badge: Standards & Credentials */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "15%",
                  right: "-2%",
                  backgroundColor: "rgba(11, 21, 40, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  px: 2.5,
                  py: 1.5,
                  zIndex: 3,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  animation: "floatSlowReverse 5s ease-in-out infinite",
                  "@keyframes floatSlowReverse": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(6px)" },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    boxShadow: "0 0 10px #10B981",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Standards & Credentials
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberHero;
