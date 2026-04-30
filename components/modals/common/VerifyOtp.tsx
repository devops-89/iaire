"use client";
import {
  Box,
  Button,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Close } from "@mui/icons-material";
import { useModal } from "@/store/useModal";
import { useRouter } from "next/navigation";
import { useVerifyOtp } from "@/hooks/common/useVerifyOtp";

const VerifyOtp = ({ email }: { email: string }) => {
  const [otp, setOtp] = useState("");
  const { hideModal } = useModal();
  const router = useRouter();
  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };
  const { verifyOtp, loading } = useVerifyOtp({ email, otp });

  const handleVerify = async () => {
    const res = await verifyOtp();
  };

  return (
    <Box
      sx={{
        borderRadius: 4,
        p: 4,
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          mt: 2,
          fontWeight: 700,
          fontFamily: montserrat.style.fontFamily,
          color: COLORS.PRIMARY_NAVY,
          textAlign: "center",
        }}
      >
        Verify Email
      </Typography>

      <Typography
        sx={{
          mb: 4,
          fontFamily: roboto.style.fontFamily,
          fontSize: 14,
          color: "rgba(0,0,0,0.6)",
          textAlign: "center",
          px: 2,
        }}
      >
        Please enter the 6-digit one-time password sent to your email address.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
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
                fontWeight: 600,
                borderRadius: 2,
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.2)",
                  borderWidth: 1.5,
                },
                "&:hover fieldset": {
                  borderColor: COLORS.ACCENT_TAN,
                },
                "&.Mui-focused fieldset": {
                  borderColor: COLORS.PRIMARY_NAVY,
                  borderWidth: 2,
                },
              },
            },
          }}
        />
      </Box>

      <Button
        fullWidth
        variant="contained"
        disabled={otp.length !== 6}
        onClick={handleVerify}
        sx={{
          bgcolor: COLORS.PRIMARY_NAVY,
          color: COLORS.WHITE,
          fontWeight: 600,
          py: 1.5,
          borderRadius: 2,
          fontFamily: montserrat.style.fontFamily,
          "&:hover": {
            bgcolor: "rgba(28, 66, 130, 0.9)",
          },
          "&.Mui-disabled": {
            bgcolor: "rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        {loading ? <CircularProgress color="inherit" size={20} /> : "Verify"}
      </Button>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 14,
            color: "rgba(0,0,0,0.6)",
          }}
        >
          Didn't receive the code?{" "}
          <Box
            component="span"
            sx={{
              color: COLORS.ACCENT_TAN,
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Resend OTP
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default VerifyOtp;
