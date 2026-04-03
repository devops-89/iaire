"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Membership", href: "#" },
  { title: "Fellows", href: "#" },
  { title: "Programs", href: "#" },
  // { title: "Awards & Grants", href: "#" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#0B1726",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: { xs: "70px", md: "85px" },
          }}
        >
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#D4AF37",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              I
            </Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 800,
                fontSize: "1.4rem",
                color: COLORS.WHITE,
                letterSpacing: -0.5,
              }}
            >
              IAIRE
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
              ml: 5,
            }}
          >
            {navLinks.map((link, i) => (
              <Link href={link.href} key={i}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: "14px",
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    textTransform: "none",
                    fontFamily: '"Inter", sans-serif',
                    "&:hover": {
                      color: "#D4AF37",
                    },
                    ...(link.title === "Home" && {
                      bgcolor: "#1A2533",
                      borderRadius: "10px",
                      px: 2.5,
                    }),
                  }}
                >
                  {link.title}
                </Button>
              </Link>
            ))}
            <Button
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: COLORS.WHITE,
                fontSize: "14px",
                fontWeight: 500,
                px: 2,
                textTransform: "none",
                fontFamily: '"Inter", sans-serif',
                "&:hover": { color: "#D4AF37" },
              }}
            >
              More
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            spacing={1.5}
            sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}
          >
            <Link href="/login">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: COLORS.WHITE,
                  textTransform: "none",
                  borderRadius: "100px",
                  px: 3,
                  py: 0.8,
                  fontWeight: 600,
                  fontSize: "14px",
                  fontFamily: '"Inter", sans-serif',
                  "&:hover": {
                    borderColor: COLORS.WHITE,
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                Member Login
              </Button>
            </Link>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#D4AF37",
                color: "#111827",
                fontWeight: 700,
                textTransform: "none",
                borderRadius: "100px",
                px: 4,
                py: 1,
                fontSize: "14px",
                fontFamily: '"Inter", sans-serif',
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#B88A40",
                  boxShadow: "none",
                },
              }}
            >
              Join IAIRE
            </Button>
          </Stack>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  bgcolor: "#0B1726",
                  color: COLORS.WHITE,
                },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{link.title}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">More</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
