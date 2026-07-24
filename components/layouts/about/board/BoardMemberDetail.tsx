"use client";

import React from "react";
import { Box, Container, Stack, Typography, Divider, Chip } from "@mui/material";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import type { BoardMember } from "@/utils/boardMembers";
import BeamButton from "@/components/widgets/BeamButton";
import StandardsImpactSection from "../../home/StandardsImpactSection";
import SchoolEcosystemSection from "../../home/SchoolEcosystemSection";
import RecognitionSection from "../../home/RecognitionSection";

interface BoardMemberDetailProps {
  member: BoardMember;
}

const BoardMemberDetail = ({ member }: BoardMemberDetailProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F1F5F9",
        pb: { xs: 8, md: 12 },
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Glow Flares for Glassmorphism Contrast */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: "120px", md: "145px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Back Button & Navigation */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 4 }}
        >
          <Link href="/about/board" style={{ textDecoration: "none" }}>
            <BeamButton
              startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "none",
                color: "#1B365D",
                px: 2.5,
                py: 1,
                borderRadius: "100px",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#1B365D",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "#1B365D",
                  transform: "translateX(-4px)",
                },
              }}
            >
              Back to Board Members
            </BeamButton>
          </Link>

          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: 700,
              color: "#64748B",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: { xs: "none", sm: "block" },
            }}
          >
            IAIRE / BOARD MEMBER PROFILE
          </Typography>
        </Stack>

        {/* 1. Frosted Glass Profile Header Card */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            p: { xs: 3.5, sm: 5, md: 6 },
            boxShadow:
              "0 20px 50px rgba(15, 23, 42, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
            mb: 4,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glass Top Highlight */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)",
            }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 6 }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Member Photo in Glass Frame */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "220px", sm: "240px", md: "260px" },
                aspectRatio: "3 / 4",
                borderRadius: "22px",
                overflow: "hidden",
                border: "2px solid rgba(255, 255, 255, 0.9)",
                boxShadow:
                  "0 15px 35px rgba(15, 23, 42, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                flexShrink: 0,
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />

              {/* Glass Badge Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  right: 12,
                  backgroundColor: "rgba(11, 23, 39, 0.75)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "12px",
                  px: 1.5,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <VerifiedIcon sx={{ fontSize: 16, color: "#3B82F6" }} />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  IAIRE Board Member
                </Typography>
              </Box>
            </Box>

            {/* Member Details */}
            <Stack
              spacing={2.5}
              sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
            >
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                <Chip
                  icon={<PublicIcon sx={{ fontSize: 15, color: "#1B365D !important" }} />}
                  label={member.role}
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1B365D",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    px: 1.5,
                    py: 2.2,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(27, 54, 93, 0.15)",
                    boxShadow: "0 2px 10px rgba(27, 54, 93, 0.05)",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "36px", md: "42px" },
                  fontWeight: 900,
                  color: "#0B1727",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                {member.name}
              </Typography>

              <Divider
                sx={{
                  borderColor: "rgba(27, 54, 93, 0.12)",
                  width: "80px",
                  mx: { xs: "auto", md: 0 },
                }}
              />

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <ApartmentIcon
                  sx={{ fontSize: 22, color: "#3B82F6", mt: 0.2, flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "15px", md: "17px" },
                    fontWeight: 600,
                    color: "#334155",
                    lineHeight: 1.5,
                  }}
                >
                  {member.title}
                </Typography>
              </Stack>

              {member.location && (
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 18, color: "#64748B" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#64748B",
                    }}
                  >
                    {member.location}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Box>

        {/* 2. Frosted Glass Biography Card */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            p: { xs: 4, sm: 6, md: 7 },
            boxShadow:
              "0 20px 50px rgba(15, 23, 42, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glass Highlight */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
            }}
          />

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: "#1B365D",
              textTransform: "uppercase",
              mb: 4,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            Biography
            <Box
              sx={{
                height: "1px",
                flex: 1,
                backgroundColor: "rgba(27, 54, 93, 0.12)",
              }}
            />
          </Typography>

          <Stack spacing={3.5} sx={{ maxWidth: "960px" }}>
            {member.bio.map((paragraph, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "15.5px", md: "16.5px" },
                  fontWeight: idx === 0 ? 500 : 400,
                  color: idx === 0 ? "#0F172A" : "#374151",
                  lineHeight: 1.85,
                  letterSpacing: "0.01em",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Additional Homepage Sections */}
      <Box sx={{ mt: 10, position: "relative", zIndex: 1 }}>
        <StandardsImpactSection />
        <SchoolEcosystemSection />
        <RecognitionSection />
      </Box>
    </Box>
  );
};

export default BoardMemberDetail;
