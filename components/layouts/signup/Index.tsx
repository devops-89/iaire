import { COLORS } from "@/utils/enum";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SignupStepper from "./SignupStepper";

const SignupLayout = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.PRIMARY_NAVY,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Card sx={{ p: 4, borderRadius: 2 }}>
            <Typography>Join IAIE</Typography>
            <SignupStepper activeStep={0} />
            <Grid container>
              <Grid size={6}></Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default SignupLayout;
