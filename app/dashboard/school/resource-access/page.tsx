"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const SchoolResourceAccess = () => {
  return (
    <SchoolDashboardLayout>
      <ResourceAccess role="Institutional" />
    </SchoolDashboardLayout>
  );
};

export default SchoolResourceAccess;
