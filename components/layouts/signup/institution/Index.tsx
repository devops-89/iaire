"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Card, Container, Chip } from "@mui/material";
import { useFormik } from "formik";
import { institutionSignupValidationSchema } from "@/utils/validationSchema";
import { USER_ROLES, COLORS } from "@/utils/enum";
import { COUNTRYDATAPROPS } from "@/utils/type";
import { ArrowBack } from "@mui/icons-material";
import { matchIsValidTel, MuiTelInputInfo } from "mui-tel-input";
import { montserrat, roboto } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";
import SignupStepper from "../SignupStepper";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo/iaire_logo.png";
import Step1InstitutionDetails from "./Step1InstitutionDetails";
import Step2ContactSecurity from "./Step2ContactSecurity";
import Step3AddressRegional from "./Step3AddressRegional";

const STEP_TITLES = [
  "01. Institution Details",
  "02. Contact & Security",
  "03. Address & Regional Information",
];

const InstitutionRegistration = () => {
  const router = useRouter();
  const { setInstitutionData, institutionData: rawInstitutionData } =
    useSignup();
  const institutionData = rawInstitutionData as any;
  const { countryData } = useGetCountries();

  const [activeStep, setActiveStep] = useState(0);
  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(
    institutionData?.country || null,
  );
  const { boardData, boardLoading } = useBoardByCountry(country);
  const [reviewLoading, setReviewLoading] = useState(false);

  const [phone, setPhone] = useState(
    `${institutionData?.country?.code === "IN" ? "+91" : ""} ${institutionData?.phone || ""}`.trim(),
  );

  const handlePhoneChange = (
    value: string,
    countryDataInfo: MuiTelInputInfo,
  ) => {
    setPhone(value);
    const isValid = matchIsValidTel(value);

    if (isValid) {
      formik.setFieldValue("phone", countryDataInfo?.nationalNumber);
    } else {
      formik.setFieldError("phone", "Please enter a valid phone number");
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
    console.log("country", newValue);
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
      const isBaseValid =
        !errors.institutionName && !errors.principalName && !errors.country;
      const isAffiliationValid =
        country?.code === "IN" || country?.code === "AE"
          ? !errors.affiliationType &&
            !errors.affiliationNumber &&
            !errors.affiliationCertificate
          : true;

      if (isBaseValid && isAffiliationValid) {
        setActiveStep(1);
      }
    } else if (activeStep === 1) {
      const isPhoneValid = matchIsValidTel(phone);
      if (!isPhoneValid) {
        formik.setFieldError("phone", "Please enter a valid phone number");
      }

      if (
        !errors.email &&
        !errors.phone &&
        !errors.password &&
        !errors.confirmPassword &&
        isPhoneValid
      ) {
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

  const onSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
      contactPersonName: true,
      contactPersonEmail: true,
      contactPersonPhone: true,
    });
    const errors = await formik.validateForm();
    console.log("Validation errors on submit:", errors);

    const isPhoneValid = matchIsValidTel(phone);
    if (!isPhoneValid) {
      formik.setFieldError("phone", "Please enter a valid phone number");
    }

    if (Object.keys(errors).length === 0 && isPhoneValid) {
      setReviewLoading(true);
      setInstitutionData(formik.values);
      router.push("/signup/review");
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
            <ArrowBack sx={{ fontSize: 16 }} />{" "}
            {activeStep === 0 ? "Back to Role Selection" : "Previous Step"}
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
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "#CBD5E1",
              borderRadius: 2,
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

          <SignupStepper
            activeStep={activeStep === 2 ? 1 : 0}
            steps={["Account Details", "Verification"]}
          />

          <form onSubmit={formik.handleSubmit}>
            {activeStep === 0 && (
              <Step1InstitutionDetails
                formik={formik}
                country={country}
                countryData={countryData}
                countryChangeHandler={countryChangeHandler}
                boardData={boardData}
                boardLoading={boardLoading}
                handleFileChange={handleFileChange}
                handleNextStep={handleNextStep}
              />
            )}

            {activeStep === 1 && (
              <Step2ContactSecurity
                formik={formik}
                phone={phone}
                handlePhoneChange={handlePhoneChange}
                handlePrevStep={handlePrevStep}
                handleNextStep={handleNextStep}
              />
            )}

            {activeStep === 2 && (
              <Step3AddressRegional
                formik={formik}
                reviewLoading={reviewLoading}
                handlePrevStep={handlePrevStep}
                onSubmitClick={onSubmitClick}
              />
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
