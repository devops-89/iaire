import { HEADER_CONTENT } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { newBlack_medium } from "@/utils/fonts";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/images/logo/iaire_logo.png";

const Header = () => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        position: "absolute",
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
              <Image src={logo} alt="IAIRE Logo" width={140} style={{ objectFit: "contain" }} />
            </Link>

            {/* Navigation Links */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              sx={{ ml: 4 }}
            >
              {HEADER_CONTENT.map((val, i) => (
                <Link
                  href={val.url}
                  key={i}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: newBlack_medium.style.fontFamily,
                      fontSize: 14,
                      fontWeight: 600,
                      color: pathname === val.url ? COLORS.WHITE : "#2C2C30",
                      backgroundColor: pathname === val.url ? "#F85D00" : "transparent",
                      px: 2.5,
                      py: 1,
                      borderRadius: "50px",
                      textAlign: "center",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        color: pathname === val.url ? COLORS.WHITE : "#F85D00",
                        backgroundColor: pathname === val.url ? "#d14e03" : "rgba(248, 93, 0, 0.05)",
                      },
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
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
                    backgroundColor: "#F85D00",
                    color: COLORS.WHITE,
                    textTransform: "none",
                    fontFamily: newBlack_medium.style.fontFamily,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "#d14e03",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Member Login
                </Button>
              </Link>
              
              <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: newBlack_medium.style.fontFamily,
                    border: "1.5px solid #F85D00",
                    px: 3,
                    py: 0.8,
                    borderRadius: "50px",
                    color: "#F85D00",
                    textTransform: "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      border: "1.5px solid #d14e03",
                      color: "#d14e03",
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
