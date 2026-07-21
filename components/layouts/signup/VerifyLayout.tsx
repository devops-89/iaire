"use client";

import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { ArrowForward, Refresh, MailOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
  Link,
  IconButton} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import BeamButton from "@/components/widgets/BeamButton";

const VerifyLayout = () => {
  const router = useRouter();
  const { data } = useSignup();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (newValue: string) => {
    setOtp(newValue);
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      console.log("Verifying OTP:", otp);
      router.push("/signup/payment");
    }
  };

  const handleResend = useCallback(() => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      console.log("Resending OTP...");
    }
  }, [canResend]);

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.05) 0%, rgba(209, 160, 84, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "20px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              bgcolor: "rgba(209, 160, 84, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <MailOutline sx={{ color: COLORS.ACCENT_TAN, fontSize: 35 }} />
          </Box>

          <Typography
            sx={{
              color: COLORS.BLACK,
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              fontSize: 28,
              mb: 1,
            }}
          >
            Verify Your Email
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.6)",
              mb: 4,
            }}
          >
            We've sent a 6-digit verification code to
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                color: COLORS.PRIMARY_NAVY,
                display: "block",
                mt: 0.5,
              }}
            >
              {data?.email || "your email address"}
            </Box>
          </Typography>

          <Box sx={{ mb: 4, maxWidth: "400px", mx: "auto" }}>
            <MuiOtpInput
              value={otp}
              onChange={handleOtpChange}
              length={6}
              TextFieldsProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "rgba(0,0,0,0.02)",
                    "& fieldset": { borderColor: "rgba(0,0,0,0.1)" },
                    "&:hover fieldset": { borderColor: COLORS.PRIMARY_NAVY },
                    "&.Mui-focused fieldset": {
                      borderColor: COLORS.PRIMARY_NAVY,
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    textAlign: "center",
                    color: COLORS.PRIMARY_NAVY,
                  },
                },
              }}
            />
          </Box>

          <BeamButton
            variant="contained"
            fullWidth
            size="large"
            disabled={otp.length !== 6}
            onClick={handleVerify}
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: COLORS.ACCENT_TAN,
              color: COLORS.BLACK,
              py: 1.8,
              borderRadius: "12px",
              fontSize: "1.1rem",
              fontWeight: 800,
              textTransform: "none",
              fontFamily: montserrat.style.fontFamily,
              boxShadow: "0px 8px 15px rgba(209, 160, 84, 0.3)",
              mb: 3,
              "&:hover": {
                bgcolor: "#B88A40",
                transform: "translateY(-2px)",
                boxShadow: "0px 10px 20px rgba(209, 160, 84, 0.4)",
              },
              "&.Mui-disabled": {
                bgcolor: "rgba(209, 160, 84, 0.2)",
                color: "rgba(0,0,0,0.3)",
              },
            }}
          >
            Verify & Continue
          </BeamButton>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "rgba(0, 0, 0, 0.5)",
                fontFamily: montserrat.style.fontFamily,
              }}
            >
              Didn't receive the code?
            </Typography>
            {canResend ? (
              <BeamButton
                size="small"
                onClick={handleResend}
                startIcon={<Refresh />}
                sx={{
                  color: COLORS.PRIMARY_NAVY,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Resend Code
              </BeamButton>
            ) : (
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                Resend in {timer}s
              </Typography>
            )}
          </Stack>

          <Box sx={{ mt: 5 }}>
            <Link
              href="/signup"
              underline="hover"
              sx={{
                color: "rgba(0, 0, 0, 0.4)",
                fontSize: 14,
                fontFamily: montserrat.style.fontFamily,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              Back to Sign Up
            </Link>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default VerifyLayout;
