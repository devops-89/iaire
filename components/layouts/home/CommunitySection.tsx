"use client";

import ScrollReveal from "@/components/widgets/ScrollReveal";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BeamButton from "@/components/widgets/BeamButton";
const CommunitySection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 0 },
        bgcolor: "#101828",
        color: COLORS.WHITE,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center">
          <ScrollReveal delay={0.1}>
          <Box
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#C5A059",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="/images/icon/communityIcon.png" alt="icon" width={40} height={40}/>
          </Box>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 600,
              maxWidth: "800px",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Join a Prestigious Community
          </Typography>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
          <Box
            sx={{
              bgcolor: "rgba(30, 41, 59, 0.4)",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              borderRadius: 4,
              px: { xs: 3, sm: 5, md: 8 },
              py: { xs: 3, sm: 4, md: 5 },
              width: "90%",
              maxWidth: "750px",
              mx:"auto"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                color: "#C5A059",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.6rem" },
                lineHeight: 1.6,
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              "Membership in IAIRE recognizes excellence in innovation, research,
              and entrepreneurship and is one of the highest honors a young mind
              can achieve."
            </Typography>
          </Box>
          </ScrollReveal>

          <Typography
            sx={{
              color: "#98A2B3",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: "600px",
              lineHeight: 1.6,
              fontFamily:inter.style.fontFamily,
            }}
          >
            Our members are among the world's most distinguished young innovators,
            researchers and entrepreneurs, their schools and teachers who have the
            motivation and ability to nurture them.
          </Typography>

          <BeamButton
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#C5A059",
              color: "#101828",
              px: { xs: 3, md: 6 },
              py: { xs: 1.3, md: 2 },
              borderRadius: "8px",
              fontSize: { xs: "0.9rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "auto" },
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#B08A4A",
              },
              "&:hover .arrow": {
                    transform: "translateX(4px)",
              },
            }}
          >
            Learn About Membership <ArrowForwardIcon className="arrow" sx={{px:1,fontSize: 18,transition: "transform 0.3s ease",}}/>
          </BeamButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default CommunitySection;
