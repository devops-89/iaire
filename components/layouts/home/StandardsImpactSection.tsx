"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import standardsImpactImg from "@/images/homepage/academic_standara.jpeg";
import BeamButton from "@/components/widgets/BeamButton";

const StandardsImpactSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Premium Vector Image Frame */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Box
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                lineHeight: 0,
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Image
                src={standardsImpactImg}
                alt="IAIRE Academic Standards, Certification and Quality Assurance Quality Shield"
                layout="responsive"
                placeholder="blur"
                style={{
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hovered ? "scale(1.03)" : "scale(1)",
                }}
              />

              {/* Floating Badge on Image */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
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
                <WorkspacePremiumIcon sx={{ color: "#1B365D", fontSize: 20 }} />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#1B365D",
                  }}
                >
                  Quality Assured
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Copy Content & CTAs */}
          <Grid
            size={{ xs: 12, md: 6.5 }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            sx={{ pl: { md: 2 } }}
          >
            <Stack spacing={4}>
              {/* Heading Group */}
              <Stack spacing={1.5}>
                <SectionBadge
                  label="Rigorous Standards"
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
                    fontSize: { xs: "28px", sm: "36px", md: "42px" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                  }}
                >
                  Standards. Certification. <br />
                  <span style={{ color: "#1B365D" }}>Recognition. Impact.</span>
                </Typography>
              </Stack>

              {/* Text Paragraphs */}
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
                  IAIRE's certifications and fellowships are{" "}
                  <strong>
                    voluntary academic and professional recognitions
                  </strong>{" "}
                  awarded on the basis of defined standards, demonstrated
                  competencies, peer review, and measurable achievements.
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
                  IAIRE is not a government agency, statutory regulator,
                  licensing authority, degree-granting institution,
                  accreditation body for school-board affiliation, or substitute
                  for any regulatory or governmental function. Its value comes
                  from the <strong>rigor of its standards</strong>, the quality
                  of its governance and review processes, the expertise of its
                  Scientific Board, and the measurable outcomes achieved by
                  participating schools, educators, and students.
                </Typography>
              </Stack>

              {/* CTA Buttons stack */}
              <Box sx={{ display: { lg: "flex", xs: "block" } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 1 }}
                >
                  <Link href="/programs" style={{ textDecoration: "none" }}>
                    <BeamButton
                      variant="contained"
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.WHITE,
                        backgroundColor: "#1B365D",
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.35,
                        boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "#122744",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                        },
                      }}
                    >
                      Understand Certification
                    </BeamButton>
                  </Link>

                  <Link href="/membership" style={{ textDecoration: "none" }}>
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
                          backgroundColor: "rgba(27, 54, 93, 0.04)",
                          transform: "translateY(-2px)",
                          "& .arrow-icon": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      View Membership Pathways
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StandardsImpactSection;
