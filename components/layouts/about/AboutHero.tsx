"use client";

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";

const AboutHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "120px", md: "160px" },
        pb: { xs: "60px", md: "80px" },
        background: `linear-gradient(180deg, #0A190F 0%, #1B3B2B 100%)`, // Deep green to vibrant dark green
        color: COLORS.WHITE,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 2,
          }}
        >
          About IAIRE
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "1rem", md: "1.25rem" },
            maxWidth: "800px",
            mx: "auto",
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          International Academy for Innovation, Research & Entrepreneurship
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutHero;
