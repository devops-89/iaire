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
const responsibilities = [
  "Reviewing and recommending certification standards and competency frameworks",
  "Reviewing fellowship criteria and progression requirements",
  "Reviewing ethics, research-integrity, and conflict-of-interest policies",
  "Reviewing appeals relating to certification and fellowship decisions",
  "Conducting periodic review of assessment methodologies and quality processes",
  "Recommending revisions to standards, rubrics, and academic frameworks",
  "Advising the Academy on emerging trends, future skills, and strategic priorities",
];

const WhoWeAre = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="leadership"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        background: "linear-gradient(135deg, #070C15 0%, #0F1726 100%)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
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
            "radial-gradient(circle, rgba(27, 54, 93, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
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
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          {/* Left Column: Title, Narrative Descriptions & CTAs */}
          <Grid data-aos="fade-right" data-aos-duration="800" size={{ xs: 12, md: 5.2 }} sx={{ pr: { md: 2 } }}>
            <Stack spacing={3.5} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
                  Governance & Scientific Board
                </Box>
              </Box>

              {/* Title & Narrative */}
              <Stack spacing={2.25}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "34px", md: "38px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: COLORS.WHITE,
                  }}
                >
                  Governance Built for <br />
                  <span
                    style={{
                      color: "#93C5FD",
                      textShadow: "0 0 35px rgba(147, 197, 253, 0.2)",
                    }}
                  >
                    Standards, Trust, & Quality
                  </span>
                </Typography>

                <Stack
                  spacing={1.75}
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                    }}
                  >
                    <strong>IAIRE</strong> is governed through bylaws, policies,
                    standards, peer-review processes, and an academic leadership
                    structure designed to support quality, integrity, and
                    long-term sustainability.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                    }}
                  >
                    The IAIRE Scientific & Innovation Board serves as the
                    Academy’s highest academic and professional advisory body
                    and provides oversight for standards development,
                    certification frameworks, fellowship criteria, academic
                    quality assurance, and programme governance.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                    }}
                  >
                    The Board periodically reviews and approves certification
                    standards, educator competency frameworks, student
                    achievement criteria, and fellowship requirements to ensure
                    alignment with international professional practices.
                  </Typography>
                </Stack>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link
                  href="/about/board"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#0B0C10",
                      backgroundColor: COLORS.WHITE,
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.1,
                      boxShadow: "0 4px 14px rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#E2E8F0",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(255, 255, 255, 0.25)",
                      },
                    }}
                  >
                    Meet the Board
                  </Button>
                </Link>

                <Link href="/resources" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
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
                      py: 1.1,
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
                    View Standards
                  </Button>
                </Link>

                {/* <Link href="/programs" style={{ textDecoration: "none" }}>
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
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "rgba(255, 255, 255, 0.75)",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.1,
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
                    Learn About Certification
                  </Button>
                </Link> */}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Board Responsibilities Grid (6 in 2-cols + 1 full-width at the bottom) */}
          <Grid data-aos="fade-left" data-aos-duration="800" data-aos-delay="150" size={{ xs: 12, md: 6.8 }} sx={{ pl: { md: 4 } }}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#93C5FD",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 1,
                }}
              >
                Board Responsibilities & Mandate
              </Typography>

              <Grid container spacing={2}>
                {responsibilities.map((resp, idx) => {
                  const isHovered = hoveredIdx === idx;
                  const isLastItem = idx === responsibilities.length - 1;
                  return (
                    <Grid
                      size={isLastItem ? { xs: 12 } : { xs: 12, sm: 6 }}
                      key={idx}
                      sx={{ display: "flex" }}
                    >
                      <Card
                        elevation={0}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        sx={{
                          width: "100%",
                          p: 2,
                          borderRadius: "14px",
                          border: isHovered
                            ? "1px solid #93C5FD"
                            : "1px solid rgba(255, 255, 255, 0.08)",
                          backgroundColor: isHovered
                            ? "rgba(147, 197, 253, 0.05)"
                            : "rgba(255, 255, 255, 0.03)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                          cursor: "default",
                          transform: isHovered
                            ? "translateY(-3px)"
                            : "translateY(0)",
                          boxShadow: isHovered
                            ? "0 8px 24px rgba(147, 197, 253, 0.15)"
                            : "none",
                        }}
                      >
                        {/* Monospace Indicator Badge */}
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "6px",
                            backgroundColor: isHovered
                              ? "#93C5FD"
                              : "rgba(255, 255, 255, 0.08)",
                            color: isHovered ? "#070C15" : "#93C5FD",
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
                            lineHeight: 1.35,
                            color: isHovered
                              ? "#FFFFFF"
                              : "rgba(255, 255, 255, 0.8)",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {resp}
                        </Typography>
                      </Card>
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

export default WhoWeAre;
