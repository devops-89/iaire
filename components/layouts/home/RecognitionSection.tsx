"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PsychologyIcon from "@mui/icons-material/PsychologyOutlined";

const institutionalPathways = [
  "Institutional Member",
  "Certified Institutional Member",
  "Associate Fellow Institution of IAIRE",
  "Fellow Institution of IAIRE",
];

const educatorPathways = [
  "Educator Member",
  "Certified Innovation or Research Mentor",
  "Associate Fellow of Innovation or Research Education",
  "Fellow of Innovation or Research Education",
];

const studentPathways = [
  "Student Member",
  "Student Innovation or Research Scholar",
  "Associate Fellow of Innovation or Research",
  "Fellow Student of Innovation or Research",
];

const RecognitionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#0D0D11",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration - glowing accent blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
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
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={7} alignItems="center">
          
          {/* Centered Heading */}
          <Stack spacing={1.5} alignItems="center" sx={{ textAlign: "center", maxWidth: "800px" }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1B365D",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                IAIRE Fellowships & Standards
              </Typography>
              <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
            </Box>
            
            <Typography
              component="h2"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "32px", sm: "40px", md: "46px" },
                fontWeight: 800,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                mb: 1,
              }}
            >
              Recognition That Motivates Excellence
            </Typography>

            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15.5px",
                color: "#9D9DA7",
                lineHeight: 1.6,
                maxWidth: "760px",
              }}
            >
              Innovation and research require sustained effort. IAIRE creates structured recognition pathways for schools, educators, and students who demonstrate achievement, leadership, mentorship, intellectual property creation, research output, entrepreneurship, and contribution to the field.
            </Typography>
          </Stack>

          {/* Three-Column Recognition Pathways Grid */}
          <Grid container spacing={4}>
            
            {/* Column 1: School & Institutional Pathways */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
              <Box
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.015)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: "24px",
                  p: { xs: 4, sm: 5 },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredCard === 0 ? "translateY(-6px)" : "translateY(0)",
                  borderColor: hoveredCard === 0 ? "rgba(27, 54, 93, 0.4)" : "rgba(255, 255, 255, 0.04)",
                  boxShadow: hoveredCard === 0 ? "0 20px 40px rgba(0, 0, 0, 0.3)" : "none",
                }}
              >
                <Stack spacing={4} sx={{ height: "100%" }}>
                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        backgroundColor: "rgba(27, 54, 93, 0.15)",
                        color: "#3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontFamily: inter.style.fontFamily, fontSize: "19px", fontWeight: 700, color: "#FFFFFF" }}>
                      Institutions
                    </Typography>
                  </Stack>

                  {/* Level Steps */}
                  <Stack spacing={3.5} sx={{ flexGrow: 1, pl: 1, position: "relative" }}>
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
                    {institutionalPathways.map((path, idx) => (
                      <Stack direction="row" spacing={3} alignItems="center" key={idx} sx={{ position: "relative", zIndex: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#0D0D11",
                            border: "2px solid rgba(27, 54, 93, 0.6)",
                            boxShadow: "0 0 5px rgba(27, 54, 93, 0.5)",
                          }}
                        />
                        <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px", fontWeight: 500, color: "#E2E2E9", lineHeight: 1.3 }}>
                          {path}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            {/* Column 2: Educator & Mentor Pathways */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
              <Box
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.015)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: "24px",
                  p: { xs: 4, sm: 5 },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredCard === 1 ? "translateY(-6px)" : "translateY(0)",
                  borderColor: hoveredCard === 1 ? "rgba(27, 54, 93, 0.4)" : "rgba(255, 255, 255, 0.04)",
                  boxShadow: hoveredCard === 1 ? "0 20px 40px rgba(0, 0, 0, 0.3)" : "none",
                }}
              >
                <Stack spacing={4} sx={{ height: "100%" }}>
                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        backgroundColor: "rgba(27, 54, 93, 0.15)",
                        color: "#3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PsychologyIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontFamily: inter.style.fontFamily, fontSize: "19px", fontWeight: 700, color: "#FFFFFF" }}>
                      Educators
                    </Typography>
                  </Stack>

                  {/* Level Steps */}
                  <Stack spacing={3.5} sx={{ flexGrow: 1, pl: 1, position: "relative" }}>
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
                    {educatorPathways.map((path, idx) => (
                      <Stack direction="row" spacing={3} alignItems="center" key={idx} sx={{ position: "relative", zIndex: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#0D0D11",
                            border: "2px solid rgba(27, 54, 93, 0.6)",
                            boxShadow: "0 0 5px rgba(27, 54, 93, 0.5)",
                          }}
                        />
                        <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px", fontWeight: 500, color: "#E2E2E9", lineHeight: 1.3 }}>
                          {path}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            {/* Column 3: Student & Scholar Pathways */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
              <Box
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.015)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: "24px",
                  p: { xs: 4, sm: 5 },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredCard === 2 ? "translateY(-6px)" : "translateY(0)",
                  borderColor: hoveredCard === 2 ? "rgba(27, 54, 93, 0.4)" : "rgba(255, 255, 255, 0.04)",
                  boxShadow: hoveredCard === 2 ? "0 20px 40px rgba(0, 0, 0, 0.3)" : "none",
                }}
              >
                <Stack spacing={4} sx={{ height: "100%" }}>
                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        backgroundColor: "rgba(27, 54, 93, 0.15)",
                        color: "#3B82F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WorkspacePremiumIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontFamily: inter.style.fontFamily, fontSize: "19px", fontWeight: 700, color: "#FFFFFF" }}>
                      Students
                    </Typography>
                  </Stack>

                  {/* Level Steps */}
                  <Stack spacing={3.5} sx={{ flexGrow: 1, pl: 1, position: "relative" }}>
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
                    {studentPathways.map((path, idx) => (
                      <Stack direction="row" spacing={3} alignItems="center" key={idx} sx={{ position: "relative", zIndex: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#0D0D11",
                            border: "2px solid rgba(27, 54, 93, 0.6)",
                            boxShadow: "0 0 5px rgba(27, 54, 93, 0.5)",
                          }}
                        />
                        <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px", fontWeight: 500, color: "#E2E2E9", lineHeight: 1.3 }}>
                          {path}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>

          </Grid>

          {/* Centered CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            justifyContent="center"
          >
            <Link href="/programs" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#0D0D11",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "100px",
                  px: 4,
                  py: 1.5,
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.15)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    backgroundColor: "#F3F4F6",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.25)",
                  },
                }}
              >
                Explore Recognition Pathways
              </Button>
            </Link>

            <Link href="/signup/role-selection" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
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
                  px: 4,
                  py: 1.5,
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
