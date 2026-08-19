"use client";
import { Autocomplete, Box, Card, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import InstitutionDashboardLayout from "../Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { COLORS, PLAN_STATUS, USER_ROLES } from "@/utils/enum";
import { aloeveraDisplay_medium, roboto } from "@/utils/fonts";
import { Add, Lock } from "@mui/icons-material";
import { CATEGORY_TYPES, TEAM_LIST_HEADER_DATA } from "@/utils/constant";
import TeamListTable from "./components/Team-List-Table";
import Link from "next/link";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import AddTeams from "@/components/modals/school/CreateTeam";
import { useGetTeam } from "@/hooks/school/useTeam";
import Plans from "@/components/modals/common/Plans";
import BeamButton from "@/components/widgets/BeamButton";
import { useRouter } from "next/navigation";

const TeamList = () => {
  const { showModal } = useModal();
  const { institutionData, educatorData } = useSignup();
  const isMember =
    (institutionData?.payments || []).length > 0 &&
    (institutionData?.payments || []).some(
      (val) => val?.status === PLAN_STATUS.SUCCESS,
    );

  const handleAddTeam = () => {
    showModal(<AddTeams />);
  };

  const { fetchData, loading, teamData } = useGetTeam();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <InstitutionDashboardLayout>
        <Card
          sx={{
            p: 2,
            boxShadow: "0px 0px 2px 2px #0000000D",
            borderRadius: "10px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Breadcrumb
              title="Team Management"
              data={[
                {
                  title: "Dashboard",
                  href: "/dashboard/institution",
                },
                {
                  title: "Team Management",
                  href: "/dashboard/institution/team-management",
                },
              ]}
            />

            {/* {isMember ? (
              <BeamButton
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  borderRadius: "10px",
                  padding: "10px 20px",
                }}
                endIcon={<Add />}
                onClick={handleAddTeam}
              >
                Add Team
              </BeamButton>
            ) : (
              <BeamButton
                sx={{
                  backgroundColor: "#7e7e7e",
                  color: COLORS.WHITE,
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  borderRadius: "10px",
                  padding: "10px 20px",
                }}
                endIcon={<Lock />}
                onClick={() => showModal(<Plans role={USER_ROLES.SCHOOL} />)}
              >
                Unlock Feature
              </BeamButton>
            )} */}
            {(institutionData?.role === USER_ROLES.SCHOOL_ADMIN ||
              educatorData?.role === USER_ROLES.SCHOOL_ADMIN) && (
              <BeamButton
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  borderRadius: "10px",
                  padding: "10px 20px",
                }}
                endIcon={<Add />}
                onClick={handleAddTeam}
              >
                Add Team
              </BeamButton>
            )}
          </Stack>

          <Grid container sx={{ mt: 2 }} spacing={3}>
            <Grid size={3}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField {...params} label="Team Type" fullWidth />
                )}
                options={CATEGORY_TYPES}
              />
            </Grid>
            <Grid size={9}>
              <TextField label="Search" fullWidth />
            </Grid>
          </Grid>
          <TeamListTable
            tableHeader={TEAM_LIST_HEADER_DATA}
            tableData={teamData || []}
            loading={loading}
          />
        </Card>
      </InstitutionDashboardLayout>
    </Box>
  );
};

export default TeamList;
