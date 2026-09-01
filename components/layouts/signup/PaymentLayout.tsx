"use client";
import PlanCard from "@/components/widgets/PlanCard";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import SignupStepper from "./SignupStepper";
import { montserrat } from "@/utils/fonts";

const PaymentLayoutContent = () => {
  const router = useRouter();
  const { data, institutionData, educatorData } = useSignup();
  const searchParams = useSearchParams();
  const urlRole = searchParams?.get("role");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const role =
    urlRole ||
    data?.role ||
    institutionData?.role ||
    educatorData?.role ||
    (mounted ? localStorage.getItem("role") : null);

  let finalRole = role;

  if (role === USER_ROLES.INSTITUTION) {
    finalRole = USER_ROLES.SCHOOL;
  }
  if (role === USER_ROLES.EDUCATOR) {
    finalRole = USER_ROLES.TEACHER;
  }
  if (role === USER_ROLES.STUDENT) {
    finalRole = USER_ROLES.STUDENT;
  }

  const { planData, planLoading } = useGetPlans({ role: finalRole || "" });

  const { loading, makePayment } = useMakePayment();

  const createPayment = async (id: string | number) => {
    await makePayment({ planId: id });
  };

  const skipPayment = () => {
    if (role === USER_ROLES?.INSTITUTION) {
      router.push(`/dashboard/institution`);
    }
    if (role === USER_ROLES?.EDUCATOR) {
      router.push(`/dashboard/educator`);
    }
    if (role === USER_ROLES?.STUDENT) {
      router.push(`/dashboard/student`);
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: 6 }}>
          <SignupStepper activeStep={2} lightText={true} />
        </Box>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 28, md: 36 },
              color: "#F8FAFC",
              mb: 1,
            }}
          >
            Choose Your Plan
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 14, md: 16 },
              color: "#94A3B8",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Select the perfect plan to unlock all features and accelerate your
            journey with us.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {planData?.map((val, i) => (
            <Grid size={{ xs: 12, md: 8, lg: 6 }} key={val.id}>
              <PlanCard
                name={val.name}
                currency={val.currency}
                price={val.price}
                billingCycle={val.billingCycle}
                limits={val.limits}
                id={val.id}
                createPayment={createPayment}
                skipPayment={skipPayment}
                loading={loading}
                canSkip={true}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const PaymentLayout = () => {
  return (
    <Suspense
      fallback={<Box sx={{ minHeight: "100vh", bgcolor: "#0F172A" }} />}
    >
      <PaymentLayoutContent />
    </Suspense>
  );
};

export default PaymentLayout;
