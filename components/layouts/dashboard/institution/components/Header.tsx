"use client";
import { COLORS } from "@/utils/enum";
import { Person } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const InstitutionHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "fixed",
        top: 0,
        right: 0,
        left: "250px", // Align with sidebar width
        height: "70px",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.72)"
          : COLORS.WHITE,
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: "1px solid",
        borderColor: isScrolled ? "rgba(255, 255, 255, 0.3)" : "#eeeeee",
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.05)" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 1100,
        px: 4,
      }}
    >
      <Avatar
        sx={{
          bgcolor: COLORS.BLUE,
          cursor: "pointer",
          transition: "transform 0.2s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <Person />
      </Avatar>
    </Box>
  );
};

export default InstitutionHeader;
