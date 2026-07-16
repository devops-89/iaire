"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import PsychologyIcon from "@mui/icons-material/PsychologyOutlined";

const SchoolEcosystemSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#1B365D",
                      textTransform: "uppercase",
                    }}
                  >
                    Dual Framework
                  </Typography>
                </Box>

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
                  Building School Innovation Ecosystems
                </Typography>
              </Stack>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: 650,
                    color: "#111827",
                    lineHeight: 1.5,
                  }}
                >
                  Innovation cannot remain an occasional event. It must become a continuous educational practice.
                </Typography>
                
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#4B5563",
                    lineHeight: 1.6,
                  }}
                >
                  IAIRE helps schools build sustainable innovation and research ecosystems through a dual implementation framework.
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row", md: "column" }}
                spacing={2}
                sx={{ pt: 1, width: "100%" }}
                alignItems={{ xs: "stretch", sm: "center", md: "flex-start" }}
              >
                <Link href="/signup/role-selection" style={{ textDecoration: "none", width: "100%", maxWidth: "340px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
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
                    Build an Innovation Ecosystem
                  </Button>
                </Link>

                <Link href="/membership" style={{ textDecoration: "none", width: "100%", maxWidth: "340px" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
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
                    Explore School Membership
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Dynamic Dual Framework Implementation Cards */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 4 } }}>
            <Stack spacing={4}>
              
              {/* Card 1: Top-down capacity building */}
              <Box
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E5E9",
                  borderRadius: "20px",
                  p: { xs: 3, sm: 4 },
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredCard === 1 ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hoveredCard === 1 ? "0 15px 35px rgba(27, 54, 93, 0.06)" : "none",
                  borderColor: hoveredCard === 1 ? "rgba(27, 54, 93, 0.25)" : "#E5E5E9",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    backgroundColor: hoveredCard === 1 ? "#1B365D" : "rgba(27, 54, 93, 0.07)",
                    color: hoveredCard === 1 ? "#FFFFFF" : "#1B365D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 26 }} />
                </Box>
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#1B365D",
                      letterSpacing: "0.05em",
                    }}
                  >
                    PILLAR 01 / TOP-DOWN CAPACITY
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    Educator Mentor Certification
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14.5px",
                      color: "#4B5563",
                      lineHeight: 1.55,
                    }}
                  >
                    Training and certifying educators as <strong>Innovation and Research Mentors</strong> to lead internal knowledge development and maintain institutional excellence.
                  </Typography>
                </Stack>
              </Box>

              {/* Card 2: Bottom-up student engagement */}
              <Box
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E5E9",
                  borderRadius: "20px",
                  p: { xs: 3, sm: 4 },
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredCard === 2 ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hoveredCard === 2 ? "0 15px 35px rgba(27, 54, 93, 0.06)" : "none",
                  borderColor: hoveredCard === 2 ? "rgba(27, 54, 93, 0.25)" : "#E5E5E9",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    backgroundColor: hoveredCard === 2 ? "#1B365D" : "rgba(27, 54, 93, 0.07)",
                    color: hoveredCard === 2 ? "#FFFFFF" : "#1B365D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <PsychologyIcon sx={{ fontSize: 26 }} />
                </Box>
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#1B365D",
                      letterSpacing: "0.05em",
                    }}
                  >
                    PILLAR 02 / BOTTOM-UP ENGAGEMENT
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    Student Innovation Pathways
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14.5px",
                      color: "#4B5563",
                      lineHeight: 1.55,
                    }}
                  >
                    Motivating and guiding students through structured <strong>innovation, research, intellectual property, and entrepreneurship pathways</strong>.
                  </Typography>
                </Stack>
              </Box>

              {/* Bottom Summary Paragraph */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: 1.6,
                  textAlign: "center",
                  px: 2,
                  fontStyle: "italic",
                }}
              >
                Together, these pathways help schools develop long-term institutional capability while preparing students to become innovators, researchers, inventors, entrepreneurs, and responsible problem-solvers.
              </Typography>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default SchoolEcosystemSection;
