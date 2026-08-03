"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Grid,
  Typography,
  Card,
  Container,
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
import { useMentorSignup } from "@/hooks/mentor/useMentorSignup";
import BeamButton from "@/components/widgets/BeamButton";
import Image from "next/image";
import logo from "@/images/logo/iaire_logo.png";

const SectionHeader = ({ title }: { title: string }) => (
  <Box sx={{ mt: 0.8, mb: 1 }}>
    <Typography
      sx={{
        color: "#2563EB",
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: 1,
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&::after": {
          content: '""',
          flex: 1,
          height: "1px",
          backgroundColor: "#E2E8F0",
        },
      }}
    >
      {title}
    </Typography>
  </Box>
);

const DetailBox = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => {
  if (!value || value === "N/A" || value === "") return null;
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={{
          bgcolor: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          p: 1.2,
          height: "100%",
          boxSizing: "border-box",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "#2563EB",
            bgcolor: "#F0F9FF",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.68rem",
            fontWeight: 600,
            color: "#64748B",
            textTransform: "uppercase",
            fontFamily: montserrat.style.fontFamily,
            letterSpacing: 0.6,
            mb: 0.3,
          }}
        >
          {label}
        </Typography>
        <Box
          sx={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "#0F172A",
            fontFamily: montserrat.style.fontFamily,
            wordBreak: "break-word",
            lineHeight: 1.2,
          }}
        >
          {value}
        </Box>
      </Box>
    </Grid>
  );
};

const MentorReview = () => {
  const router = useRouter();
  const { educatorData: rawEducatorData } = useSignup();
  const educatorData = rawEducatorData as any;
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
    try {
      const payload: any = {
        firstName: educatorData.firstName,
        lastName: educatorData.lastName,
        email: educatorData.email,
        phone: educatorData.phone,
        password: educatorData.password,
        gender: educatorData.gender,
        countryId: educatorData.country?.id,
        state: educatorData.state,
        city: educatorData.city,
        address: educatorData.address,
        zipCode: educatorData.postalCode,
        isdCode: educatorData.isdCode,
        profileImage: educatorData.profileImage,
        experienceYear: educatorData.experienceYear || educatorData.experienceYears,
        qualification: educatorData.qualification,
        organization: educatorData.organization,
        bio: educatorData.bio,
        boardId: educatorData.board?.id || educatorData.boardId,
        schoolId: educatorData.school?.id || educatorData.schoolId,
      };

      const cleanedPayload = Object.fromEntries(
        Object.entries(payload).filter(
          ([key, v]) =>
            key !== "confirmPassword" &&
            key !== "role" &&
            v !== null &&
            v !== undefined &&
            v !== "",
        ),
      );

      await signupTeacher(cleanedPayload as any);
    } catch (error) {
      setSnackbar("Something went wrong during educator registration", "error");
    }
  };

  const getProfileImageSrc = () => {
    const val = educatorData?.profileImage as any;
    if (!val) return undefined;
    if (typeof val === "string") return val;
    if (typeof Blob !== "undefined" && (val instanceof Blob || val instanceof File)) {
      return URL.createObjectURL(val);
    }
    return undefined;
  };

  const boardName =
    typeof educatorData.board === "string"
      ? educatorData.board
      : educatorData.board?.name;

  const schoolName =
    typeof educatorData.school === "string"
      ? educatorData.school
      : educatorData.school?.name;

  const hasSchoolDetails =
    Boolean(boardName) || Boolean(schoolName) || Boolean(educatorData.isdCode);

  const hasAcademicInfo =
    Boolean(educatorData.qualification) ||
    Boolean(educatorData.experienceYear || educatorData.experienceYears) ||
    Boolean(educatorData.organization) ||
    Boolean(educatorData.bio);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        py: { xs: 1.5, md: 2 },
        px: { xs: 2, md: 3 },
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
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          px: { xs: 0, md: 2 },
        }}
      >
        {/* Navigation Top Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1.5,
            flexShrink: 0,
          }}
        >
          <Box
            onClick={() => router.back()}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.12)",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
              borderRadius: "50px",
              px: 2,
              py: 0.6,
              color: "#475569",
              fontFamily: montserrat.style.fontFamily,
              fontSize: 12,
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
            <ArrowBack sx={{ fontSize: 15 }} /> Back to Edit
          </Box>

          <Chip
            label="STEP 2 OF 2 • REVIEW"
            size="small"
            sx={{
              bgcolor: "rgba(59, 130, 246, 0.08)",
              color: "#1D4ED8",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: 1,
              px: 1,
            }}
          />
        </Box>

        {/* 2-Column Split Grid */}
        <Grid
          container
          spacing={2.5}
          alignItems="stretch"
          sx={{ flex: 1, minHeight: 0, height: "calc(100vh - 85px)" }}
        >
          {/* Left Column: Avatar & Summary Profile Card */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ height: "100%" }}>
            <Card
              sx={{
                height: "100%",
                py: 3,
                px: 2.5,
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                boxShadow: "0 15px 35px -10px rgba(15, 23, 42, 0.08)",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #2563EB 0%, #D97706 100%)",
                },
              }}
            >
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Box sx={{ mb: 1.5 }}>
                  <Image
                    src={logo}
                    alt="IAIRE Logo"
                    height={28}
                    width={105}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Avatar
                  src={getProfileImageSrc()}
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 1.5,
                    border: "3px solid #2563EB",
                    boxShadow: "0 8px 24px rgba(37, 99, 235, 0.2)",
                  }}
                />

                <Typography
                  sx={{
                    color: "#0F172A",
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: 800,
                    fontSize: 20,
                    mb: 0.3,
                    lineHeight: 1.2,
                  }}
                >
                  {`${educatorData.firstName || ""} ${educatorData.lastName || ""}`.trim()}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: 12,
                    color: "#64748B",
                    mb: 1.5,
                    wordBreak: "break-all",
                  }}
                >
                  {educatorData.email}
                </Typography>

                <Chip
                  label="EDUCATOR / MENTOR"
                  size="small"
                  sx={{
                    bgcolor: "rgba(37, 99, 235, 0.1)",
                    color: "#2563EB",
                    border: "1px solid rgba(37, 99, 235, 0.3)",
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 9,
                    letterSpacing: 0.8,
                    px: 1,
                  }}
                />
              </Box>

              <Box sx={{ width: "100%", mt: 2 }}>
                <SignupStepper activeStep={1} />
                <BeamButton
                  fullWidth
                  variant="outlined"
                  startIcon={<ArrowBack />}
                  onClick={() => router.back()}
                  sx={{
                    mt: 2,
                    height: "42px",
                    bgcolor: "#F8FAFC",
                    borderColor: "#CBD5E1",
                    color: "#475569",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "none",
                    fontFamily: montserrat.style.fontFamily,
                    "&:hover": {
                      borderColor: "#2563EB",
                      bgcolor: "#F0F9FF",
                      color: "#2563EB",
                    },
                  }}
                >
                  Back to Edit
                </BeamButton>
              </Box>
            </Card>
          </Grid>

          {/* Right Column: Detailed Breakdown Card */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ height: "100%" }}>
            <Card
              sx={{
                height: "100%",
                py: { xs: 2.5, md: 3 },
                px: { xs: 2.5, md: 4 },
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 15px 35px -10px rgba(15, 23, 42, 0.08)",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #D97706 0%, #059669 100%)",
                },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
                <Box sx={{ mb: 1.5, flexShrink: 0 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#0F172A",
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 800,
                      fontSize: { xs: 20, md: 24 },
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      mb: 0.3,
                    }}
                  >
                    Review Information
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Please verify your educator details before completing registration.
                  </Typography>
                </Box>

                {/* Scrollable details */}
                <Box
                  sx={{
                    flex: 1,
                    overflowY: "auto",
                    pr: 0.5,
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": { width: 4 },
                    "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 2 },
                  }}
                >
                  <Grid container spacing={1.5}>
                    <Grid size={12}>
                      <SectionHeader title="Personal Details" />
                    </Grid>
                    <DetailBox
                      label="Full Name"
                      value={`${educatorData.firstName || ""} ${educatorData.lastName || ""}`.trim()}
                    />
                    <DetailBox label="Email Address" value={educatorData.email} />
                    <DetailBox label="Phone Number" value={educatorData.phone} />
                    <DetailBox label="Gender" value={educatorData.gender} />
                    <DetailBox label="Country" value={educatorData.country?.name} />
                    <DetailBox label="State / Province" value={educatorData.state} />
                    <DetailBox label="City" value={educatorData.city} />

                    {hasSchoolDetails && (
                      <>
                        <Grid size={12}>
                          <SectionHeader title="School & Education Details" />
                        </Grid>
                        <DetailBox label="Education Board" value={boardName} />
                        <DetailBox label="Institution / School" value={schoolName} />
                        <DetailBox label="ISD Code" value={educatorData.isdCode} />
                      </>
                    )}

                    {hasAcademicInfo && (
                      <>
                        <Grid size={12}>
                          <SectionHeader title="Academic & Professional" />
                        </Grid>
                        <DetailBox label="Qualification" value={educatorData.qualification} />
                        <DetailBox
                          label="Years of Experience"
                          value={
                            (educatorData.experienceYear || educatorData.experienceYears)
                              ? `${educatorData.experienceYear || educatorData.experienceYears} Years`
                              : null
                          }
                        />
                        <DetailBox label="Current Organization" value={educatorData.organization} />
                        <DetailBox label="Bio Summary" value={educatorData.bio} />
                      </>
                    )}
                  </Grid>
                </Box>
              </Box>

              {/* Submit Action Button pinned at bottom */}
              <Box sx={{ mt: 2, flexShrink: 0 }}>
                <BeamButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  endIcon={!loading && <CheckCircleOutline />}
                  disabled={loading}
                  onClick={handleCheckout}
                  sx={{
                    height: "46px",
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
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    "Verify & Confirm Registration"
                  )}
                </BeamButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MentorReview;
