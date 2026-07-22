"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";
import OrbitingSystem from "./OrbitingSystem";
import TextReveal from "@/components/animations/TextReveal";
import BeamButton from "@/components/widgets/BeamButton";
const AboutHero = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      id="about"
      sx={{
        height: { xs: "auto", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: "110px", md: "90px" },
        pb: { xs: "50px", md: "40px" },
        background: "linear-gradient(135deg, #070C15 0%, #0F1726 100%)",
        color: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.18) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.02,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          <Grid
            data-aos="fade-right"
            data-aos-duration="900"
            size={{ xs: 12, md: 6.7 }}
          >
            <Stack spacing={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <SectionBadge
                label="Academic & Professional Society"
                // align={lg:"left",xs:"center"}
                align={phone ? "center" : "left"}
              />

              <Stack spacing={1}>
                <TextReveal
                  tag="h1"
                  text="About IAIRE"
                  delay={100}
                  stagger={120}
                  style={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 900,
                    fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.04em",
                    color: "#FFFFFF",
                    display: "block",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#E2E8F0",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  Establishing Global Standards for Innovation & Research
                  Education
                </Typography>
              </Stack>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#94A3B8",
                  maxWidth: "580px",
                }}
              >
                Incorporated in the State of Texas as an independent nonprofit
                society, <strong>IAIRE</strong> develops structured assessment
                rubrics, competency certification frameworks, and peer-reviewed
                mentorship systems. Our mission is to empower schools,
                educators, and student pathfinders to transform classroom ideas
                into measurable intellectual and scientific achievements.
              </Typography>

              <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 0.5, width: "100%" }}
                  alignItems={{ xs: "stretch", sm: "center" }}
                >
                  <Link href="/membership" style={{ textDecoration: "none" }}>
                    <BeamButton
                      variant="contained"
                      sx={{ width: "100%", whiteSpace: "nowrap" }}
                    >
                      Explore Membership
                    </BeamButton>
                  </Link>

                  <Link href="/contact" style={{ textDecoration: "none" }}>
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
                        whiteSpace: "nowrap",
                        color: COLORS.WHITE,
                      }}
                    >
                      Contact IAIRE
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>

              {/* Grid Stats Row - Fits perfectly in single viewport */}
              {/* <Grid
                container
                spacing={2}
                sx={{
                  width: "100%",
                  maxWidth: "580px",
                  pt: 2,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {[
                  { value: "150+", label: "School Hubs" },
                  { value: "45k+", label: "Young Innovators" },
                  { value: "85+", label: "Patents Filed" },
                ].map((stat, index) => (
                  <Grid size={{ xs: 4 }} key={index} sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        flex: 1,
                        py: 1.25,
                        px: 1,
                        borderRadius: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          backgroundColor: "rgba(59, 130, 246, 0.03)",
                          borderColor: "rgba(59, 130, 246, 0.25)",
                          boxShadow: "0 8px 24px rgba(59, 130, 246, 0.08)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "22px",
                          fontWeight: 900,
                          color: "#FFFFFF",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "9px",
                          fontWeight: 700,
                          color: "#64748B",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          mt: 0.25,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid> */}
            </Stack>
          </Grid>

          {/* Right Column: High-Tech Compact Orbiting solar system */}
          <Grid
            size={{ xs: 12, md: 5.3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OrbitingSystem />
          </Grid>
        </Grid>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 0.5, width: "100%" }}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <Link href="/membership" style={{ textDecoration: "none" }}>
              <BeamButton
                variant="contained"
                sx={{ width: "100%", whiteSpace: "nowrap" }}
              >
                Explore Membership
              </BeamButton>
            </Link>

            <Link href="/contact" style={{ textDecoration: "none" }}>
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
                  whiteSpace: "nowrap",
                  color: COLORS.WHITE,
                }}
              >
                Contact IAIRE
              </BeamButton>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHero;
