"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import heroImg from "@/public/images/get-involved/mentor_training_scene.png";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const ForEducators = () => {
  return (
    <Box
      id="educators"
      sx={{
        height: { xs: "auto", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#F8F9FC",
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
          top: "10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
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
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          {/* Image Column on Left (for desktop, second on mobile) */}
          <Grid size={{ xs: 12, md: 5.2 }} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "320px", sm: "380px", md: "400px" },
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-8px)" },
                },
              }}
            >
              {/* Outer soft glowing outline frame */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(27, 54, 93, 0.05) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 25px 50px rgba(27, 54, 93, 0.06)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="IAIRE For Educators - Professional flat vector mentor training program classroom scene illustration"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>
            <Box sx={{ display: { lg: "none", xs: "block" }, mt: 2 }}>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <BeamButton
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
                    py: 1.1,
                    boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      backgroundColor: "#122744",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                    },
                  }}
                >
                  Join as an Educator Member
                </BeamButton>
              </Link>
            </Box>
          </Grid>

          {/* Text/CTA Column on Right (for desktop, first on mobile) */}
          <Grid
            size={{ xs: 12, md: 6.8 }}
            order={{ xs: 1, md: 2 }}
            sx={{ pl: { md: 4 } }}
          >
            <Stack spacing={3.25} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SectionBadge label="For Educators & Mentors" align="center" />
              </Box>

              {/* Title & Description */}
              <Stack spacing={1.5} data-aos="fade-up" data-aos-duration="800">
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
                  Become an IAIRE Certified <br />
                  <span style={{ color: "#1B365D" }}>
                    Innovation or Research Mentor
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
                  Educators play a central role in transforming student
                  curiosity into structured innovation and research.{" "}
                  <strong>IAIRE</strong> provides training, certification,
                  mentoring resources, case studies, documentation templates,
                  assessment rubrics, and ongoing support to help educators
                  guide student teams.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  Our curriculum frameworks and continuous mentor-advisory
                  forums allow school leaders and teachers to exchange classroom
                  insights, elevate pedagogy standards, and foster student
                  publication/patenting.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton
                    sx={{
                      width: "50%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.1,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Join as an Educator Member
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForEducators;
