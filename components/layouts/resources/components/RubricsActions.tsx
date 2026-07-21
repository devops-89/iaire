"use client";

import React from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import BeamButton from "@/components/widgets/BeamButton";

export const RubricsActions = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={2.25}
    sx={{ width: "100%", justifyContent: "flex-start", gap: 1.5 }}
    alignItems="center"
  >
    {/* <Link href="/login" style={{ textDecoration: "none" }}>
      <BeamButton
        variant="contained"
        sx={{
          whiteSpace: "nowrap",
          fontFamily: inter.style.fontFamily,
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "none",
          color: "#0B1528",
          backgroundColor: COLORS.WHITE,
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          boxShadow: "0 4px 14px rgba(255, 255, 255, 0.15)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            backgroundColor: "#E2E8F0",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(255, 255, 255, 0.25)",
          },
        }}
      >
        View Rubrics
      </BeamButton>
    </Link> */}

    <Link href="/login" style={{ textDecoration: "none" }}>
      <BeamButton
        variant="outlined"
        sx={{
          whiteSpace: "nowrap",
          fontFamily: inter.style.fontFamily,
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "none",
          color: COLORS.WHITE,
          borderColor: COLORS.WHITE,
          borderWidth: "1.5px",
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderWidth: "1.5px",
            borderColor: "#93C5FD",
            color: "#93C5FD",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            transform: "translateY(-2px)",
          },
        }}
      >
        Access Member Resources
      </BeamButton>
    </Link>

    {/* <Link href="/contact" style={{ textDecoration: "none" }}>
      <BeamButton
        variant="outlined"
        endIcon={
          <ArrowForwardIcon
            className="arrow-icon"
            sx={{ transition: "transform 0.25s ease" }}
          />
        }
        sx={{
          whiteSpace: "nowrap",
          fontFamily: inter.style.fontFamily,
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "none",
          color: "rgba(255, 255, 255, 0.7)",
          borderColor: "rgba(255, 255, 255, 0.25)",
          borderWidth: "1.5px",
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderWidth: "1.5px",
            borderColor: COLORS.WHITE,
            color: COLORS.WHITE,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            transform: "translateY(-2px)",
            "& .arrow-icon": {
              transform: "translateX(4px)",
            },
          },
        }}
      >
        Request Standards Overview
      </BeamButton>
    </Link> */}
  </Stack>
);
