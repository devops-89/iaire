"use client";
import { Box, Typography, IconButton, CircularProgress, Chip } from "@mui/material";
import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Close, Email, MarkEmailRead } from "@mui/icons-material";
import { useModal } from "@/store/useModal";
import { useRouter } from "next/navigation";
import { useVerifyOtp } from "@/hooks/common/useVerifyOtp";
import BeamButton from "@/components/widgets/BeamButton";
import { useSignup } from "@/store/useSignup";

const VerifyOtp = ({ email }: { email?: string }) => {
  const [otp, setOtp] = useState("");
  const { hideModal } = useModal();
  const router = useRouter();

  const { institutionData, educatorData, data } = useSignup();
  const activeEmail =
    email ||
    institutionData?.email ||
    educatorData?.email ||
    data?.email ||
    "";

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  const { verifyOtp, loading } = useVerifyOtp({ email: activeEmail, otp });

  const handleVerify = async () => {
    await verifyOtp();
  };

  return (
    <Box
      sx={{
        borderRadius: 4,
        p: { xs: 3, sm: 4 },
        position: "relative",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "rgba(37, 99, 235, 0.1)",
          color: "#2563EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mt: 1,
          mb: 1.5,
        }}
      >
        <MarkEmailRead sx={{ fontSize: 28 }} />
      </Box>

      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: 800,
          fontFamily: montserrat.style.fontFamily,
          color: "#0F172A",
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
        }}
      >
        Verify Email
      </Typography>

      <Typography
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontSize: 14,
          color: "#64748B",
          px: 1,
          mb: 1.5,
        }}
      >
        Please enter the 6-digit verification code sent to:
      </Typography>

      {activeEmail && (
        <Chip
          icon={<Email sx={{ fontSize: "16px !important", color: "#2563EB !important" }} />}
          label={activeEmail}
          sx={{
            bgcolor: "#EFF6FF",
            color: "#1D4ED8",
            border: "1px solid rgba(37, 99, 235, 0.2)",
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            fontSize: "0.85rem",
            py: 0.5,
            px: 1,
            mb: 3,
            maxWidth: "100%",
            "& .MuiChip-label": {
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
        />
      )}

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3.5 }}>
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={6}
          gap={1}
          TextFieldsProps={{
            size: "small",
            placeholder: "-",
            sx: {
              "& .MuiOutlinedInput-root": {
                width: { xs: 40, sm: 45 },
                height: 50,
                fontSize: 20,
                fontWeight: 700,
                borderRadius: "12px",
                color: "#0F172A",
                "& fieldset": {
                  borderColor: "#CBD5E1",
                  borderWidth: 1.5,
                },
                "&:hover fieldset": {
                  borderColor: "#2563EB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2563EB",
                  borderWidth: 2,
                  boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.15)",
                },
              },
            },
          }}
        />
      </Box>

      <BeamButton
        variant="contained"
        disabled={otp.length !== 6 || loading}
        onClick={handleVerify}
        sx={{
          width: "100%",
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
          },
          "&.Mui-disabled": {
            bgcolor: "#E2E8F0",
            color: "#94A3B8",
          },
        }}
      >
        {loading ? <CircularProgress color="inherit" size={20} /> : "Verify Code"}
      </BeamButton>

      <Typography
        sx={{
          mt: 2.5,
          fontSize: 13,
          fontFamily: montserrat.style.fontFamily,
          color: "#64748B",
        }}
      >
        Didn't receive the code?{" "}
        <Box
          component="span"
          sx={{
            color: "#2563EB",
            fontWeight: 700,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Resend OTP
        </Box>
      </Typography>
    </Box>
  );
};

export default VerifyOtp;
