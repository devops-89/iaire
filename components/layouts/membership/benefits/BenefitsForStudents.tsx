"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";

const studentBenefits = [
  {
    title: "Student Innovation Program Access",
    desc: "Structured access to the Student Innovation Program learning modules",
  },
  {
    title: "Full Learning Journey Guidance",
    desc: "Step-by-step guidance through the full innovation learning journey, from ideation to solution prototyping",
  },
  {
    title: "Competition Eligibility",
    desc: "Direct eligibility to participate in the Top Young Innovator Competition and other student challenges",
  },
  {
    title: "Expert Mentorship & Feedback",
    desc: "Expert mentoring and feedback on innovation projects from industry professionals",
  },
  {
    title: "Global Projects Exposure",
    desc: "National and international exposure and recognition for your solutions and ideas",
  },
  {
    title: "Research & IP Pathways",
    desc: "Academic research and intellectual property (IP) awareness pathways for student innovators",
  },
  {
    title: "Digital Portfolio Builders",
    desc: "A verified digital portfolio showcasing your innovation learning, projects, and achievements",
  },
  {
    title: "Global Network Entry",
    desc: "Official membership in a global community of active young innovators and problem-solvers",
  },
];

const BenefitsForStudents = () => {
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
                Learner Tier
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
                For Students
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15.5px",
                  color: "rgba(0, 0, 0, 0.65)",
                  lineHeight: "1.65",
                }}
              >
                Embark on a structured innovation journey. Solve real-world problems, build your project portfolio, and compete on international stages.
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
                    Start Your Innovation Journey
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Detailed Benefits List */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Stack spacing={0}>
              {studentBenefits.map((benefit, idx) => (
                <Box
                  key={idx}
                  sx={{
                    py: 3,
                    borderBottom: idx === studentBenefits.length - 1 ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
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

export default BenefitsForStudents;
