import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { addTeacherValidationSchema } from "@/utils/validationSchema";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  Person,
  Email,
  Phone,
  Subject,
  CheckCircle,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const AddTeacher = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      status: USER_STATUS.ACTIVE,
    },
    validationSchema: addTeacherValidationSchema,
    onSubmit: (values) => {
      console.log("Teacher Data:", values);
      // In a real app, this would be an API call
      alert("Teacher added successfully!");
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ p: 1 }}>
      <Breadcrumb
        title="Add Teacher"
        data={[
          {
            title: "Dashboard",
            href: "/dashboard/school",
          },
          {
            title: "Teacher Management",
            href: "/dashboard/school/teacher-management",
          },
          {
            title: "Add Teacher",
            href: "/dashboard/school/teacher-management/add-teacher",
          },
        ]}
      />

      <Card
        sx={{
          mt: 4,
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.PRIMARY_NAVY,
            mb: 4,
          }}
        >
          Teacher Information
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="fullName"
                label="Full Name"
                placeholder="e.g. Dr. Rajesh Kumar"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="email"
                label="Email Address"
                placeholder="teacher@edu.in"
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
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                placeholder="9876543210"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="subject"
                label="Primary Subject"
                placeholder="e.g. Mathematics"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Subject sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="status"
                label="Account Status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
                // slotProps={{
                //   input: {
                //     startAdornment: (
                //       <InputAdornment position="start">
                //         <CheckCircle sx={{ color: "rgba(0,0,0,0.4)" }} />
                //       </InputAdornment>
                //     ),
                //   },
                // }}
                sx={TEXTFIELD_STYLE_VALIDATION}
              >
                {Object.values(USER_STATUS).map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: COLORS.ACCENT_TAN,
                  color: COLORS.WHITE,
                  py: 1.5,
                  px: 4,
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontFamily: montserrat.style.fontFamily,
                  boxShadow: "0px 4px 10px rgba(209, 160, 84, 0.3)",
                  "&:hover": {
                    bgcolor: "#B88A44",
                    boxShadow: "0px 6px 15px rgba(209, 160, 84, 0.4)",
                  },
                }}
              >
                Add Teacher
              </Button>
              <Button
                onClick={() => formik.resetForm()}
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  fontWeight: 600,
                  fontFamily: montserrat.style.fontFamily,
                  "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default AddTeacher;
