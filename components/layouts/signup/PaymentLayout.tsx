"use client";
import { useSignup } from "@/store/useSignup";
import {
  BILLING_CYCLE,
  COLORS,
  CURRENCY,
  PLAN_LIMIT_TYPE,
  USER_ROLES,
} from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { paymentValidationSchema } from "@/utils/validationSchema";
import {
  CreditCard,
  CalendarToday,
  Lock,
  VerifiedUser,
  Info,
  ArrowForward,
  Person,
  Circle,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Divider,
  Skeleton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import SignupStepper from "./SignupStepper";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { PLAN_LIMITS_DATA } from "@/utils/constant";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import PlanCard from "@/components/widgets/PlanCard";

const PaymentLayout = () => {
  const router = useRouter();
  const { data, institutionData, educatorData } = useSignup();

  const role = data?.role || institutionData?.role || educatorData?.role;

  let finalRole = role;

  if (role === USER_ROLES.INSTITUTION) {
    finalRole = USER_ROLES.SCHOOL;
  }
  if (role === USER_ROLES.EDUCATOR) {
    finalRole = USER_ROLES.TEACHER;
  }

  const { planData, planLoading } = useGetPlans({ role: finalRole || "" });
  // console.log("plan Data", planData);

  // console.l;

  const { loading, makePayment } = useMakePayment();

  const createPayment = async (id: string | number) => {
    await makePayment(id);
  };

  const skipPayment = () => {
    if (role === USER_ROLES?.INSTITUTION) {
      router.push(`/dashboard/${USER_ROLES?.INSTITUTION}`);
    }
    if (role === USER_ROLES?.EDUCATOR) {
      router.push(`/dashboard/${USER_ROLES?.EDUCATOR}`);
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
          <Grid size={8} margin="auto">
            {planData?.map((val, i) => (
              // <Card sx={{ p: 3, borderRadius: "20px", mb: 2 }} key={i}>
              //   <Grid container alignItems={"center"} spacing={5}>
              //     <Grid size={6}>
              //       <Typography
              //         sx={{
              //           fontSize: 20,
              //           fontWeight: 500,
              //           fontFamily: roboto.style.fontFamily,
              //         }}
              //       >
              //         {val.name}
              //       </Typography>

              //       <Stack>
              //         <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
              //           {val.currency === CURRENCY.INR ? "₹" : "$"} {val?.price}{" "}
              //           /
              //           {val.billingCycle === BILLING_CYCLE.MONTHLY
              //             ? "mo"
              //             : "yr"}
              //         </Typography>
              //       </Stack>
              //       <Stack sx={{ mt: 2 }} spacing={2}>
              //         <Button
              //           sx={{
              //             fontFamily: roboto.style.fontFamily,
              //             backgroundColor: COLORS.PRIMARY_NAVY,
              //             borderRadius: "20px",
              //             width: "100%",
              //             color: COLORS.WHITE,
              //           }}
              //           onClick={() => createPayment(val.id)}
              //         >
              //           {loading ? (
              //             <CircularProgress
              //               sx={{ color: COLORS.WHITE, fontSize: 10 }}
              //             />
              //           ) : (
              //             "Make Payment"
              //           )}
              //         </Button>
              //         <Button
              //           sx={{
              //             border: "1px solid" + COLORS.PRIMARY_NAVY,
              //             borderRadius: "20px",
              //             color: COLORS.PRIMARY_NAVY,
              //             width: "100%",
              //             fontFamily: roboto.style.fontFamily,
              //           }}
              //           onClick={skipPayment}
              //         >
              //           Skip Now & Pay Later
              //         </Button>
              //       </Stack>
              //     </Grid>
              //     <Grid size={6}>
              //       <List>
              //         {val.limits.map((item, index) => (
              //           <ListItem key={index}>
              //             <ListItemAvatar sx={{ minWidth: 20 }}>
              //               <Circle
              //                 sx={{
              //                   fontSize: 10,
              //                   color: COLORS.PRIMARY_NAVY,
              //                 }}
              //               />
              //             </ListItemAvatar>
              //             <ListItemText
              //               primary={
              //                 item.key === PLAN_LIMIT_TYPE.MAX_STUDENTS
              //                   ? `You can Add upto ${item.value} Students`
              //                   : item.key === PLAN_LIMIT_TYPE.MAX_TEACHERS
              //                     ? `You can Add upto ${item.value} Teachers`
              //                     : item.key ===
              //                         PLAN_LIMIT_TYPE.APPROVE_NOMINEE_TEACHERS
              //                       ? `You can Nominate upto ${item.value} Teachers`
              //                       : ""
              //               }
              //             />
              //           </ListItem>
              //         ))}
              //       </List>
              //     </Grid>
              //   </Grid>
              // </Card>
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
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentLayout;
