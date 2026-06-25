"use client";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  School,
  AirplanemodeActive,
  CheckCircle,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
  StepConnector,
  stepConnectorClasses,
  styled,
  Stack,
} from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import { useGetAllUser } from "@/hooks/common/useGetAllUser";

const DottedConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    marginLeft: 12,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "rgba(0,0,0,0.15)",
    borderLeftStyle: "dotted",
    borderLeftWidth: 3,
    minHeight: 35,
  },
}));

const FlightStepIcon = (props: { active?: boolean; completed?: boolean; icon: React.ReactNode }) => {
  const { active, completed, icon } = props;

  if (Number(icon) === 4) {
    return (
      <AirplanemodeActive
        sx={{
          color: (active || completed) ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.25)",
          fontSize: 32,
          transform: "rotate(0deg)", // Points up
          ml: "-2px",
          filter: (active || completed) ? `drop-shadow(0 0 8px ${COLORS.PRIMARY_NAVY}44)` : "none", // Premium glow
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1.5px solid ${ (active || completed) ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.1)" }`,
        backgroundColor: "rgba(255,255,255,0.8)",
        ml: "8px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `1px solid ${ (active || completed) ? `${COLORS.PRIMARY_NAVY}22` : "rgba(0,0,0,0.05)" }`,
        },
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor:
            (active || completed) ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.2)",
        }}
      />
    </Box>
  );
};

const WelcomeBanner = () => {
  const { institutionData } = useSignup();

  // Fetch school-level counts from API hooks
  const { innovationData, fetchInnovationList } = useGetAllInnovation();
  const { researchData, fetchResearchData } = useGetAllResearch();
  const { userData: teachersData, fetchUserData: fetchTeachers } = useGetAllUser();

  useEffect(() => {
    fetchInnovationList();
    fetchResearchData();

    if (institutionData?.school?.id) {
      fetchTeachers({
        role: USER_ROLES.TEACHER,
        schoolId: institutionData.school.id,
      } as any);
    }
  }, [institutionData]);

  const numInnovations = innovationData?.length || 0;
  const numResearch = researchData?.length || 0;
  const numEducators = teachersData?.data?.length || 0;

  // Compute active membership status
  const isMember =
    ((institutionData?.payments?.length ?? 0) > 0 &&
      institutionData?.payments?.some(
        (v: any) => v.membership?.status?.toUpperCase() === "ACTIVE",
      )) ??
    false;

  // Dynamic Gamification of Institution Status / Progression
  let currentTier = "Institutional Member";
  let nextTier = "Certified Institutional Member";
  let progressPercent = 0;
  let activeStep = 0;

  // Level thresholds
  const isCertifiedEligible = numEducators >= 2;
  const isAssociateEligible = isCertifiedEligible && numInnovations >= 3 && numResearch >= 3;
  const isFellowEligible = isCertifiedEligible && numEducators >= 4 && numInnovations > 5 && numResearch > 5;

  if (isFellowEligible) {
    currentTier = "Fellow Institution";
    nextTier = "Max Tier Achieved";
    progressPercent = 100;
    activeStep = 3;
  } else if (isAssociateEligible) {
    currentTier = "Associate Fellow Institution";
    nextTier = "Fellow Institution";
    const met1 = numEducators >= 4 ? 1 : 0;
    const met2 = numInnovations > 5 ? 1 : 0;
    const met3 = numResearch > 5 ? 1 : 0;
    progressPercent = Math.round(((met1 + met2 + met3) / 3) * 100);
    activeStep = 2;
  } else if (isCertifiedEligible) {
    currentTier = "Certified Institutional Member";
    nextTier = "Associate Fellow Institution";
    const met1 = numInnovations >= 3 ? 1 : 0;
    const met2 = numResearch >= 3 ? 1 : 0;
    progressPercent = Math.round(((met1 + met2) / 2) * 100);
    activeStep = 1;
  } else {
    currentTier = "Institutional Member";
    nextTier = "Certified Institutional Member";
    const met1 = isMember ? 1 : 0;
    const met2 = numEducators >= 2 ? 1 : 0;
    progressPercent = Math.round(((met1 + met2) / 2) * 100);
    activeStep = 0;
  }

  // Next Tier checklist definitions
  let checklist: { text: string; met: boolean }[] = [];
  if (currentTier === "Institutional Member") {
    checklist = [
      { text: "Admission into the Academy & active dues", met: isMember },
      { text: "Maintain not fewer than 2 IAIRE-certified educators", met: numEducators >= 2 },
    ];
  } else if (currentTier === "Certified Institutional Member") {
    checklist = [
      { text: "Meet Certified Institutional Member status requirements", met: isCertifiedEligible },
      { text: "Submit 3+ patents or innovation projects", met: numInnovations >= 3 },
      { text: "Publish 3+ peer-reviewed research papers", met: numResearch >= 3 },
    ];
  } else {
    // Associate Fellow upgrading to Fellow
    checklist = [
      { text: "Maintain 4+ IAIRE-trained certified educators", met: numEducators >= 4 },
      { text: "Excellence through more than 5 granted patents", met: numInnovations > 5 },
      { text: "More than 5 peer-reviewed research publications", met: numResearch > 5 },
    ];
  }

  const stepperData = [
    { label: "Institutional Member" },
    { label: "Certified Institutional Member" },
    { label: "Associate Fellow Institution" },
    { label: "Fellow Institution" },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 0 }, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "stretch",
          width: "100%",
        }}
      >
        {/* Left Welcome Details Card */}
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "7 1 0%" },
            minWidth: 0,
            background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
            minHeight: "280px",
            borderRadius: "28px",
            p: 4,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 12px 30px rgba(11, 23, 39, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Banner Content */}
          <Box sx={{ position: "relative", zIndex: 2, flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 800,
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: 26, md: 32 },
                letterSpacing: "-0.5px",
              }}
            >
              Welcome to IAIRE
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                color: COLORS.ACCENT_TAN,
                mt: 0.5,
                fontFamily: montserrat.style.fontFamily,
                fontSize: 20,
              }}
            >
              {institutionData?.school?.name || ""}
            </Typography>

            {institutionData?.payments?.map((val: any, i: number) => (
              <Box
                key={i}
                sx={{
                  mt: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: 13,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  Valid through{" "}
                  {moment(val?.membership?.expiryDate).format("MMM DD, YYYY")}
                </Typography>
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: roboto.style.fontFamily,
                    fontSize: 24,
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  #{val?.membership?.membershipCode}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  IAIRE member since:{" "}
                  {moment(val?.membership?.activatedAt).format(
                    "MMM DD, YYYY",
                  )}
                </Typography>
              </Box>
            ))}

            <Box
              sx={{
                mt: 2.5,
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                px: 2,
                py: 0.8,
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <School sx={{ color: COLORS.ACCENT_TAN, fontSize: 18 }} />
              <Typography
                sx={{
                  fontWeight: 600,
                  color: COLORS.WHITE,
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {currentTier}
              </Typography>
            </Box>
          </Box>

          <School
            sx={{
              fontSize: 240,
              color: "rgba(255,255,255,0.03)",
              position: "absolute",
              right: -40,
              bottom: -60,
              transform: "rotate(-15deg)",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Right Milestone Stepper Card */}
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "5 1 0%" },
            minWidth: 0,
            p: 4,
            borderRadius: "28px",
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: "0 8px 32px rgba(31, 38, 135, 0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 40px rgba(31, 38, 135, 0.07)",
            },
          }}
        >
          <Stepper
            orientation="vertical"
            connector={<DottedConnector />}
            activeStep={activeStep}
            sx={{
              "& .MuiStep-root": {
                pb: 0,
              },
            }}
          >
            {stepperData.map((val, i) => (
              <Step key={i}>
                <StepLabel
                  StepIconComponent={FlightStepIcon}
                  sx={{
                    "& .MuiStepLabel-label": {
                      ml: 2,
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: montserrat.style.fontFamily,
                        fontWeight: i === activeStep ? 800 : 500,
                        color:
                          i === activeStep ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.5)",
                        fontSize: i === activeStep ? "15px" : "13px",
                        letterSpacing: i === activeStep ? "0px" : "0.5px",
                        lineHeight: 1.2,
                      }}
                    >
                      {val.label}
                    </Typography>
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 4, px: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Progress to next tier
              </Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 900,
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                {progressPercent}%
              </Typography>
            </Box>
            <Box
              sx={{
                height: 10,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.05)",
                borderRadius: "5px",
                position: "relative",
                overflow: "hidden",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: `${progressPercent}%`,
                  background: `linear-gradient(90deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.ACCENT_TAN} 100%)`,
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  transition: "width 0.5s ease-in-out",
                }}
              />
            </Box>

            {/* Next Milestone */}
            {currentTier !== "Fellow Institution" && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: "11px",
                    color: "rgba(0,0,0,0.4)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Next Milestone
                </Typography>
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: COLORS.PRIMARY_NAVY,
                    mt: 0.5,
                  }}
                >
                  {nextTier}
                </Typography>
              </Box>
            )}

            {/* Checklist */}
            {currentTier !== "Fellow Institution" && (
              <>
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: "11px",
                    color: "rgba(0,0,0,0.4)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    mb: 1,
                  }}
                >
                  Requirements Checklist
                </Typography>
                <Stack spacing={1}>
                  {checklist.map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                      {item.met ? (
                        <CheckCircle sx={{ color: "#10B981", fontSize: 16, mt: 0.2 }} />
                      ) : (
                        <RadioButtonUnchecked sx={{ color: "rgba(0,0,0,0.25)", fontSize: 16, mt: 0.2 }} />
                      )}
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: item.met ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.5)",
                          fontWeight: item.met ? 600 : 500,
                          lineHeight: 1.3,
                          fontFamily: montserrat.style.fontFamily,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeBanner;
