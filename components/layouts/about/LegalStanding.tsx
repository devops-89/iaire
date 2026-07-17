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

const pillars = [
  "Credibility of peer standards",
  "Rigor of the evaluation process",
  "Expertise of the governing Scientific Board",
  "Demonstrated student & educator outcomes",
  "Acceptance by the educational community served",
];

const LegalStanding = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="legal"
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
          right: "-10%",
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
          left: "-10%",
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
        {/* Top Section: Centered Title & Description */}
        <Box
          sx={{ mb: { xs: 4, md: 4.5 }, textAlign: "center", width: "100%" }}
        >
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
                Legal & Academic Standing
              </Box>
            </Box>

            {/* Title & Description */}
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
                Authority, Credibility, &{" "}
                <span style={{ color: "#1B365D" }}>
                  Professional Recognition
                </span>
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  lineHeight: 1.55,
                  color: "#4B5563",
                  maxWidth: "850px",
                }}
              >
                IAIRE is an independent nonprofit academic and professional
                society incorporated in the State of Texas. IAIRE’s
                certifications and fellowships are voluntary academic
                recognitions awarded on the basis of defined standards,
                demonstrated competencies, peer review, and measurable
                achievements, serving to validate excellence without
                substituting for regulatory or governmental functions.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Middle Section: Bento Grid of 5 Credibility Pillars (3 in Row 1, 2 in Row 2) */}
        <Box sx={{ mb: { xs: 4, md: 4.5 }, width: "100%" }}>
          <Grid container spacing={2} justifyContent="center">
            {pillars.map((pillar, idx) => {
              const isHovered = hoveredIdx === idx;
              const isFirstRow = idx < 3;
              return (
                <Grid
                  size={
                    isFirstRow
                      ? { xs: 12, sm: 6, md: 4 }
                      : { xs: 12, sm: 6, md: 5 }
                  }
                  key={idx}
                  sx={{ display: "flex" }}
                >
                  <Card
                    elevation={0}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    sx={{
                      width: "100%",
                      p: 2.5,
                      borderRadius: "16px",
                      border: isHovered
                        ? "1px solid #1B365D"
                        : "1px solid rgba(27, 54, 93, 0.08)",
                      backgroundColor: isHovered
                        ? "rgba(59, 130, 246, 0.03)"
                        : "rgba(27, 54, 93, 0.01)",
                      boxShadow: isHovered
                        ? "0 10px 25px rgba(27, 54, 93, 0.04)"
                        : "none",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isHovered
                        ? "translateY(-3px)"
                        : "translateY(0)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}
                  >
                    {/* Monospace Indicator Badge */}
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "6px",
                        backgroundColor: isHovered
                          ? "#1B365D"
                          : "rgba(27, 54, 93, 0.06)",
                        color: isHovered ? "#FFFFFF" : "#1B365D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: 800,
                        fontFamily: "monospace",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1.45,
                        color: isHovered ? "#0B1727" : "#4B5563",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {pillar}
                    </Typography>
                  </Card>
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
          <Link href="/membership" style={{ textDecoration: "none" }}>
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
              View Pathways
            </Button>
          </Link>

          {/* <Link href="/about#leadership" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
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
                },
              }}
            >
              Explore Governance
            </Button>
          </Link> */}

          <Link href="/contact" style={{ textDecoration: "none" }}>
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
                color: "#4B5563",
                borderColor: "rgba(0, 0, 0, 0.15)",
                borderWidth: "1.5px",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  borderWidth: "1.5px",
                  borderColor: "#1B365D",
                  color: "#1B365D",
                  backgroundColor: "rgba(27, 54, 93, 0.04)",
                  transform: "translateY(-2px)",
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                  },
                },
              }}
            >
              Contact IAIRE
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default LegalStanding;
