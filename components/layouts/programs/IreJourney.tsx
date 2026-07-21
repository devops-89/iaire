"use client";

import { inter } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import BeamButton from "@/components/widgets/BeamButton";

const IreJourney = () => {
return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFF" }}>
    <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" textAlign="center">

        <Typography
            sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "24px", sm: "30px", md: "36px" },
            lineHeight: { xs: "32px", md: "40px" },
            fontWeight: 700,
            color: "#1A2847",
            px: { xs: 2, sm: 3, md: 0 },
            }}
        >
            Ready to Begin Your IRE Journey?
        </Typography>

        <Typography
            sx={{
            maxWidth: "1000px",
            fontFamily: inter.style.fontFamily,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: "28px",
            color: "#6B7280",
            px: { xs: 2, sm: 3, md: 0 },
            }}
        >
            Join IAIRE and gain access to all our programs, resources, and opportunities
        </Typography>

        <BeamButton
            sx={{
            width: { xs: "auto", md: "296px" },
            height: { xs: "auto", md: "44px" },
            background: "#D4A574",
            color: "#1A2847",
            borderRadius: "8px",
            px: 0,
            py: 0,
            gap: 1,
            transition: "0.3s",

            "&:hover": {
                color: "#F4F5F6",
                background: "#1A2847",
                cursor: "pointer",
            },
            }}
        >
            <Typography
            sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: "24px",
                color: "inherit",
                px: 3,
                py: 1,
                textTransform: "none",
            }}
            >
            Apply for Membership
            <span
                style={{
                fontSize: "14px",
                marginLeft: "6px",
                fontWeight: 900,
                }}
            >
                →
            </span>
            </Typography>
        </BeamButton>

        </Stack>
    </Container>
    </Box>
);
};

export default IreJourney;