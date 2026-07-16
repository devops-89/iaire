import { newBlack_medium, montserrat } from "@/utils/fonts";
import { TEAM_DETAILS_RESPONSE } from "@/utils/type";
import {
  Avatar,
  Box,
  Card,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { CalendarToday, Group } from "@mui/icons-material";
import React from "react";

interface ProfileCardProps {
  data: TEAM_DETAILS_RESPONSE;
}

const ProfileCard = ({ data }: ProfileCardProps) => {
  const formattedCreatedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "-";

  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(0, 0, 0, 0.04)",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        pb: 1,
      }}
    >
      <Box
        sx={{
          height: "100px",
          background: "linear-gradient(135deg, #1B365D 0%, #032C46 100%)",
          position: "relative",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "-50px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            border: "4px solid #ffffff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            bgcolor: "#1B365D",
            fontSize: "2.25rem",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          <Group sx={{ fontSize: "2.5rem" }} />
        </Avatar>
      </Box>

      <Box sx={{ textAlign: "center", mt: 2, px: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: newBlack_medium.style.fontFamily,
            fontWeight: 700,
            color: "#032C46",
            fontSize: "20px",
            textTransform: "capitalize",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: montserrat.style.fontFamily,
            color: "rgba(0, 0, 0, 0.5)",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Code: {data.teamCode}
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" mb={3}>
          <Chip
            label={data.type}
            size="small"
            sx={{
              bgcolor: "rgba(248, 93, 0, 0.08)",
              color: "#1B365D",
              fontWeight: 600,
              fontSize: "11px",
            }}
          />
          <Chip
            label={data.school?.name || "-"}
            size="small"
            sx={{
              bgcolor: "#f1f5f9",
              color: "#475569",
              fontWeight: 600,
              fontSize: "11px",
            }}
          />
        </Stack>
      </Box>

      <Divider sx={{ mx: 3, mb: 2 }} />

      <Stack spacing={2} sx={{ px: 3, pb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Group sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                display: "block",
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              TEAM MEMBERS COUNT
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "#032C46",
                fontWeight: 600,
              }}
            >
              {data.members?.length || 0} Student(s)
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <CalendarToday sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                display: "block",
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              CREATED ON
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "#032C46",
                fontWeight: 600,
              }}
            >
              {formattedCreatedDate}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
