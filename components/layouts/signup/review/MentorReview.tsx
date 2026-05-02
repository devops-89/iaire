"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Container,
  Divider,
  CircularProgress,
  Avatar,
  Chip,
} from "@mui/material";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import SignupStepper from "@/components/layouts/signup/SignupStepper";
import { ArrowBack, CheckCircleOutline } from "@mui/icons-material";
import useSnackbar from "@/store/useSnackbar";
import { useModal } from "@/store/useModal";
import VerifyOtp from "@/components/modals/common/VerifyOtp";
import { useMentorSignup } from "@/hooks/mentor/useMentorSignup";
import { COUNTRIES } from "@/utils/constant";

const MentorReview = () => {
  const router = useRouter();
  const { educatorData } = useSignup();
  const { showModal } = useModal();
  const { setSnackbar } = useSnackbar();
  const { signupTeacher, loading } = useMentorSignup();

  useEffect(() => {
    if (!educatorData && typeof window !== "undefined") {
      router.push("/signup?role=mentor");
    }
  }, [educatorData, router]);

  if (!educatorData) {
    return null;
  }

  const handleCheckout = async () => {
    const code = COUNTRIES.find((c) => c.code === educatorData?.country?.code);

    try {
      const rawData = {
        email: educatorData?.email,
        countryCode: code?.phone,
        phone: educatorData?.phone,
        firstName: educatorData?.firstName,
        lastName: educatorData?.lastName,
        password: educatorData?.password,
        boardId: educatorData?.board?.id,
        schoolId: educatorData?.school?.id,
        profileImage: educatorData?.profileImage,
        countryId: educatorData?.country?.id,
        primarySubjects: educatorData?.primarySubjects,
        gender: educatorData?.gender,
        experienceYears: String(educatorData?.experience),
        ...(educatorData?.country?.code === "US" && {
          isdCode: educatorData?.isdCode,
        }),
      };

      const data = Object.fromEntries(
        Object.entries(rawData).filter(
          ([_, v]) => v !== null && v !== undefined && v !== "",
        ),
      );

      await signupTeacher(data as any);
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
              Please verify your mentor details before proceeding.
            </Typography>
          </Box>

          <SignupStepper activeStep={1} />

          <Box sx={{ mt: 4 }}>
            {typeof File !== "undefined" &&
              educatorData.profileImage &&
              educatorData.profileImage instanceof File && (
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Avatar
                    src={URL.createObjectURL(educatorData.profileImage as File)}
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
                value={`${educatorData.firstName} ${educatorData.lastName}`}
              />
              <DataRow label="Email" value={educatorData.email} />
              <DataRow label="Phone" value={educatorData.phone} />
              <DataRow label="Gender" value={educatorData.gender} />
              <DataRow
                label="Experience"
                value={`${educatorData.experience} Years`}
              />
              <DataRow label="Country" value={educatorData.country?.name} />
              {educatorData.state && (
                <DataRow label="State" value={educatorData.state} />
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
              Professional Details
            </Typography>
            <Grid container spacing={1}>
              {educatorData.board && (
                <DataRow label="Board" value={educatorData.board.name} />
              )}
              {educatorData.school && (
                <DataRow label="Institution" value={educatorData.school.name} />
              )}
              <DataRow
                label="Primary Subjects"
                value={
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {educatorData.primarySubjects?.length
                      ? educatorData.primarySubjects.map(
                          (sub: string, index: number) => (
                            <Chip
                              key={index}
                              label={sub}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(209, 160, 84, 0.15)",
                                color: COLORS.PRIMARY_NAVY,
                                fontWeight: 600,
                                borderRadius: "8px",
                              }}
                            />
                          ),
                        )
                      : "N/A"}
                  </Box>
                }
              />
              {educatorData.isdCode && (
                <DataRow label="ISD Code" value={educatorData.isdCode} />
              )}
            </Grid>
          </Box>

          <Box sx={{ mt: 6, display: "flex", gap: 3 }}>
            <Button
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
            </Button>
            <Button
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
                <CircularProgress sx={{ color: COLORS.BLACK }} />
              ) : (
                "Verify & Confirm"
              )}
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default MentorReview;
