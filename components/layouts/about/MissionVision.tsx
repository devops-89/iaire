"use client";

import React, { useState } from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";

const valuesList = [
  "Scientific integrity",
  "Academic excellence",
  "Ethical innovation",
  "Inclusion and access",
  "Measurable outcomes",
  "Peer review and quality assurance",
  "Student protection and wellbeing",
  "Collaboration across disciplines",
  "Service to society",
  "Continuous improvement",
];

const MissionVision = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <Box
      id="mission"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#F8F9FC",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Premium Background abstract decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          
          {/* Left Column: Heading, Mission & Vision Cards */}
          <Grid size={{ xs: 12, md: 5.8 }}>
            <Stack spacing={3} sx={{ width: "100%" }}>
              
              {/* Header Title Section */}
              <Stack spacing={0.75}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 20, height: 2, backgroundColor: "#1B365D" }} />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "11.5px",
                      fontWeight: 800,
                      color: "#1B365D",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Core Purpose
                  </Typography>
                </Box>
                
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "34px", md: "38px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Mission, Vision <br />
                  <span style={{ color: "#1B365D" }}>& Core Values</span>
                </Typography>
              </Stack>

              {/* Mission & Vision Cards */}
              <Stack spacing={2.5}>
                
                {/* Mission Card */}
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0.8) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(27, 54, 93, 0.08)",
                    borderLeft: "5px solid #1B365D",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "rgba(27, 54, 93, 0.25)",
                      boxShadow: "0 15px 30px rgba(27, 54, 93, 0.06)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: "8px",
                        backgroundColor: "rgba(27, 54, 93, 0.06)",
                        color: "#1B365D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <AssignmentTurnedInIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 800,
                        color: "#0B1727",
                        fontSize: "17px",
                      }}
                    >
                      Mission Statement
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                      color: "#4B5563",
                    }}
                  >
                    To advance innovation, research, and entrepreneurship education by establishing standards, certification frameworks, mentorship systems, quality-assurance processes, and recognition pathways that empower schools, educators, and students to create meaningful intellectual, academic, entrepreneurial, and societal impact.
                  </Typography>
                </Card>

                {/* Vision Card */}
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.01) 0%, rgba(255, 255, 255, 0.8) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(59, 130, 246, 0.08)",
                    borderLeft: "5px solid #3B82F6",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "rgba(59, 130, 246, 0.25)",
                      boxShadow: "0 15px 30px rgba(59, 130, 246, 0.06)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: "8px",
                        backgroundColor: "rgba(59, 130, 246, 0.06)",
                        color: "#3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <VisibilityIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 800,
                        color: "#0B1727",
                        fontSize: "17px",
                      }}
                    >
                      Vision Statement
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                      color: "#4B5563",
                    }}
                  >
                    To build a globally respected academic and professional society that enables schools to become centers of innovation and research, educators to become certified mentors and leaders, and students to become innovators, researchers, inventors, entrepreneurs, and responsible problem-solvers.
                  </Typography>
                </Card>

              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%" }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/programs" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.15,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Learn What We Do
                  </Button>
                </Link>

                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#1B365D",
                      borderColor: "#1B365D",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.15,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#122744",
                        color: "#122744",
                        backgroundColor: "rgba(27, 54, 93, 0.04)",
                        transform: "translateY(-2px)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    Join the IAIRE Community
                  </Button>
                </Link>
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Values Checklist */}
          <Grid size={{ xs: 12, md: 6.2 }} sx={{ pl: { md: 3 } }}>
            <Stack spacing={3}>
              
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11.5px",
                    fontWeight: 800,
                    color: "#1B365D",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Values
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    color: "#5F5F6A",
                    lineHeight: 1.5,
                  }}
                >
                  The foundational tenets guiding our certifications, peer-review standards, and mentorship structures:
                </Typography>
              </Stack>

              {/* Numbered Premium Cards Flow - More Compact */}
              <Grid container spacing={2}>
                {valuesList.map((val, index) => {
                  const isHovered = hoveredValue === index;
                  const formattedNum = String(index + 1).padStart(2, "0");
                  
                  return (
                    <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: "flex" }}>
                      <Box
                        onMouseEnter={() => setHoveredValue(index)}
                        onMouseLeave={() => setHoveredValue(null)}
                        sx={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid rgba(0, 0, 0, 0.05)",
                          borderRadius: "12px",
                          p: 1.75, // Scaled down padding
                          display: "flex",
                          alignItems: "center",
                          gap: 1.75,
                          width: "100%",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                          boxShadow: isHovered ? "0 10px 20px rgba(27, 54, 93, 0.04)" : "0 2px 6px rgba(0, 0, 0, 0.01)",
                          borderColor: isHovered ? "rgba(27, 54, 93, 0.2)" : "rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        {/* More compact circular number badge */}
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: isHovered ? "rgba(59, 130, 246, 0.1)" : "rgba(27, 54, 93, 0.04)",
                            color: isHovered ? "#3B82F6" : "#1B365D",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontFamily: "monospace",
                            fontSize: "13px",
                            fontWeight: 800,
                            transition: "all 0.25s ease",
                          }}
                        >
                          {formattedNum}
                        </Box>
                        
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#1F2937",
                            lineHeight: 1.3,
                          }}
                        >
                          {val}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
