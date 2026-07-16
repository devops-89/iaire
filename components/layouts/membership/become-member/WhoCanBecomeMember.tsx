"use client";

import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";

// MUI icons
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const targetGroups = [
  {
    title: "Schools & Educational Institutions",
    desc: "Primary, secondary, and higher secondary schools committed to building an innovation and research culture.",
    icon: <SchoolOutlinedIcon sx={{ fontSize: 26 }} />,
  },
  {
    title: "Educators & Teachers",
    desc: "Teachers who want to grow as Innovation & Research Mentors and guide the next generation of problem-solvers.",
    icon: <SupervisorAccountOutlinedIcon sx={{ fontSize: 26 }} />,
  },
  {
    title: "Students",
    desc: "Curious, motivated learners ready to explore innovation, research, and entrepreneurship.",
    icon: <LocalLibraryOutlinedIcon sx={{ fontSize: 26 }} />,
  },
  {
    title: "Researchers & Academics",
    desc: "Individuals committed to advancing innovation education and research in school-level learning.",
    icon: <ScienceOutlinedIcon sx={{ fontSize: 26 }} />,
  },
  {
    title: "Organizations & Institutions",
    desc: "Corporations, NGOs, foundations, and educational bodies that share IAIRE's vision.",
    icon: <BusinessOutlinedIcon sx={{ fontSize: 26 }} />,
  },
  {
    title: "Parents & Community Leaders",
    desc: "Those who believe in nurturing innovation thinking from an early age.",
    icon: <PeopleAltOutlinedIcon sx={{ fontSize: 26 }} />,
  },
];

const WhoCanBecomeMember = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Title Stack */}
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
              letterSpacing: "2px",
              color: "#1B365D",
              textTransform: "uppercase",
              textAlign: "center",
              width: "100%",
            }}
          >
            IAIRE Eligibility
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: newBlack_medium.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: "32px", sm: "38px", md: "44px" },
              color: "#1D1D1F",
              letterSpacing: "-0.015em",
              textAlign: "center",
              width: "100%",
            }}
          >
            Who Can Become a Member?
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "16px",
              color: "rgba(0, 0, 0, 0.6)",
              maxWidth: "600px",
              lineHeight: "1.6",
              textAlign: "center",
              width: "100%",
            }}
          >
            IAIRE is a diverse, connected ecosystem that supports all
            stakeholders in innovation education.
          </Typography>
        </Stack>

        {/* Card Grid */}
        <Grid container spacing={3.5}>
          {targetGroups.map((group, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={idx}
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  backgroundColor: "#F9FAFC",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "24px",
                  p: { xs: 3.5, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px rgba(248, 93, 0, 0.06)",
                    borderColor: "rgba(248, 93, 0, 0.2)",
                    backgroundColor: "#FFFFFF",
                  },
                }}
              >
                {/* Icon Circle */}
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "14px",
                    backgroundColor: "rgba(248, 93, 0, 0.08)",
                    color: "#1B365D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {group.icon}
                </Box>

                {/* Card Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1D1D1F",
                    mb: 1.5,
                    lineHeight: "1.4",
                  }}
                >
                  {group.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14.5px",
                    color: "rgba(0, 0, 0, 0.6)",
                    lineHeight: "1.6",
                  }}
                >
                  {group.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoCanBecomeMember;
