"use client";

import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const MemberAdvantage = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#07080C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative radial glows */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          backgroundColor: "#1B365D",
          filter: "blur(180px)",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={5} alignItems="center" sx={{ textAlign: "center" }}>
          
          {/* Section Subtitle Tag */}
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#1B365D",
              textTransform: "uppercase",
            }}
          >
            The IAIRE Advantage
          </Typography>

          {/* Section Main Title */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: newBlack_medium.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: "30px", sm: "36px", md: "42px" },
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
            }}
          >
            The IAIRE Member Advantage
          </Typography>

          {/* Frosted Glass Quote Box */}
          <Box
            sx={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "28px",
              p: { xs: 4, sm: 5, md: 6 },
              position: "relative",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Big quote mark icon */}
            <FormatQuoteIcon
              sx={{
                fontSize: 64,
                color: "rgba(248, 93, 0, 0.15)",
                position: "absolute",
                top: 20,
                left: 20,
              }}
            />

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: "1.7",
                color: "#FFFFFF",
                position: "relative",
                zIndex: 2,
              }}
            >
              "Innovation education becomes powerful when it is structured, supported, and sustained. IAIRE membership gives schools, teachers, and students the system they need to make that happen."
            </Typography>
          </Box>

          {/* Body Sentence */}
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "15.5px", md: "17px" },
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.7",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Membership is more than access. It is alignment with a global movement that believes the future belongs to those who can imagine better possibilities — and build them.
          </Typography>

          {/* Final CTA Action Button */}
          <Box sx={{ pt: 2 }}>
            <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: inter.style.fontFamily,
                  borderRadius: "50px",
                  px: 5,
                  py: 1.8,
                  backgroundColor: "#1B365D",
                  color: "#FFFFFF",
                  textTransform: "none",
                  boxShadow: "0 10px 25px rgba(248, 93, 0, 0.35)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: "#122744",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 30px rgba(248, 93, 0, 0.45)",
                  },
                }}
              >
                Become a Member Today
              </Button>
            </Link>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default MemberAdvantage;
