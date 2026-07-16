"use client";

import React, { useState } from "react";
import { Box, Container, Divider, Grid, Link, Stack, Typography, InputBase, Button } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import logo from "@/images/logo/iaire_logo_white.png";
import NextLink from "next/link";

const FooterLink = ({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) => {
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
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
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
                    Subscribe to receive insights, program updates, and youth competition announcements.
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
                  <Button
                    type="submit"
                    sx={{
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
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Middle Row: Links Grid */}
          <Grid container spacing={{ xs: 5, md: 4 }}>
            
            {/* Column 1: Logo and About Pitch */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Stack spacing={3.5} sx={{ pr: { md: 5 } }}>
                <Box sx={{ mb: -0.5 }}>
                  <Image
                    src={logo}
                    alt="IAIRE Logo"
                    width={150}
                    style={{
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
                
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  Nurturing a culture of innovation, research, and entrepreneurship among youth globally. Helping schools build sustainable future-ready ecosystems.
                </Typography>

                {/* Social Links Stack */}
                <Stack direction="row" spacing={2}>
                  <Link href="#" sx={{ color: "rgba(255, 255, 255, 0.4)", "&:hover": { color: "#3B82F6" }, transition: "color 0.2s ease" }}>
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                  </Link>
                  <Link href="#" sx={{ color: "rgba(255, 255, 255, 0.4)", "&:hover": { color: "#3B82F6" }, transition: "color 0.2s ease" }}>
                    <TwitterIcon sx={{ fontSize: 20 }} />
                  </Link>
                  <Link href="#" sx={{ color: "rgba(255, 255, 255, 0.4)", "&:hover": { color: "#3B82F6" }, transition: "color 0.2s ease" }}>
                    <InstagramIcon sx={{ fontSize: 20 }} />
                  </Link>
                </Stack>
              </Stack>
            </Grid>

            {/* Column 2: Explore (Main Sections) */}
            <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore
                </Typography>
                
                <Stack spacing={2}>
                  <FooterLink href="/">Home Page</FooterLink>
                  <FooterLink href="/about">Who We Are</FooterLink>
                  <FooterLink href="/programs">What We Do</FooterLink>
                  <FooterLink href="/signup/role-selection">Get Involved</FooterLink>
                  <FooterLink href="/about#contact">Contact Us</FooterLink>
                </Stack>
              </Stack>
            </Grid>

            {/* Column 3: Ecosystem (Pathways) */}
            <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Ecosystem
                </Typography>
                
                <Stack spacing={2}>
                  <FooterLink href="/membership">Membership</FooterLink>
                  <FooterLink href="/programs">Programs</FooterLink>
                  <FooterLink href="/programs">Resources</FooterLink>
                  <FooterLink href="/about">News & Impact</FooterLink>
                </Stack>
              </Stack>
            </Grid>

            {/* Column 4: Contact & Login Info */}
            <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Connect
                </Typography>
                
                <Stack spacing={2}>
                  <FooterLink href="mailto:info@iaire.org" icon={<MailOutlineIcon sx={{ fontSize: 16 }} />}>
                    info@iaire.org
                  </FooterLink>
                  <FooterLink href="/login">Member Login</FooterLink>
                  <FooterLink href="/signup/role-selection">Join IAIRE</FooterLink>
                </Stack>
              </Stack>
            </Grid>

          </Grid>

          {/* Divider */}
          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.06)", my: 0 }} />

          {/* Bottom Row: Copyright & Legal Policies */}
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
                href="#"
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
                href="#"
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
                href="#"
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
