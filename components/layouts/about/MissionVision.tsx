"use client";

import { Avatar, Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const MissionVision = () => {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{xs:8,md:4}} justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                height: "100%",
                borderRadius: 4,
                bgcolor: "#F9F7F5",
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mb: { xs: 1, md: 0 },
                transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#D4A574",
                boxShadow: "0 10px 30px rgba(212,165,116,0.35)",
              },

              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                sx={{
                      bgcolor: "rgba(209, 160, 84, 0.1)",
                      width: 44,
                      height: 44,
                    }}>
                <Image
                  src="/images/icon/studenttrainingIcon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  Our Mission
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#4B5563",
                }}
              >
                To cultivate a culture of innovation, research, and entrepreneurship among youth worldwide by providing recognition, resources, and opportunities for exceptional young minds and their educators to excel and create meaningful impact.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 4,
                bgcolor: "#F9F7F5",
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2,

                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#D4A574",
                  boxShadow: "0 10px 30px rgba(212,165,116,0.35)",
                },

              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                sx={{
                  bgcolor: "rgba(209, 160, 84, 0.1)",
                  width: 44,
                  height: 44,
                }}>
                <Image
                  src="/images/icon/trainingIcon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  Our Vision
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#4B5563",
                }}
              >
                A world where every young person has the opportunity to innovate, conduct research, and build ventures that solve real-world problems and shape a better future for humanity.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
