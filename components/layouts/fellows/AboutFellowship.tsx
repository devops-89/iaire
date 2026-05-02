"use client";

import { inter } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutFellowship = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F9F7F5" }}>
    <Container maxWidth="lg">
        
        <Stack spacing={4} alignItems="center" textAlign="center">

            <Box
            sx={{
                width: "80%",
                maxWidth: "893px",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                p: { xs: 3, md: 5 },
                background: "#fff",
            }}
        >

            <Stack spacing={3} alignItems="center" textAlign="center">

            <Image
                src="/images/icon/FellowIcon.png"
                alt="fellowship"
                width={64}
                height={64}
            />

            <Typography
                sx={{
                maxWidth:"797px",
                fontFamily: '"Playfair Display", serif',
                fontSize: {xs:"20px",md:"24px"},
                lineHeight:"32px",
                fontWeight: 700,
                color: "#1A2847",
                }}>
                About IAIRE Fellowship
            </Typography>

            <Typography
                sx={{
                    maxWidth:"797px",
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "16px", md: "18px" },
                    lineHeight: "28px",
                    fontWeight:400,
                    color: "#6B7280",
                }}>
                Fellowship in the IAIRE Academy is the highest recognition of
                sustained excellence and exceptional impact in innovation,
                research, or entrepreneurship. Fellows are selected from among
                distinguished members who have demonstrated extraordinary
                contributions to their fields and to society.
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    maxWidth:"797px",
                    height:{xs:"auto",md:"100px"},
                    background: "#D4A5741A",
                    borderRadius: "8px",
                    px: { xs: 2, md: 3 },
                    py: 2,
                }}>
                <Typography
                sx={{
                    maxWidth:"749px",
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: "italic",
                    mx:"auto",
                    mt: { xs: 1, md: 2 },
                    fontSize: { xs: "16px", md: "18px" },
                    lineHeight: "28px",
                    color: "#1A2847",
                }}
                >
                "IAIRE Fellows represent the pinnacle of youth achievement in
                IRE, serving as role models and mentors for the next
                generation of innovators."
                </Typography>
            </Box>

                <Typography
                sx={{
                    maxWidth:"850px",
                    height:{xs:"auto",md:"48px"},
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "24px",
                    fontWeight:400,
                    color: "#6B7280",
                }}
            >
                The Fellows directory will be populated as members achieve
                fellowship status through their outstanding contributions and
                sustained excellence.
            </Typography>

            </Stack>
        </Box>

        </Stack>

    </Container>
    </Box>
);
};

export default AboutFellowship;