"use client";
import React from "react";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const EducatorResourceAccess = () => {
  return (
    <EducatorDashboardLayout>
      <ResourceAccess role="Educator" />
    </EducatorDashboardLayout>
  );
};

export default EducatorResourceAccess;
