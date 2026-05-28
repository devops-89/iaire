"use client";
import React, { useEffect, useState } from "react";
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
import {
  COUNTRYDATAPROPS,
  InstitutionInfo,
  MEMBERSHIP_LEVEL,
  USER_DETAILS_RESPONSE,
} from "@/utils/type";
import {
  Business,
  Person,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";
import {
  matchIsValidTel,
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputInfo,
  MuiTelInputProps,
} from "mui-tel-input";
import { montserrat, newBlack_medium, roboto } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";
import { COUNTRIES, US_STATES } from "@/utils/constant";
import IndiaForm from "./India-Form";
import UsForm from "./us-form";
import SignupStepper from "../SignupStepper";
import { FormTextField, PasswordTextField } from "./FormComponents";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { CalendarIcon } from "@mui/x-date-pickers";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import Link from "next/link";

const Institution = () => {
  const router = useRouter();
  const { setInstitutionData, institutionData } = useSignup();

  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(
    institutionData?.country || null,
  );

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
      country: institutionData?.country,
      isd: institutionData?.isd || "",
      registrationYear: institutionData?.registrationYear || "",
      contactPersonName: institutionData?.contactPersonName || "",
      contactPersonEmail: institutionData?.contactPersonEmail || "",
      contactPersonPhone: institutionData?.contactPersonPhone || "",
      noOfTeachers: institutionData?.noOfTeachers || "",
      noOfStudents: institutionData?.noOfStudents || "",
    },
    enableReinitialize: true,
    validationSchema: institutionSignupValidationSchema,
    onSubmit: (values) => {
      const filteredValues = Object.fromEntries(
        Object.entries(values).filter(([_, v]) => v !== ""),
      );

      setInstitutionData({
        ...filteredValues,
        role: USER_ROLES.INSTITUTION,
        membershipLevel: MEMBERSHIP_LEVEL.INSTITUTIONAL,
        certifiedEducators: 0,
        publications: 0,
        hasSelectionBoardApproval: false,
        noOfTeachers: Number(filteredValues.noOfTeachers) || 0,
        noOfStudents: Number(filteredValues.noOfStudents) || 0,
      } as InstitutionInfo & USER_DETAILS_RESPONSE);
      router.push("/signup/review");
      // console.log("values", values);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      formik.setFieldValue("affiliationCertificate", event.target.files[0]);
    }
  };

  const countryChangeHandler = (
    e: React.SyntheticEvent,
    newValue: COUNTRYDATAPROPS | null,
  ) => {
    setCountry(newValue);
    if (newValue) {
      formik.setFieldValue("country", newValue);
    }
  };

  const [phone, setPhone] = useState(institutionData?.phone || "");

  const handlePhoneChange = (value: string, countryData: MuiTelInputInfo) => {
    setPhone(value);
    const isValid = matchIsValidTel(value);
    if (isValid) {
      formik.setFieldError("phone", "");
      formik.setFieldValue("phone", countryData?.nationalNumber);
    } else {
      formik.setFieldError("phone", "Please Enter a Valid Phone Number");
    }
  };

  const { countryData } = useGetCountries();
  const { boardData, boardLoading } = useBoardByCountry(country || null);

  const renderCountrySpecificFields = () => {
    if (country?.code === "IN" || country?.code === "AE") {
      return (
        <IndiaForm
          formik={formik}
          handleFileChange={handleFileChange}
          boardData={boardData}
          boardLoading={boardLoading}
        />
      );
    } else if (country?.code === "US") {
      return (
        <UsForm
          formik={formik}
          boardData={boardData}
          boardLoading={boardLoading}
        />
      );
    }
    return null;
  };

  const [contactPersonPhone, setContactPersonPhone] = useState(
    institutionData?.contactPersonPhone || "",
  );

  const handleContactPersonPhone = (value: string) => {
    setContactPersonPhone(value);
    const isValid = matchIsValidTel(value);
    if (isValid) {
      formik.setFieldError("contactPersonPhone", "");
      formik.setFieldValue("contactPersonPhone", value);
    } else {
      formik.setFieldError(
        "contactPersonPhone",
        "Please Enter a Valid Phone Number",
      );
    }
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

              <Grid size={{ xs: 12, md: country?.code === "US" ? 6 : 12 }}>
                <Autocomplete
                  options={countryData}
                  autoHighlight
                  getOptionLabel={(option) => option.name}
                  value={country}
                  onChange={(e, newValue) => countryChangeHandler(e, newValue)}
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
                        {option.name}
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
                        formik.touched.country &&
                        (formik.errors.country as string)
                      }
                      sx={{
                        ...TEXTFIELD_STYLE_VALIDATION,
                        mb: formik.values.country ? 0 : 2,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid size={6}>
                <FormTextField label="Total Number Of Teachers" name="noOfTeachers" value={formik.values.noOfTeachers} formik={formik} />
              </Grid>
              <Grid size={6}>
                <FormTextField label="Total Number Of Students" name="noOfStudents" value={formik.values.noOfStudents} formik={formik} />
              </Grid>
              {country?.code === "US" && (
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
                        helperText={
                          formik.touched.state &&
                          (formik.errors.state as string)
                        }
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
                <FormTextField
                  name="registrationYear"
                  label="Registration Year"
                  placeholder="2024"
                  formik={formik}
                  icon={<CalendarIcon />}
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <MuiTelInput
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phone &&
                    !matchIsValidTel(phone) &&
                    Boolean(formik.errors.phone)
                  }
                  helperText={
                    formik.touched.phone && (formik.errors.phone as string)
                  }
                  defaultCountry={(country?.code as any) || "US"}
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
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
                  size={{
                    xs: 12,
                    md: formik.values.country?.code === "US" ? 6 : 4,
                  }}
                >
                  <FormTextField name="city" label="City" formik={formik} />
                </Grid>
                {formik.values.country?.code !== "US" && (
                  <Grid size={{ xs: 12, md: 4 }}>
                    <FormTextField
                      name="state"
                      label="State/Province"
                      formik={formik}
                    />
                  </Grid>
                )}
                <Grid
                  size={{
                    xs: 12,
                    md: formik.values.country?.code === "US" ? 6 : 4,
                  }}
                >
                  <FormTextField
                    name="postalCode"
                    label={
                      formik.values.country?.code === "US"
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
              <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                  name="contactPersonName"
                  label="Contact Person Name"
                  formik={formik}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                  name="contactPersonEmail"
                  label="Contact Person Email"
                  formik={formik}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <MuiTelInput
                  fullWidth
                  name="contactPersonPhone"
                  label="Contact Person Phone"
                  value={contactPersonPhone}
                  onChange={handleContactPersonPhone}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.contactPersonPhone &&
                    !matchIsValidTel(formik.values.contactPersonPhone) &&
                    Boolean(formik.errors.contactPersonPhone)
                  }
                  helperText={
                    formik.touched.contactPersonPhone &&
                    (formik.errors.contactPersonPhone as string)
                  }
                  defaultCountry={(country?.code as any) || "US"}
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
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
                    bgcolor: COLORS.PRIMARY_NAVY,
                    color: COLORS.WHITE,
                    py: 1.5,
                    borderRadius: "14px",
                    fontWeight: 800,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    fontFamily: newBlack_medium.style.fontFamily,
                    "&:hover": {
                      bgcolor: COLORS.PRIMARY_BLUE,
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
            <Link
              href={"/login"}
              style={{ textTransform: "none", textDecoration: "none" }}
            >
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
            </Link>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default Institution;
