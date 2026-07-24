"use client";

import React from "react";
import { Box, Typography, Stack, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { inter } from "@/utils/fonts";
import SectionBadge from "@/components/widgets/SectionBadge";

interface FaqHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FaqHeader: React.FC<FaqHeaderProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Stack
      spacing={2.5}
      alignItems="center"
      sx={{ textAlign: "center", maxWidth: "800px" }}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <SectionBadge label="HELP & SUPPORT" align="center" />
      </Box>

      <Typography
        variant="h1"
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: { xs: "32px", sm: "42px", md: "48px" },
          fontWeight: 900,
          color: "#0B1727",
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: { xs: "15px", md: "17px" },
          color: "#5F5F6A",
          lineHeight: 1.6,
          maxWidth: "700px",
        }}
      >
        Have questions about IAIRE institutional membership, educator
        certifications, student pathways, or school innovation hubs? Find
        detailed answers below.
      </Typography>

      {/* Search Bar Input */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "640px",
          mt: 2,
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "50px",
          px: 2.5,
          py: 1.25,
          border: "1px solid #E5E5E9",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          "&:focus-within": {
            borderColor: "#1B365D",
            boxShadow: "0 12px 35px rgba(27, 54, 93, 0.12)",
          },
        }}
      >
        <SearchIcon sx={{ color: "#8E8E93", mr: 1.5, fontSize: 22 }} />
        <InputBase
          placeholder="Search questions, memberships, certifications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            flex: 1,
            fontFamily: inter.style.fontFamily,
            fontSize: "15px",
            color: "#0B1727",
            "& input::placeholder": {
              color: "#9CA3AF",
              opacity: 1,
            },
          }}
        />
        {searchQuery && (
          <Button
            onClick={() => setSearchQuery("")}
            sx={{
              minWidth: "auto",
              p: 0.5,
              color: "#8E8E93",
              borderRadius: "50%",
              "&:hover": {
                color: "#0B1727",
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ClearIcon sx={{ fontSize: 18 }} />
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default FaqHeader;
