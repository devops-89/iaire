"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import heroImg from "@/public/images/programs/programs_roadmap_blueprint.png";

const ProgramHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: "120px", sm: "140px", md: "170px" },
        pb: { xs: "80px", md: "100px" },
        background: "linear-gradient(180deg, #07080C 0%, #0D1017 100%)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Background glowing spheres */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#1B365D",
          filter: "blur(180px)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#0095FF",
          filter: "blur(180px)",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Heading Copy & Description */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={4}>
              
              {/* Category tag badge */}
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
                  IAIRE Programs
                </Typography>
              </Box>

              {/* Main Title */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", sm: "38px", md: "44px" },
                  color: "#FFFFFF",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.15,
                }}
              >
                A Complete Ecosystem of Programs for Schools, Educators & Students
              </Typography>

              {/* Description Paragraphs */}
              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: "1.65",
                  }}
                >
                  IAIRE offers a comprehensive, interconnected set of programs designed to build innovation capability at every level of education — from the classroom teacher to the student innovator to the institution as a whole.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.6)",
                    lineHeight: "1.65",
                  }}
                >
                  Each program is structured, practical, and designed to deliver measurable outcomes. Together, they form a complete pathway from awareness to action, from learning to recognition, and from ideas to real-world impact.
                </Typography>
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Blueprint Schematic Visual */}
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
                    transform: "translateY(-8px)",
                  },
                },
              }}
            >
              {/* Outer soft glowing outline frame */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(255, 122, 0, 0.2) 0%, rgba(0, 149, 255, 0.08) 100%)",
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
                  alt="IAIRE Academic Programs Roadmap & Curriculum Pathways Blueprint Schematic"
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

export default ProgramHero;