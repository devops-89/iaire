"use client";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography} from "@mui/material";
import React from "react";
import InstitutionDashboardLayout from "../Index";
import { montserrat } from "@/utils/fonts";
import { useGetTeamDetails } from "@/hooks/school/useTeam";
import { useParams, useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import ProfileCard from "./components/Profile-Card";
import MentorshipDetailsCard from "./components/MentorshipDetailsCard";
import TeamMembersCard from "./components/TeamMembersCard";
import TeamInnovationsCard from "./components/TeamInnovationsCard";
import InstitutionCard from "./components/InstitutionCard";
import BeamButton from "@/components/widgets/BeamButton";

const TeamDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.slug as string;

  const { loading, teamDetails } = useGetTeamDetails(Number(id));

  return (
    <InstitutionDashboardLayout>
      <Grid container spacing={4}>
        {/* Left Sticky Column */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            position: { xs: "static", md: "sticky" },
            top: { xs: "auto", md: "140px" },
            alignSelf: "flex-start",
            maxHeight: { xs: "none", md: "calc(100vh - 150px)" },
            overflowY: { xs: "visible", md: "auto" },
            scrollbarWidth: "none",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {teamDetails && <ProfileCard data={teamDetails} />}
        </Grid>

        {/* Right Column */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={4}>
            <Box>
              <BeamButton
                startIcon={<ArrowBack />}
                onClick={() => router.back()}
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Back
              </BeamButton>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h4"
                  className={montserrat.className}
                  sx={{ fontWeight: 700 }}
                >
                  Team Details
                </Typography>
              </Stack>
            </Box>

            <Divider sx={{ my: 1 }} />

            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight={300}
              >
                <CircularProgress />
              </Box>
            ) : teamDetails ? (
              <>
                <Grid container spacing={4}>
                  {/* Mentors Card */}
                  <Grid size={{ xs: 12 }}>
                    <MentorshipDetailsCard teamDetails={teamDetails} />
                  </Grid>

                  {/* Team Members List */}
                  <Grid size={{ xs: 12 }}>
                    <TeamMembersCard teamDetails={teamDetails} />
                  </Grid>

                  {/* Innovations Card */}
                  <Grid size={{ xs: 12 }}>
                    <TeamInnovationsCard teamDetails={teamDetails} />
                  </Grid>

                  {/* School & Board Details */}
                  <Grid size={{ xs: 12 }}>
                    <InstitutionCard teamDetails={teamDetails} />
                  </Grid>
                </Grid>
              </>
            ) : (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No team details found.
                </Typography>
              </Box>
            )}
          </Stack>
        </Grid>
      </Grid>
    </InstitutionDashboardLayout>
  );
};

export default TeamDetails;
