"use client";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InstitutionDashboardLayout from "../Index";
import { montserrat } from "@/utils/fonts";
import { useGetInnovationDetails } from "@/hooks/school/useInnovation";
import { useGetTeamDetails } from "@/hooks/school/useTeam";
import { useParams, useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import ProfileCard from "./components/ProfileCard";
import OverviewCard from "./components/OverviewCard";
import TeamInfoCard from "./components/TeamInfoCard";
import DocumentsCard from "./components/DocumentsCard";
import InstitutionDetailsCard from "./components/InstitutionDetailsCard";

const InnovationDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.["innovation-id"] as string;

  const { loading, innovationDetails } = useGetInnovationDetails(Number(id));

  const { loading: teamLoading, teamDetails } = useGetTeamDetails(
    innovationDetails?.teamId ? Number(innovationDetails.teamId) : 0,
  );

  return (
    <InstitutionDashboardLayout>
      <Grid container spacing={4}>
        {/* Left Column - Innovation Profile */}
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
          {innovationDetails && (
            <ProfileCard innovationDetails={innovationDetails} />
          )}
        </Grid>

        {/* Right Column - Statements & Teams */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={4}>
            <Box>
              <Button
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
              </Button>

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
                  Innovation Submission Details
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
            ) : innovationDetails ? (
              <>
                <Grid container spacing={4}>
                  {/* Statements Card */}
                  <Grid size={{ xs: 12 }}>
                    <OverviewCard innovationDetails={innovationDetails} />
                  </Grid>

                  {/* Team Details */}
                  <Grid size={{ xs: 12 }}>
                    <TeamInfoCard
                      teamLoading={teamLoading}
                      teamDetails={teamDetails}
                      currentInnovationId={Number(id)}
                    />
                  </Grid>

                  {/* Submitted Documents Card */}
                  <Grid size={{ xs: 12 }}>
                    <DocumentsCard innovationDetails={innovationDetails} />
                  </Grid>

                  {/* School details */}
                  <Grid size={{ xs: 12 }}>
                    <InstitutionDetailsCard
                      innovationDetails={innovationDetails}
                    />
                  </Grid>
                </Grid>
              </>
            ) : (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No innovation details found.
                </Typography>
              </Box>
            )}
          </Stack>
        </Grid>
      </Grid>
    </InstitutionDashboardLayout>
  );
};

export default InnovationDetails;
