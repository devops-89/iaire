"use client";

import bgImage from "@/images/homepage/hero_bg.png";
import { COLORS } from "@/utils/enum";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "50%",
          height: "60%",
          background: "radial-gradient(circle, rgba(0, 255, 170, 0.05) 0%, rgba(0, 255, 170, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            sx={{
              color: COLORS.WHITE,
              fontSize: { xs: 40, md: 64 },
              lineHeight: 1.2,
              maxWidth: "900px",
              fontWeight: 600,
            }}
          >
            Nurturing a Culture of Innovation, Research and Entrepreneurship
          </Typography>
          
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: 16, md: 20 },
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            Among youth. Become a member institution of IAIRE - where the brightest minds innovate tomorrow
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: COLORS.ACCENT_TAN,
                color: COLORS.BLACK,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                "&:hover": { bgcolor: "#B88A40" },
              }}
            >
              Become a Member
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: COLORS.WHITE,
                color: COLORS.WHITE,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": {
                  borderColor: COLORS.WHITE,
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Explore Programs
            </Button>
          </Stack>
        </Stack>
      </Container>
      
      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          opacity: 0.6,
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: "2px solid white",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            p: "4px",
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              bgcolor: COLORS.WHITE,
              borderRadius: 2,
              animation: "scrollAnim 2s infinite",
              "@keyframes scrollAnim": {
                "0%": { transform: "translateY(0)", opacity: 1 },
                "100%": { transform: "translateY(15px)", opacity: 0 },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
