"use client";

import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Box,
  Button,
  Card,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArticleOutlined,
  DownloadOutlined,
  MenuBookOutlined,
  OpenInNewOutlined,
  ViewModuleOutlined,
} from "@mui/icons-material";

export type ResourceType = "playbook" | "module" | "template";

export interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  category: string;
  level: string;
  duration: string;
}

const resourceIcon = {
  playbook: MenuBookOutlined,
  module: ViewModuleOutlined,
  template: ArticleOutlined,
};

const resourceLabel = {
  playbook: "Playbook",
  module: "Module",
  template: "Template",
};

const ResourceCard = ({
  title,
  description,
  type,
  category,
  level,
  duration,
}: ResourceCardProps) => {
  const Icon = resourceIcon[type];

  return (
    <Card
      sx={{
        p: { xs: 2, md: 2.75 },
        height: "100%",
        borderRadius: "8px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.06)",
        border: "1px solid #E6E9EE",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.09)",
        },
      }}
    >
      <Stack spacing={2.25} sx={{ height: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "8px",
              backgroundColor: COLORS.UNLOCKED_BUTTON_GREEN,
              display: "grid",
              placeItems: "center",
              color: COLORS.PRIMARY_NAVY,
              flexShrink: 0,
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.BLACK,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: 12,
                color: "rgba(0,0,0,0.58)",
              }}
            >
              {resourceLabel[type]}
            </Typography>
          </Box>
        </Stack>

        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 14,
            color: "rgba(0,0,0,0.72)",
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          {description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label={category} size="small" />
          <Chip label={level} size="small" />
          <Chip label={duration} size="small" />
        </Stack>

        <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            startIcon={<OpenInNewOutlined />}
            sx={{
              backgroundColor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
              textTransform: "none",
              borderRadius: "8px",
              fontFamily: montserrat.style.fontFamily,
              minWidth: 110,
              "&:hover": {
                backgroundColor: COLORS.PRIMARY_NAVY,
              },
            }}
          >
            Open
          </Button>
          <Button
            variant="outlined"
            startIcon={<DownloadOutlined />}
            sx={{
              borderColor: COLORS.PRIMARY_NAVY,
              color: COLORS.PRIMARY_NAVY,
              textTransform: "none",
              borderRadius: "8px",
              fontFamily: montserrat.style.fontFamily,
              minWidth: 120,
            }}
          >
            Download
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ResourceCard;
