"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import heroImg from "@/public/images/get-involved/chapter_launch_scene.png";
import BeamButton from "@/components/widgets/BeamButton";

const supportAreas = [
  "Teacher training",
  "Student onboarding",
  "Mentoring support",
  "Institutional support",
  "Local events and seminars",
  "Innovation showcases",
  "Research and IP guidance",
  "Community engagement",
];

const ForChapters = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="chapters"
      sx={{
        height: { xs: "auto", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(90px)",
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
          {/* Left Column: Title, Details & CTA Buttons */}
          <Grid
            size={{ xs: 12, md: 6.2 }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Stack spacing={3.25} sx={{ width: "100%" }}>
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
                    backgroundColor: "rgba(27, 54, 93, 0.06)",
                    color: "#1B365D",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Partners & Chapters
                </Box>
              </Box>

              {/* Title & Description */}
              <Stack spacing={1.5}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "34px", md: "38px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Build Local Capacity <br />
                  <span style={{ color: "#1B365D" }}>
                    With Global Standards
                  </span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  <strong>IAIRE</strong> supports partnerships and chapters that
                  help deliver innovation, research, and entrepreneurship
                  education in local contexts while maintaining consistent
                  standards, ethics, and quality-assurance processes.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                {/* <Link
                  href="/signup/role-selection"
                  style={{ textDecoration: "none" }}
                >
                  <BeamButton
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.15,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Start a Chapter
                  </BeamButton>
                </Link> */}

                {/* <Link href="/contact" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#1B365D",
                      borderColor: "#1B365D",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.15,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#122744",
                        color: "#122744",
                        backgroundColor: "rgba(27, 54, 93, 0.04)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Partner With IAIRE
                  </BeamButton>
                </Link> */}

                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <BeamButton
                    endIcon={
                      <ArrowForwardIcon
                        className="arrow-icon"
                        sx={{ transition: "transform 0.25s ease" }}
                      />
                    }
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.15,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Contact Us
                  </BeamButton>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Visual and Support Checklist combined */}
          <Grid size={{ xs: 12, md: 5.8 }} sx={{ pl: { md: 2 } }}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                borderRadius: "24px",
                border: "1px solid rgba(27, 54, 93, 0.08)",
                background:
                  "linear-gradient(135deg, rgba(27, 54, 93, 0.01) 0%, rgba(255, 255, 255, 0.98) 100%)",
                boxShadow: "0 15px 35px rgba(27, 54, 93, 0.03)",
              }}
            >
              <Stack spacing={2.5} alignItems="center">
                {/* Flat Vector Chapter Launch Visual */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "180px", sm: "200px", md: "200px" },
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <Image
                    src={heroImg}
                    alt="IAIRE Partners & Chapters - Modern flat vector local school chapter community launch celebration scene illustration"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>

                {/* Checklist Content Container */}
                <Box sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#1B365D",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      mb: 1.5,
                    }}
                  >
                    Chapters and partners may support:
                  </Typography>

                  <Grid container spacing={1.25}>
                    {supportAreas.map((area, idx) => {
                      const isHovered = hoveredIdx === idx;
                      return (
                        <Grid
                          size={{ xs: 12, sm: 6 }}
                          key={idx}
                          sx={{ display: "flex" }}
                        >
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            sx={{
                              cursor: "default",
                              transform: isHovered
                                ? "translateX(3px)"
                                : "translateX(0)",
                              transition: "transform 0.2s ease",
                            }}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: isHovered ? "#3B82F6" : "#1B365D",
                                fontSize: 15,
                                flexShrink: 0,
                                transition: "color 0.2s ease",
                              }}
                            />
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "12px",
                                fontWeight: 600,
                                lineHeight: 1.3,
                                color: isHovered ? "#0B1727" : "#4B5563",
                                transition: "color 0.2s ease",
                              }}
                            >
                              {area}
                            </Typography>
                          </Stack>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForChapters;
