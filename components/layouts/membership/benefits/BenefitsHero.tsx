"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import heroImg from "@/public/images/membership/benefits_dashboard_hero.png";
import BeamButton from "@/components/widgets/BeamButton";

const BenefitsHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "120px", sm: "140px", md: "180px" },
        pb: { xs: "80px", sm: "100px", md: "120px" },
        background: "radial-gradient(circle at 15% 15%, rgba(248, 93, 0, 0.07) 0%, transparent 40%), radial-gradient(circle at 85% 85%, rgba(0, 149, 255, 0.05) 0%, transparent 50%), #0A0C14",
        overflow: "hidden",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Decorative blurred mesh circle */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "8%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "#1B365D",
          filter: "blur(150px)",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Text Details */}
          <Grid size={{ xs: 12, md: 6.5 }}
            data-aos="fade-right"
            data-aos-duration="800">
            <Stack spacing={4}>
              
              {/* Premium Mini Badge */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#1B365D",
                    backgroundColor: "rgba(248, 93, 0, 0.08)",
                    border: "1px solid rgba(248, 93, 0, 0.2)",
                    borderRadius: "50px",
                    px: 2.5,
                    py: 0.8,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Membership Value
                </Box>
              </Box>

              {/* Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 900,
                  fontSize: { xs: "36px", sm: "46px", md: "52px" },
                  lineHeight: { xs: "1.25", sm: "1.2", md: "1.15" },
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Why Membership <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF7A00 0%, #FFB800 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Matters
                </span>
              </Typography>

              {/* Sub-headline */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "18px", md: "21px" },
                  fontWeight: 700,
                  lineHeight: "1.4",
                  color: "#1B365D",
                  letterSpacing: "-0.01em",
                }}
              >
                Unlock Access. Build Capability. Gain Recognition.
              </Typography>

              {/* Body Paragraph */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "15.5px", md: "17px" },
                  fontWeight: 500,
                  lineHeight: "1.65",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                IAIRE membership is not just a credential. It is an active pathway to growth, learning, global connection, and meaningful impact in innovation education.
              </Typography>

              {/* Action CTA Button */}
              <Box sx={{ pt: 1 }}>
                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <BeamButton
                    endIcon={<KeyboardArrowRightIcon className="arrow-icon" />}
                    sx={{
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: inter.style.fontFamily,
                      borderRadius: "50px",
                      px: 4.5,
                      py: 1.6,
                      backgroundColor: "#1B365D",
                      color: "#FFFFFF",
                      textTransform: "none",
                      boxShadow: "0 10px 25px rgba(248, 93, 0, 0.35)",
                      transition: "all 0.25s ease",
                      "& .arrow-icon": {
                        transition: "transform 0.25s ease",
                      },
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(248, 93, 0, 0.45)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    Become a Member and Unlock These Benefits
                  </BeamButton>
                </Link>
              </Box>

            </Stack>
          </Grid>

          {/* Right Column: Dashboard Mockup Visual Frame */}
          <Grid size={{ xs: 12, md: 5.5 }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": {
                    transform: "translateY(0px)",
                  },
                  "50%": {
                    transform: "translateY(-10px)",
                  },
                },
              }}
            >
              {/* Outer soft card glow halo */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(248, 93, 0, 0.2) 0%, rgba(0, 149, 255, 0.1) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.5,
                  zIndex: 1,
                }}
              />
              
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="Student Growth Dashboard"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsHero;
