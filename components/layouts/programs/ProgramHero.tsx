"use client";

import { COLORS } from "@/utils/enum";
import { Box, Container, Typography } from "@mui/material";

const ProgramHero = () => {
return (
    <Box
    sx={{
        width: "100%",
        overflowX: "hidden",
        pt: { xs: "110px", sm: "130px", md: "160px" },
        pb: { xs: "60px", md: "80px" },
        background: `linear-gradient(180deg, #0A190F 0%, #1B3B2B 100%)`,
        color: COLORS.WHITE,
        textAlign: "center",
    }}
    >
    <Container maxWidth="lg">


        <Typography
        variant="h1"
        sx={{
            maxWidth: "362px",
            mx: "auto",
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "48px" },
            lineHeight: { xs: "1.2", md: "48px" },
            mb: { xs: 2, md: 3 },
        }}
        >
        IAIRE Programs
        </Typography>

        <Typography
        sx={{
            maxWidth: "900px",
            px: { xs: 2, sm: 3, md: 0 },
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "20px" },
            mx: "auto",
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "28px" },
        }}
        >
        Comprehensive pathways for young minds to excel in Innovation,
        Research, and Entrepreneurship
        </Typography>

    </Container>
    </Box>
);
};

export default ProgramHero;