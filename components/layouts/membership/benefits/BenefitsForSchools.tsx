"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";

const schoolBenefits = [
  {
    title: "Structured Innovation Framework",
    desc: "A proven model to build a sustainable innovation culture, not just one-off events",
  },
  {
    title: "Teacher Certification Pathways",
    desc: "Your educators become certified Innovation & Research Mentors",
  },
  {
    title: "Student Innovation Programs",
    desc: "Ready-to-implement learning journeys for students at every level",
  },
  {
    title: "Innovation Hub Support",
    desc: "Guidance and resources to establish a functioning Innovation Hub on campus",
  },
  {
    title: "Digital Platform Access",
    desc: "Learning modules, templates, curriculum guides, and implementation resources",
  },
  {
    title: "Competition Access",
    desc: "Priority participation in Top Young Innovator and other IAIRE programs",
  },
  {
    title: "National & International Recognition",
    desc: "IAIRE awards and institutional distinction for innovation leadership",
  },
  {
    title: "Research & IP Guidance",
    desc: "Support for promising student ideas moving toward patents or publications",
  },
  {
    title: "Global Network",
    desc: "Connect with schools, educators, and institutions across the world",
  },
];

const BenefitsForSchools = () => {
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
        <Grid container spacing={6} alignItems="flex-start">
          
          {/* Left Column: Sticky Section Title & CTA */}
          <Grid
            size={{ xs: 12, md: 4.5 }}
            sx={{
              position: { md: "sticky" },
              top: "120px", // Sticks below the floating header
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
                  color: "#F85D00",
                  textTransform: "uppercase",
                }}
              >
                Institutional Tier
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
                For Schools
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15.5px",
                  color: "rgba(0, 0, 0, 0.65)",
                  lineHeight: "1.65",
                }}
              >
                Partner with IAIRE to integrate innovation, research, and entrepreneurship directly into your school's DNA. Equip your educators and prepare your students for global leadership.
              </Typography>
              
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
                    Enroll Your School
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Detailed Benefits List */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Stack spacing={0}>
              {schoolBenefits.map((benefit, idx) => (
                <Box
                  key={idx}
                  sx={{
                    py: 3,
                    borderBottom: idx === schoolBenefits.length - 1 ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
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
                        color: "#F85D00",
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

export default BenefitsForSchools;
