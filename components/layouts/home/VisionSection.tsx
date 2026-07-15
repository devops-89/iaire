"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";

const VisionSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - very subtle light orange glow on the side */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          {/* Left Column: Heading */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{ width: 16, height: 2, backgroundColor: "#F85D00" }}
                />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#F85D00",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Vision
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "32px", sm: "40px", md: "46px" },
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  color: "#0A0A0B",
                }}
              >
                The World Is Changing. <br />
                <span style={{ color: "#F85D00" }}>
                  Education Must Change With It.
                </span>
              </Typography>
            </Stack>
          </Grid>

          {/* Right Column: Paragraphs & CTA */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "16px", md: "19px" },
                  fontWeight: 500,
                  color: "#2C2C30",
                  lineHeight: 1.6,
                }}
              >
                Artificial Intelligence, automation, robotics, climate change,
                healthcare challenges, sustainability issues, and rapid
                technological disruption are reshaping the future.
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#5E5E65",
                  lineHeight: 1.7,
                }}
              >
                The students of today will not succeed by memorizing answers
                alone. They will need to ask better questions, identify real
                problems, think critically, conduct research, design solutions,
                protect ideas, and build innovations that create meaningful
                impact.
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#5E5E65",
                  lineHeight: 1.7,
                }}
              >
                <strong>IAIRE exists to support this transformation.</strong> We
                work with schools, educators, students, researchers, innovators,
                and institutions to make innovation and research a structured
                part of education — not an occasional activity, competition, or
                exhibition.
              </Typography>

              <Box sx={{ pt: 2 }}>
                <Link href="/about">
                  <Button
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      fontWeight: 600,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#F85D00",
                      borderRadius: "50px",
                      px: 4,
                      py: 1.5,
                      boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#d14e03",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                      },
                    }}
                  >
                    Learn About the IAIRE Vision →
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VisionSection;
