"use client";
import React from "react";
import { Box, Card, Typography, CircularProgress } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { montserrat, roboto } from "@/utils/fonts";
import BeamButton from "@/components/widgets/BeamButton";
import { InstitutionDetailsSections } from "./InstitutionDetailsSections";
import { COLORS } from "@/utils/enum";

interface InstitutionReviewCardProps {
  institutionData: any;
  loading: boolean;
  onConfirm: () => void;
}

export const InstitutionReviewCard: React.FC<InstitutionReviewCardProps> = ({
  institutionData,
  loading,
  onConfirm,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        py: { xs: 2.5, md: 3 },
        px: { xs: 2.5, md: 4 },
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid rgba(226, 232, 240, 0.9)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 15px 35px -10px rgba(15, 23, 42, 0.08)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #D97706 0%, #059669 100%)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        <Box sx={{ mb: 1.5, flexShrink: 0 }}>
          <Typography
            variant="h2"
            sx={{
              color: "#0F172A",
              fontFamily: roboto.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: 20, md: 24 },
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 0.3,
            }}
          >
            Review Information
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 12,
              color: "#64748B",
            }}
          >
            Please verify your institution details before completing
            registration.
          </Typography>
        </Box>

        {/* Internal Scrollable Detail Grid */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            pr: 0.5,
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { width: 4 },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "#CBD5E1",
              borderRadius: 2,
            },
          }}
        >
          <InstitutionDetailsSections institutionData={institutionData} />
        </Box>
      </Box>

      {/* Submit Action Button pinned at bottom */}
      <Box sx={{ mt: 2, flexShrink: 0 }}>
        <BeamButton
          fullWidth
          type="submit"
          variant="contained"
          endIcon={!loading && <CheckCircleOutline />}
          disabled={loading}
          onClick={onConfirm}
          sx={{
            height: "46px",
            background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
            color: "#FFFFFF",
            borderRadius: "14px",
            fontWeight: 700,
            fontSize: "0.92rem",
            textTransform: "none",
            fontFamily: montserrat.style.fontFamily,
            boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.4)",
            "&:hover": {
              background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
              boxShadow: "0 12px 25px -4px rgba(37, 99, 235, 0.5)",
              transform: "translateY(-1px)",
            },
            transition: "all 0.25s ease",
          }}
        >
          {loading ? (
            <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
          ) : (
            "Verify & Confirm Registration"
          )}
        </BeamButton>
      </Box>
    </Card>
  );
};

export default InstitutionReviewCard;
