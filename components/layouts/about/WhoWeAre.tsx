"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";

const WhoWeAre = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: "#111827",
                mb: 6,
              }}
            >
              Who We Are
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "left" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                color: "#111827",
                mb: 2,
              }}
            >
              About IAIRE
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              The International Academy for Innovation, Research & Entrepreneurship (IAIRE) is a prestigious global
              organization dedicated to nurturing the next generation of innovators, researchers, and entrepreneurs.
              We recognize and celebrate excellence among youth, their schools, and the educators who guide them.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
