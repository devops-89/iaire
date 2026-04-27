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

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: COLORS.ACCENT_TAN,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: COLORS.ACCENT_TAN,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ theme, ownerState }) => ({
  color: "rgba(0, 0, 0, 0.1)",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: COLORS.ACCENT_TAN,
  }),
  "& .QontoStepIcon-completedIcon": {
    color: COLORS.ACCENT_TAN,
    zIndex: 1,
    fontSize: 22,
  },
  "& .QontoStepIcon-circle": {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
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

const SignupStepper = ({ activeStep, steps: customSteps }: SignupStepperProps) => {
  const { data } = useSignup();
  
  const getSteps = () => {
    if (customSteps) return customSteps;
    
    switch (data?.role) {
      case USER_ROLES.INSTITUTION:
        return ["Institution Details", "Review Information", "Payment Verification"];
      case USER_ROLES.EDUCATOR:
        return ["Educator Details", "Verify OTP", "Payment Verification"];
      case USER_ROLES.STUDENT:
        return ["Student Details", "Verify OTP", "Payment Verification"];
      default:
        return ["Account Details", "Verification", "Payment Verification"];
    }
  };

  const steps = getSteps();

  return (
    <Box sx={{ width: "100%", mb: 5 }}>
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
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "rgba(0,0,0,0.4)",
                  "&.Mui-active": {
                    color: COLORS.PRIMARY_NAVY,
                    fontWeight: 700,
                  },
                  "&.Mui-completed": {
                    color: COLORS.ACCENT_TAN,
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
