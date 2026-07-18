"use client";

import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionBadge from "@/components/widgets/SectionBadge";
const SubFooterCTA = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        background:
          "radial-gradient(circle at 50% 120%, rgba(27, 54, 93, 0.2) 0%, #090A0E 70%)",
        backgroundColor: "#090A0E",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background decoration - subtle grid lines overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack data-aos="fade-up" data-aos-duration="900" spacing={5} alignItems="center" textAlign="center">
          <SectionBadge label="Join the Ecosystem" align="center" />

          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "36px", md: "52px" },
              fontWeight: 850,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Join the IAIRE Community
          </Typography>

          {/* Subtext paragraphs */}
          <Stack spacing={2.5} sx={{ maxWidth: "720px" }}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "16.5px",
                fontWeight: 500,
                color: "#E2E2E9",
                lineHeight: 1.6,
              }}
            >
              IAIRE invites schools, educators, students, researchers,
              inventors, entrepreneurs, policymakers, and institutions to join a
              professional community committed to advancing innovation,
              research, and entrepreneurship education.
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14.5px",
                color: "#9D9DA7",
                lineHeight: 1.65,
              }}
            >
              Whether you are a school seeking to build institutional capacity,
              an educator aspiring to mentor innovation, a student ready to
              solve real-world problems, or an expert willing to guide the next
              generation, IAIRE provides a structured platform for
              participation, recognition, and impact.
            </Typography>
          </Stack>

          {/* Three CTA Buttons Stack */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            justifyContent="center"
          >
            {/* <Link
              href="/signup/role-selection"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#090A0E",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "100px",
                  px: 4,
                  py: 1.4,
                  boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    backgroundColor: "#F3F4F6",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 30px rgba(255, 255, 255, 0.25)",
                  },
                }}
              >
                Join IAIRE
              </Button>
            </Link>

            <Link
              href="/signup/role-selection"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  borderWidth: "1.5px",
                  borderRadius: "100px",
                  px: 4,
                  py: 1.4,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderWidth: "1.5px",
                    borderColor: "#FFFFFF",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Partner With IAIRE
              </Button>
            </Link> */}

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    className="arrow-icon"
                    sx={{ transition: "transform 0.25s ease" }}
                  />
                }
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#9D9DA7",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  borderWidth: "1.5px",
                  borderRadius: "100px",
                  px: 4,
                  py: 1.4,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderWidth: "1.5px",
                    borderColor: "#FFFFFF",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    transform: "translateY(-2px)",
                    "& .arrow-icon": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Stack>

          {/* Concluding highlight statement */}
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14.5px",
              color: "#C5A059",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.6,
              pt: 3,
              maxWidth: "600px",
            }}
          >
            "The future will be shaped by those who can imagine better
            possibilities — and build them."
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubFooterCTA;
