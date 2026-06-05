import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { TEAM_DETAILS_RESPONSE } from "@/utils/type";

interface TeamMembersCardProps {
  teamDetails: TEAM_DETAILS_RESPONSE;
}

const TeamMembersCard = ({ teamDetails }: TeamMembersCardProps) => {
  const formatPhone = (phone: string | null | undefined) => {
    if (!phone) return "-";
    if (phone.startsWith("+")) return phone;
    return `+${phone}`;
  };

  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.split(" ");
    return parts
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "12px" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          className={montserrat.className}
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            mb: 3,
          }}
        >
          Team Members (Students)
        </Typography>
        <Divider />

        {!teamDetails.members || teamDetails.members.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic", mt: 2 }}
          >
            No members added to this team.
          </Typography>
        ) : (
          <Stack spacing={3} mt={2}>
            {teamDetails.members.map((member: any) => {
              const s = member.student;
              return (
                <Box
                  key={member.id}
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    backgroundColor: "#fcfdfe",
                    border: "1px solid #edf1f4",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      size={{ xs: 12, sm: 4 }}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Avatar sx={{ bgcolor: COLORS.PRIMARY_NAVY }}>
                        {getInitials(
                          s?.fullName || `${s?.firstName || ""} ${s?.lastName || ""}`,
                        )}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {s?.fullName || `${s?.firstName || ""} ${s?.lastName || ""}`}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block" }}
                        >
                          Grade {s?.grade || "-"} • {s?.gender?.toLowerCase() || "-"}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mb: 0.5 }}
                      >
                        CONTACT INFORMATION
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          wordBreak: "break-all",
                        }}
                      >
                        {s?.email || "-"}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {formatPhone(s?.phone)}
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mb: 0.5 }}
                      >
                        PARENTS / GUARDIANS
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Father: {s?.fatherName || "-"}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Mother: {s?.motherName || "-"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMembersCard;
