"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import {
  Box,
  Typography,
  Grid,
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
  Divider,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Add, MoreVert, Edit, Delete, School, AssignmentInd, HighlightOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";

const teachers = [
  { id: "T-001", name: "Dr. Sarah Johnson", email: "sarah.j@school.com", department: "Science", status: "Active" },
  { id: "T-002", name: "Prof. Michael Chen", email: "m.chen@school.com", department: "Mathematics", status: "Active" },
  { id: "T-003", name: "Emma Wilson", email: "e.wilson@school.com", department: "Arts", status: "Pending" },
  { id: "T-004", name: "David Miller", email: "d.miller@school.com", department: "Technology", status: "Active" },
];

const TeacherManagementPage = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTeacher, setSelectedTeacher] = React.useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, teacher: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeacher(teacher);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTeacher(null);
  };

  const handleAction = (action: string) => {
    console.log(`${action} for ${selectedTeacher?.name}`);
    alert(`${action} initiated for ${selectedTeacher?.name}`);
    handleClose();
  };

  return (
    <SchoolDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                color: COLORS.PRIMARY_NAVY,
                mb: 1,
              }}
            >
              Teacher Management
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Manage your faculty members, monitor their status, and add new educators.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => router.push("/dashboard/school/teacher-management/add")}
            sx={{
              bgcolor: COLORS.ACCENT_TAN,
              color: COLORS.BLACK,
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 700,
              textTransform: "none",
              fontFamily: montserrat.style.fontFamily,
              "&:hover": { bgcolor: "#B88A40" },
            }}
          >
            Add Teacher
          </Button>
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
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Teacher ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow key={teacher.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 500 }}>{teacher.id}</TableCell>
                    <TableCell>
                      <Typography sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{teacher.name}</Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>{teacher.email}</Typography>
                    </TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{teacher.department}</TableCell>
                    <TableCell>
                      <Chip
                        label={teacher.status}
                        size="small"
                        sx={{
                          bgcolor: teacher.status === "Active" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)",
                          color: teacher.status === "Active" ? "#10B981" : "#F59E0B",
                          fontWeight: 700,
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: "#EF4444" }}>
                        <Delete fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        onClick={(e) => handleClick(e, teacher)}
                      >
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
          PaperProps={{
            sx: {
              borderRadius: "12px",
              minWidth: 200,
              mt: 1,
              "& .MuiMenuItem-root": {
                py: 1.5,
                fontFamily: montserrat.style.fontFamily,
                fontSize: "14px",
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => handleAction("Nominate for Training")}>
            <ListItemIcon>
              <School fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>Nominate for Training</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleAction("Issue NOC")}>
            <ListItemIcon>
              <AssignmentInd fontSize="small" sx={{ color: "#10B981" }} />
            </ListItemIcon>
            <ListItemText>Issue NOC</ListItemText>
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem onClick={() => handleAction("Cancel Certification")} sx={{ color: "#EF4444" }}>
            <ListItemIcon>
              <HighlightOff fontSize="small" sx={{ color: "#EF4444" }} />
            </ListItemIcon>
            <ListItemText>Cancel Certification</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default TeacherManagementPage;
