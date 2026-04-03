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
import { addInnovationValidationSchema } from "@/utils/validationSchema";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  Title,
  Category,
  Description,
  CheckCircle,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const AddInnovation = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      status: USER_STATUS.ACTIVE,
    },
    validationSchema: addInnovationValidationSchema,
    onSubmit: (values) => {
      console.log("Innovation Data:", values);
      // In a real app, this would be an API call
      alert("Innovation submitted successfully!");
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ p: 1 }}>
      <Breadcrumb
        title="Add Innovation"
        data={[
          {
            title: "Dashboard",
            href: "/dashboard/school",
          },
          {
            title: "Innovation Submissions",
            href: "/dashboard/school/innovation-submission",
          },
          {
            title: "Add Innovation",
            href: "/dashboard/school/innovation-submission/add-innovation",
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
          Innovation Information
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="title"
                label="Innovation Title"
                placeholder="e.g. Smart Water Recycling"
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
                        <Title sx={{ color: "rgba(0,0,0,0.4)" }} />
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
                name="category"
                label="Category"
                placeholder="e.g. Sustainability"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
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

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="description"
                label="Innovation Description"
                placeholder="Provide a detailed overview of the innovation..."
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
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
                Submit Innovation
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

export default AddInnovation;
