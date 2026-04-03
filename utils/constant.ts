import { USER_STATUS } from "./enum";

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
export const TEACHER_SIDEBAR_DATA = [
  {
    label: "Dashboard",
    url: "/dashboard/teacher",
  },
  {
    label: "Student Management",
    url: "/dashboard/teacher/student-management",
  },
  {
    label: "Innovation Approval",
    url: "/dashboard/teacher/innovation-approval",
  },
  {
    label: "Research Submission",
    url: "/dashboard/teacher/research-submission",
  },
  {
    label: "Resource Access",
    url: "/dashboard/teacher/resource-access",
  },
];

export const SCHOOL_SIDEBAR_DATA = [
  {
    label: "Dashboard",
    url: "/dashboard/school",
  },
  // {
  //   label: "Membership Management",
  //   url: "/dashboard/school/membership-management",
  //   subItems: [
  //     {
  //       label: "Pay Dues",
  //       url: "/dashboard/school/membership-management/pay-dues",
  //     },
  //     {
  //       label: "Apply for Membership Advancement",
  //       url: "/dashboard/school/membership-management/advancement",
  //     },
  //   ],
  // },
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
  // {
  //   label: "Voting Management",
  //   url: "/dashboard/school/voting-management",
  // },
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

export const TEACHER_DATA = [
  {
    id: "T-001",
    name: "Dr. Rajesh Kumar",
    email: "rajesh@edu.in",
    phone: "9876543210",
    subject: "Mathematics",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-002",
    name: "Priya Sharma",
    email: "priya@edu.in",
    phone: "9876543211",
    subject: "Physics",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-003",
    name: "Ankit Verma",
    email: "ankit@edu.in",
    phone: "9876543212",
    subject: "Chemistry",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-004",
    name: "Sunita Rao",
    email: "sunita@edu.in",
    phone: "9876543213",
    subject: "Biology",
    status: USER_STATUS.INACTIVE,
  },
  {
    id: "T-005",
    name: "Vikram Singh",
    email: "vikram@edu.in",
    phone: "9876543214",
    subject: "Computer Science",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-006",
    name: "Meera Iyer",
    email: "meera@edu.in",
    phone: "9876543215",
    subject: "History",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-007",
    name: "Rohan Das",
    email: "rohan@edu.in",
    phone: "9876543216",
    subject: "Geography",
    status: USER_STATUS.PENDING,
  },
  {
    id: "T-008",
    name: "Sneha Gupta",
    email: "sneha@edu.in",
    phone: "9876543217",
    subject: "English",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-009",
    name: "Amit Patel",
    email: "amit@edu.in",
    phone: "9876543218",
    subject: "Economics",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-010",
    name: "Kavita Reddy",
    email: "kavita@edu.in",
    phone: "9876543219",
    subject: "Political Science",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "T-011",
    name: "Sanjay Joshi",
    email: "sanjay@edu.in",
    phone: "9876543220",
    subject: "Physical Education",
    status: USER_STATUS.ACTIVE,
  },
];

export const TEACHER_HEADER = [
  "Id",
  "Full Name",
  "Email",
  "Phone",
  "Subject",
  "Status",
  "Actions",
];

export const INNOVATION_HEADER = [
  "Id",
  "Title",
  "Category",
  "Status",
  "Actions",
];

export const INNOVATION_DATA = [
  {
    id: "I-001",
    title: "Innovation 1",
    category: "Category 1",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-002",
    title: "Innovation 2",
    category: "Category 2",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-003",
    title: "Innovation 3",
    category: "Category 3",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-004",
    title: "Innovation 4",
    category: "Category 4",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-005",
    title: "Innovation 5",
    category: "Category 5",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-006",
    title: "Innovation 6",
    category: "Category 6",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-007",
    title: "Innovation 7",
    category: "Category 7",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-008",
    title: "Innovation 8",
    category: "Category 8",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-009",
    title: "Innovation 9",
    category: "Category 9",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "I-010",
    title: "Innovation 10",
    category: "Category 10",
    status: USER_STATUS.ACTIVE,
  },
];

export const RESEARCH_HEADER = [
  "Id",
  "Research Title",
  "Topic",
  "Submitted Date",
  "Status",
  "Actions",
];

export const RESEARCH_DATA = [
  {
    id: "R-001",
    title: "Impact of AI on Primary Education",
    topic: "AI in Education",
    date: "Sep 20, 2023",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "R-002",
    title: "Renewable Energy in School Curriculums",
    topic: "Sustainability",
    date: "Jan 10, 2024",
    status: USER_STATUS.PENDING,
  },
  {
    id: "R-003",
    title: "Mental Health Strategies for Students",
    topic: "Student Well-being",
    date: "Feb 15, 2024",
    status: USER_STATUS.ACTIVE,
  },
  {
    id: "R-004",
    title: "STEM Education in Rural Areas",
    topic: "STEM",
    date: "Mar 05, 2024",
    status: USER_STATUS.INACTIVE,
  },
  {
    id: "R-005",
    title: "Digital Literacy: A New Core Skill",
    topic: "Digital Education",
    date: "Apr 12, 2024",
    status: USER_STATUS.ACTIVE,
  },
];

export const BOARDS = ["CBSE", "ICSE", "State Board", "IB", "IGCSE"];

export const SCHOOLS = [
  "St. Xavier's International",
  "Greenwood High",
  "The Delhi Public School",
  "Oakridge International",
  "Global Indian School",
];

