"use client";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { paymentValidationSchema } from "@/utils/validationSchema";
import {
  CreditCard,
  CalendarToday,
  Lock,
  VerifiedUser,
  Info,
  ArrowForward,
  Person,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Divider,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

const PaymentLayout = () => {
  const router = useRouter();
  const { data, institutionData } = useSignup();
  const formik = useFormik({
    initialValues: {
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: paymentValidationSchema,
    onSubmit: (values) => {
      console.log("Payment submitted:", values);

      if (data?.role === USER_ROLES.STUDENT) {
        router.push("/dashboard/student");
      }
      if (
        data?.role === USER_ROLES.INSTITUTION ||
        institutionData?.role === USER_ROLES.INSTITUTION
      ) {
        router.push("/dashboard/institution");
      }

      if (data?.role === USER_ROLES.EDUCATOR) {
        router.push("/dashboard/educator");
      }
    },
  });

  console.log("data", data);
  console.log("institutionData", institutionData);

  const cardType = useMemo(() => {
    const number = formik.values.cardNumber;
    if (/^4/.test(number)) return "Visa";
    if (/^5[1-5]|^2[2-7]/.test(number)) return "Mastercard";
    if (/^3[47]/.test(number)) return "Amex";
    return null;
  }, [formik.values.cardNumber]);

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
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4} alignItems="stretch">
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                sx={{
                  p: { xs: 3, md: 5 },
                  height: "100%",
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "20px",
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      color: COLORS.BLACK,
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 700,
                      fontSize: 28,
                      mb: 1,
                    }}
                  >
                    Payment Method
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontSize: 14,
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Your card will not be charged today. Free trial ends in 7
                    days.
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  <TextField
                    label="Cardholder Name"
                    placeholder="John Doe"
                    fullWidth
                    variant="outlined"
                    name="cardholderName"
                    value={formik.values.cardholderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.cardholderName &&
                      Boolean(formik.errors.cardholderName)
                    }
                    helperText={
                      formik.touched.cardholderName &&
                      formik.errors.cardholderName
                    }
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                  />
                  <TextField
                    label="Card Number"
                    placeholder="0000 0000 0000 0000"
                    fullWidth
                    name="cardNumber"
                    value={formik.values.cardNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      if (val.length <= 16) {
                        formik.setFieldValue("cardNumber", val);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.cardNumber &&
                      Boolean(formik.errors.cardNumber)
                    }
                    helperText={
                      formik.touched.cardNumber && formik.errors.cardNumber
                    }
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <CreditCard sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                          </InputAdornment>
                        ),
                        endAdornment: cardType && (
                          <InputAdornment position="end">
                            <Typography
                              sx={{
                                color: COLORS.PRIMARY_NAVY,
                                fontWeight: 700,
                                fontSize: 12,
                                border: `1px solid ${COLORS.PRIMARY_NAVY}`,
                                borderRadius: "4px",
                                px: 1,
                                py: 0.2,
                              }}
                            >
                              {cardType}
                            </Typography>
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                  />
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Expiry Date"
                        placeholder="MM/YY"
                        fullWidth
                        name="expiryDate"
                        value={formik.values.expiryDate}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, "");
                          if (val.length >= 2) {
                            val = val.substring(0, 2) + "/" + val.substring(2);
                          }
                          if (val.length <= 5) {
                            formik.setFieldValue("expiryDate", val);
                          }
                        }}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.expiryDate &&
                          Boolean(formik.errors.expiryDate)
                        }
                        helperText={
                          formik.touched.expiryDate && formik.errors.expiryDate
                        }
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <CalendarToday
                                  sx={{ color: "rgba(0, 0, 0, 0.4)" }}
                                />
                              </InputAdornment>
                            ),
                          },
                        }}
                        sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="CVV"
                        placeholder="•••"
                        fullWidth
                        name="cvv"
                        value={formik.values.cvv}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          if (val.length <= 4) {
                            formik.setFieldValue("cvv", val);
                          }
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                        helperText={formik.touched.cvv && formik.errors.cvv}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                              </InputAdornment>
                            ),
                          },
                        }}
                        type="password"
                        sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      type="submit"
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
                      Start 7-Day Free Trial
                    </Button>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <VerifiedUser sx={{ color: "#10B981", fontSize: 18 }} />
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "rgba(0, 0, 0, 0.5)",
                        fontWeight: 500,
                      }}
                    >
                      Secure 256-bit SSL encrypted payment
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  p: { xs: 3, md: 4 },
                  color: COLORS.WHITE,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 22,
                    mb: 3,
                  }}
                >
                  Subscription Summary
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "rgba(255, 255, 255, 0.5)",
                          mb: 0.5,
                        }}
                      >
                        Selected Plan
                      </Typography>
                      <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                        Professional Membership
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: "rgba(255, 255, 255, 0.5)",
                          mb: 0.5,
                        }}
                      >
                        Billing Cycle
                      </Typography>
                      <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                        Monthly ($29.99/mo)
                      </Typography>
                    </Box>

                    <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

                    <Stack direction="row" justifyContent="space-between">
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        Due Today
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: COLORS.ACCENT_TAN,
                          fontSize: 20,
                        }}
                      >
                        $0.00
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    bgcolor: "rgba(209, 160, 84, 0.1)",
                    borderRadius: "12px",
                    border: `1px dashed ${COLORS.ACCENT_TAN}`,
                  }}
                >
                  <Stack direction="row" spacing={1.5}>
                    <Info sx={{ color: COLORS.ACCENT_TAN, mt: 0.2 }} />
                    <Typography
                      sx={{
                        fontSize: 12,
                        lineHeight: 1.5,
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      Your subscription will start automatically after the 7-day
                      trial. You can cancel anytime before the trial ends and
                      you won't be charged.
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default PaymentLayout;
