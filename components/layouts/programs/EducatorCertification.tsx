"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";

const trainingModules = [
  "Introduction to Innovation",
  "Innovation Mindset",
  "Lifecycle of Innovation",
  "Identifying a Problem",
  "Writing a Problem Statement",
  "STAR Method of Thinking",
  "Dividing Complex Problems",
  "Brainstorming for Innovation",
  "Root-Cause Analysis",
  "Design Thinking",
  "Basics of Patentability and Intellectual Property",
];

const EducatorCertification = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="educator-certification"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "120px", md: "90px" },
        pb: { xs: "60px", md: "35px" },
        background: "linear-gradient(135deg, #0B1528 0%, #1A2847 100%)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
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
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        
        {/* Top Section: Title & Description Header */}
        <Box sx={{ mb: { xs: 4, md: 4.5 }, width: "100%" }}>
          <Stack spacing={2.5}>
            {/* Badge */}
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "auto",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#93C5FD",
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
                Innovation Educator Certification
              </Box>
            </Box>

            {/* Title & Subtitle & Description */}
            <Stack spacing={1.5}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "36px", md: "42px" },
                  fontWeight: 900,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: COLORS.WHITE,
                }}
              >
                IAIRE Innovation <br />
                <span style={{ color: "#93C5FD", textShadow: "0 0 35px rgba(147, 197, 253, 0.2)" }}>
                  Educator Certification
                </span>
              </Typography>
              
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#93C5FD",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Train. Experience. Certify. Lead.
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  lineHeight: 1.55,
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "850px",
                }}
              >
                The IAIRE Innovation Educator Certification Programme prepares teachers to become Innovation Mentors capable of guiding students through the complete innovation lifecycle.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Middle Section: Symmetrical Grid of 11 Training syllabus items */}
        <Box sx={{ mb: { xs: 4, md: 4.5 }, width: "100%" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "11px",
              fontWeight: 800,
              color: "#93C5FD",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 2,
            }}
          >
            Training Curriculum Includes:
          </Typography>

          <Grid container spacing={2}>
            {trainingModules.map((module, idx) => {
              const isHovered = hoveredIdx === idx;
              const isThirdRow = idx >= 8;
              return (
                <Grid size={isThirdRow ? { xs: 12, sm: 6, md: 4 } : { xs: 12, sm: 6, md: 3 }} key={idx} sx={{ display: "flex" }}>
                  <Box
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    sx={{
                      width: "100%",
                      p: 2,
                      borderRadius: "12px",
                      border: isHovered ? "1px solid #93C5FD" : "1px solid rgba(255, 255, 255, 0.08)",
                      backgroundColor: isHovered ? "rgba(147, 197, 253, 0.05)" : "rgba(255, 255, 255, 0.03)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      transition: "all 0.25s ease-in-out",
                      cursor: "default",
                      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                      boxShadow: isHovered ? "0 8px 24px rgba(147, 197, 253, 0.1)" : "none",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: isHovered ? "#93C5FD" : "rgba(255, 255, 255, 0.6)",
                        fontSize: 18,
                        flexShrink: 0,
                        transition: "color 0.2s ease",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "11.5px",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: isHovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.8)",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {module}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Bottom Section: Centered Actions Row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.25}
          sx={{ width: "100%", justifyContent: "center", gap: 1.5 }}
          alignItems="center"
        >
          <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: "#0B1528",
                backgroundColor: COLORS.WHITE,
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                boxShadow: "0 4px 14px rgba(255, 255, 255, 0.15)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  backgroundColor: "#E2E8F0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(255, 255, 255, 0.25)",
                },
              }}
            >
              Apply for Educator Certification
            </Button>
          </Link>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: COLORS.WHITE,
                borderColor: COLORS.WHITE,
                borderWidth: "1.5px",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  borderWidth: "1.5px",
                  borderColor: "#93C5FD",
                  color: "#93C5FD",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Request Training Schedule
            </Button>
          </Link>

          <Link href="/membership#educator" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(255, 255, 255, 0.25)",
                borderWidth: "1.5px",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  borderWidth: "1.5px",
                  borderColor: COLORS.WHITE,
                  color: COLORS.WHITE,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transform: "translateY(-2px)",
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                  },
                },
              }}
            >
              View Teacher Pathway
            </Button>
          </Link>
        </Stack>

      </Container>
    </Box>
  );
};

export default EducatorCertification;
