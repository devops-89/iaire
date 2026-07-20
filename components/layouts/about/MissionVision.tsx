"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import AssignmentIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import SectionBadge from "@/components/widgets/SectionBadge";
import StatementPanel from "./mission/StatementPanel";
import ValuesPanel from "./mission/ValuesPanel";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "mission",
  );

  const tabs = [
    {
      id: "mission",
      num: "01",
      label: "Mission Statement",
      desc: "Our tactical roadmap for academic impact",
    },
    {
      id: "vision",
      num: "02",
      label: "Vision Statement",
      desc: "Our long-term global aspiration",
    },
    {
      id: "values",
      num: "03",
      label: "Core Values",
      desc: "The tenets that guide every decision",
    },
  ] as const;

  return (
    <Box
      id="mission"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 0 },
        backgroundColor: "#F8F9FC",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Background Decorative Blur Flares */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          left: "-5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Cyber Grid pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.02,
          backgroundImage: `linear-gradient(rgba(27, 54, 93, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(27, 54, 93, 0.1) 1px, transparent 1px)`,
          backgroundSize: "35px 35px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          <Grid
            data-aos="fade-right"
            data-aos-duration="800"
            size={{ xs: 12, md: 5 }}
          >
            <Stack spacing={4}>
              <Stack spacing={2}>
                <SectionBadge
                  label="Core Purpose"
                  align="left"
                  textColor="#1B365D"
                  glowColor="#1B365D"
                  borderColor="rgba(27, 54, 93, 0.25)"
                  backgroundColor="rgba(27, 54, 93, 0.08)"
                />

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 950,
                    fontSize: { xs: "32px", sm: "40px", md: "46px" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Our Core <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #1B365D 0%, #3B82F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Foundations
                  </span>
                </Typography>
              </Stack>

              <Stack spacing={2} sx={{ position: "relative" }}>
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <Box
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      sx={{
                        p: 2.25,
                        borderRadius: "16px",
                        border: "1px solid",
                        borderColor: isActive
                          ? "rgba(27, 54, 93, 0.1)"
                          : "transparent",
                        backgroundColor: isActive ? "#FFFFFF" : "transparent",
                        boxShadow: isActive
                          ? "0 10px 30px rgba(27, 54, 93, 0.04)"
                          : "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 2.5,
                        "&:hover": {
                          backgroundColor: isActive
                            ? "#FFFFFF"
                            : "rgba(27, 54, 93, 0.02)",
                          transform: isActive
                            ? "translateX(4px)"
                            : "translateX(2px)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "18px",
                          fontWeight: 900,
                          color: isActive ? "#3B82F6" : "#A0AEC0",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {tab.num}
                      </Typography>

                      <Stack spacing={0.25}>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "15px",
                            fontWeight: 800,
                            color: isActive ? "#0B1727" : "#4B5563",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {tab.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "11.5px",
                            color: isActive ? "#6B7280" : "#9CA3AF",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {tab.desc}
                        </Typography>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>

          <Grid
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            size={{ xs: 12, md: 7 }}
          >
            <Box
              sx={{
                width: "100%",
                minHeight: { xs: "360px", sm: "400px", md: "430px" },
                borderRadius: "28px",
                border: "1px solid rgba(27, 54, 93, 0.06)",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(27, 54, 93, 0.03)",
                p: { xs: 4, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                boxSizing: "border-box",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {activeTab === "mission" && (
                <StatementPanel
                  icon={<AssignmentIcon sx={{ fontSize: 20 }} />}
                  iconColor="#1B365D"
                  iconBgColor="rgba(27, 54, 93, 0.06)"
                  title="IAIRE Mission Statement"
                  description="To advance innovation, research, and entrepreneurship education by establishing standards, certification frameworks, mentorship systems, quality-assurance processes, and recognition pathways that empower schools, educators, and students to create meaningful intellectual, academic, entrepreneurial, and societal impact."
                  buttonText="Join the IAIRE Community"
                  buttonHref="/login"
                />
              )}

              {activeTab === "vision" && (
                <StatementPanel
                  icon={<VisibilityIcon sx={{ fontSize: 20 }} />}
                  iconColor="#3B82F6"
                  iconBgColor="rgba(59, 130, 246, 0.06)"
                  title="IAIRE Vision Statement"
                  description="To build a globally respected academic and professional society that enables schools to become centers of innovation and research, educators to become certified mentors and leaders, and students to become innovators, researchers, inventors, entrepreneurs, and responsible problem-solvers."
                  buttonText="Join the IAIRE Community"
                  buttonHref="/login"
                />
              )}

              {activeTab === "values" && <ValuesPanel />}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Embedded slide-up CSS animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default MissionVision;
