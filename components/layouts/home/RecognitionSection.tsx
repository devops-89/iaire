"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PsychologyIcon from "@mui/icons-material/PsychologyOutlined";
import { COLORS } from "@/utils/enum";
import SectionBadge from "@/components/widgets/SectionBadge";

interface RecognitionCardProps {
  title: string;
  icon: React.ReactNode;
  pathways: string[];
}

const RecognitionCard = ({ title, icon, pathways }: RecognitionCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.04)",
        borderRadius: "20px",
        p: { xs: 3.5, sm: 4.5 },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mb: 5 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            color: "#9CA3AF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "18px",
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
      </Stack>

      {/* Timeline / List */}
      <Box sx={{ position: "relative", ml: 1.5 }}>
        {/* Vertical Glowing Line */}
        <Box
          sx={{
            position: "absolute",
            left: 15,
            top: 0,
            bottom: 16,
            width: "2px",
            backgroundColor: "#3B82F6",
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
            zIndex: 0,
          }}
        />

        <Stack spacing={4}>
          {pathways.map((tier, tierIdx) => (
            <Box
              key={tierIdx}
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Numbered Circle */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "2.5px solid" + COLORS.BEAM_COLOR,
                  backgroundColor: "#0F1116",
                  boxShadow:
                    "0 0 12px rgba(59, 130, 246, 0.5), inset 0 0 8px rgba(59, 130, 246, 0.2)",
                  mr: 2.5,
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#E2E8F0",
                  }}
                >
                  {tierIdx + 1}
                </Typography>
              </Box>
              {/* Text */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#E2E8F0",
                  lineHeight: 1.4,
                }}
              >
                {tier}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const RecognitionSection = () => {
  const pathwaysData = [
    {
      title: "Institutions",
      icon: <SchoolIcon sx={{ fontSize: 20 }} />,
      pathways: [
        "Institutional Member",
        "Certified Institutional Member",
        "Associate Fellow Institution of IAIRE",
        "Fellow Institution of IAIRE",
      ],
    },
    {
      title: "Educators",
      icon: <PsychologyIcon sx={{ fontSize: 20 }} />,
      pathways: [
        "Educator Member",
        "Certified Innovation or Research Mentor",
        "Associate Fellow of Innovation or Research Education",
        "Fellow of Innovation or Research Education",
      ],
    },
    {
      title: "Students",
      icon: <WorkspacePremiumIcon sx={{ fontSize: 20 }} />,
      pathways: [
        "Student Member",
        "Student Innovation or Research Scholar",
        "Associate Fellow of Innovation or Research",
        "Fellow Student of Innovation or Research",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#070A0F", // Dark matching the screenshot
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Centered Heading */}
          <Stack
            data-aos="fade-up"
            data-aos-duration="800"
            spacing={3}
            alignItems="center"
            sx={{ textAlign: "center", maxWidth: "800px" }}
          >
            <SectionBadge label="IAIRE Fellowships & Standards" align="center" />

            <Typography
              component="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", sm: "40px", md: "46px" },
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Recognition That Motivates{" "}
              <Box component="span" sx={{ display: "block" }}>
                Excellence
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14.5px",
                color: "#94A3B8",
                lineHeight: 1.6,
                maxWidth: "760px",
                mt: 1,
              }}
            >
              Innovation and research require sustained effort. IAIRE creates
              structured recognition pathways for schools, educators, and
              students who demonstrate achievement, leadership, mentorship,
              intellectual property creation, research output, entrepreneurship,
              and contribution to the field.
            </Typography>
          </Stack>

          {/* Three-Column Recognition Pathways Grid */}
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {pathwaysData.map((data, index) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={index}
                sx={{ display: "flex" }}
              >
                <RecognitionCard
                  title={data.title}
                  icon={data.icon}
                  pathways={data.pathways}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default RecognitionSection;
