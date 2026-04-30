"use client";

import { inter } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";

const advancementData = [
    {
    step: "1",
    title: "Member",
    desc: "Initial membership level upon acceptance. Access to basic resources and community.",
    },
    {
    step: "2",
    title: "Distinguished Member",
    desc: "Recognized for significant contributions and achievements in IRE. Enhanced benefits and recognition.",
    },
    {
    step: "3",
    title: "Fellow",
    desc: "The highest honor. Reserved for members with exceptional, sustained excellence and impact in innovation, research, or entrepreneurship.",
    },
];

const MembershipAdvancement = () => {
    return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F9F7F5" }}>
    <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" textAlign="center">
        <Typography
            sx={{
                width:{xs:"auto",md:"470px"},
                height:{xs:"auto",md:"40px"},
                fontFamily: '"Playfair Display", serif',
                fontSize: "36px",
                lineHeight: "40px",
                fontWeight: 700,
                color: "#1A2847",
                }}>
            Membership Advancement
        </Typography>

            <Box
            sx={{
            width: {xs:"auto",md:"896px"},
            height:{xs:"auto",md:"300px"},
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #E5E7EB",
            p: { xs: 3, md: 5 },
            }}
        >
            <Stack spacing={6}>

            {advancementData.map((item, index) => (
                <Box
                key={index}
                    sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    }}
                >
                    <Box
                    sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    color: "#D4A574",
                    fontFamily: inter.style.fontFamily,
                    }}
                >
                    {item.step}
                </Box>

                <Box textAlign="left">
                    <Typography
                    sx={{
                        width:"300px",
                        height:"28px",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        fontSize: "20px",
                        color: "#1A2847",
                        mb: 1,
                    }}
                    >
                    {item.title}
                    </Typography>

                    <Typography
                    sx={{
                        width:{xs:"auto",md:"800px"},
                        height:{xs:"auto",md:"24px"},
                        fontFamily: inter.style.fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontWeight:400,
                        color: "#6B7280",
                    }}
                    >
                    {item.desc}
                    </Typography>
                </Box>
                </Box>
            ))}

            </Stack>
        </Box>

        </Stack>

    </Container>
    </Box>
);
};

export default MembershipAdvancement;