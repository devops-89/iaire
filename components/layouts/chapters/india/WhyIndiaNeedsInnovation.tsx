"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";

// MUI Icons
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";

const nepPillars = [
  {
    title: "Experiential learning",
    icon: <BuildOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Critical and creative thinking",
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Research orientation",
    icon: <ScienceOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Entrepreneurship and innovation",
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Holistic student development",
    icon: <EmojiPeopleOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Multidisciplinary approaches",
    icon: <LayersOutlinedIcon sx={{ fontSize: 20 }} />,
  },
];

const WhyIndiaNeedsInnovation = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Context Paragraphs & CTA */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={4}>
              
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#F85D00",
                    textTransform: "uppercase",
                  }}
                >
                  National Focus
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", sm: "38px", md: "44px" },
                  color: "#1D1D1F",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.15,
                }}
              >
                Why India Needs <br />
                Innovation Education Now
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FF7A00",
                  lineHeight: "1.4",
                }}
              >
                India stands at a remarkable crossroads.
              </Typography>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  With a young population, a growing technology sector, a thriving startup culture, and national policies actively encouraging creativity and research, the conditions for an innovation revolution in education have never been more favorable.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  Yet, in many schools, innovation remains limited to occasional science fairs, project days, and exhibitions. These efforts are valuable — but they are not enough to build the deep, sustained capability India needs. The gap between potential and practice needs to be closed.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  IAIRE India Chapter works to bridge this gap by helping schools move from event-based activities to a structured, continuous innovation culture — one that develops students who can think critically, research meaningfully, and solve real-world problems.
                </Typography>
              </Stack>

              <Box sx={{ pt: 1 }}>
                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: inter.style.fontFamily,
                      borderRadius: "50px",
                      px: 4.5,
                      py: 1.6,
                      backgroundColor: "#F85D00",
                      color: "#FFFFFF",
                      textTransform: "none",
                      boxShadow: "0 10px 25px rgba(248, 93, 0, 0.25)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: "#d14e03",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(248, 93, 0, 0.35)",
                      },
                    }}
                  >
                    Learn About the IAIRE India Vision
                  </Button>
                </Link>
              </Box>

            </Stack>
          </Grid>

          {/* Right Column: NEP Alignment Panel */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                backgroundColor: "#F9FAFC",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "28px",
                p: { xs: 4, sm: 5 },
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.02)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  borderColor: "rgba(248, 93, 0, 0.15)",
                  boxShadow: "0 25px 50px rgba(248, 93, 0, 0.05)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Stack spacing={3.5}>
                <Stack spacing={1}>
                  <Box
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#F85D00",
                      backgroundColor: "rgba(248, 93, 0, 0.06)",
                      px: 2,
                      py: 0.5,
                      borderRadius: "50px",
                      width: "fit-content",
                    }}
                  >
                    National Policy
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#1D1D1F",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    NEP 2020 Alignment
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.55)",
                      lineHeight: "1.5",
                    }}
                  >
                    IAIRE India's frameworks are specifically designed to support the educational parameters of the National Education Policy 2020:
                  </Typography>
                </Stack>

                <Stack spacing={2.5}>
                  {nepPillars.map((pillar, idx) => (
                    <Stack key={idx} direction="row" spacing={2.5} alignItems="center">
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "10px",
                          backgroundColor: "rgba(248, 93, 0, 0.06)",
                          color: "#F85D00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {pillar.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#1D1D1F",
                        }}
                      >
                        {pillar.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default WhyIndiaNeedsInnovation;
