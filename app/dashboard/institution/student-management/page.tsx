"use client";
import React from "react";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Add,
  MoreVert,
  AccountCircle,
  Star,
  Edit,
  Delete,
  Handyman,
  School,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import StudentList from "@/components/layouts/dashboard/institution/student-management/Student-list";

const students = [
  {
    id: "S-101",
    name: "Alex Rivera",
    grade: "12th",
    mentor: "Dr. Sarah Johnson",
    status: "Active",
  },
  {
    id: "S-102",
    name: "Jordan Smith",
    grade: "11th",
    mentor: "Prof. Michael Chen",
    status: "Nominated",
  },
  {
    id: "S-103",
    name: "Casey Lee",
    grade: "12th",
    mentor: "Not Assigned",
    status: "Pending",
  },
];

const StudentManagementPage = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, item: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  return (
    <InstitutionDashboardLayout>
      <Box>
        <StudentList />
      </Box>
    </InstitutionDashboardLayout>
  );
};

export default StudentManagementPage;
