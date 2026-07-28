"use client";
import { useLogin } from "@/hooks/common/useLogin";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { LOGIN_REQUEST } from "@/utils/type";
import { loginValidationSchema } from "@/utils/validationSchema";
import {
  Email,
  Visibility,
  VisibilityOff,
  Lock,
  Close,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import BeamButton from "@/components/widgets/BeamButton";
import { useRouter } from "next/navigation";
import { ForgotPasswordModal } from "@/components/modals/common/ForgotPasswordModal";
import useSnackbar from "@/store/useSnackbar";
import logo from "@/images/logo/iaire_logo.png";
import Image from "next/image";
const LoginLayout = () => {
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
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
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
            py: 5,
            px: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "16px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box
            sx={{
              textAlign: "flex-end",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() => router.push("/")}
              sx={{ border: "1px solid " + COLORS.BEAM_COLOR }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            {/* <Box
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
            </Box> */}
            <Image src={logo} alt="" width={200} />
            {/* <Typography
              sx={{
                color: COLORS.BLACK,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 28,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Welcome to IAIRE
            </Typography> */}
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 15,
                color: "rgba(0, 0, 0, 0.6)",
                mt: 1,
              }}
            >
              Sign in to access your member dashboard
            </Typography>
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Email Address"
                placeholder="email@example.com"
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "rgba(0, 0, 0, 0.4)" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  ...TEXTFIELD_STYLE_VALIDATION,
                }}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                fullWidth
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  ...TEXTFIELD_STYLE_VALIDATION,
                }}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                id="password"
              />

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: -1 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: COLORS.PRIMARY_NAVY,
                        "&.Mui-checked": { color: COLORS.PRIMARY_NAVY },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontFamily: montserrat.style.fontFamily,
                        color: COLORS.BLACK,
                      }}
                    >
                      Remember me
                    </Typography>
                  }
                />
                <Link
                  href="#"
                  underline="hover"
                  onClick={handleForgotPassword}
                  sx={{
                    fontSize: 14,
                    color: COLORS.PRIMARY_NAVY,
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 500,
                  }}
                >
                  Forgot password?
                </Link>
              </Stack>

              <BeamButton
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  bgcolor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  py: 1.5,
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  fontFamily: montserrat.style.fontFamily,
                  boxShadow: "0px 4px 10px rgba(209, 160, 84, 0.3)",
                  "&:hover": {
                    bgcolor: COLORS.PRIMARY_BLUE,
                    boxShadow: "0px 6px 15px rgba(209, 160, 84, 0.4)",
                  },
                }}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "Sign In"
                )}
              </BeamButton>

              <Typography
                textAlign="center"
                sx={{
                  fontSize: 14,
                  fontFamily: montserrat.style.fontFamily,
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Don't have an account?{" "}
                <Link
                  href="/signup/role-selection"
                  underline="hover"
                  sx={{
                    color: COLORS.PRIMARY_NAVY,
                    fontWeight: 600,
                  }}
                >
                  Join IAIRE
                </Link>
              </Typography>
            </Stack>
          </form>
        </Card>
      </Container>
      <ForgotPasswordModal
        open={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        email={formik.values.email}
      />
    </Box>
  );
};

export default LoginLayout;
