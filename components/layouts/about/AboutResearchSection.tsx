"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import SectionBadge from "@/components/widgets/SectionBadge";
import Image from "next/image";
import BeamButton from "@/components/widgets/BeamButton";

const BlueCheck = () => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, mt: 0.25 }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="rgba(59, 130, 246, 0.08)" stroke="#1B365D" strokeWidth="2" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="#1B365D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Box>
);

const researchAreas = [
  "Student research projects",
  "Innovation documentation",
  "Research manuscript prep",
  "Peer-reviewed publications",
  "Patentability assessment",
  "Patent drafting & filing",
  "Technology commercialization",
  "Startup & entrepreneurship",
];

const AboutResearchSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle blue accent glow on the bottom-left */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          
          {/* Left Column: Research Support Coded Illustration */}
          <Grid size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
            data-aos-duration="800">
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "24px",
                border: "1px solid #E5E5E9",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#FFFFFF",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.08)",
                  borderColor: "rgba(59, 130, 246, 0.2)",
                },
              }}
            >
              <Image
                src="/images/homepage/research_support.png"
                alt="IAIRE Research and IP Support"
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

          {/* Right Column: Heading, Support Areas & Copy */}
          <Grid size={{ xs: 12, md: 6 }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150">
            <Stack spacing={3.5}>
              <SectionBadge
                label="Intellectual Property"
                align="left"
                textColor="#1B365D"
                glowColor="#1B365D"
                borderColor="rgba(27, 54, 93, 0.25)"
                backgroundColor="rgba(27, 54, 93, 0.08)"
              />

              <Typography
                variant="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "32px", md: "40px" },
                  fontWeight: 900,
                  color: "#0B1727",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                Research & IP Support
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: 650,
                    color: "#121214",
                    lineHeight: 1.5,
                  }}
                >
                  IAIRE supports promising school research, scientific project development, and intellectual property protection pathways.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  We help schools establish guidelines for student and teacher intellectual property, guide the drafting and filing of patents, and support the publication of student research papers.
                </Typography>
              </Stack>

              {/* Benefits Checklist Grid */}
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
                  Support Areas
                </Typography>
                <Grid container spacing={1.5}>
                  {researchAreas.map((area, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <BlueCheck />
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

              {/* Why Research Callout */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  color: "#1B365D",
                  fontWeight: 500,
                  lineHeight: 1.65,
                  borderLeft: "2px solid #1B365D",
                  pl: 2.5,
                }}
              >
                <Box component="span" sx={{ fontWeight: 700, display: "block", mb: 0.5 }}>
                  Building a Research Culture
                </Box>
                Research teaches students to observe carefully, question deeply, analyze evidence, and communicate findings with clarity. IAIRE helps schools make research a meaningful part of student learning.
              </Typography>

              <Box sx={{ pt: 1.5 }}>
                <Link href="/what-we-do#ip-support" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="contained"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#FFFFFF",
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 4.5,
                      py: 1.4,
                      boxShadow: "0 8px 25px rgba(27, 54, 93, 0.2)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(27, 54, 93, 0.32)",
                      },
                    }}
                  >
                    Explore Research Support
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

export default AboutResearchSection;
