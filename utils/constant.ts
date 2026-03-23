export const STUDENT_SIDEBAR_DATA = [
  {
    label: "Dashboard",
    url: "/dashboard/student",
  },
  {
    label: "Innovation Management",
    url: "/dashboard/student/innovation-management",
  },
  {
    label: "Startup Management",
    url: "/dashboard/student/startup-management",
  },
  {
    label: "Resource Access",
    url: "/dashboard/student/resource-access",
  },
  {
    label: "Membership Management",
    url: "/dashboard/student/membership-management",
  },
];

export const SCHOOL_SIDEBAR_DATA = [
  {
    label: "Dashboard",
    url: "/dashboard/school",
  },
  {
    label: "Membership Management",
    url: "/dashboard/school/membership-management",
    subItems: [
      {
        label: "Pay Dues",
        url: "/dashboard/school/membership-management/pay-dues",
      },
      {
        label: "Apply for Membership Advancement",
        url: "/dashboard/school/membership-management/advancement",
      },
    ],
  },
  // {
  //   label: "School Profile Management",
  //   url: "/dashboard/school/profile",
  // },
  {
    label: "Teacher Management",
    url: "/dashboard/school/teacher-management",
  },
  {
    label: "Innovation Submission",
    url: "/dashboard/school/innovation-submission",
  },
  {
    label: "Research Submission",
    url: "/dashboard/school/research-submission",
  },
  {
    label: "Student Management",
    url: "/dashboard/school/student-management",
  },
  {
    label: "Startup Submission Management",
    url: "/dashboard/school/startup-management",
  },
  {
    label: "Voting Management",
    url: "/dashboard/school/voting-management",
  },
  {
    label: "Resource Access",
    url: "/dashboard/school/resource-access",
    subItems: [
      {
        label: "Playbooks",
        url: "/dashboard/school/resource-access/playbooks",
      },
      { label: "Modules", url: "/dashboard/school/resource-access/modules" },
      {
        label: "Templates",
        url: "/dashboard/school/resource-access/templates",
      },
    ],
  },
];
