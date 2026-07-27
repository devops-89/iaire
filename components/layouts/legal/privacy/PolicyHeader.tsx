"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import SectionBadge from "@/components/widgets/SectionBadge";

const PolicyHeader = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #070C15 0%, #0F1726 100%)",
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      pt: { xs: "110px", md: "100px" },
      pb: { xs: "56px", md: "64px" },
    }}
  >
    {/* Blur glow — top left */}
    <Box sx={{ position: "absolute", top: "10%", left: "5%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", filter: "blur(110px)", pointerEvents: "none" }} />
    {/* Blur glow — bottom right */}
    <Box sx={{ position: "absolute", bottom: "-15%", right: "5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,54,93,0.18) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
    {/* Grid */}
    <Box sx={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

    <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
      <Stack spacing={2.5} alignItems="flex-start">
        <SectionBadge label="Legal Document" theme="dark" align="left" />

        <Typography
          component="h1"
          sx={{
            fontFamily: inter.style.fontFamily,
            fontWeight: 900,
            fontSize: { xs: "clamp(2.2rem, 7vw, 3.4rem)", md: "clamp(2.8rem, 5vw, 4rem)" },
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
          }}
        >
          Privacy Policy
        </Typography>

        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#94A3B8",
            maxWidth: "560px",
          }}
        >
          At{" "}
          <Box component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
            IAIRE (International Association for Innovation, Research &amp; Entrepreneurship)
          </Box>
          , we are committed to protecting your personal information. This policy explains how we
          collect, use, and safeguard your data.
        </Typography>

        {/* Effective date pill */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.75,
            borderRadius: "100px",
            backgroundColor: "rgba(27,54,93,0.35)",
            border: "1px solid rgba(59,130,246,0.2)",
            mt: 0.5,
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.6)" }} />
          <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", fontWeight: 700, color: "#94A3B8", letterSpacing: "0.04em" }}>
            Effective Date: July 27, 2026
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default PolicyHeader;
