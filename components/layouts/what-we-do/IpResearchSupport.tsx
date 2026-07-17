"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";

const guidanceAreas = [
  "Patentability assessment & novelty evaluation",
  "Patent drafting & filing guidance",
  "Intellectual property protection (India & International)",
  "Research manuscript prep for journals & conferences",
  "Technical innovation documentation support",
  "Technology commercialization pathways",
  "Entrepreneurial development & mentorship",
];

const IpResearchSupport = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="ip-support"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
        backgroundColor: "#FFFFFF",
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
          top: "15%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 75%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          {/* Left Column: Title, Details & Ownership Disclaimer Card */}
          <Grid size={{ xs: 12, md: 6.8 }}>
            <Stack spacing={2.75} sx={{ width: "100%" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: "rgba(27, 54, 93, 0.06)",
                    color: "#1B365D",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  IP & Research Support
                </Box>
              </Box>

              {/* Title & Description */}
              <Stack spacing={1}>
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
                  Intellectual Property & <br />
                  <span style={{ color: "#1B365D" }}>Research Support</span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.5,
                    color: "#4B5563",
                  }}
                >
                  A distinguishing feature of the <strong>IAIRE</strong>{" "}
                  ecosystem is its commitment to supporting the complete
                  innovation lifecycle from ideation to intellectual property
                  creation and research dissemination.
                </Typography>
              </Stack>

              {/* Ownership Disclaimer Callout Card */}
              <Card
                elevation={0}
                sx={{
                  p: 2.25,
                  borderRadius: "16px",
                  border: "1px solid rgba(27, 54, 93, 0.08)",
                  background:
                    "linear-gradient(135deg, rgba(27, 54, 93, 0.01) 0%, rgba(255, 255, 255, 0.98) 100%)",
                  borderLeft: "4px solid #1B365D",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1B365D",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mb: 0.75,
                  }}
                >
                  Ownership Rights Policy
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    lineHeight: 1.45,
                    color: "#4B5563",
                  }}
                >
                  <strong>IAIRE</strong> and <strong>DiscoverSTEM</strong> do
                  not retain, acquire, or claim ownership rights over patents,
                  publications, innovations, copyrights, trademarks, designs,
                  data, or any other intellectual property generated by
                  students, teachers, or schools participating in the program.
                </Typography>
              </Card>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Link href="/programs" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      px: 3.25,
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
                    Explore Research Support
                  </Button>
                </Link>

                {/* <Link href="/programs" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#1B365D",
                      borderColor: "#1B365D",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.25,
                      py: 1.15,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#122744",
                        color: "#122744",
                        backgroundColor: "rgba(27, 54, 93, 0.04)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Explore Research Support
                  </Button>
                </Link> */}

                {/* <Link href="/what-we-do" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#4B5563",
                      borderColor: "rgba(0, 0, 0, 0.15)",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      px: 3.25,
                      py: 1.15,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#1B365D",
                        color: "#1B365D",
                        backgroundColor: "rgba(27, 54, 93, 0.04)",
                        transform: "translateY(-2px)",
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    View Pathways
                  </Button>
                </Link> */}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Support Scope Checklist Panel */}
          <Grid size={{ xs: 12, md: 5.2 }} sx={{ pl: { md: 2 } }}>
            <Card
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: "24px",
                border: "1px solid rgba(59, 130, 246, 0.08)",
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.01) 0%, rgba(255, 255, 255, 0.95) 100%)",
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.03)",
                borderLeft: "6px solid #3B82F6",
              }}
            >
              <Stack spacing={3}>
                {/* Panel Header */}
                <Stack direction="row" spacing={1.75} alignItems="center">
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "10px",
                      backgroundColor: "rgba(59, 130, 246, 0.06)",
                      color: "#3B82F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SecurityIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16.5px",
                      fontWeight: 800,
                      color: "#0B1727",
                    }}
                  >
                    Guidance & Lifecycle Scope
                  </Typography>
                </Stack>

                {/* Sub-explanation */}
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  Novel projects may receive structured guidance in:
                </Typography>

                {/* Scope Checklist */}
                <Stack spacing={1.75}>
                  {guidanceAreas.map((area, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                      <Stack
                        key={idx}
                        direction="row"
                        spacing={1.75}
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
                            fontSize: 18,
                            mt: 0.25,
                            flexShrink: 0,
                            transition: "color 0.2s ease",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13px",
                            fontWeight: 600,
                            lineHeight: 1.45,
                            color: isHovered ? "#0B1727" : "#4B5563",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {area}
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IpResearchSupport;
