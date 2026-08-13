"use client";
import { GENDER } from "@/utils/constant";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { montserrat, roboto, aloeveraDisplay_medium } from "@/utils/fonts";
import { educatorSignupValidationSchema } from "@/utils/validationSchema";
import { useSignup } from "@/store/useSignup";
import {
  COUNTRYDATAPROPS,
  EducatorInfo,
  INSTITUTION_BY_BOARD_PROPS,
} from "@/utils/type";
import {
  CloudUpload,
  Person,
  Email,
  Wc,
  Public,
  School,
  ArrowBack,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  Chip,
  CircularProgress,
  Container,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import SignupStepper from "../SignupStepper";
import { useInstitutionByBoard } from "@/hooks/common/getInstitutionByBoard";
import BeamButton from "@/components/widgets/BeamButton";
import { LIGHT_INPUT_STYLE, FormTextField, PasswordTextField } from "../institution/FormComponents";
import Link from "next/link";
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
  "01. Personal Information",
  "02. Contact & Security",
  "03. Academic & Institution",
];

const EducatorSignup = () => {
  const router = useRouter();
  const { setEducatorData, educatorData: rawEducatorData } = useSignup();
  const educatorData = rawEducatorData as any;
  const { countryData } = useGetCountries();

  const [activeStep, setActiveStep] = useState(0);
  const [reviewLoading, setReviewLoading] = useState(false);

  const formik = useFormik<EducatorInfo>({
    initialValues: {
      profileImage: educatorData?.profileImage || null,
      board: educatorData?.board || null,
      school: educatorData?.school || null,
      firstName: educatorData?.firstName || "",
      lastName: educatorData?.lastName || "",
      email: educatorData?.email || "",
      phone: educatorData?.phone || "",
      password: educatorData?.password || "",
      confirmPassword: educatorData?.confirmPassword || "",
      country: educatorData?.country || null,
      state: educatorData?.state || "",
      countryCode: educatorData?.countryCode || "",
      primarySubjects: educatorData?.primarySubjects || [],
      isdCode: educatorData?.isdCode || "",
      gender: educatorData?.gender || "",
      experience: educatorData?.experience || "",
      role: USER_ROLES.EDUCATOR,
    },
    enableReinitialize: true,
    validationSchema: educatorSignupValidationSchema,
    onSubmit: (values) => {
      setReviewLoading(true);
      setEducatorData(values as any);
      router.push("/signup/review");
      setReviewLoading(false);
    },
  });

  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(
    educatorData?.country || null,
  );
  const { boardData } = useBoardByCountry(country);
  const { institutionData } = useInstitutionByBoard({
    country: country,
    boardId:
      country?.code === "IN"
        ? formik.values?.board?.id?.toString()
        : country?.code === "US"
          ? formik.values.isdCode
          : formik.values?.board?.id?.toString(),
  });

  const [phone, setPhone] = useState(
    `${educatorData?.countryCode || ""} ${educatorData?.phone || ""}`.trim(),
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

  const countryChangeHandler = (_: any, newValue: any) => {
    setCountry(newValue);
    if (newValue) {
      formik.setFieldValue("country", newValue);
      formik.setFieldValue("isdCode", "");
      formik.setFieldValue("school", null);
      formik.setFieldValue("board", null);
    }
  };

  const boardChangeHandler = (_: any, newValue: any) => {
    if (newValue) {
      formik.setFieldValue("board", newValue);
    }
  };

  const isdChangeHandler = (_: any, newValue: any) => {
    if (newValue) {
      formik.setFieldValue("isdCode", newValue);
    }
  };

  const [school, setSchool] = useState<INSTITUTION_BY_BOARD_PROPS | null>(
    educatorData?.school || null,
  );

  const institutionChangeHandler = (_: any, newValue: any) => {
    setSchool(newValue);
    if (newValue) {
      formik.setFieldValue("school", newValue);
    }
  };

  const getProfileImageSrc = () => {
    const val = formik.values.profileImage as any;
    if (!val) return undefined;
    if (typeof val === "string") return val;
    if (typeof Blob !== "undefined" && (val instanceof Blob || val instanceof File)) {
      return URL.createObjectURL(val);
    }
    return undefined;
  };

  const handleNextStep = async () => {
    formik.setTouched({
      ...formik.touched,
      ...(activeStep === 0 && { firstName: true, lastName: true, gender: true }),
      ...(activeStep === 1 && { email: true, phone: true, password: true, confirmPassword: true }),
    });

    const errors = await formik.validateForm();

    if (activeStep === 0) {
      if (!errors.firstName && !errors.lastName && !errors.gender) {
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
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflowX: "hidden",
        boxSizing: "border-box",
        px: 2,
        py: { xs: 4, md: 6 },
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
            label={`STEP ${activeStep + 1} OF 3 • ${activeStep === 0 ? "PERSONAL" : activeStep === 1 ? "SECURITY" : "ACADEMIC"}`}
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
            overflow: "hidden",
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
              Mentor Registration
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

          <SignupStepper activeStep={activeStep === 2 ? 1 : 0} steps={["Account Details", "Verification"]} />

          <form onSubmit={formik.handleSubmit}>
            {/* STEP 1: Personal Information & Avatar */}
            {activeStep === 0 && (
              <Grid container spacing={2.5} sx={{ mt: 1 }}>
                <Grid size={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Avatar
                      src={getProfileImageSrc()}
                      sx={{
                        width: 90,
                        height: 90,
                        bgcolor: "rgba(59, 130, 246, 0.06)",
                        border: "2px dashed #2563EB",
                        color: "#2563EB",
                        boxShadow: "0 4px 15px rgba(37, 99, 235, 0.15)",
                      }}
                    >
                      <CloudUpload sx={{ width: 40, height: 40 }} />
                    </Avatar>

                    <BeamButton
                      variant="text"
                      component="label"
                      sx={{
                        color: "#2563EB",
                        fontFamily: montserrat.style.fontFamily,
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "none",
                        border: "1px solid rgba(37, 99, 235, 0.3)",
                        borderRadius: "20px",
                        px: 2,
                        py: 0.5,
                        bgcolor: "rgba(59, 130, 246, 0.08)",
                        "&:hover": {
                          bgcolor: "rgba(59, 130, 246, 0.16)",
                          borderColor: "#2563EB",
                        },
                      }}
                    >
                      Upload Profile Photo
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          formik.setFieldTouched("profileImage", true);
                          if (file) {
                            formik.setFieldValue("profileImage", file);
                          } else {
                            formik.setFieldValue("profileImage", null);
                          }
                        }}
                      />
                    </BeamButton>

                    {formik.touched.profileImage && formik.errors.profileImage && (
                      <FormHelperText error sx={{ fontSize: 11 }}>
                        {formik.errors.profileImage as string}
                      </FormHelperText>
                    )}
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="firstName"
                    label="First Name"
                    placeholder="e.g. John"
                    formik={formik}
                    icon={<Person />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormTextField
                    name="lastName"
                    label="Last Name"
                    placeholder="e.g. Doe"
                    formik={formik}
                    icon={<Person />}
                  />
                </Grid>

                <Grid size={12}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel required>Gender</FieldLabel>
                    <Autocomplete
                      options={GENDER}
                      getOptionLabel={(option: any) => option}
                      value={formik.values.gender}
                      onChange={(_, value) => formik.setFieldValue("gender", value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Gender"
                          error={
                            formik.touched.gender && Boolean(formik.errors.gender)
                          }
                          helperText={
                            formik.touched.gender && (formik.errors.gender as string)
                          }
                          slotProps={{
                            input: {
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Wc sx={{ color: "#2563EB", fontSize: 20 }} />
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
                    label="Email Address"
                    placeholder="john.doe@example.com"
                    formik={formik}
                    icon={<Email />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel>Phone Number</FieldLabel>
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

                <Grid size={12} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, gap: 2 }}>
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
                      Next: Academic Details
                    </BeamButton>
                  </Box>
                </Grid>
              </Grid>
            )}

            {/* STEP 3: Academic & Institution */}
            {activeStep === 2 && (
              <Grid container spacing={2.5} sx={{ mt: 1 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel>Country</FieldLabel>
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
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel>
                      {country?.code === "US" ? "ISD Code" : "Board"}
                    </FieldLabel>
                    {country?.code === "IN" ? (
                      <Autocomplete
                        options={boardData}
                        getOptionLabel={(option) => option.name}
                        value={formik.values.board}
                        onChange={boardChangeHandler}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select Board"
                            error={
                              formik.touched.board && Boolean(formik.errors.board)
                            }
                            helperText={
                              formik.touched.board &&
                              (formik.errors.board as string)
                            }
                            slotProps={{
                              input: {
                                ...params.InputProps,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <School sx={{ color: "#2563EB", fontSize: 20 }} />
                                  </InputAdornment>
                                ),
                              },
                            }}
                            sx={LIGHT_INPUT_STYLE}
                          />
                        )}
                      />
                    ) : country?.code === "US" ? (
                      <Autocomplete
                        options={boardData}
                        getOptionLabel={(option: any) => option}
                        value={formik.values.isdCode || null}
                        onChange={isdChangeHandler}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select ISD Code"
                            error={
                              formik.touched.isdCode &&
                              Boolean(formik.errors.isdCode)
                            }
                            helperText={
                              formik.touched.isdCode &&
                              (formik.errors.isdCode as string)
                            }
                            slotProps={{
                              input: {
                                ...params.InputProps,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <School sx={{ color: "#2563EB", fontSize: 20 }} />
                                  </InputAdornment>
                                ),
                              },
                            }}
                            sx={LIGHT_INPUT_STYLE}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        options={boardData}
                        getOptionLabel={(option) => option.name}
                        value={formik.values.board}
                        onChange={boardChangeHandler}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select Board"
                            error={
                              formik.touched.board && Boolean(formik.errors.board)
                            }
                            helperText={
                              formik.touched.board &&
                              (formik.errors.board as string)
                            }
                            slotProps={{
                              input: {
                                ...params.InputProps,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <School sx={{ color: "#2563EB", fontSize: 20 }} />
                                  </InputAdornment>
                                ),
                              },
                            }}
                            sx={LIGHT_INPUT_STYLE}
                          />
                        )}
                      />
                    )}
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box sx={{ width: "100%" }}>
                    <FieldLabel>Institution / School</FieldLabel>
                    <Autocomplete
                      options={institutionData}
                      getOptionLabel={(option) => option.name}
                      value={school}
                      onChange={institutionChangeHandler}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Institution"
                          error={
                            formik.touched.school && Boolean(formik.errors.school)
                          }
                          helperText={
                            formik.touched.school &&
                            (formik.errors.school as string)
                          }
                          slotProps={{
                            input: {
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <School sx={{ color: "#2563EB", fontSize: 20 }} />
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

                <Grid size={12} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, gap: 2 }}>
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
                      endIcon={!reviewLoading && <CheckCircle />}
                      onClick={async (e: any) => {
                        e.preventDefault();
                        const errors = await formik.validateForm();
                        if (Object.keys(errors).length === 0) {
                          setReviewLoading(true);
                          setEducatorData(formik.values as any);
                          router.push("/signup/review");
                        } else {
                          formik.handleSubmit();
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
                        "Review Profile & Submit"
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

export default EducatorSignup;
