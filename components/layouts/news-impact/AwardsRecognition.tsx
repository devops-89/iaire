"use client";

import React from "react";
import { Box, Card, Container, Grid, Stack, Typography, Chip, Divider } from "@mui/material";
import { EmojiEventsOutlined, WorkspacePremiumOutlined, SchoolOutlined, StarBorderOutlined } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface AwardItem {
  title: string;
  badge: string;
  icon: React.ReactNode;
  desc: string;
  criteria: string[];
  recentRecipient: string;
  recipientSchool: string;
  themeColor: string;
}

const awards: AwardItem[] = [
  {
    title: "IAIRE Innovation Scholar Gold Medal",
    badge: "Student Excellence",
    icon: <EmojiEventsOutlined sx={{ fontSize: 30, color: "#D97706" }} />,
    desc: "Recognizing exceptional student innovators who have successfully designed, built, validated, and filed intellectual property for an original solution.",
    criteria: [
      "Working high-fidelity prototype verification",
      "Completed novelty patent database search log",
      "Filed provisional or utility patent application",
    ],
    recentRecipient: "Sophia Chen (SargassumBio)",
    recipientSchool: "Vanguard Academy, Los Angeles",
    themeColor: "#F59E0B",
  },
  {
    title: "IAIRE Global Research Fellowship",
    badge: "Academic Rigour",
    icon: <WorkspacePremiumOutlined sx={{ fontSize: 30, color: "#2563EB" }} />,
    desc: "Awarded to secondary students who demonstrate exceptional depth in scientific inquiry, literature synthesis, and experimental data validation.",
    criteria: [
      "Rigorous experimental design & hypothesis testing",
      "Comprehensive literature review mapping",
      "Accepted for peer-reviewed journal publication",
    ],
    recentRecipient: "Jane Appiah & Kofi Mensah",
    recipientSchool: "Accra Science & Technology Academy",
    themeColor: "#3B82F6",
  },
  {
    title: "Outstanding Innovation Educator of the Year",
    badge: "Mentorship & Leadership",
    icon: <SchoolOutlined sx={{ fontSize: 30, color: "#059669" }} />,
    desc: "Honoring mentor teachers who excel in fostering critical thinking, guiding student patent disclosures, and integrating innovation curricula.",
    criteria: [
      "Certified IAIRE Innovation Educator status",
      "Guided at least 3 student patent or research filings",
      "Pioneered school-wide innovation hub programs",
    ],
    recentRecipient: "Dr. Sandeep Sen",
    recipientSchool: "Greenwood International, Bangalore",
    themeColor: "#10B981",
  },
];

const AwardsRecognition = () => {
  return (
    <Box
      id="awards"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F8FAFC",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "25vw",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Block */}
        <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 8 }, textAlign: "center", alignItems: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              backgroundColor: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.15)",
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
                backgroundColor: "#F59E0B",
                boxShadow: "0 0 8px #F59E0B",
              }}
            />
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "11px",
                fontWeight: 700,
                color: "#D97706",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Honors, Medals & Fellowships
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#0F172A",
            }}
          >
            Awards & <span style={{ color: "#F59E0B" }}>Global Recognition</span>
          </Typography>

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: "#475569",
              maxWidth: "680px",
            }}
          >
            Celebrating excellence in innovation and research. These honors highlight outstanding achievements of students and the educators mentoring them.
          </Typography>
        </Stack>

        {/* Awards Cards Grid */}
        <Grid container spacing={4}>
          {awards.map((award, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
                  background: "#FFFFFF",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: award.themeColor,
                    boxShadow: `0 20px 40px ${award.themeColor}12`,
                  },
                }}
              >
                {/* Visual Top Border Color */}
                <Box
                  sx={{
                    height: "5px",
                    backgroundColor: award.themeColor,
                  }}
                />

                <Box sx={{ p: 3.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Stack spacing={2.5} sx={{ height: "100%" }}>
                    {/* Badge & Icon Row */}
                    <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          backgroundColor: `${award.themeColor}0F`,
                          border: `1px solid ${award.themeColor}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {award.icon}
                      </Box>
                      <Chip
                        label={award.badge}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "11px",
                          backgroundColor: `${award.themeColor}0F`,
                          color: award.themeColor,
                          borderRadius: "6px",
                          fontFamily: inter.style.fontFamily,
                        }}
                      />
                    </Stack>

                    {/* Title & Desc */}
                    <Stack spacing={1}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 800,
                          fontSize: "17px",
                          color: "#0F172A",
                          lineHeight: 1.35,
                        }}
                      >
                        {award.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13.5px",
                          color: "#475569",
                          lineHeight: 1.55,
                        }}
                      >
                        {award.desc}
                      </Typography>
                    </Stack>

                    <Divider sx={{ opacity: 0.6 }} />

                    {/* Criteria */}
                    <Stack spacing={1.25} sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "#64748B",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Evaluation Criteria:
                      </Typography>
                      <Stack spacing={1}>
                        {award.criteria.map((crit, cIdx) => (
                          <Stack key={cIdx} direction="row" spacing={1} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                backgroundColor: award.themeColor,
                                mt: 1,
                              }}
                            />
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "12.5px",
                                color: "#475569",
                                fontWeight: 500,
                                lineHeight: 1.4,
                              }}
                            >
                              {crit}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>

                    <Divider sx={{ opacity: 0.6 }} />

                    {/* Recipient */}
                    <Stack spacing={0.5}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "#64748B",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Recent Recipient:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13.5px",
                          color: "#1E293B",
                          fontWeight: 700,
                        }}
                      >
                        {award.recentRecipient}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "#64748B",
                          fontWeight: 500,
                        }}
                      >
                        {award.recipientSchool}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AwardsRecognition;
