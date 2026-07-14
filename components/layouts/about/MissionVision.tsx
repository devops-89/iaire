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

const MissionVision = () => {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          
          {/* Our Vision Card */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Card
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                width: "100%",
                borderRadius: 4,
                bgcolor: "#F9F9FB",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(248, 93, 0, 0.25)",
                  boxShadow: "0 10px 30px rgba(248, 93, 0, 0.06)",
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
          </Grid>

          {/* Our Mission Card */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Card
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                width: "100%",
                borderRadius: 4,
                bgcolor: "#F9F9FB",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(248, 93, 0, 0.25)",
                  boxShadow: "0 10px 30px rgba(248, 93, 0, 0.06)",
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
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
