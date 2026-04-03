"use client";
import React from "react";
import TeacherDashboardLayout from "@/components/layouts/dashboard/teacher/Index";
import {
  Box,
  Typography,
  Paper,
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
  MoreVert,
  AccountCircle,
  Edit,
  Handyman,
  School,
} from "@mui/icons-material";

const students = [
  {
    id: "S-101",
    name: "Alex Rivera",
    grade: "12th",
    lastInnovation: "Smart Water Recycling",
    status: "Active",
  },
  {
    id: "S-102",
    name: "Jordan Smith",
    grade: "11th",
    lastInnovation: "EduPals AI",
    status: "Pending Review",
  },
  {
    id: "S-103",
    name: "Casey Lee",
    grade: "10th",
    lastInnovation: "None",
    status: "Active",
  },
];

const TeacherStudentManagement = () => {
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
    <TeacherDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              color: COLORS.PRIMARY_NAVY,
              mb: 1,
            }}
          >
            My Students
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              color: "rgba(0,0,0,0.6)",
            }}
          >
            Monitor student progress, review submissions, and provide mentorship.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            borderRadius: "24px",
            border: "1px solid #f0f0f0",
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "rgba(11, 23, 39, 0.02)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Student ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Student Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Grade</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Last Innovation</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 500 }}>{item.id}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{item.name}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.grade}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.lastInnovation}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          bgcolor: item.status === "Active" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)",
                          color: item.status === "Active" ? "#10B981" : "#F59E0B",
                          fontWeight: 700,
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={(e) => handleClick(e, item)}>
                        <MoreVert fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={2}
          PaperProps={{ sx: { borderRadius: "12px", minWidth: 200, mt: 1 } }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon><AccountCircle fontSize="small" /></ListItemIcon>
            <ListItemText>View Student Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><School fontSize="small" /></ListItemIcon>
            <ListItemText>Provide Feedback</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Handyman fontSize="small" /></ListItemIcon>
            <ListItemText>Assign Task</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Edit fontSize="small" /></ListItemIcon>
            <ListItemText>Edit Records</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </TeacherDashboardLayout>
  );
};

export default TeacherStudentManagement;
