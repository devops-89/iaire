"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import heroImg from "@/public/images/chapters/india_chapter_hero.png";
import BeamButton from "@/components/widgets/BeamButton";

const IndiaChapterHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "120px", sm: "140px", md: "180px" },
        pb: { xs: "80px", sm: "100px", md: "120px" },
        background: "radial-gradient(circle at 12% 15%, rgba(248, 93, 0, 0.08) 0%, transparent 40%), radial-gradient(circle at 88% 85%, rgba(255, 184, 0, 0.06) 0%, transparent 50%), #0A0C14",
        overflow: "hidden",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Decorative radial gradient blur circle */}
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "6%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "#FF7A00",
          filter: "blur(140px)",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Copy Content & Pathways */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={4}>
              
              {/* Premium Mini Badge */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#FF9F0A",
                    backgroundColor: "rgba(255, 159, 10, 0.08)",
                    border: "1px solid rgba(255, 159, 10, 0.2)",
                    borderRadius: "50px",
                    px: 2.5,
                    py: 0.8,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  India Chapter
                </Box>
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 900,
                  fontSize: { xs: "36px", sm: "46px", md: "52px" },
                  lineHeight: { xs: "1.25", sm: "1.2", md: "1.15" },
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                IAIRE{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF7A00 0%, #FFB800 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  India Chapter
                </span>
              </Typography>

              {/* Sub-headline */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 700,
                  lineHeight: "1.4",
                  color: "#FFB800",
                }}
              >
                Bringing the Global Innovation Ecosystem to Every School Across India
              </Typography>

              {/* Description Paragraphs Stack */}
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  India is home to one of the largest and most diverse student populations in the world. Millions of young minds enter classrooms every day — curious, creative, and full of potential. The IAIRE India Chapter exists to ensure that potential is not left untapped.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  Aligned with the vision of India's National Education Policy 2020, IAIRE India is dedicated to helping schools, educators, and students across the country build structured, sustainable ecosystems for innovation, research, critical thinking, and entrepreneurship.
                </Typography>

                <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ pt: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#FF9F0A", mt: 0.25, fontSize: 20 }} />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.65)",
                    }}
                  >
                    We believe every Indian student — regardless of geography, language, or background — deserves the opportunity to become a creator, researcher, and problem-solver.
                  </Typography>
                </Stack>
              </Stack>

              {/* CTA Action Button */}
              <Box sx={{ pt: 1 }}>
                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <BeamButton
                    endIcon={<KeyboardArrowRightIcon className="arrow-icon" />}
                    sx={{
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: inter.style.fontFamily,
                      borderRadius: "50px",
                      px: 4.5,
                      py: 1.6,
                      backgroundColor: "#1B365D",
                      color: "#FFFFFF",
                      textTransform: "none",
                      boxShadow: "0 10px 25px rgba(248, 93, 0, 0.35)",
                      transition: "all 0.25s ease",
                      "& .arrow-icon": {
                        transition: "transform 0.25s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(248, 93, 0, 0.45)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    Join the IAIRE India Chapter
                  </BeamButton>
                </Link>
              </Box>

            </Stack>
          </Grid>

          {/* Right Column: Constellation Network Mockup Frame */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": {
                    transform: "translateY(0px)",
                  },
                  "50%": {
                    transform: "translateY(-10px)",
                  },
                },
              }}
            >
              {/* Outer soft orange card glow border */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(255, 122, 0, 0.25) 0%, rgba(0, 149, 255, 0.08) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.55,
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
                  alt="IAIRE India Chapter Constellation Network Map"
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

export default IndiaChapterHero;
