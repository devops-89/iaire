"use client";

import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const SubFooterCTA = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        background: "radial-gradient(circle at 50% 120%, rgba(248, 93, 0, 0.1) 0%, #090A0E 70%)",
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
          opacity: 0.02,
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          
          {/* Tag */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 12, height: 2, backgroundColor: "#F85D00" }} />
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.20em",
                color: "#F85D00",
                textTransform: "uppercase",
              }}
            >
              JOIN THE ECOSYSTEM
            </Typography>
            <Box sx={{ width: 12, height: 2, backgroundColor: "#F85D00" }} />
          </Box>

          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "36px", md: "52px" },
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Join a Global Movement
          </Typography>

          {/* Subtext paragraphs */}
          <Stack spacing={2} sx={{ maxWidth: "700px" }}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.6,
                opacity: 0.95,
              }}
            >
              IAIRE is more than an organization. It is a movement to redefine how schools prepare students for the future.
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15px",
                color: "#9D9DA7",
                lineHeight: 1.6,
              }}
            >
              We invite schools, teachers, students, parents, institutions, researchers, policymakers, industry leaders, and innovation partners to join us in building a world where every learner has the opportunity to become a creator, researcher, problem-solver, and changemaker.
            </Typography>
          </Stack>

          {/* CTA Buttons */}
          <Box sx={{ pt: 2 }}>
            <Button
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15px",
                fontWeight: 700,
                textTransform: "none",
                color: "#FFFFFF",
                backgroundColor: "#F85D00",
                borderRadius: "30px",
                p: "14px 36px",
                boxShadow: "0 4px 20px rgba(248, 93, 0, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e05400",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 25px rgba(248, 93, 0, 0.45)",
                },
              }}
            >
              Become a Member →
            </Button>
          </Box>

          {/* Concluding highlight statement */}
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14px",
              color: "#F85D00",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.6,
              pt: 4,
              maxWidth: "600px",
              opacity: 0.9,
            }}
          >
            "The future will be shaped by those who can imagine better possibilities — and build them."
          </Typography>

        </Stack>
      </Container>
    </Box>
  );
};

export default SubFooterCTA;
