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
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import { institutionSignupValidationSchema } from "@/utils/validationSchema";
import { COLORS, USER_ROLES } from "@/utils/enum";
import {
  COUNTRYDATAPROPS,
  InstitutionInfo,
} from "@/utils/type";
import {
  Business,
  Person,
  Email,
  Language,
  LocationOn,
  ArrowBack,
  ArrowForward,
  Public,
  School,
  Groups,
  LocationCity,
  Map,
  MarkunreadMailbox,
  AccountCircle,
  AlternateEmail,
  HomeWork,
  CheckCircle,
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
import { LIGHT_INPUT_STYLE, FormTextField, PasswordTextField } from "./FormComponents";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import Link from "next/link";
import BeamButton from "@/components/widgets/BeamButton";
import Image from "next/image";
import logo from "@/images/logo/iaire_logo.png";

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <Typography
    sx={{
      color: "#334155",
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
    {required && <span style={{ color: "#EF4444" }}>*</span>}
  </Typography>
);

const STEP_TITLES = [
  "01. Institution Details",
  "02. Contact & Security",
  "03. Address & Regional Information",
];

const InstitutionRegistration = () => {
  const router = useRouter();
  const { setInstitutionData, institutionData: rawInstitutionData } = useSignup();
  const institutionData = rawInstitutionData as any;
  const { countryData } = useGetCountries();

  const [activeStep, setActiveStep] = useState(0);
  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(
    institutionData?.country || null,
  );
  const { boardData, boardLoading } = useBoardByCountry(country);
  const [reviewLoading, setReviewLoading] = useState(false);

  const [phone, setPhone] = useState(
    `${institutionData?.isd || ""} ${institutionData?.phone || ""}`.trim(),
  );

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

  const formik = useFormik<any>({
    initialValues: {
      institutionName: institutionData?.institutionName || "",
      principalName: institutionData?.principalName || "",
      email: institutionData?.email || "",
      phone: institutionData?.phone || "",
      website: institutionData?.website || "",
      addressLine1: institutionData?.addressLine1 || "",
      addressLine2: institutionData?.addressLine2 || "",
      city: institutionData?.city || "",
      state: institutionData?.state || "",
      postalCode: institutionData?.postalCode || "",
      isd: institutionData?.isd || "",
      affiliationType: institutionData?.affiliationType || null,
      affiliationNumber: institutionData?.affiliationNumber || "",
      registrationYear: institutionData?.registrationYear || "",
      affiliationCertificate: institutionData?.affiliationCertificate || null,
      contactPersonName: institutionData?.contactPersonName || "",
      contactPersonEmail: institutionData?.contactPersonEmail || "",
      contactPersonPhone: institutionData?.contactPersonPhone || "",
      totalTeacherCount: institutionData?.totalTeacherCount || "",
      totalStudentCount: institutionData?.totalStudentCount || "",
      password: institutionData?.password || "",
      confirmPassword: institutionData?.confirmPassword || "",
      country: institutionData?.country || null,
      isTermsAccepted: institutionData?.isTermsAccepted || false,
      role: USER_ROLES.INSTITUTION,
    },
    enableReinitialize: true,
    validationSchema: institutionSignupValidationSchema,
    onSubmit: (values) => {
      setReviewLoading(true);
      setInstitutionData(values as any);
      router.push("/signup/review");
      setReviewLoading(false);
    },
  });

  const countryChangeHandler = (_: any, newValue: any) => {
    setCountry(newValue);
    if (newValue) {
      formik.setFieldValue("country", newValue);
      formik.setFieldValue("isd", "");
      formik.setFieldValue("affiliationType", null);
      formik.setFieldValue("state", "");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("affiliationCertificate", file);
    }
  };

  const handleNextStep = async () => {
    formik.setTouched({
      ...formik.touched,
      ...(activeStep === 0 && {
        institutionName: true,
        principalName: true,
        country: true,
      }),
      ...(activeStep === 1 && {
        email: true,
        phone: true,
        password: true,
        confirmPassword: true,
      }),
    });

    const errors = await formik.validateForm();

    if (activeStep === 0) {
      if (!errors.institutionName && !errors.principalName && !errors.country) {
        setActiveStep(1);
      }
    } else if (activeStep === 1) {
      if (!errors.email && !errors.phone && !errors.password && !errors.confirmPassword) {
        setActiveStep(2);
      }
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      router.push("/signup/role-selection");
    }
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        px: 2,
        py: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-15%",
          left: "25%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: { xs: 2, md: 3 },
          boxSizing: "border-box",
        }}
      >
        {/* Navigation & Step Top Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            mb: 1.5,
          }}
        >
          <Box
            onClick={handlePrevStep}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.12)",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
              borderRadius: "50px",
              px: 2,
              py: 0.8,
              color: "#475569",
              fontFamily: montserrat.style.fontFamily,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "#F1F5F9",
                borderColor: COLORS.PRIMARY_BLUE,
                color: "#1D4ED8",
                transform: "translateX(-4px)",
              },
            }}
          >
            <ArrowBack sx={{ fontSize: 16 }} /> {activeStep === 0 ? "Back to Role Selection" : "Previous Step"}
          </Box>

          <Chip
            label={`STEP ${activeStep + 1} OF 3 • ${activeStep === 0 ? "DETAILS" : activeStep === 1 ? "SECURITY" : "ADDRESS"}`}
            size="small"
            sx={{
              bgcolor: "rgba(59, 130, 246, 0.08)",
              color: "#1D4ED8",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 1,
              px: 1,
            }}
          />
        </Box>

        {/* Multi-Step Light Glass Card Container */}
        <Card
          sx={{
            py: { xs: 3, md: 4.5 },
            px: { xs: 3, md: 5.5 },
            backgroundColor: "#FFFFFF",
            borderRadius: "28px",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            position: "relative",
            overflowY: "auto",
            maxHeight: "calc(98vh - 45px)",
            my: "auto",
            boxShadow:
              "0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.02)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background:
                "linear-gradient(90deg, #2563EB 0%, #D97706 50%, #059669 100%)",
            },
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { width: 4 },
            "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 2 },
          }}
        >
          {/* Header Branding */}
          <Box sx={{ textAlign: "center", mb: 2.5 }}>
            <Box sx={{ mb: 1 }}>
              <Image
                src={logo}
                alt="IAIRE Logo"
                height={34}
                width={125}
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#0F172A",
                fontFamily: roboto.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 24, md: 30 },
                textTransform: "uppercase",
                letterSpacing: 1.2,
                mb: 0.5,
              }}
            >
              Institution Registration
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 14,
                color: "#475569",
                maxWidth: "540px",
                mx: "auto",
                lineHeight: 1.4,
              }}
            >
              {STEP_TITLES[activeStep]}
            </Typography>
          </Box>

          <SignupStepper activeStep={activeStep === 2 ? 1 : 0} />

          <form onSubmit={formik.handleSubmit}>
            {/* STEP 1: Institution Details */}
            {activeStep === 0 && (
              <Grid container spacing={2.5} sx={{ mt: 1 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="institutionName"
                    label="Institution Name"
                    placeholder="e.g. Cambridge International"
                    formik={formik}
                    icon={<Business />}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="principalName"
                    label="Principal's / Director's Name"
                    placeholder="Full name of Principal/Director"
                    formik={formik}
                    icon={<Person />}
                    required
                  />
                </Grid>

                <Grid size={12}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel required>Choose a Country</FieldLabel>
                    <Autocomplete
                      options={countryData}
                      getOptionLabel={(option) => option.name}
                      value={country}
                      onChange={countryChangeHandler}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Country"
                          error={
                            formik.touched.country &&
                            Boolean(formik.errors.country)
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
                                  <Public sx={{ color: "#2563EB", fontSize: 20 }} />
                                </InputAdornment>
                              ),
                            },
                          }}
                          sx={LIGHT_INPUT_STYLE}
                        />
                      )}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="totalTeacherCount"
                    label="Total Number Of Teachers"
                    placeholder="e.g. 50"
                    type="number"
                    formik={formik}
                    icon={<School />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="totalStudentCount"
                    label="Total Number Of Students"
                    placeholder="e.g. 1200"
                    type="number"
                    formik={formik}
                    icon={<Groups />}
                  />
                </Grid>

                {country?.code === "IN" && (
                  <IndiaForm
                    formik={formik}
                    boardData={boardData}
                    boardLoading={boardLoading}
                    handleFileChange={handleFileChange}
                  />
                )}

                {country?.code === "US" && (
                  <UsForm
                    formik={formik}
                    boardData={boardData}
                    boardLoading={boardLoading}
                  />
                )}

                <Grid size={12} sx={{ mt: 2 }}>
                  <BeamButton
                    fullWidth
                    onClick={handleNextStep}
                    endIcon={<ArrowForward />}
                    sx={{
                      height: "48px",
                      background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                      color: "#FFFFFF",
                      borderRadius: "14px",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      textTransform: "none",
                      fontFamily: montserrat.style.fontFamily,
                      boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.4)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
                        boxShadow: "0 12px 25px -4px rgba(37, 99, 235, 0.5)",
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.25s ease",
                    }}
                  >
                    Next: Contact & Security
                  </BeamButton>
                </Grid>
              </Grid>
            )}

            {/* STEP 2: Contact & Security */}
            {activeStep === 1 && (
              <Grid container spacing={2.5} sx={{ mt: 1 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="email"
                    label="Official Email Address"
                    placeholder="contact@institution.edu"
                    formik={formik}
                    icon={<Email />}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel required>Phone Number</FieldLabel>
                    <MuiTelInput
                      fullWidth
                      name="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={
                        formik.touched.phone && (formik.errors.phone as string)
                      }
                      defaultCountry={
                        (formik.values.country?.code as any) || "US"
                      }
                      sx={{
                        ...LIGHT_INPUT_STYLE,
                        "& .MuiIconButton-root": { color: "#2563EB" },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="website"
                    label="Website URL"
                    placeholder="https://www.institution.edu"
                    formik={formik}
                    icon={<Language />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <PasswordTextField
                    name="password"
                    label="Password"
                    placeholder="Create a strong password"
                    formik={formik}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <PasswordTextField
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    formik={formik}
                    required
                  />
                </Grid>

                <Grid size={12} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <BeamButton
                      variant="outlined"
                      onClick={handlePrevStep}
                      startIcon={<ArrowBack />}
                      sx={{
                        height: "48px",
                        minWidth: "120px",
                        bgcolor: "#F8FAFC",
                        color: "#475569",
                        border: "1.5px solid #CBD5E1",
                        borderRadius: "14px",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        textTransform: "none",
                        fontFamily: montserrat.style.fontFamily,
                        "&:hover": {
                          bgcolor: "#F1F5F9",
                          color: "#0F172A",
                          borderColor: "#94A3B8",
                        },
                      }}
                    >
                      Back
                    </BeamButton>

                    <BeamButton
                      fullWidth
                      onClick={handleNextStep}
                      endIcon={<ArrowForward />}
                      sx={{
                        height: "48px",
                        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                        color: "#FFFFFF",
                        borderRadius: "14px",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        textTransform: "none",
                        fontFamily: montserrat.style.fontFamily,
                        boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.4)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
                          boxShadow: "0 12px 25px -4px rgba(37, 99, 235, 0.5)",
                          transform: "translateY(-1px)",
                        },
                        transition: "all 0.25s ease",
                      }}
                    >
                      Next: Address & Regional Information
                    </BeamButton>
                  </Box>
                </Grid>
              </Grid>
            )}

            {/* STEP 3: Address & Regional Information */}
            {activeStep === 2 && (
              <Grid container spacing={2.5} sx={{ mt: 1 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="addressLine1"
                    label="Address Line 1"
                    placeholder="Street address, P.O. box"
                    formik={formik}
                    icon={<LocationOn />}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="addressLine2"
                    label="Address Line 2"
                    placeholder="Apartment, suite, unit, building"
                    formik={formik}
                    icon={<HomeWork />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <FormTextField
                    name="city"
                    label="City"
                    placeholder="City name"
                    formik={formik}
                    icon={<LocationCity />}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel required>State / Province</FieldLabel>
                    {formik.values.country?.code === "US" ? (
                      <Autocomplete
                        options={US_STATES}
                        getOptionLabel={(option: any) => option}
                        value={formik.values.state || null}
                        onChange={(_, newValue) => {
                          formik.setFieldValue("state", newValue || "");
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select State"
                            error={
                              formik.touched.state &&
                              Boolean(formik.errors.state)
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
                                    <Map sx={{ color: "#2563EB", fontSize: 20 }} />
                                  </InputAdornment>
                                ),
                              },
                            }}
                            sx={LIGHT_INPUT_STYLE}
                          />
                        )}
                      />
                    ) : (
                      <FormTextField
                        name="state"
                        placeholder="State name"
                        formik={formik}
                        icon={<Map />}
                      />
                    )}
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <FormTextField
                    name="postalCode"
                    label="Postal / Zip Code"
                    placeholder="e.g. 10001"
                    formik={formik}
                    icon={<MarkunreadMailbox />}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <FormTextField
                    name="contactPersonName"
                    label="Contact Person Name"
                    placeholder="Full Name"
                    formik={formik}
                    icon={<AccountCircle />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <FormTextField
                    name="contactPersonEmail"
                    label="Contact Person Email"
                    placeholder="email@example.com"
                    formik={formik}
                    icon={<AlternateEmail />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <FormTextField
                    name="contactPersonPhone"
                    label="Contact Person Phone"
                    placeholder="Phone Number"
                    formik={formik}
                    icon={<LocationOn />}
                  />
                </Grid>

                <Grid size={12} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <BeamButton
                      variant="outlined"
                      onClick={handlePrevStep}
                      startIcon={<ArrowBack />}
                      sx={{
                        height: "48px",
                        minWidth: "120px",
                        bgcolor: "#F8FAFC",
                        color: "#475569",
                        border: "1.5px solid #CBD5E1",
                        borderRadius: "14px",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        textTransform: "none",
                        fontFamily: montserrat.style.fontFamily,
                        "&:hover": {
                          bgcolor: "#F1F5F9",
                          color: "#0F172A",
                          borderColor: "#94A3B8",
                        },
                      }}
                    >
                      Back
                    </BeamButton>

                    <BeamButton
                      fullWidth
                      type="submit"
                      variant="contained"
                      disabled={reviewLoading}
                      endIcon={!reviewLoading && <CheckCircle />}
                      onClick={async (e: any) => {
                        e.preventDefault();
                        formik.setTouched({
                          institutionName: true,
                          principalName: true,
                          country: true,
                          email: true,
                          phone: true,
                          password: true,
                          confirmPassword: true,
                          addressLine1: true,
                          city: true,
                          state: true,
                          postalCode: true,
                        });
                        const errors = await formik.validateForm();
                        console.log("Validation errors on submit:", errors);
                        if (Object.keys(errors).length === 0) {
                          setReviewLoading(true);
                          setInstitutionData(formik.values);
                          router.push("/signup/review");
                        }
                      }}
                      sx={{
                        height: "48px",
                        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                        color: "#FFFFFF",
                        borderRadius: "14px",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        textTransform: "none",
                        fontFamily: montserrat.style.fontFamily,
                        boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.4)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
                          boxShadow: "0 12px 25px -4px rgba(37, 99, 235, 0.5)",
                          transform: "translateY(-1px)",
                        },
                        transition: "all 0.25s ease",
                      }}
                    >
                      {reviewLoading ? (
                        <CircularProgress color="inherit" size={22} />
                      ) : (
                        "Review Institution Details"
                      )}
                    </BeamButton>
                  </Box>
                </Grid>
              </Grid>
            )}
          </form>

          <Typography
            textAlign="center"
            sx={{
              fontSize: 13,
              mt: 3,
              fontFamily: montserrat.style.fontFamily,
              color: "#64748B",
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
                  color: "#2563EB",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: 13,
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

        <Box sx={{ height: 10, flexShrink: 0 }} />
      </Container>
    </Box>
  );
};

export default InstitutionRegistration;
