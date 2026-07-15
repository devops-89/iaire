"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import heroImg from "@/public/images/chapters/student_innovation_vector.png";

const studentGains = [
  "Structured innovation learning experience",
  "Expert mentoring and project feedback",
  "National recognition and awards",
  "Pathway to international IAIRE platforms",
  "Research, IP, and entrepreneurship guidance",
  "Growing community of young Indian innovators",
  "Confidence in presenting ideas to audiences",
];

const schoolGains = [
  "National visibility as a center of student innovation",
  "Institutional recognition and awards",
  "A pipeline of motivated, innovation-ready students",
];

const TopYoungInnovators = () => {
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
          
          {/* Left Column: Copy Content & Deliverables List */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={4}>
              
              {/* Premium Mini Badge */}
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
                  Flagship Initiative
                </Typography>
              </Box>

              {/* Title */}
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
                India's Top Young Innovators
              </Typography>

              {/* Body Text */}
              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  Every year, thousands of students across India work on ideas that could solve real problems — in agriculture, health, environment, technology, social impact, and beyond.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  <strong>India's Top Young Innovators</strong> is IAIRE India's flagship recognition platform designed to identify, mentor, and celebrate the most promising young innovators from schools across the country.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  Unlike traditional competitions that focus only on outcomes, IAIRE India's program emphasizes learning before evaluation. Students receive access to innovation resources, training materials, mentoring frameworks, and project development support before presenting their ideas.
                </Typography>
              </Stack>

              {/* Split Deliverables Grid (Gains) */}
              <Grid container spacing={3} sx={{ pt: 2 }}>
                
                {/* Students Gains */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack spacing={2}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#1D1D1F",
                        borderBottom: "2px solid #F85D00",
                        pb: 1,
                        width: "fit-content",
                      }}
                    >
                      What Students Gain
                    </Typography>

                    <Stack spacing={1.5}>
                      {studentGains.map((gain, idx) => (
                        <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckCircleOutlineIcon sx={{ color: "#F85D00", mt: 0.25, fontSize: 16 }} />
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "14px",
                              color: "rgba(0, 0, 0, 0.65)",
                              lineHeight: "1.4",
                            }}
                          >
                            {gain}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                {/* Schools Gains */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack spacing={2}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#1D1D1F",
                        borderBottom: "2px solid #F85D00",
                        pb: 1,
                        width: "fit-content",
                      }}
                    >
                      What Schools Gain
                    </Typography>

                    <Stack spacing={1.5}>
                      {schoolGains.map((gain, idx) => (
                        <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckCircleOutlineIcon sx={{ color: "#F85D00", mt: 0.25, fontSize: 16 }} />
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "14px",
                              color: "rgba(0, 0, 0, 0.65)",
                              lineHeight: "1.4",
                            }}
                          >
                            {gain}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

              </Grid>

            </Stack>
          </Grid>

          {/* Right Column: Realistic Classroom Snapshot Frame */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)",
                width: "100%",
                aspectRatio: "1/1",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 30px 60px rgba(248, 93, 0, 0.1)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Image
                src={heroImg}
                alt="Young Indian students fabricating micro-sensors in robotics lab"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default TopYoungInnovators;
