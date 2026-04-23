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
import { COLORS } from "@/utils/enum";
import { Check } from "@mui/icons-material";

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

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean; completed?: boolean } }>(
  ({ theme, ownerState }) => ({
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
  })
);

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

const steps = ["Institution Details", "Review Information", "Payment Verification"];

interface SignupStepperProps {
  activeStep: number;
}

const SignupStepper = ({ activeStep }: SignupStepperProps) => {
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
