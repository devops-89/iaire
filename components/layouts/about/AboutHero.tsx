"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RevolvingBadge = ({
  label,
  startAngle,
  radius,
  tiltX = 60,
  tiltY = -15,
  speed = 28,
  clockwise = true,
}: {
  label: string;
  startAngle: number;
  radius: number;
  tiltX?: number;
  tiltY?: number;
  speed?: number;
  clockwise?: boolean;
}) => {
  const animName = `orbit-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const dir = clockwise ? 1 : -1;

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 2,
        transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          animation: `${animName} ${speed}s linear infinite`,
          pointerEvents: "auto",
          [`@keyframes ${animName}`]: {
            "0%": {
              transform: `rotateZ(${startAngle}deg) translateX(${radius}px) rotateZ(${-startAngle}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`,
            },
            "100%": {
              transform: `rotateZ(${startAngle + dir * 360}deg) translateX(${radius}px) rotateZ(${-(startAngle + dir * 360)}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`,
            },
          },
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderLeft: "3px solid #3B82F6",
          borderRadius: "8px",
          px: 1.75,
          py: 1,
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
          "&:hover": {
            transform: "scale(1.05)",
            borderColor: "rgba(59, 130, 246, 0.4)",
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "10px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

const AboutHero = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "120px", md: "140px" }, // More top padding to prevent header overlap
        pb: { xs: "60px", md: "70px" },
        background: "linear-gradient(135deg, #090A0E 0%, #12131A 100%)",
        color: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxSizing: "border-box",
      }}
    >
      {/* Background glowing flares */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Abstract dotted mesh grid */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.02,
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          {/* Left Column: Heading, Pitch & Key Statistics */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack
              spacing={3.5}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    color: "#3B82F6",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                  }}
                >
                  Academic Society
                </Box>
              </Box>

              {/* Title & Subtitle */}
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 900,
                    fontSize: { xs: "2.8rem", sm: "3.2rem", md: "3.8rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    background:
                      "linear-gradient(180deg, #FFFFFF 30%, #AEB5C0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About IAIRE
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#3B82F6",
                    letterSpacing: "-0.01em",
                  }}
                >
                  An Independent Academic and Professional Society
                </Typography>
              </Stack>

              {/* Governance Body Copy (Simplified and Premium) */}
              <Stack spacing={2} sx={{ color: "#9D9DA7", maxWidth: "580px" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                  }}
                >
                  <strong>IAIRE</strong> is an independent U.S. nonprofit
                  academic and professional society incorporated in the State of
                  Texas, dedicated to advancing innovation, research, and
                  entrepreneurship education globally through standards
                  development, certification frameworks, and peer-reviewed
                  mentorship systems.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                  }}
                >
                  Governed by its own bylaws and peer-review processes, IAIRE
                  adopts professional practices employed by established academic
                  societies worldwide, with leadership oversight provided by its
                  Scientific Board.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1, width: "100%" }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/membership" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#FFFFFF",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.25,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#FFFFFF",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Explore Membership
                  </Button>
                </Link>

                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={
                      <ArrowForwardIcon
                        className="arrow-icon"
                        sx={{ transition: "transform 0.25s ease" }}
                      />
                    }
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#9D9DA7",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.25,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#FFFFFF",
                        color: "#FFFFFF",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        transform: "translateY(-2px)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    Contact IAIRE
                  </Button>
                </Link>
              </Stack>

              {/* Platform Metrics Row */}
              <Box
                sx={{
                  pt: 3,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5 },
                  justifyContent: { xs: "center", md: "flex-start" },
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                <Stack spacing={0.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                    }}
                  >
                    150+
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: "#3B82F6",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Innovation Hubs
                  </Typography>
                </Stack>

                <Stack spacing={0.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                    }}
                  >
                    45k+
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: "#3B82F6",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Young Innovators
                  </Typography>
                </Stack>

                <Stack spacing={0.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                    }}
                  >
                    85+
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "10.5px",
                      fontWeight: 700,
                      color: "#3B82F6",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Patents & Filings
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Holographic CSS Core Display */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "320px", sm: "380px", md: "400px" },
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Concentric rings */}
              <Box
                sx={{
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(59, 130, 246, 0.2)",
                  transform: "rotateX(60deg) rotateY(-15deg)",
                  animation: "ring-spin-cw 20s linear infinite",
                  "@keyframes ring-spin-cw": {
                    "0%": {
                      transform: "rotateX(60deg) rotateY(-15deg) rotate(0deg)",
                    },
                    "100%": {
                      transform:
                        "rotateX(60deg) rotateY(-15deg) rotate(360deg)",
                    },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(255, 255, 255, 0.08)",
                  transform: "rotateX(60deg) rotateY(15deg)",
                  animation: "ring-spin-ccw 25s linear infinite",
                  "@keyframes ring-spin-ccw": {
                    "0%": {
                      transform: "rotateX(60deg) rotateY(15deg) rotate(360deg)",
                    },
                    "100%": {
                      transform: "rotateX(60deg) rotateY(15deg) rotate(0deg)",
                    },
                  },
                }}
              />

              {/* Glowing core sphere */}
              <Box
                sx={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.1) 0%, rgba(27, 54, 93, 0.4) 40%, rgba(9, 10, 14, 0.95) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.35)",
                  boxShadow:
                    "0 0 30px rgba(59, 130, 246, 0.25), inset 0 0 20px rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "pulse-glow 3s ease-in-out infinite",
                  "@keyframes pulse-glow": {
                    "0%, 100%": {
                      boxShadow:
                        "0 0 25px rgba(59, 130, 246, 0.25), inset 0 0 15px rgba(59, 130, 246, 0.15)",
                    },
                    "50%": {
                      boxShadow:
                        "0 0 45px rgba(59, 130, 246, 0.4), inset 0 0 25px rgba(59, 130, 246, 0.3)",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "0.15em",
                  }}
                >
                  IAIRE
                </Typography>
              </Box>

              {/* Revolving Glassmorphic Badges on respective ring lines */}
              <RevolvingBadge
                label="Innovation"
                startAngle={0}
                radius={125}
                tiltX={60}
                tiltY={-15}
                speed={20}
                clockwise={true}
              />
              <RevolvingBadge
                label="Research"
                startAngle={180}
                radius={125}
                tiltX={60}
                tiltY={-15}
                speed={20}
                clockwise={true}
              />
              <RevolvingBadge
                label="Entrepreneurship"
                startAngle={90}
                radius={170}
                tiltX={60}
                tiltY={15}
                speed={25}
                clockwise={false}
              />
              <RevolvingBadge
                label="Patent Pathways"
                startAngle={270}
                radius={170}
                tiltX={60}
                tiltY={15}
                speed={25}
                clockwise={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHero;
