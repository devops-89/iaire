"use client";
import { useSignup } from "@/store/useSignup";
import {
  BILLING_CYCLE,
  COLORS,
  CURRENCY,
  PLAN_LIMIT_TYPE,
  USER_ROLES,
} from "@/utils/enum";
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
  Circle,
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
  Skeleton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import SignupStepper from "./SignupStepper";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { PLAN_LIMITS_DATA } from "@/utils/constant";
import { useMakePayment } from "@/hooks/common/useCreatePayment";

const PaymentLayout = () => {
  const router = useRouter();
  const { data, institutionData, educatorData } = useSignup();

  const role = data?.role || institutionData?.role || educatorData?.role;

  let finalRole = role;

  if (role === USER_ROLES.INSTITUTION) {
    finalRole = USER_ROLES.SCHOOL;
  }
  if (role === USER_ROLES.EDUCATOR) {
    finalRole = USER_ROLES.TEACHER;
  }

  const { planData, planLoading } = useGetPlans({ role: finalRole || "" });
  // console.log("plan Data", planData);

  // console.l;

  const { loading, makePayment } = useMakePayment();

  const createPayment = async (id: string | number) => {
    await makePayment(id);
  };

  const skipPayment = () => {
    if (role === USER_ROLES?.INSTITUTION) {
      router.push(`/dashboard/${USER_ROLES?.INSTITUTION}`);
    }
    if (role === USER_ROLES?.EDUCATOR) {
      router.push(`/dashboard/${USER_ROLES?.EDUCATOR}`);
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
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SignupStepper activeStep={2} />

        {/* <Grid container spacing={4} alignItems="stretch">
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
                    Secure your membership with a valid payment method.
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
                      Complete Registration
                    </Button>

                    <Button
                      fullWidth
                      variant="text"
                      onClick={() => {
                        if (data?.role === USER_ROLES.STUDENT) {
                          router.push("/dashboard/student");
                        }
                        if (
                          data?.role === USER_ROLES.INSTITUTION ||
                          institutionData?.role === USER_ROLES.INSTITUTION
                        ) {
                          router.push("/dashboard/institution");
                        }
                        if (
                          data?.role === USER_ROLES.EDUCATOR ||
                          educatorData?.role === USER_ROLES.EDUCATOR
                        ) {
                          router.push("/dashboard/educator");
                        }
                      }}
                      sx={{
                        mt: 2,
                        color: COLORS.PRIMARY_NAVY,
                        fontFamily: montserrat.style.fontFamily,
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        "&:hover": {
                          bgcolor: "rgba(209, 160, 84, 0.1)",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Skip for now & Pay Later
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
                  {planLoading ? (
                    <Skeleton height={100} />
                  ) : (
                    planData.map((val, i) => (
                      <Stack spacing={3} key={i}>
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
                            {val?.name}
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
                            {val.currency === CURRENCY.INR ? "₹" : "$"}{" "}
                            {val?.price} /{" "}
                            {val.billingCycle === BILLING_CYCLE.MONTHLY
                              ? "mo"
                              : "yr"}
                          </Typography>
                        </Box>

                        <Divider
                          sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        />
                      </Stack>
                    ))
                  )}
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
                      Your subscription will start immediately. You can manage
                      your billing and invoices from the dashboard settings at
                      any time.
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid> */}
        <Grid container spacing={4}>
          <Grid size={8} margin="auto">
            {planData?.map((val, i) => (
              <Card sx={{ p: 3, borderRadius: "20px", mb: 2 }} key={i}>
                <Grid container alignItems={"center"} spacing={5}>
                  <Grid size={6}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: roboto.style.fontFamily,
                      }}
                    >
                      {val.name}
                    </Typography>

                    <Stack>
                      <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                        {val.currency === CURRENCY.INR ? "₹" : "$"} {val?.price}{" "}
                        /
                        {val.billingCycle === BILLING_CYCLE.MONTHLY
                          ? "mo"
                          : "yr"}
                      </Typography>
                    </Stack>
                    <Stack sx={{ mt: 2 }} spacing={2}>
                      <Button
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          backgroundColor: COLORS.PRIMARY_NAVY,
                          borderRadius: "20px",
                          width: "100%",
                          color: COLORS.WHITE,
                        }}
                        onClick={() => createPayment(val.id)}
                      >
                        {loading ? (
                          <CircularProgress
                            sx={{ color: COLORS.WHITE, fontSize: 10 }}
                          />
                        ) : (
                          "Make Payment"
                        )}
                      </Button>
                      <Button
                        sx={{
                          border: "1px solid" + COLORS.PRIMARY_NAVY,
                          borderRadius: "20px",
                          color: COLORS.PRIMARY_NAVY,
                          width: "100%",
                          fontFamily: roboto.style.fontFamily,
                        }}
                        onClick={skipPayment}
                      >
                        Skip Now & Pay Later
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid size={6}>
                    <List>
                      {val.limits.map((item, index) => (
                        <ListItem key={index}>
                          <ListItemAvatar sx={{ minWidth: 20 }}>
                            <Circle
                              sx={{
                                fontSize: 10,
                                color: COLORS.PRIMARY_NAVY,
                              }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              item.key === PLAN_LIMIT_TYPE.MAX_STUDENTS
                                ? `You can Add upto ${item.value} Students`
                                : item.key === PLAN_LIMIT_TYPE.MAX_TEACHERS
                                  ? `You can Add upto ${item.value} Teachers`
                                  : item.key ===
                                      PLAN_LIMIT_TYPE.APPROVE_NOMINEE_TEACHERS
                                    ? `You can Nominate upto ${item.value} Teachers`
                                    : ""
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentLayout;
