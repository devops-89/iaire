"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import heroImg from "@/public/images/programs/teacher_mentorship_blueprint.png";

const programCovers = [
  "Foundations of innovation and creative thinking",
  "Design thinking methodology",
  "Research fundamentals and methodology",
  "Problem identification and root-cause analysis",
  "Student mentoring and facilitation techniques",
  "Innovation project management and documentation",
  "Intellectual property basics",
  "Assessment frameworks for student innovation",
  "Building an innovation culture in the classroom",
];

const educatorOutcomes = [
  "Official IAIRE Innovation Educator Certification",
  "Practical tools and resources for classroom use",
  "Confidence to mentor student innovation projects end-to-end",
  "Recognition within the IAIRE global educator network",
  "Continued access to professional development resources",
];

const EducatorCertification = () => {
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
          
          {/* Left Column: Heading Copy, Lists, Who Should Enroll & CTA */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={4}>
              
              {/* Category tag badge */}
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
                  Professional Certification
                </Typography>
              </Box>

              {/* Titles */}
              <Stack spacing={1.5}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: newBlack_medium.style.fontFamily,
                    fontWeight: 800,
                    fontSize: { xs: "30px", sm: "36px", md: "40px" },
                    color: "#1D1D1F",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.15,
                  }}
                >
                  Innovation Educator Certification
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    fontSize: { xs: "18px", sm: "20px" },
                    color: "#F85D00",
                    lineHeight: 1.3,
                  }}
                >
                  Empowering Teachers to Lead Innovation in Their Schools
                </Typography>
              </Stack>

              {/* Description Paragraphs */}
              <Stack spacing={2}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  Teachers are the most powerful force for lasting change in any school. When educators understand innovation, they can inspire it in every student they teach.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.7)",
                    lineHeight: "1.65",
                  }}
                >
                  The IAIRE Innovation Educator Certification is a professional development program that trains and certifies teachers as Innovation & Research Mentors — equipping them with the methodologies, tools, confidence, and practical experience needed to guide students through the complete innovation journey.
                </Typography>
              </Stack>

              {/* Two Column Grid: Covers & Outcomes */}
              <Grid container spacing={3} sx={{ pt: 1 }}>
                
                {/* Covers */}
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
                      What the Program Covers
                    </Typography>
                    
                    <Stack spacing={1.5}>
                      {programCovers.map((item, idx) => (
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
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                {/* Outcomes */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack spacing={3}>
                    
                    {/* Outcomes Block */}
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
                        Outcomes for Educators
                      </Typography>
                      
                      <Stack spacing={1.5}>
                        {educatorOutcomes.map((item, idx) => (
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
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Who Should Enroll */}
                    <Box
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.02)",
                        border: "1px solid rgba(0, 0, 0, 0.04)",
                        borderRadius: "16px",
                        p: 2.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#1D1D1F",
                          mb: 0.75,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Who Should Enroll
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13px",
                          color: "rgba(0, 0, 0, 0.6)",
                          lineHeight: "1.5",
                        }}
                      >
                        This program is designed for school teachers, department heads, academic coordinators, and education leaders who want to make innovation a structured part of their teaching practice.
                      </Typography>
                    </Box>

                  </Stack>
                </Grid>

              </Grid>

              {/* Action Button */}
              <Box sx={{ pt: 1 }}>
                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <Button
                    endIcon={<ArrowForwardIcon className="arrow-icon" />}
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
                      "& .arrow-icon": {
                        transition: "transform 0.25s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#d14e03",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(248, 93, 0, 0.35)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    Become a Certified Innovation Educator
                  </Button>
                </Link>
              </Box>

            </Stack>
          </Grid>

          {/* Right Column: Blueprint Frame */}
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
                alt="Teacher Mentoring & Professional Development Cycles CAD Schematic"
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

export default EducatorCertification;
