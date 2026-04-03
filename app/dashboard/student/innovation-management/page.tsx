"use client";
import StudentDashboardLayout from '@/components/layouts/dashboard/student/Index';

import InnovationList from '@/components/layouts/dashboard/student/innovation-management/Innovation-List';
import React from 'react'

const InnovationManagementPage = () => {
  return (
    <StudentDashboardLayout>
      <InnovationList />
    </StudentDashboardLayout>
  )
}

export default InnovationManagementPage
