"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEventsOutlined";
import BeamButton from "@/components/widgets/BeamButton";

const areas = [
  "Certified Institutional Member",
  "Certified Innovation Mentor",
  "Certified Research Mentor",
  "Student Innovation Scholar",
  "Student Research Scholar",
  "Associate Fellow pathways",
  "Fellow pathways",
];

const StandardsCertification = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="standards"
      sx={{
        height: { xs: "auto", md: "auto", xl: "auto" },
        minHeight: { xs: "auto", md: "auto", xl: "auto" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#FFFFFF",
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
          top: "15%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 75%)",
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
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          {/* Left Column: Title, Details & CTA Buttons */}
          <Grid
            size={{ xs: 12, md: 6.8 }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
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
                    Standards & Certification
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
                  Certification Based on <br />
                  <span style={{ color: "#1B365D" }}>
                    Demonstrated Competence
                  </span>
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
                  <strong>IAIRE</strong>’s certification framework emphasizes
                  demonstrated competence rather than attendance alone. While
                  participants receive structured training and mentorship,
                  certification is intended to recognize the ability to
                  successfully apply innovation or research methodologies in
                  practice.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                  }}
                >
                  This outcome-based approach helps ensure that certified
                  educators, students, and institutions possess both theoretical
                  understanding and practical experience.
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/membership" style={{ textDecoration: "none" }}>
                  <BeamButton
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
                    View Membership Tiers
                  </BeamButton>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Certification Areas Grid Checklist */}
          <Grid size={{ xs: 12, md: 5.2 }} sx={{ pl: { md: 2 } }}>
            <Card
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: "24px",
                border: "1px solid rgba(27, 54, 93, 0.08)",
                background:
                  "linear-gradient(135deg, rgba(27, 54, 93, 0.01) 0%, rgba(255, 255, 255, 0.95) 100%)",
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
                    <EmojiEventsIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16.5px",
                      fontWeight: 800,
                      color: "#0B1727",
                    }}
                  >
                    Certification Areas
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
                  IAIRE awards voluntary certifications and fellowships across
                  defined academic, educator, and student excellence tracks:
                </Typography>

                {/* Checklist Stack */}
                <Stack spacing={1.75}>
                  {areas.map((area, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                      <Stack
                        key={idx}
                        direction="row"
                        spacing={1.75}
                        alignItems="flex-start"
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        sx={{
                          cursor: "default",
                          transform: isHovered
                            ? "translateX(4px)"
                            : "translateX(0)",
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
                          {area}
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

export default StandardsCertification;
