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
import { addResearchValidationSchema } from "@/utils/validationSchema";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  MenuBook,
  Topic,
  Description,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const AddResearch = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      topic: "",
      abstract: "",
      status: USER_STATUS.ACTIVE,
    },
    validationSchema: addResearchValidationSchema,
    onSubmit: (values) => {
      console.log("Research Data:", values);
      // In a real app, this would be an API call
      alert("Research submitted successfully!");
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ p: 1 }}>
      <Breadcrumb
        title="Add Research"
        data={[
          {
            title: "Dashboard",
            href: "/dashboard/school",
          },
          {
            title: "Research Submissions",
            href: "/dashboard/school/research-submission",
          },
          {
            title: "Add Research",
            href: "/dashboard/school/research-submission/add-research",
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
          Research Information
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="title"
                label="Research Title"
                placeholder="e.g. Impact of AI on Primary Education"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.title && Boolean(formik.errors.title)
                }
                helperText={formik.touched.title && formik.errors.title}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MenuBook sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="topic"
                label="Research Topic"
                placeholder="e.g. AI in Education"
                value={formik.values.topic}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.topic && Boolean(formik.errors.topic)}
                helperText={formik.touched.topic && formik.errors.topic}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Topic sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="abstract"
                label="Research Abstract"
                placeholder="Provide a detailed abstract of the research paper..."
                value={formik.values.abstract}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.abstract && Boolean(formik.errors.abstract)}
                helperText={formik.touched.abstract && formik.errors.abstract}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
                        <Description sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                label="Submission Status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
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
                Submit Research
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

export default AddResearch;
