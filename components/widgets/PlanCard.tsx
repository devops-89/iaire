import { BILLING_CYCLE, COLORS, CURRENCY, PLAN_LIMIT_TYPE } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import { PLAN_RESPONSE_PROPS } from "@/utils/type";
import { CheckCircleOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import React from "react";

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
    <Box sx={{ mt: 3, minHeight: 200, height: "100%" }}>
      <Card
        sx={{
          p: 4,
          borderRadius: "16px",
          mb: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          position: "relative",
          overflow: "visible",
        }}
      >
        <Grid container alignItems={"stretch"} spacing={4} sx={{ height: '100%' }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: montserrat.style.fontFamily,
                  mb: 1,
                }}
              >
                {name}
              </Typography>

              <Stack direction="row" alignItems="baseline" spacing={0.5}>
                <Typography
                  sx={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#0F172A",
                    fontFamily: montserrat.style.fontFamily,
                  }}
                >
                  {currency === CURRENCY.INR ? "₹" : "$"}
                  {price}
                </Typography>
                <Typography
                  sx={{ fontSize: 15, color: "#64748B", fontWeight: 500 }}
                >
                  / {billingCycle === BILLING_CYCLE.MONTHLY ? "mo" : "yr"}
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ mt: "auto", pt: 4 }}>
              {createPayment && (
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    background: COLORS.PRIMARY_NAVY,
                    borderRadius: "8px",
                    width: "100%",
                    color: COLORS.WHITE,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      background: COLORS.PRIMARY_NAVY,
                      opacity: 0.9,
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => createPayment?.(id)}
                >
                  {loading ? (
                    <CircularProgress sx={{ color: COLORS.WHITE }} size={24} />
                  ) : (
                    "Get Started"
                  )}
                </Button>
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <List sx={{ py: 0 }}>
              {limits.map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.75 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleOutline
                      sx={{
                        fontSize: 18,
                        color: COLORS.PRIMARY_NAVY,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 14,
                      color: "#475569",
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 500,
                    }}
                    primary={
                      item.key === PLAN_LIMIT_TYPE.MAX_STUDENTS
                        ? `Add up to ${item.value} Students`
                        : item.key === PLAN_LIMIT_TYPE.MAX_TEACHERS
                          ? `Add up to ${item.value} Teachers`
                          : item.key ===
                            PLAN_LIMIT_TYPE.APPROVE_NOMINEE_TEACHERS
                            ? `Nominate up to ${item.value} Teachers`
                            : item.key ===
                              PLAN_LIMIT_TYPE.MAX_SELF_NOMINATION_TEACHER
                              ? `Self-nominate up to ${item.value} times`
                              : item.key ===
                                PLAN_LIMIT_TYPE.MAX_INNOVATION_SUBMISSIONS
                                ? `Add up to ${item.value} Innovation Submissions`
                                : item.key ===
                                  PLAN_LIMIT_TYPE.MAX_RESEARCH_SUBMISSIONS
                                  ? `Add up to ${item.value} Research Submissions`
                                  : item.key ===
                                    PLAN_LIMIT_TYPE.STUDENT_MEMBERSHIP_CERTIFICATION
                                    ? `Student Membership Certification`
                                    : item.key ===
                                      PLAN_LIMIT_TYPE.IDEAS_INNOVATION_CASE_STUDIES_ACCESS
                                      ? `Ideas & Innovation Case Studies Access`
                                      : item.key ===
                                        PLAN_LIMIT_TYPE[
                                          "INNOVATION_&_RESEARCH_COMPETITIONS"
                                        ]
                                        ? `Innovation & Research Competitions Access`
                                        : item.key ===
                                          PLAN_LIMIT_TYPE[
                                            "SCHOLAR_DESIGNATIONS_&_FELLOWSHIPS"
                                          ]
                                          ? `Scholar Designations & Fellowships Access`
                                          : item.key ===
                                            PLAN_LIMIT_TYPE.STARTUP_PITCH_COMPETITIONS
                                            ? `Startup Pitch Competitions Access`
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
