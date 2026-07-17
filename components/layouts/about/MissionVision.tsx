"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import AssignmentIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";

const valuesList = [
  "Scientific integrity",
  "Academic excellence",
  "Ethical innovation",
  "Inclusion and access",
  "Measurable outcomes",
  "Peer review & quality assurance",
  "Student protection & wellbeing",
  "Collaboration across disciplines",
  "Service to society",
  "Continuous improvement",
];

const MissionVision = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Top Section: Centered Title Header */}
        <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: "center", width: "100%" }}>
          <Stack spacing={2.5} alignItems="center">
            {/* Badge */}
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(27, 54, 93, 0.06)",
                  color: "#1B365D",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: 800,
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Core Purpose
              </Box>
            </Box>

            {/* Title & Subtitle */}
            <Stack spacing={1.5} alignItems="center">
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
                Mission, Vision{" "}
                <span style={{ color: "#1B365D" }}>& Core Values</span>
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Middle Section: Split columns for Mission/Vision (Left) and Core Values (Right) */}
        <Grid
          container
          spacing={{ xs: 6, md: 6 }}
          alignItems="flex-start"
          sx={{ mb: { xs: 4, md: 5 } }}
        >
          {/* Left Column: Mission & Vision Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              {/* Mission Card */}
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid rgba(27, 54, 93, 0.08)",
                  borderLeft: "5px solid #1B365D",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 10px 30px rgba(27, 54, 93, 0.02)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(27, 54, 93, 0.05)",
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ mb: 1.5 }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      color: "#1B365D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <AssignmentIcon sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 800,
                      color: "#0B1727",
                      fontSize: "16px",
                    }}
                  >
                    Mission Statement
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  To advance innovation, research, and entrepreneurship
                  education by establishing standards, certification frameworks,
                  mentorship systems, quality-assurance processes, and
                  recognition pathways that empower schools, educators, and
                  students to create meaningful intellectual, academic,
                  entrepreneurial, and societal impact.
                </Typography>
              </Card>

              {/* Vision Card */}
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid rgba(59, 130, 246, 0.08)",
                  borderLeft: "5px solid #3B82F6",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.02)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.05)",
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ mb: 1.5 }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      backgroundColor: "rgba(59, 130, 246, 0.06)",
                      color: "#3B82F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <VisibilityIcon sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 800,
                      color: "#0B1727",
                      fontSize: "16px",
                    }}
                  >
                    Vision Statement
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  To build a globally respected academic and professional
                  society that enables schools to become centers of innovation
                  and research, educators to become certified mentors and
                  leaders, and students to become innovators, researchers,
                  inventors, entrepreneurs, and responsible problem-solvers.
                </Typography>
              </Card>
            </Stack>
          </Grid>

          {/* Right Column: Values Checklist Symmetrical Grid */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ pl: { md: 2 } }}>
            <Stack spacing={2.5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#1B365D",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.5,
                }}
              >
                Core Values & Tenets
              </Typography>

              <Grid container spacing={1.5}>
                {valuesList.map((val, idx) => {
                  const isHovered = hoveredIdx === idx;
                  return (
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      key={idx}
                      sx={{ display: "flex" }}
                    >
                      <Box
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        sx={{
                          width: "100%",
                          p: 1.75,
                          borderRadius: "12px",
                          border: "1px solid rgba(27, 54, 93, 0.06)",
                          backgroundColor: isHovered
                            ? "rgba(59, 130, 246, 0.03)"
                            : "rgba(27, 54, 93, 0.01)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1.25,
                          transition: "all 0.25s ease-in-out",
                          cursor: "default",
                          transform: isHovered
                            ? "translateY(-1.5px)"
                            : "translateY(0)",
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: isHovered ? "#3B82F6" : "#1B365D",
                            fontSize: 16,
                            flexShrink: 0,
                            transition: "color 0.2s ease",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "11.5px",
                            fontWeight: 700,
                            lineHeight: 1.3,
                            color: isHovered ? "#0B1727" : "#4B5563",
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

        {/* Bottom Section: Centered Actions Row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.25}
          sx={{ width: "100%", justifyContent: "center", gap: 1.5 }}
          alignItems="center"
        >
          <Link href="/programs" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: COLORS.WHITE,
                backgroundColor: "#1B365D",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
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

          <Link
            href="/signup/role-selection"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              endIcon={
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{ transition: "transform 0.25s ease" }}
                />
              }
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: "#1B365D",
                borderColor: "#1B365D",
                borderWidth: "1.5px",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
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
      </Container>
    </Box>
  );
};

export default MissionVision;
