import { COLORS } from "@/utils/enum";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SignupStepper from "./SignupStepper";
import PersonalInformation from "./student/Personal-Information";
import AcademicInformation from "./student/Academic-Information";
import { useFormik } from "formik";
import { studentSelfValidationSchema } from "@/utils/validationSchema";

import { STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS } from "@/utils/type";
import GuardianInformation from "./student/Guardian-information";
import { aloeveraDisplay_medium } from "@/utils/fonts";
import { useStudentSignup } from "@/hooks/student/useStudentSignup";
import BeamButton from "@/components/widgets/BeamButton";

const SignupLayout = () => {
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

  console.log("formik errors", formik.errors);
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.PRIMARY_NAVY,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "auto",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Card sx={{ p: 4, borderRadius: 2 }}>
            {/* <Typography>Join IAIE</Typography> */}
            <SignupStepper activeStep={0} />
            <form onSubmit={formik.handleSubmit}>
              <PersonalInformation formik={formik} />
              <AcademicInformation formik={formik} />
              <GuardianInformation formik={formik} />
              <BeamButton
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  fontSize: 14,
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  color: COLORS.WHITE,
                  my: 2,
                  width: 150,
                  borderRadius: "20px",
                  p: 1,
                }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </BeamButton>
            </form>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default SignupLayout;
