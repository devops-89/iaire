"use client";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Box, Card, Container, Typography, Button, Stack } from "@mui/material";
import { CheckCircleOutline, ArrowForward } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSignup } from "@/store/useSignup";

const PaymentSuccessLayout = () => {
  const router = useRouter();
  const { data, institutionData, educatorData } = useSignup();

  const handleContinue = () => {
    const role = data?.role || institutionData?.role || educatorData?.role;
    if (role === USER_ROLES.INSTITUTION) {
      router.push(`/dashboard/${USER_ROLES.INSTITUTION}`);
    } else if (role === USER_ROLES.EDUCATOR || USER_ROLES.TEACHER) {
      router.push(`/dashboard/${USER_ROLES.EDUCATOR}`);
    } else if (role === USER_ROLES.STUDENT) {
      router.push(`/dashboard/student`);
    } else {
      router.push("/");
    }
  };

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
            p: { xs: 4, md: 6 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "20px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
            textAlign: "center",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <CheckCircleOutline
              sx={{ fontSize: 80, color: "#10B981", mb: 2 }}
            />

            <Typography
              sx={{
                color: COLORS.BLACK,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 28, md: 32 },
              }}
            >
              Payment Successful!
            </Typography>

            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 16,
                color: "rgba(0, 0, 0, 0.6)",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Thank you for your purchase. Your subscription is now active and
              you can start exploring all premium features.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleContinue}
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
                "&:hover": {
                  bgcolor: "#B88A40",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 10px 20px rgba(209, 160, 84, 0.4)",
                },
              }}
            >
              Go to Dashboard
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default PaymentSuccessLayout;
