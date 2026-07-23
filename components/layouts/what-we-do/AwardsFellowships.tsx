"use client";

import React, { useState } from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorderOutlined";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const pathways = [
  {
    title: "Student Scholar Designation",
    desc: "Recognizing high school and college students demonstrating innovation novelty, patent filings, or research publication.",
    icon: <SchoolIcon sx={{ fontSize: 24 }} />,
    color: "#3B82F6",
  },
  {
    title: "Associate Fellow Pathway",
    desc: "Awarded to certified mentors and professionals with demonstrated mentoring outcomes, research guidance, and curriculum leadership.",
    icon: <StarBorderIcon sx={{ fontSize: 24 }} />,
    color: "#8B5CF6",
  },
  {
    title: "Fellow of the Academy (FIAIRE)",
    desc: "The highest professional distinction, representing sustained innovation influence, peer-review governance, and advisory board leadership.",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 24 }} />,
    color: "#F59E0B",
  },
];

const AwardsFellowships = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="fellowships"
      sx={{
        height: { xs: "auto", md: "auto", xl: "auto" },
        minHeight: { xs: "auto", md: "auto", xl: "auto" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "110px" },
        pb: { xs: "80px", md: "90px" },
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0) 60%)",
          filter: "blur(140px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(255, 255, 255, 0) 60%)",
          filter: "blur(140px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
          zIndex: 0,
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
        <Grid container spacing={{ xs: 8, md: 8 }} alignItems="center">
          {/* Left Column: Title, Details & CTA Buttons */}
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Stack spacing={4} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {/* <Box
                  sx={{
                    width: "auto",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: COLORS.WHITE,
                    px: 2.5,
                    py: 0.75,
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: inter.style.fontFamily,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Recognition & Fellowships
                </Box> */}
                <SectionBadge
                  label="Recognition & Fellowships"
                  textColor={COLORS.WHITE}
                  glowColor={COLORS.WHITE}
                  borderColor={COLORS.WHITE}
                />
              </Box>

              {/* Title & Description */}
              <Stack spacing={2.5}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", sm: "40px", md: "46px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: COLORS.WHITE,
                  }}
                >
                  Honoring Global <br />
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(90deg, ${COLORS.WHITE} 0%, rgba(255,255,255,0.6) 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Excellence
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <strong style={{ color: COLORS.WHITE }}>IAIRE</strong>{" "}
                  recognizes schools, educators, and students who demonstrate
                  sustained achievement and contribution within innovation,
                  research, and entrepreneurship education.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Advancement within the IAIRE framework is based upon
                  demonstrated achievement. Higher distinctions such as
                  Associate Fellow and Fellow are awarded only upon satisfying
                  defined criteria relating to intellectual property creation,
                  publications, leadership, and sustained contribution to the
                  field.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 1, width: "100%" }}
                  alignItems={{ xs: "stretch", sm: "center" }}
                >
                  <Link href="/login" style={{ textDecoration: "none" }}>
                    <BeamButton
                      endIcon={
                        <ArrowForwardIcon
                          className="arrow-icon"
                          sx={{ transition: "transform 0.25s ease" }}
                        />
                      }
                      variant="contained"
                      beamColorTo={COLORS.WHITE}
                      sx={{
                        width: "100%",
                        whiteSpace: "nowrap",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.NAVY_GRADIENT_START,
                        backgroundColor: COLORS.WHITE,
                        borderRadius: "100px",
                        px: 4,
                        py: 1.5,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 25px rgba(255, 255, 255, 0.15)",
                        },
                      }}
                    >
                      Explore Recognition
                    </BeamButton>
                  </Link>
                  <Link href="/membership" style={{ textDecoration: "none" }}>
                    <BeamButton
                      variant="outlined"
                      sx={{
                        width: "100%",
                        whiteSpace: "nowrap",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.WHITE,
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        backgroundColor: "transparent",
                        borderRadius: "100px",
                        px: 4,
                        py: 1.5,
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          borderColor: "rgba(255, 255, 255, 0.4)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      View Pathways
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Premium Distinctions Cards */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
            <Stack spacing={2.5}>
              {pathways.map((path, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <Card
                    key={idx}
                    elevation={0}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                    sx={{
                      p: 3,
                      borderRadius: "20px",
                      backgroundColor: isHovered
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid",
                      borderColor: isHovered
                        ? path.color
                        : "rgba(255, 255, 255, 0.05)",
                      boxShadow: isHovered
                        ? `0 10px 40px ${path.color}20`
                        : "0 4px 20px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isHovered
                        ? "translateY(-4px)"
                        : "translateY(0)",
                      cursor: "default",
                      display: "flex",
                      flexDirection: "row",
                      gap: 2.5,
                      alignItems: "center",
                      overflow: "visible",
                      position: "relative",
                    }}
                  >
                    {/* Glowing Accent Line */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: isHovered ? "60%" : "0%",
                        width: "4px",
                        backgroundColor: path.color,
                        borderRadius: "0 4px 4px 0",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        opacity: isHovered ? 1 : 0,
                        boxShadow: `0 0 10px ${path.color}`,
                      }}
                    />

                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "16px",
                        backgroundColor: isHovered
                          ? `${path.color}15`
                          : "rgba(255, 255, 255, 0.05)",
                        color: isHovered
                          ? path.color
                          : "rgba(255, 255, 255, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.4s ease",
                        border: "1px solid",
                        borderColor: isHovered
                          ? `${path.color}30`
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {path.icon}
                    </Box>

                    <Stack spacing={0.75}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "16px",
                          fontWeight: 700,
                          color: COLORS.WHITE,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {path.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13.5px",
                          lineHeight: 1.5,
                          color: "rgba(255, 255, 255, 0.6)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {path.desc}
                      </Typography>
                    </Stack>
                  </Card>
                );
              })}
            </Stack>

            <Box sx={{ display: { lg: "none", xs: "block" } }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1, width: "100%" }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton
                    endIcon={
                      <ArrowForwardIcon
                        className="arrow-icon"
                        sx={{ transition: "transform 0.25s ease" }}
                      />
                    }
                    variant="contained"
                    beamColorTo={COLORS.WHITE}
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.NAVY_GRADIENT_START,
                      backgroundColor: COLORS.WHITE,
                      borderRadius: "100px",
                      px: 4,
                      py: 1.5,
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  >
                    Explore Recognition
                  </BeamButton>
                </Link>
                <Link href="/membership" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "transparent",
                      borderRadius: "100px",
                      px: 4,
                      py: 1.5,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(255, 255, 255, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    View Pathways
                  </BeamButton>
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AwardsFellowships;
