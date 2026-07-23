"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import heroImg from "@/public/images/get-involved/board_meeting_scene.png";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const ForBoardMembers = () => {
  return (
    <Box
      id="board-members"
      sx={{
        height: { xs: "auto", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#F8F9FC",
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
          right: "-5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
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
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          {/* Image Column on Left (for desktop, second on mobile) */}
          <Grid size={{ xs: 12, md: 5.2 }} order={{ xs: 2, md: 1 }}>
            <Box>
              {/* Outer soft glowing outline frame */}

              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 25px 50px rgba(27, 54, 93, 0.06)",
                  width: "100%",
                  aspectRatio: "1/1",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroImg}
                  alt="IAIRE For Board Members & Mentors - Advisory board meeting classroom scene illustration"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
              <Box sx={{ display: { lg: "none", xs: "block" }, mt: 2 }}>
                <Link
                  href="/signup/role-selection"
                  style={{ textDecoration: "none" }}
                >
                  <BeamButton
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.1,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Serve as an Expert Mentor
                  </BeamButton>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Text/CTA Column on Right (for desktop, first on mobile) */}
          <Grid
            size={{ xs: 12, md: 6.8 }}
            order={{ xs: 1, md: 2 }}
            sx={{ pl: { md: 4 } }}
          >
            <Stack spacing={3.25} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SectionBadge label="For Scientific Board & Expert Mentors" align="center" />
              </Box>

              {/* Title & Description */}
              <Stack spacing={1.5} data-aos="fade-up" data-aos-duration="800">
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "34px", md: "38px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Guide the Next <br />
                  <span style={{ color: "#1B365D" }}>
                    Generation of Innovators
                  </span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  <strong>IAIRE</strong> invites qualified scientists,
                  researchers, inventors, entrepreneurs, educators, policy
                  leaders, and industry experts to contribute to standards
                  development, mentoring, review, certification, fellowship
                  evaluation, ethics, and knowledge exchange.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  By joining our scientific advisory panels or expert mentor
                  networks, you play a vital role in providing the academic
                  rigor, quality assurance, and real-world credibility that
                  empowers future innovators.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Box sx={{ display: { lg: "block", xs: "none" } }}>
                <Link
                  href="/signup/role-selection"
                  style={{ textDecoration: "none" }}
                >
                  <BeamButton
                    variant="contained"
                    sx={{
                      width: "50%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.1,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Serve as an Expert Mentor
                  </BeamButton>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForBoardMembers;
