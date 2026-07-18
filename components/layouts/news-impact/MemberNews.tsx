"use client";

import React, { useState } from "react";
import { Box, Card, Container, Grid, Stack, Typography, Chip, Button, Divider } from "@mui/material";
import { ArrowForwardOutlined, CampaignOutlined, CalendarTodayOutlined, AccessTimeOutlined } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface ArticleItem {
  category: "Announcements" | "Partnerships" | "Chapter Highlights" | "Student Success";
  title: string;
  date: string;
  readTime: string;
  summary: string;
}

const articles: ArticleItem[] = [
  {
    category: "Student Success",
    title: "Young Innovator Designs Smart IoT Prototype for Sustainable Agriculture",
    date: "July 12, 2026",
    readTime: "3 min read",
    summary: "Rohan Sharma's soil chemistry tracking device is gaining international traction. The project recently completed initial testing across certified farm clusters in north India.",
  },
  {
    category: "Partnerships",
    title: "IAIRE Announces International Research Exchange Program with Top Tech Hubs",
    date: "July 09, 2026",
    readTime: "5 min read",
    summary: "A new milestone initiative linking high-school research students directly with global academic exchange mentors. Selected student teams will present abstracts in Washington next spring.",
  },
  {
    category: "Announcements",
    title: "Over 500 Educators Achieve Certified Innovation Mentor Status This Quarter",
    date: "July 05, 2026",
    readTime: "4 min read",
    summary: "Celebrating educator milestones! Over five hundred teachers completed the advanced academic quality assurance modules to lead student labs in their home schools.",
  },
  {
    category: "Chapter Highlights",
    title: "IAIRE India Chapter Launches Regional Young Innovator Summit 2026",
    date: "June 28, 2026",
    readTime: "3 min read",
    summary: "The Delhi chapter hosted over 35 schools, showcasing prototypes ranging from biodegradable packaging to decentralized solar microgrids.",
  },
];

const MemberNews = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Announcements", "Partnerships", "Chapter Highlights", "Student Success"];

  const filteredArticles = articles.filter(
    (art) => activeCategory === "All" || art.category === activeCategory
  );

  return (
    <Box
      id="member-news"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack spacing={2.5} sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "inline-flex",
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                borderRadius: "100px",
                px: 2.25,
                py: 0.75,
                alignItems: "center",
                gap: 1.25,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#3B82F6",
                  boxShadow: "0 0 8px #3B82F6",
                }}
              />
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "10.5px",
                  fontWeight: 800,
                  color: "#1D4ED8",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Press Releases & Member News
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "34px", md: "40px" },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0F172A",
                }}
              >
                Ecosystem Updates & <br />
                <span style={{ color: "#3B82F6" }}>Press Announcements</span>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  lineHeight: 1.6,
                  color: "#475569",
                }}
              >
                Stay updated with the latest institutional agreements, national chapter milestones, student accomplishments, and teacher professional development milestones.
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        {/* Category Selector */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.25, mb: 5 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                fontWeight: 700,
                backgroundColor: activeCategory === cat ? "#3B82F6" : "#F1F5F9",
                color: activeCategory === cat ? "#FFFFFF" : "#475569",
                border: "1px solid transparent",
                borderRadius: "100px",
                px: 1,
                py: 2.25,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: activeCategory === cat ? "#2563EB" : "#E2E8F0",
                },
              }}
            />
          ))}
        </Stack>

        {/* Articles Grid */}
        <Grid container spacing={4}>
          {filteredArticles.map((article, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "24px",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.01)",
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderColor: "#3B82F6",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.05)",
                  },
                }}
              >
                <Stack spacing={2.5}>
                  {/* Meta Details */}
                  <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                    <Chip
                      label={article.category}
                      size="small"
                      sx={{
                        fontWeight: 800,
                        fontSize: "10.5px",
                        backgroundColor: "rgba(59, 130, 246, 0.08)",
                        color: "#2563EB",
                        borderRadius: "6px",
                        fontFamily: inter.style.fontFamily,
                      }}
                    />
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: "#64748B" }}>
                      <CalendarTodayOutlined sx={{ fontSize: "12px" }} />
                      <Typography sx={{ fontSize: "12px", fontWeight: 600, fontFamily: inter.style.fontFamily }}>
                        {article.date}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: "#64748B" }}>
                      <AccessTimeOutlined sx={{ fontSize: "12px" }} />
                      <Typography sx={{ fontSize: "12px", fontWeight: 600, fontFamily: inter.style.fontFamily }}>
                        {article.readTime}
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* Title & Summary */}
                  <Stack spacing={1.5}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 800,
                        fontSize: "17.5px",
                        color: "#0F172A",
                        lineHeight: 1.35,
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        color: "#475569",
                        lineHeight: 1.6,
                      }}
                    >
                      {article.summary}
                    </Typography>
                  </Stack>
                </Stack>

                {/* Footer Action */}
                <Box sx={{ mt: 3.5, pt: 2, borderTop: "1px solid rgba(0, 0, 0, 0.04)" }}>
                  <Button
                    variant="text"
                    size="small"
                    endIcon={<ArrowForwardOutlined />}
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      color: "#3B82F6",
                      p: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#1D4ED8",
                        "& .MuiButton-endIcon": {
                          transform: "translateX(3px)",
                        },
                      },
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.2s ease",
                      },
                    }}
                  >
                    Read Full Article
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberNews;
