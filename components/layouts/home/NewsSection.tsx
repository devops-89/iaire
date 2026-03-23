"use client";

import { Box, Container, Grid, Stack, Typography, Card, CardMedia, Chip, Link } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const newsArticles = [
  {
    category: "Achievement",
    title: "Five IAIRE Members Win National Innovation Competition",
    date: "March 12, 2025",
    summary: "IAIRE student members swept top prizes at the prestigious National Youth Innovation Awards.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Announcement",
    title: "Patent Grant Announcement: $50,000 for Young Inventors",
    date: "March 5, 2025",
    summary: "IAIRE launches new grant program to support patent filing for exceptional student innovators.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Research",
    title: "New Research Publication from IAIRE Fellows",
    date: "February 25, 2025",
    summary: "A groundbreaking study on sustainable energy solutions pioneered by IAIRE scientific fellows.",
    image: "https://images.unsplash.com/photo-1532094349884-543597970ac0?auto=format&fit=crop&q=80&w=800",
  },
];

const NewsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          spacing={2}
          sx={{ mb: 8 }}
        >
          <Stack spacing={1}>
            <Typography
              variant="h2"
              sx={{
                color: "#111827",
                fontSize: { xs: 32, md: 48 },
                fontWeight: 700,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Latest News
            </Typography>
            <Typography
              sx={{
                color: "#6B7280",
                fontSize: "1.1rem",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Stay updated with achievements and announcements
            </Typography>
          </Stack>
          <Link
            href="#"
            sx={{
              color: "#B48C5E",
              textDecoration: "none",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: '"Inter", sans-serif',
              transition: "gap 0.2s ease",
              "&:hover": {
                gap: 1.5,
              },
            }}
          >
            View All News <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
        </Stack>

        <Grid container spacing={4}>
          {newsArticles.map((article, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: "24px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <Box sx={{ position: "relative", p: 1.5, pb: 0 }}>
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.title}
                    sx={{
                      width: "100%",
                      aspectRatio: "3/2",
                      borderRadius: "16px",
                      objectFit: "cover",
                    }}
                  />
                  <Chip
                    label={article.category}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 28,
                      left: 28,
                      bgcolor: "#DED0B6",
                      color: "#111827",
                      fontWeight: 600,
                      borderRadius: "6px",
                      "& .MuiChip-label": { px: 1.5 },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 4,
                    pt: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      mb: 1.5,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {article.date}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#111827",
                      fontWeight: 700,
                      mb: 2,
                      fontSize: "1.25rem",
                      lineHeight: 1.4,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      mb: 4,
                      flexGrow: 1,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {article.summary}
                  </Typography>
                  <Link
                    href="#"
                    sx={{
                      color: "#B48C5E",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: '"Inter", sans-serif',
                      transition: "gap 0.2s ease",
                      "&:hover": {
                        gap: 1.5,
                      },
                    }}
                  >
                    Read more <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
