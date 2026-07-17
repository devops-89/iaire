"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import heroImg from "@/public/images/membership/membership_hero.png";

const MemberHero = () => {
  return (
    <Box
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        background: "linear-gradient(135deg, #0B1528 0%, #1A2847 100%)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Decorative gradient glow elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          
          {/* Left Column: Title, Copy, and CTA Buttons */}
          <Grid size={{ xs: 12, md: 6.8 }}>
            <Stack spacing={3.25} sx={{ width: "100%" }}>
              
              {/* Badge */}
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#93C5FD",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  IAIRE Membership
                </Box>
              </Box>

              {/* Title & Narrative */}
              <Stack spacing={2.25}>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", sm: "40px", md: "46px" },
                    fontWeight: 900,
                    lineHeight: 1.12,
                    letterSpacing: "-0.03em",
                    color: COLORS.WHITE,
                  }}
                >
                  Membership in a <br />
                  <span style={{ color: "#93C5FD", textShadow: "0 0 40px rgba(147, 197, 253, 0.2)" }}>
                    Professional Society
                  </span>{" "}
                  for Innovation, Research & Entrepreneurship
                </Typography>
                
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <strong>IAIRE</strong> membership provides schools, educators, and students access to a structured ecosystem of standards, resources, certification pathways, mentoring support, recognition opportunities, professional development, and innovation and research programmes.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Membership is designed to support long-term participation, quality assurance, measurable outcomes, and progression through recognized achievement pathways.
                </Typography>
              </Stack>

              {/* CTA Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#0B1528",
                      backgroundColor: COLORS.WHITE,
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.2,
                      boxShadow: "0 4px 14px rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#E2E8F0",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(255, 255, 255, 0.25)",
                      },
                    }}
                  >
                    Become a Member
                  </Button>
                </Link>

                <Link href="#membership-types" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      borderColor: COLORS.WHITE,
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.2,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#93C5FD",
                        color: "#93C5FD",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Compare Membership Types
                  </Button>
                </Link>

                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "rgba(255, 255, 255, 0.7)",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.2,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: COLORS.WHITE,
                        color: COLORS.WHITE,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transform: "translateY(-2px)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    Contact Membership Team
                  </Button>
                </Link>
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Visual illustration container */}
          <Grid size={{ xs: 12, md: 5.2 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pl: { md: 2 } }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "320px", sm: "380px", md: "400px" },
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-8px)" },
                },
              }}
            >
              {/* Outer soft glowing outline frame */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.05) 100%)",
                  filter: "blur(14px)",
                  opacity: 0.7,
                  zIndex: 1,
                }}
              />
              
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="IAIRE Membership - Global professional education networks and credentials certificate illustration"
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

export default MemberHero;