"use client";

import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";

const MemberHero = () => {
  return (
    <Box
      sx={{
        pt: { xs: "120px", md: "160px" },
        pb: { xs: "60px", md: "80px" },
        background: `linear-gradient(180deg, #0A190F 0%, #1B3B2B 100%)`, // Deep green to vibrant dark green
        color: COLORS.WHITE,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
            sx={{
              fontFamily:inter.style.fontFamily,
              width:{xs:"auto",md:"193px"},
              height:{xs:"auto",md:"42px"},
              px: "16px",
              py: "6px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              textAlign:"center",
              borderRadius: "999px",
              background: "#D4A574",
              color: "#1A2847",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight:"24px",
              mx:"auto",
              mb:2,
              transition:"0.3s",
              "&:hover": {
              background: "#1A2847",
              color: "#FFF",
              cursor: "pointer",
              },
            }}
          >
            Honor & Opportunity
          </Box>
        <Typography
          variant="h1"
          sx={{
            width:{xs:"auto",md:"896px"},
            height:{xs:"auto",md:"96px"},
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "48px" },
            lineHeight:"48px",
            mx:"auto",
            mt:2,
            mb: 2,
          }}
        >
          Membership in the Academy is an Honor and an Opportunity
        </Typography>
        <Box
            sx={{
              width: {xs:"auto",md:"896px"},
              height:{xs:"auto",md:"100px"},
              background: "rgba(255,255,255,0.08)",
              mx:"auto",
              borderRadius:"10px",
              py: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "14px", md: "20px" },
            fontStyle:"italic",
            maxWidth: "848px",
            maxHeight:"56px",
            mx: "auto",
            lineHeight: "28px",
            color:"#D4A574",
          }}
        >
          "Our members are among the world's most distinguished young innovators, researchers and entrepreneurs, their schools and teachers who have the motivation and ability to nurture them."
        </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MemberHero;
