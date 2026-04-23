"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Container,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { institutionSignupValidationSchema } from "@/utils/validationSchema";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { MEMBERSHIP_LEVEL } from "@/utils/type";
import {
  Business,
  Person,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";
import { MuiTelInput } from "mui-tel-input";
import { montserrat, roboto } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";
import { COUNTRIES, US_STATES } from "@/utils/constant";
import IndiaForm from "./India-Form";
import UsForm from "./us-form";
import SignupStepper from "../SignupStepper";
import { FormTextField, PasswordTextField } from "./FormComponents";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const Institution = () => {
  const router = useRouter();
  const { setInstitutionData, institutionData } = useSignup();

  const formik = useFormik({
    initialValues: {
      institutionName: institutionData?.institutionName || "",
      principalName: institutionData?.principalName || "",
      affiliationType: institutionData?.affiliationType || "",
      affiliationNumber: institutionData?.affiliationNumber || "",
      affiliationCertificate: institutionData?.affiliationCertificate || null,
      email: institutionData?.email || "",
      phone: institutionData?.phone || "",
      website: institutionData?.website || "",
      addressLine1: institutionData?.addressLine1 || "",
      addressLine2: institutionData?.addressLine2 || "",
      city: institutionData?.city || "",
      state: institutionData?.state || "",
      postalCode: institutionData?.postalCode || "",
      password: institutionData?.password || "",
      confirmPassword: institutionData?.confirmPassword || "",
      country: institutionData?.country || "",
      isd: institutionData?.isd || "",
    },
    enableReinitialize: true,
    validationSchema: institutionSignupValidationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      setInstitutionData({
        ...values,
        role: USER_ROLES.INSTITUTION,
        membershipLevel: MEMBERSHIP_LEVEL.INSTITUTIONAL,
        certifiedEducators: 0,
        publications: 0,
        hasSelectionBoardApproval: false,
      });
      router.push("/signup/review");
    },
  });

  // console.error("errors", formik.errors);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      formik.setFieldValue("affiliationCertificate", event.target.files[0]);
    }
  };

  const renderCountrySpecificFields = () => {
    const country = formik.values.country;
    if (country === "IN" || country === "AE") {
      return <IndiaForm formik={formik} handleFileChange={handleFileChange} />;
    } else if (country === "US") {
      return <UsForm formik={formik} />;
    }
    return null;
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 8,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.05) 0%, rgba(209, 160, 84, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            py: 5,
            px: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 28, md: 34 },
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Institution Registration
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 16,
                color: "rgba(0, 0, 0, 0.5)",
                mt: 1,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Empower your institution with cutting-edge tools for innovation
              and researcher management.
            </Typography>
          </Box>
          <SignupStepper activeStep={0} />

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              {/* Identity Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <FormTextField
                  name="institutionName"
                  label="Institution Name"
                  placeholder="e.g. Cambridge International"
                  formik={formik}
                  icon={<Business />}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormTextField
                  name="principalName"
                  label="Principal's Name/ Director's Name"
                  placeholder="Full name of the principal/Director"
                  formik={formik}
                  icon={<Person />}
                />
              </Grid>

              <Grid
                size={{ xs: 12, md: formik.values.country === "US" ? 6 : 12 }}
              >
                <Autocomplete
                  options={COUNTRIES}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  value={
                    COUNTRIES.find((c) => c.code === formik.values.country) ||
                    null
                  }
                  onChange={(_, value) => {
                    formik.setFieldValue("country", value ? value.code : "");
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;
                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                      </Box>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                      sx={{
                        ...TEXTFIELD_STYLE_VALIDATION,
                        mb: formik.values.country ? 0 : 2,
                      }}
                    />
                  )}
                />
              </Grid>
              {formik.values.country === "US" && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Autocomplete
                    options={US_STATES}
                    value={formik.values.state || null}
                    onChange={(_, newValue) =>
                      formik.setFieldValue("state", newValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="State"
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={formik.touched.state && formik.errors.state}
                        sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                      />
                    )}
                  />
                </Grid>
              )}
              {renderCountrySpecificFields()}
              {/* Contact Information */}
              <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                  name="email"
                  label="Institution Email"
                  placeholder="contact@institution.com"
                  formik={formik}
                  icon={<Email />}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <MuiTelInput
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  value={formik.values.phone}
                  onChange={(val) => formik.setFieldValue("phone", val)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  defaultCountry={(formik.values.country as any) || "US"}
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                  name="website"
                  label="Website"
                  placeholder="www.institution.com"
                  formik={formik}
                  icon={<Language />}
                />
              </Grid>
              {/* Address Section */}
              <Grid size={12}>
                <FormTextField
                  name="addressLine1"
                  label="Address Line 1"
                  placeholder="Street address, P.O. box, company name"
                  formik={formik}
                  icon={<LocationOn />}
                />
              </Grid>
              <Grid size={12}>
                <FormTextField
                  name="addressLine2"
                  label="Address Line 2"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  formik={formik}
                />
              </Grid>
              <Grid container spacing={2} size={12}>
                <Grid
                  size={{ xs: 12, md: formik.values.country === "US" ? 6 : 4 }}
                >
                  <FormTextField name="city" label="City" formik={formik} />
                </Grid>
                {formik.values.country !== "US" && (
                  <Grid size={{ xs: 12, md: 4 }}>
                    <FormTextField
                      name="state"
                      label="State/Province"
                      formik={formik}
                    />
                  </Grid>
                )}
                <Grid
                  size={{ xs: 12, md: formik.values.country === "US" ? 6 : 4 }}
                >
                  <FormTextField
                    name="postalCode"
                    label={
                      formik.values.country === "US"
                        ? "Zip Code"
                        : "Postal Code"
                    }
                    formik={formik}
                  />
                </Grid>
              </Grid>
              {/* Security Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <PasswordTextField
                  name="password"
                  label="Password"
                  formik={formik}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <PasswordTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  formik={formik}
                />
              </Grid>
              {/* Footer / Submit */}
              <Grid size={12} sx={{ mt: 3 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: COLORS.ACCENT_TAN,
                    color: COLORS.BLACK,
                    py: 2,
                    borderRadius: "14px",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    boxShadow: "0px 8px 15px rgba(209, 160, 84, 0.4)",
                    fontFamily: montserrat.style.fontFamily,
                    "&:hover": {
                      bgcolor: "#B88A44",
                      boxShadow: "0px 12px 20px rgba(209, 160, 84, 0.5)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Register Institution
                </Button>
              </Grid>
            </Grid>
          </form>

          <Typography
            textAlign="center"
            sx={{
              fontSize: 15,
              mt: 4,
              fontFamily: montserrat.style.fontFamily,
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight: 500,
            }}
          >
            Already registered?{" "}
            <Button
              sx={{
                color: COLORS.PRIMARY_NAVY,
                fontWeight: 700,
                textTransform: "none",
                fontSize: 15,
                p: 0,
                minWidth: "auto",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Log in instead
            </Button>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default Institution;
