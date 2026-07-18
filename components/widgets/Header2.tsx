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
  Grid,
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
import BookIcon from "@mui/icons-material/BookOutlined";
import FeedIcon from "@mui/icons-material/FeedOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";

const getMenuMetaData = (label: string, index: number) => {
  const code = `IA-0${index + 1}`;
  let icon = <HomeIcon sx={{ color: "#FFFFFF", fontSize: 24 }} />;

  switch (label.toLowerCase()) {
    case "home":
      icon = <HomeIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "who we are":
      icon = <InfoIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "what we do":
      icon = <EmojiEventsIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "get involved":
      icon = <LanguageIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "membership":
      icon = <CardMembershipIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "programs":
      icon = <WorkspacePremiumIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "resources":
      icon = <BookIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "news & impact":
      icon = <FeedIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
      break;
    case "contact":
      icon = <EmailIcon sx={{ color: "#FFFFFF", fontSize: 22 }} />;
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
        boxSizing: "border-box",
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "100px",
            px: { xs: 2.5, sm: 3 },
            py: { xs: 1, sm: 1.25 },
            boxSizing: "border-box",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ position: "relative" }}
          >
            {/* Left Side: Animated Hamburger Trigger */}
            <Box
              sx={{ display: "flex", justifyContent: "flex-start", zIndex: 1 }}
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
                      backgroundColor: menuOpen ? "#1B365D" : "#2C2C30",
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
                      backgroundColor: menuOpen ? "#1B365D" : "#2C2C30",
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
                      backgroundColor: menuOpen ? "#1B365D" : "#2C2C30",
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

            {/* Center: Logo — absolutely positioned for perfect centering */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src={logo}
                  alt="IAIRE Logo"
                  width={110}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </Box>

            {/* Right Side: Join Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
              <Link
                href="/signup/role-selection"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: 11, sm: 13 },
                    fontWeight: 700,
                    fontFamily: inter.style.fontFamily,
                    border: "1.5px solid #1B365D",
                    px: { xs: 1.75, sm: 3 },
                    py: { xs: 0.6, sm: 0.75 },
                    borderRadius: "50px",
                    color: "#1B365D",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      border: "1.5px solid #122744",
                      color: "#122744",
                      backgroundColor: "rgba(248, 93, 0, 0.04)",
                    },
                  }}
                >
                  Join IAIRE
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Container>

      {/* Floating Rounded Navigation Drawer Overlay */}
      {/* Mega Menu Dropdown Overlay */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            width: "100vw",
            height: "100vh",
            maxHeight: "100vh",
            m: 0,
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "0px",
            color: "#1D1D1F",
            px: { xs: 4, md: 8 },
            py: { xs: 4, md: 6 },
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.15)",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Stack spacing={5} sx={{ width: "100%" }}>
          {/* Drawer Header (Logo & Close Button) */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              src={logo}
              alt="IAIRE Logo"
              width={130}
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
                  backgroundColor: "rgba(27, 54, 93, 0.08)",
                  color: "#1B365D",
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

          {/* Grid of Columns for Mega Menu Links */}
          <Grid container spacing={{ xs: 4, md: 5 }} sx={{ pb: 2 }}>
            {HEADER_CONTENT.filter(val => val.subModules && val.subModules.length > 0).map((val, i) => {
              const { icon } = getMenuMetaData(val.label, i);
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                  <Stack spacing={2.5}>
                    {/* Column Header */}
                    <Link
                      href={val.url || "#"}
                      onClick={() => setMenuOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{
                          pb: 1,
                          borderBottom: "1.5px solid rgba(27, 54, 93, 0.08)",
                          cursor: "pointer",
                          transition: "opacity 0.2s ease",
                          "&:hover": {
                            opacity: 0.8,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "8px",
                            backgroundColor: "rgba(27, 54, 93, 0.06)",
                            color: "#1B365D",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {React.cloneElement(icon as React.ReactElement<any>, {
                            sx: { color: "#1B365D", fontSize: 18 },
                          })}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#1B365D",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                          }}
                        >
                          {val.label}
                        </Typography>
                      </Stack>
                    </Link>

                    {/* Column Links List */}
                    <Stack spacing={1.25} alignItems="flex-start">
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
                              fontSize: "13.5px",
                              fontWeight: 600,
                              color: pathname === sub.url ? "#1B365D" : "rgba(0, 0, 0, 0.6)",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                color: "#1B365D",
                                transform: "translateX(4px)",
                              },
                            }}
                          >
                            • {sub.label}
                          </Typography>
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}

            {/* Column 8: Quick Access */}
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Stack spacing={2.5}>
                {/* Column Header */}
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pb: 1, borderBottom: "1.5px solid rgba(27, 54, 93, 0.08)" }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      color: "#1B365D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <HomeIcon sx={{ color: "#1B365D", fontSize: 18 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "#1B365D",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Quick Links
                  </Typography>
                </Stack>

                {/* Column Links List */}
                <Stack spacing={1.5} alignItems="flex-start" sx={{ pt: 0.5 }}>
                  <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: pathname === "/" ? "#1B365D" : "rgba(0, 0, 0, 0.6)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "#1B365D",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      Home Page
                    </Typography>
                  </Link>

                  <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: pathname === "/contact" ? "#1B365D" : "rgba(0, 0, 0, 0.6)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "#1B365D",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Link>

                  <Link href="/login" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: pathname === "/login" ? "#1B365D" : "rgba(0, 0, 0, 0.6)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "#1B365D",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      Member Login
                    </Typography>
                  </Link>

                  <Link href="/signup/role-selection" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", marginTop: "8px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#FFFFFF",
                        backgroundColor: "#1B365D",
                        borderRadius: "100px",
                        px: 2.5,
                        py: 0.8,
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#122744",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Join IAIRE
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Header2;
