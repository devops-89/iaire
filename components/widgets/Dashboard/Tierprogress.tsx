import { Circle, CircleOutlined, School } from "@mui/icons-material";
import { Box, Card, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";

const Tierprogress = ({ data }: { data: { label: string }[] }) => {
  const [active, setActive] = useState(0);

  return (
    <Box>
      <Card
        sx={{
          p: 2,
          boxShadow: "0px 0px 2px 2px #eeeeee",
          borderRadius: "20px",
        }}
      >
        <Stepper orientation="vertical" activeStep={active}>
          {data.map((val, i) => (
            <Step key={i}>
              <StepLabel
                slots={{ stepIcon: active === i ? School : CircleOutlined }}
                slotProps={{
                  stepIcon: {
                    sx: {
                      width: active === i ? 20 : 15,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pr: active === i ? 0.1 : 0.3,
                    },
                  },
                  label: {
                    sx: {
                      fontSize: 16,
                      fontWeight: active === i ? 600 : 400,
                    },
                  },
                }}
              >
                {val.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Card>
    </Box>
  );
};

export default Tierprogress;
