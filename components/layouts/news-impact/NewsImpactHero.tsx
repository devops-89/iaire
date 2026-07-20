"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import BlurText from "@/components/widgets/animation/BlurText";

const NewsImpactHero = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "75vh", md: "85vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "140px", md: "130px" },
        pb: { xs: "80px", md: "80px" },
        background: "linear-gradient(135deg, #070C15 0%, #0F1726 100%)",
        color: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxSizing: "border-box",
      }}
    >
      {/* Background glowing flares */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "25%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(147, 197, 253, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "20%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={{ xs: 6, md: 7.5 }} alignItems="center">
          {/* Centered Title Copy */}
          <Box sx={{ textAlign: "center", width: "100%", maxWidth: "880px" }}>
            <Stack
              spacing={3}
              alignItems="center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Badge */}
              <Box
                sx={{
                  backgroundColor: "rgba(147, 197, 253, 0.15)",
                  color: "#93C5FD",
                  px: 2.25,
                  py: 0.75,
                  borderRadius: "100px",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(147, 197, 253, 0.3)",
                }}
              >
                News & Impact
              </Box>

              <BlurText
                variant="h1"
                text="Measuring Real-World Impact & Celebrating Milestones"
                delay={50}
                animateBy="words"
                direction="bottom"
                sx={{
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 850,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: COLORS.WHITE,
                  marginBottom: "20px",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              />

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "15px", md: "17px" },
                  color: "rgba(255, 255, 255, 0.75)",
                  lineHeight: 1.6,
                  maxWidth: "680px",
                  mb: 2,
                }}
              >
                Discover the verifiable outcomes of IAIRE's global programs. From
                provisional patents filed by high schoolers to academic papers
                published in peer-reviewed journals, explore how our students and
                educators are pushing boundaries.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsImpactHero;
