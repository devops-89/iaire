import { CircleOutlined, School, WorkspacePremium } from "@mui/icons-material";
import { Box, Card, Step, StepLabel, Stepper, Typography, Divider, LinearProgress, Stack } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";

interface TierprogressProps {
  data: { label: string }[];
  membershipTier?: string;
  tierProgressDetails?: any;
  role?: string;
}

const Tierprogress = ({
  data,
  membershipTier,
  tierProgressDetails,
  role,
}: TierprogressProps) => {
  const currentTier = membershipTier;

  // Map the current tier to its index in the levels array
  const currentTierIndex = data.findIndex(
    (val) => val.label.toUpperCase().replace(/\s+/g, "_") === currentTier
  );

  // The next step/tier being pursued (used for showing next tier requirements)
  const nextStepIndex = currentTierIndex === -1 ? 0 : currentTierIndex + 1;

  // Custom step icon rendering to highlight progress beautifully
  const CustomStepIcon = (props: any) => {
    const stepIdx = props.icon - 1;
    const isCurrentTier = stepIdx === currentTierIndex;
    if (isCurrentTier) {
      return <School sx={{ color: COLORS.PRIMARY_NAVY, fontSize: 22 }} />;
    }
    return <CircleOutlined sx={{ color: "rgba(0,0,0,0.25)", fontSize: 16 }} />;
  };

  // Find next tier progress details
  const nextTierName = nextStepIndex < data.length ? data[nextStepIndex]?.label : null;
  const nextTierKey = nextTierName?.toUpperCase().replace(/\s+/g, "_");

  const userRole = role || "SCHOOL_ADMIN";
  const progressList = tierProgressDetails?.[userRole] || tierProgressDetails?.SCHOOL_ADMIN;

  const nextTierProgress = progressList?.find(
    (p: any) => p.membershipTier === nextTierKey
  );

  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          borderRadius: "28px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.05)",
          overflow: "hidden",
          background: COLORS.WHITE,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Matching Premium Gradient Header */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.PRIMARY_BLUE} 100%)`,
            p: 4,
            color: COLORS.WHITE,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ zIndex: 2, position: "relative" }}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.15)",
                color: COLORS.WHITE,
                width: 56,
                height: 56,
                borderRadius: "50%",
              }}
            >
              <WorkspacePremium sx={{ fontSize: 32, color: "#FFD700" }} />
            </Stack>
            <Box>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  lineHeight: 1.2,
                }}
              >
                Membership Roadmap
              </Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: "0.85rem",
                  opacity: 0.8,
                  mt: 0.5,
                }}
              >
                Track your progress towards higher membership tiers.
              </Typography>
            </Box>
          </Stack>
          <School
            sx={{
              position: "absolute",
              right: -20,
              bottom: -20,
              fontSize: 160,
              color: "rgba(255,255,255,0.04)",
              transform: "rotate(-10deg)",
            }}
          />
        </Box>

        {/* Stepper Roadmap Container */}
        <Box sx={{ px: 4, pt: 4, pb: 0 }}>
          <Stepper orientation="vertical" activeStep={currentTierIndex}>
            {data.map((val, i) => {
              const isCurrent = currentTierIndex === i;
              return (
                <Step key={i}>
                  <StepLabel
                    StepIconComponent={CustomStepIcon}
                    slotProps={{
                      label: {
                        sx: {
                          fontSize: 15,
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: isCurrent ? 700 : 500,
                          color: isCurrent ? COLORS.PRIMARY_BLUE : "rgba(0, 0, 0, 0.55)",
                        },
                      },
                    }}
                  >
                    {val.label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        {/* Next Tier Requirements or Completion State */}
        <Box sx={{ px: 4, pb: 4, pt: 1 }}>
          {nextStepIndex >= data.length ? (
            <Box
              sx={{
                p: 2.5,
                bgcolor: "rgba(16, 185, 129, 0.06)",
                borderRadius: "16px",
                border: "1px solid rgba(16, 185, 129, 0.15)",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <WorkspacePremium sx={{ color: "#10B981", fontSize: 36 }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#065F46",
                    }}
                  >
                    Highest Tier Achieved!
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: "0.8rem",
                      color: "#047857",
                      mt: 0.5,
                      lineHeight: 1.4,
                    }}
                  >
                    Congratulations! Your institution has completed all requirements for all membership tiers.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ) : nextTierProgress && nextTierProgress.requirements?.length > 0 ? (
            <Box>
              <Divider sx={{ mb: 3, borderColor: "rgba(0, 0, 0, 0.06)" }} />
              
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: COLORS.PRIMARY_BLUE,
                  mb: 2,
                }}
              >
                Requirements for {nextTierName}
              </Typography>

              <Stack spacing={2}>
                {nextTierProgress.requirements.map((req: any, idx: number) => {
                  const isReqCompleted = req.current >= req.required;
                  const progressPercent = Math.min(
                    100,
                    Math.round((req.current / req.required) * 100)
                  );

                  return (
                    <Box
                      key={idx}
                      sx={{
                        p: 2,
                        bgcolor: "rgba(0, 0, 0, 0.015)",
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 0, 0, 0.03)",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{ mb: 1.5 }}
                      >
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: "rgba(0,0,0,0.7)",
                            lineHeight: 1.4,
                          }}
                        >
                          {req.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: isReqCompleted ? "#10B981" : COLORS.PRIMARY_NAVY,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {req.current} / {req.required}
                        </Typography>
                      </Stack>
                      
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <LinearProgress
                          variant="determinate"
                          value={progressPercent}
                          sx={{
                            flexGrow: 1,
                            height: 6,
                            borderRadius: 3,
                            bgcolor: "rgba(0, 0, 0, 0.05)",
                            "& .MuiLinearProgress-bar": {
                              bgcolor: isReqCompleted ? "#10B981" : COLORS.PRIMARY_NAVY,
                              borderRadius: 3,
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.4)",
                            minWidth: 35,
                            textAlign: "right",
                          }}
                        >
                          {progressPercent}%
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          ) : (
            nextTierName && (
              <Box>
                <Divider sx={{ mb: 2.5, borderColor: "rgba(0, 0, 0, 0.06)" }} />
                
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: COLORS.PRIMARY_BLUE,
                    mb: 1,
                  }}
                >
                  Requirements for {nextTierName}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "0.8rem",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  No automated requirements are specified for this membership tier.
                </Typography>
              </Box>
            )
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default Tierprogress;
