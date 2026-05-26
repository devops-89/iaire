"use client";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import { aloeveraDisplay_medium } from "@/utils/fonts";
import {
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

const UpdateProfileLayout = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("token");

  console.log("params", userId);

  const { data } = getUserDetails(userId);
  console.log("data", data);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            boxShadow: "0px 0px 2px 2px #00000020",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 600,
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
            }}
          >
            Update Your Profile
          </Typography>
          <form>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid size={6}>
                <TextField label="First Name" fullWidth />
              </Grid>
              <Grid size={6}></Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default UpdateProfileLayout;
