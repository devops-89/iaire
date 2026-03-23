"use client";

import { Box, Card, Container, Grid, Typography, Stack, Avatar } from "@mui/material";
import React from "react";
import AdsClickIcon from "@mui/icons-material/AdsClick"; // Representing Bullseye
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Representing Medal
import { COLORS } from "@/utils/enum";

const MissionVision = () => {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
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
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(209, 160, 84, 0.1)", color: "#D1A054", width: 44, height: 44 }}>
                  <AdsClickIcon />
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
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(209, 160, 84, 0.1)", color: "#D1A054", width: 44, height: 44 }}>
                  <EmojiEventsIcon />
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
