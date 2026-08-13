"use client";
import PlanCard from "@/components/widgets/PlanCard";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import SignupStepper from "./SignupStepper";

const PaymentLayout = () => {
  const router = useRouter();
  const { data, institutionData, educatorData } = useSignup();

  const role =
    data?.role ||
    institutionData?.role ||
    educatorData?.role ||
    (typeof window !== "undefined" ? localStorage.getItem("role") : null);

  // console.log("role", role);

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
  console.log("plan Data", planData);

  // console.l;

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
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.05) 0%, rgba(209, 160, 84, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SignupStepper activeStep={2} />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }} margin="auto">
            {planData?.map((val, i) => (
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
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentLayout;
