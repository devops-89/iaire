"use client";

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { inter } from "@/utils/fonts";
import BeamButton from "@/components/widgets/BeamButton";
import Link from "next/link";

const FaqCtaCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "900px",
        mt: 4,
        p: { xs: 4, sm: 5 },
        borderRadius: "24px",
        background: "linear-gradient(135deg, #0B1727 0%, #1B365D 100%)",
        color: "#FFFFFF",
        boxShadow: "0 20px 40px rgba(11, 23, 39, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Ambient accent inside CTA */}
      <Box
        sx={{
          position: "absolute",
          top: "-40%",
          right: "-20%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.25) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Stack spacing={1} sx={{ maxWidth: "560px" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "22px", sm: "26px" },
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.25,
            }}
          >
            Still have questions?
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14.5px",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
            }}
          >
            Can't find the answer you're looking for? Contact our academic
            support and compliance team directly.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          sx={{ width: { xs: "100%", sm: "auto" }, flexShrink: 0 }}
        >
          <Box
            component={Link}
            href="/contact"
            sx={{
              textDecoration: "none",
              width: { xs: "100%", sm: "auto" },
              display: "inline-block",
            }}
          >
            <BeamButton
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 3.5,
                py: 1.25,
                fontSize: "14px",
                fontWeight: 700,
                whiteSpace: "nowrap",
                backgroundColor: "#3B82F6",
                color: "#FFFFFF",
                boxShadow: "0 4px 14px rgba(59, 130, 246, 0.35)",
                "&:hover": {
                  backgroundColor: "#2563EB",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Contact Us
            </BeamButton>
          </Box>
          <Box
            component="a"
            href="mailto:info@iaire.org"
            sx={{
              textDecoration: "none",
              width: { xs: "100%", sm: "auto" },
              display: "inline-block",
            }}
          >
            <BeamButton
              variant="outlined"
              startIcon={<EmailOutlinedIcon />}
              beamColorTo="#3B82F6"
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 3.5,
                py: 1.25,
                borderRadius: "100px",
                borderColor: "rgba(255, 255, 255, 0.25)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                textTransform: "none",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Email Support
            </BeamButton>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FaqCtaCard;
