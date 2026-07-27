"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const ConsentBlock = () => (
  <Box
    sx={{
      mt: { xs: 6, md: 8 },
      borderRadius: "16px",
      border: "1px solid rgba(27,54,93,0.12)",
      backgroundColor: "rgba(27,54,93,0.02)",
      p: { xs: 3, md: "36px 40px" },
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "flex-start", sm: "center" },
      gap: 3,
    }}
  >
    {/* Left accent */}
    <Box
      sx={{
        width: 4,
        alignSelf: "stretch",
        minHeight: 56,
        borderRadius: "4px",
        backgroundColor: "#1B365D",
        flexShrink: 0,
        display: { xs: "none", sm: "block" },
      }}
    />

    <Stack spacing={1} flex={1}>
      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontWeight: 800,
          fontSize: { xs: "16px", md: "18px" },
          color: "#0B1727",
          letterSpacing: "-0.02em",
        }}
      >
        Consent
      </Typography>
      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "13.5px",
          lineHeight: 1.7,
          color: "#4B5563",
          maxWidth: 620,
        }}
      >
        By accessing or using the IAIRE website, registering for membership, participating in our
        programs, or submitting information through our platform, you acknowledge that you have
        read, understood, and agreed to this Privacy Policy.
      </Typography>
    </Stack>
  </Box>
);

export default ConsentBlock;
