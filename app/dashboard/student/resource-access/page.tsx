"use client";
import React from "react";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import ResourceAccess from "@/components/layouts/dashboard/educator/resource-access/ResourceAccess";
import { USER_ROLES } from "@/utils/enum";

const StudentResourceAccess = () => {
  return (
    <StudentDashboardLayout>
      <ResourceAccess role={USER_ROLES.STUDENT} />
    </StudentDashboardLayout>
  );
};

export default StudentResourceAccess;
