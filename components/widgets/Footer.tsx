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
        color: "rgba(255, 255, 255, 0.5)",
        textDecoration: "none",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        transition: "all 0.25s ease",
        "&:hover": {
          color: "#F85D00",
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
        borderTop: "1px solid rgba(248, 93, 0, 0.12)",
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
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
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
                      borderColor: "rgba(248, 93, 0, 0.4)",
                      boxShadow: "0 0 15px rgba(248, 93, 0, 0.1)",
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
                      backgroundColor: "#F85D00",
                      color: "#FFFFFF",
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 600,
                      fontSize: "13px",
                      textTransform: "none",
                      borderRadius: "30px",
                      px: 3,
                      py: 1,
                      boxShadow: "0 4px 10px rgba(248, 93, 0, 0.2)",
                      "&:hover": {
                        backgroundColor: "#e05400",
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
            <Grid size={{ xs: 12, md: 4 }}>
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
              </Stack>
            </Grid>

            {/* Column 2: Quick Links */}
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
                  Quick Links
                </Typography>
                
                <Stack spacing={2}>
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/about">About Us</FooterLink>
                  <FooterLink href="/chapters/india">IAIRE India Chapter</FooterLink>
                  <FooterLink href="/programs">Programs</FooterLink>
                </Stack>
              </Stack>
            </Grid>

            {/* Column 3: Membership */}
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
                  Membership
                </Typography>
                
                <Stack spacing={2}>
                  <FooterLink href="/membership/become-member">Become a Member</FooterLink>
                  <FooterLink href="/membership/benefits">Membership Benefits</FooterLink>
                  <FooterLink href="https://topyounginnovators.vercel.app/">Top Young Innovators</FooterLink>
                </Stack>
              </Stack>
            </Grid>

            {/* Column 4: Connect */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
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
                  <FooterLink href="/about#contact">Contact Us</FooterLink>
                  <FooterLink href="mailto:info@iaire.org" icon={<MailOutlineIcon sx={{ fontSize: 16 }} />}>
                    info@iaire.org
                  </FooterLink>
                  <FooterLink href="#" icon={<LinkedInIcon sx={{ fontSize: 16 }} />}>
                    LinkedIn
                  </FooterLink>
                  <FooterLink href="#" icon={<TwitterIcon sx={{ fontSize: 16 }} />}>
                    Twitter
                  </FooterLink>
                  <FooterLink href="#" icon={<InstagramIcon sx={{ fontSize: 16 }} />}>
                    Instagram
                  </FooterLink>
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
              © {new Date().getFullYear()} IAIRE Academy. All rights reserved.
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
