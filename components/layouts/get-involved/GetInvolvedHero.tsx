"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import heroImg from "@/public/images/get-involved/get_involved_hero.png";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const GetInvolvedHero = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        height: { xs: "auto%", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "120px", md: "150px" },
        pb: { xs: "120px", md: "130px" },
        background: "linear-gradient(135deg, #090A0E 0%, #12131A 100%)",
        color: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 5 }} alignItems="center">
          {/* Left Column: Heading Copy */}
          <Grid
            size={{ xs: 12, md: 6.5 }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Stack
              spacing={3.25}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SectionBadge
                  label="Get Involved"
                  align="center"
                  theme="dark"
                />
              </Box>

              {/* Title & Subtitle */}
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 900,
                    fontSize: { xs: "2.6rem", sm: "3rem", md: "3.4rem" },
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    background:
                      "linear-gradient(180deg, #FFFFFF 30%, #AEB5C0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Join a Community Advancing Innovation & Research
                </Typography>
              </Stack>

              {/* Core Description Copy */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                  color: "#9D9DA7",
                  maxWidth: "580px",
                }}
              >
                <strong>IAIRE</strong> welcomes schools, educators, students,
                scientists, researchers, inventors, entrepreneurs, institutional
                leaders, partners, and volunteers who share a commitment to
                advancing innovation, research, and entrepreneurship education
                globally.
              </Typography>

              {/* Action Buttons Row */}
              <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="contained"
                    sx={{
                      width: { lg: "40%", xs: "100%" },
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: COLORS.PRIMARY_BLUE,
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.2,
                      boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(255, 255, 255, 0.25)",
                      },
                    }}
                  >
                    Become a Member
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5.5 }}>
            <Image
              src={heroImg}
              alt="IAIRE Get Involved - Global Community Connections"
              priority
              style={{
                width: phone ? "100%" : "500px",
                height: phone ? "100%" : "500px",
                margin: "auto",
                borderRadius: "20px",
              }}
            />

            <Box sx={{ display: { lg: "none", xs: "block" } }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 1.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: COLORS.PRIMARY_BLUE,
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.2,
                      boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 30px rgba(255, 255, 255, 0.25)",
                      },
                    }}
                  >
                    Become a Member
                  </BeamButton>
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInvolvedHero;
