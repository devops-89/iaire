"use client";

import React from "react";
import { Box, Button, Card, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import SectionBadge from "@/components/widgets/SectionBadge";

const CheckBadge = () => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="rgba(59, 130, 246, 0.08)" stroke="#1B365D" strokeWidth="2" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="#1B365D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Box>
);

const studentGains = [
  "Innovation learning experience",
  "Expert mentoring & feedback",
  "National & international exposure",
  "Recognition opportunities",
  "Confidence in public presentation",
  "Research and patent pathways",
  "Access to global communities",
];

const AboutCompetitionSection = () => {
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
          
          {/* Left Column: Heading, Callout & Copy */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Stack spacing={3.5}>
              <SectionBadge
                label="The Competition"
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
                Top Young Innovator Competition
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
                  Celebrating the World’s Most Promising Young Innovators
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  The IAIRE Top Young Innovator Competition is a platform for students to showcase creative solutions to real-world problems.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  The competition is designed not only to evaluate innovation but also to educate, mentor, and inspire students before they compete.
                </Typography>
              </Stack>

              {/* What Makes It Different Callout */}
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
                  What Makes It Different?
                </Box>
                IAIRE’s competition emphasizes learning before recognition. Students receive access to innovation resources, training, mentoring, documentation formats, and project development support before presenting their ideas.
              </Typography>

              <Box sx={{ pt: 1.5 }}>
                <Link href="https://topyounginnovators.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <Button
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
                    Enter the Competition
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Balanced Outcomes Grid */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0B1727",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #E5E5E9",
                  pb: 1,
                }}
              >
                What Students Gain
              </Typography>

              <Grid container spacing={2}>
                {studentGains.map((gain, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: "flex" }}>
                    <Card
                      elevation={0}
                      sx={{
                        p: 3,
                        width: "100%",
                        borderRadius: "16px",
                        backgroundColor: "#F9F9FB",
                        border: "1px solid #E5E5E9",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderColor: "rgba(59, 130, 246, 0.25)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 20px rgba(59, 130, 246, 0.04)",
                        },
                      }}
                    >
                      <CheckBadge />
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "#3D3D48",
                          lineHeight: 1.45,
                        }}
                      >
                        {gain}
                      </Typography>
                    </Card>
                  </Grid>
                ))}

                {/* Promo Card to complete the 8-cell layout */}
                <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 3,
                      width: "100%",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, #090B10 0%, #161922 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 1.5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "10.5px", fontWeight: 700, color: "#3B82F6", letterSpacing: "0.1em" }}>
                      GLOBAL STAGE
                    </Typography>
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "13.5px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}>
                      Join the Next Cohort
                    </Typography>
                  </Card>
                </Grid>

              </Grid>
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AboutCompetitionSection;
