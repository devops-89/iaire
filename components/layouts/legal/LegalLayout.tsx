"use client";

import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  return (
    <Box sx={{ pt: { xs: "120px", md: "160px" }, pb: { xs: 8, md: 12 }, minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography
            component="h1"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 900,
              color: "#0B1727",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </Typography>
          
          <Box sx={{ p: { xs: 2, md: 4 }, borderRadius: "24px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            {children}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LegalLayout;