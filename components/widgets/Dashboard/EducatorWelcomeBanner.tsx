"use client";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import { School, WorkspacePremium, AutoGraph } from "@mui/icons-material";
import {
  Box,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  StepConnector,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import React from "react";

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

const LevelStepIcon = (props: { active?: boolean; icon: React.ReactNode }) => {
  const { icon, active } = props;

  if (Number(icon) === 3) {
    return (
      <WorkspacePremium
        sx={{
          color: COLORS.PRIMARY_NAVY,
          fontSize: 32,
          ml: "-2px",
          filter: `drop-shadow(0 0 8px ${COLORS.PRIMARY_NAVY}44)`,
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
        border: `1.5px solid ${active ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.1)"}`,
        backgroundColor: "rgba(255,255,255,0.8)",
        ml: "8px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `1px solid ${active ? COLORS.PRIMARY_NAVY + "22" : "rgba(0,0,0,0.05)"}`,
        },
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor:
            Number(icon) < 3 ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.2)",
        }}
      />
    </Box>
  );
};

const EducatorWelcomeBanner = () => {
  const { educatorData } = useSignup();

  console.log("educatorData", educatorData);

  const stepperData = [
    { label: "Fellow of Innovation or Research Education" },
    { label: "Associate Fellow of Innovation or Research Education" },
    { label: "Certified Innovation or Research Mentor" },
    { label: "Educator Member" },
  ];

  const membershipCode = educatorData?.payments?.map(
    (val, i) => val.membership?.membershipCode,
  );

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={4} alignItems="stretch">
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.NAVY_GRADIENT_END || "#1a2a3a"} 100%)`,
              height: "100%",
              minHeight: { xs: "220px", md: "200px" },
              borderRadius: "28px",
              px: { xs: 2, md: 4 },
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 12px 24px rgba(11, 23, 39, 0.2)",
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  color: COLORS.WHITE,
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { xs: 24, md: 30 },
                  letterSpacing: "-0.5px",
                }}
              >
                Welcome back,
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: COLORS.ACCENT_TAN || "#D1A054",
                  mt: 0.5,
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: { xs: 22, md: 28 },
                }}
              >
                {educatorData
                  ? `${educatorData.firstName} ${educatorData.lastName}`
                  : "Educator"}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: COLORS.ACCENT_TAN || "#D1A054",
                  mt: 0.5,
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: { xs: 20, md: 15 },
                }}
              >
                Membership ID : {membershipCode}
              </Typography>

              <Box
                sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {educatorData?.school?.name || ""}
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(4px)",
                    px: 2,
                    py: 0.8,
                    borderRadius: "12px",
                    width: "fit-content",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <WorkspacePremium
                    sx={{ color: COLORS.ACCENT_TAN || "#D1A054", fontSize: 18 }}
                  />
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
                    Educator Member
                  </Typography>
                </Box>
              </Box>
            </Box>

            <School
              sx={{
                fontSize: 220,
                color: "rgba(255,255,255,0.03)",
                position: "absolute",
                right: -30,
                bottom: -50,
                transform: "rotate(-15deg)",
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              p: 4,
              height: "100%",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                  mb: 3,
                }}
              >
                Membership Advancement
              </Typography>
              <Stepper
                orientation="vertical"
                connector={<DottedConnector />}
                activeStep={3}
                sx={{
                  "& .MuiStep-root": { pb: 0 },
                }}
              >
                {stepperData.map((val, i) => (
                  <Step key={i}>
                    <StepLabel
                      slots={{
                        stepIcon: LevelStepIcon,
                      }}
                      sx={{
                        "& .MuiStepLabel-label": { ml: 2 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: i === 3 ? 700 : 500,
                          color:
                            i === 3 ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.5)",
                          fontSize: i === 3 ? "15px" : "13px",
                        }}
                      >
                        {val.label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box sx={{ mt: 4 }}>
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
                  }}
                >
                  Progress to Certified Innovation or Research Mentor
                </Typography>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 800,
                    color: COLORS.PRIMARY_NAVY,
                  }}
                >
                  50%
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 8,
                  width: "100%",
                  bgcolor: "rgba(0,0,0,0.05)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "65%",
                    background: `linear-gradient(90deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.ACCENT_TAN || "#D1A054"} 100%)`,
                    borderRadius: "4px",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: "11px",
                  color: "rgba(0,0,0,0.5)",
                  mt: 1.5,
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                Submit 2 more research papers or achieve a training score of 9.5
                to reach the next tier.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducatorWelcomeBanner;
