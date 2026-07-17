"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PsychologyIcon from "@mui/icons-material/PsychologyOutlined";
import SectionBadge from "@/components/widgets/SectionBadge";

interface RecognitionCardProps {
  title: string;
  icon: React.ReactNode;
  pathways: string[];
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const RecognitionCard = ({
  title,
  icon,
  pathways,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: RecognitionCardProps) => {
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.015)",
        border: "1px solid rgba(255, 255, 255, 0.04)",
        borderRadius: "24px",
        p: { xs: 4, sm: 5 },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: isHovered
          ? "rgba(59, 130, 246, 0.4)"
          : "rgba(255, 255, 255, 0.04)",
        boxShadow: isHovered ? "0 20px 40px rgba(59, 130, 246, 0.15)" : "none",
      }}
    >
      <Stack spacing={4} sx={{ height: "100%" }}>
        <Stack direction="row" spacing={2.5} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "12px",
              backgroundColor: isHovered
                ? "rgba(59, 130, 246, 0.18)"
                : "rgba(255, 255, 255, 0.03)",
              color: isHovered ? "#93C5FD" : "#64748B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "19px",
              fontWeight: 700,
              color: isHovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.85)",
              transition: "color 0.25s ease",
            }}
          >
            {title}
          </Typography>
        </Stack>

        {/* Level Steps */}
        <Stack spacing={3.5} sx={{ flexGrow: 1, pl: 1, position: "relative" }}>
          {/* Vertical Dashed Line */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              bottom: 10,
              left: 14,
              width: "1.5px",
              borderLeft: "1.5px dashed rgba(255, 255, 255, 0.1)",
              zIndex: 0,
            }}
          />
          {pathways.map((path, idx) => (
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              key={idx}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* Circular Step Node Indicator */}
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#0D0D11",
                  border: isHovered
                    ? "2px solid #3B82F6"
                    : "2px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: isHovered ? "0 0 8px #3B82F6" : "none",
                  transition: "all 0.25s ease",
                }}
              />
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: isHovered ? "#FFFFFF" : "#E2E2E9",
                  transition: "color 0.25s ease",
                  lineHeight: 1.3,
                }}
              >
                {path}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const RecognitionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pathwaysData = [
    {
      title: "Institutions",
      icon: <SchoolIcon sx={{ fontSize: 24 }} />,
      pathways: [
        "Institutional Member",
        "Certified Institutional Member",
        "Associate Fellow Institution of IAIRE",
        "Fellow Institution of IAIRE",
      ],
    },
    {
      title: "Educators",
      icon: <PsychologyIcon sx={{ fontSize: 24 }} />,
      pathways: [
        "Educator Member",
        "Certified Innovation or Research Mentor",
        "Associate Fellow of Innovation or Research Education",
        "Fellow of Innovation or Research Education",
      ],
    },
    {
      title: "Students",
      icon: <WorkspacePremiumIcon sx={{ fontSize: 24 }} />,
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
        backgroundColor: "#0D0D11",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - glowing blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={6} alignItems="center">
          {/* Centered Heading */}
          <Stack
            spacing={2}
            alignItems="center"
            sx={{ textAlign: "center", maxWidth: "800px" }}
          >
            <SectionBadge label="IAIRE Fellowships & Standards" align="center" />

            <Typography
              component="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", sm: "40px", md: "46px" },
                fontWeight: 800,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Recognition That Motivates Excellence
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15px",
                color: "#9D9DA7",
                lineHeight: 1.6,
                maxWidth: "760px",
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
          <Grid container spacing={4}>
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
                  isHovered={hoveredCard === index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                />
              </Grid>
            ))}
          </Grid>

          {/* Centered CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            justifyContent="center"
          >
            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    className="arrow-icon"
                    sx={{ transition: "transform 0.25s ease" }}
                  />
                }
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  borderWidth: "1.5px",
                  borderRadius: "100px",
                  px: 4.5,
                  py: 1.4,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderWidth: "1.5px",
                    borderColor: "#FFFFFF",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    transform: "translateY(-2px)",
                    "& .arrow-icon": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                Become a Member
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default RecognitionSection;
