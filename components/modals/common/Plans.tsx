import PlanCard from "@/components/widgets/PlanCard";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import { COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_semiBold } from "@/utils/fonts";
import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

const Plans = ({ role }: { role: string }) => {
  const { planData, planLoading } = useGetPlans({ role: role });

  const { makePayment } = useMakePayment();

  const createPayment = async (id: number) => {
    await makePayment({ planId: id });
  };

  return (
    <Box sx={{ width: 800 }}>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
          color: COLORS.PRIMARY_NAVY,
          fontFamily: aloeveraDisplay_medium.style.fontFamily,
        }}
      >
        Select Your Plan
      </Typography>
      {planLoading ? (
        <Skeleton variant="rectangular" height={100} width="100%" />
      ) : (
        planData?.map((val, i) => (
          <PlanCard
            name={val.name}
            currency={val.currency}
            price={val.price}
            billingCycle={val.billingCycle}
            limits={val.limits}
            id={val.id}
            createPayment={createPayment}
            key={i}
          />
        ))
      )}
    </Box>
  );
};

export default Plans;
