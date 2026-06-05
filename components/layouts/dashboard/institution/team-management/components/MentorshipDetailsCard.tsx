import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Email, Phone, Person, Work, Stars } from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { TEAM_DETAILS_RESPONSE } from "@/utils/type";

interface MentorshipDetailsCardProps {
  teamDetails: TEAM_DETAILS_RESPONSE;
}

const MentorshipDetailsCard = ({ teamDetails }: MentorshipDetailsCardProps) => {
  const formatPhone = (phone: string | null | undefined) => {
    if (!phone) return "-";
    if (phone.startsWith("+")) return phone;
    return `+${phone}`;
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
          Mentorship Details
        </Typography>
        <Divider />
        <Grid container spacing={4} sx={{ mt: 1 }}>
          {/* Mentor Details */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Stars sx={{ color: "#015A50", fontSize: 20 }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: COLORS.PRIMARY_BLUE,
                  }}
                >
                  Primary Mentor
                </Typography>
              </Stack>
              <List disablePadding>
                <ListItem disableGutters sx={{ py: 1, borderBottom: "1px solid #f0f0f0" }}>
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Person sx={{ color: "#757575", fontSize: 20 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontSize: "11px", color: "#757575" }}>NAME</Typography>}
                    secondary={
                      <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                        {teamDetails.mentor?.fullName ||
                          `${teamDetails.mentor?.firstName || ""} ${teamDetails.mentor?.lastName || ""}`}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1, borderBottom: "1px solid #f0f0f0" }}>
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Email sx={{ color: "#757575", fontSize: 20 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontSize: "11px", color: "#757575" }}>EMAIL</Typography>}
                    secondary={
                      <Typography sx={{ fontSize: "13px", fontWeight: 600, wordBreak: "break-all" }}>
                        {teamDetails.mentor?.email || "-"}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1, borderBottom: "1px solid #f0f0f0" }}>
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Phone sx={{ color: "#757575", fontSize: 20 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontSize: "11px", color: "#757575" }}>PHONE</Typography>}
                    secondary={
                      <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                        {formatPhone(teamDetails.mentor?.phone)}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Work sx={{ color: "#757575", fontSize: 20 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: "11px", color: "#757575" }}>
                        EXPERIENCE &amp; SUBJECTS
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                        {teamDetails.mentor?.experienceYears
                          ? `${teamDetails.mentor.experienceYears} Years`
                          : "-"}{" "}
                        • {teamDetails.mentor?.primarySubjects?.join(", ") || "N/A"}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Stack>
          </Grid>

          {/* Assistant Mentor Details */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person sx={{ color: "#475569", fontSize: 20 }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: COLORS.PRIMARY_BLUE,
                  }}
                >
                  Assistant Mentor
                </Typography>
              </Stack>
              {teamDetails.assistantMentor ? (
                <List disablePadding>
                  <ListItem disableGutters sx={{ py: 1, borderBottom: "1px solid #f0f0f0" }}>
                    <ListItemAvatar sx={{ minWidth: 40 }}>
                      <Person sx={{ color: "#757575", fontSize: 20 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography sx={{ fontSize: "11px", color: "#757575" }}>NAME</Typography>}
                      secondary={
                        <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                          {teamDetails.assistantMentor.fullName ||
                            `${teamDetails.assistantMentor.firstName || ""} ${teamDetails.assistantMentor.lastName || ""}`}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 1, borderBottom: "1px solid #f0f0f0" }}>
                    <ListItemAvatar sx={{ minWidth: 40 }}>
                      <Email sx={{ color: "#757575", fontSize: 20 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography sx={{ fontSize: "11px", color: "#757575" }}>EMAIL</Typography>}
                      secondary={
                        <Typography sx={{ fontSize: "13px", fontWeight: 600, wordBreak: "break-all" }}>
                          {teamDetails.assistantMentor.email || "-"}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 1, borderBottom: "1px solid #f0f0f0" }}>
                    <ListItemAvatar sx={{ minWidth: 40 }}>
                      <Phone sx={{ color: "#757575", fontSize: 20 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography sx={{ fontSize: "11px", color: "#757575" }}>PHONE</Typography>}
                      secondary={
                        <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                          {formatPhone(teamDetails.assistantMentor.phone)}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              ) : (
                <Box
                  sx={{
                    py: 4,
                    px: 2,
                    textAlign: "center",
                    bgcolor: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px dashed #e2e8f0",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    No assistant mentor assigned.
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MentorshipDetailsCard;
