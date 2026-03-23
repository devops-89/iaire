"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const footerLinks: { [key: string]: { title: string; href?: string; isText?: boolean; icon?: React.ReactNode }[] } = {
  "IAIRE Academy": [
    { title: "Nurturing a Culture of Innovation, Research and Entrepreneurship among youth.", isText: true },
  ],
  "Quick Links": [
    { title: "About Us", href: "#" },
    { title: "Membership", href: "#" },
    { title: "Programs", href: "#" },
    { title: "Awards & Grants", href: "#" },
  ],
  "Resources": [
    { title: "Webinars & Events", href: "#" },
    { title: "Success Stories", href: "#" },
    { title: "Resource Center", href: "#" },
    { title: "Community", href: "#" },
  ],
  "Connect": [
    { title: "Contact Us", href: "#" },
    { title: "info@iaire.org", href: "mailto:info@iaire.org" },
    { title: "LinkedIn", href: "#", icon: <LinkedInIcon sx={{ fontSize: 20 }} /> },
    { title: "Twitter", href: "#", icon: <TwitterIcon sx={{ fontSize: 20 }} /> },
    { title: "Instagram", href: "#", icon: <InstagramIcon sx={{ fontSize: 20 }} /> },
  ],
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#050B14",
        color: COLORS.WHITE,
        pt: 10,
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 8 }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid key={category} size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: category === "IAIRE Academy" ? COLORS.ACCENT_TAN : COLORS.WHITE,
                  fontWeight: 700,
                  mb: 4,
                  fontSize: "1.1rem",
                }}
              >
                {category}
              </Typography>
              <Stack spacing={2}>
                {links.map((link, index) => (
                  <Box key={index}>
                    {link.isText ? (
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.6)",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {link.title}
                      </Typography>
                    ) : (
                      <Link
                        href={link.href}
                        sx={{
                          color: "rgba(255, 255, 255, 0.6)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          transition: "color 0.2s",
                          "&:hover": { color: COLORS.ACCENT_TAN },
                        }}
                      >
                        {link.icon}
                        {link.title}
                      </Link>
                    )}
                  </Box>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.05)", mb: 4 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.8rem" }}
          >
            © 2025 IAIRE Academy. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.4)",
                textDecoration: "none",
                fontSize: "0.8rem",
                "&:hover": { color: COLORS.WHITE },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.4)",
                textDecoration: "none",
                fontSize: "0.8rem",
                "&:hover": { color: COLORS.WHITE },
              }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
