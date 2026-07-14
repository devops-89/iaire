"use client";

import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";

const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F85D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F85D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background abstract decoration glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
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
          
          {/* Left Column: Heading & Core Copy */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ width: 16, height: 2, backgroundColor: "#F85D00" }} />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#F85D00",
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
                A Global Academy for Innovation, Research & Entrepreneurship
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#4B5563",
                    lineHeight: 1.75,
                  }}
                >
                  The International Academy of Innovation, Research & Entrepreneurship — IAIRE — is a global educational and scholarly platform committed to advancing innovation, research, creativity, critical thinking, and entrepreneurship across schools and learning institutions.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.75,
                  }}
                >
                  IAIRE believes that innovation should not be limited to laboratories, universities, startups, or elite institutions. It should begin early, within schools, where young minds can be guided to observe the world, identify problems, ask meaningful questions, conduct research, and create practical solutions.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15.5px",
                    color: "#F85D00",
                    fontWeight: 500,
                    lineHeight: 1.7,
                    borderLeft: "3px solid #F85D00",
                    pl: 3,
                  }}
                >
                  Our mission is to help schools build sustainable systems that develop students into future innovators, researchers, inventors, entrepreneurs, and responsible global citizens.
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Mission & Vision Glassmorphic Cards Stack */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              
              {/* Vision Card */}
              <Card
                elevation={0}
                sx={{
                  p: { xs: 4, md: 4.5 },
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.45) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(248, 93, 0, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(248, 93, 0, 0.35)",
                    boxShadow: "0 20px 45px rgba(248, 93, 0, 0.08)",
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(248, 93, 0, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <VisionIcon />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 800,
                      color: "#0B1727",
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Our Vision
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    color: "#5F5F6A",
                  }}
                >
                  To establish a global ecosystem where schools become centers of innovation, teachers become innovation mentors, and students become creators of meaningful solutions for the world.
                </Typography>
              </Card>

              {/* Mission Card */}
              <Card
                elevation={0}
                sx={{
                  p: { xs: 4, md: 4.5 },
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.45) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(248, 93, 0, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(248, 93, 0, 0.35)",
                    boxShadow: "0 20px 45px rgba(248, 93, 0, 0.08)",
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(248, 93, 0, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MissionIcon />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 800,
                      color: "#0B1727",
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Our Mission
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    color: "#5F5F6A",
                  }}
                >
                  IAIRE’s mission is to provide structured programs, certification pathways, digital resources, mentoring frameworks, research opportunities, innovation competitions, and recognition platforms that enable schools, educators, and students to build long-term capability in innovation, research, and entrepreneurship.
                </Typography>
              </Card>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
