import React, { useRef } from "react";
import { Box, Card, Stack, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { CaseStudy } from "./ResourceData";

interface Props {
  items: CaseStudy[];
}

const CaseStudiesCarousel: React.FC<Props> = ({ items }) => {
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
        {items.map((cs, idx) => (
          <Card
            key={idx}
            elevation={0}
            sx={{
              minWidth: { xs: "300px", sm: "340px" },
              maxWidth: "380px",
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              borderRadius: "20px",
              border: "1px solid rgba(27, 54, 93, 0.06)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: `${cs.badgeColor}50`,
                boxShadow: `0 20px 40px ${cs.badgeColor}12`,
              },
            }}
          >
            {/* Color accent */}
            <Box
              sx={{
                height: "5px",
                background: `linear-gradient(90deg, ${cs.badgeColor}, ${cs.badgeColor}70)`,
              }}
            />

            <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
              {/* Sector */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  px: 1.25,
                  py: 0.35,
                  borderRadius: "6px",
                  backgroundColor: `${cs.badgeColor}10`,
                  fontFamily: inter.style.fontFamily,
                  fontSize: "10px",
                  fontWeight: 800,
                  color: cs.badgeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {cs.sector}
              </Box>

              {/* Title + author */}
              <Stack spacing={0.5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 800,
                    color: "#0B1727",
                    fontSize: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {cs.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#334155",
                  }}
                >
                  By {cs.student}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    color: "#94A3B8",
                    fontWeight: 500,
                  }}
                >
                  {cs.school}
                </Typography>
              </Stack>

              {/* Separator */}
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "rgba(0,0,0,0.04)",
                }}
              />

              {/* Problem / Solution / Impact */}
              <Stack spacing={1.75} sx={{ flexGrow: 1 }}>
                {[
                  { label: "Problem", text: cs.problem, lc: "#64748B" },
                  {
                    label: "Solution",
                    text: cs.solution,
                    lc: "#64748B",
                  },
                  {
                    label: "Impact",
                    text: cs.impact,
                    lc: cs.badgeColor,
                  },
                ].map((b, bIdx) => (
                  <Stack key={bIdx} spacing={0.25}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "9.5px",
                        fontWeight: 800,
                        color: b.lc,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {b.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12.5px",
                        color: bIdx === 2 ? "#0B1727" : "#4B5563",
                        fontWeight: bIdx === 2 ? 600 : 400,
                        lineHeight: 1.5,
                      }}
                    >
                      {b.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CaseStudiesCarousel;
