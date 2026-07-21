"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Divider} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import type { BoardMember } from "@/utils/boardMembers";
import BeamButton from "@/components/widgets/BeamButton";

interface BoardMemberDetailProps {
  member: BoardMember;
}

const BoardMemberDetail = ({ member }: BoardMemberDetailProps) => {
  // Extract last name or first name for the watermark
  const nameParts = member.name.split(" ");
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : nameParts[0];

  return (
    <Box sx={{ backgroundColor: "#0F1726", pb: { xs: 8, md: 12 }, minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: "120px", md: "150px" },
          pb: { xs: 15, md: 22 }, // Extra padding bottom to allow overlapping bio card
          background: "linear-gradient(180deg, #070C15 0%, #0F1726 100%)",
          overflow: "hidden",
        }}
      >
        {/* Massive Typography Watermark */}
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: inter.style.fontFamily,
            fontSize: { xs: "15vw", md: "12vw" },
            fontWeight: 900,
            color: "rgba(255, 255, 255, 0.02)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 0,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {lastName}
        </Typography>

        {/* Ambient Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "40vw",
            height: "40vw",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(80px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Link href="/about/board" style={{ textDecoration: "none" }}>
            <BeamButton
              startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
              sx={{
                mb: 6,
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "none",
                color: "rgba(255,255,255,0.6)",
                px: 2,
                py: 1,
                borderRadius: "100px",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.15)",
                  transform: "translateX(-4px)",
                },
              }}
            >
              Back to Board Members
            </BeamButton>
          </Link>

          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            {/* Image Column */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 400,
                  mx: { xs: "auto", md: 0 },
                  aspectRatio: "3 / 4",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.2)",
                  transform: "translateY(0)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 40px 70px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.3)",
                    borderColor: "rgba(255,255,255,0.2)",
                  }
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>

            {/* Details Column */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Stack spacing={3}>
                <Stack spacing={1.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: { xs: "36px", md: "52px", lg: "64px" },
                      fontWeight: 900,
                      color: COLORS.WHITE,
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      textShadow: "0 10px 30px rgba(0,0,0,0.5)"
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: { xs: "15px", md: "17px" },
                      fontWeight: 700,
                      color: "#93C5FD", // Light premium blue
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </Typography>
                </Stack>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", width: "80px", my: 1 }} />

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    maxWidth: "600px"
                  }}
                >
                  {member.title}
                </Typography>

                {member.location && (
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 1 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "rgba(59,130,246,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{ fontSize: 16, color: "#93C5FD" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {member.location}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Biography Overlapping Glassmorphic Section */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, mt: { xs: -10, md: -15 } }}>
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(40px)",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.08)",
            p: { xs: 4, sm: 6, md: 8 },
            boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle inner top highlight */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            }}
          />

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#93C5FD",
              textTransform: "uppercase",
              mb: 5,
              display: "flex",
              alignItems: "center",
              gap: 3
            }}
          >
            Biography
            <Box sx={{ height: "1px", flex: 1, backgroundColor: "rgba(255,255,255,0.1)" }} />
          </Typography>

          <Stack spacing={3.5}>
            {member.bio.map((paragraph, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "15px", md: "16.5px" },
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.85,
                  letterSpacing: "0.01em"
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default BoardMemberDetail;
