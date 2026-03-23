"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import { Box } from "@mui/material";
import PayDuesHeader from "@/components/dashboard/school/membership-management/PayDuesHeader";
import InvoiceList from "@/components/dashboard/school/membership-management/InvoiceList";

const PayDuesPage = () => {
  return (
    <SchoolDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <PayDuesHeader />
        <InvoiceList />
      </Box>
    </SchoolDashboardLayout>
  );
};

export default PayDuesPage;
