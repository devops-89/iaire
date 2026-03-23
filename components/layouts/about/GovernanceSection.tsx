"use client";

import { Box, Card, Container, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import { COLORS } from "@/utils/enum";

const documents = [
  { title: "Charter & Constitution", icon: <GavelOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: "Bylaws", icon: <ArticleOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: "Code of Ethics & Conduct", icon: <ShieldOutlinedIcon sx={{ fontSize: 20 }} /> },
  { title: "Financial Transparency Reports", icon: <AnalyticsOutlinedIcon sx={{ fontSize: 20 }} /> },
];

const GovernanceSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3rem" },
              color: "#111827",
              textAlign: "center",
            }}
          >
            Governance
          </Typography>

          <Stack spacing={4} sx={{ width: "100%", maxWidth: "800px" }}>
            {/* Funding Card */}
            <Card
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: "#FFFFFF",
                border: "1px solid",
                borderColor: "rgba(0, 0, 0, 0.05)",
              }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    color: "#111827",
                  }}
                >
                  Funding
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#4B5563",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}
                >
                  IAIRE is supported through a combination of membership fees, grants from foundations committed to youth education, corporate partnerships, and donations from individuals who believe in nurturing the next generation of innovators.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#4B5563",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}
                >
                  All funding is transparently managed and directed toward programs, resources, and support for our members and their initiatives.
                </Typography>
              </Stack>
            </Card>

            {/* Governing Documents Card */}
            <Card
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: "#FFFFFF",
                border: "1px solid",
                borderColor: "rgba(0, 0, 0, 0.05)",
              }}
            >
              <Stack spacing={4}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    color: "#111827",
                  }}
                >
                  Governing Documents
                </Typography>
                
                <Box>
                  {documents.map((doc, index) => (
                    <React.Fragment key={index}>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 2 }}>
                        <Box sx={{ color: "#D1A054", display: "flex" }}>
                          {doc.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 500,
                            fontSize: "1.1rem",
                            color: "#374151",
                          }}
                        >
                          {doc.title}
                        </Typography>
                      </Stack>
                      {index < documents.length - 1 && (
                        <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.05)" }} />
                      )}
                    </React.Fragment>
                  ))}
                </Box>

                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#6B7280",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                  }}
                >
                  Detailed governing documents are available to members through the member portal.
                </Typography>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default GovernanceSection;
