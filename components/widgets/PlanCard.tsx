import { BILLING_CYCLE, COLORS, CURRENCY, PLAN_LIMIT_TYPE } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { PLAN_RESPONSE_PROPS } from "@/utils/type";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography} from "@mui/material";
import React from "react";
import BeamButton from "@/components/widgets/BeamButton";

interface PLAN_PROPS {
  name: string;
  currency: string;
  price: number;
  billingCycle: string;
  limits: { key: string; value: number }[];
  id: number;
  createPayment?: (id: number) => void;
  skipPayment?: () => void;
  loading?: boolean;
  canSkip?: boolean;
}

const PlanCard = ({
  name,
  currency,
  price,
  billingCycle,
  limits,
  id,
  createPayment,
  skipPayment,
  loading,
  canSkip,
}: PLAN_PROPS) => {
  return (
    <Box sx={{ mt: 3, minHeight: 200 }}>
      <Card sx={{ p: 3, borderRadius: "20px", mb: 2 }}>
        <Grid container alignItems={"center"} spacing={5}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                fontFamily: roboto.style.fontFamily,
              }}
            >
              {name}
            </Typography>

            <Stack>
              <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                {currency === CURRENCY.INR ? "₹" : "$"} {price} /
                {billingCycle === BILLING_CYCLE.MONTHLY ? "mo" : "yr"}
              </Typography>
            </Stack>
            <Stack sx={{ mt: 2 }} spacing={2}>
              {createPayment && (
                <BeamButton
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    borderRadius: "20px",
                    width: "100%",
                    color: COLORS.WHITE,
                  }}
                  onClick={() => createPayment?.(id)}
                >
                  {loading ? (
                    <CircularProgress
                      sx={{ color: COLORS.WHITE, fontSize: 10 }}
                    />
                  ) : (
                    "Make Payment"
                  )}
                </BeamButton>
              )}
              {canSkip && (
                <BeamButton
                  sx={{
                    border: "1px solid" + COLORS.PRIMARY_NAVY,
                    borderRadius: "20px",
                    color: COLORS.PRIMARY_NAVY,
                    width: "100%",
                    fontFamily: roboto.style.fontFamily,
                  }}
                  onClick={() => skipPayment?.()}
                >
                  Skip Now & Pay Later
                </BeamButton>
              )}
            </Stack>
          </Grid>
          <Grid size={6}>
            <List>
              {limits.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar sx={{ minWidth: 20 }}>
                    <Circle
                      sx={{
                        fontSize: 10,
                        color: COLORS.PRIMARY_NAVY,
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      item.key === PLAN_LIMIT_TYPE.MAX_STUDENTS
                        ? `You can Add upto ${item.value} Students`
                        : item.key === PLAN_LIMIT_TYPE.MAX_TEACHERS
                          ? `You can Add upto ${item.value} Teachers`
                          : item.key ===
                              PLAN_LIMIT_TYPE.APPROVE_NOMINEE_TEACHERS
                            ? `You can Nominate upto ${item.value} Teachers`
                            : item.key ===
                                PLAN_LIMIT_TYPE.MAX_SELF_NOMINATION_TEACHER
                              ? `You can Nominate Self upto ${item.value} times `
                              : item.key ===
                                  PLAN_LIMIT_TYPE.MAX_INNOVATION_SUBMISSIONS
                                ? `You can Add upto ${item.value} Innovation Submissions`
                                : item.key ===
                                    PLAN_LIMIT_TYPE.MAX_RESEARCH_SUBMISSIONS
                                  ? `You can Add upto ${item.value} Research Submissions`
                                  : ""
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default PlanCard;
