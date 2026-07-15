"use client";

import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ThreeEarth from "./ThreeGlobe";
import Link from "next/link";

const statsSets = [
  {
    title: "Ecosystem Growth",
    metrics: [
      { label: "Institutions", value: "150+", badge: "+12%" },
      { label: "Teachers", value: "2.4k+", badge: "+15%" },
      { label: "Students", value: "45k+", badge: "+20%" },
    ],
  },
  {
    title: "Impact & Output",
    metrics: [
      { label: "Patents", value: "85+", badge: "+18%" },
      { label: "Publications", value: "340+", badge: "+25%" },
      { label: "Startups", value: "18", badge: "+10%" },
    ],
  },
];

const HeroSection2 = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSetIndex((prev) => (prev === 0 ? 1 : 0));
        setFade(true);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSet = statsSets[currentSetIndex];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Grid Lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "25%",
          width: "1px",
          height: "100%",
          borderLeft: "1px dashed rgba(0, 0, 0, 0.05)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "100%",
          borderLeft: "1px dashed rgba(0, 0, 0, 0.05)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "75%",
          width: "1px",
          height: "100%",
          borderLeft: "1px dashed rgba(0, 0, 0, 0.05)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Background Glows */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(243, 94, 5, 0.35) 0%, rgba(243, 94, 5, 0.1) 45%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-25%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(243, 94, 5, 0.15) 0%, rgba(243, 94, 5, 0.05) 50%, rgba(255, 255, 255, 0) 80%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 0 } }}
      >
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} sx={{ pr: { md: 5 } }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "38px", md: "46px" },
                fontFamily: inter.style.fontFamily,
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                color: "#0A0A0B",
              }}
            >
              Shaping the Next Generation of Innovators, Researchers &
              Entrepreneurs
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                color: "#4A4A4F",
                lineHeight: 1.6,
                mt: 3,
              }}
            >
              IAIRE is a global platform dedicated to building a future where
              students do not just learn about the world — they learn how to
              improve it.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "12.5px", md: "13.5px" },
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                color: "#7E7E86",
                lineHeight: 1.6,
                mt: 1.5,
              }}
            >
              Through structured innovation education, research mentoring,
              educator certification, and global recognition platforms, we
              empower schools, teachers, and students to transform ideas into
              real-world solutions.
            </Typography>

            <Stack
              direction="row"
              sx={{ alignItems: "center", mt: 4 }}
              spacing={2}
            >
              <Link
                href="/signup/role-selection"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    fontSize: "14px",
                    fontFamily: inter.style.fontFamily,
                    textTransform: "none",
                    fontWeight: 600,
                    color: COLORS.WHITE,
                    backgroundColor: "#f35e05",
                    borderRadius: "30px",
                    p: "10px 24px",
                    boxShadow: "0 4px 14px rgba(243, 94, 5, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#d14e03",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(243, 94, 5, 0.4)",
                    },
                  }}
                >
                  Join the Ecosystem →
                </Button>
              </Link>
              <Link
                href="/signup/role-selection"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    fontSize: "14px",
                    color: COLORS.WHITE,
                    fontFamily: inter.style.fontFamily,
                    backgroundColor: COLORS.BLACK,
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: 600,
                    p: "10px 24px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#222",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                >
                  Become an IAIRE Partner
                </Button>
              </Link>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* 3D Earth Globe container */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "350px", sm: "450px", md: "600px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <ThreeEarth height="100%" />
            </Box>

            {/* Analysis Stats Overlay Card */}
            <Box
              sx={{
                position: { xs: "relative", md: "absolute" },
                bottom: { xs: "auto", md: "8%" },
                left: { xs: "auto", md: "5%" },
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                p: 2,
                zIndex: 5,
                width: "100%",
                maxWidth: "440px",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Typography
                sx={{
                  color: "#f35e05",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: inter.style.fontFamily,
                  mb: 1.5,
                  letterSpacing: "0.02em",
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0)" : "translateY(-3px)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                  textAlign: "center",
                }}
              >
                {currentSet.title}
              </Typography>

              <Grid
                container
                spacing={2}
                sx={{
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0)" : "translateY(5px)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
              >
                {currentSet.metrics.map((metric, i) => (
                  <Grid size={4} key={i} sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        color: "#8E8E93",
                        fontSize: "11px",
                        fontWeight: 500,
                        fontFamily: "monospace",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {metric.label}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: "#1D1D1F",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "#D1F8EC",
                          color: "#006C47",
                          fontSize: "9px",
                          fontWeight: 700,
                          borderRadius: "4px",
                          px: 0.5,
                          py: 0.15,
                        }}
                      >
                        {metric.badge}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection2;
