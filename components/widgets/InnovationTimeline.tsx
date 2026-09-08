import React from "react";
import { Box, Stepper, Step, StepLabel, Typography, Card } from "@mui/material";
import { INNOVATION_STATUS } from "@/utils/enum";
import { montserrat } from "@/utils/fonts";

const steps = [
  "Submitted",
  "Admin Review",
  "Attorney Review",
  "Patent Filing",
  "Granted",
];

const getTimelineState = (status: INNOVATION_STATUS) => {
  switch (status) {
    case INNOVATION_STATUS.DRAFT:
      return { activeStep: 0, isRejected: false, rejectedStep: -1 };
    case INNOVATION_STATUS.PENDING:
      return { activeStep: 1, isRejected: false, rejectedStep: -1 };
    case INNOVATION_STATUS.REJECTED:
    case INNOVATION_STATUS.REJECTED_BY_ADMIN:
      return { activeStep: 1, isRejected: true, rejectedStep: 1 };
    case INNOVATION_STATUS.APPROVED_BY_ADMIN:
    case INNOVATION_STATUS.UNDER_REVIEW_BY_ATTORNEY:
      return { activeStep: 2, isRejected: false, rejectedStep: -1 };
    case INNOVATION_STATUS.REJECTED_BY_ATTORNEY:
      return { activeStep: 2, isRejected: true, rejectedStep: 2 };
    case INNOVATION_STATUS.APPROVED_BY_ATTORNEY:
    case INNOVATION_STATUS.PATENT_PENDING:
      return { activeStep: 3, isRejected: false, rejectedStep: -1 };
    case INNOVATION_STATUS.PATENT_FILED_INDIA:
    case INNOVATION_STATUS.PATENT_FILED_USA:
    case INNOVATION_STATUS.PATENT_UNDER_PROSECUTION:
      return { activeStep: 4, isRejected: false, rejectedStep: -1 };
    case INNOVATION_STATUS.PATENT_REJECTED:
      return { activeStep: 4, isRejected: true, rejectedStep: 4 };
    case INNOVATION_STATUS.PATENT_GRANTED:
      return { activeStep: 5, isRejected: false, rejectedStep: -1 };
    case INNOVATION_STATUS.ARCHIVED:
      return { activeStep: 0, isRejected: true, rejectedStep: 0 };
    default:
      return { activeStep: 0, isRejected: false, rejectedStep: -1 };
  }
};

interface InnovationTimelineProps {
  status: INNOVATION_STATUS;
}

const InnovationTimeline: React.FC<InnovationTimelineProps> = ({ status }) => {
  const { activeStep, isRejected, rejectedStep } = getTimelineState(status);

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(0, 0, 0, 0.04)",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          mb: 3,
          color: "#032C46",
        }}
      >
        Status Timeline
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const labelProps: {
              optional?: React.ReactNode;
              error?: boolean;
            } = {};

            if (isRejected && index === rejectedStep) {
              labelProps.optional = (
                <Typography variant="caption" color="error">
                  Rejected
                </Typography>
              );
              labelProps.error = true;
            }

            return (
              <Step key={label}>
                <StepLabel {...labelProps}>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Card>
  );
};

export default InnovationTimeline;
