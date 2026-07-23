"use client";

import React, { useState } from "react";
import SectionBadge from "@/components/widgets/SectionBadge";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import {
  ArrowForwardOutlined,
  CalendarTodayOutlined,
  AccessTimeOutlined,
} from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { articles } from "@/utils/constant";
import ContentCard from "./components/ContentCard";

const categoryColors: Record<string, string> = {
  Announcements: "#3B82F6",
  Partnerships: "#8B5CF6",
  "Chapter Highlights": "#F59E0B",
  "Student Success": "#10B981",
};

const MemberNews = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Announcements",
    "Partnerships",
    "Chapter Highlights",
    "Student Success",
  ];

  const filteredArticles = articles.filter(
    (art) => activeCategory === "All" || art.category === activeCategory,
  );

  return (
    <Box
      id="member-news"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 14, md: 20 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack
          spacing={2.5}
          sx={{ mb: { xs: 5, md: 7 } }}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <Box sx={{ display: "flex" }}>
            <SectionBadge label="Press Releases & Member News" align="left" />
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
                Stay updated with the latest institutional agreements, national
                chapter milestones, student accomplishments, and teacher
                professional development milestones.
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        {/* Category Selector */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ gap: 1.25, mb: { xs: 5, md: 7 } }}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
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
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  backgroundColor:
                    activeCategory === cat ? "#2563EB" : "#E2E8F0",
                  transform: "translateY(-1px)",
                },
              }}
            />
          ))}
        </Stack>

        {/* Articles Grid (Staggered Layout) */}
        <Grid container spacing={4}>
          {filteredArticles.map((article, idx) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={idx}
              sx={{ mt: idx % 2 !== 0 ? { md: 8 } : 0 }}
            >
              <ContentCard variant="article" {...article} idx={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberNews;
