"use client";

import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import type { PolicySection } from "./data";

interface Props {
  section: PolicySection;
}

const PolicySectionCard = ({ section }: Props) => (
  <Box
    sx={{
      borderRadius: "16px",
      border: "1px solid rgba(27,54,93,0.08)",
      backgroundColor: "#FFFFFF",
      overflow: "hidden",
    }}
  >
    {/* Header */}
    <Stack direction="row" alignItems="center" spacing={2} sx={{ px: { xs: 2.5, md: 3 }, pt: 2.5, pb: 2 }}>
      {/* Number badge */}
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: "8px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(27,54,93,0.06)",
          color: "#1B365D",
          fontSize: "11px",
          fontWeight: 800,
          fontFamily: "monospace",
        }}
      >
        {String(section.id).padStart(2, "0")}
      </Box>

      {/* Icon */}
      <Box sx={{ color: "#1B365D", display: "flex", "& svg": { fontSize: "20px" } }}>
        {section.icon}
      </Box>

      {/* Title */}
      <Typography
        component="h2"
        sx={{
          fontFamily: inter.style.fontFamily,
          fontWeight: 700,
          fontSize: { xs: "14px", md: "15px" },
          color: "#0B1727",
          lineHeight: 1.35,
        }}
      >
        {section.title}
      </Typography>
    </Stack>

    <Divider sx={{ borderColor: "rgba(27,54,93,0.06)", mx: { xs: 2.5, md: 3 } }} />

    {/* Content */}
    <Box sx={{ px: { xs: 2.5, md: 3 }, py: 2.5 }}>
      {section.content}
    </Box>
  </Box>
);

export default PolicySectionCard;
