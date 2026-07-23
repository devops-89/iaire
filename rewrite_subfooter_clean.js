const fs = require('fs');

const content = `
"use client";

import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";
import BeamButton from "@/components/widgets/BeamButton";

const SubFooterCTA = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        backgroundColor: "#090A0E",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background decoration - subtle grid lines overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          data-aos="fade-up"
          data-aos-duration="900"
          sx={{
            backgroundColor: "#0F1219", // Solid dark background
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: { xs: "24px", md: "32px" },
            p: { xs: 5, md: 8 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          }}
        >
          <Stack spacing={4} alignItems="center">
            <SectionBadge label="Join the Ecosystem" align="center" theme="dark" />

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "36px", md: "52px" },
                fontWeight: 850,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                maxWidth: "700px",
              }}
            >
              Join the IAIRE Community
            </Typography>

            {/* Subtext paragraphs */}
            <Stack spacing={2.5} sx={{ maxWidth: "720px" }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "16.5px",
                  fontWeight: 500,
                  color: "#E2E2E9",
                  lineHeight: 1.6,
                }}
              >
                IAIRE invites schools, educators, students, researchers,
                inventors, entrepreneurs, policymakers, and institutions to join a
                professional community committed to advancing innovation,
                research, and entrepreneurship education.
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  color: "#9D9DA7",
                  lineHeight: 1.65,
                }}
              >
                Whether you are a school seeking to build institutional capacity,
                an educator aspiring to mentor innovation, a student ready to
                solve real-world problems, or an expert willing to guide the next
                generation, IAIRE provides a structured platform for
                participation, recognition, and impact.
              </Typography>
            </Stack>

            {/* CTA Button */}
            <Box sx={{ pt: 3 }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <BeamButton
                  variant="outlined"
                  endIcon={
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={{ transition: "transform 0.25s ease" }}
                    />
                  }
                  sx={{
                    whiteSpace: "nowrap",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "none",
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: "1px",
                    borderRadius: "100px",
                    px: 4.5,
                    py: 1.5,
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      borderWidth: "1px",
                      borderColor: "#FFFFFF",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      transform: "translateY(-2px)",
                      "& .arrow-icon": {
                        transform: "translateX(4px)",
                      },
                    },
                  }}
                >
                  Contact Us
                </BeamButton>
              </Link>
            </Box>

            {/* Quote */}
            <Box sx={{ pt: 4, mt: 4, borderTop: "1px solid rgba(255,255,255,0.06)", width: "100%", maxWidth: "600px" }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  color: "#C5A059", // Keep the gold italic feel
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                "The future will be shaped by those who can imagine better
                possibilities — and build them."
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SubFooterCTA;
`;

fs.writeFileSync('components/layouts/home/SubFooterCTA.tsx', content.trim());
console.log('SubFooterCTA written successfully!');
