"use client";

import React from "react";
import { Box, Button, Card, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const CheckBadge = () => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="rgba(248, 93, 0, 0.12)" stroke="#1B365D" strokeWidth="2" />
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
      {/* Background decoration - very subtle warm accent glow on the bottom-left */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
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
                  THE COMPETITION
                </Typography>
              </Box>

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
                Top Young Innovator Competition
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
                <Button
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    color: "#FFFFFF",
                    backgroundColor: "#1B365D",
                    borderRadius: "30px",
                    p: "12px 28px",
                    boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e05400",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                    },
                  }}
                >
                  Enter the Competition
                </Button>
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
                        gap: 2,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          borderColor: "rgba(248, 93, 0, 0.25)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 10px 25px rgba(248, 93, 0, 0.04)",
                        },
                      }}
                    >
                      <CheckBadge />
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#0B1727",
                          lineHeight: 1.4,
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
                      background: "linear-gradient(135deg, #090A0E 0%, #161720 100%)",
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
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "10.5px", fontWeight: 700, color: "#1B365D", letterSpacing: "0.1em" }}>
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
