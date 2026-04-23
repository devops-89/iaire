"use client";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { Autocomplete, Box, Card, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import InstitutionDashboardLayout from "../Index";
import { MEMBER_TYPE } from "@/utils/constant";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

const AddStudentComponent = () => {
  return (
    <InstitutionDashboardLayout>
      <Card sx={{ p: 2, mt: 3 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ mb: 2 }}
        >
          <Breadcrumb
            title="Add Student"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Student Management",
                href: "/dashboard/institution/student-management",
              },
              {
                title: "Add Student",
                href: "/dashboard/institution/student-management/add-student",
              },
            ]}
          />
        </Stack>
        <Grid container>
          <Grid size={{ xs: 12, md: 12 }}>
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Membership Type"
                  fullWidth
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
              options={MEMBER_TYPE}
            />
          </Grid>
        </Grid>
      </Card>
    </InstitutionDashboardLayout>
  );
};

export default AddStudentComponent;
