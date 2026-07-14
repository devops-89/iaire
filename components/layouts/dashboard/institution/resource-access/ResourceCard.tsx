"use client";

import { COLORS } from "@/utils/enum";
import { montserrat, roboto, inter } from "@/utils/fonts";
import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";
import {
  ArticleOutlined,
  Lock,
  MenuBookOutlined,
  OpenInNewOutlined,
  VerifiedUserOutlined,
  ViewModuleOutlined,
} from "@mui/icons-material";

export type ResourceType = "playbook" | "module" | "template";

export interface ResourceCardProps {
  id?: number | string;
  title: string;
  description: string;
  type?: string;
  category?: string;
  level?: string;
  duration?: string;
  fileUrl?: string;
  isMember: boolean;
  handleAccess: (url?: string) => void;
}

const getIcon = (type?: string) => {
  const t = type?.toLowerCase() || "";
  if (t.includes("playbook")) return <MenuBookOutlined sx={{ fontSize: 24 }} />;
  if (t.includes("module")) return <ViewModuleOutlined sx={{ fontSize: 24 }} />;
  if (t.includes("template")) return <ArticleOutlined sx={{ fontSize: 24 }} />;
  return <MenuBookOutlined sx={{ fontSize: 24 }} />;
};

const getThemeColor = (type?: string) => {
  const t = type?.toLowerCase() || "";
  if (t.includes("playbook")) return COLORS.PRIMARY_NAVY || "#015A50";
  if (t.includes("module")) return "#EE8E26";
  if (t.includes("template")) return "#3F51B5";
  return "#78909C";
};

const getGradientHeader = (type?: string) => {
  const t = type?.toLowerCase() || "";
  if (t.includes("playbook"))
    return `linear-gradient(90deg, #015A50 0%, #00897b 100%)`;
  if (t.includes("module"))
    return `linear-gradient(90deg, #EE8E26 0%, #ffb74d 100%)`;
  if (t.includes("template"))
    return `linear-gradient(90deg, #3F51B5 0%, #7986cb 100%)`;
  return `linear-gradient(90deg, #78909C 0%, #b0bec5 100%)`;
};

const ResourceCard = ({
  title,
  description,
  type,
  category,
  level,
  duration,
  fileUrl,
  isMember,
  handleAccess,
}: ResourceCardProps) => {
  const themeColor = getThemeColor(type);
  const gradientHeader = getGradientHeader(type);

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "20px",
        boxShadow: "0px 8px 24px rgba(11, 23, 39, 0.02)",
        border: "1px solid #f1f5f9",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: gradientHeader,
        },
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 20px 35px rgba(1, 90, 80, 0.08)",
          borderColor: "rgba(1, 90, 80, 0.15)",
        },
      }}
    >
      <Stack spacing={2} sx={{ p: 3.5, pb: 2.5, flexGrow: 1 }}>
        {/* Top Icon and Label section */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1.5}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${themeColor}12 0%, ${themeColor}05 100%)`,
              display: "grid",
              placeItems: "center",
              color: themeColor,
              border: `1px solid ${themeColor}20`,
            }}
          >
            {getIcon(type)}
          </Box>

          {/* Resource Status Badge */}
          {!isMember ? (
            <Chip
              icon={
                <Lock
                  sx={{
                    fontSize: "12px !important",
                    color: "#D97706 !important",
                  }}
                />
              }
              label="Premium"
              size="small"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                fontSize: 10,
                bgcolor: "#FFFBEB",
                color: "#D97706",
                border: "1px solid #FDE68A",
                borderRadius: "6px",
                pl: 0.5,
              }}
            />
          ) : (
            <Chip
              icon={
                <VerifiedUserOutlined
                  sx={{
                    fontSize: "12px !important",
                    color: "#10B981 !important",
                  }}
                />
              }
              label="Unlocked"
              size="small"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                fontSize: 10,
                bgcolor: "#ECFDF5",
                color: "#10B981",
                border: "1px solid #A7F3D0",
                borderRadius: "6px",
                pl: 0.5,
              }}
            />
          )}
        </Stack>

        {/* Title & Type */}
        <Box>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 16,
              fontWeight: 750,
              color: "#0f172a",
              lineHeight: 1.4,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: 11,
              fontWeight: 700,
              color: themeColor,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {type || "Resource"}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: 14,
            color: "#64748b",
            lineHeight: 1.6,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description ||
            "Access custom materials, toolkits, and curated playbooks designed to structure your classroom workflow."}
        </Typography>

        {/* Category Tags */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ mt: 1 }}
        >
          {category && (
            <Chip
              label={category}
              size="small"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: 11,
                bgcolor: "#f1f5f9",
                color: "#475569",
                borderRadius: "8px",
              }}
            />
          )}
          {level && (
            <Chip
              label={level}
              size="small"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: 11,
                bgcolor: "#f1f5f9",
                color: "#475569",
                borderRadius: "8px",
              }}
            />
          )}
          {duration && (
            <Chip
              label={duration}
              size="small"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: 11,
                bgcolor: "#f1f5f9",
                color: "#475569",
                borderRadius: "8px",
              }}
            />
          )}
          <Chip
            label="Resource File"
            size="small"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              fontSize: 11,
              bgcolor: "rgba(15, 23, 42, 0.04)",
              color: "#64748b",
              borderRadius: "8px",
            }}
          />
        </Stack>
      </Stack>

      {/* Card Footer Button Container */}
      <Box sx={{ p: 3, pt: 0 }}>
        {/* {isMember ? (
          <Button
            variant="contained"
            fullWidth
            endIcon={<OpenInNewOutlined />}
            onClick={() => handleAccess(fileUrl)}
            sx={{
              background: "linear-gradient(135deg, #015A50 0%, #003630 100%)",
              color: COLORS.WHITE,
              textTransform: "none",
              borderRadius: "12px",
              padding: "11px 0",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: 14,
              transition: "all 0.25s",
              "&:hover": {
                background: "linear-gradient(135deg, #003630 0%, #00221e 100%)",
                boxShadow: "0px 8px 20px rgba(1, 90, 80, 0.25)",
                transform: "scale(1.02)",
              },
            }}
          >
            Access Resource
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            startIcon={<Lock />}
            onClick={() => handleAccess()}
            sx={{
              background: "linear-gradient(135deg, #EE8E26 0%, #D97706 100%)",
              color: COLORS.WHITE,
              textTransform: "none",
              borderRadius: "12px",
              padding: "11px 0",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: 14,
              transition: "all 0.25s",
              "&:hover": {
                background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                boxShadow: "0px 8px 20px rgba(217, 119, 6, 0.3)",
                transform: "scale(1.02)",
              },
            }}
          >
            Unlock to Access
          </Button>
        )} */}
        <Button
          variant="contained"
          fullWidth
          endIcon={<OpenInNewOutlined />}
          onClick={() => handleAccess(fileUrl)}
          sx={{
            background: "linear-gradient(135deg, #015A50 0%, #003630 100%)",
            color: COLORS.WHITE,
            textTransform: "none",
            borderRadius: "12px",
            padding: "11px 0",
            fontFamily: montserrat.style.fontFamily,
            fontWeight: 700,
            fontSize: 14,
            transition: "all 0.25s",
            "&:hover": {
              background: "linear-gradient(135deg, #003630 0%, #00221e 100%)",
              boxShadow: "0px 8px 20px rgba(1, 90, 80, 0.25)",
              transform: "scale(1.02)",
            },
          }}
        >
          Access Resource
        </Button>
      </Box>
    </Card>
  );
};

export default ResourceCard;
