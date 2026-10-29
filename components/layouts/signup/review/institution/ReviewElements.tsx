"use client";
import React from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

export const SectionHeader = ({ title }: { title: string }) => (
  <Box sx={{ mt: 0.8, mb: 1 }}>
    <Typography
      sx={{
        color: "#2563EB",
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: 1,
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&::after": {
          content: '""',
          flex: 1,
          height: "1px",
          backgroundColor: "#E2E8F0",
        },
      }}
    >
      {title}
    </Typography>
  </Box>
);

export const DetailBox = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => {
  if (!value || value === "N/A" || value === "") return null;
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={{
          bgcolor: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          p: 1.2,
          height: "100%",
          boxSizing: "border-box",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "#2563EB",
            bgcolor: "#F0F9FF",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.68rem",
            fontWeight: 600,
            color: "#64748B",
            textTransform: "uppercase",
            fontFamily: montserrat.style.fontFamily,
            letterSpacing: 0.6,
            mb: 0.3,
          }}
        >
          {label}
        </Typography>
        <Box
          sx={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "#0F172A",
            fontFamily: montserrat.style.fontFamily,
            wordBreak: "break-word",
            lineHeight: 1.2,
          }}
        >
          {value}
        </Box>
      </Box>
    </Grid>
  );
};

export const ReviewTopNav = ({
  onBack,
  stepLabel = "STEP 2 OF 2 • REVIEW",
}: {
  onBack: () => void;
  stepLabel?: string;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 1.5,
      flexShrink: 0,
    }}
  >
    <Box
      onClick={onBack}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "#FFFFFF",
        border: "1px solid rgba(15, 23, 42, 0.12)",
        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
        borderRadius: "50px",
        px: 2,
        py: 0.6,
        color: "#475569",
        fontFamily: montserrat.style.fontFamily,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.25s ease",
        "&:hover": {
          bgcolor: "#F1F5F9",
          borderColor: COLORS.PRIMARY_BLUE,
          color: "#1D4ED8",
          transform: "translateX(-4px)",
        },
      }}
    >
      <ArrowBack sx={{ fontSize: 15 }} /> Back to Edit
    </Box>

    <Chip
      label={stepLabel}
      size="small"
      sx={{
        bgcolor: "rgba(59, 130, 246, 0.08)",
        color: "#1D4ED8",
        border: "1px solid rgba(59, 130, 246, 0.2)",
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 700,
        fontSize: 10,
        letterSpacing: 1,
        px: 1,
      }}
    />
  </Box>
);
