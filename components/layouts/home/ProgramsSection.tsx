"use client";

import ScrollReveal from "@/components/widgets/ScrollReveal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface Program {
  id:string;
  title: string;
  description: string;
  icon: string;
}

const programs: Program[] = [
  {
    id:"innovation",
    title: "Innovation Program",
    description:
      "Transform ideas into patented innovations with expert guidance and resources.",
    icon: "/images/icon/bulbIcon.png",
    
  },
  {
    id:"research",
    title: "Research Program",
    description:
      "Conduct rigorous research and publish findings in prestigious journals.",
    icon: "/images/icon/researchIcon.png",
  },
  {
    id:"entrepreneurship",
    title: "Entrepreneurship Program",
    description:
      "Build startups and launch ventures with mentorship and funding opportunities.",
    icon: "/images/icon/rocketIcon.png",
  },
];

const THEMED_COLORS = [
  { accent: "#F59E0B", light: "rgba(245, 158, 11, 0.05)" }, // Innovation
  { accent: "#3B82F6", light: "rgba(59, 130, 246, 0.05)" }, // Research
  { accent: "#8B5CF6", light: "rgba(139, 92, 246, 0.05)" }, // Entrepreneurship
];

const ProgramsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">
        <ScrollReveal delay={0.1}>
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{ mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#0F172A",
              fontSize: { xs: 32, md: 48 },
              fontWeight: 700,
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Our Programs
          </Typography>
          <Typography
            sx={{
              color: "#475569",
              fontSize: { xs: 16, md: 18 },
              maxWidth: "600px",
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Comprehensive pathways for young minds to excel
          </Typography>
        </Stack>

        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Students working together"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3}>
              {programs.map((program, index) => {
                const theme = THEMED_COLORS[index];

                return (
                  <ScrollReveal key={program.id} delay={index * 0.15}>
                  <Card
                    elevation={0}
                    sx={{
                      p: { xs: 2.5, sm: 3, md: 4 },
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                      border: "1px solid #F1F5F9",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 12px 30px ${theme.accent}40`,
                        borderColor: theme.accent,
                      },
                    }}
                  >
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems={{ xs: "flex-start", sm: "flex-start" }}>
                      <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            background: theme.light,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}>
                          <Image
                            src={program.icon as string}
                            alt={program.title}
                            width={28}
                            height={28}
                          />
                      </Box>
                      <Stack spacing={1}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#0F172A",
                            fontWeight: 600,
                            fontSize: "1.25rem",
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {program.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#475569",
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {program.description}
                        </Typography>
                        <Link
                          href="#"
                          sx={{
                            color: theme.accent,
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            mt: 1,
                            transition: "gap 0.2s ease",
                            "&:hover": {
                              gap: 1,
                            },
                          }}
                        >
                          Learn more <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </Link>
                      </Stack>
                    </Stack>
                  </Card>
                  </ScrollReveal>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

export default ProgramsSection;
