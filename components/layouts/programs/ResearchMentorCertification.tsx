"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import heroImg from "@/public/images/programs/research_mentor.png";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const competencies = [
  "Research Design",
  "Literature Review",
  "Hypothesis Development",
  "Experimentation",
  "Data Analysis",
  "Ethical Research Practices",
  "Manuscript Drafting",
  "Peer Review",
  "Publication Preparation",
];

const ResearchMentorCertification = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="research-certification"
      sx={{
        height: { xs: "auto", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
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
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 75%)",
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
          {/* Left Column: Visual Research Lab Illustration (ordered first on desktop, second on mobile) */}
          <Grid
            size={{ xs: 12, md: 5 }}
            order={{ xs: 2, md: 1 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pr: { md: 2 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "320px", sm: "380px", md: "400px" },
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-8px)" },
                },
              }}
            >
              {/* Outer soft glowing outline frame */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(27, 54, 93, 0.05) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 25px 50px rgba(27, 54, 93, 0.06)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="IAIRE Research Mentor Certification lab student mentoring scene"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Title, Details, Grid of Competencies & CTA Buttons (ordered second on desktop, first on mobile) */}
          <Grid
            size={{ xs: 12, md: 7 }}
            order={{ xs: 1, md: 2 }}
            sx={{ pl: { md: 4 } }}
          >
            <Stack spacing={3.25} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "flex-start" },
                }}
              >
                <SectionBadge
                  label="Research Credentials"
                  align={{ xs: "center", md: "flex-start" }}
                />
              </Box>

              {/* Title & Description */}
              <Stack spacing={1.5} data-aos="fade-up" data-aos-duration="800">
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
                  IAIRE Research <br />
                  <span style={{ color: "#1B365D" }}>Mentor Certification</span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1B365D",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Building Research Capability in Schools
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                    maxWidth: "600px",
                  }}
                >
                  The IAIRE Research Mentor Certification pathway equips
                  educators to guide students through research design,
                  literature review, hypothesis development, experimentation,
                  data analysis, ethical research practices, manuscript
                  drafting, peer review, and publication preparation.
                </Typography>
              </Stack>

              {/* Symmetrical Grid of Competencies */}
              <Stack spacing={1.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#1B365D",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Core Training Areas
                </Typography>

                <Grid container spacing={1.5}>
                  {competencies.map((comp, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                      <Grid
                        size={{ xs: 12, sm: 4 }}
                        key={idx}
                        sx={{ display: "flex" }}
                      >
                        <Box
                          onMouseEnter={() => setHoveredIdx(idx)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          sx={{
                            width: "100%",
                            p: 1.5,
                            borderRadius: "10px",
                            border: "1px solid rgba(27, 54, 93, 0.06)",
                            backgroundColor: isHovered
                              ? "rgba(59, 130, 246, 0.03)"
                              : "rgba(27, 54, 93, 0.02)",
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
                              fontSize: "11px",
                              fontWeight: 600,
                              lineHeight: 1.3,
                              color: isHovered ? "#0B1727" : "#4B5563",
                            }}
                          >
                            {comp}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.1,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Become a Research Mentor
                  </BeamButton>
                </Link>

                {/* <Link
                  href="#research-modules"
                  style={{ textDecoration: "none" }}
                >
                  <BeamButton
                    variant="outlined"
                    sx={{
                      width: "100%",
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
                      py: 1.1,
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
                    View Research Modules
                  </BeamButton>
                </Link> */}

                {/* <Link href="/contact" style={{ textDecoration: "none" }}>
                  <BeamButton
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
                      color: "#4B5563",
                      borderColor: "rgba(0, 0, 0, 0.15)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.1,
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
                    Contact Program Team
                  </BeamButton>
                </Link> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResearchMentorCertification;
