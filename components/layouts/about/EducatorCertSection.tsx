"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Card} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import SectionBadge from "@/components/widgets/SectionBadge";
import BeamButton from "@/components/widgets/BeamButton";

const OrangeBullet = () => (
  <Box
    sx={{
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "#1B365D",
      flexShrink: 0,
    }}
  />
);

const educatorSkills = [
  "Innovation methodologies",
  "Design thinking",
  "Creativity development",
  "Research fundamentals",
  "Problem identification",
  "Mentoring techniques",
  "Innovation project management",
  "Documentation standards",
  "Assessment frameworks",
  "Intellectual property basics",
];

const EducatorCertSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle warm accent glow on the top-left */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Heading, Callout & Copy */}
          <Grid
            data-aos="fade-right"
            data-aos-duration="800"
            size={{ xs: 12, md: 6 }}
          >
            <Stack spacing={3.5}>
              <SectionBadge
                label="For Teachers"
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
                  fontWeight: 800,
                  color: "#0B1727",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                Innovation Educator Certification
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#121214",
                    lineHeight: 1.5,
                  }}
                >
                  Empowering Teachers to Become Innovation & Research Mentors
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  The IAIRE Innovation Educator Certification prepares teachers
                  to lead innovation and research initiatives within their
                  schools.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  This program is designed for educators who want to inspire
                  students, mentor innovation projects, guide research thinking,
                  and build a future-ready learning environment.
                </Typography>
              </Stack>

              {/* Why It Matters Callout */}
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
                <Box
                  component="span"
                  sx={{ fontWeight: 700, display: "block", mb: 0.5 }}
                >
                  Why It Matters
                </Box>
                Teachers are most effective at mentoring innovation when they
                understand the innovation process themselves. IAIRE’s
                certification gives educators practical exposure, structured
                tools, and ongoing support to guide students confidently.
              </Typography>

              <Box sx={{ pt: 1.5, display: { lg: "block", xs: "none" } }}>
                <Link href="/login" style={{ textDecoration: "none" }}>
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
                    Become a Certified Innovation Educator
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Interactive Curriculum Skills Matrix */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#121214",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  borderBottom: "1px solid #E5E5E9",
                  pb: 1,
                }}
              >
                What Educators Learn
              </Typography>

              <Grid container spacing={2}>
                {educatorSkills.map((skill, index) => (
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    key={index}
                    sx={{ display: "flex" }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        p: 2.5,
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E5E5E9",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderColor: "rgba(59, 130, 246, 0.25)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 20px rgba(59, 130, 246, 0.04)",
                        },
                      }}
                    >
                      <OrangeBullet />
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#0B1727",
                          lineHeight: 1.3,
                        }}
                      >
                        {skill}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Box sx={{ pt: 1.5, display: { lg: "none", xs: "block" } }}>
            <Link href="/login" style={{ textDecoration: "none" }}>
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
                Become a Certified Innovation Educator
              </BeamButton>
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default EducatorCertSection;
