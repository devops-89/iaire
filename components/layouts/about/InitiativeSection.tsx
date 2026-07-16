"use client";

import React from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

// Custom vector SVG icons for the two pillars
const TeacherPillarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StudentPillarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const GoalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const InitiativeSection = () => {
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
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          
          {/* Left Column: Heading & Content */}
          <Grid size={{ xs: 12, md: 5 }}>
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
                  THE INITIATIVE
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
                The IAIRE Initiative
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
                  Building Sustainable Innovation, Research & Entrepreneurship Ecosystems
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  The IAIRE Initiative is designed to help schools move beyond occasional innovation activities and establish a permanent culture of creativity, research, innovation, and entrepreneurship.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  Many schools organize science fairs, exhibitions, project days, competitions, and STEM activities. While valuable, these efforts often remain event-based. IAIRE helps schools convert these activities into a structured, continuous, measurable ecosystem.
                </Typography>
              </Stack>

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
                  Bring the IAIRE Initiative to Your Institution
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Pillars Grid & Anchor Goal Box */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <Grid container spacing={3}>
                
                {/* Pillar 1: Teacher Capacity Building */}
                <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 3.5,
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
                        boxShadow: "0 10px 25px rgba(248, 93, 0, 0.05)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        backgroundColor: "rgba(248, 93, 0, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <TeacherPillarIcon />
                    </Box>
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "15px", fontWeight: 700, color: "#0B1727", lineHeight: 1.3 }}>
                      1. Teacher Capacity Building
                    </Typography>
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "13.5px", color: "#5F5F6A", lineHeight: 1.6 }}>
                      Teachers are trained and certified as Innovation & Research Mentors. They gain the tools, methodologies, resources, and confidence to guide students through the innovation journey.
                    </Typography>
                  </Card>
                </Grid>

                {/* Pillar 2: Student Innovation Journey */}
                <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 3.5,
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
                        boxShadow: "0 10px 25px rgba(248, 93, 0, 0.05)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        backgroundColor: "rgba(248, 93, 0, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <StudentPillarIcon />
                    </Box>
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "15px", fontWeight: 700, color: "#0B1727", lineHeight: 1.3 }}>
                      2. Student Innovation Journey
                    </Typography>
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "13.5px", color: "#5F5F6A", lineHeight: 1.6 }}>
                      Students are introduced to structured innovation learning, research practices, design thinking, intellectual property awareness, and entrepreneurship pathways.
                    </Typography>
                  </Card>
                </Grid>

              </Grid>

              {/* Concluding sentence for the pillars */}
              <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "14.5px", color: "#5F5F6A", fontStyle: "italic", textAlign: "center" }}>
                Together, these pillars create a sustainable innovation culture inside schools.
              </Typography>

              {/* The Goal Card (Anchor box) */}
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #090A0E 0%, #161720 100%)",
                  p: 4,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ width: 32, height: 32, borderRadius: "6px", backgroundColor: "rgba(248, 93, 0, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <GoalIcon />
                    </Box>
                    <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", color: "#1B365D", textTransform: "uppercase" }}>
                      THE GOAL
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "15px", color: "#E2E2E9", lineHeight: 1.6, fontWeight: 500 }}>
                    The goal of the IAIRE Initiative is to make innovation and research part of everyday education. Students should not only study knowledge. They should learn how to use knowledge to solve real-world problems.
                  </Typography>
                </Stack>
              </Box>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default InitiativeSection;
