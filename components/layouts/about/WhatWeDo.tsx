"use client";

import { Box, Card, Container, Grid, Typography, Stack, Avatar } from "@mui/material";
import React from "react";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import { COLORS } from "@/utils/enum";

const activities = [
  {
    title: "Nurturing IRE Ecosystem",
    description: "Building thriving communities of innovators, researchers, and entrepreneurs.",
    icon: <GroupOutlinedIcon sx={{ color: "#D1A054" }} />,
    bgColor: "rgba(209, 160, 84, 0.1)",
  },
  {
    title: "Enabling Schools",
    description: "Partnering with institutions to integrate IRE culture into education.",
    icon: <MenuBookOutlinedIcon sx={{ color: "#1B3B2B" }} />,
    bgColor: "rgba(27, 59, 43, 0.1)",
  },
  {
    title: "Training & Certifying Teachers",
    description: "Empowering educators with cutting-edge IRE methodologies.",
    icon: <WorkspacePremiumOutlinedIcon sx={{ color: "#D1A054" }} />,
    bgColor: "rgba(209, 160, 84, 0.1)",
  },
  {
    title: "Student Training Programs",
    description: "Enabling teachers to train students in IRE excellence.",
    icon: <RecordVoiceOverOutlinedIcon sx={{ color: "#1B3B2B" }} />,
    bgColor: "rgba(27, 59, 43, 0.1)",
  },
  {
    title: "Research Grants",
    description: "Funding groundbreaking research by young minds.",
    icon: <ArticleOutlinedIcon sx={{ color: "#D1A054" }} />,
    bgColor: "rgba(209, 160, 84, 0.1)",
  },
  {
    title: "Patent Grants",
    description: "Supporting intellectual property protection for innovations.",
    icon: <BusinessCenterOutlinedIcon sx={{ color: "#1B3B2B" }} />,
    bgColor: "rgba(27, 59, 43, 0.1)",
  },
  {
    title: "Startup Funding",
    description: "Investing in entrepreneurial ventures that create impact.",
    icon: <PaidOutlinedIcon sx={{ color: "#D1A054" }} />,
    bgColor: "rgba(209, 160, 84, 0.1)",
  },
];

const WhatWeDo = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: "#111827",
                mb: 2,
              }}
            >
              What We Do
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {activities.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: COLORS.WHITE,
                    transition: "all 0.3s ease",
                    border: "1px solid",
                    borderColor: "rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Stack spacing={3}>
                    <Avatar
                      sx={{
                        bgcolor: item.bgColor,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<any>, { 
                        sx: { 
                          fontSize: 28, 
                          color: (item.icon.props as any)?.sx?.color || "inherit" 
                        } 
                      })}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          color: "#111827",
                          lineHeight: 1.3,
                          mb: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "0.95rem",
                          color: "#6B7280",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
