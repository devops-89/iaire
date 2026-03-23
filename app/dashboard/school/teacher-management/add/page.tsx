"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Person,
  Email,
  Work,
  ArrowBack,
  Save,
  VpnKey,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const teacherSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  department: Yup.string().required("Department is required"),
  designation: Yup.string().required("Designation is required"),
  employeeId: Yup.string().required("Employee ID is required"),
});

const AddTeacherPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      designation: "",
      employeeId: "",
    },
    validationSchema: teacherSchema,
    onSubmit: (values) => {
      console.log("Teacher added:", values);
      alert("Teacher successfully added! An activation link has been sent to their email.");
      router.push("/dashboard/school/teacher-management");
    },
  });

  return (
    <SchoolDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton 
            onClick={() => router.back()}
            sx={{ 
                bgcolor: "rgba(11, 23, 39, 0.05)",
                color: COLORS.PRIMARY_NAVY,
                "&:hover": { bgcolor: "rgba(11, 23, 39, 0.1)" }
            }}
          >
            <ArrowBack />
          </IconButton>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                color: COLORS.PRIMARY_NAVY,
              }}
            >
              Add New Teacher
            </Typography>
            <Typography
                sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "rgba(0,0,0,0.6)",
                }}
            >
                Register a new educator to your institution's portal.
            </Typography>
          </Box>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} justifyContent="center">
            <Grid size={{ xs: 12, md: 10, lg: 8 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "24px",
                  border: "1px solid #f0f0f0",
                  backgroundColor: COLORS.WHITE,
                }}
              >
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="First Name"
                      fullWidth
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                      fullWidth
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ color: "rgba(0,0,0,0.4)" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                      sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Email Address"
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
                              <Email sx={{ color: "rgba(0,0,0,0.4)" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                      sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Department"
                      fullWidth
                      select
                      name="department"
                      value={formik.values.department}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.department && Boolean(formik.errors.department)}
                      helperText={formik.touched.department && formik.errors.department}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <Work sx={{ color: "rgba(0,0,0,0.4)" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                      sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                    >
                      <MenuItem value="Science">Science</MenuItem>
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Engineering">Engineering</MenuItem>
                      <MenuItem value="Mathematics">Mathematics</MenuItem>
                      <MenuItem value="Arts">Arts</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Designation"
                      fullWidth
                      name="designation"
                      value={formik.values.designation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.designation && Boolean(formik.errors.designation)}
                      helperText={formik.touched.designation && formik.errors.designation}
                      sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Employee ID / Payroll ID"
                      fullWidth
                      name="employeeId"
                      value={formik.values.employeeId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.employeeId && Boolean(formik.errors.employeeId)}
                      helperText={formik.touched.employeeId && formik.errors.employeeId}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <VpnKey sx={{ color: "rgba(0,0,0,0.4)" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                      sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 5, display: "flex", gap: 2 }}>
                    <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    type="submit"
                    startIcon={<Save />}
                    sx={{
                        bgcolor: COLORS.PRIMARY_NAVY,
                        color: COLORS.WHITE,
                        py: 2,
                        borderRadius: "12px",
                        fontSize: "1rem",
                        fontWeight: 700,
                        textTransform: "none",
                        fontFamily: montserrat.style.fontFamily,
                        "&:hover": {
                            bgcolor: "#1a2c4e",
                            transform: "translateY(-2px)",
                        },
                    }}
                    >
                    Save Teacher
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        onClick={() => router.back()}
                        sx={{
                            borderColor: "rgba(0,0,0,0.1)",
                            color: COLORS.PRIMARY_NAVY,
                            py: 2,
                            borderRadius: "12px",
                            fontSize: "1rem",
                            fontWeight: 700,
                            textTransform: "none",
                            fontFamily: montserrat.style.fontFamily,
                            "&:hover": {
                                borderColor: COLORS.PRIMARY_NAVY,
                                bgcolor: "rgba(0,0,0,0.02)",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default AddTeacherPage;
