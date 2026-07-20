"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import SectionBadge from "@/components/widgets/SectionBadge";

// Import Modular Components
import { BenefitCard } from "./components/BenefitCard";
import { EducatorActionButtons } from "./components/EducatorActionButtons";

const educatorBenefits = [
  "IAIRE Professional Membership",
  "Certification as Innovation or Research Mentor",
  "Continued mentoring support",
  "Access to IDEAS Innovation/Research Case Studies Library",
  "Eligibility for honoraria, subject to programme guidelines and funding availability",
  "Eligibility for Advanced Fellowship Designations",
  "Career enhancement as City, District, State, National, or Chief Innovation and Research Mentor pathways within the IAIRE ecosystem",
];

const EducatorMember = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="educator"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F8F9FC",
        position: "relative",
        overflow: "hidden",
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Stack spacing={3.5} data-aos="fade-up" data-aos-duration="800">
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <SectionBadge
                label="Educator Membership"
                align="left"
                textColor="#1B365D"
                glowColor="#1B365D"
                borderColor="rgba(27, 54, 93, 0.25)"
                backgroundColor="rgba(27, 54, 93, 0.08)"
              />
            </Box>

            <Stack spacing={2.5}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "34px", md: "40px" },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0B1727",
                }}
              >
                IAIRE Educator <br />
                <span style={{ color: "#1B365D" }}>
                  Membership & Mentorship
                </span>
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#4B5563",
                  maxWidth: "800px",
                }}
              >
                Educator Membership is the entry-level designation conferred
                upon educators admitted to the Academy. Educator Members are
                eligible to participate in Academy-approved training,
                certification, and professional development programs in
                Innovation, Research, and Entrepreneurship Education and receive
                access to Academy resources, frameworks, and mentorship tools to
                guide students in innovation and research activities.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: { xs: 6, md: 8 }, width: "100%" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "11px",
              fontWeight: 800,
              color: "#1B365D",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 2.5,
            }}
          >
            Educator Benefits & Deliverables
          </Typography>

          <Grid container spacing={2}>
            {educatorBenefits.map((benefit, idx) => {
              const isLastItem = idx === educatorBenefits.length - 1;
              return (
                <Grid
                  size={isLastItem ? { xs: 12 } : { xs: 12, sm: 6, md: 4 }}
                  key={idx}
                  sx={{ display: "flex" }}
                >
                  <BenefitCard
                    benefit={benefit}
                    isHovered={hoveredIdx === idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Action Buttons Row */}
        <EducatorActionButtons />
      </Container>
    </Box>
  );
};

export default EducatorMember;
