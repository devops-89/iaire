"use client";

import { Box, Card, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const documents = [
  { title: "Charter & Constitution", icon: "/images/icon/researchGrantIcon.png",},
  { title: "Bylaws", icon: "/images/icon/researchGrantIcon.png", },
  { title: "Code of Ethics & Conduct", icon: "/images/icon/researchGrantIcon.png", },
  { title: "Financial Transparency Reports", icon: "/images/icon/researchGrantIcon.png", },
];

const GovernanceSection = () => {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 },px: { xs: 2, sm: 3, md: 0 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
              lineHeight: { xs: "2.4rem", md: "3.5rem" },
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
                p: { xs: 3, sm: 4, md: 6 },
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
                    fontSize: { xs: "1.3rem", md: "1.75rem" },
                    color: "#111827",
                  }}
                >
                  Funding
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#4B5563",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: { xs: 1.6, md: 1.7 },
                  }}
                >
                  IAIRE is supported through a combination of membership fees, grants from foundations committed to youth education, corporate partnerships, and donations from individuals who believe in nurturing the next generation of innovators.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#4B5563",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: { xs: 1.6, md: 1.7 },
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
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: 4,
                bgcolor: "#FFFFFF",
                border: "1px solid",
                borderColor: "rgba(0, 0, 0, 0.05)",
              }}
            >
              <Stack spacing={1}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", md: "1.75rem" },
                    color: "#111827",
                  }}
                >
                  Governing Documents
                </Typography>
                
                <Box>
                  {documents.map((doc, index) => (
                    <React.Fragment key={index}>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 2 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}>
                          <Image
                            src={doc.icon}
                            alt={doc.title}
                            width={20}
                            height={20}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 500,
                            fontSize: { xs: "0.95rem", md: "1.1rem" },
                            color: "#374151",
                          }}
                        >
                          {doc.title}
                        </Typography>
                      </Stack>
                    </React.Fragment>
                  ))}
                </Box>

                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#6B7280",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
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
