import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
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
  Lightbulb,
  ReportProblem,
  Groups,
  AttachMoney,
  Dashboard,
  VideoLibrary,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import BeamButton from "@/components/widgets/BeamButton";

const AddStartup = () => {
  const formik = useFormik({
    initialValues: {
      startupName: "",
      sector: "",
      businessIdea: "",
      problemStatement: "",
      teamId: "",
      businessPlan: "",
      cashFlow: "",
      template: null as File | null,
      videoUrl: "",
    },
    validationSchema: addStartupValidationSchema,
    onSubmit: (values) => {
      console.log("Startup Data:", values);
      // In a real app, this would be an API call
      alert("Startup successfully added.");
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
                name="teamId"
                label="Team ID"
                placeholder="e.g. TEAM-1234"
                value={formik.values.teamId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.teamId && Boolean(formik.errors.teamId)}
                helperText={formik.touched.teamId && formik.errors.teamId}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Groups sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="videoUrl"
                label="Video URL"
                placeholder="e.g. https://youtube.com/..."
                value={formik.values.videoUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.videoUrl && Boolean(formik.errors.videoUrl)
                }
                helperText={formik.touched.videoUrl && formik.errors.videoUrl}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <VideoLibrary sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="cashFlow"
                label="Cash Flow"
                placeholder="e.g. Projected revenue details..."
                value={formik.values.cashFlow}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.cashFlow && Boolean(formik.errors.cashFlow)
                }
                helperText={formik.touched.cashFlow && formik.errors.cashFlow}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoney sx={{ color: "rgba(0,0,0,0.4)" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  border: `1px solid ${
                    formik.touched.template && formik.errors.template
                      ? "#d32f2f"
                      : "rgba(0, 0, 0, 0.23)"
                  }`,
                  borderRadius: "14px",
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  bgcolor: "transparent",
                  "&:hover": {
                    borderColor:
                      formik.touched.template && formik.errors.template
                        ? "#d32f2f"
                        : "rgba(0, 0, 0, 0.87)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    overflow: "hidden",
                  }}
                >
                  <Dashboard sx={{ color: "rgba(0,0,0,0.4)" }} />
                  <Typography
                    noWrap
                    sx={{
                      color: formik.values.template
                        ? "black"
                        : "rgba(0,0,0,0.4)",
                      fontSize: 16,
                      fontFamily: roboto.style.fontFamily,
                    }}
                  >
                    {formik.values.template
                      ? (formik.values.template as File).name
                      : "Upload Template"}
                  </Typography>
                </Box>
                <Button
                  component="label"
                  variant="contained"
                  sx={{
                    bgcolor: "rgba(0, 0, 0, 0.04)",
                    color: "black",
                    boxShadow: "none",
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: "120px",
                    borderRadius: "8px",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "none",
                    },
                  }}
                >
                  Choose File
                  <input
                    type="file"
                    hidden
                    onChange={(event: any) => {
                      if (
                        event.currentTarget.files &&
                        event.currentTarget.files[0]
                      ) {
                        formik.setFieldValue(
                          "template",
                          event.currentTarget.files[0],
                        );
                      }
                    }}
                  />
                </Button>
                {/* Floating label simulation */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: -9,
                    left: 10,
                    bgcolor: "white",
                    px: 0.5,
                    fontSize: 12,
                    fontFamily: roboto.style.fontFamily,
                    color:
                      formik.touched.template && formik.errors.template
                        ? "#d32f2f"
                        : "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Template
                </Typography>
              </Box>
              {formik.touched.template && formik.errors.template && (
                <Typography
                  sx={{
                    color: "#d32f2f",
                    fontSize: 12,
                    mt: 0.5,
                    ml: 1.5,
                    fontFamily: roboto.style.fontFamily,
                  }}
                >
                  {formik.errors.template as string}
                </Typography>
              )}
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="businessIdea"
                label="Business Idea"
                placeholder="Briefly describe the business idea..."
                value={formik.values.businessIdea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.businessIdea &&
                  Boolean(formik.errors.businessIdea)
                }
                helperText={
                  formik.touched.businessIdea && formik.errors.businessIdea
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ alignSelf: "flex-start", mt: 1.5 }}
                      >
                        <Lightbulb sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="problemStatement"
                label="Problem Statement"
                placeholder="Describe the problem you are solving..."
                value={formik.values.problemStatement}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.problemStatement &&
                  Boolean(formik.errors.problemStatement)
                }
                helperText={
                  formik.touched.problemStatement &&
                  formik.errors.problemStatement
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ alignSelf: "flex-start", mt: 1.5 }}
                      >
                        <ReportProblem sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                rows={4}
                name="businessPlan"
                label="Business Plan"
                placeholder="Provide a detailed business plan..."
                value={formik.values.businessPlan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.businessPlan &&
                  Boolean(formik.errors.businessPlan)
                }
                helperText={
                  formik.touched.businessPlan && formik.errors.businessPlan
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
              <BeamButton type="submit" variant="contained">
                Submit Startup
              </BeamButton>
              <BeamButton onClick={() => formik.resetForm()} variant="outlined">
                Reset
              </BeamButton>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default AddStartup;
