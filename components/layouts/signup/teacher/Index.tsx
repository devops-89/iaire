"use client";
import { BOARDS, SCHOOLS } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { teacherSignupValidationSchema } from "@/utils/validationSchema";
import { useSignup } from "@/store/useSignup";
import { TeacherInfo } from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
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

const TeacherSignup = () => {
  const router = useRouter();
  const { setTeacherData } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik<TeacherInfo>({
    initialValues: {
      board: "",
      school: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: USER_ROLES.TEACHER,
    },
    validationSchema: teacherSignupValidationSchema,
    onSubmit: (values) => {
      console.log("Teacher Signup Data:", values);
      setTeacherData(values);
      router.push("/signup/verify");
    },
  });

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
          Teacher Registration
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
          Join the IAIRE network to empower your students and manage innovations.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                select
                name="board"
                label="Select Board"
                value={formik.values.board}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue("school", ""); // Reset school when board changes
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.board && Boolean(formik.errors.board)}
                helperText={formik.touched.board && formik.errors.board}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              >
                {BOARDS.map((board) => (
                  <MenuItem key={board} value={board}>
                    {board}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                select
                disabled={!formik.values.board}
                name="school"
                label="Select School"
                value={formik.values.school}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.school && Boolean(formik.errors.school)}
                helperText={
                  formik.touched.school
                    ? formik.errors.school
                    : !formik.values.board
                    ? "Please select a board first"
                    : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              >
                {SCHOOLS.map((school) => (
                  <MenuItem key={school} value={school}>
                    {school}
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
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
                error={formik.touched.password && Boolean(formik.errors.password)}
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
                  formik.touched.confirmPassword && formik.errors.confirmPassword
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

export default TeacherSignup;

