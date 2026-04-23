"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import React, { useEffect, useState } from "react";
import { useSignup } from "@/store/useSignup";

import { Grid, Box } from "@mui/material";
import { MEMBERSHIP_LEVEL } from "@/utils/type";
import InstitutionDashboards from "@/components/layouts/dashboard/institution/Dashboard";

const InstitutionDashboard = () => {
  const { institutionData: institutionInfo } = useSignup();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <InstitutionDashboardLayout>
      <Box>
        <InstitutionDashboards />
      </Box>
    </InstitutionDashboardLayout>
  );
};

export default InstitutionDashboard;
