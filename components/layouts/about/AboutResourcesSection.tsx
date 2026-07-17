"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import resources from "@/images/about/resources.jpeg";
const OrangeCheck = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      mt: 0.25,
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(248, 93, 0, 0.12)"
        stroke="#1B365D"
        strokeWidth="2"
      />
      <path
        d="M8.5 12.5l2.5 2.5 4.5-5"
        stroke="#1B365D"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

const availableResources = [
  "Program brochures",
  "Teacher guides",
  "Student templates",
  "Research doc formats",
  "Innovation case studies",
  "Webinar recordings",
  "School guides",
  "Competition guidelines",
  "Frequently asked questions",
  "Policy & compliance docs",
];

const AboutResourcesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle warm accent glow on the bottom-right */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
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
          {/* Left Column: Heading, Available Resources Grid & Copy */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                  LIBRARY ACCESS
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
                Resources
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
                  Tools for Schools, Teachers & Student Innovators
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  IAIRE provides resources that help participants understand,
                  implement, and grow within the innovation ecosystem. Access
                  tools to build capability at every stage of the journey.
                </Typography>
              </Stack>

              {/* Resources Checklist Grid */}
              <Box sx={{ pt: 1 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#121214",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                  }}
                >
                  Available Resources
                </Typography>
                <Grid container spacing={1.5}>
                  {availableResources.map((res, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="flex-start"
                      >
                        <OrangeCheck />
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#3D3D48",
                            lineHeight: 1.4,
                          }}
                        >
                          {res}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Why Schools Need Innovation Hubs Callout */}
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
                  Learn. Build. Innovate.
                </Box>
                The IAIRE resource library is designed to support every stage of
                the innovation journey.
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
                    boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#122744",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                    },
                  }}
                >
                  Visit the Resource Library
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Resource Library Coded Illustration */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "24px",
                border: "1px solid #E5E5E9",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#FFFFFF",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 30px 60px rgba(27, 54, 93, 0.05)",
                  borderColor: "rgba(27, 54, 93, 0.15)",
                },
              }}
            >
              <Image
                src={resources}
                alt="IAIRE Digital Resource Library Index"
                width={640}
                height={640}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutResourcesSection;
