"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";

const OrangeCheck = () => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, mt: 0.25 }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="rgba(248, 93, 0, 0.12)" stroke="#F85D00" strokeWidth="2" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="#F85D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Box>
);

const indiaFocusAreas = [
  "Teacher capacity building",
  "Student innovation programs",
  "School Innovation Hubs",
  "India’s Top Young Innovators",
  "Digital-first implementation",
  "Research and patent support",
  "Critical thinking integration",
  "Holistic student development",
];

const IndiaSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle warm accent glow on the bottom-left */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          
          {/* Left Column: Heading & Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ width: 16, height: 2, backgroundColor: "#F85D00" }} />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#F85D00",
                    textTransform: "uppercase",
                  }}
                >
                  NATIONAL CHAPTER
                </Typography>
              </Box>

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
                IAIRE India Chapter
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
                  IAIRE India Chapter is dedicated to bringing the global IAIRE ecosystem to schools, teachers, and students across India.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  Aligned with the vision of the National Education Policy 2020, IAIRE India supports institutions in promoting creativity, critical thinking, experiential learning, innovation, research orientation, entrepreneurship, and real-world problem-solving.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  IAIRE India works with schools, education boards, educators, parents, students, and partners to establish sustainable Innovation, Research & Entrepreneurship ecosystems across India.
                </Typography>
              </Stack>

              {/* Focus Area list (2-column layout) */}
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
                  Key focus areas include:
                </Typography>
                <Grid container spacing={2}>
                  {indiaFocusAreas.map((area, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
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
                          {area}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ pt: 1.5 }}>
                <Button
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    color: "#FFFFFF",
                    backgroundColor: "#F85D00",
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
                  Visit IAIRE India Chapter
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Custom Generated Illustration */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                  boxShadow: "0 30px 60px rgba(248, 93, 0, 0.08)",
                  borderColor: "rgba(248, 93, 0, 0.2)",
                },
              }}
            >
              <Image
                src="/images/homepage/india_chapter.png"
                alt="IAIRE India Chapter"
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
      </Container>
    </Box>
  );
};

export default IndiaSection;
