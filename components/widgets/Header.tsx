import { HEADER_CONTENT } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import {
  aloeveraDisplay_medium,
  newBlack_light,
  newBlack_medium,
} from "@/utils/fonts";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
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
        top: 10,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Container sx={{ borderRadius: "20px" }}>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "100px",
            px: 2,

            width: "100%",
            py: 1,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image src={logo} alt="" width={150} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{ ml: 5 }}
            >
              {HEADER_CONTENT.map((val, i) => (
                <Link
                  href={val.url}
                  style={{
                    textDecoration: "none",
                    color: COLORS.PRIMARY_NAVY,
                  }}
                >
                  <Typography
                    key={i}
                    sx={{
                      fontFamily: newBlack_medium.style.fontFamily,
                      fontSize: 18,
                      fontWeight: 500,
                      color:
                        pathname === val.url
                          ? COLORS.ACCENT_TAN
                          : COLORS.PRIMARY_NAVY,
                      backgroundColor:
                        pathname === val.url
                          ? COLORS.PRIMARY_NAVY
                          : "transparent",
                      px: 1,
                      //   px: 3,
                      width: "100%",
                      textAlign: "center",
                      borderRadius: "50px",
                      py: 1,
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Stack direction="row" alignItems={"center"} spacing={3}>
              <Link href="/login">
                <Button
                  sx={{
                    fontSize: 15,
                    borderRadius: "50px",
                    px: 3,
                    py: 1.5,
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    color: COLORS.WHITE,
                    fontFamily: newBlack_medium.style.fontFamily,
                  }}
                >
                  Member Login
                </Button>
              </Link>
              <Link href="/signup/role-selection">
                <Button
                  sx={{
                    fontSize: 15,
                    fontFamily: newBlack_medium.style.fontFamily,
                    fontWeight: 500,
                    border: `1px solid ${COLORS.PRIMARY_NAVY}`,
                    px: 3,
                    py: 1.5,
                    borderRadius: "50px",
                    color: COLORS.PRIMARY_NAVY,
                    textTransform: "none",
                  }}
                >
                  {" "}
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
