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
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorderOutlined";

const pathways = [
  {
    title: "Student Scholar Designation",
    desc: "Recognizing high school and college students demonstrating innovation novelty, patent filings, or research publication.",
    icon: <SchoolIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Associate Fellow Pathway",
    desc: "Awarded to certified mentors and professionals with demonstrated mentoring outcomes, research guidance, and curriculum leadership.",
    icon: <StarBorderIcon sx={{ fontSize: 20 }} />,
  },
  {
    title: "Fellow of the Academy (FIAIRE)",
    desc: "The highest professional distinction, representing sustained innovation influence, peer-review governance, and advisory board leadership.",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 20 }} />,
  },
];

const AwardsFellowships = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      id="fellowships"
      sx={{
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "85px" },
        pb: { xs: "60px", md: "35px" },
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
          {/* Left Column: Title, Details & CTA Buttons */}
          <Grid size={{ xs: 12, md: 6.8 }}
            data-aos="fade-right"
            data-aos-duration="800">
            <Stack spacing={3} sx={{ width: "100%" }}>
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
                  Recognition & Fellowships
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
                  Recognition for Achievement, <br />
                  <span style={{ color: "#1B365D" }}>
                    Leadership & Contribution
                  </span>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  <strong>IAIRE</strong> recognizes schools, educators, and
                  students who demonstrate sustained achievement and
                  contribution within innovation, research, and entrepreneurship
                  education.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  Advancement within the IAIRE framework is based upon
                  demonstrated achievement rather than participation alone.
                  Higher distinctions such as Associate Fellow and Fellow are
                  awarded only upon satisfying defined criteria relating to
                  innovation, research, intellectual property creation,
                  publications, mentorship, leadership, entrepreneurship, and
                  sustained contribution to the field.
                </Typography>
              </Stack>

              {/* Action Buttons Row */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.75}
                sx={{ pt: 0.5, width: "100%", flexWrap: "wrap", gap: 1.5 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                {/* <Link href="/fellows" style={{ textDecoration: "none" }}>
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
                    View Fellowship Criteria
                  </Button>
                </Link>

                <Link
                  href="/signup/role-selection"
                  style={{ textDecoration: "none" }}
                >
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
                    Nominate a Fellow
                  </Button>
                </Link> */}

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
                    Explore Recognition
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Premium Distinctions Card Stack */}
          <Grid size={{ xs: 12, md: 5.2 }} sx={{ pl: { md: 2 } }}>
            <Card
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: "24px",
                border: "1px solid rgba(27, 54, 93, 0.08)",
                background:
                  "linear-gradient(135deg, rgba(27, 54, 93, 0.01) 0%, rgba(255, 255, 255, 0.95) 100%)",
                boxShadow: "0 15px 35px rgba(27, 54, 93, 0.03)",
                borderLeft: "6px solid #1B365D",
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
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      color: "#1B365D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WorkspacePremiumIcon sx={{ fontSize: 19 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "16.5px",
                      fontWeight: 800,
                      color: "#0B1727",
                    }}
                  >
                    Fellowship Distinctions
                  </Typography>
                </Stack>

                {/* Distinctions Stack */}
                <Stack spacing={2.5}>
                  {pathways.map((path, idx) => {
                    const isHovered = hoveredIdx === idx;
                    return (
                      <Stack
                        key={idx}
                        direction="row"
                        spacing={2}
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
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "8px",
                            backgroundColor: isHovered
                              ? "rgba(59, 130, 246, 0.1)"
                              : "rgba(27, 54, 93, 0.04)",
                            color: isHovered ? "#3B82F6" : "#1B365D",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {path.icon}
                        </Box>

                        <Stack spacing={0.25}>
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "13px",
                              fontWeight: 700,
                              color: isHovered ? "#0B1727" : "#1F2937",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {path.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "11.5px",
                              lineHeight: 1.4,
                              color: "#6B7280",
                            }}
                          >
                            {path.desc}
                          </Typography>
                        </Stack>
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

export default AwardsFellowships;
