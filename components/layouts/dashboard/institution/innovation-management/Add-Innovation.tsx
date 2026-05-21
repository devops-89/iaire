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
  Stack,
  Autocomplete,
  IconButton,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addInstitutionInnovationValidationSchema } from "@/utils/validationSchema";
import { CATEGORY, COLORS, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat, newBlack_light } from "@/utils/fonts";
import {
  Title,
  Category,
  Description,
  CheckCircle,
  CloudUpload,
  Delete,
  InsertDriveFile,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { useGetTeam } from "@/hooks/school/useTeam";

const AddInnovation = () => {
  const [dragActive, setDragActive] = useState(false);

  const { teamData, fetchData, loading } = useGetTeam()

  useEffect(() => {
    fetchData({ type: CATEGORY.INNOVATION })
  }, [])

  const formik = useFormik({
    initialValues: {
      title: "",
      team: null as any,
      problemDescription: "",
      solutionDescription: "",
      file: null as File | null,
    },
    validationSchema: addInstitutionInnovationValidationSchema,
    onSubmit: (values) => {
      console.log("Institution Innovation Data:", values);
      alert("Innovation submitted successfully!");
      formik.resetForm();
    },
  });

  console.log("first", teamData)


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
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                label="Innovation Title*"
                fullWidth
                variant="outlined"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
            <Grid size={6}>
              <Autocomplete
                value={formik.values.team}
                onChange={(event, newValue) => {
                  formik.setFieldValue("team", newValue);
                }}
                onBlur={() => formik.setFieldTouched("team", true)}
                options={teamData?.data || []}
                getOptionLabel={(option) => option.title || ""}
                renderOption={(props, option) => (
                  <Box {...props} component={"li"}>
                    <Typography sx={{ fontSize: 14, fontFamily: newBlack_light.style.fontFamily, textTransform: "capitalize" }}>{option.title}</Typography>
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Team*"
                    error={formik.touched.team && Boolean(formik.errors.team)}
                    helperText={formik.touched.team && typeof formik.errors.team === "string" ? formik.errors.team : undefined}
                  />
                )}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Problem Description*"
                multiline
                rows={4}
                name="problemDescription"
                value={formik.values.problemDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.problemDescription && Boolean(formik.errors.problemDescription)}
                helperText={formik.touched.problemDescription && formik.errors.problemDescription}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Solution Description*"
                multiline
                rows={4}
                name="solutionDescription"
                value={formik.values.solutionDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.solutionDescription && Boolean(formik.errors.solutionDescription)}
                helperText={formik.touched.solutionDescription && formik.errors.solutionDescription}
              />
            </Grid>
            <Grid size={12}>
              <Box
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setDragActive(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragActive(false);
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    formik.setFieldValue("file", e.dataTransfer.files[0]);
                  }
                }}
                sx={{
                  p: 4,
                  border: "2px dashed",
                  borderColor: formik.touched.file && formik.errors.file
                    ? "#d32f2f"
                    : (dragActive ? COLORS.PRIMARY_NAVY : "rgba(1, 90, 80, 0.2)"),
                  borderRadius: "16px",
                  textAlign: "center",
                  bgcolor: dragActive ? "rgba(1, 90, 80, 0.05)" : "rgba(1, 90, 80, 0.01)",
                  boxShadow: dragActive ? "0 8px 24px rgba(1, 90, 80, 0.08)" : "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "rgba(1, 90, 80, 0.03)",
                    borderColor: formik.touched.file && formik.errors.file ? "#d32f2f" : COLORS.PRIMARY_NAVY,
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(1, 90, 80, 0.05)",
                  },
                }}
              >
                <input
                  type="file"
                  id="template-upload"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      formik.setFieldValue("file", e.target.files[0]);
                    }
                  }}
                />
                {!formik.values.file ? (
                  <label htmlFor="template-upload" style={{ cursor: "pointer", display: "block" }}>
                    <Box
                      sx={{
                        mx: "auto",
                        mb: 2,
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: "rgba(1, 90, 80, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: COLORS.PRIMARY_NAVY,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CloudUpload sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        fontFamily: roboto.style.fontFamily,
                        color: COLORS.PRIMARY_NAVY,
                        mb: 0.5,
                      }}
                    >
                      Drag & Drop Template or Browse
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontFamily: newBlack_light.style.fontFamily,
                        color: "text.secondary",
                      }}
                    >
                      Supports PDF, DOCX, PPTX, or ZIP (Max 10MB)
                    </Typography>
                  </label>
                ) : (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: "rgba(1, 90, 80, 0.04)",
                      border: "1px solid rgba(1, 90, 80, 0.1)",
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "8px",
                          bgcolor: "rgba(1, 90, 80, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: COLORS.PRIMARY_NAVY,
                        }}
                      >
                        <InsertDriveFile />
                      </Box>
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            fontFamily: roboto.style.fontFamily,
                            color: COLORS.PRIMARY_NAVY,
                            maxWidth: "280px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {formik.values.file.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontFamily: newBlack_light.style.fontFamily,
                            color: "text.secondary",
                          }}
                        >
                          {(formik.values.file.size / (1024 * 1024)).toFixed(2)} MB
                        </Typography>
                      </Box>
                    </Stack>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        formik.setFieldValue("file", null);
                      }}
                      sx={{
                        color: "#EF4444",
                        bgcolor: "rgba(239, 68, 68, 0.08)",
                        "&:hover": {
                          bgcolor: "rgba(239, 68, 68, 0.15)",
                        },
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Stack>
                )}
              </Box>
              {formik.touched.file && formik.errors.file && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ mt: 1, display: "block", fontWeight: 600, textAlign: "left" }}
                >
                  {formik.errors.file as string}
                </Typography>
              )}
            </Grid>
            <Grid size={12}>
              <Button type="submit" variant="contained" disabled={loading} sx={{ backgroundColor: COLORS.PRIMARY_NAVY, fontFamily: newBlack_light.style.fontFamily, }}>
                {loading ? <CircularProgress sx={{ color: COLORS.WHITE, height: 25, width: 25 }} /> : "Add Innovation"}
              </Button>
            </Grid>

          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default AddInnovation;
