"use client";
import React from "react";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import MembershipManagement from "@/components/layouts/dashboard/student/membership-management/Index";

const MembershipManagementPage = () => {
  return (
    <StudentDashboardLayout>
      <MembershipManagement />
    </StudentDashboardLayout>
  );
};

export default MembershipManagementPage;
