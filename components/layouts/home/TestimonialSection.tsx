"use client";

import { Box, Container, Stack, Typography, Avatar } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 10 },
        background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, #1A3043 100%)`,
        color: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "50%",
          height: "80%",
          background: "radial-gradient(circle, rgba(0, 255, 170, 0.08) 0%, rgba(0, 255, 170, 0) 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "transparent",
              color: COLORS.ACCENT_TAN,
              border: `2px solid ${COLORS.ACCENT_TAN}`,
            }}
          >
            <FormatQuoteIcon sx={{ fontSize: 48 }} />
          </Avatar>

          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              fontWeight: 500,
              lineHeight: 1.4,
              fontSize: { xs: 24, md: 36 },
              color: "rgba(255, 255, 255, 0.95)",
            }}
          >
            "IAIRE changed my perspective on what's possible. The network and
            resources are unmatched."
          </Typography>

          <Box>
            <Typography
              variant="h6"
              sx={{ color: COLORS.ACCENT_TAN, fontWeight: 700, mb: 0.5 }}
            >
              Sarah Chen
            </Typography>
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem" }}
            >
              Student Member, Lincoln High School
            </Typography>
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.85rem" }}
            >
              Published Researcher & Patent Holder
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
