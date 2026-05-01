"use client";

import SplitText from "@/components/widgets/SplitText";
import TextBlur from "@/components/widgets/TextBlur";
import bgImage from "@/images/homepage/hero_bg.png";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

const HeroSection = () => {
  const [hovered, setHovered] = useState<"primary" | "secondary" | null>(null);
  return (
    <Box
      sx={{
        position: "relative",
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight:{xs:"100svh",md:"100vh"},
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
        <Stack spacing={{xs:3,md:4}} alignItems="center" textAlign="center">
        <Typography
            component="div"
            sx={{
              fontFamily: '"Playfair Display", serif',
              color: COLORS.WHITE,
              fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3.5rem" },
              lineHeight: { xs: 1.3, md: 1.2 },
              maxWidth: "900px",
              fontWeight: 600,
              textAlign: "center",
              mx:"auto"
            }}>
              <TextBlur
                text="Nurturing a Culture of Innovation, Research and Entrepreneurship"
                animateBy="words"
                delay={80}
                stepDuration={0.4}
                className="blur-text-inherit"
              />
          </Typography>
          
        <Typography
          component="div"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
            maxWidth: "700px",
            fontFamily: inter.style.fontFamily,
            lineHeight: 1.6,
            textAlign: "center",
            mx: "auto",
          }}>
          <SplitText
            text="Among youth. Become a member institution of IAIRE - where the brightest minds innovate tomorrow"
            splitType="words"
            delay={40}
          />
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} onMouseLeave={() => setHovered(null)} spacing={2} sx={{ pt: { xs: 1, md: 2 }, width: { xs: "100%", sm: "auto" } }} >
            <Button
                onMouseEnter={() => setHovered("primary")}
              variant="contained"
              size="large"
              sx={{
                fontFamily:inter.style.fontFamily,
                bgcolor:
                hovered === "secondary"? "transparent": COLORS.ACCENT_TAN,
                color:hovered === "secondary"? COLORS.WHITE: COLORS.BLACK,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                border: `1px solid ${hovered === "secondary" ? COLORS.WHITE : COLORS.ACCENT_TAN}`,
                transition:"0.3s",
                "&:hover": { bgcolor: "transparent", color: COLORS.WHITE, borderColor: COLORS.WHITE, },
              }}
            >
              Become a Member
            </Button>
            <Button
                onMouseEnter={() => setHovered("secondary")}
              variant="outlined"
              size="large"
              sx={{
                fontFamily:inter.style.fontFamily,
                border: `1px solid ${hovered === "primary" ? COLORS.ACCENT_TAN : COLORS.WHITE}`,
                bgcolor:hovered === "primary"? COLORS.ACCENT_TAN: "transparent",
                color:hovered === "primary"? COLORS.BLACK: COLORS.WHITE,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": { bgcolor: COLORS.ACCENT_TAN, color: COLORS.BLACK, borderColor: COLORS.ACCENT_TAN, },
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
          display: { xs: "none", sm: "flex" },
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
