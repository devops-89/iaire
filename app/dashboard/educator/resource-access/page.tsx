"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import ResourceAccess from "@/components/layouts/dashboard/educator/resource-access/ResourceAccess";
import { USER_ROLES } from "@/utils/enum";
import React from "react";

const ResourceAccessPage = () => {
  return (
    <EducatorDashboardLayout>
      <ResourceAccess role={USER_ROLES.TEACHER} />
    </EducatorDashboardLayout>
  );
};

export default ResourceAccessPage;
