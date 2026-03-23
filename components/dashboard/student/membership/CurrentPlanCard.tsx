"use client";
import React from "react";
import { Box, Typography, Paper, Button, Chip, Stack } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Star, CheckCircle } from "@mui/icons-material";

const CurrentPlanCard = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        border: "1px solid #f0f0f0",
        background: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 2,
          background: `linear-gradient(135deg, ${COLORS.ACCENT_TAN} 0%, #B8860B 100%)`,
          color: COLORS.WHITE,
          borderBottomLeftRadius: "20px",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Star fontSize="small" />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: montserrat.style.fontFamily,
            textTransform: "uppercase",
          }}
        >
          Active Plan
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "14px",
          color: "rgba(0,0,0,0.5)",
          fontWeight: 600,
          mb: 1,
          fontFamily: montserrat.style.fontFamily,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Current Subscription
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: COLORS.PRIMARY_NAVY,
          mb: 2,
          fontFamily: roboto.style.fontFamily,
        }}
      >
        Premium Scholar
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Chip
          label="Auto-renews on Dec 24, 2026"
          size="small"
          sx={{
            bgcolor: "rgba(11, 23, 39, 0.05)",
            color: COLORS.PRIMARY_NAVY,
            fontWeight: 600,
            fontFamily: montserrat.style.fontFamily,
          }}
        />
        <Chip
          icon={<CheckCircle style={{ color: "#2E7D32", fontSize: "16px" }} />}
          label="Active"
          size="small"
          sx={{
            bgcolor: "#E8F5E9",
            color: "#2E7D32",
            fontWeight: 600,
            fontFamily: montserrat.style.fontFamily,
          }}
        />
      </Stack>

      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 800,
            color: COLORS.ACCENT_TAN,
            fontFamily: roboto.style.fontFamily,
            display: "flex",
            alignItems: "baseline",
            gap: 0.5,
          }}
        >
          $29.99
          <Typography
            component="span"
            sx={{
              fontSize: "16px",
              color: "rgba(0,0,0,0.4)",
              fontWeight: 600,
            }}
          >
            / month
          </Typography>
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          sx={{
            bgcolor: COLORS.PRIMARY_NAVY,
            color: COLORS.WHITE,
            borderRadius: "12px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 700,
            fontFamily: montserrat.style.fontFamily,
            "&:hover": { bgcolor: COLORS.NAVY_GRADIENT_END },
          }}
        >
          Upgrade Plan
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: COLORS.PRIMARY_NAVY,
            borderColor: "rgba(11, 23, 39, 0.2)",
            borderRadius: "12px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 700,
            fontFamily: montserrat.style.fontFamily,
            "&:hover": { borderColor: COLORS.PRIMARY_NAVY, bgcolor: "transparent" },
          }}
        >
          Manage Billing
        </Button>
      </Stack>
    </Paper>
  );
};

export default CurrentPlanCard;
