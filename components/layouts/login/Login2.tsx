"use client";
import { useLogin } from "@/hooks/common/useLogin";
import useSnackbar from "@/store/useSnackbar";
import { LOGIN_REQUEST } from "@/utils/type";
import { loginValidationSchema } from "@/utils/validationSchema";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "@/images/logo/iaire_logo.png";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import BeamButton from "@/components/widgets/BeamButton";
import { ForgotPasswordModal } from "@/components/modals/common/ForgotPasswordModal";

const Login2 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { login, loading } = useLogin();
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const { setSnackbar } = useSnackbar();

  const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsForgotPasswordOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      const data = {
        identifier: values.email,
        password: values.password,
      };
      login(data as unknown as LOGIN_REQUEST);
    },
  });

  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(${COLORS.NAVY_GRADIENT_START} 30%, ${COLORS.PRIMARY_NAVY} 70%)`,
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              boxShadow: "rgba(99, 99, 99, 0.3) 0px 2px 8px 0px",
              p: 2,
              borderRadius: "20px",
              height: "60vh",
              width: "1000px",
              mx: "auto",
            }}
          >
            <Grid container spacing={2} alignItems="stretch">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    px: 6,
                    height: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Image src={logo} alt="IAIRE Logo" width={200} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: 15,
                      color: "rgba(0, 0, 0, 0.6)",
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    Sign in to access your member dashboard
                  </Typography>
                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      label="Enter Your Email Address"
                      fullWidth
                      sx={{
                        mt: 4,
                        "& .MuiInputBase-root": {
                          borderRadius: "20px",
                        },
                      }}
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                      label="Enter Your Password"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      slotProps={{
                        input: {
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
                      sx={{
                        mt: 4,
                        "& .MuiInputBase-root": {
                          borderRadius: "20px",
                        },
                      }}
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />

                    <BeamButton
                      sx={{ mt: 4, width: "100%" }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Login"
                      )}
                    </BeamButton>
                  </form>

                  <Box sx={{ textAlign: "right", mt: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: 14,
                        color: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    backgroundColor: COLORS.PRIMARY_BLUE,
                    height: "60vh",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 4,
                    textAlign: "center",
                    color: "#FFFFFF",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={() => router.push("/")}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      color: "#FFFFFF",
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(10px)",
                      width: 36,
                      height: 36,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: 24, md: 28 },
                      mb: 2,
                    }}
                  >
                    New Here? Join IAIRE!
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.85)",
                      maxWidth: 380,
                      mb: 4,
                    }}
                  >
                    Create an account to access member dashboards, publication
                    resources, global chapters, and educator certifications.
                  </Typography>

                  <BeamButton
                    variant="outlined"
                    sx={{ color: COLORS.WHITE, width: 200 }}
                    onClick={() => router.push("/signup/role-selection")}
                  >
                    Sign Up
                  </BeamButton>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      <ForgotPasswordModal
        open={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        email={formik.values.email}
      />
    </Box>
  );
};

export default Login2;
