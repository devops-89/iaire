"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  Stack,
  Card,
  Container,
  InputAdornment,
  Badge,
} from "@mui/material";
import { useFormik } from "formik";
import { schoolSignupValidationSchema } from "@/utils/validationSchema";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { COLORS } from "@/utils/enum";
import {
  CloudUpload,
  Delete,
  Business,
  Person,
  School as SchoolIcon,
  Badge as BadgeIcon,
  Email,
  Phone,
  Language,
  LocationOn,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { MuiTelInput } from "mui-tel-input";
import { montserrat, roboto } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";

const School = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { data } = useSignup();
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      principalName: "",
      affiliationType: "",
      affiliationNumber: "",
      affiliationCertificate: null,
      email: "",
      phone: "",
      website: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schoolSignupValidationSchema,
    onSubmit: (values) => {
      console.log("School Signup Values:", values);
      console.log("dat", data);

      router.push("/signup/verify");
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      formik.setFieldValue("affiliationCertificate", event.target.files[0]);
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
        py: 8,
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
        <Card
          sx={{
            py: 5,
            px: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: COLORS.ACCENT_TAN,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
                mx: "auto",
                mb: 2,
                boxShadow: "0px 4px 10px rgba(209, 160, 84, 0.3)",
              }}
            >
              <SchoolIcon sx={{ fontSize: 32 }} />
            </Box>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 28, md: 34 },
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              School Registration
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 16,
                color: "rgba(0, 0, 0, 0.5)",
                mt: 1,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Empower your institution with cutting-edge tools for innovation
              and researcher management.
            </Typography>
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  name="schoolName"
                  label="School Name"
                  placeholder="e.g. Cambridge International"
                  value={formik.values.schoolName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.schoolName &&
                    Boolean(formik.errors.schoolName)
                  }
                  helperText={
                    formik.touched.schoolName && formik.errors.schoolName
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  name="principalName"
                  label="Principal's Name"
                  placeholder="Full name of the principal"
                  value={formik.values.principalName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.principalName &&
                    Boolean(formik.errors.principalName)
                  }
                  helperText={
                    formik.touched.principalName && formik.errors.principalName
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  select
                  name="affiliationType"
                  label="Affiliated With"
                  value={formik.values.affiliationType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.affiliationType &&
                    Boolean(formik.errors.affiliationType)
                  }
                  helperText={
                    formik.touched.affiliationType &&
                    formik.errors.affiliationType
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                >
                  <MenuItem value="CBSE">CBSE</MenuItem>
                  <MenuItem value="ICSE">ICSE</MenuItem>
                  <MenuItem value="State Board">State Board</MenuItem>
                  <MenuItem value="IB">IB</MenuItem>
                  <MenuItem value="IGCSE">IGCSE</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  name="affiliationNumber"
                  label="Affiliation Number"
                  placeholder="License or Registration ID"
                  value={formik.values.affiliationNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.affiliationNumber &&
                    Boolean(formik.errors.affiliationNumber)
                  }
                  helperText={
                    formik.touched.affiliationNumber &&
                    formik.errors.affiliationNumber
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    p: 4,
                    border: "2px dashed rgba(11, 23, 39, 0.1)",
                    borderRadius: "20px",
                    textAlign: "center",
                    bgcolor: "rgba(11, 23, 39, 0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(209, 160, 84, 0.05)",
                      borderColor: COLORS.ACCENT_TAN,
                    },
                    ...(formik.errors.affiliationCertificate &&
                      formik.touched.affiliationCertificate && {
                        borderColor: "#d32f2f",
                      }),
                  }}
                >
                  {!formik.values.affiliationCertificate ? (
                    <>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        style={{ display: "none" }}
                        id="upload-certificate"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="upload-certificate">
                        <IconButton
                          component="span"
                          sx={{
                            color: COLORS.PRIMARY_NAVY,
                            mb: 1,
                            bgcolor: "rgba(11, 23, 39, 0.05)",
                          }}
                        >
                          <CloudUpload sx={{ fontSize: 44 }} />
                        </IconButton>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: COLORS.PRIMARY_NAVY,
                            mt: 1,
                          }}
                        >
                          Upload Affiliation Certificate
                        </Typography>
                        <Typography
                          sx={{ fontSize: "13px", color: "gray", mt: 0.5 }}
                        >
                          Drag and drop or click to browse (PDF, JPG, PNG)
                        </Typography>
                      </label>
                    </>
                  ) : (
                    <Stack
                      direction="row"
                      spacing={3}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ py: 1 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Badge color="success" variant="dot">
                          <Typography
                            sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY }}
                          >
                            {
                              (formik.values.affiliationCertificate as File)
                                .name
                            }
                          </Typography>
                        </Badge>
                      </Box>
                      <IconButton
                        size="small"
                        sx={{
                          color: "#d32f2f",
                          bgcolor: "rgba(211, 47, 47, 0.05)",
                        }}
                        onClick={() =>
                          formik.setFieldValue("affiliationCertificate", null)
                        }
                      >
                        <Delete />
                      </IconButton>
                    </Stack>
                  )}
                  {formik.touched.affiliationCertificate &&
                    formik.errors.affiliationCertificate && (
                      <Typography
                        variant="caption"
                        color="error"
                        sx={{ mt: 1, display: "block", fontWeight: 600 }}
                      >
                        {formik.errors.affiliationCertificate as string}
                      </Typography>
                    )}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  name="email"
                  label="School Email"
                  placeholder="contact@school.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <MuiTelInput
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  value={formik.values.phone}
                  onChange={(val) => formik.setFieldValue("phone", val)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  defaultCountry="IN"
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  name="website"
                  label="Website"
                  placeholder="www.school.com"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Language />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  name="address"
                  label="Full Address"
                  placeholder="Complete physical address of the institution"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ alignSelf: "flex-start", mt: 1.5 }}
                        >
                          <LocationOn />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
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
                          <Lock />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  label="Confirm Password"
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
                          <Lock />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
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
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>

              <Grid size={{ xs: 12 }} sx={{ mt: 3 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: COLORS.ACCENT_TAN,
                    color: COLORS.BLACK,
                    py: 2,
                    borderRadius: "14px",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    boxShadow: "0px 8px 15px rgba(209, 160, 84, 0.4)",
                    fontFamily: montserrat.style.fontFamily,
                    "&:hover": {
                      bgcolor: "#B88A44",
                      boxShadow: "0px 12px 20px rgba(209, 160, 84, 0.5)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Register Institution
                </Button>
              </Grid>
            </Grid>
          </form>

          <Typography
            textAlign="center"
            sx={{
              fontSize: 15,
              mt: 4,
              fontFamily: montserrat.style.fontFamily,
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight: 500,
            }}
          >
            Already registered?{" "}
            <Button
              sx={{
                color: COLORS.PRIMARY_NAVY,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 15,
                p: 0,
                minWidth: "auto",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Log in instead
            </Button>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default School;
