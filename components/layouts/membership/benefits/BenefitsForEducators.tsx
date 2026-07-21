"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";

const educatorBenefits = [
  {
    title: "Innovation Educator Certification",
    desc: "Access to the structured IAIRE Innovation Educator Certification program",
  },
  {
    title: "PD Tools & Mentoring Resources",
    desc: "Professional development tools, methodologies, and mentoring resources to support student learning",
  },
  {
    title: "Digital Facilitation Modules",
    desc: "Digital learning modules on design thinking, research methodology, and innovation facilitation",
  },
  {
    title: "Certified Mentor Designation",
    desc: "Recognition as a certified IAIRE Innovation & Research Mentor",
  },
  {
    title: "Global Peer Exchange",
    desc: "Connection with a global peer community of active innovation educators",
  },
  {
    title: "Curriculum Contribution Pathways",
    desc: "Opportunities to contribute to future IAIRE curriculum and resource development",
  },
  {
    title: "Priority Event Registration",
    desc: "Priority access to IAIRE webinars, workshops, and intensive training events",
  },
  {
    title: "Ecosystem Directory Listing",
    desc: "Official listing in the searchable IAIRE global educator network",
  },
];

const BenefitsForEducators = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#F9FAFC",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          
          {/* Left Column: Sticky Section Title & CTAs */}
          <Grid
            size={{ xs: 12, md: 4.5 }}
            sx={{
              position: { md: "sticky" },
              top: "120px", // Sticks below the header
              alignSelf: "flex-start",
              pb: { xs: 4, md: 0 },
            }}
          >
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#1B365D",
                  textTransform: "uppercase",
                }}
              >
                Educator Tier
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", sm: "38px", md: "42px" },
                  color: "#1D1D1F",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.15,
                }}
              >
                For Educators
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15.5px",
                  color: "rgba(0, 0, 0, 0.65)",
                  lineHeight: "1.65",
                }}
              >
                Empower yourself to guide, mentor, and inspire the next generation. Grow your skills, earn certifications, and connect with global innovation peers.
              </Typography>
              
              <Box sx={{ pt: 1 }}>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton
                    sx={{
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: inter.style.fontFamily,
                      borderRadius: "50px",
                      px: 4.5,
                      py: 1.6,
                      backgroundColor: "#1B365D",
                      color: "#FFFFFF",
                      textTransform: "none",
                      boxShadow: "0 10px 25px rgba(248, 93, 0, 0.25)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(248, 93, 0, 0.35)",
                      },
                    }}
                  >
                    Become a Certified Innovation Educator
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Detailed Benefits List */}
          <Grid size={{ xs: 12, md: 7.5 }}
            data-aos="fade-right"
            data-aos-duration="800">
            <Stack spacing={0}>
              {educatorBenefits.map((benefit, idx) => (
                <Box
                  key={idx}
                  sx={{
                    py: 3,
                    borderBottom: idx === educatorBenefits.length - 1 ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      pl: { sm: 2 },
                      backgroundColor: "rgba(248, 93, 0, 0.02)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={3} alignItems="flex-start">
                    {/* Index Badge */}
                    <Box
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#1B365D",
                        backgroundColor: "rgba(248, 93, 0, 0.06)",
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.25,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Box>

                    {/* Benefit Details */}
                    <Stack spacing={0.75}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#1D1D1F",
                          lineHeight: "1.4",
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "14.5px",
                          color: "rgba(0, 0, 0, 0.6)",
                          lineHeight: "1.6",
                        }}
                      >
                        {benefit.desc}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsForEducators;
