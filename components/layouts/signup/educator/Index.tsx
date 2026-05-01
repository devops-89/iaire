"use client";
import { BOARDS, INSTITUTIONS } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { educatorSignupValidationSchema } from "@/utils/validationSchema";
import { useSignup } from "@/store/useSignup";
import { EducatorInfo } from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SignupLayout from "../Index";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";

const EducatorSignup = () => {
  const router = useRouter();
  const { setEducatorData } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { countryData } = useGetCountries();

  const formik = useFormik<EducatorInfo>({
    initialValues: {
      avatar: null,
      board: "",
      institution: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: USER_ROLES.EDUCATOR,
      country: { name: "", code: "", id: 0 },
    },
    validationSchema: educatorSignupValidationSchema,
    onSubmit: (values) => {
      console.log("Educator Signup Data:", values);
      setEducatorData(values);
      // router.push("/signup/verify");
    },
  });

  const { boardData, boardLoading } = useBoardByCountry(formik.values.country);

  const countryChangeHandler = (_: any, newValue: any) => {
    if (newValue) {
      formik.setFieldValue("country", newValue);
    }
  };

  console.log("board data", boardData);

  console.log("formik", formik.values.country);

  return (
    <SignupLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 32,
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            mb: 1,
            textAlign: "center",
          }}
        >
          Mentor Registration
        </Typography>
        <Typography
          sx={{
            fontFamily: montserrat.style.fontFamily,
            fontSize: 16,
            color: "rgba(0,0,0,0.6)",
            mb: 4,
            textAlign: "center",
          }}
        >
          Join the IAIRE network to empower your students and manage
          innovations.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 12 }}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField {...params} label="Select Country" />
                )}
                options={countryData}
                getOptionLabel={(option) => option.name}
                onChange={countryChangeHandler}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              {formik.values?.country?.code === "IN" ? (
                <Autocomplete
                  renderInput={(params) => (
                    <TextField {...params} label="Select Board" />
                  )}
                  options={boardData}
                  getOptionLabel={(option) => option.name}
                  onChange={(_: any, newValue: any) => {
                    if (newValue) {
                      formik.setFieldValue("board", newValue);
                    }
                  }}
                />
              ) : formik.values?.country?.code === "US" ? (
                <Autocomplete
                  renderInput={(params) => (
                    <TextField {...params} label="Select ISD Code" />
                  )}
                  options={boardData}
                  getOptionLabel={(option) => option}
                  onChange={(_: any, newValue: any) => {
                    if (newValue) {
                      formik.setFieldValue("isdCode", newValue);
                    }
                  }}
                />
              ) : (
                <Autocomplete
                  renderInput={(params) => (
                    <TextField {...params} label="Select Board" />
                  )}
                  options={boardData}
                  getOptionLabel={(option) => option.name}
                  onChange={(_: any, newValue: any) => {
                    if (newValue) {
                      formik.setFieldValue("board", newValue);
                    }
                  }}
                />
              )}
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <TextField
                fullWidth
                select
                disabled={!formik.values.board}
                name="institution"
                label="Select Institution"
                value={formik.values.institution}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.institution &&
                  Boolean(formik.errors.institution)
                }
                helperText={
                  formik.touched.institution
                    ? formik.errors.institution
                    : !formik.values.board
                      ? "Please select a board first"
                      : ""
                }
                // sx={{
                //   "& .MuiOutlinedInput-root": {
                //     borderRadius: "12px",
                //   },
                // }}
              >
                {INSTITUTIONS.map((institution) => (
                  <MenuItem key={institution} value={institution}>
                    {institution}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                placeholder="John"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                placeholder="email@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <MuiTelInput
                fullWidth
                name="phone"
                label="Phone Number"
                value={formik.values.phone}
                onChange={(newValue) => formik.setFieldValue("phone", newValue)}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                defaultCountry="IN"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                label="Password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                slotProps={{
                  input: {
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="••••••••"
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: COLORS.ACCENT_TAN,
                  color: COLORS.BLACK,
                  py: 1.5,
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: 16,
                  fontFamily: montserrat.style.fontFamily,
                  textTransform: "none",
                  boxShadow: "0px 8px 20px rgba(209, 160, 84, 0.3)",
                  "&:hover": {
                    bgcolor: "#B88A40",
                    boxShadow: "0px 10px 25px rgba(209, 160, 84, 0.4)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </SignupLayout>
  );
};

export default EducatorSignup;
