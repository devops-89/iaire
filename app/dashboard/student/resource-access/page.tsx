"use client";
import React from "react";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const StudentResourceAccess = () => {
  return (
    <StudentDashboardLayout>
      <ResourceAccess role="Student" />
    </StudentDashboardLayout>
  );
};

export default StudentResourceAccess;
