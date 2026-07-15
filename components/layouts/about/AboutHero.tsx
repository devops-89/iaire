"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";

const RevolvingBadge = ({
  label,
  startAngle,
  radius,
  tiltX = 60,
  tiltY = -15,
  speed = 28,
  clockwise = true,
}: {
  label: string;
  startAngle: number;
  radius: number;
  tiltX?: number;
  tiltY?: number;
  speed?: number;
  clockwise?: boolean;
}) => {
  const animName = `orbit-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const dir = clockwise ? 1 : -1;

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 2,
        transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          animation: `${animName} ${speed}s linear infinite`,
          pointerEvents: "auto",
          [`@keyframes ${animName}`]: {
            "0%": {
              transform: `rotateZ(${startAngle}deg) translateX(${radius}px) rotateZ(${-startAngle}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`
            },
            "100%": {
              transform: `rotateZ(${startAngle + dir * 360}deg) translateX(${radius}px) rotateZ(${-(startAngle + dir * 360)}deg) rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`
            }
          },
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderLeft: "3px solid #F85D00",
          borderRadius: "8px",
          px: 2,
          py: 1.25,
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
          "&:hover": {
            transform: "scale(1.05)",
            borderColor: "rgba(248, 93, 0, 0.3)",
            boxShadow: "0 20px 40px rgba(248, 93, 0, 0.15)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "11px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

const AboutHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "140px", md: "190px" },
        pb: { xs: "80px", md: "110px" },
        background: "linear-gradient(135deg, #090A0E 0%, #12131A 100%)",
        color: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background glowing flares */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Abstract dotted mesh grid */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.02,
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 8, md: 6 }} alignItems="center">
          
          {/* Left Column: Heading, Pitch & Key Statistics */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
              
              {/* Badge */}
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(248, 93, 0, 0.1)",
                    color: "#F85D00",
                    px: 2.25,
                    py: 0.75,
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(248, 93, 0, 0.2)",
                  }}
                >
                  GLOBAL ACADEMY
                </Box>
              </Box>

              {/* Title */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 900,
                  fontSize: { xs: "3rem", sm: "3.5rem", md: "4.8rem" },
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(180deg, #FFFFFF 30%, #AEB5C0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About IAIRE
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  fontWeight: 400,
                  color: "#9D9DA7",
                  lineHeight: 1.6,
                  maxWidth: { xs: "100%", md: "540px" },
                }}
              >
                The International Academy of Innovation, Research & Entrepreneurship is a global educational platform committed to establishing structured innovation ecosystems inside schools.
              </Typography>

              {/* Platform Metrics Row */}
              <Box
                sx={{
                  pt: 2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5 },
                  justifyContent: { xs: "center", md: "flex-start" },
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                <Stack spacing={0.5}>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "28px", fontWeight: 800, color: "#FFFFFF" }}>
                    150+
                  </Typography>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "11px", fontWeight: 700, color: "#F85D00", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Innovation Hubs
                  </Typography>
                </Stack>
                
                <Stack spacing={0.5}>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "28px", fontWeight: 800, color: "#FFFFFF" }}>
                    45k+
                  </Typography>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "11px", fontWeight: 700, color: "#F85D00", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Young Innovators
                  </Typography>
                </Stack>

                <Stack spacing={0.5}>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "28px", fontWeight: 800, color: "#FFFFFF" }}>
                    85+
                  </Typography>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "11px", fontWeight: 700, color: "#F85D00", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Patents & Filings
                  </Typography>
                </Stack>
              </Box>

            </Stack>
          </Grid>

          {/* Right Column: Holographic CSS Core Display */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "360px", sm: "420px", md: "460px" },
                maxWidth: "460px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Concentric rings */}
              <Box
                sx={{
                  position: "absolute",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(248, 93, 0, 0.15)",
                  transform: "rotateX(60deg) rotateY(-15deg)",
                  animation: "ring-spin-cw 20s linear infinite",
                  "@keyframes ring-spin-cw": {
                    "0%": { transform: "rotateX(60deg) rotateY(-15deg) rotate(0deg)" },
                    "100%": { transform: "rotateX(60deg) rotateY(-15deg) rotate(360deg)" },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(255, 255, 255, 0.08)",
                  transform: "rotateX(60deg) rotateY(15deg)",
                  animation: "ring-spin-ccw 25s linear infinite",
                  "@keyframes ring-spin-ccw": {
                    "0%": { transform: "rotateX(60deg) rotateY(15deg) rotate(360deg)" },
                    "100%": { transform: "rotateX(60deg) rotateY(15deg) rotate(0deg)" },
                  },
                }}
              />

              {/* Glowing core sphere */}
              <Box
                sx={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.1) 0%, rgba(248, 93, 0, 0.3) 40%, rgba(9, 10, 14, 0.95) 100%)",
                  border: "1px solid rgba(248, 93, 0, 0.35)",
                  boxShadow: "0 0 35px rgba(248, 93, 0, 0.25), inset 0 0 25px rgba(248, 93, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "pulse-glow 3s ease-in-out infinite",
                  "@keyframes pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 30px rgba(248, 93, 0, 0.25), inset 0 0 20px rgba(248, 93, 0, 0.15)" },
                    "50%": { boxShadow: "0 0 50px rgba(248, 93, 0, 0.4), inset 0 0 30px rgba(248, 93, 0, 0.3)" },
                  },
                }}
              >
                <Typography sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.15em" }}>
                  IAIRE
                </Typography>
              </Box>

              {/* Revolving Glassmorphic Badges on respective ring lines */}
              <RevolvingBadge label="Innovation" startAngle={0} radius={140} tiltX={60} tiltY={-15} speed={20} clockwise={true} />
              <RevolvingBadge label="Research" startAngle={180} radius={140} tiltX={60} tiltY={-15} speed={20} clockwise={true} />
              <RevolvingBadge label="Entrepreneurship" startAngle={90} radius={190} tiltX={60} tiltY={15} speed={25} clockwise={false} />
              <RevolvingBadge label="Patent Pathways" startAngle={270} radius={190} tiltX={60} tiltY={15} speed={25} clockwise={false} />

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHero;
