"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import heroImg from "@/public/images/chapters/india_movement_hero.png";
import BeamButton from "@/components/widgets/BeamButton";

const JoinIndiaMovement = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#07080C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative radial glows */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          backgroundColor: "#1B365D",
          filter: "blur(180px)",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Copy Content & Quote & CTA */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={4}>
              
              {/* Section Subtitle Tag */}
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2.5px",
                    color: "#1B365D",
                    textTransform: "uppercase",
                  }}
                >
                  Get Involved
                </Typography>
              </Box>

              {/* Main Title */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", sm: "38px", md: "44px" },
                  color: "#FFFFFF",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.15,
                }}
              >
                Join the IAIRE <br />
                India Movement
              </Typography>

              {/* Description Paragraphs */}
              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: "1.65",
                  }}
                >
                  The future of India will be shaped by students who can think, question, research, and build. IAIRE India Chapter is committed to ensuring that every school in India has the opportunity to develop those students — and that every student has the opportunity to become one.
                </Typography>
                
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: "1.65",
                  }}
                >
                  The movement is growing. Schools are building Innovation Hubs. Teachers are becoming certified mentors. Students are solving real problems and earning recognition on national and international stages. This is your invitation to be part of it.
                </Typography>
              </Stack>

              {/* Frosted Quote Box */}
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "24px",
                  p: { xs: 3.5, sm: 4 },
                  position: "relative",
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 48,
                    color: "rgba(248, 93, 0, 0.15)",
                    position: "absolute",
                    top: 15,
                    left: 15,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "15px", sm: "16px" },
                    fontWeight: 500,
                    fontStyle: "italic",
                    lineHeight: "1.6",
                    color: "#FFFFFF",
                    position: "relative",
                    zIndex: 2,
                    pl: 4,
                  }}
                >
                  "India's greatest resource is not its technology or its infrastructure. It is its young minds. IAIRE India exists to give those minds a structure, a platform, and a future."
                </Typography>
              </Box>

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

          {/* Right Column: Dynamic Constellation Map frame */}
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
                  alt="IAIRE India Chapter Educational & Technological Network Map"
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

export default JoinIndiaMovement;
