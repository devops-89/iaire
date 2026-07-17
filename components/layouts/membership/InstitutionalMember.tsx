"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import heroImg from "@/public/images/membership/institutional_membership.png";

const institutionalBenefits = [
  "IAIRE Institutional Membership & Certification",
  "Teacher Training & Certification",
  "Access to innovation & research curriculum modules",
  "Access to documentation templates",
  "Access to research lab modules",
  "Assessment rubrics & standards framework",
  "Ongoing mentoring & support to teachers",
  "School certification pathways",
  "Eligibility for higher institutional recognition",
];

const InstitutionalMember = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="institutional"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        
        {/* Top Section: Title & Image Split */}
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center" sx={{ mb: { xs: 4, md: 4 } }}>
          
          {/* Left: Text Header */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Stack spacing={2.5}>
              {/* Badge */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: "rgba(27, 54, 93, 0.06)",
                    color: "#1B365D",
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
                  Institutional Membership
                </Box>
              </Box>

              {/* Title & Description */}
              <Stack spacing={1.5}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "26px", sm: "32px", md: "35px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  IAIRE Institutional <br />
                  <span style={{ color: "#1B365D" }}>Membership for Schools</span>
                </Typography>
                
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.5,
                    color: "#4B5563",
                    maxWidth: "700px",
                  }}
                >
                  Institutional Membership is the entry-level designation conferred upon admission to the Academy and payment of applicable annual membership dues. It entitles the institution to participate in Academy programs, access Academy resources, sponsor educators for training and certification, and use the corresponding Academy designation in accordance with <strong>IAIRE</strong> branding and usage policies.
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Right: Visual cover illustration banner */}
          <Grid size={{ xs: 12, md: 4.5 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "160px", sm: "180px", md: "170px" },
                maxWidth: "340px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 15px 30px rgba(27, 54, 93, 0.04)",
                animation: "floatAnimation 6s ease-in-out infinite",
                "@keyframes floatAnimation": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-5px)" },
                },
              }}
            >
              <Image
                src={heroImg}
                alt="IAIRE Institutional Membership accreditation flat illustration scene"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>

        </Grid>

        {/* Middle Section: Perfect 3x3 Grid of 9 Benefits */}
        <Box sx={{ mb: { xs: 4, md: 4 }, width: "100%" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "11px",
              fontWeight: 800,
              color: "#1B365D",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 2,
            }}
          >
            Institutional Benefits & Deliverables
          </Typography>

          <Grid container spacing={2}>
            {institutionalBenefits.map((benefit, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} sx={{ display: "flex" }}>
                  <Box
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    sx={{
                      width: "100%",
                      p: 2,
                      borderRadius: "12px",
                      border: "1px solid rgba(27, 54, 93, 0.06)",
                      backgroundColor: isHovered ? "rgba(59, 130, 246, 0.03)" : "rgba(27, 54, 93, 0.02)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      transition: "all 0.25s ease-in-out",
                      cursor: "default",
                      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                      boxShadow: isHovered ? "0 8px 16px rgba(27, 54, 93, 0.04)" : "none",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: isHovered ? "#3B82F6" : "#1B365D",
                        fontSize: 18,
                        flexShrink: 0,
                        transition: "color 0.2s ease",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: isHovered ? "#0B1727" : "#4B5563",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Bottom Section: Centered Actions Row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.25}
          sx={{ width: "100%", justifyContent: "center", gap: 1.5 }}
          alignItems="center"
        >
          <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: COLORS.WHITE,
                backgroundColor: "#1B365D",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  backgroundColor: "#122744",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                },
              }}
            >
              Become an Institutional Member
            </Button>
          </Link>

          <Link href="#pathways" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: "#1B365D",
                borderColor: "#1B365D",
                borderWidth: "1.5px",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  borderWidth: "1.5px",
                  borderColor: "#122744",
                  color: "#122744",
                  backgroundColor: "rgba(27, 54, 93, 0.04)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              View Institutional Pathways
            </Button>
          </Link>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
              sx={{
                whiteSpace: "nowrap",
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "none",
                color: "#4B5563",
                borderColor: "rgba(0, 0, 0, 0.15)",
                borderWidth: "1.5px",
                borderRadius: "100px",
                px: 3.5,
                py: 1.2,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  borderWidth: "1.5px",
                  borderColor: "#1B365D",
                  color: "#1B365D",
                  backgroundColor: "rgba(27, 54, 93, 0.04)",
                  transform: "translateY(-2px)",
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                  },
                },
              }}
            >
              Request Membership Details
            </Button>
          </Link>
        </Stack>

      </Container>
    </Box>
  );
};

export default InstitutionalMember;
