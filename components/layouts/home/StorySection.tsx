"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";
import BeamButton from "@/components/widgets/BeamButton";
const milestones = [
  {
    title: "DiscoverSTEM Advisory Panel",
    text: "During the development of the DiscoverSTEM ecosystem, the founders recognized the importance of establishing structured academic oversight in curriculum development, mentoring methodologies, evaluation frameworks, research standards, innovation processes, intellectual property development, and program quality. DiscoverSTEM therefore constituted a Scientific and Advisory Panel comprising accomplished scientists, researchers, inventors, engineers, entrepreneurs, and subject-matter experts from academia, government research organizations, industry, and international institutions.",
  },
  {
    title: "Transition to Independence",
    text: "Over time, the experience gained through this advisory structure contributed significantly to the development and refinement of standards, rubrics, policies, and best practices implemented within the DiscoverSTEM ecosystem. As these frameworks matured and demonstrated practical effectiveness, the learnings from this advisory model helped the establishment of IAIRE as an independent academic and professional society dedicated to advancing innovation, research, and entrepreneurship education beyond the DiscoverSTEM ecosystem.",
  },
  {
    title: "Global Academic Service",
    text: "IAIRE now serves the broader educational community by defining standards, certifying schools, educators, and students against those standards, and conferring academic and professional recognitions upon those who demonstrate sustained achievement and contribution in innovation, research, and entrepreneurship education.",
  },
];

const StorySection = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#0D0D11",
        position: "relative",
        overflow: "clip",
      }}
    >
      {/* Background decoration - high-end glowing blue blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
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
            "radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* Left Column: Sticky Title and High-Contrast CTAs */}
          <Grid
            size={{ xs: 12, md: 4.8 }}
            data-aos="fade-right"
            data-aos-duration="800"
            sx={{
              position: { md: "sticky" },
              top: { md: "140px" },
              height: { md: "fit-content" },
              alignSelf: "flex-start",
            }}
          >
            <Stack spacing={4}>
              {/* Overtitle Header */}
              <Stack spacing={2}>
                <SectionBadge label="The Genesis of IAIRE" align="left" />

                {/* Headline */}
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "36px", sm: "42px", md: "48px" },
                    fontWeight: 850,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                  }}
                >
                  Our Story
                </Typography>
              </Stack>

              {/* Intro Paragraph */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#9D9DA7",
                  lineHeight: 1.65,
                }}
              >
                IAIRE emerged from the need to create a robust standards and
                quality-assurance framework for innovation and research
                education.
              </Typography>

              {/* High-Contrast Action Buttons */}
              <Box sx={{ display: { lg: "flex", xs: "none" } }}>
                <Stack
                  direction={{ xs: "column", sm: "row", md: "column" }}
                  spacing={2}
                  sx={{ pt: 1, width: "100%" }}
                >
                  <Link
                    href="/about"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <BeamButton
                      variant="contained"
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.WHITE,
                        backgroundColor: COLORS.PRIMARY_BLUE,
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.4,
                        boxShadow: "0 4px 20px rgba(255, 255, 255, 0.15)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      Learn More About IAIRE
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Premium Glowing Timeline */}
          <Grid
            size={{ xs: 12, md: 7.2 }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <Box sx={{ position: "relative", pl: { xs: 4, md: 6 } }}>
              {/* Timeline Vertical Line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  bottom: 12,
                  left: { xs: "16px", md: "24px" },
                  width: "2px",
                  background:
                    "linear-gradient(to bottom, #3B82F6 0%, rgba(59, 130, 246, 0.4) 60%, rgba(59, 130, 246, 0.05) 100%)",
                  zIndex: 0,
                }}
              />

              {/* Milestones Stack */}
              <Stack spacing={4}>
                {milestones.map((milestone, idx) => {
                  const isHovered = hoveredMilestone === idx;
                  return (
                    <Box
                      key={idx}
                      onMouseEnter={() => setHoveredMilestone(idx)}
                      onMouseLeave={() => setHoveredMilestone(null)}
                      sx={{
                        position: "relative",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {/* Timeline Node Marker */}
                      <Box
                        sx={{
                          position: "absolute",
                          left: { xs: "-22px", md: "-30px" },
                          top: "22px",
                          width: isHovered ? "16px" : "12px",
                          height: isHovered ? "16px" : "12px",
                          borderRadius: "50%",
                          backgroundColor: "#0D0D11",
                          border: `2.5px solid ${isHovered ? "#3B82F6" : "rgba(59, 130, 246, 0.5)"}`,
                          boxShadow: isHovered ? "0 0 12px #3B82F6" : "none",
                          zIndex: 2,
                          transform: isHovered
                            ? "translate(-2px, -2px)"
                            : "none",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />

                      {/* Content Card Panel */}
                      <Box
                        sx={{
                          backgroundColor: isHovered
                            ? "rgba(255, 255, 255, 0.03)"
                            : "rgba(255, 255, 255, 0.01)",
                          border: isHovered
                            ? "1px solid rgba(59, 130, 246, 0.3)"
                            : "1px solid rgba(255, 255, 255, 0.03)",
                          borderRadius: "18px",
                          p: { xs: 3, md: 4 },
                          transform: isHovered
                            ? "translateX(6px)"
                            : "translateX(0)",
                          boxShadow: isHovered
                            ? "0 15px 35px rgba(0, 0, 0, 0.35)"
                            : "none",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "19px",
                            fontWeight: 700,
                            color: isHovered ? "#3B82F6" : "#FFFFFF",
                            mb: 1.5,
                            transition: "color 0.25s ease",
                          }}
                        >
                          {milestone.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "14px",
                            fontWeight: 400,
                            color: isHovered ? "#E2E2E9" : "#9D9DA7",
                            lineHeight: 1.7,
                            transition: "color 0.25s ease",
                          }}
                        >
                          {milestone.text}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
              <Box sx={{ display: { lg: "none", xs: "flex" }, mt: 4 }}>
                <Stack
                  direction={{ xs: "column", sm: "row", md: "column" }}
                  spacing={2}
                  sx={{ pt: 1, width: "100%" }}
                >
                  <Link
                    href="/about"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <BeamButton
                      variant="contained"
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#0D0D11",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "100px",
                        px: 3.5,
                        py: 1.4,
                        boxShadow: "0 4px 20px rgba(255, 255, 255, 0.15)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "#F3F4F6",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 24px rgba(255, 255, 255, 0.25)",
                        },
                      }}
                    >
                      Learn More About IAIRE
                    </BeamButton>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StorySection;
