import React from "react";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import {
  CalendarToday,
  Person,
  Email,
  Badge,
  Lightbulb,
} from "@mui/icons-material";
import { montserrat, newBlack_medium } from "@/utils/fonts";
import { INNOVATION_RESPONSE_DATA_PROPS } from "@/utils/type";

interface ProfileCardProps {
  innovationDetails: INNOVATION_RESPONSE_DATA_PROPS;
}

const ProfileCard = ({ innovationDetails }: ProfileCardProps) => {
  const formattedCreatedDate = innovationDetails?.createdAt
    ? new Date(innovationDetails.createdAt).toLocaleDateString("en-US", {
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
        position: "fixed",
        top: 150,
        width: "350px",
      }}
    >
      <Box
        sx={{
          height: "100px",
          background: "linear-gradient(135deg, #015A50 0%, #032C46 100%)",
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
            bgcolor: "#015A50",
            fontSize: "2.25rem",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          <Lightbulb sx={{ fontSize: "2.5rem" }} />
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
          {innovationDetails.title}
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
          Status:
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" mb={3}>
          <Chip
            label={innovationDetails.status}
            size="small"
            sx={{
              bgcolor:
                innovationDetails.status === "APPROVED"
                  ? "#e8f5e9"
                  : innovationDetails.status === "PENDING"
                    ? "#fff3e0"
                    : "#ffebee",
              color:
                innovationDetails.status === "APPROVED"
                  ? "#2e7d32"
                  : innovationDetails.status === "PENDING"
                    ? "#ef6c00"
                    : "#c62828",
              fontWeight: 600,
              fontSize: "11px",
            }}
          />
          {innovationDetails.isDraft && (
            <Chip
              label="Draft"
              size="small"
              sx={{
                bgcolor: "#f1f5f9",
                color: "#475569",
                fontWeight: 600,
                fontSize: "11px",
              }}
            />
          )}
        </Stack>
      </Box>

      <Divider sx={{ mx: 3, mb: 2 }} />

      <Stack spacing={2} sx={{ px: 3, pb: 2 }}>
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
              SUBMITTED ON
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

        <Divider sx={{ my: 1 }} />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", fontSize: "10px", fontWeight: 700 }}
        >
          SUBMITTED BY
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Person sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
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
              FULL NAME
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "#032C46",
                fontWeight: 600,
              }}
            >
              {innovationDetails.creator?.fullName || "-"}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Email sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
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
              EMAIL ADDRESS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "#032C46",
                fontWeight: 600,
                wordBreak: "break-all",
              }}
            >
              {innovationDetails.creator?.email || "-"}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Badge sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
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
              ROLE
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "#032C46",
                fontWeight: 600,
              }}
            >
              {innovationDetails.creator?.role || "-"}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
