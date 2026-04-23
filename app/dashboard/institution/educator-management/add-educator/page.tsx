"use client";
import AddEducatorcomponent from "@/components/layouts/dashboard/institution/educator-management/Add-Educator";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import { Box } from "@mui/material";
import React from "react";

const AddEducator = () => {
  return (
    <Box>
      <InstitutionDashboardLayout>
        <AddEducatorcomponent />
      </InstitutionDashboardLayout>
    </Box>
  );
};

export default AddEducator;
