"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Grid,
  Typography,
  Card,
  Container,
  Divider,
  CircularProgress,
  Avatar} from "@mui/material";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import SignupStepper from "@/components/layouts/signup/SignupStepper";
import { ArrowBack, CheckCircleOutline } from "@mui/icons-material";
import useSnackbar from "@/store/useSnackbar";
import { useStudentSignup } from "@/hooks/student/useStudentSignup";
import { COUNTRIES } from "@/utils/constant";
import BeamButton from "@/components/widgets/BeamButton";

const StudentReview = () => {
  const router = useRouter();
  const { data: studentData } = useSignup();
  const { setSnackbar } = useSnackbar();
  const { signupStudent, loading } = useStudentSignup();

  useEffect(() => {
    if (!studentData && typeof window !== "undefined") {
      router.push("/signup?role=STUDENT");
    }
  }, [studentData, router]);

  if (!studentData) {
    return null;
  }

  const handleCheckout = async () => {
    const code = COUNTRIES.find((c) => c.code === studentData?.country?.code);

    try {
      const rawData = {
        email: studentData?.email,
        countryCode: code?.phone,
        firstName: studentData?.firstName,
        lastName: studentData?.lastName,
        password: studentData?.password,
        boardId: studentData?.board?.id,
        schoolId: studentData?.school?.id,
        profileImage: studentData?.profileImage,
        countryId: studentData?.country?.id,
        gender: studentData?.gender,
        grade: studentData?.grade,
        state: studentData?.state,
        fatherName: studentData?.fatherName,
        fatherEmail: studentData?.fatherEmail,
        fatherPhone: studentData?.fatherPhone,
        fatherProfession: studentData?.fatherProfession,
        motherName: studentData?.motherName,
        motherEmail: studentData?.motherEmail,
        motherPhone: studentData?.motherPhone,
        motherProfession: studentData?.motherProfession,
        ...(studentData?.country?.code === "US" && {
          isdCode: studentData?.isdCode,
        }),
      };

      const payload = Object.fromEntries(
        Object.entries(rawData).filter(
          ([_, v]) => v !== null && v !== undefined && v !== "",
        ),
      );

      await signupStudent(payload);
    } catch (error) {
      setSnackbar("Something went wrong", "error");
      console.log(error);
    }
  };

  const DataRow = ({
    label,
    value,
  }: {
    label: string;
    value: React.ReactNode;
  }) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ mb: 2 }}>
      <Typography
        sx={{
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "rgba(0,0,0,0.5)",
          textTransform: "uppercase",
          fontFamily: montserrat.style.fontFamily,
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          color: COLORS.PRIMARY_NAVY,
          fontFamily: montserrat.style.fontFamily,
          wordBreak: "break-word",
          mt: 0.5,
        }}
      >
        {value || "N/A"}
      </Box>
    </Grid>
  );

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            py: 5,
            px: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
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
              Review Information
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 16,
                color: "rgba(0, 0, 0, 0.5)",
                mt: 1,
              }}
            >
              Please verify your student details before proceeding.
            </Typography>
          </Box>

          <SignupStepper activeStep={1} />

          <Box sx={{ mt: 4 }}>
            {studentData.profileImage && (
              <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <Avatar
                  src={
                    (studentData.profileImage as any) instanceof File || (studentData.profileImage as any) instanceof Blob
                      ? URL.createObjectURL(studentData.profileImage as any)
                      : typeof studentData.profileImage === "string"
                        ? studentData.profileImage
                        : undefined
                  }
                  sx={{ width: 120, height: 120, boxShadow: 3 }}
                />
              </Box>
            )}

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: COLORS.PRIMARY_NAVY,
                fontFamily: roboto.style.fontFamily,
              }}
            >
              Personal Details
            </Typography>
            <Grid container spacing={1}>
              <DataRow
                label="Full Name"
                value={`${studentData.firstName} ${studentData.lastName}`}
              />
              <DataRow label="Email" value={studentData.email} />
              <DataRow label="Gender" value={studentData.gender} />
              <DataRow label="Grade" value={studentData.grade} />
              <DataRow label="Country" value={studentData.country?.name} />
              {studentData.state && (
                <DataRow label="State" value={studentData.state} />
              )}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: COLORS.PRIMARY_NAVY,
                fontFamily: roboto.style.fontFamily,
              }}
            >
              School Details
            </Typography>
            <Grid container spacing={1}>
              {studentData.board && (
                <DataRow label="Board" value={studentData.board.name} />
              )}
              {studentData.school && (
                <DataRow label="Institution" value={studentData.school.name} />
              )}
              {studentData.isdCode && (
                <DataRow label="ISD Code" value={studentData.isdCode} />
              )}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: COLORS.PRIMARY_NAVY,
                fontFamily: roboto.style.fontFamily,
              }}
            >
              Parent Details
            </Typography>
            <Grid container spacing={1}>
              <DataRow label="Father's Name" value={studentData.fatherName} />
              <DataRow label="Father's Email" value={studentData.fatherEmail} />
              <DataRow label="Father's Phone" value={studentData.fatherPhone} />
              <DataRow label="Father's Profession" value={studentData.fatherProfession} />
              <DataRow label="Mother's Name" value={studentData.motherName} />
              <DataRow label="Mother's Email" value={studentData.motherEmail} />
              <DataRow label="Mother's Phone" value={studentData.motherPhone} />
              <DataRow label="Mother's Profession" value={studentData.motherProfession} />
            </Grid>
          </Box>

          <Box sx={{ mt: 6, display: "flex", gap: 3 }}>
            <BeamButton
              fullWidth
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => router.back()}
              sx={{
                py: 2,
                borderRadius: "14px",
                fontWeight: 700,
                borderColor: COLORS.PRIMARY_NAVY,
                color: COLORS.PRIMARY_NAVY,
                "&:hover": {
                  borderColor: COLORS.ACCENT_TAN,
                  bgcolor: "rgba(209, 160, 84, 0.05)",
                },
              }}
            >
              Back to Edit
            </BeamButton>
            <BeamButton
              fullWidth
              variant="contained"
              endIcon={<CheckCircleOutline />}
              disabled={loading}
              onClick={handleCheckout}
              sx={{
                bgcolor: COLORS.ACCENT_TAN,
                color: COLORS.BLACK,
                py: 2,
                borderRadius: "14px",
                fontWeight: 800,
                fontSize: "1rem",
                "&:hover": {
                  bgcolor: "#B88A44",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={20} sx={{ color: COLORS.BLACK }} />
              ) : (
                "Verify & Confirm"
              )}
            </BeamButton>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default StudentReview;
