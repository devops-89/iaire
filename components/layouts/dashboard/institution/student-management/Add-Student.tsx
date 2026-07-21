"use client";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  Autocomplete,
  Box,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography} from "@mui/material";
import React, { useState } from "react";
import InstitutionDashboardLayout from "../Index";
import { GENDER, MEMBER_TYPE } from "@/utils/constant";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { useFormik } from "formik";
import { studentValidationSchema } from "@/utils/validationSchema";
import { COLORS, MEMBER_TYPES } from "@/utils/enum";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { montserrat, roboto } from "@/utils/fonts";
import { useAddStudent } from "@/hooks/school/useStudent";
import { INSTITUTION_ADD_STUDENT_REQUEST } from "@/utils/type";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BeamButton from "@/components/widgets/BeamButton";

const AddStudentComponent = () => {
  const { createLoading, createStudent } = useAddStudent();

  const formik = useFormik({
    initialValues: {
      membershipType: "",
      membershipId: "",
      firstName: "",
      lastName: "",
      dob: null,
      email: "",
      phoneNumber: "",
      gender: "",
      fatherName: "",
      fatherEmail: "",
      fatherPhoneNumber: "",
      fatherProfession: "",
      motherName: "",
      motherPhoneNumber: "",
      motherEmail: "",
      motherProfession: "",
      grade: "",
      countryCode: "",
      password: "",
    },
    validationSchema: studentValidationSchema,
    onSubmit: (values) => {
      const payload = {
        email: values?.email,
        firstName: values?.firstName,
        lastName: values?.lastName,
        phone: values?.phoneNumber,
        // gender: values?.gender,
        // dob: moment(values?.dob).format("YYYY-MM-DD"),
        // grade: values?.grade,
        // countryCode: values?.countryCode,
        // fatherName: values?.fatherName,
        // fatherEmail: values?.fatherEmail,
        // fatherPhone: values?.fatherPhoneNumber,
        // fatherProfession: values?.fatherProfession,
        // motherName: values?.motherName,
        // motherPhone: values?.motherPhoneNumber,
        // motherEmail: values?.motherEmail,
        // motherProfession: values?.motherProfession,
        // password: values?.password,
      };

      createStudent(payload as INSTITUTION_ADD_STUDENT_REQUEST);
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [phone, setPhone] = useState("");

  const [fatherPhoneNumber, setFatherPhoneNumber] = useState("");
  const [motherPhoneNumber, setMotherPhoneNumber] = useState("");
  const handleChangePhoneNumber = (
    id: string,
    value: string,
    countryData: MuiTelInputInfo,
  ) => {
    switch (id) {
      case "phoneNumber":
        setPhone(value);
        break;
      case "fatherPhoneNumber":
        setFatherPhoneNumber(value);
        break;
      case "motherPhoneNumber":
        setMotherPhoneNumber(value);

        break;
      default:
        break;
    }
    const isValidTel = matchIsValidTel(value);
    if (isValidTel) {
      formik.setFieldValue(id, countryData?.nationalNumber);
      formik.setFieldValue("countryCode", countryData?.countryCallingCode);
    } else {
      formik.setFieldError(id, "Please Enter Valid Phone Number");
    }
  };
  return (
    <InstitutionDashboardLayout>
      <Card sx={{ p: 2, mt: 3 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ mb: 2 }}
        >
          <Breadcrumb
            title="Add Student"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Student Management",
                href: "/dashboard/institution/student-management",
              },
              {
                title: "Add Student",
                href: "/dashboard/institution/student-management/add-student",
              },
            ]}
          />
        </Stack>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 600,
                color: COLORS.BLACK,
              }}
            >
              Personal Information
            </Typography>
            <Grid
              size={{
                xs: 12,
                md:
                  formik.values.membershipType === MEMBER_TYPES.EXISTING_MEMBER
                    ? 6
                    : 12,
              }}
            >
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Membership Type"
                    fullWidth
                    sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                    error={
                      formik.touched.membershipType &&
                      Boolean(formik.errors.membershipType)
                    }
                    helperText={
                      formik.touched.membershipType &&
                      formik.errors.membershipType
                    }
                  />
                )}
                options={MEMBER_TYPE}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {
                  formik.setFieldValue("membershipType", value);
                }}
                sx={{ ...TEXTFIELD_STYLE_VALIDATION, width: "100%" }}
                value={formik.values.membershipType}
                onBlur={formik.handleBlur}
              />
            </Grid>
            {formik.values.membershipType === MEMBER_TYPES.EXISTING_MEMBER && (
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Membership ID"
                  sx={TEXTFIELD_STYLE_VALIDATION}
                  id="membershipId"
                  name="membershipId"
                  value={formik.values.membershipId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.membershipId &&
                    Boolean(formik.errors.membershipId)
                  }
                  helperText={
                    formik.touched.membershipId && formik.errors.membershipId
                  }
                />
              </Grid>
            )}
            <Grid size={6}>
              <TextField
                fullWidth
                label="First Name"
                sx={TEXTFIELD_STYLE_VALIDATION}
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label="Last Name"
                sx={TEXTFIELD_STYLE_VALIDATION}
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            {/* <Grid size={6}>
              <TextField
                fullWidth
                label="Grade"
                sx={TEXTFIELD_STYLE_VALIDATION}
                id="grade"
                name="grade"
                value={formik.values.grade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.grade && Boolean(formik.errors.grade)}
                helperText={formik.touched.grade && formik.errors.grade}
              />
            </Grid> */}
            <Grid size={6}>
              <TextField
                fullWidth
                label="Email"
                sx={TEXTFIELD_STYLE_VALIDATION}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid size={6}>
              <MuiTelInput
                label="Phone Number"
                sx={TEXTFIELD_STYLE_VALIDATION}
                id="phoneNumber"
                name="phoneNumber"
                value={phone}
                onChange={(value, info) =>
                  handleChangePhoneNumber("phoneNumber", value, info)
                }
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                defaultCountry="IN"
                fullWidth
              />
            </Grid>
            {/* <Grid size={6}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Gender"
                    sx={TEXTFIELD_STYLE_VALIDATION}
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.gender && Boolean(formik.errors.gender)
                    }
                    helperText={formik.touched.gender && formik.errors.gender}
                  />
                )}
                options={GENDER}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {
                  formik.setFieldValue("gender", value);
                }}
                sx={{ ...TEXTFIELD_STYLE_VALIDATION, width: "100%" }}
                value={formik.values.gender}
                onBlur={formik.handleBlur}
              />
            </Grid> */}
            {/* <Grid size={6}>
              <TextField
                label="Password"
                fullWidth
                id="password"
                onChange={formik.handleChange}
                type={showPassword ? "text" : "password"}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                          {showPassword ? (
                            <VisibilityOff
                              sx={{ color: COLORS.PRIMARY_NAVY }}
                            />
                          ) : (
                            <Visibility sx={{ color: COLORS.PRIMARY_NAVY }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid> */}
            {/* <Grid size={12}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 600,
                  color: COLORS.BLACK,
                }}
              >
                Father's Information
              </Typography>
            </Grid>
            <Grid size={6}>
              <TextField
                id="fatherName"
                label="Father's Name"
                sx={TEXTFIELD_STYLE_VALIDATION}
                fullWidth
                value={formik.values.fatherName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fatherName && Boolean(formik.errors.fatherName)
                }
                helperText={
                  formik.touched.fatherName && formik.errors.fatherName
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="fatherEmail"
                label="Father's Email ID"
                sx={TEXTFIELD_STYLE_VALIDATION}
                fullWidth
                value={formik.values.fatherEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fatherEmail &&
                  Boolean(formik.errors.fatherEmail)
                }
                helperText={
                  formik.touched.fatherEmail && formik.errors.fatherEmail
                }
              />
            </Grid>
            <Grid size={6}>
              <MuiTelInput
                sx={TEXTFIELD_STYLE_VALIDATION}
                id={"fatherPhoneNumber"}
                name={"fatherPhoneNumber"}
                value={fatherPhoneNumber}
                onChange={(value, info) => {
                  handleChangePhoneNumber("fatherPhoneNumber", value, info);
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fatherPhoneNumber &&
                  Boolean(formik.errors.fatherPhoneNumber)
                }
                helperText={
                  formik.touched.fatherPhoneNumber &&
                  formik.errors.fatherPhoneNumber
                }
                fullWidth
                defaultCountry="IN"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="fatherProfession"
                label="Father's Profession"
                sx={TEXTFIELD_STYLE_VALIDATION}
                fullWidth
                value={formik.values.fatherProfession}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fatherProfession &&
                  Boolean(formik.errors.fatherProfession)
                }
                helperText={
                  formik.touched.fatherProfession &&
                  formik.errors.fatherProfession
                }
              />
            </Grid> */}
            {/* <Grid size={12}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 600,
                  color: COLORS.BLACK,
                }}
              >
                Mother's Information
              </Typography>
            </Grid>
            <Grid size={6}>
              <TextField
                id="motherName"
                label="Mother's Name"
                sx={TEXTFIELD_STYLE_VALIDATION}
                fullWidth
                value={formik.values.motherName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.motherName && Boolean(formik.errors.motherName)
                }
                helperText={
                  formik.touched.motherName && formik.errors.motherName
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="motherEmail"
                label="Mother's Email ID"
                sx={TEXTFIELD_STYLE_VALIDATION}
                fullWidth
                value={formik.values.motherEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.motherEmail &&
                  Boolean(formik.errors.motherEmail)
                }
                helperText={
                  formik.touched.motherEmail && formik.errors.motherEmail
                }
              />
            </Grid>
            <Grid size={6}>
              <MuiTelInput
                sx={TEXTFIELD_STYLE_VALIDATION}
                id={"motherPhoneNumber"}
                name={"motherPhoneNumber"}
                value={motherPhoneNumber}
                onChange={(value, info) => {
                  handleChangePhoneNumber("motherPhoneNumber", value, info);
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.motherPhoneNumber &&
                  Boolean(formik.errors.motherPhoneNumber)
                }
                helperText={
                  formik.touched.motherPhoneNumber &&
                  formik.errors.motherPhoneNumber
                }
                fullWidth
                defaultCountry="IN"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="motherProfession"
                label="Mother's Profession"
                sx={TEXTFIELD_STYLE_VALIDATION}
                fullWidth
                value={formik.values.motherProfession}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.motherProfession &&
                  Boolean(formik.errors.motherProfession)
                }
                helperText={
                  formik.touched.motherProfession &&
                  formik.errors.motherProfession
                }
              />
            </Grid> */}
            <Grid size={12}>
              <BeamButton
                sx={{
                  width: 300,
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  borderRadius: "10px",
                  p: 1,
                }}
                type="submit"
              >
                {createLoading ? (
                  <CircularProgress
                    sx={{
                      fontSize: 10,
                      width: 20,
                      height: 20,
                      color: COLORS.WHITE,
                    }}
                  />
                ) : (
                  "Submit"
                )}
              </BeamButton>
            </Grid>
          </Grid>
        </form>
      </Card>
    </InstitutionDashboardLayout>
  );
};

export default AddStudentComponent;
