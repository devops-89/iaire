"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import SectionBadge from "@/components/widgets/SectionBadge";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import studentPathwaysImg from "@/public/images/what-we-do/student-pathways.jpeg";

const benefits = [
  "Development of creativity, critical thinking, and problem-solving skills",
  "Practical exposure to real-world innovation and research",
  "Recognition at school, regional, national, and international levels",
  "IAIRE Student Membership",
  "Access to structured innovation and research learning resources",
  "Participation in organized innovation and research programmes",
  "Opportunities to develop patentable innovations",
  "Opportunities to conduct research and prepare research manuscripts",
  "Eligibility for certifications, designations, and fellowship pathways",
  "Opportunities to be recognized as authors of research publications",
];

const StudentPathways = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="student-pathways"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F8F9FC",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 7 }} alignItems="center">
          {/* Left Column: Heading, Details, Benefits Checklist & Buttons */}
          <Grid size={{ xs: 12, md: 6.8 }}>
            <Stack spacing={3.5} sx={{ width: "100%" }}>
              <SectionBadge
                label="Student Pathways"
                align="left"
                textColor="#1B365D"
                glowColor="#1B365D"
                borderColor="rgba(27, 54, 93, 0.25)"
                backgroundColor="rgba(27, 54, 93, 0.08)"
              />

              {/* Title & Description */}
              <Stack spacing={1.5}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "28px", sm: "34px", md: "38px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Students as Innovators, <br />
                  <span style={{ color: "#1B365D" }}>
                    Researchers & Leaders
                  </span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    fontWeight: 600,
                    color: "#3B82F6",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Beneficiaries of the IAIRE Innovation & Research Ecosystem
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  Students are the primary beneficiaries of the{" "}
                  <strong>IAIRE</strong> Innovation, Research and
                  Entrepreneurship ecosystem. Through structured learning,
                  continuous mentoring, and hands-on innovation projects, they
                  develop the knowledge, skills, and mindset required to become
                  future innovators, researchers, and entrepreneurs.
                </Typography>
              </Stack>

              {/* Benefits Checklist inside Left Column */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1B365D",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mb: 2.25,
                  }}
                >
                  Participating students benefit from:
                </Typography>
                <Grid container spacing={1.75}>
                  {benefits.map((benefit, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                      <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                        <Stack
                          direction="row"
                          spacing={1.25}
                          alignItems="flex-start"
                          onMouseEnter={() => setHoveredIdx(idx)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          sx={{
                            cursor: "default",
                            transform: isHovered
                              ? "translateX(4px)"
                              : "translateX(0)",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: isHovered ? "#3B82F6" : "#1B365D",
                              fontSize: 17,
                              mt: 0.2,
                              flexShrink: 0,
                              transition: "color 0.2s ease",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "13px",
                              fontWeight: 500,
                              lineHeight: 1.4,
                              color: isHovered ? "#0B1727" : "#4B5563",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {benefit}
                          </Typography>
                        </Stack>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.15,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Become a Student Member
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Premium Glowing Illustration of Student Pathways */}
          <Grid
            size={{ xs: 12, md: 5.2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: { md: 2 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "24px",
                border: "1px solid #E5E5E9",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#F9F9FB",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 30px 60px rgba(27, 54, 93, 0.05)",
                  borderColor: "rgba(27, 54, 93, 0.15)",
                },
              }}
            >
              <Image
                src={studentPathwaysImg}
                alt="IAIRE Student Pathways and Young Innovators"
                layout="responsive"
                width={1024}
                height={1024}
                priority
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentPathways;
