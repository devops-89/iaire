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
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { addEducatorValidationSchema } from "@/utils/validationSchema";
import { COLORS, MEMBER_TYPES, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  Person,
  Email,
  Phone,
  Subject,
  CheckCircle,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { CATEGORY_TYPES, GENDER, MEMBER_TYPE } from "@/utils/constant";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";

const AddEducatorcomponent = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      experience: "",
      memberType: "",
      category: "",
      memberId: "",
      gender: "",
    },
    validationSchema: addEducatorValidationSchema,
    onSubmit: (values) => {
      console.log("Educator Data:", values);
      alert("Educator added successfully!");
      formik.resetForm();
    },
  });

  const [phone, setPhone] = useState("");
  const handlePhoneChange = (value: string) => {
    setPhone(value);
    const isValid = matchIsValidTel(value);

    if (isValid) {
      formik.setFieldValue("phone", value);
    } else {
      formik.setFieldError("phone", "Invalid phone number");
    }
  };

  return (
    <Box sx={{ p: 1 }}>
      <Card
        sx={{
          mt: 4,
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.PRIMARY_NAVY,
            mb: 4,
          }}
        >
          Educator Information
        </Typography> */}
        <Breadcrumb
          title="Add Educator"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard/institution",
            },
            {
              title: "Educator Management",
              href: "/dashboard/institution/educator-management",
            },
            {
              title: "Add Educator",
              href: "/dashboard/institution/educator-management/add-educator",
            },
          ]}
        />

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid
              size={{
                xs: 12,
                md:
                  formik.values.memberType === MEMBER_TYPES.EXISTING_MEMBER
                    ? 6
                    : 12,
              }}
            >
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Please Select Member Type"
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION, width: "100%" }}
                    helperText={
                      formik.touched.memberType && formik.errors.memberType
                    }
                    error={
                      formik.touched.memberType &&
                      Boolean(formik.errors.memberType)
                    }
                  />
                )}
                options={MEMBER_TYPE}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {
                  formik.setFieldValue("memberType", value);
                }}
              />
            </Grid>
            {formik.values.memberType === MEMBER_TYPES.EXISTING_MEMBER && (
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  name="memberId"
                  label="Member ID"
                  placeholder="e.g. 123456789"
                  value={formik.values.memberId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.memberId && Boolean(formik.errors.memberId)
                  }
                  helperText={formik.touched.memberId && formik.errors.memberId}
                  sx={TEXTFIELD_STYLE_VALIDATION}
                />
              </Grid>
            )}
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
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                placeholder="educator@edu.in"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <MuiTelInput
                label="Phone Number"
                fullWidth
                sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                value={formik.values.phone}
                onChange={handlePhoneChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                defaultCountry="IN"
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
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="experience"
                label="Experience (in Years)"
                placeholder="e.g. 5"
                value={formik.values.experience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.experience && Boolean(formik.errors.experience)
                }
                helperText={
                  formik.touched.experience && formik.errors.experience
                }
                sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                type="number"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Category"
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION, width: "100%" }}
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                  />
                )}
                options={CATEGORY_TYPES}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {
                  formik.setFieldValue("category", value);
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Gender"
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION, width: "100%" }}
                    helperText={formik.touched.gender && formik.errors.gender}
                    error={
                      formik.touched.gender && Boolean(formik.errors.gender)
                    }
                  />
                )}
                options={GENDER}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {
                  formik.setFieldValue("gender", value);
                }}
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
                Add Educator
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

export default AddEducatorcomponent;
