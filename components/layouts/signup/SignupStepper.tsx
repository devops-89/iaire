"use client";
import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  styled,
  StepConnector,
  stepConnectorClasses,
  Box,
} from "@mui/material";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { Check } from "@mui/icons-material";
import { useSignup } from "@/store/useSignup";
import { montserrat } from "@/utils/fonts";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2563EB",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2563EB",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "rgba(148, 163, 184, 0.4)",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ theme, ownerState }) => ({
  color: "#94A3B8",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#2563EB",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#2563EB",
    zIndex: 1,
    fontSize: 20,
  },
  "& .QontoStepIcon-circle": {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
    boxShadow: ownerState.active ? "0 0 10px rgba(37, 99, 235, 0.4)" : "none",
  },
}));

function QontoStepIcon(props: any) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

interface SignupStepperProps {
  activeStep: number;
  steps?: string[];
}

const SignupStepper = ({
  activeStep,
  steps: customSteps,
}: SignupStepperProps) => {
  const { data } = useSignup();

  const getSteps = () => {
    if (customSteps) return customSteps;

    switch (data?.role) {
      case USER_ROLES.INSTITUTION:
        return ["Institution Details", "Review Information"];
      case USER_ROLES.EDUCATOR:
        return ["Educator Details", "Verify OTP"];
      case USER_ROLES.STUDENT:
        return ["Student Details", "Verify OTP", "Payment Verification"];
      default:
        return ["Account Details", "Verification", "Payment Verification"];
    }
  };

  const steps = getSteps();

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              sx={{
                "& .MuiStepLabel-label": {
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: "#64748B",
                  "&.Mui-active": {
                    color: "#0F172A",
                    fontWeight: 700,
                  },
                  "&.Mui-completed": {
                    color: "#2563EB",
                    fontWeight: 600,
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SignupStepper;
