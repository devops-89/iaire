"use client";

import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { BoardMember } from "@/utils/boardMembers";

interface BoardMemberCardProps {
  member: BoardMember;
  variant?: "light" | "dark";
}

const BoardMemberCard = ({ member, variant = "light" }: BoardMemberCardProps) => {
  const isDark = variant === "dark";

  return (
    <Link
      href={`/about/board/${member.slug}`}
      style={{ textDecoration: "none", display: "flex", width: "100%" }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          border: isDark
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(0, 0, 0, 0.06)",
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.03)"
            : "#FFFFFF",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: isDark ? "#93C5FD" : COLORS.PRIMARY_NAVY,
            boxShadow: isDark
              ? "0 16px 40px rgba(147, 197, 253, 0.12)"
              : "0 16px 40px rgba(27, 54, 93, 0.1)",
            "& .member-arrow": {
              transform: "translateX(4px)",
              opacity: 1,
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#EEF2F7",
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Stack spacing={1.25} sx={{ p: { xs: 2.5, md: 3 } }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "16px", md: "17px" },
              fontWeight: 800,
              color: isDark ? COLORS.WHITE : "#0B1727",
              lineHeight: 1.3,
            }}
          >
            {member.name}
          </Typography>

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "12px",
              fontWeight: 700,
              color: isDark ? "#93C5FD" : COLORS.PRIMARY_NAVY,
              lineHeight: 1.4,
            }}
          >
            {member.role}
          </Typography>

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "12.5px",
              fontWeight: 500,
              color: isDark ? "rgba(255,255,255,0.65)" : "#64748B",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {member.title}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ pt: 0.5 }}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                fontWeight: 700,
                color: isDark ? "#93C5FD" : COLORS.PRIMARY_NAVY,
              }}
            >
              View Profile
            </Typography>
            <ArrowForwardIcon
              className="member-arrow"
              sx={{
                fontSize: 14,
                color: isDark ? "#93C5FD" : COLORS.PRIMARY_NAVY,
                opacity: 0.7,
                transition: "all 0.25s ease",
              }}
            />
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
};

export default BoardMemberCard;
