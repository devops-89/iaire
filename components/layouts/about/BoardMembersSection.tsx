"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { boardMembers } from "@/utils/boardMembers";
import BoardMemberCard from "./BoardMemberCard";

const BoardMembersSection = () => {
  const featuredMembers = boardMembers.slice(0, 4);

  return (
    <Box
      id="board-members"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F8F9FC",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={6} data-aos="fade-up" data-aos-duration="800">
          <Stack spacing={2} sx={{ textAlign: "left", maxWidth: "760px" }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                sx={{
                  width: 16,
                  height: 2,
                  backgroundColor: COLORS.PRIMARY_NAVY,
                }}
              />
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: COLORS.PRIMARY_NAVY,
                  textTransform: "uppercase",
                }}
              >
                Leadership
              </Typography>
              <Box
                sx={{
                  width: 16,
                  height: 2,
                  backgroundColor: COLORS.PRIMARY_NAVY,
                }}
              />
            </Stack>

            <Typography
              variant="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: 800,
                color: "#0B1727",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              Scientific & Innovation Board
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15px",
                color: "#64748B",
                lineHeight: 1.7,
                maxWidth: "680px",
                mx: "auto",
              }}
            >
              IAIRE is guided by a distinguished board of global leaders in
              science, technology, healthcare, and entrepreneurship who provide
              oversight for standards, certification, research assessment, and
              innovation strategy.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {featuredMembers.map((member) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.slug}>
                <BoardMemberCard member={member} />
              </Grid>
            ))}
          </Grid>

          <Stack alignItems="center" sx={{ pt: 1 }}>
            <Link href="/about/board" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={
                  <ArrowForwardIcon
                    className="board-cta-arrow"
                    sx={{ transition: "transform 0.25s ease" }}
                  />
                }
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  borderRadius: "100px",
                  px: 4,
                  py: 1.25,
                  boxShadow: "0 8px 24px rgba(27, 54, 93, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    backgroundColor: "#152d4d",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(27, 54, 93, 0.28)",
                    "& .board-cta-arrow": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                Meet All Board Members
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default BoardMembersSection;
