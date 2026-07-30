"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Grid,
  Typography,
  Card,
  Container,
  Autocomplete,
  TextField,
  Chip,
  InputAdornment,
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
  ArrowBack,
  Public,
  School,
  Groups,
  LocationCity,
  Map,
  MarkunreadMailbox,
  AccountCircle,
  AlternateEmail,
  HomeWork,
} from "@mui/icons-material";
import {
  matchIsValidTel,
  MuiTelInput,
  MuiTelInputInfo,
} from "mui-tel-input";
import { montserrat, roboto, aloeveraDisplay_medium } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";
import { US_STATES } from "@/utils/constant";
import IndiaForm from "./India-Form";
import UsForm from "./us-form";
import SignupStepper from "../SignupStepper";
import { DARK_INPUT_STYLE, FormTextField, PasswordTextField } from "./FormComponents";
import { CalendarIcon } from "@mui/x-date-pickers";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";
import Image from "next/image";
import logoWhite from "@/images/logo/iaire_logo_white.png";

const SectionHeader = ({ step, title }: { step: string; title: string }) => (
  <Grid size={12} sx={{ mt: 3, mb: 1 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Chip
        label={step}
        size="small"
        sx={{
          bgcolor: "rgba(56, 189, 248, 0.12)",
          color: "#38BDF8",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          fontSize: 10,
          letterSpacing: 1,
        }}
      />
      <Typography
        sx={{
          color: COLORS.WHITE,
          fontFamily: roboto.style.fontFamily,
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: 1.2,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(56, 189, 248, 0.3) 0%, rgba(255, 255, 255, 0.05) 100%)",
        }}
      />
    </Box>
  </Grid>
);

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <Typography
    sx={{
      color: "rgba(255, 255, 255, 0.85)",
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
      fontSize: "0.83rem",
      mb: 0.8,
      display: "flex",
      alignItems: "center",
      gap: 0.5,
    }}
  >
    {children}
    {required && <span style={{ color: "#F87171" }}>*</span>}
  </Typography>
);

const Institution = () => {
  const router = useRouter();
  const { setInstitutionData, institutionData } = useSignup();

  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(
    institutionData?.country || null
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
        Object.entries(values).filter(([_, v]) => v !== "")
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
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      formik.setFieldValue("affiliationCertificate", event.target.files[0]);
    }
  };

  const countryChangeHandler = (
    e: React.SyntheticEvent,
    newValue: COUNTRYDATAPROPS | null
  ) => {
    setCountry(newValue);
    if (newValue) {
      formik.setFieldValue("country", newValue);
    }
  };

  const [phone, setPhone] = useState(institutionData?.phone || "");

  const handlePhoneChange = (value: string, countryDataInfo: MuiTelInputInfo) => {
    setPhone(value);
    const isValid = matchIsValidTel(value);
    if (isValid) {
      formik.setFieldError("phone", "");
      formik.setFieldValue("phone", countryDataInfo?.nationalNumber);
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
    institutionData?.contactPersonPhone || ""
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
        "Please Enter a Valid Phone Number"
      );
    }
  };

  return (
    <Box
      sx={{
        background:
          "radial-gradient(ellipse at 50% -20%, #1E293B 0%, #0B1727 60%, #060D17 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflowX: "hidden",
        py: { xs: 4, md: 7 },
        px: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-15%",
          left: "25%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-15%",
          right: "15%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.06) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Navigation & Step Top Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box
            onClick={() => router.push("/signup/role-selection")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px",
              px: 2,
              py: 0.8,
              color: "rgba(255, 255, 255, 0.75)",
              fontFamily: montserrat.style.fontFamily,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderColor: "#38BDF8",
                color: "#38BDF8",
                transform: "translateX(-4px)",
              },
            }}
          >
            <ArrowBack sx={{ fontSize: 16 }} /> Back to Role Selection
          </Box>

          <Chip
            label="STEP 1 OF 2"
            size="small"
            sx={{
              bgcolor: "rgba(56, 189, 248, 0.12)",
              color: "#38BDF8",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 1,
              px: 1,
            }}
          />
        </Box>

        {/* Minimalist Glass Container */}
        <Card
          sx={{
            py: { xs: 4, md: 6 },
            px: { xs: 3, md: 6 },
            backgroundColor: "rgba(11, 23, 39, 0.65)",
            backdropFilter: "blur(24px)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.06)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background:
                "linear-gradient(90deg, #38BDF8 0%, #D1A054 50%, #10B981 100%)",
            },
          }}
        >
          {/* Header Branding */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src={logoWhite}
                alt="IAIRE Logo"
                height={40}
                width={140}
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 26, md: 34 },
                textTransform: "uppercase",
                letterSpacing: 1.2,
                mb: 1,
                background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Institution Registration
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 15,
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "580px",
                mx: "auto",
                lineHeight: 1.5,
              }}
            >
              Empower your institution with cutting-edge tools for innovation and
              researcher management.
            </Typography>
          </Box>

          <SignupStepper activeStep={0} />

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2.5}>
              {/* Section 1: Institution Details */}
              <SectionHeader step="01" title="Institution Details" />

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
                  label="Principal's / Director's Name"
                  placeholder="Full name of Principal/Director"
                  formik={formik}
                  icon={<Person />}
                />
              </Grid>

              <Grid size={{ xs: 12, md: country?.code === "US" ? 6 : 12 }}>
                <Box sx={{ width: "100%" }}>
                  <FieldLabel>Choose a Country</FieldLabel>
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
                          sx={{
                            color: "#FFFFFF",
                            bgcolor: "#0B1727",
                            "&:hover": { bgcolor: "rgba(56, 189, 248, 0.15)" },
                            "& > img": { mr: 2, flexShrink: 0 },
                          }}
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
                        placeholder="Select Country"
                        error={
                          formik.touched.country && Boolean(formik.errors.country)
                        }
                        helperText={
                          formik.touched.country &&
                          (formik.errors.country as string)
                        }
                        slotProps={{
                          input: {
                            ...params.InputProps,
                            startAdornment: (
                              <InputAdornment position="start">
                                <Public sx={{ color: "#60A5FA", fontSize: 20 }} />
                              </InputAdornment>
                            ),
                          },
                        }}
                        sx={{
                          ...DARK_INPUT_STYLE,
                          "& .MuiSvgIcon-root": { color: "#60A5FA" },
                        }}
                      />
                    )}
                  />
                </Box>
              </Grid>

              <Grid size={6}>
                <FormTextField
                  label="Total Number Of Teachers"
                  name="noOfTeachers"
                  placeholder="e.g. 50"
                  formik={formik}
                  icon={<School />}
                />
              </Grid>
              <Grid size={6}>
                <FormTextField
                  label="Total Number Of Students"
                  name="noOfStudents"
                  placeholder="e.g. 1200"
                  formik={formik}
                  icon={<Groups />}
                />
              </Grid>

              {country?.code === "US" && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel>State</FieldLabel>
                    <Autocomplete
                      options={US_STATES}
                      value={formik.values.state || null}
                      onChange={(_, newValue) =>
                        formik.setFieldValue("state", newValue)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select State"
                          error={
                            formik.touched.state && Boolean(formik.errors.state)
                          }
                          helperText={
                            formik.touched.state &&
                            (formik.errors.state as string)
                          }
                          slotProps={{
                            input: {
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Map sx={{ color: "#60A5FA", fontSize: 20 }} />
                                </InputAdornment>
                              ),
                            },
                          }}
                          sx={{
                            ...DARK_INPUT_STYLE,
                            "& .MuiSvgIcon-root": { color: "#60A5FA" },
                          }}
                        />
                      )}
                    />
                  </Box>
                </Grid>
              )}

              {renderCountrySpecificFields()}

              {/* Section 2: Contact & Location */}
              <SectionHeader step="02" title="Contact & Location" />

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
                <Box sx={{ width: "100%" }}>
                  <FieldLabel>Phone Number</FieldLabel>
                  <MuiTelInput
                    fullWidth
                    name="phone"
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
                    sx={{
                      ...DARK_INPUT_STYLE,
                      "& .MuiIconButton-root": { color: "#60A5FA" },
                    }}
                  />
                </Box>
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
                  icon={<HomeWork />}
                />
              </Grid>
              <Grid container spacing={2} size={12}>
                <Grid
                  size={{
                    xs: 12,
                    md: formik.values.country?.code === "US" ? 6 : 4,
                  }}
                >
                  <FormTextField
                    name="city"
                    label="City"
                    placeholder="City name"
                    formik={formik}
                    icon={<LocationCity />}
                  />
                </Grid>
                {formik.values.country?.code !== "US" && (
                  <Grid size={{ xs: 12, md: 4 }}>
                    <FormTextField
                      name="state"
                      label="State / Province"
                      placeholder="State or province"
                      formik={formik}
                      icon={<Map />}
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
                    placeholder="Postal code"
                    formik={formik}
                    icon={<MarkunreadMailbox />}
                  />
                </Grid>
              </Grid>

              {/* Section 3: Security & Representative */}
              <SectionHeader step="03" title="Security & Representative" />

              <Grid size={{ xs: 12, md: 6 }}>
                <PasswordTextField
                  name="password"
                  label="Password"
                  placeholder="Enter password"
                  formik={formik}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <PasswordTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  formik={formik}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                  name="contactPersonName"
                  label="Contact Person Name"
                  placeholder="Representative name"
                  formik={formik}
                  icon={<AccountCircle />}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                  name="contactPersonEmail"
                  label="Contact Person Email"
                  placeholder="Representative email"
                  formik={formik}
                  icon={<AlternateEmail />}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ width: "100%" }}>
                  <FieldLabel>Contact Person Phone</FieldLabel>
                  <MuiTelInput
                    fullWidth
                    name="contactPersonPhone"
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
                    sx={{
                      ...DARK_INPUT_STYLE,
                      "& .MuiIconButton-root": { color: "#60A5FA" },
                    }}
                  />
                </Box>
              </Grid>

              {/* Submit Button */}
              <Grid size={12} sx={{ mt: 3 }}>
                <BeamButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: COLORS.PRIMARY_NAVY,
                    color: COLORS.WHITE,
                    py: 1.8,
                    borderRadius: "14px",
                    fontWeight: 800,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    fontFamily: aloeveraDisplay_medium.style.fontFamily,
                    border: `1px solid ${COLORS.BEAM_COLOR}`,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.35)",
                    "&:hover": {
                      bgcolor: COLORS.PRIMARY_BLUE,
                      boxShadow: "0 15px 35px rgba(59, 130, 246, 0.5)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Register Institution
                </BeamButton>
              </Grid>
            </Grid>
          </form>

          <Typography
            textAlign="center"
            sx={{
              fontSize: 14,
              mt: 4,
              fontFamily: montserrat.style.fontFamily,
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: 500,
            }}
          >
            Already registered?{" "}
            <Link
              href={"/login"}
              style={{ textTransform: "none", textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "#60A5FA",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: 14,
                  p: 0,
                  minWidth: "auto",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
                component={"span"}
              >
                Log in instead
              </Typography>
            </Link>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default Institution;
