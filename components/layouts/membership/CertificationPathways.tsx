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

const pathwaysData = [
  {
    title: "Institutional Pathway",
    steps: [
      "Institutional Member",
      "Certified Institutional Member",
      "Associate Fellow Institution of IAIRE",
      "Fellow Institution of IAIRE",
    ],
  },
  {
    title: "Educator Pathway",
    steps: [
      "Educator Member",
      "Certified Innovation or Research Mentor",
      "Associate Fellow of Innovation or Research Education",
      "Fellow of Innovation or Research Education",
    ],
  },
  {
    title: "Student Pathway",
    steps: [
      "Student Member",
      "Student Innovation or Research Scholar",
      "Associate Fellow of Innovation or Research",
      "Fellow Student of Innovation or Research",
    ],
  },
];

const CertificationPathways = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="pathways"
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
          top: "10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(90px)",
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
        {/* Top Section: Title Header (Full Width) */}
        <Box sx={{ mb: { xs: 4, md: 4.5 }, width: "100%" }}>
          <Stack spacing={2.5}
          data-aos="fade-up"
          data-aos-duration="800"
          >
            {/* Badge */}
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "auto",
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
                IAIRE Credentials
              </Box>
            </Box>

            {/* Title & Description */}
            <Stack spacing={1.5}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "26px", sm: "32px", md: "35px" },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0B1727",
                }}
              >
                Certification & <br />
                <span style={{ color: "#1B365D" }}>Fellowship Pathways</span>
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  lineHeight: 1.5,
                  color: "#4B5563",
                  maxWidth: "900px",
                }}
              >
                All advancement criteria are subject to published IAIRE
                standards. Where summary pathway descriptions and published
                standards conflict, the published standards shall control.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Middle Section: Balanced 3 Columns representing the 3 Pathways */}
        <Box sx={{ mb: { xs: 4, md: 4.5 }, width: "100%" }}>
          <Grid container spacing={3}>
            {pathwaysData.map((pathway, pathIdx) => {
              const isHovered = hoveredIdx === pathIdx;
              return (
                <Grid
                  size={{ xs: 12, md: 4 }}
                  key={pathIdx}
                  sx={{ display: "flex" }}
                >
                  <Card
                    elevation={0}
                    onMouseEnter={() => setHoveredIdx(pathIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    sx={{
                      width: "100%",
                      p: 3,
                      borderRadius: "20px",
                      border: isHovered
                        ? "1px solid #1B365D"
                        : "1px solid rgba(27, 54, 93, 0.08)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: isHovered
                        ? "0 15px 30px rgba(27, 54, 93, 0.05)"
                        : "none",
                      transition: "all 0.3s ease-in-out",
                      transform: isHovered
                        ? "translateY(-4px)"
                        : "translateY(0)",
                    }}
                  >
                    <Stack spacing={2.5}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#1B365D",
                          borderBottom: "1.5px solid rgba(27, 54, 93, 0.08)",
                          pb: 1,
                        }}
                      >
                        {pathway.title}
                      </Typography>

                      <Stack spacing={2} sx={{ position: "relative" }}>
                        {pathway.steps.map((step, idx) => (
                          <Stack
                            key={idx}
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: "50%",
                                backgroundColor: isHovered
                                  ? "#1B365D"
                                  : "rgba(27, 54, 93, 0.06)",
                                color: isHovered ? "#FFFFFF" : "#1B365D",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "11px",
                                fontWeight: 800,
                                fontFamily: inter.style.fontFamily,
                                flexShrink: 0,
                                transition: "all 0.2s ease",
                              }}
                            >
                              {idx + 1}
                            </Box>
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "#4B5563",
                                lineHeight: 1.3,
                              }}
                            >
                              {step}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
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
          sx={{ width: "100%", justifyContent: "flex-start", gap: 1.5 }}
          alignItems="center"
        >
          <Link href="/login" style={{ textDecoration: "none" }}>
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
              Download Pathway Guide
            </Button>
          </Link>

          {/* <Link
            href="/signup/role-selection"
            style={{ textDecoration: "none" }}
          >
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
              Apply for Recognition
            </Button>
          </Link> */}

          {/* <Link href="/contact" style={{ textDecoration: "none" }}>
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
              Contact Certification Team
            </Button>
          </Link> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default CertificationPathways;
