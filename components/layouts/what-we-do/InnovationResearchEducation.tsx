"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";

const domains = [
  "Problem discovery and understanding",
  "Creativity and idea generation",
  "Innovation design and concept development",
  "Research depth and quality",
  "Prototype development",
  "Intellectual property and novelty evaluation",
  "Entrepreneurship and market understanding",
  "Communication, presentation, and documentation",
  "Collaboration, teamwork, and leadership",
  "Impact, sustainability, and future growth",
];

const InnovationResearchEducation = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="education"
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
          right: "-5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
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
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
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
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          {/* Left Column: Heading Copy, Description & Buttons */}
          <Grid size={{ xs: 12, md: 5.8 }}>
            <Stack spacing={3} sx={{ width: "100%" }}>
              <SectionBadge
                label="Curriculum Domains"
                align="left"
                textColor="#1B365D"
                glowColor="#1B365D"
                borderColor="rgba(27, 54, 93, 0.25)"
                backgroundColor="rgba(27, 54, 93, 0.08)"
              />

              {/* Title & Subtitle */}
              <Stack spacing={0.75}>
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
                  Innovation & <br />
                  <span style={{ color: "#1B365D" }}>Research Education</span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#3B82F6",
                    letterSpacing: "-0.010em",
                  }}
                >
                  From Learning About Innovation to Producing Innovation
                </Typography>
              </Stack>

              {/* Copy Paragraphs */}
              <Stack
                spacing={1.75}
                sx={{ color: "#4B5563", maxWidth: "560px" }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                  }}
                >
                  <strong>IAIRE</strong> supports schools in teaching students
                  how to identify meaningful problems, apply innovation and
                  research methodologies, document ideas, develop intellectual
                  outputs, and communicate solutions.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                  }}
                >
                  Student learning is organized around ten core curriculum
                  domains:
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
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
                    Explore Student Pathways
                  </Button>
                </Link>

                {/* <Link href="/programs" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
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
                      },
                    }}
                  >
                    View Rubrics
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
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#4B5563",
                      borderColor: "rgba(0, 0, 0, 0.15)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.15,
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
                    Start a School Hub
                  </Button>
                </Link> */}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Numbered Domains Grid Checklist */}
          <Grid size={{ xs: 12, md: 6.2 }} sx={{ pl: { md: 3 } }}>
            <Grid container spacing={2}>
              {domains.map((domain, idx) => {
                const isHovered = hoveredIdx === idx;
                const formattedNum = String(idx + 1).padStart(2, "0");
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
                        backgroundColor: "#FFFFFF",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        borderRadius: "12px",
                        p: 1.75,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.75,
                        width: "100%",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: isHovered
                          ? "translateY(-3px)"
                          : "translateY(0)",
                        boxShadow: isHovered
                          ? "0 10px 20px rgba(27, 54, 93, 0.04)"
                          : "0 2px 6px rgba(0, 0, 0, 0.01)",
                        borderColor: isHovered
                          ? "rgba(27, 54, 93, 0.2)"
                          : "rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      {/* Monospace Badge number */}
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          backgroundColor: isHovered
                            ? "rgba(59, 130, 246, 0.1)"
                            : "rgba(27, 54, 93, 0.04)",
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
                        {domain}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InnovationResearchEducation;
