"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { COLORS } from "@/utils/enum";

const CommunitySection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#101828",
        color: COLORS.WHITE,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={6} alignItems="center">
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#C5A059",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MilitaryTechIcon sx={{ color: "#101828", fontSize: 32 }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 32, md: 40 },
              fontWeight: 600,
              maxWidth: "800px",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Join a Prestigious Community
          </Typography>

          <Box
            sx={{
              bgcolor: "rgba(30, 41, 59, 0.4)",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              width: "100%",
              maxWidth: "900px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                color: "#C5A059",
                fontSize: { xs: 20, md: 28 },
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              "Membership in IAIRE recognizes excellence in innovation, research,
              and entrepreneurship and is one of the highest honors a young mind
              can achieve."
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#98A2B3",
              fontSize: "1.1rem",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Our members are among the world's most distinguished young innovators,
            researchers and entrepreneurs, their schools and teachers who have the
            motivation and ability to nurture them.
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<span>→</span>}
            sx={{
              bgcolor: "#C5A059",
              color: "#101828",
              px: 6,
              py: 2,
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#B08A4A",
              },
            }}
          >
            Learn About Membership
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CommunitySection;
