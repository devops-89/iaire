"use client";
import { inter } from "@/utils/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Stack, Typography } from "@mui/material";
import BeamButton from "@/components/widgets/BeamButton";

const VerifyMembership = () => {
return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: "#FFF" }}>
    <Container maxWidth="lg">
        <Stack spacing={{ xs: 2.5, md: 3 }} alignItems="center" textAlign="center">
            <Typography
            sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "26px", sm: "30px", md: "36px" },
            lineHeight: { xs: "34px", sm: "38px", md: "40px" },
            fontWeight: 700,
            color: "#1A2847",
            }}
        >
            Verify Membership
        </Typography>

        <Typography
            sx={{
            maxWidth: "700px",
            fontFamily: inter.style.fontFamily,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "22px", sm: "24px", md: "28px" },
            color: "#6B7280",
            px: { xs: 1, sm: 0 },
            }}
        >
            All IAIRE membership certificates include a QR code for instant
            verification of active membership status.
        </Typography>

            <BeamButton
            sx={{
                mt: 1,
                background: "#F3F4F6",
                borderRadius: "8px",
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.2 },
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                textTransform: "none",
                color: "#1A2847",
                display: "flex",
                alignItems: "center",
                gap: 1,
                transition: "0.3s",
                "&:hover": {
                background: "#D4A574",
                color: "#fff",
            },
                "&:hover .arrow": {
                transform: "translateX(4px)",
                },
            }}
    >
            Apply for Membership <ArrowForwardIcon className="arrow" sx={{ fontSize: 18,transition:"transform 0.3s ease" }} />
        </BeamButton>

        </Stack>

    </Container>
    </Box>
);
};

export default VerifyMembership;