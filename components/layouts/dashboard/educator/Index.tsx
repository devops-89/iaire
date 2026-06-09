"use client";
import PlanCard from "@/components/widgets/PlanCard";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { Backdrop, Box, Typography } from "@mui/material";
import React, { useState } from "react";

const EducatorDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { educatorData } = useSignup();

  // const isMember =
  //   educatorData?.payments?.length > 0 &&
  //   educatorData?.payments.find(
  //     (v: any) => v.membership?.status === USER_STATUS.ACTIVE,
  //   );

  const { planData, planLoading } = useGetPlans({
    role: USER_ROLES.EDUCATOR_ADMIN,
  });
  const { makePayment } = useMakePayment();

  const createPayment = async (id: number) => {
    await makePayment({ planId: id });
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
        {children}
      </Box>
    </Box>
  );
};

export default EducatorDashboardLayout;
