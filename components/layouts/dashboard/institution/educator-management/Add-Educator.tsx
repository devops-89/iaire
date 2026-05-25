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
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { addEducatorValidationSchema } from "@/utils/validationSchema";
import { COLORS, MEMBER_TYPES, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  Person,
  Email,
  Phone,
  Subject,
  CheckCircle,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import {
  CATEGORY_TYPES,
  COUNTRIES,
  GENDER,
  MEMBER_TYPE,
  PAYMENT_ROLE,
} from "@/utils/constant";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { useSignup } from "@/store/useSignup";
import { useTeacherAddBySchool } from "@/hooks/school/useTeacherAdd";
import useSnackbar from "@/store/useSnackbar";
import { useRouter } from "next/navigation";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import PlanCard from "@/components/widgets/PlanCard";

const AddEducatorcomponent = () => {
  const router = useRouter();
  const { institutionData } = useSignup();
  const { setSnackbar } = useSnackbar();
  const { loading, addTeacher } = useTeacherAddBySchool();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      experience: "",
      memberType: "",
      category: "",
      memberId: "",
      gender: "",
      experienceMonth: "",
      experienceYear: "",
      primarySubjects: [],
      password: "",
      whoWillPay: "",
    },
    validationSchema: addEducatorValidationSchema,
    onSubmit: (values) => {
      const countryCode = COUNTRIES.find(
        (item) => item?.code === institutionData?.country?.code,
      );

      const rawData = {
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        phoneNumber: values?.phone,
        countryCode: countryCode?.phone,
        primarySubjects: values?.primarySubjects,
        experienceYears: values?.experienceYear,
        category: values?.category,
        memberShipCode: values?.memberId,
        gender: values?.gender,
        password: values?.password,
        isSchoolPay:
          values?.whoWillPay === USER_ROLES.INSTITUTION ? true : false,
      };

      const data = Object.fromEntries(
        Object.entries(rawData).filter(
          ([_, v]) =>
            v !== null &&
            v !== undefined &&
            v !== "" &&
            !(Array.isArray(v) && v.length === 0),
        ),
      ) as any;

      addTeacher({ data, planId: planData?.[0]?.id });
      // console.log("data => ", data);
    },
  });
  const { planData, planLoading } = useGetPlans({
    role:
      formik.values.whoWillPay === USER_ROLES.INSTITUTION
        ? USER_ROLES.EDUCATOR_ADMIN
        : "",
  });

  const handleChangeWhoWillPay = (
    e: React.SyntheticEvent,
    newValue: { label: USER_ROLES } | null,
  ) => {
    formik.setFieldValue("whoWillPay", newValue?.label || "");
  };

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
            <Grid size={12}>
              <Autocomplete
                value={
                  PAYMENT_ROLE.find(
                    (role) => role.label === formik.values.whoWillPay,
                  ) || null
                }
                options={PAYMENT_ROLE}
                getOptionLabel={(option) => option?.label}
                onChange={handleChangeWhoWillPay}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Who will Pay for the Membership ?"
                    error={
                      formik.touched.whoWillPay &&
                      Boolean(formik.errors.whoWillPay)
                    }
                    helperText={
                      formik.touched.whoWillPay &&
                      (formik.errors.whoWillPay as string)
                    }
                    sx={TEXTFIELD_STYLE_VALIDATION}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                placeholder="e.g. Dr. Rajesh Kumar"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                sx={TEXTFIELD_STYLE_VALIDATION}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                placeholder="e.g. Dr. Rajesh Kumar"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                value={phone}
                onChange={handlePhoneChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                defaultCountry="IN"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* <TextField
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
              /> */}
              <Autocomplete
                multiple
                freeSolo
                options={[]}
                value={formik.values.primarySubjects}
                onChange={(e, newValue) => {
                  formik.setFieldValue("primarySubjects", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Primary Subjects"
                    placeholder="Type a subject and press Enter"
                    error={
                      formik.touched.primarySubjects &&
                      Boolean(formik.errors.primarySubjects)
                    }
                    helperText={
                      formik.touched.primarySubjects &&
                      (formik.errors.primarySubjects as string)
                    }
                  />
                )}
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

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="experienceYear"
                label="Experience (in Years)"
                placeholder="e.g. 5"
                value={formik.values.experienceYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.experienceYear &&
                  Boolean(formik.errors.experienceYear)
                }
                helperText={
                  formik.touched.experienceYear && formik.errors.experienceYear
                }
                sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                type="number"
              />
            </Grid>
            {/* <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="experienceMonth"
                label="Experience (in months)"
                placeholder="e.g. 5"
                value={formik.values.experienceMonth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.experienceMonth &&
                  Boolean(formik.errors.experienceMonth)
                }
                helperText={
                  formik.touched.experienceMonth &&
                  formik.errors.experienceMonth
                }
                sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                type="number"
              />
            </Grid> */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
              />
            </Grid>

            {planLoading && (
              <Grid
                size={12}
                sx={{ display: "flex", justifyContent: "center", my: 2 }}
              >
                <CircularProgress sx={{ color: COLORS.PRIMARY_NAVY }} />
              </Grid>
            )}

            {!planLoading &&
              planData.map((val, i) => (
                <Grid size={12} key={i}>
                  <PlanCard
                    name={val.name}
                    billingCycle={val.billingCycle}
                    price={val.price}
                    limits={val.limits}
                    currency={val.currency}
                    id={val.id}
                  />
                </Grid>
              ))}

            <Grid size={{ xs: 12 }} sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#1a2a3a",
                  },
                }}
              >
                {loading ? "Adding..." : "Add Educator"}
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
