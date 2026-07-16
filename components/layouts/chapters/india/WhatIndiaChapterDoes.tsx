"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const audiences = [
  {
    tag: "For Schools",
    desc: "IAIRE India helps institutions build Innovation Hubs, implement structured innovation frameworks, access educator certification pathways, and participate in national recognition programs. Schools gain the tools and support to make innovation a permanent part of their culture.",
    icon: <SchoolOutlinedIcon sx={{ fontSize: 28 }} />,
    borderColor: "rgba(248, 93, 0, 0.3)",
    glowColor: "rgba(248, 93, 0, 0.12)",
    accentColor: "#1B365D",
  },
  {
    tag: "For Educators",
    desc: "Through the Innovation Educator Certification program, teachers across India are trained and recognized as Innovation & Research Mentors — equipping them with practical methodologies, mentoring tools, and the confidence to guide student innovation at every stage.",
    icon: <SupervisorAccountOutlinedIcon sx={{ fontSize: 28 }} />,
    borderColor: "rgba(0, 149, 255, 0.3)",
    glowColor: "rgba(0, 149, 255, 0.12)",
    accentColor: "#0095FF",
  },
  {
    tag: "For Students",
    desc: "IAIRE India introduces students to structured innovation learning — from problem identification and design thinking to research methodology, intellectual property awareness, and entrepreneurship pathways. Students can also participate in India's Top Young Innovators competition to earn national and international recognition.",
    icon: <LocalLibraryOutlinedIcon sx={{ fontSize: 28 }} />,
    borderColor: "rgba(124, 92, 196, 0.3)",
    glowColor: "rgba(124, 92, 196, 0.12)",
    accentColor: "#7C5CC4",
  },
];

const focusAreas = [
  {
    title: "Teacher Capacity Building",
    desc: "Teacher capacity building and certification pathways",
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "Student Programs",
    desc: "Student innovation programs and learning pathways",
    icon: <TimelineOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "School Hubs",
    desc: "School Innovation Hub establishment and resources",
    icon: <HubOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "TYI Competition Platform",
    desc: "India's Top Young Innovators recognition platform",
    icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "Digital Program Delivery",
    desc: "Digital-first program delivery and resource dashboards",
    icon: <ComputerOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "Research & Patent Support",
    desc: "Research guidelines and student patent support pathways",
    icon: <ScienceOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "Critical Thinking Core",
    desc: "Integration of critical thinking into everyday school learning",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 22 }} />,
  },
  {
    title: "Holistic Development",
    desc: "Holistic student development aligned directly with NEP 2020",
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 22 }} />,
  },
];

const WhatIndiaChapterDoes = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#08090D",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Background glowing spheres */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#1B365D",
          filter: "blur(180px)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#0095FF",
          filter: "blur(180px)",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Title Block */}
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            alignItems: "center",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#1B365D",
              textTransform: "uppercase",
              textAlign: "center",
              width: "100%",
            }}
          >
            Programs & Ecosystem
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: newBlack_medium.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: "32px", sm: "38px", md: "44px" },
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
              textAlign: "center",
              width: "100%",
            }}
          >
            What IAIRE India Does
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "700px",
              lineHeight: "1.65",
              textAlign: "center",
              width: "100%",
            }}
          >
            IAIRE India Chapter supports schools, teachers, and students through
            a complete ecosystem of programs, resources, and recognition
            platforms.
          </Typography>
        </Stack>

        {/* 1. Target Segment Cards (3-Column Grid) */}
        <Grid container spacing={4} sx={{ mb: { xs: 8, md: 10 } }}>
          {audiences.map((audience, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx} sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "28px",
                  p: { xs: 4, sm: 4.5 },
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: audience.borderColor,
                    boxShadow: `0 20px 50px ${audience.glowColor}`,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                  },
                }}
              >
                {/* Colored Glow Halos */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20%",
                    right: "-20%",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: audience.glowColor,
                    filter: "blur(30px)",
                  }}
                />

                <Stack
                  spacing={3}
                  sx={{ height: "100%", justifyContent: "space-between" }}
                >
                  <Stack spacing={2.5}>
                    {/* Icon Block */}
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: "14px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        color: audience.accentColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {audience.icon}
                    </Box>

                    {/* Tag Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: newBlack_medium.style.fontFamily,
                        fontSize: { xs: "20px", sm: "22px" },
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {audience.tag}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14.5px",
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: "1.65",
                      }}
                    >
                      {audience.desc}
                    </Typography>
                  </Stack>

                  {/* Explore Link */}
                  <Box sx={{ pt: 2 }}>
                    <Link
                      href="/signup/role-selection"
                      style={{
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        color: audience.accentColor,
                      }}
                    >
                      Register Now
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* 2. Key Focus Areas Header */}
        <Stack spacing={1} sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "22px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            Key Focus Areas
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14.5px",
              color: "rgba(255, 255, 255, 0.55)",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            A multi-dimensional approach to integrating research and startup
            pathways in schools:
          </Typography>
        </Stack>

        {/* 3. Focus Areas Grid (4-Column Grid) */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          {focusAreas.map((item, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={idx}
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: "20px",
                  p: 3,
                  width: "100%",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(248, 93, 0, 0.2)",
                  },
                }}
              >
                {/* Focus Mini Icon */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    backgroundColor: "rgba(248, 93, 0, 0.06)",
                    color: "#1B365D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Stack spacing={0.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      color: "rgba(255, 255, 255, 0.55)",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* 4. Centered CTA Section Button */}
        <Stack direction="row" justifyContent="center">
          <Link
            href="/signup/role-selection"
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                fontSize: 15,
                fontWeight: 700,
                fontFamily: inter.style.fontFamily,
                borderRadius: "50px",
                px: 5,
                py: 1.8,
                backgroundColor: "#1B365D",
                color: "#FFFFFF",
                textTransform: "none",
                boxShadow: "0 10px 25px rgba(248, 93, 0, 0.35)",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: "#122744",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(248, 93, 0, 0.45)",
                },
              }}
            >
              Explore IAIRE India Programs
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhatIndiaChapterDoes;
