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
        backgroundColor: "#050A14", // Very deep premium dark blue/black
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Premium glowing background orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "50%",
          height: "80%",
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "50%",
          height: "80%",
          background: "radial-gradient(circle, rgba(147,197,253,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      
      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: { xs: "24px", md: "40px" },
            p: { xs: 4, sm: 6, md: 8, lg: 10 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 24px 64px -12px rgba(0, 0, 0, 0.5)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle inner highlight */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "20%",
              right: "20%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              opacity: 0.5
            }}
          />

          <Stack spacing={4} alignItems="center">
            <SectionBadge label="Join the Ecosystem" align="center" theme="dark" />

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", sm: "44px", md: "56px" },
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #FFFFFF 0%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                maxWidth: "800px"
              }}
            >
              Join a Community Advancing Innovation & Research
            </Typography>

            {/* Subtext paragraphs */}
            <Stack spacing={3} sx={{ maxWidth: "700px" }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "17px",
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
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
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

            {/* Action Buttons */}
            <Box sx={{ pt: 3, display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, width: { xs: "100%", sm: "auto" } }}>
              <Link href="/contact" style={{ textDecoration: "none", width: "100%" }}>
                <BeamButton
                  variant="contained"
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
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "none",
                    color: "#050A14",
                    background: "linear-gradient(90deg, #FFFFFF, #E2E8F0)",
                    borderRadius: "100px",
                    px: 5,
                    py: 1.6,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 40px rgba(255, 255, 255, 0.25)",
                      "& .arrow-icon": {
                        transform: "translateX(6px)",
                      },
                    },
                  }}
                >
                  Contact Us
                </BeamButton>
              </Link>
            </Box>

            {/* Quote section at the bottom of the card */}
            <Box
              sx={{
                mt: 5,
                pt: 4,
                borderTop: "1px dashed rgba(255,255,255,0.1)",
                width: "100%",
                maxWidth: "700px"
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "16px",
                  color: "#FCD34D",
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  opacity: 0.9
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
console.log('SubFooterCTA rewritten successfully!');
