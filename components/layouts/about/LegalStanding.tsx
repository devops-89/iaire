"use client";

import React, { useState } from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import GavelIcon from "@mui/icons-material/GavelOutlined";

const pillars = [
  "Credibility of peer standards",
  "Rigor of the evaluation process",
  "Expertise of the governing Scientific Board",
  "Demonstrated student & educator outcomes",
  "Acceptance by the educational community served",
];

const LegalStanding = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      {/* Background abstract decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          
          {/* Left Column: Title, Details & CTA Buttons */}
          <Grid size={{ xs: 12, md: 6.8 }}>
            <Stack spacing={3.25}>
              
              {/* Heading Section */}
              <Stack spacing={0.75}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{ width: 20, height: 2, backgroundColor: "#1B365D" }}
                  />
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
                    Legal & Academic Standing
                  </Typography>
                </Box>
                
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "34px", md: "38px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                  }}
                >
                  Authority, Credibility, & <br />
                  <span style={{ color: "#1B365D" }}>Professional Recognition</span>
                </Typography>
              </Stack>

              {/* Text Copy Paragraphs */}
              <Stack spacing={2} sx={{ color: "#4B5563", maxWidth: "560px" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                  }}
                >
                  <strong>IAIRE</strong> is an independent U.S. nonprofit academic and professional society incorporated in the State of Texas, to be organized under Section 501(c)(3) of the U.S. Internal Revenue Code.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                  }}
                >
                  IAIRE is not a government agency, statutory regulator, licensing authority, degree-granting institution, accreditation body for school-board affiliation, or substitute for any regulatory or governmental function.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                  }}
                >
                  Accordingly, IAIRE’s certifications and fellowships are voluntary academic and professional recognitions awarded on the basis of defined standards, demonstrated competencies, peer review, and measurable achievements.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/membership" style={{ textDecoration: "none" }}>
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
                      px: 3.25,
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
                    View Pathways
                  </Button>
                </Link>

                <Link href="/about#leadership" style={{ textDecoration: "none" }}>
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
                      px: 3.25,
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
                    Explore Governance
                  </Button>
                </Link>

                <Link href="/about#contact" style={{ textDecoration: "none" }}>
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
                      color: "#4B5563",
                      borderColor: "rgba(0, 0, 0, 0.15)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.25,
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
                    Contact IAIRE
                  </Button>
                </Link>
              </Stack>
              
            </Stack>
          </Grid>

          {/* Right Column: Authority to Certify Cards Stack */}
          <Grid size={{ xs: 12, md: 5.2 }} sx={{ pl: { md: 2 } }}>
            <Card
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: "24px",
                border: "1px solid rgba(27, 54, 93, 0.08)",
                background: "linear-gradient(135deg, rgba(27, 54, 93, 0.01) 0%, rgba(255, 255, 255, 0.95) 100%)",
                boxShadow: "0 15px 35px rgba(27, 54, 93, 0.03)",
                borderLeft: "6px solid #1B365D",
              }}
            >
              <Stack spacing={3}>
                
                {/* Panel Header */}
                <Stack direction="row" spacing={1.75} alignItems="center">
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "10px",
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      color: "#1B365D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GavelIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16.5px",
                      fontWeight: 800,
                      color: "#0B1727",
                    }}
                  >
                    Authority to Certify
                  </Typography>
                </Stack>

                {/* Sub-explanation */}
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  IAIRE’s authority to certify arises from the same principles upon which academic and professional societies establish standards and professional recognitions within their fields:
                </Typography>

                {/* Checklist Stack */}
                <Stack spacing={1.5}>
                  {pillars.map((pillar, idx) => {
                    const isHovered = hoveredIndex === idx;
                    return (
                      <Stack
                        key={idx}
                        direction="row"
                        spacing={1.75}
                        alignItems="flex-start"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        sx={{
                          cursor: "default",
                          transform: isHovered ? "translateX(4px)" : "translateX(0)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: isHovered ? "#3B82F6" : "#1B365D",
                            fontSize: 18,
                            mt: 0.25,
                            flexShrink: 0,
                            transition: "color 0.2s ease",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13px",
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: isHovered ? "#0B1727" : "#4B5563",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {pillar}
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>

              </Stack>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default LegalStanding;
