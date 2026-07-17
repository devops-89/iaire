"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const pillars = [
  {
    num: "01",
    title: "Standards & Quality Assurance",
    desc: "Developing structured rubrics, guidelines, and quality benchmarks for educational programs.",
  },
  {
    num: "02",
    title: "Educator Certification",
    desc: "Elevating teacher competency as certified Innovation and Research Mentors.",
  },
  {
    num: "03",
    title: "Student Pathways",
    desc: "Empowering young minds through structured ideation, research mentoring, and patent filings.",
  },
  {
    num: "04",
    title: "School Innovation Hubs",
    desc: "Establishing dedicated School Innovation Hubs to foster institutional creativity.",
  },
  {
    num: "05",
    title: "Intellectual Property Support",
    desc: "Providing guidance on patent filing, publishing manuscripts, and protecting inventorship.",
  },
  {
    num: "06",
    title: "Fellowship & Recognition",
    desc: "Awarding voluntary academic fellowships and certifications to recognize excellence.",
  },
];

const WhatWeDoHero = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: "140px", md: "130px" },
        pb: { xs: "80px", md: "80px" },
        background: "linear-gradient(135deg, #070C15 0%, #0F1726 100%)",
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
          top: "10%",
          left: "25%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "20%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={{ xs: 6, md: 7.5 }} alignItems="center">
          {/* Top Section: Centered Title Copy */}
          <Box sx={{ textAlign: "center", width: "100%", maxWidth: "880px" }}>
            <Stack spacing={3} alignItems="center">
              {/* Badge */}
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

              {/* Title */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 900,
                  fontSize: { xs: "2.6rem", sm: "3.2rem", md: "4rem" },
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  background:
                    "linear-gradient(180deg, #FFFFFF 30%, #AEB5C0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Advancing the Field of Innovation & Research Education
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#9D9DA7",
                  maxWidth: "740px",
                }}
              >
                <strong>IAIRE</strong> serves the emerging field of innovation,
                research, and entrepreneurship education by developing the
                standards, systems, and recognition structures needed to
                transform isolated school activities into measurable educational
                ecosystems.
              </Typography>
            </Stack>
          </Box>

          {/* Middle Section: Bento Grid of 6 Core Pillars */}
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                fontWeight: 700,
                color: "#3B82F6",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textAlign: "center",
                mb: 4.5,
              }}
            >
              IAIRE works across six core pillars
            </Typography>

            <Grid container spacing={3.25}>
              {pillars.map((pillar, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    key={idx}
                    sx={{ display: "flex" }}
                  >
                    <Card
                      elevation={0}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      sx={{
                        width: "100%",
                        p: 3,
                        borderRadius: "20px",
                        border: isHovered
                          ? "1px solid #93C5FD"
                          : "1px solid rgba(255, 255, 255, 0.08)",
                        backgroundColor: isHovered
                          ? "rgba(147, 197, 253, 0.05)"
                          : "rgba(255, 255, 255, 0.02)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        cursor: "default",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: isHovered
                          ? "translateY(-4px)"
                          : "translateY(0)",
                        boxShadow: isHovered
                          ? "0 12px 30px rgba(147, 197, 253, 0.12)"
                          : "none",
                      }}
                    >
                      {/* Monospace Indicator Badge */}
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "8px",
                          backgroundColor: isHovered
                            ? "#93C5FD"
                            : "rgba(255, 255, 255, 0.08)",
                          color: isHovered ? "#070C15" : "#93C5FD",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "monospace",
                          fontSize: "12px",
                          fontWeight: 800,
                          transition: "all 0.2s ease",
                        }}
                      >
                        {pillar.num}
                      </Box>

                      {/* Header Title */}
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "16px",
                          fontWeight: 700,
                          color: isHovered
                            ? "#FFFFFF"
                            : "rgba(255, 255, 255, 0.9)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {pillar.title}
                      </Typography>

                      {/* Explanation Description */}
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12.5px",
                          lineHeight: 1.5,
                          color: "rgba(255, 255, 255, 0.65)",
                        }}
                      >
                        {pillar.desc}
                      </Typography>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* Bottom Section: Centered Actions Row */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.25}
            sx={{
              pt: 2,
              width: "100%",
              justifyItems: "center",
              justifyContent: "center",
            }}
            alignItems="center"
          >
            <Link href="/programs" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  borderWidth: "1.5px",
                  borderRadius: "100px",
                  px: 4.5,
                  py: 1.35,
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

            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    className="arrow-icon"
                    sx={{ transition: "transform 0.25s ease" }}
                  />
                }
                sx={{
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#9D9DA7",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  borderWidth: "1.5px",
                  borderRadius: "100px",
                  px: 4.5,
                  py: 1.35,
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
      </Container>
    </Box>
  );
};

export default WhatWeDoHero;
