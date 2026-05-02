"use client";

import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";

const MemberHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "100px", sm: "120px", md: "160px" },
        pb: { xs: "50px", sm: "60px", md: "80px" },
        background: "linear-gradient(180deg, #0A190F 0%, #1B3B2B 100%)",
        color: COLORS.WHITE,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        
        {/* Tag */}
        <Box
          sx={{
            fontFamily: inter.style.fontFamily,
            px: "16px",
            py: "6px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "999px",
            background: "#D4A574",
            color: "#1A2847",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 700,
            lineHeight: "24px",
            mx: "auto",
            mb: 2,
            transition: "0.3s",
            "&:hover": {
              background: "#1A2847",
              color: "#FFF",
              cursor: "pointer",
            },
          }}
        >
          Honor & Opportunity
        </Box>

        {/* Heading */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: {
              xs: "28px",
              sm: "36px",
              md: "48px",
            },
            lineHeight: {
              xs: "36px",
              sm: "44px",
              md: "56px",
            },
            maxWidth: "900px",
            mx: "auto",
            mt: 2,
            mb: 3,
            px: { xs: 1, sm: 2 },
          }}
        >
          Membership in the Academy is an Honor and an Opportunity
        </Typography>

        {/* Quote Box */}
        <Box
          sx={{
            maxWidth: "900px",
            mx: "auto",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, sm: 4 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "20px",
              },
              fontStyle: "italic",
              lineHeight: {
                xs: "22px",
                sm: "24px",
                md: "28px",
              },
              color: "#D4A574",
            }}
          >
            "Our members are among the world's most distinguished young innovators,
            researchers and entrepreneurs, their schools and teachers who have the
            motivation and ability to nurture them."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MemberHero;