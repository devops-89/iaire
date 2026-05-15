"use client";

import ScrollReveal from "@/components/widgets/ScrollReveal";
import { COLORS } from "@/utils/enum";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const events = [
  {
    type: "Webinar",
    title: "AI & Innovation: Building Tomorrow's Solutions",
    date: "March 25, 2025",
    description:
      "Explore how artificial intelligence is transforming innovation and entrepreneurship for young minds.",
  },
  {
    type: "Workshop",
    title: "Young Researchers: Publishing Your First Paper",
    date: "April 10, 2025",
    description:
      "Learn the essential steps to conduct research and publish in academic journals.",
  },
  {
    type: "Seminar",
    title: "Scaling Your Startup: From Idea to Investment",
    date: "April 15, 2025",
    description:
      "Navigate the journey from concept to funded venture with insights from successful entrepreneurs.",
  },
];

const EventsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        bgcolor: COLORS.WHITE,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          spacing={2}
          sx={{ mb: { xs: 4, md: 8 } }}
        >
          <ScrollReveal delay={0.1}>
            <Stack spacing={1}>
              <Typography
                variant="h2"
                sx={{
                  color: "#111827",
                  fontSize: { xs: 32, md: 48 },
                  fontWeight: 700,
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                Upcoming Webinars & Events
              </Typography>
              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "1.1rem",
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Connect, learn, and grow with the IAIRE community
              </Typography>
            </Stack>
          </ScrollReveal>
          <Link
            href="#"
            sx={{
              color: "#F59E0B",
              textDecoration: "none",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: '"Inter", sans-serif',
              transition: "gap 0.2s ease",
              "&:hover": {
                gap: 1.5,
              },
            }}
          >
            View All Events <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
        </Stack>

        <Grid container spacing={{ xs: 12, md: 4 }}>
          {events.map((event, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <ScrollReveal delay={0.15 * index}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3, md: 4 },
                    height: "100%",
                    borderRadius: "24px",
                    border: "1px solid #E5E7EB",
                    bgcolor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 3 }}
                  >
                    <Chip
                      label={event.type}
                      size="small"
                      sx={{
                        bgcolor:
                          event.type === "Webinar" ? "#FEF3C7" : "#F3F4F6",
                        color: event.type === "Webinar" ? "#B45309" : "#374151",
                        fontWeight: 600,
                        borderRadius: "8px",
                        px: 0.5,
                      }}
                    />
                    <Image
                      src="/images/icon/calanderIcon.png"
                      alt="calander"
                      width={20}
                      height={20}
                    />
                  </Stack>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#111827",
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      mb: 1.5,
                      lineHeight: 1.4,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#374151",
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                      mb: 4,
                      flexGrow: 1,
                      lineHeight: 1.6,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {event.description}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#F3F4F6",
                      color: "#111827",
                      boxShadow: "none",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: "12px",
                      py: { xs: 1.2, md: 1.5 },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      fontFamily: '"Inter", sans-serif',
                      transition: "all 0.3s ease",

                      "&:hover": {
                        bgcolor: "#D4A574",
                        color: "#FFFFFF",
                        boxShadow: "none",
                      },
                      "&:hover .arrow": {
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    Register Now{" "}
                    <ArrowForwardIcon
                      className="arrow"
                      sx={{
                        px: 1,
                        fontSize: 18,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Button>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventsSection;
