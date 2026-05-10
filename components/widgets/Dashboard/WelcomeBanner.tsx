"use client";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import { School, AirplanemodeActive } from "@mui/icons-material";
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
import moment from "moment";
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

const FlightStepIcon = (props: { active?: boolean; icon: React.ReactNode }) => {
  const { icon } = props;

  if (Number(icon) === 3) {
    return (
      <AirplanemodeActive
        sx={{
          color: COLORS.PRIMARY_NAVY,
          fontSize: 32,
          transform: "rotate(0deg)", // Points up
          ml: "-2px",
          filter: `drop-shadow(0 0 8px ${COLORS.PRIMARY_NAVY}44)`, // Premium glow
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
        border: `1.5px solid rgba(0,0,0,0.1)`,
        backgroundColor: "rgba(255,255,255,0.8)",
        ml: "8px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `1px solid rgba(0,0,0,0.05)`,
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

const WelcomeBanner = () => {
  const { institutionData } = useSignup();
  const stepperData = [
    { label: "Fellow Institution Members" },
    { label: "Chartered Institution Members" },
    { label: "Accredited Institution Member" },
  ];

  console.log("first", institutionData);

  return (
    <Box sx={{ p: { xs: 2, md: 0 } }}>
      <Grid container spacing={10} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
              height: "100%",
              minHeight: "280px",
              width: "100%",
              borderRadius: "28px",
              p: 4,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 12px 24px rgba(11, 23, 39, 0.2)",
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
                  Accredited Institution Member
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
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: "32px",
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stepper
              orientation="vertical"
              connector={<DottedConnector />}
              activeStep={2}
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
                          fontWeight: i === 2 ? 800 : 500,
                          color:
                            i === 2 ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.5)",
                          fontSize: i === 2 ? "15px" : "13px",
                          letterSpacing: i === 2 ? "0px" : "0.5px",
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
                  50%
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
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "50%",
                    background: `linear-gradient(90deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.ACCENT_TAN} 100%)`,
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: "11px",
                  color: "rgba(0,0,0,0.5)",
                  mt: 1,
                  fontWeight: 500,
                }}
              >
                1 trained or certified educator is required to become Chartered
                Member
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
