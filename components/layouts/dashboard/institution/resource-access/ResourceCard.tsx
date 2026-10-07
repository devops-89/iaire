"use client";

import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";
import BeamButton from "@/components/widgets/BeamButton";
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
  if (t.includes("playbook")) return "#1B365D";
  if (t.includes("module")) return "#EA580C";
  if (t.includes("template")) return "#4F46E5";
  return "#0D9488";
};

const getThemeBg = (type?: string) => {
  const t = type?.toLowerCase() || "";
  if (t.includes("playbook"))
    return "linear-gradient(135deg, rgba(27, 54, 93, 0.1) 0%, rgba(27, 54, 93, 0.03) 100%)";
  if (t.includes("module"))
    return "linear-gradient(135deg, rgba(234, 88, 12, 0.12) 0%, rgba(234, 88, 12, 0.03) 100%)";
  if (t.includes("template"))
    return "linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(79, 70, 229, 0.03) 100%)";
  return "linear-gradient(135deg, rgba(13, 148, 136, 0.12) 0%, rgba(13, 148, 136, 0.03) 100%)";
};

const getThemeBorder = (type?: string) => {
  const t = type?.toLowerCase() || "";
  if (t.includes("playbook")) return "rgba(27, 54, 93, 0.18)";
  if (t.includes("module")) return "rgba(234, 88, 12, 0.22)";
  if (t.includes("template")) return "rgba(79, 70, 229, 0.22)";
  return "rgba(13, 148, 136, 0.22)";
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
  const themeBg = getThemeBg(type);
  const themeBorder = getThemeBorder(type);

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px -2px rgba(15, 23, 42, 0.05)",
        border: "1px solid #E2E8F0",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            "0px 20px 35px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(27, 54, 93, 0.1)",
          borderColor: "rgba(27, 54, 93, 0.2)",
        },
      }}
    >
      {/* Top Icon & Status Badge */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 3, pb: 2 }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "14px",
            background: themeBg,
            display: "grid",
            placeItems: "center",
            color: themeColor,
            border: `1px solid ${themeBorder}`,
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
                  fontSize: "13px !important",
                  color: "#D97706 !important",
                }}
              />
            }
            label="Premium"
            size="small"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 700,
              fontSize: 11,
              bgcolor: "#FFFBEB",
              color: "#D97706",
              border: "1px solid #FDE68A",
              borderRadius: "8px",
              pl: 0.5,
            }}
          />
        ) : (
          <Chip
            icon={
              <VerifiedUserOutlined
                sx={{
                  fontSize: "13px !important",
                  color: "#10B981 !important",
                }}
              />
            }
            label="Unlocked"
            size="small"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 700,
              fontSize: 11,
              bgcolor: "#ECFDF5",
              color: "#059669",
              border: "1px solid #A7F3D0",
              borderRadius: "8px",
              pl: 0.5,
            }}
          />
        )}
      </Stack>

      {/* Card Content */}
      <Box
        sx={{
          px: 3,
          pb: 2.5,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Type Label */}
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "11px",
            fontWeight: 700,
            color: themeColor,
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            mb: 0.75,
          }}
        >
          {type || "Resource"}
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "17px",
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.4,
            mb: 1.25,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "48px",
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "13.5px",
            color: "#64748B",
            lineHeight: 1.6,
            mb: 2.5,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "64px",
          }}
        >
          {description ||
            "Access custom materials, toolkits, and curated playbooks designed to structure your classroom workflow."}
        </Typography>

        {/* Tags / Meta Chips */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ mt: "auto" }}
        >
          {category && (
            <Chip
              label={category}
              size="small"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: 11,
                bgcolor: "#F1F5F9",
                color: "#475569",
                borderRadius: "8px",
                height: "26px",
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
                bgcolor: "#F1F5F9",
                color: "#475569",
                borderRadius: "8px",
                height: "26px",
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
                bgcolor: "#F1F5F9",
                color: "#475569",
                borderRadius: "8px",
                height: "26px",
              }}
            />
          )}
          <Chip
            icon={
              <ArticleOutlined
                sx={{
                  fontSize: "14px !important",
                  color: "#64748B !important",
                }}
              />
            }
            label="Resource File"
            size="small"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              fontSize: 11,
              bgcolor: "rgba(15, 23, 42, 0.04)",
              color: "#64748B",
              borderRadius: "8px",
              height: "26px",
              pl: 0.5,
            }}
          />
        </Stack>
      </Box>

      {/* Card Footer Button Container */}
      <Box sx={{ p: 3, pt: 2, borderTop: "1px solid #F1F5F9" }}>
        <BeamButton
          variant="contained"
          fullWidth
          endIcon={<OpenInNewOutlined sx={{ fontSize: 18 }} />}
          onClick={() => handleAccess(fileUrl)}
          sx={{
            background: "linear-gradient(135deg, #1B365D 0%, #254F85 100%)",
            color: COLORS.WHITE,
            textTransform: "none",
            borderRadius: "12px",
            padding: "11px 0",
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: 14,
            boxShadow: "0 4px 12px rgba(27, 54, 93, 0.2)",
            transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              background: "linear-gradient(135deg, #0F2038 0%, #1B365D 100%)",
              boxShadow: "0 8px 20px rgba(27, 54, 93, 0.35)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Access Resource
        </BeamButton>
      </Box>
    </Card>
  );
};

export default ResourceCard;
