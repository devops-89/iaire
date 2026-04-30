"use client";

import { COLORS } from "@/utils/enum";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const FellowHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        pt: { xs: "120px", md: "160px" },
        pb: { xs: "60px", md: "80px" },
        background: `linear-gradient(180deg, #0A190F 0%, #1B3B2B 100%)`,
        color: COLORS.WHITE,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Image
            src="/images/icon/recoveryIcon.png"
            alt="icon"
            width={64}
            height={64}
            style={{ width: "auto", height: "auto", maxWidth: "64px" }}
          />
        </Box>

        <Typography
          variant="h1"
          sx={{
            maxWidth:"309px",
            lineHeight: { xs: "1.2", md: "48px" },
            mx:"auto",
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "48px" },
            mb: 3,
          }}
        >
          IAIRE Fellows
        </Typography>

        {/* SUBTEXT */}
        <Typography
          sx={{
            maxWidth:"900px",
            px: { xs: 2, sm: 3, md: 0 },
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "1rem", md: "20px" },
            mx: "auto",
            fontWeight:400,
            lineHeight: "28px",
          }}
        >
          The highest honor in the International Academy for Innovation,
          Research & Entrepreneurship
        </Typography>

      </Container>
    </Box>
  );
};

export default FellowHero;