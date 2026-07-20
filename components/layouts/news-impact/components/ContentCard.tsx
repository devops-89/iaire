import { inter } from "@/utils/fonts";
import {
  AccessTimeOutlined,
  ArrowForwardOutlined,
  CalendarTodayOutlined,
  OpenInNewOutlined,
  GavelOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";
import { Box, Button, Card, Chip, Stack, Typography, Divider, IconButton } from "@mui/material";
import React from "react";

const categoryColors: Record<string, string> = {
  // Articles
  Announcements: "#3B82F6",
  Partnerships: "#10B981",
  "Chapter Highlights": "#F59E0B",
  "Student Success": "#8B5CF6",
  // Patents & Publications
  IoT: "#3B82F6",
  Biotech: "#10B981",
  Software: "#8B5CF6",
  Materials: "#F59E0B",
  Energy: "#EF4444",
};

export interface ContentCardProps {
  variant: "article" | "document";
  idx: number;
  category: string;
  title: string;
  date: string;
  link?: string;
  readTime?: string;
  summary?: string;
  type?: string;
  authors?: string;
  school?: string;
  abstract?: string;
  citationOrId?: string;
}

const ContentCard = ({
  variant,
  idx,
  category,
  title,
  date,
  link,
  readTime,
  summary,
  type,
  authors,
  school,
  abstract,
  citationOrId,
}: ContentCardProps) => {
  const isDocument = variant === "document";
  const color = categoryColors[category] || "#3B82F6";

  return (
    <div>
      <Card
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={isDocument ? ((idx % 2) * 100 + 200).toString() : ((idx % 2) * 100).toString()}
        sx={{
          p: 4,
          height: "100%",
          borderRadius: "24px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: isDocument ? "0 12px 35px rgba(0, 0, 0, 0.02)" : "0 12px 35px rgba(0, 0, 0, 0.01)",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderColor: `${color}${isDocument ? '40' : '60'}`,
            boxShadow:
              `0 24px 48px ${color}15`,
            transform: "translateY(-6px)",
            "& .read-more-btn .MuiButton-endIcon": {
              transform: "translateX(4px)",
              color: color,
            },
          },
        }}
      >
        {/* Visual Top Border Color for Document */}
        {isDocument && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: `linear-gradient(90deg, ${color}, ${color}80)`,
            }}
          />
        )}

        <Stack spacing={isDocument ? 3 : 2.5}>
          {/* Meta Details */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ gap: 1 }}
          >
            {isDocument && type && (
              <Chip
                icon={
                  type === "Patent" ? (
                    <GavelOutlined style={{ color: "#2563EB", fontSize: 14 }} />
                  ) : (
                    <MenuBookOutlined style={{ color: "#059669", fontSize: 14 }} />
                  )
                }
                label={type}
                size="small"
                sx={{
                  fontWeight: 700,
                  fontSize: "11px",
                  backgroundColor:
                    type === "Patent"
                      ? "rgba(59, 130, 246, 0.08)"
                      : "rgba(16, 185, 129, 0.08)",
                  color: type === "Patent" ? "#2563EB" : "#059669",
                  borderRadius: "8px",
                  pl: 0.5,
                  "& .MuiChip-icon": {
                    ml: 0.5,
                  },
                }}
              />
            )}
            
            <Chip
              label={category}
              size="small"
              sx={{
                fontWeight: isDocument ? 600 : 800,
                fontSize: isDocument ? "11px" : "10.5px",
                backgroundColor: `${color}${isDocument ? '10' : '12'}`,
                color: color,
                borderRadius: isDocument ? "8px" : "6px",
                fontFamily: inter.style.fontFamily,
              }}
            />
            
            {isDocument && <Box sx={{ flexGrow: 1 }} />}
            
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ color: isDocument ? "#94A3B8" : "#64748B" }}
            >
              {!isDocument && <CalendarTodayOutlined sx={{ fontSize: "12px" }} />}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: inter.style.fontFamily,
                }}
              >
                {date}
              </Typography>
            </Stack>

            {!isDocument && readTime && (
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ color: "#64748B" }}
              >
                <AccessTimeOutlined sx={{ fontSize: "12px" }} />
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {readTime}
                </Typography>
              </Stack>
            )}
          </Stack>

          {/* Title & Metadata */}
          <Stack spacing={isDocument ? 1.25 : 1.5}>
            <Typography
              variant={isDocument ? "h6" : "h5"}
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 800,
                fontSize: isDocument ? "18px" : "19px",
                color: "#0F172A",
                lineHeight: isDocument ? 1.4 : 1.35,
              }}
            >
              {title}
            </Typography>

            {!isDocument && summary && (
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                {summary}
              </Typography>
            )}

            {isDocument && (authors || school) && (
              <Stack spacing={0.5}>
                {authors && (
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      color: "#334155",
                    }}
                  >
                    By {authors}
                  </Typography>
                )}
                {school && (
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12.5px",
                      color: "#64748B",
                      fontWeight: 500,
                    }}
                  >
                    {school}
                  </Typography>
                )}
              </Stack>
            )}
          </Stack>

          {isDocument && abstract && (
            <>
              <Divider sx={{ opacity: 0.6 }} />
              {/* Abstract */}
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#94A3B8",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Abstract:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.6,
                  }}
                >
                  {abstract}
                </Typography>
              </Stack>
            </>
          )}
        </Stack>

        {/* Footer Action */}
        <Box
          sx={{
            mt: isDocument ? 4 : 3.5,
            pt: isDocument ? 2.5 : 2,
            borderTop: "1px solid rgba(0, 0, 0, 0.04)",
            display: isDocument ? "flex" : "block",
            alignItems: isDocument ? "center" : "unset",
            justifyContent: isDocument ? "space-between" : "unset",
          }}
        >
          {isDocument ? (
            <>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    color: "#94A3B8",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  REF:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: "#475569",
                    fontWeight: 700,
                  }}
                >
                  {citationOrId}
                </Typography>
              </Stack>

              <IconButton
                size="small"
                {...(link ? { href: link, target: "_blank", component: "a" } : {})}
                sx={{
                  color: color,
                  backgroundColor: `${color}12`,
                  borderRadius: "10px",
                  p: 1.25,
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    backgroundColor: color,
                    color: "#FFFFFF",
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 16px ${color}30`,
                  },
                }}
              >
                <OpenInNewOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            </>
          ) : (
            <Button
              variant="text"
              size="small"
              className="read-more-btn"
              {...(link ? { href: link, target: "_blank", component: "a" } : {})}
              endIcon={<ArrowForwardOutlined />}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontFamily: inter.style.fontFamily,
                fontSize: "13px",
                color: color,
                p: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiButton-endIcon": {
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                },
              }}
            >
              Read Full Article
            </Button>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default ContentCard;
