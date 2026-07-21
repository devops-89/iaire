"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";

// Custom vector SVG icons for Bento cells
const PatentIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const TrophyIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a7 7 0 0 1 7 7c0 3.18-2.12 5.86-5 6.71V2H10v6.71c-2.88-.85-5-3.53-5-6.71a7 7 0 0 1 7-7z" />
  </svg>
);

const NodesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1B365D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HubSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#090A0E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - glowing orange core flare */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "20%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Bento Grid of Benefits */}
          <Grid size={{ xs: 12, md: 7.5 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Grid container spacing={2.5}>
              {/* Card 1: Sessions & Mentoring (Spans 8 cols) */}
              <Grid size={{ xs: 12, sm: 8 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    p: 3,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      alignSelf: "flex-start",
                      backgroundColor: "rgba(248, 93, 0, 0.12)",
                      color: "#1B365D",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      fontSize: "10px",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ECOSYSTEM
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#E2E2E9",
                      mt: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    Run structured innovation sessions & mentor student teams
                  </Typography>
                </Box>
              </Grid>

              {/* Card 2: Patent Support (Spans 4 cols) */}
              <Grid size={{ xs: 12, sm: 4 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    p: 3,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
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
                      justifyItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PatentIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#E2E2E9",
                      mt: 3,
                      lineHeight: 1.4,
                    }}
                  >
                    Support patentable ideas
                  </Typography>
                </Box>
              </Grid>

              {/* Card 3: Competitions Prep (Spans 4 cols) */}
              <Grid size={{ xs: 12, sm: 4 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    p: 3,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
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
                      justifyItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TrophyIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#E2E2E9",
                      mt: 3,
                      lineHeight: 1.4,
                    }}
                  >
                    Prepare students for competitions
                  </Typography>
                </Box>
              </Grid>

              {/* Card 4: Research Projects (Spans 8 cols) */}
              <Grid size={{ xs: 12, sm: 8 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    p: 3,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
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
                      justifyItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <NodesIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#E2E2E9",
                      mt: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    Organize research and innovation projects
                  </Typography>
                </Box>
              </Grid>

              {/* Card 5: Culture of Inquiry (Spans 6 cols) */}
              <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    p: 3,
                    width: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      backgroundColor: "rgba(248, 93, 0, 0.12)",
                      color: "#1B365D",
                      px: 1,
                      py: 0.25,
                      borderRadius: "4px",
                      fontSize: "9px",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                      mb: 2,
                    }}
                  >
                    CULTURE
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#E2E2E9",
                      lineHeight: 1.4,
                    }}
                  >
                    Build a culture of inquiry and problem-solving
                  </Typography>
                </Box>
              </Grid>

              {/* Card 6: Recognition (Spans 6 cols) */}
              <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    p: 3,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(248, 93, 0, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
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
                      justifyItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StarIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#E2E2E9",
                      mt: 3,
                      lineHeight: 1.4,
                    }}
                  >
                    Recognize outstanding student innovators
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column: Heading & Content */}
          <Grid size={{ xs: 12, md: 4.5 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }}
                />
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
                  THE COMMAND CENTER
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                Building Innovation Hubs in Schools
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#9D9DA7",
                    lineHeight: 1.6,
                  }}
                >
                  IAIRE helps schools establish Innovation Hubs that become the
                  center of creativity, research, innovation, and
                  entrepreneurship within the institution.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#9D9DA7",
                    lineHeight: 1.6,
                  }}
                >
                  An IAIRE Innovation Hub is not just a room or lab. It is a{" "}
                  <Box
                    component="span"
                    sx={{ color: "#FFFFFF", fontWeight: 600 }}
                  >
                    structured ecosystem
                  </Box>{" "}
                  led by trained teachers and supported by IAIRE resources,
                  mentoring frameworks, digital tools, and student programs.
                </Typography>
              </Stack>

              <Box sx={{ pt: 1.5 }}>
                <Link href="/login">
                  <BeamButton
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
                    Build an Innovation Hub at Your School
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

export default HubSection;
