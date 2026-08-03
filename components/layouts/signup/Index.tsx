"use client";
import { COLORS } from "@/utils/enum";
import { Box, Card, Container, Typography, Chip } from "@mui/material";
import React from "react";
import SignupStepper from "./SignupStepper";
import PersonalInformation from "./student/Personal-Information";
import AcademicInformation from "./student/Academic-Information";
import { useFormik } from "formik";
import { studentSelfValidationSchema } from "@/utils/validationSchema";
import { STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS } from "@/utils/type";
import GuardianInformation from "./student/Guardian-information";
import { aloeveraDisplay_medium, montserrat, roboto } from "@/utils/fonts";
import { useStudentSignup } from "@/hooks/student/useStudentSignup";
import BeamButton from "@/components/widgets/BeamButton";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo/iaire_logo.png";

const SignupLayout = () => {
  const router = useRouter();
  const { signupStudent, loading } = useStudentSignup();

  const formik = useFormik<STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS>({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      board: null,
      school: null,
      email: "",
      profileImage: null,
      grade: "",
      country: null,
      state: null,
      isd: null,
      isdCode: null,
      countryCode: "",
      phoneNumber: "",
      fatherName: "",
      fatherEmail: "",
      fatherPhone: "",
      fatherProfession: "",
      motherName: "",
      motherEmail: "",
      motherPhone: "",
      motherProfession: "",
      gender: "",
    },
    validationSchema: studentSelfValidationSchema,
    onSubmit: (values) => {
      const payload = {
        phone: values.phoneNumber,
        countryCode: values.countryCode,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        boardId: values.board?.id?.toString() || "",
        schoolId: values.school?.id?.toString() || "",
        email: values.email,
        profileImage: values.profileImage,
        grade: values.grade,
        countryId: values.country?.id?.toString() || "",
        state: values.state || "",
        isdCode: values.isdCode || "",
        fatherName: values.fatherName,
        fatherEmail: values.fatherEmail,
        fatherPhone: values.fatherPhone,
        fatherProfession: values.fatherProfession,
        motherName: values.motherName,
        motherEmail: values.motherEmail,
        motherPhone: values.motherPhone,
        motherProfession: values.motherProfession,
        gender: values.gender,
      };

      const cleanedPayload = Object.fromEntries(
        Object.entries(payload).filter(
          ([_, value]) => value !== "" && value !== null && value !== undefined,
        ),
      );

      signupStudent(cleanedPayload);
    },
  });

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
        py: { xs: 4, md: 6 },
        px: 2,
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
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Navigation Top Bar */}
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
            <ArrowBack sx={{ fontSize: 16 }} /> Back to Role Selection
          </Box>

          <Chip
            label="STEP 1 OF 2"
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

        {/* Light Card Container */}
        <Card
          sx={{
            py: { xs: 4, md: 6 },
            px: { xs: 3, md: 6 },
            backgroundColor: "#FFFFFF",
            borderRadius: "28px",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            position: "relative",
            overflow: "hidden",
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
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src={logo}
                alt="IAIRE Logo"
                height={40}
                width={140}
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#0F172A",
                fontFamily: roboto.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 26, md: 34 },
                textTransform: "uppercase",
                letterSpacing: 1.2,
                mb: 1,
              }}
            >
              Student Registration
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 15,
                color: "#475569",
                maxWidth: "580px",
                mx: "auto",
                lineHeight: 1.5,
              }}
            >
              Join IAIRE as a student to access world-class research, mentorship, and innovation programs.
            </Typography>
          </Box>

          <SignupStepper activeStep={0} />

          <form onSubmit={formik.handleSubmit}>
            <PersonalInformation formik={formik} />
            <AcademicInformation formik={formik} />
            <GuardianInformation formik={formik} />

            <Box sx={{ mt: 4 }}>
              <BeamButton
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  height: "48px",
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  color: "#FFFFFF",
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
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
                Register as Student
              </BeamButton>
            </Box>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default SignupLayout;
