"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import SectionBadge from "@/components/widgets/SectionBadge";

// Import Modular Components
import { BenefitCard } from "./components/BenefitCard";
import { StudentActionButtons } from "./components/StudentActionButtons";

const studentBenefits = [
  "IAIRE Student Membership and Certification",
  "Access to IDEAS Innovation Case Studies Library",
  "Participation in Innovation and Research competitions",
  "Eligibility for Certifications, Scholar Designations, and Fellowships",
  "Eligibility to participate in Shark Tank-style startup pitch and investment competitions",
  "Access to structured innovation and research learning resources",
];

const StudentMember = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="student"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Stack spacing={3.5}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <SectionBadge
                label="Student Membership"
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
                IAIRE Student <br />
                <span style={{ color: "#1B365D" }}>Membership & Pathways</span>
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
                Student Membership is the entry-level designation conferred upon students admitted to the Academy. Student Members are eligible to participate in Academy-approved programs, competitions, mentorship initiatives, training modules, and research or innovation activities and receive access to Academy resources designed to develop competencies in innovation, research, entrepreneurship, leadership, and problem-solving.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Benefits Grid */}
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
            Student Benefits & Deliverables
          </Typography>

          <Grid container spacing={2}>
            {studentBenefits.map((benefit, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} sx={{ display: "flex" }}>
                <BenefitCard
                  benefit={benefit}
                  isHovered={hoveredIdx === idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Action Buttons Row */}
        <StudentActionButtons />
      </Container>
    </Box>
  );
};

export default StudentMember;
