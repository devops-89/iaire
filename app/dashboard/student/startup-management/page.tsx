"use client";
import StudentDashboardLayout from '@/components/layouts/dashboard/student/Index';
import StartupList from '@/components/layouts/dashboard/student/startup-management/Startup-List';
import React from 'react'

const StartupManagementPage = () => {
  return (
    <StudentDashboardLayout>
      <StartupList />
    </StudentDashboardLayout>
  )
}

export default StartupManagementPage
