import { newBlack_medium, montserrat, roboto } from "@/utils/fonts";
import { EDUCATOR_DETAILS_RESPONSE } from "@/utils/type";
import {
  Avatar,
  Box,
  Card,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import {
  EmailOutlined,
  PhoneOutlined,
  CalendarTodayOutlined,
  BadgeOutlined,
} from "@mui/icons-material";
import React from "react";

interface ProfileCardProps {
  data: EDUCATOR_DETAILS_RESPONSE;
}

const ProfileCard = ({ data }: ProfileCardProps) => {
  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.split(" ");
    return parts
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <Box>
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
        {/* Banner header with gradient */}
        <Box
          sx={{
            height: "100px",
            background: "linear-gradient(135deg, #015A50 0%, #032C46 100%)",
            position: "relative",
          }}
        />

        {/* Floating Avatar */}
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
            src={data?.profileImageDownloadUrl || undefined}
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
            {getInitials(
              data?.fullName ||
                `${data?.firstName || ""} ${data?.lastName || ""}`,
            )}
          </Avatar>
        </Box>

        {/* Name and Username */}
        <Box sx={{ textAlign: "center", mt: 2, px: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: newBlack_medium.style.fontFamily,
              fontWeight: 700,
              color: "#032C46",
              fontSize: "20px",
            }}
          >
            {data?.fullName ||
              `${data?.firstName || ""} ${data?.lastName || ""}`}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: montserrat.style.fontFamily,
              color: "rgba(0, 0, 0, 0.5)",
              mb: 2,
              fontWeight: 500,
            }}
          >
            @{data?.username}
          </Typography>

          {/* Status Pills */}
          <Stack direction="row" spacing={1} justifyContent="center" mb={3}>
            <Chip
              label={data?.status}
              size="small"
              sx={{
                bgcolor: data?.status === "ACTIVE" ? "#e8f5e9" : "#ffebee",
                color: data?.status === "ACTIVE" ? "#2e7d32" : "#c62828",
                fontWeight: 600,
                textTransform: "capitalize",
                fontSize: "11px",
              }}
            />
            <Chip
              label={data?.approvalStatus}
              size="small"
              sx={{
                bgcolor:
                  data?.approvalStatus === "APPROVED" ? "#e3f2fd" : "#fff3e0",
                color:
                  data?.approvalStatus === "APPROVED" ? "#1565c0" : "#ef6c00",
                fontWeight: 600,
                fontSize: "11px",
              }}
            />
          </Stack>
        </Box>

        <Divider sx={{ mx: 3, mb: 2 }} />

        {/* Info Rows */}
        <Stack spacing={2} sx={{ px: 3, pb: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <EmailOutlined sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", fontSize: "10px", fontWeight: 600 }}
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
                {data?.email}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <PhoneOutlined sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", fontSize: "10px", fontWeight: 600 }}
              >
                PHONE NUMBER
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  color: "#032C46",
                  fontWeight: 600,
                }}
              >
                {data?.phone ? (data.phone.startsWith("+") ? data.phone : `+${data.phone}`) : "No phone added"}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <BadgeOutlined sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }} />
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", fontSize: "10px", fontWeight: 600 }}
              >
                ROLE &amp; CATEGORY
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  color: "#032C46",
                  fontWeight: 600,
                }}
              >
                {data?.role} • {data?.category || "N/A"}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <CalendarTodayOutlined
              sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 20 }}
            />
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", fontSize: "10px", fontWeight: 600 }}
              >
                MEMBER SINCE
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  color: "#032C46",
                  fontWeight: 600,
                }}
              >
                {formattedDate}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Primary Subjects */}
        {data?.primarySubjects && data.primarySubjects.length > 0 && (
          <Box sx={{ mt: 1, px: 3, pb: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                color: "#032C46",
                mb: 1,
                fontSize: "12px",
              }}
            >
              Primary Subjects
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {data.primarySubjects.map((subject, idx) => (
                <Chip
                  key={idx}
                  label={subject}
                  size="small"
                  sx={{
                    bgcolor: "rgba(1, 90, 80, 0.08)",
                    color: "#015A50",
                    fontWeight: 600,
                    fontSize: "11px",
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default ProfileCard;
