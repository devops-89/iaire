"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";
import BeamButton from "@/components/widgets/BeamButton";
const activities = [
  "Standards development for innovation, research, and entrepreneurship education",
  "Certification frameworks for schools, educators, and students",
  "Fellowship and professional recognition pathways",
  "Teacher training and mentor certification",
  "Student innovation and research pathways",
  "School innovation hub frameworks",
  "Research and intellectual property guidance",
  "Innovation competitions and recognition platforms",
  "Professional development and knowledge exchange",
  "Governance, ethics, quality assurance, and peer-review processes",
];

const BlueCheck = () => (
  <Box
    className="check-box"
    sx={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "rgba(27, 54, 93, 0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#1B365D",
      transition: "all 0.3s ease",
    }}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

const WhatWeDoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "clip",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(70px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          <Grid
            size={{ xs: 12, md: 5 }}
            data-aos="fade-right"
            data-aos-duration="800"
            sx={{
              position: { md: "sticky" },
              top: { md: "140px" },
              height: { md: "fit-content" },
              alignSelf: "flex-start",
            }}
          >
            <Stack spacing={4}>
              <Stack spacing={1.5}>
                <SectionBadge
                  label="Core Operations"
                  align="left"
                  textColor="#1B365D"
                  glowColor="#1B365D"
                  borderColor="rgba(27, 54, 93, 0.25)"
                  backgroundColor="rgba(27, 54, 93, 0.08)"
                />

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", md: "44px" },
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  What IAIRE Does
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "16px",
                  color: "#4B5563",
                  lineHeight: 1.6,
                }}
              >
                IAIRE supports the complete innovation, research, and
                entrepreneurship education ecosystem through:
              </Typography>

              <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 1 }}
                >
                  <Link
                    href="/about"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <BeamButton
                      variant="contained"
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14.5px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.WHITE,
                        backgroundColor: "#1B365D",
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.4,
                        boxShadow: "0 8px 20px rgba(27, 54, 93, 0.2)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "#122744",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 25px rgba(27, 54, 93, 0.3)",
                        },
                      }}
                    >
                      Explore Our Work
                    </BeamButton>
                  </Link>

                  <Link
                    href="/programs"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <BeamButton
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          className="arrow-icon"
                          sx={{ transition: "transform 0.25s ease" }}
                        />
                      }
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14.5px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#1B365D",
                        borderColor: "#1B365D",
                        borderWidth: "1.5px",
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.4,
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderWidth: "1.5px",
                          borderColor: "#122744",
                          color: "#122744",
                          backgroundColor: "rgba(27, 54, 93, 0.04)",
                          transform: "translateY(-2px)",
                          "& .arrow-icon": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      View Programs
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Grid of Activities */}
          <Grid
            size={{ xs: 12, md: 7 }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <Grid container spacing={2.5}>
              {activities.map((activity, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    key={index}
                    sx={{ display: "flex" }}
                  >
                    <Box
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E5E5E9",
                        borderRadius: "16px",
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2.5,
                        width: "100%",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: isHovered
                          ? "translateY(-4px)"
                          : "translateY(0)",
                        boxShadow: isHovered
                          ? "0 10px 25px rgba(27, 54, 93, 0.05)"
                          : "none",
                        borderColor: isHovered
                          ? "rgba(27, 54, 93, 0.25)"
                          : "#E5E5E9",
                        "&:hover .check-box": {
                          backgroundColor: "#1B365D",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      <BlueCheck />
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#1F2937",
                          lineHeight: 1.45,
                          transition: "color 0.25s ease",
                        }}
                      >
                        {activity}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}

              <Box sx={{ display: { lg: "none", xs: "block" }, width: "100%" }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 1, width: "100%" }}
                >
                  <Link
                    href="/about"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <BeamButton
                      variant="contained"
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14.5px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.WHITE,
                        backgroundColor: "#1B365D",
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.4,
                        boxShadow: "0 8px 20px rgba(27, 54, 93, 0.2)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "#122744",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 25px rgba(27, 54, 93, 0.3)",
                        },
                      }}
                      fullWidth
                    >
                      Explore Our Work
                    </BeamButton>
                  </Link>

                  <Link
                    href="/programs"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <BeamButton
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          className="arrow-icon"
                          sx={{ transition: "transform 0.25s ease" }}
                        />
                      }
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14.5px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#1B365D",
                        borderColor: "#1B365D",
                        borderWidth: "1.5px",
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.4,
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderWidth: "1.5px",
                          borderColor: "#122744",
                          color: "#122744",
                          backgroundColor: "rgba(27, 54, 93, 0.04)",
                          transform: "translateY(-2px)",
                          "& .arrow-icon": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                      fullWidth
                    >
                      View Programs
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDoSection;
