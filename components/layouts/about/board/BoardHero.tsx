"use client";

import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const BoardHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        pt: { xs: "120px", md: "160px" },
        pb: { xs: "60px", md: "80px" },
        background: "linear-gradient(180deg, #070C15 0%, #0F1726 100%)",
        color: COLORS.WHITE,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2.5} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  "&:hover": { color: "#93C5FD" },
                  transition: "color 0.2s ease",
                }}
              >
                About IAIRE
              </Typography>
            </Link>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              /
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                fontWeight: 600,
                color: "#93C5FD",
              }}
            >
              Board Members
            </Typography>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              maxWidth: "720px",
              lineHeight: { xs: 1.2, md: 1.15 },
              fontFamily: inter.style.fontFamily,
              fontWeight: 900,
              fontSize: { xs: "2.25rem", md: "48px" },
              letterSpacing: "-0.03em",
            }}
          >
            Scientific & Innovation Board
          </Typography>

          <Typography
            sx={{
              maxWidth: "820px",
              px: { xs: 2, sm: 3, md: 0 },
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "15px", md: "18px" },
              fontWeight: 400,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Meet the distinguished leaders who guide IAIRE&apos;s academic
            standards, research assessment, innovation strategy, and global
            impact across science, technology, healthcare, and entrepreneurship.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default BoardHero;
