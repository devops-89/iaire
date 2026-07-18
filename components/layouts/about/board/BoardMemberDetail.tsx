"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import type { BoardMember } from "@/utils/boardMembers";

interface BoardMemberDetailProps {
  member: BoardMember;
}

const BoardMemberDetail = ({ member }: BoardMemberDetailProps) => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FC", pb: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          pt: { xs: "110px", md: "130px" },
          pb: { xs: 4, md: 6 },
          background: "linear-gradient(180deg, #070C15 0%, #0F1726 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Link href="/about/board" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
              sx={{
                mb: 4,
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "none",
                color: "rgba(255,255,255,0.7)",
                px: 0,
                "&:hover": {
                  color: "#93C5FD",
                  backgroundColor: "transparent",
                },
              }}
            >
              Back to Board Members
            </Button>
          </Link>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 360,
                  mx: { xs: "auto", md: 0 },
                  aspectRatio: "1 / 1",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
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

            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={2}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", md: "38px" },
                    fontWeight: 900,
                    color: COLORS.WHITE,
                    lineHeight: 1.2,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 700,
                    color: "#93C5FD",
                    lineHeight: 1.5,
                  }}
                >
                  {member.role}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "15px" },
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                  }}
                >
                  {member.title}
                </Typography>

                {member.location && (
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <LocationOnOutlinedIcon
                      sx={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.55)",
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

      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            border: "1px solid rgba(0,0,0,0.06)",
            p: { xs: 3.5, md: 5 },
            boxShadow: "0 8px 32px rgba(27, 54, 93, 0.06)",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: COLORS.PRIMARY_NAVY,
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Biography
          </Typography>

          <Stack spacing={2.5}>
            {member.bio.map((paragraph, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "14.5px", md: "15.5px" },
                  fontWeight: 400,
                  color: "#475569",
                  lineHeight: 1.75,
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
