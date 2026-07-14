"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";

const AboutHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "140px", md: "180px" },
        pb: { xs: "70px", md: "90px" },
        background: "radial-gradient(circle at 50% 120%, rgba(248, 93, 0, 0.15) 0%, #090A0E 75%)", // Deep glowing mesh gradient
        color: COLORS.WHITE,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background abstract grid lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2.5} alignItems="center">
          {/* Accent tag badge */}
          <Box
            sx={{
              backgroundColor: "rgba(248, 93, 0, 0.12)",
              color: "#F85D00",
              px: 2,
              py: 0.75,
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: 700,
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid rgba(248, 93, 0, 0.25)",
            }}
          >
            GLOBAL ACADEMY
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 850,
              fontSize: { xs: "3rem", md: "4.5rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            About IAIRE
          </Typography>

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "1.1rem", md: "1.35rem" },
              fontWeight: 500,
              color: "#9D9DA7",
              maxWidth: "800px",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            Nurturing the Next Generation of Innovators, Researchers & Entrepreneurs
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutHero;
