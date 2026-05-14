"use client";
import PlanCard from "@/components/widgets/PlanCard";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { Backdrop, Box, Typography } from "@mui/material";
import React, { useState } from "react";

const EducatorDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { educatorData } = useSignup();

  const isMember = educatorData?.payments?.length > 0;

  const { planData, planLoading } = useGetPlans({
    role: USER_ROLES.EDUCATOR_ADMIN,
  });
  const { makePayment } = useMakePayment();

  const createPayment = async (id: number) => {
    await makePayment(id);
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Box
        sx={{
          ml: { xs: 0, md: "250px" },
          pt: "90px",
          pb: 4,
          px: { xs: 2, md: 4, lg: 6 },
          transition: "margin-left 0.3s ease",
        }}
      >
        <Backdrop
          open={!isMember}
          sx={{
            zIndex: 9999,
            color: "#000",
            "&.MuiBackdrop-root": {
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              ml: { xs: 0, md: "250px" },
              mt: "70px",
              backdropFilter: "blur(15px)",
              width: { xs: "100%", md: "calc(100% - 250px)" },
              height: "calc(100% - 70px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: 30, textAlign: "center", color: COLORS.WHITE }}
            >
              Your membership is not active
            </Typography>
            <Typography sx={{ color: COLORS.WHITE, fontSize: 18, mt: 1 }}>
              Activate your membership now to unlock full access to your
              educator dashboard and features.
            </Typography>
            {planData.map((val, i) => (
              <PlanCard
                name={val.name}
                currency={val.currency}
                price={val.price}
                billingCycle={val.billingCycle}
                limits={val.limits}
                id={val.id}
                createPayment={createPayment}
                loading={planLoading}
              />
            ))}
          </Box>
        </Backdrop>
        {children}
      </Box>
    </Box>
  );
};

export default EducatorDashboardLayout;
