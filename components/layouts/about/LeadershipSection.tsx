"use client";

import { Box, Card, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";

const LeadershipSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              color: "#111827",
            }}
          >
            Leadership & Advisory Board
          </Typography>

          <Card
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: "#F9F7F5",
              border: "1px solid",
              borderColor: "rgba(0,0,0,0.05)",
            }}
          >
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  color: "#4B5563",
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                }}
              >
                IAIRE is governed by a distinguished board of leaders, educators, entrepreneurs, and innovators committed to advancing youth excellence in IRE.
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  color: "#6B7280",
                  fontSize: "1rem",
                  fontStyle: "italic",
                }}
              >
                Detailed leadership profiles and board member information available to members.
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default LeadershipSection;
