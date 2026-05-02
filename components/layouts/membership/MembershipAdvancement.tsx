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
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: "#F9F7F5" }}>
    <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center" textAlign="center">
        <Typography
            sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "24px", sm: "30px", md: "36px" },
            lineHeight: { xs: "32px", sm: "36px", md: "40px" },
            fontWeight: 700,
            color: "#1A2847",
            maxWidth: "500px",
            px: { xs: 1, sm: 0 },
            }}
        >
            Membership Advancement
        </Typography>

        <Box
            sx={{
            width: "100%",
            maxWidth: "900px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
            p: { xs: 3, sm: 4, md: 5 },
            }}
        >
            <Stack spacing={{ xs: 4, md: 6 }}>
            {advancementData.map((item, index) => (
                <Box
                key={index}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    textAlign: { xs: "center", sm: "left" },
                    gap: 2,
                }}
                >
                <Box
                    sx={{
                    minWidth: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    color: "#D4A574",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    }}
                >
                    {item.step}
                </Box>

                <Box>
                    <Typography
                    sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { xs: "18px", md: "20px" },
                        color: "#1A2847",
                        mb: 1,
                    }}
                    >
                    {item.title}
                    </Typography>

                    <Typography
                    sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        lineHeight: { xs: "22px", md: "24px" },
                        color: "#6B7280",
                        maxWidth: "700px",
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