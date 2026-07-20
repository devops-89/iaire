"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import SectionBadge from "@/components/widgets/SectionBadge";

// Import Modular Sub-components
import { BenefitCard } from "./components/BenefitCard";
import { ActionButtons } from "./components/ActionButtons";

// Data Definitions
const institutionalBenefits = [
  "IAIRE Institutional Membership & Certification",
  "Teacher Training & Certification",
  "Access to innovation & research curriculum modules",
  "Access to documentation templates",
  "Access to research lab modules",
  "Assessment rubrics & standards framework",
  "Ongoing mentoring & support to teachers",
  "School certification pathways",
  "Eligibility for higher institutional recognition",
];

const InstitutionalMember = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="institutional"
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
          top: "10%",
          right: "-10%",
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
                label="Institutional Membership"
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
                IAIRE Institutional <br />
                <span style={{ color: "#1B365D" }}>Membership for Schools</span>
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
                Institutional Membership is the entry-level designation
                conferred upon admission to the Academy and payment of
                applicable annual membership dues. It entitles the institution
                to participate in Academy programs, access Academy resources,
                sponsor educators for training and certification, and use the
                corresponding Academy designation in accordance with{" "}
                <strong>IAIRE</strong> branding and usage policies.
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
            Institutional Benefits & Deliverables
          </Typography>

          <Grid container spacing={2}>
            {institutionalBenefits.map((benefit, idx) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
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
            ))}
          </Grid>
        </Box>

        {/* Bottom Centered Action buttons */}
        <ActionButtons />
      </Container>
    </Box>
  );
};

export default InstitutionalMember;
