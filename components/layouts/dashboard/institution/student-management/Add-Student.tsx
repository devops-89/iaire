"use client";
import BeamButton from "@/components/widgets/BeamButton";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetAllUser } from "@/hooks/common/useGetAllUser";
import { useAddStudent } from "@/hooks/school/useStudent";
import { MEMBER_TYPE } from "@/utils/constant";
import { COLORS, MEMBER_TYPES } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import {
  INSTITUTION_ADD_STUDENT_REQUEST,
  USER_DETAILS_RESPONSE,
} from "@/utils/type";
import { studentValidationSchema } from "@/utils/validationSchema";
import {
  Autocomplete,
  Card,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { useEffect, useState } from "react";
import InstitutionDashboardLayout from "../Index";

const AddStudentComponent = () => {
  const { createLoading, createStudent } = useAddStudent();
  const { userData, fetchUserData, loading: userLoading } = useGetAllUser();
  const [data, setData] = useState<USER_DETAILS_RESPONSE | null>(null);

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
      const payload: Record<string, any> = {
        email: values?.email,
        firstName: values?.firstName,
        lastName: values?.lastName,
        phone: values?.phoneNumber?.replace("+91", ""),
      };
      if (values?.membershipId) {
        payload.memberShipCode = values?.membershipId;
      }

      createStudent(payload as INSTITUTION_ADD_STUDENT_REQUEST);
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const fetchDetails = () => {
    if (formik.values.membershipId) {
      fetchUserData({
        page: 1,
        limit: 100,
        userId: formik.values.membershipId,
      });
    }
  };

  useEffect(() => {
    if (userData && Array.isArray(userData)) {
      const filterData = userData.find(
        (val: USER_DETAILS_RESPONSE) =>
          val.userId === formik.values.membershipId,
      );
      if (filterData) {
        setData(filterData);
      }
    }
  }, [userData, formik.values.membershipId]);

  useEffect(() => {
    if (data) {
      let finalPhoneVal = "";
      if (data.phone) {
        finalPhoneVal = data.phone;
        if (!finalPhoneVal.startsWith("+")) {
          const cCode = (data.countryCode || "91").replace("+", "");
          finalPhoneVal = `+${cCode}${finalPhoneVal}`;
        }
        setPhone(finalPhoneVal);
      }

      formik.setValues({
        ...formik.values,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        phoneNumber: finalPhoneVal && matchIsValidTel(finalPhoneVal) ? finalPhoneVal : formik.values.phoneNumber,
      });

      if (finalPhoneVal && !matchIsValidTel(finalPhoneVal)) {
        formik.setFieldError("phoneNumber", "Invalid phone number");
      }
    }
  }, [data]);

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
          <Grid container spacing={2} sx={{ mt: 3 }}>
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
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <TextField
                    fullWidth
                    label="Membership ID"
                    id="membershipId"
                    name="membershipId"
                    placeholder="e.g. 123456789"
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
                    sx={TEXTFIELD_STYLE_VALIDATION}
                  />
                  <BeamButton
                    onClick={fetchDetails}
                    disabled={userLoading}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      backgroundColor: COLORS.PRIMARY_NAVY,
                      color: COLORS.WHITE,
                      width: "200px",
                      height: "50px",
                      textTransform: "none",
                      borderRadius: "12px",
                    }}
                  >
                    {userLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Fetch Details"
                    )}
                  </BeamButton>
                </Stack>
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
