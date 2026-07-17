"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUserOutlined";
import professionalSocietyImg from "@/images/homepage/professional_society_vector.jpeg";
const ProfessionalSocietySection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Image with Sleek Glassmorphic Frame */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                lineHeight: 0,
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Image
                src={professionalSocietyImg}
                alt="IAIRE Professional Society standards representing innovation education"
                layout="responsive"
                placeholder="blur"
                style={{
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hovered ? "scale(1.04)" : "scale(1)",
                }}
              />

              {/* Floating Badge on Image */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                  borderRadius: "12px",
                  px: 2,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.25,
                  zIndex: 2,
                }}
              >
                <VerifiedUserIcon sx={{ color: "#1B365D", fontSize: 20 }} />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  US Nonprofit Society
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Text & CTAs */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3.5}>
              {/* Overtitle Section */}
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
                      color: "#1B365D",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Global Frameworks
                  </Typography>
                </Box>

                {/* Section Headline */}
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "36px", md: "42px" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                  }}
                >
                  A Professional Society for an <br />
                  <span style={{ color: "#1B365D" }}>
                    Innovation-Driven World
                  </span>
                </Typography>
              </Stack>

              {/* Body Text */}
              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "15.5px" },
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: 1.65,
                  }}
                >
                  The world is being reshaped by artificial intelligence,
                  automation, robotics, biotechnology, climate change,
                  healthcare transformation, sustainability challenges, and
                  rapid technological disruption. The learners of today will
                  need more than academic recall. They will need{" "}
                  <strong>
                    curiosity, critical thinking, research ability, ethical
                    judgment, creativity, collaboration, intellectual property
                    awareness, and entrepreneurial confidence
                  </strong>
                  .
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "15.5px" },
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: 1.6,
                  }}
                >
                  IAIRE exists to help educational institutions build these
                  capabilities systematically.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "15px" },
                    fontWeight: 400,
                    color: "#4B5563",
                    lineHeight: 1.65,
                  }}
                >
                  As a professional society, IAIRE develops standards,
                  competency frameworks, curricula, rubrics, documentation
                  processes, certification pathways, fellowship criteria,
                  mentoring structures, and quality-assurance mechanisms for the
                  emerging field of innovation, research, and entrepreneurship
                  education.
                </Typography>
              </Stack>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1 }}
              >
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#111827",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.35,
                      boxShadow: "0 4px 14px rgba(17, 24, 39, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#1F2937",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(17, 24, 39, 0.25)",
                      },
                    }}
                  >
                    Read Our Mission
                  </Button>
                </Link>

                <Link href="/programs" style={{ textDecoration: "none" }}>
                  <Button
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
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#1B365D",
                      borderColor: "#1B365D",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.35,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#122744",
                        color: "#122744",
                        backgroundColor: "rgba(248, 93, 0, 0.04)",
                        transform: "translateY(-2px)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    View Standards & Certification
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfessionalSocietySection;
