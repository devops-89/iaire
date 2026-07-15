"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import heroImg from "@/public/images/membership/become_member_hero.png";

const BecomeMemberHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "120px", sm: "140px", md: "180px" },
        pb: { xs: "80px", sm: "100px", md: "120px" },
        background: "radial-gradient(circle at 10% 20%, rgba(248, 93, 0, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(0, 149, 255, 0.05) 0%, transparent 50%), #0A0C14",
        overflow: "hidden",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Decorative radial gradient blur circle */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "#F85D00",
          filter: "blur(140px)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Text & Content Details */}
          <Grid size={{ xs: 12, md: 7 }}>
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
                    color: "#F85D00",
                    backgroundColor: "rgba(248, 93, 0, 0.08)",
                    border: "1px solid rgba(248, 93, 0, 0.2)",
                    borderRadius: "50px",
                    px: 2.5,
                    py: 0.8,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Global Network
                </Box>
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontWeight: 900,
                  fontSize: { xs: "32px", sm: "40px", md: "46px" },
                  lineHeight: { xs: "1.25", sm: "1.2", md: "1.15" },
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Join a Global Community of{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF7A00 0%, #FFB800 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Innovation, Research & Entrepreneurship
                </span>{" "}
                in Education
              </Typography>

              {/* Sub-headline */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "15.5px", md: "17px" },
                  fontWeight: 500,
                  lineHeight: "1.65",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                IAIRE membership is an invitation to be part of something larger than a single school, program, or competition. It is an opportunity to join a growing global movement that is reshaping how schools teach, how teachers mentor, and how students think.
              </Typography>

              {/* Body sentences stacked */}
              <Stack spacing={3} sx={{ py: 1 }}>
                
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ color: "#F85D00", mt: 0.25, fontSize: 20 }} />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.65)",
                    }}
                  >
                    Whether you are a school leader, educator, student, researcher, institution, or organization — there is a place for you in the IAIRE ecosystem.
                  </Typography>
                </Stack>
                
              </Stack>

              {/* CTA Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: inter.style.fontFamily,
                      borderRadius: "50px",
                      px: 4.5,
                      py: 1.6,
                      backgroundColor: "#F85D00",
                      color: "#FFFFFF",
                      textTransform: "none",
                      boxShadow: "0 10px 25px rgba(248, 93, 0, 0.35)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: "#d14e03",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(248, 93, 0, 0.45)",
                      },
                    }}
                  >
                    Join IAIRE Today
                  </Button>
                </Link>
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Illustration Frame */}
          <Grid size={{ xs: 12, md: 5 }}>
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
                    transform: "translateY(-12px)",
                  },
                },
              }}
            >
              {/* Outer decorative card glass border glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(248, 93, 0, 0.3) 0%, rgba(0, 149, 255, 0.15) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />
              
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  overflow: "hidden",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="IAIRE Collaboration Network"
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

export default BecomeMemberHero;
