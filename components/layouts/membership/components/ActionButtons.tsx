"use client";

import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

export const ActionButtons = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={2.25}
    sx={{ width: "100%", justifyContent: "flex-start", gap: 1.5 }}
    alignItems="center"
  >
    <Link href="/login" style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        sx={{
          whiteSpace: "nowrap",
          fontFamily: inter.style.fontFamily,
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "none",
          color: COLORS.WHITE,
          backgroundColor: "#1B365D",
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            backgroundColor: "#122744",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
          },
        }}
      >
        Become an Institutional Member
      </Button>
    </Link>

    {/* <Link href="/contact" style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
        sx={{
          whiteSpace: "nowrap",
          fontFamily: inter.style.fontFamily,
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "none",
          color: "#4B5563",
          borderColor: "rgba(0, 0, 0, 0.15)",
          borderWidth: "1.5px",
          borderRadius: "100px",
          px: 3.5,
          py: 1.2,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderWidth: "1.5px",
            borderColor: "#1B365D",
            color: "#1B365D",
            backgroundColor: "rgba(27, 54, 93, 0.04)",
            transform: "translateY(-2px)",
            "& .arrow-icon": {
              transform: "translateX(4px)",
            },
          },
        }}
      >
        Request Membership Details
      </Button>
    </Link> */}
  </Stack>
);
