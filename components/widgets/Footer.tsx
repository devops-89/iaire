"use client";

import BorderBeam from "@/components/animations/BorderBeam";

import BeamButton from "@/components/widgets/BeamButton";
import logo from "@/images/logo/iaire_logo_white.png";
import { FOOTER_CONTENT } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Instagram, X, YouTube } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const FooterLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={href}
      component={isExternal ? "a" : NextLink}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      sx={{
        fontFamily: inter.style.fontFamily,
        color: "rgba(255, 255, 255, 0.55)",
        textDecoration: "none",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        transition: "all 0.25s ease",
        "&:hover": {
          color: "#3B82F6",
          transform: "translateX(4px)",
        },
      }}
    >
      {icon}
      {children}
    </Link>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    // Handle newsletter submission here
  };
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "",
    },
    {
      icon: Instagram,
      href: "",
    },
    {
      icon: FaLinkedinIn,
      href: "",
    },
    {
      icon: YouTube,
      href: "",
    },
    {
      icon: X,
      href: "",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#090A0E",
        color: COLORS.WHITE,
        pt: { xs: 8, md: 10 },
        pb: 5,
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(27, 54, 93, 0.25)",
      }}
    >
      {/* Background glow flares */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "20%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* Top Row: Newsletter Subscription Banner */}
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "24px",
              p: { xs: 4, md: 5 },
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Stay updated on global innovation
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    Subscribe to receive insights, program updates, and youth
                    competition announcements.
                  </Typography>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="form"
                  onSubmit={handleSubscribe}
                  sx={{
                    display: "flex",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "40px",
                    p: 0.75,
                    width: "100%",
                    maxWidth: "480px",
                    ml: { md: "auto" },
                    transition: "all 0.3s ease",
                    "&:focus-within": {
                      borderColor: "rgba(59, 130, 246, 0.4)",
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.1)",
                    },
                  }}
                >
                  <InputBase
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    sx={{
                      ml: 2,
                      flex: 1,
                      color: "#FFFFFF",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      "& input::placeholder": {
                        color: "rgba(255, 255, 255, 0.35)",
                        opacity: 1,
                      },
                    }}
                  />
                  <BeamButton
                    type="submit"
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: "#1B365D",
                      color: "#FFFFFF",
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 600,
                      fontSize: "13px",
                      textTransform: "none",
                      borderRadius: "30px",
                      px: 3,
                      py: 1,
                      boxShadow: "0 4px 10px rgba(27, 54, 93, 0.2)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#122744",
                      },
                    }}
                  >
                    <BorderBeam
                      duration={5}
                      colorFrom="transparent"
                      colorTo="#3B82F6"
                    />
                    Subscribe
                  </BeamButton>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Middle Row: Branding Centered */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              mb: 8,
              mt: 4,
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Image
                src={logo}
                alt="IAIRE Logo"
                width={160}
                style={{
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.5)",
                lineHeight: 1.6,
                maxWidth: "600px",
                mb: 4,
              }}
            >
              Nurturing a culture of innovation, research, and entrepreneurship
              among youth globally. Helping schools build sustainable
              future-ready ecosystems.
            </Typography>

            {/* Social Links Stack */}
            <Stack direction="row" spacing={3}>
              {socialLinks.map((val, i) => (
                <IconButton
                  sx={{
                    color: COLORS.WHITE,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "& svg": {
                      width: 20,
                      height: 20,
                    },
                  }}
                  key={i}
                >
                  <val.icon />
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "1px",
              mb: 6,
              background:
                "linear-gradient(90deg, #3B82F6 0%, #06B6D4 40%, rgba(59, 130, 246, 0.2) 75%, transparent 100%)",
              boxShadow:
                "0 0 8px rgba(59, 130, 246, 0.4), 0 0 15px rgba(6, 182, 212, 0.2)",
            }}
          />

          <Grid container spacing={{ xs: 4, sm: 4, md: 5 }}>
            {FOOTER_CONTENT.filter(
              (cat) => cat.subModules && cat.subModules.length > 0,
            ).map((category, idx) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={idx}>
                <Stack spacing={3.5}>
                  <Link
                    component={NextLink}
                    href={category.url || "#"}
                    underline="none"
                  >
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: COLORS.BEAM_COLOR,
                        },
                      }}
                    >
                      {category.label}
                    </Typography>
                  </Link>

                  <Stack spacing={2.5}>
                    {category.subModules!.map((sub, subIdx) => (
                      <FooterLink key={subIdx} href={sub.url || "#"}>
                        {sub.label}
                      </FooterLink>
                    ))}
                  </Stack>
                  {category.label !== "Quick Links" ? (
                    <Link
                      component={NextLink}
                      href={category.url || "#"}
                      underline="none"
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "rgba(255, 255, 255, 0.24)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          transition: "color 0.2s ease",
                          "&:hover": {
                            color: "#3B82F6",
                          },
                        }}
                      >
                        View All
                      </Typography>
                    </Link>
                  ) : (
                    ""
                  )}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              width: "100%",
              height: "1px",
              my: 0,
              background:
                "linear-gradient(90deg, #3B82F6 0%, #06B6D4 40%, rgba(59, 130, 246, 0.2) 75%, transparent 100%)",
              boxShadow:
                "0 0 8px rgba(59, 130, 246, 0.4), 0 0 15px rgba(6, 182, 212, 0.2)",
            }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2.5}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.4)",
              }}
            >
              © {new Date().getFullYear()} IAIRE. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={3} alignItems="center">
              <Link
                component={NextLink}
                href="/privacy"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                component={NextLink}
                href="/terms"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                Terms of Service
              </Link>
              <Link
                component={NextLink}
                href="/cookies"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                Cookie Settings
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
