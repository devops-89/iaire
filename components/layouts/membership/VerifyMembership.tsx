"use client";

import { inter } from "@/utils/fonts";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const VerifyMembership = () => {
    return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFF" }}>
    <Container maxWidth="lg">
        
        <Stack spacing={3} alignItems="center" textAlign="center">

        <Typography
            sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "36px",
                lineHeight: "40px",
                fontWeight: 700,
                color: "#1A2847",
            }}>
            Verify Membership
        </Typography>

            <Typography
            sx={{
                maxWidth: "1000px",
                fontFamily: inter.style.fontFamily,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#6B7280",
            }}>
            All IAIRE membership certificates include a QR code for instant
            verification of active membership status.
        </Typography>


        <Button
                sx={{
                    width: { xs: "auto", md: "296px" },
                    height: { xs: "auto", md: "44px" },
                    background: "#F3F4F6",
                    borderRadius: "8px",
                    px: 0,
                    py: 0,
                    gap:1,
                    transition: "0.3s",
                    "&:hover": {
                    background: "#D4A574",
                    },
                    }}>
        <Typography
        sx={{
            width: { xs: "auto", md: "203px" },
            height: { xs: "auto", md: "24px" },
            fontFamily: inter.style.fontFamily,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "#1A2847",
            px: 3,
            py: 1,
            textTransform: "none",
            }}>
            Apply for Membership <span style={{ fontSize: "14px", marginLeft: "6px",fontWeight:900 }}>→</span>
            </Typography>
        </Button>

        </Stack>

    </Container>
    </Box>
);
};

export default VerifyMembership;