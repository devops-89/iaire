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
          <Grid
            size={{ xs: 12, md: 5.2 }}
            order={{ xs: 2, md: 1 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pr: { md: 2 },
            }}
          >
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
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(27, 54, 93, 0.05) 100%)",
                  filter: "blur(12px)",
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />

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
                  For Scientific Board & Expert Mentors
                </Box>
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
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
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

                {/* <Link href="/contact" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#1B365D",
                      borderColor: "#1B365D",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.1,
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
                    Join a Committee
                  </BeamButton>
                </Link>

                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <BeamButton
                    variant="outlined"
                    endIcon={
                      <ArrowForwardIcon
                        className="arrow-icon"
                        sx={{ transition: "transform 0.25s ease" }}
                      />
                    }
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#4B5563",
                      borderColor: "rgba(0, 0, 0, 0.15)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.1,
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
                    Contact IAIRE Leadership
                  </BeamButton>
                </Link> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForBoardMembers;
