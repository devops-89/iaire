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
} from "@mui/material";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import SignupStepper from "@/components/layouts/signup/SignupStepper";
import { ArrowBack, Payment } from "@mui/icons-material";
import { useSchoolSignup } from "@/hooks/school/useSignup";
import useSnackbar from "@/store/useSnackbar";
import { useModal } from "@/store/useModal";
import VerifyOtp from "@/components/modals/common/VerifyOtp";
import { InstitutionInfo } from "@/utils/type";

const ReviewPage = () => {
  const router = useRouter();
  const { institutionData } = useSignup();
  const { showModal } = useModal();
  const { createSchool, loading } = useSchoolSignup();
  const { setSnackbar } = useSnackbar();

  useEffect(() => {
    if (!institutionData && typeof window !== "undefined") {
      router.push("/signup?role=institution");
    }
  }, [institutionData, router]);

  if (!institutionData) {
    return null;
  }
  console.log("isnt", institutionData);
  const handleCheckout = async () => {
    // try {

    const schoolData = {
      schoolName: institutionData.institutionName,
      principalName: institutionData.principalName,
      email: institutionData.email,
      phoneNumber: institutionData.phone,
      website: institutionData.website,
      countryId: institutionData.country?.id,
      addressLine1: institutionData.addressLine1,
      addressLine2: institutionData.addressLine2,
      city: institutionData.city,
      state: institutionData.state,
      zipCode: institutionData.postalCode,
      isdCode: institutionData.isd,
      boardId:
        typeof institutionData?.affiliationType === "string"
          ? undefined
          : institutionData?.affiliationType?.id,
      affiliationNumber: institutionData.affiliationNumber,
      registrationYear: institutionData?.registrationYear,
      password: institutionData?.password,
      affiliationCertificate: institutionData?.affiliationCertificate,
    };
    try {
      const data = await createSchool(schoolData as unknown as InstitutionInfo);
      showModal(<VerifyOtp email={institutionData?.email} />);
    } catch (error) {
      setSnackbar("Something went wrong", "error");
      console.log(error);
    }
  };

  const DataRow = ({ label, value }: { label: string; value: any }) => (
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
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          color: COLORS.PRIMARY_NAVY,
          fontFamily: montserrat.style.fontFamily,
          wordBreak: "break-word",
        }}
      >
        {value || "N/A"}
      </Typography>
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
              Please verify your institution details before proceeding to
              payment.
            </Typography>
          </Box>

          <SignupStepper activeStep={1} />

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: COLORS.PRIMARY_NAVY,
                fontFamily: roboto.style.fontFamily,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Basic Details
            </Typography>
            <Grid container spacing={1}>
              <DataRow
                label="Institution Name"
                value={institutionData.institutionName}
              />
              <DataRow
                label="Principal Name"
                value={institutionData.principalName}
              />
              <DataRow label="Email" value={institutionData.email} />
              <DataRow label="Phone" value={institutionData.phone} />
              <DataRow label="Website" value={institutionData.website} />
              <DataRow label="Country" value={institutionData.country?.name} />
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
              Address Information
            </Typography>
            <Grid container spacing={1}>
              <DataRow
                label="Address Line 1"
                value={institutionData.addressLine1}
              />
              <DataRow
                label="Address Line 2"
                value={institutionData.addressLine2}
              />
              <DataRow label="City" value={institutionData.city} />
              <DataRow label="State" value={institutionData.state} />
              <DataRow label="Postal Code" value={institutionData.postalCode} />
            </Grid>

            {institutionData.isd && (
              <>
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
                  Regional details
                </Typography>
                <Grid container spacing={1}>
                  <DataRow label="ISD" value={institutionData.isd} />
                </Grid>
              </>
            )}

            {(institutionData.affiliationType ||
              institutionData.affiliationNumber) && (
              <>
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
                  Affiliation details
                </Typography>
                <Grid container spacing={1}>
                  <DataRow
                    label="Board"
                    value={
                      typeof institutionData?.affiliationType === "string"
                        ? institutionData.affiliationType
                        : institutionData?.affiliationType?.name || "N/A"
                    }
                  />
                  <DataRow
                    label="Affiliation Number"
                    value={institutionData.affiliationNumber}
                  />
                </Grid>
              </>
            )}
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
              endIcon={<Payment />}
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

export default ReviewPage;
