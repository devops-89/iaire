import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Lightbulb } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { TEAM_DETAILS_RESPONSE } from "@/utils/type";

interface TeamInfoCardProps {
  teamLoading: boolean;
  teamDetails: TEAM_DETAILS_RESPONSE | null;
  currentInnovationId: number;
}

const TeamInfoCard = ({ teamLoading, teamDetails, currentInnovationId }: TeamInfoCardProps) => {
  const router = useRouter();

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
            mb: 2,
          }}
        >
          Team Information
        </Typography>
        <Divider />

        {teamLoading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress size={30} />
          </Box>
        ) : teamDetails ? (
          <Stack spacing={3} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block" }}
                >
                  TEAM NAME
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: COLORS.PRIMARY_BLUE,
                  }}
                >
                  {teamDetails.title}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block" }}
                >
                  TEAM CODE
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600 }}
                >
                  {teamDetails.teamCode}
                </Typography>
              </Grid>
            </Grid>

            <Divider />

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: COLORS.PRIMARY_BLUE,
              }}
            >
              Mentor:{" "}
              {teamDetails.mentor?.fullName ||
                `${teamDetails.mentor?.firstName || ""} ${teamDetails.mentor?.lastName || ""}`}
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: COLORS.PRIMARY_BLUE,
              }}
            >
              Student Team Members:
            </Typography>
            <List disablePadding>
              {teamDetails.members?.map((member: any) => (
                <ListItem
                  key={member.id}
                  disableGutters
                  sx={{
                    py: 1,
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Avatar
                      sx={{
                        bgcolor: COLORS.PRIMARY_NAVY,
                        width: 32,
                        height: 32,
                        fontSize: 13,
                      }}
                    >
                      {getInitials(member.student?.fullName || "")}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                        {member.student?.fullName || "-"}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ fontSize: "11px", color: "text.secondary" }}>
                        Grade {member.student?.grade || "-"} • {member.student?.email || "-"}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: COLORS.PRIMARY_BLUE,
                mb: 1,
              }}
            >
              Team Innovations:
            </Typography>
            {!teamDetails.innovations || teamDetails.innovations.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                No innovations submitted by this team.
              </Typography>
            ) : (
              <List disablePadding>
                {teamDetails.innovations.map((item: any) => {
                  const isCurrent = item.id === currentInnovationId;
                  return (
                    <ListItem
                      key={item.id}
                      disableGutters
                      sx={{
                        py: 1,
                        borderBottom: "1px solid #f0f0f0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Lightbulb
                          sx={{
                            color: isCurrent ? "#F85D00" : "rgba(0,0,0,0.3)",
                            fontSize: 20,
                          }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: isCurrent ? "#F85D00" : "inherit",
                            }}
                          >
                            {item.title} {isCurrent && "(Current)"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "text.secondary",
                            }}
                          >
                            Status: {item.status}
                          </Typography>
                        </Box>
                      </Stack>

                      {!isCurrent && (
                        <Button
                          size="small"
                          onClick={() =>
                            router.push(
                              `/dashboard/institution/innovation-submission/innovation-details/${item.id}`,
                            )
                          }
                          sx={{
                            fontSize: "11px",
                            textTransform: "none",
                            color: COLORS.PRIMARY_NAVY,
                            fontWeight: 600,
                          }}
                        >
                          View
                        </Button>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Stack>
        ) : (
          <Box sx={{ py: 2, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              No team details found.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamInfoCard;
