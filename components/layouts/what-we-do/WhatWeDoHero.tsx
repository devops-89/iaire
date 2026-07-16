"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import heroImg from "@/public/images/what-we-do/what_we_do_hero.png";

const pillars = [
  "Standards and quality assurance",
  "Educator training and certification",
  "Student innovation and research pathways",
  "Institutional innovation ecosystems",
  "Intellectual property, publication, and entrepreneurship support",
  "Recognition, fellowship, and professional advancement",
];

const WhatWeDoHero = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "120px", md: "100px" },
        pb: { xs: "60px", md: "40px" },
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
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
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
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Abstract mesh grid */}
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          
          {/* Left Column: Heading Copy & 6 Pillars Grid */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
              
              {/* Badge */}
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
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
                  What We Do
                </Box>
              </Box>

              {/* Title & Subtitle */}
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 900,
                    fontSize: { xs: "2.6rem", sm: "3rem", md: "3.4rem" },
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(180deg, #FFFFFF 30%, #AEB5C0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Advancing the Field of Innovation & Research Education
                </Typography>
              </Stack>

              {/* Core Description Copy */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  lineHeight: 1.5,
                  color: "#9D9DA7",
                  maxWidth: "580px",
                }}
              >
                <strong>IAIRE</strong> serves the emerging field of innovation, research, and entrepreneurship education by developing the standards, systems, and recognition structures needed to transform isolated school activities into measurable educational ecosystems.
              </Typography>

              {/* The 6 Pillars List */}
              <Stack spacing={1.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#3B82F6",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  IAIRE works across six core pillars:
                </Typography>
                
                <Grid container spacing={1.5}>
                  {pillars.map((pillar, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                      <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                        <Stack
                          direction="row"
                          spacing={1.25}
                          alignItems="flex-start"
                          onMouseEnter={() => setHoveredIdx(idx)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          sx={{
                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                            transition: "transform 0.2s ease",
                            cursor: "default",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: isHovered ? "#3B82F6" : "rgba(255,255,255,0.45)",
                              fontSize: 16,
                              mt: 0.25,
                              transition: "color 0.2s ease",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "13px",
                              fontWeight: isHovered ? 600 : 500,
                              lineHeight: 1.45,
                              color: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {pillar}
                          </Typography>
                        </Stack>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 1, width: "100%" }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/programs" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#090A0E",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.2,
                      boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#F3F4F6",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(255, 255, 255, 0.25)",
                      },
                    }}
                  >
                    Explore Standards
                  </Button>
                </Link>

                <Link href="/programs" style={{ textDecoration: "none" }}>
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
                      py: 1.2,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#FFFFFF",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    View Programs
                  </Button>
                </Link>

                <Link href="/membership" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
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
                      py: 1.2,
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
                    Become a Member
                  </Button>
                </Link>
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Premium Glowing Seal Visual */}
          <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "320px", sm: "380px", md: "400px" },
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-8px)" },
                },
              }}
            >
              {/* Outer soft glowing outline frame */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(27, 54, 93, 0.08) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />
              
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="IAIRE What We Do - Educational Ecosystem and Innovation Standards Shield"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDoHero;
