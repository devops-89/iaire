"use client";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { signupValidationSchema } from "@/utils/validationSchema";
import { useSignup } from "@/store/useSignup";
import {
  Email,
  Visibility,
  VisibilityOff,
  Lock,
  Person,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SignupLayout = ({ children }: { children?: React.ReactNode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setUserData } = useSignup();
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const params = useSearchParams();

  const role = params.get("role");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: role,
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      setUserData(values);
      router.push("/signup/verify");
    },
  });

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
        <Card
          sx={{
            py: 5,
            px: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "16px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          {children ? (
            children
          ) : (
            <>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: COLORS.ACCENT_TAN,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#111827",
                    fontWeight: 800,
                    fontSize: 24,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  I
                </Box>
                <Typography
                  sx={{
                    color: COLORS.BLACK,
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 28,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Create Account
                </Typography>
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: 15,
                    color: "rgba(0, 0, 0, 0.6)",
                    mt: 1,
                  }}
                >
                  Join the IAIRE community and connect with other professionals
                </Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="First Name"
                        placeholder="John"
                        fullWidth
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
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
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Last Name"
                        placeholder="Doe"
                        fullWidth
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
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
                    </Grid>
                  </Grid>

                  <TextField
                    label="Email Address"
                    placeholder="email@example.com"
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                  />

                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    fullWidth
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={formik.touched.password && formik.errors.password}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                  />

                  <TextField
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    fullWidth
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                  />

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    type="submit"
                    sx={{
                      bgcolor: COLORS.ACCENT_TAN,
                      color: COLORS.BLACK,
                      py: 1.5,
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      textTransform: "none",
                      fontFamily: montserrat.style.fontFamily,
                      boxShadow: "0px 4px 10px rgba(209, 160, 84, 0.3)",
                      mt: 2,
                      "&:hover": {
                        bgcolor: "#B88A40",
                        boxShadow: "0px 6px 15px rgba(209, 160, 84, 0.4)",
                      },
                    }}
                  >
                    Sign Up
                  </Button>

                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: 14,
                      fontFamily: montserrat.style.fontFamily,
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      underline="hover"
                      sx={{
                        color: COLORS.PRIMARY_NAVY,
                        fontWeight: 600,
                      }}
                    >
                      Sign In
                    </Link>
                  </Typography>
                </Stack>
              </form>
            </>
          )}
        </Card>
      </Container>
    </Box>
  );
};


export default SignupLayout;
