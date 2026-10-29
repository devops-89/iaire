"use client";
import React from "react";
import Image from "next/image";
import { Box, Card, Typography, Chip } from "@mui/material";
import { Business, ArrowBack } from "@mui/icons-material";
import { montserrat, roboto } from "@/utils/fonts";
import SignupStepper from "@/components/layouts/signup/SignupStepper";
import BeamButton from "@/components/widgets/BeamButton";
import logo from "@/images/logo/iaire_logo.png";

interface InstitutionSummaryCardProps {
  institutionData: any;
  onBack: () => void;
}

export const InstitutionSummaryCard: React.FC<InstitutionSummaryCardProps> = ({
  institutionData,
  onBack,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        py: 3,
        px: 2.5,
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid rgba(226, 232, 240, 0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
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
          background: "linear-gradient(90deg, #2563EB 0%, #D97706 100%)",
        },
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Box sx={{ mb: 1.5 }}>
          <Image
            src={logo}
            alt="IAIRE Logo"
            height={28}
            width={105}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box
          sx={{
            width: 68,
            height: 68,
            borderRadius: "16px",
            bgcolor: "rgba(217, 119, 6, 0.1)",
            color: "#D97706",
            border: "1px solid rgba(217, 119, 6, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 1.5,
            boxShadow: "0 6px 16px rgba(217, 119, 6, 0.15)",
          }}
        >
          <Business sx={{ fontSize: 34 }} />
        </Box>

        <Typography
          sx={{
            color: "#0F172A",
            fontFamily: roboto.style.fontFamily,
            fontWeight: 800,
            fontSize: 18,
            mb: 0.3,
            lineHeight: 1.2,
          }}
        >
          {institutionData.institutionName}
        </Typography>

        <Typography
          sx={{
            fontFamily: montserrat.style.fontFamily,
            fontSize: 12,
            color: "#64748B",
            mb: 1.5,
            wordBreak: "break-all",
          }}
        >
          {institutionData.email}
        </Typography>

        <Chip
          label="INSTITUTION ACCOUNT"
          size="small"
          sx={{
            bgcolor: "rgba(217, 119, 6, 0.1)",
            color: "#D97706",
            border: "1px solid rgba(217, 119, 6, 0.3)",
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            fontSize: 9,
            letterSpacing: 0.8,
            px: 1,
          }}
        />
      </Box>

      <Box sx={{ width: "100%", mt: 2 }}>
        <SignupStepper
          activeStep={1}
          steps={["Account Details", "Verification"]}
        />
        <BeamButton
          fullWidth
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={onBack}
          sx={{
            mt: 2,
            height: "42px",
            bgcolor: "#F8FAFC",
            borderColor: "#CBD5E1",
            color: "#475569",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "none",
            fontFamily: montserrat.style.fontFamily,
            "&:hover": {
              borderColor: "#2563EB",
              bgcolor: "#F0F9FF",
              color: "#2563EB",
            },
          }}
        >
          Back to Edit
        </BeamButton>
      </Box>
    </Card>
  );
};

export default InstitutionSummaryCard;
