"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Container } from "@mui/material";
import { useSignup } from "@/store/useSignup";
import { useSchoolSignup } from "@/hooks/school/useSignup";
import { InstitutionInfo } from "@/utils/type";
import {
  ReviewTopNav,
  InstitutionSummaryCard,
  InstitutionReviewCard,
} from "./institution";

const InstitutionReview = () => {
  const router = useRouter();
  const { institutionData } = useSignup();
  const { createSchool, loading } = useSchoolSignup();

  useEffect(() => {
    if (!institutionData && typeof window !== "undefined") {
      router.push("/signup?role=institution");
    }
  }, [institutionData, router]);

  if (!institutionData) {
    return null;
  }

  const handleCheckout = async () => {
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
      contactPersonName: institutionData?.contactPersonName,
      contactPersonEmail: institutionData?.contactPersonEmail,
      contactPersonPhone: institutionData?.contactPersonPhone,
    };

    await createSchool(schoolData as unknown as InstitutionInfo);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)",
        height: { xs: "auto", md: "100vh" },
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: { xs: "auto", md: "hidden" },
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
        <ReviewTopNav onBack={() => router.back()} />

        <Grid
          container
          spacing={2.5}
          alignItems="stretch"
          sx={{
            flex: 1,
            minHeight: 0,
            height: { xs: "auto", md: "calc(100vh - 85px)" },
          }}
        >
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ height: { xs: "auto", md: "100%" } }}
          >
            <InstitutionSummaryCard
              institutionData={institutionData}
              onBack={() => router.back()}
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{ height: { xs: "auto", md: "100%" } }}
          >
            <InstitutionReviewCard
              institutionData={institutionData}
              loading={loading}
              onConfirm={handleCheckout}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InstitutionReview;
