import React, { useRef } from "react";
import { Box, Card, Stack, Typography, IconButton } from "@mui/material";
import { AccessTime, CheckCircleOutline, Download, ArrowBack, ArrowForward } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import { ResourceTemplate } from "./ResourceData";
import BeamButton from "@/components/widgets/BeamButton";

interface Props {
  items: ResourceTemplate[];
  bgColor: string;
}

const TemplateCarousel: React.FC<Props> = ({ items, bgColor }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ mb: 3 }}
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100"
      >
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "12px",
            fontWeight: 700,
            color: "#94A3B8",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Scroll to explore
        </Typography>
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            width: 36,
            height: 36,
            border: "1.5px solid rgba(27, 54, 93, 0.12)",
            borderRadius: "10px",
            color: "#1B365D",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(27, 54, 93, 0.06)",
              borderColor: "#1B365D",
            },
          }}
        >
          <ArrowBack sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            width: 36,
            height: 36,
            border: "1.5px solid rgba(27, 54, 93, 0.12)",
            borderRadius: "10px",
            color: "#1B365D",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(27, 54, 93, 0.06)",
              borderColor: "#1B365D",
            },
          }}
        >
          <ArrowForward sx={{ fontSize: 18 }} />
        </IconButton>
      </Stack>

      <Box
        ref={scrollRef}
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200"
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          pt: "8px",
          pb: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { height: "6px" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(27, 54, 93, 0.12)",
            borderRadius: "10px",
            "&:hover": { background: "rgba(27, 54, 93, 0.25)" },
          },
        }}
      >
        {items.map((item, idx) => (
          <Card
            key={idx}
            elevation={0}
            sx={{
              minWidth: { xs: "300px", sm: "340px" },
              maxWidth: "360px",
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              borderRadius: "20px",
              border: "1px solid rgba(27, 54, 93, 0.06)",
              background:
                bgColor === "#FFFFFF"
                  ? "linear-gradient(135deg, rgba(248, 249, 252, 0.6) 0%, #FFFFFF 100%)"
                  : "#FFFFFF",
              boxShadow: "0 8px 24px rgba(27, 54, 93, 0.03)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "#1B365D",
                boxShadow: "0 20px 40px rgba(27, 54, 93, 0.06)",
              },
            }}
          >
            <Stack spacing={2.5} sx={{ p: 3, flexGrow: 1 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    px: 1.25,
                    py: 0.35,
                    borderRadius: "6px",
                    backgroundColor: "rgba(27, 54, 93, 0.06)",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "10px",
                    fontWeight: 800,
                    color: "#1B365D",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.type}
                </Box>
                <Box
                  sx={{
                    px: 1.25,
                    py: 0.35,
                    borderRadius: "6px",
                    border: "1px solid rgba(0,0,0,0.06)",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#64748B",
                  }}
                >
                  {item.tag}
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <AccessTime sx={{ fontSize: 13, color: "#94A3B8" }} />
                  <Typography
                    sx={{
                      fontSize: "10.5px",
                      color: "#94A3B8",
                      fontWeight: 600,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {item.timeToComplete}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 800,
                  color: "#0B1727",
                  fontSize: "16px",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13px",
                  color: "#4B5563",
                  lineHeight: 1.55,
                }}
              >
                {item.desc}
              </Typography>

              <Stack spacing={0.75} sx={{ flexGrow: 1 }}>
                {item.details.map((d, dIdx) => (
                  <Stack
                    key={dIdx}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <CheckCircleOutline
                      sx={{
                        fontSize: 15,
                        color: "#1B365D",
                        opacity: 0.5,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12px",
                        color: "#4B5563",
                        fontWeight: 500,
                      }}
                    >
                      {d}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Box sx={{ px: 3, pb: 2.5, mt: "auto" }}>
              <Link href="/login">
                <BeamButton
                  variant="contained"
                  fullWidth
                  size="small"
                  startIcon={<Download sx={{ fontSize: 16 }} />}
                  sx={{
                    backgroundColor: "#1B365D",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "none",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(27, 54, 93, 0.12)",
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#122744",
                      boxShadow: "0 8px 20px rgba(27, 54, 93, 0.2)",
                    },
                  }}
                >
                  Download Template
                </BeamButton>
              </Link>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TemplateCarousel;
