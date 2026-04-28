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
import { addStartupValidationSchema } from "@/utils/validationSchema";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  RocketLaunch,
  Category,
  Description,
  Person,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const AddStartup = () => {
  const formik = useFormik({
    initialValues: {
      startupName: "",
      sector: "",
      description: "",
      founderName: "",
      status: "Incubated",
    },
    validationSchema: addStartupValidationSchema,
    onSubmit: (values) => {
      console.log("Startup Data:", values);
      // In a real app, this would be an API call
      alert("Startup successfully added and registered for track status.");
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ p: 1 }}>
      <Breadcrumb
        title="Add New Startup"
        data={[
          {
            title: "Dashboard",
            href: "/dashboard/school",
          },
          {
            title: "Startup Management",
            href: "/dashboard/school/startup-management",
          },
          {
            title: "Add Startup",
            href: "/dashboard/school/startup-management/add-startup",
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
          Startup Information
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="startupName"
                label="Startup Name"
                placeholder="e.g. GreenTech Solutions"
                value={formik.values.startupName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.startupName &&
                  Boolean(formik.errors.startupName)
                }
                helperText={
                  formik.touched.startupName && formik.errors.startupName
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <RocketLaunch sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="sector"
                label="Sector/Industry"
                placeholder="e.g. Clean Energy"
                value={formik.values.sector}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.sector && Boolean(formik.errors.sector)}
                helperText={formik.touched.sector && formik.errors.sector}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Category sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="founderName"
                label="Founder Name"
                placeholder="e.g. John Doe"
                value={formik.values.founderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.founderName &&
                  Boolean(formik.errors.founderName)
                }
                helperText={
                  formik.touched.founderName && formik.errors.founderName
                }
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
                select
                name="status"
                label="Incubation Status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
                sx={TEXTFIELD_STYLE_VALIDATION}
              >
                {["Incubated", "Active", "Phase 1"].map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="description"
                label="Startup Description/Idea"
                placeholder="Briefly describe the startup's mission and goals..."
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ alignSelf: "flex-start", mt: 1.5 }}
                      >
                        <Description sx={{ color: "rgba(0,0,0,0.4)" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: COLORS.RED,
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
                Submit Startup
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

export default AddStartup;
