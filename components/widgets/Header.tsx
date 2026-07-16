"use client";

import { HEADER_CONTENT } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { newBlack_medium } from "@/utils/fonts";
import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/images/logo/iaire_logo.png";
import NavItem from "@/components/widgets/NavItem";

const Header = () => {
  const pathname = usePathname();
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
            py: 1,
            width: "100%",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={logo}
                alt="IAIRE Logo"
                width={140}
                style={{ objectFit: "contain" }}
              />
            </Link>

            {/* Navigation Links */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              sx={{ ml: 4 }}
            >
              {HEADER_CONTENT.map((val, i) => (
                <NavItem key={i} val={val} pathname={pathname} />
              ))}
            </Stack>

            {/* Action Buttons */}
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    borderRadius: "50px",
                    px: 3,
                    py: 1,
                    backgroundColor: "#1B365D",
                    color: COLORS.WHITE,
                    textTransform: "none",
                    fontFamily: newBlack_medium.style.fontFamily,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "#122744",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Member Login
                </Button>
              </Link>

              <Link
                href="/signup/role-selection"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: newBlack_medium.style.fontFamily,
                    border: "1.5px solid #1B365D",
                    px: 3,
                    py: 0.8,
                    borderRadius: "50px",
                    color: "#1B365D",
                    textTransform: "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      border: "1.5px solid #122744",
                      color: "#122744",
                      backgroundColor: "rgba(248, 93, 0, 0.05)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Join IAIRE
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
