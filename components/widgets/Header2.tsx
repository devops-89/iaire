"use client";

import React, { useState } from "react";
import { HEADER_CONTENT } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { newBlack_medium, inter } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Stack,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/images/logo/iaire_logo.png";
import logoWhite from "@/images/logo/iaire_logo_white.png";

// Material Icons matching the reference style
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import CardMembershipIcon from "@mui/icons-material/CardMembershipOutlined";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEventsOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const getMenuMetaData = (label: string, index: number) => {
  const code = `IA-0${index + 1}`;
  let icon = <HomeIcon sx={{ color: "#FFFFFF", fontSize: 24 }} />;

  switch (label.toLowerCase()) {
    case "home":
      icon = <HomeIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "about":
      icon = <InfoIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "membership":
      icon = <CardMembershipIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "chapters":
      icon = <LanguageIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "innovation competition":
      icon = <EmojiEventsIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "awards & honors":
      icon = <WorkspacePremiumIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
  }
  return { code, icon };
};

const Header2 = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        position: "fixed",
        top: 20,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "100px",
            px: 3,
            py: 1.25,
            width: "100%",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left Side: Animated Hamburger Trigger */}
            <Box
              sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}
            >
              <IconButton
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{
                  width: 44,
                  height: 44,
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  "&:hover": {
                    backgroundColor: "rgba(248, 93, 0, 0.08)",
                  },
                }}
              >
                <Stack spacing={0.6} alignItems="center" sx={{ width: 22 }}>
                  <Box
                    sx={{
                      width: 22,
                      height: 2,
                      backgroundColor: menuOpen ? "#F85D00" : "#2C2C30",
                      borderRadius: "2px",
                      transform: menuOpen
                        ? "rotate(45deg) translate(5px, 5px)"
                        : "none",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  <Box
                    sx={{
                      width: menuOpen ? 22 : 16,
                      height: 2,
                      backgroundColor: menuOpen ? "#F85D00" : "#2C2C30",
                      borderRadius: "2px",
                      opacity: menuOpen ? 0 : 1,
                      transform: menuOpen ? "scale(0)" : "none",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  <Box
                    sx={{
                      width: 22,
                      height: 2,
                      backgroundColor: menuOpen ? "#F85D00" : "#2C2C30",
                      borderRadius: "2px",
                      transform: menuOpen
                        ? "rotate(-45deg) translate(6px, -6px)"
                        : "none",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </Stack>
              </IconButton>
            </Box>

            {/* Center: Logo */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src={logo}
                  alt="IAIRE Logo"
                  width={140}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </Box>

            {/* Right Side: Join Button */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="/signup/role-selection"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: inter.style.fontFamily,
                    border: "1.5px solid #F85D00",
                    px: 3,
                    py: 0.75,
                    borderRadius: "50px",
                    color: "#F85D00",
                    textTransform: "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      border: "1.5px solid #d14e03",
                      color: "#d14e03",
                      backgroundColor: "rgba(248, 93, 0, 0.04)",
                    },
                  }}
                >
                  Join the Ecosystem
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Container>

      {/* Floating Rounded Navigation Drawer Overlay */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "calc(100vw - 40px)", sm: "380px" },
            height: "calc(100vh - 40px)",
            m: 2.5, // Float with space from screen edges
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(30px) saturate(190%)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "32px",
            color: "#1D1D1F",
            px: 3.5,
            py: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.12)",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Stack spacing={4} sx={{ width: "100%" }}>
          {/* Drawer Header (Logo & Close Button) */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              src={logo}
              alt="IAIRE Logo"
              width={120}
              style={{ objectFit: "contain" }}
            />

            <IconButton
              onClick={() => setMenuOpen(false)}
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                color: "#1D1D1F",
                "&:hover": {
                  backgroundColor: "rgba(248, 93, 0, 0.1)",
                  color: "#F85D00",
                },
              }}
            >
              {/* Close Icon */}
              <Stack spacing={0.6} alignItems="center" sx={{ width: 16 }}>
                <Box
                  sx={{
                    width: 16,
                    height: 2,
                    backgroundColor: "currentColor",
                    transform: "rotate(45deg) translate(3px, 3px)",
                  }}
                />
                <Box
                  sx={{
                    width: 16,
                    height: 2,
                    backgroundColor: "currentColor",
                    transform: "rotate(-45deg) translate(3px, -3px)",
                  }}
                />
              </Stack>
            </IconButton>
          </Stack>

          {/* Custom Navigation Menu List Items */}
          <Stack spacing={2} sx={{ pt: 1 }}>
            {HEADER_CONTENT.map((val, i) => {
              const hasSub = val.subModules && val.subModules.length > 0;
              const isExpanded = expandedItem === val.label;
              const { icon } = getMenuMetaData(val.label, i);

              const cardContent = (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={hasSub ? () => toggleExpand(val.label) : undefined}
                  sx={{
                    cursor: "pointer",
                    py: 1,
                    px: 1.5,
                    borderRadius: "20px",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    {/* Floating Premium Icon Container */}
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        backgroundColor: isExpanded
                          ? "rgba(248, 93, 0, 0.12)"
                          : "rgba(0, 0, 0, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {React.cloneElement(icon as React.ReactElement<any>, {
                        sx: {
                          color: isExpanded ? "#F85D00" : "#1D1D1F",
                          fontSize: 22,
                          transition: "color 0.25s ease",
                        },
                      })}
                    </Box>

                    {/* Title Text */}
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "15px",
                        fontWeight: 700,
                        color:
                          isExpanded || pathname === val.url
                            ? "#F85D00"
                            : "#1D1D1F",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {val.label}
                    </Typography>
                  </Stack>

                  {/* Right End Icon indicator */}
                  {hasSub && (
                    <KeyboardArrowDownIcon
                      sx={{
                        color: isExpanded ? "#F85D00" : "rgba(0, 0, 0, 0.25)",
                        transition: "transform 0.3s ease, color 0.3s ease",
                        transform: isExpanded
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  )}
                </Stack>
              );

              return (
                <Box
                  key={i}
                  sx={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    animation: menuOpen
                      ? "menuItemFadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                      : "none",
                    animationDelay: menuOpen ? `${i * 0.08}s` : "0s",
                    "@keyframes menuItemFadeSlideUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  {hasSub ? (
                    <Box>
                      {cardContent}
                      {/* Submenu Accordion Panel (Indented to align under details) */}
                      <Box
                        sx={{
                          maxHeight: isExpanded ? "260px" : "0px",
                          overflow: "hidden",
                          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                          pl: "84px", // Matches icon width (52) + gap (16) + side offset (16)
                          borderLeft: "1.5px solid rgba(0, 0, 0, 0.05)",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.5,
                          mt: isExpanded ? 1 : 0,
                          mb: isExpanded ? 2 : 0,
                        }}
                      >
                        {val.subModules?.map((sub, idx) => (
                          <Link
                            href={sub.url}
                            key={idx}
                            onClick={() => setMenuOpen(false)}
                            style={{ textDecoration: "none" }}
                            target={sub.target || "_self"}
                          >
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "14px",
                                fontWeight: 600,
                                color:
                                  pathname === sub.url
                                    ? "#F85D00"
                                    : "rgba(0, 0, 0, 0.65)",
                                transition: "color 0.2s ease",
                                "&:hover": {
                                  color: "#1D1D1F",
                                },
                              }}
                            >
                              • {sub.label}
                            </Typography>
                          </Link>
                        ))}
                      </Box>
                    </Box>
                  ) : (
                    <Link
                      href={val.url || "#"}
                      onClick={() => setMenuOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      {cardContent}
                    </Link>
                  )}
                </Box>
              );
            })}
          </Stack>
        </Stack>

        {/* Drawer Bottom Ecosystem Link CTA */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            display: "flex",
            justifyContent: "flex-start",
            pl: 1.5,
          }}
        >
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14px",
                fontWeight: 700,
                color: "#1D1D1F",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                borderBottom: "1.5px solid rgba(0, 0, 0, 0.15)",
                pb: 0.5,
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#F85D00",
                  borderColor: "#F85D00",
                  transform: "translateX(3px)",
                },
              }}
            >
              Explore IAIRE Ecosystem →
            </Typography>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header2;
