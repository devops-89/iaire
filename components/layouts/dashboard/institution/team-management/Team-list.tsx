"use client";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import InstitutionDashboardLayout from "../Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium, roboto } from "@/utils/fonts";
import { Add } from "@mui/icons-material";
import {
  CATEGORY_TYPES,
  TEAM_DATA_TABLE_DATA,
  TEAM_LIST_HEADER_DATA,
} from "@/utils/constant";
import TeamListTable from "./components/Team-List-Table";
import Link from "next/link";
import { useModal } from "@/store/useModal";
import AddTeams from "@/components/modals/school/CreateTeam";
import { useGetTeam } from "@/hooks/school/useTeam";

const TeamList = () => {
  const { showModal } = useModal();

  const handleAddTeam = () => {
    showModal(<AddTeams />);
  };

  const { fetchData, loading, teamData } = useGetTeam();

  useEffect(() => {
    fetchData();
  }, []);

  console.log("first", teamData);

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

            <Button
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
            </Button>
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
            tableData={teamData?.data || []}
          />
        </Card>
      </InstitutionDashboardLayout>
    </Box>
  );
};

export default TeamList;
