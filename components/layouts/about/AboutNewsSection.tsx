"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import BeamButton from "@/components/widgets/BeamButton";
import SectionBadge from "@/components/widgets/SectionBadge";

const newsCategories = [
  "IAIRE announcements",
  "Global partnerships",
  "India Chapter updates",
  "Top Young Innovator news",
  "School Innovation Hub launches",
  "Teacher certification updates",
  "Student success stories",
  "Research & patent milestones",
  "Events and webinars",
];

const mockNews = [
  {
    image: "/images/homepage/news_student_coder.png",
    category: "Student success stories",
    title:
      "Young Innovator Designs Smart IoT Prototype for Sustainable Agriculture",
    date: "July 12, 2026",
    readTime: "3 min read",
  },
  {
    image: "/images/homepage/news_global_network.png",
    category: "Global partnerships",
    title:
      "IAIRE Announces International Research Exchange Program with Top Tech Hubs",
    date: "July 09, 2026",
    readTime: "5 min read",
  },
  {
    image: "/images/homepage/news_educator_badge.png",
    category: "Teacher certification updates",
    title:
      "Over 500 Educators Achieve Certified Innovation Mentor Status This Quarter",
    date: "July 05, 2026",
    readTime: "4 min read",
  },
];

const AboutNewsSection = () => {
  const [activeCategory, setActiveCategory] = useState("IAIRE announcements");

  return (
    <Box
      id="news"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.02) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={6} alignItems="center"
          data-aos="fade-up"
          data-aos-duration="800"
          >
          {/* Section Header */}
          <Stack spacing={2} sx={{ textAlign: "center", maxWidth: "800px" }}>
            <SectionBadge label="COMMUNITY UPDATES" align="center" />

            <Typography
              variant="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: 800,
                color: "#0B1727",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              News
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "16px",
                color: "#5F5F6A",
                lineHeight: 1.6,
              }}
            >
              Stay updated with the latest announcements, partnerships,
              competitions, student achievements, educator certifications,
              research milestones, Innovation Hub launches, and IAIRE events.
            </Typography>
          </Stack>

          {/* Interactive Category Filter Pills */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
              width: "100%",
              maxWidth: "1000px",
              pb: 2,
            }}
          >
            {newsCategories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <Box
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  sx={{
                    cursor: "pointer",
                    px: 2.25,
                    py: 1,
                    borderRadius: "30px",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1px solid",
                    borderColor: isActive ? "#1B365D" : "#E5E5E9",
                    backgroundColor: isActive
                      ? "rgba(248, 93, 0, 0.05)"
                      : "transparent",
                    color: isActive ? "#1B365D" : "#5F5F6A",
                    transition: "all 0.25s ease",
                    userSelect: "none",
                    "&:hover": {
                      borderColor: "#1B365D",
                      color: "#1B365D",
                      backgroundColor: "rgba(248, 93, 0, 0.02)",
                    },
                  }}
                >
                  {cat}
                </Box>
              );
            })}
          </Box>

          {/* News Cards Grid */}
          <Grid container spacing={4} sx={{ width: "100%", pt: 2 }}>
            {mockNews.map((news, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid #E5E5E9",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 40px rgba(248, 93, 0, 0.08)",
                      borderColor: "rgba(248, 93, 0, 0.2)",
                      "& .news-title": {
                        color: "#1B365D",
                      },
                      "& .news-img": {
                        transform: "scale(1.04)",
                      },
                    },
                  }}
                >
                  {/* Thumbnail Image */}
                  <Box
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      pt: "75%",
                      width: "100%",
                    }}
                  >
                    <Image
                      className="news-img"
                      src={news.image}
                      alt={news.title}
                      layout="fill"
                      objectFit="cover"
                      style={{
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </Box>

                  {/* Body Content */}
                  <Stack spacing={2} sx={{ p: 3.5, flexGrow: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#1B365D",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {news.category}
                    </Typography>

                    <Typography
                      className="news-title"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#0B1727",
                        lineHeight: 1.4,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {news.title}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Metadata Footer */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ pt: 1 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "rgba(0,0,0,0.4)",
                        }}
                      >
                        {news.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "rgba(0,0,0,0.4)",
                        }}
                      >
                        {news.readTime}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* CTA Action */}
          {/* <Box sx={{ pt: 2 }}>
            <BeamButton
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none",
                color: "#FFFFFF",
                backgroundColor: "#1B365D",
                borderRadius: "30px",
                p: "12px 28px",
                boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e05400",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                },
              }}
            >
              Read Latest Updates
            </BeamButton>
          </Box> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutNewsSection;
