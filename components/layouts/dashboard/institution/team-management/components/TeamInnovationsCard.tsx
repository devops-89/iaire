import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography} from "@mui/material";
import { Lightbulb } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { TEAM_DETAILS_RESPONSE } from "@/utils/type";
import BeamButton from "@/components/widgets/BeamButton";

interface TeamInnovationsCardProps {
  teamDetails: TEAM_DETAILS_RESPONSE;
}

const TeamInnovationsCard = ({ teamDetails }: TeamInnovationsCardProps) => {
  const router = useRouter();

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
          Team Innovations
        </Typography>
        <Divider />

        {!teamDetails.innovations || teamDetails.innovations.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic", mt: 2 }}
          >
            No innovations submitted by this team.
          </Typography>
        ) : (
          <Stack spacing={3} mt={2}>
            {teamDetails.innovations.map((innovation: any) => {
              const formattedDate = innovation.createdAt
                ? new Date(innovation.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "-";
              return (
                <Box
                  key={innovation.id}
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    backgroundColor: "#fcfdfe",
                    border: "1px solid #edf1f4",
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Avatar sx={{ bgcolor: "rgba(248, 93, 0, 0.08)", color: "#1B365D" }}>
                        <Lightbulb />
                      </Avatar>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 700, color: COLORS.PRIMARY_BLUE }}
                        >
                          {innovation.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block", mt: 0.5 }}
                        >
                          Submitted on {formattedDate}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }} display="flex" gap={1}>
                      <Chip
                        label={innovation.status}
                        size="small"
                        sx={{
                          bgcolor:
                            innovation.status === "APPROVED"
                              ? "#e8f5e9"
                              : innovation.status === "PENDING"
                                ? "#fff3e0"
                                : "#ffebee",
                          color:
                            innovation.status === "APPROVED"
                              ? "#2e7d32"
                              : innovation.status === "PENDING"
                                ? "#ef6c00"
                                : "#c62828",
                          fontWeight: 600,
                          fontSize: "11px",
                        }}
                      />
                      {innovation.isDraft && (
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
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }} sx={{ textAlign: { xs: "left", sm: "right" } }}>
                      <BeamButton
                        variant="outlined"
                        size="small"
                        onClick={() =>
                          router.push(
                            `/dashboard/institution/innovation-submission/innovation-details/${innovation.id}`,
                          )
                        }
                        sx={{
                          textTransform: "none",
                          borderColor: COLORS.PRIMARY_NAVY,
                          color: COLORS.PRIMARY_NAVY,
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: COLORS.PRIMARY_NAVY,
                            backgroundColor: "rgba(248, 93, 0, 0.04)",
                          },
                        }}
                      >
                        View Details
                      </BeamButton>
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

export default TeamInnovationsCard;
