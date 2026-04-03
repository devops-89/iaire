"use client";
import StudentDashboardLayout from '@/components/layouts/dashboard/student/Index';
import AddStartup from '@/components/layouts/dashboard/student/startup-management/Add-Startup';
import React from 'react'

const AddStartupPage = () => {
  return (
    <StudentDashboardLayout>
      <AddStartup />
    </StudentDashboardLayout>
  )
}

export default AddStartupPage
