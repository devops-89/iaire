"use client";

import { Box, Container, Stack, Typography } from "@mui/material";

const WhoWeAre = () => {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 },px: { xs: 2, sm: 3, md: 0 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={{xs:3,md:4}}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "1.8rem",sm:"2.2rem", md: "3rem" },
                color: "#111827",
                mb: {xs:3,md:6},
              }}
            >
              Who We Are
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: {xs:"center",md:"left"} }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                fontSize:{xs:"1.2rem",sm:"1.4rem",md:"1.6rem"},
                color: "#111827",
                mb: 2,
              }}
            >
              About IAIRE
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: {xs:"0.95rem",sm:"1.05rem",md:"1.125rem"},
                lineHeight: {xs:"1.6",md:"1.8"},
                color: "#4B5563",
              }}
            >
              The International Academy for Innovation, Research & Entrepreneurship (IAIRE) is a prestigious global
              organization dedicated to nurturing the next generation of innovators, researchers, and entrepreneurs.
              We recognize and celebrate excellence among youth, their schools, and the educators who guide them.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
