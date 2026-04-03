"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
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
    <SchoolDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
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
              Student Management
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Manage student mentors, recommend student leaders, and monitor
              academic progress.
            </Typography>
          </Box>
          {/* <Button
            variant="contained"
            startIcon={<Star />}
            onClick={() => router.push("/dashboard/school/student-management/recommend")}
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
            Recommend Leader
          </Button> */}
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
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Student ID
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Student Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Grade
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Mentor
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontWeight: 500,
                      }}
                    >
                      {item.id}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                      {item.grade}
                    </TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                      {item.mentor}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          bgcolor:
                            item.status === "Active"
                              ? "rgba(16, 185, 129, 0.1)"
                              : item.status === "Nominated"
                                ? "rgba(245, 158, 11, 0.1)"
                                : "rgba(107, 114, 128, 0.1)",
                          color:
                            item.status === "Active"
                              ? "#10B981"
                              : item.status === "Nominated"
                                ? "#F59E0B"
                                : "#6B7280",
                          fontWeight: 700,
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={(e) => handleClick(e, item)}
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
          PaperProps={{ sx: { borderRadius: "12px", minWidth: 200, mt: 1 } }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            <ListItemText>View Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Handyman fontSize="small" />
            </ListItemIcon>
            <ListItemText>Assign Mentor</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <School fontSize="small" />
            </ListItemIcon>
            <ListItemText>Submit Recommendation</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Edit fontSize="small" />
            </ListItemIcon>
            <ListItemText>Update Details</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ color: "#EF4444" }}>
            <ListItemIcon>
              <Delete fontSize="small" sx={{ color: "#EF4444" }} />
            </ListItemIcon>
            <ListItemText>Remove Student</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default StudentManagementPage;
