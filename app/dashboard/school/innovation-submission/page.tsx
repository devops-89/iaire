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
  Timeline, 
  Description, 
  CheckCircle, 
  Edit, 
  Delete 
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const innovations = [
  { id: "PAT-001", title: "Solar Efficient Water Purifier", category: "Energy", date: "Oct 12, 2023", status: "Published" },
  { id: "PAT-002", title: "AI-Based Attendance System", category: "Technology", date: "Jan 15, 2024", status: "In Review" },
  { id: "PAT-003", title: "Eco-Friendly Packing Material", category: "Environment", date: "Feb 02, 2024", status: "Draft" },
];

const InnovationSubmissionPage = () => {
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
              Innovation Submissions
            </Typography>
            <Typography sx={{ fontFamily: montserrat.style.fontFamily, color: "rgba(0,0,0,0.6)" }}>
              Manage and track your institution's innovative projects and patents.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => router.push("/dashboard/school/innovation-submission/submit-patent")}
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
            Submit Patent
          </Button>
        </Box>

        <Paper elevation={0} sx={{ borderRadius: "24px", border: "1px solid #f0f0f0", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "rgba(11, 23, 39, 0.02)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Patent ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Project Title</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Date Submitted</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {innovations.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 500 }}>{item.id}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{item.title}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.category}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          bgcolor: item.status === "Published" ? "rgba(16, 185, 129, 0.1)" : item.status === "In Review" ? "rgba(245, 158, 11, 0.1)" : "rgba(107, 114, 128, 0.1)",
                          color: item.status === "Published" ? "#10B981" : item.status === "In Review" ? "#F59E0B" : "#6B7280",
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
          PaperProps={{ sx: { borderRadius: "12px", minWidth: 180, mt: 1 } }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Timeline fontSize="small" /></ListItemIcon>
            <ListItemText>Track Status</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Description fontSize="small" /></ListItemIcon>
            <ListItemText>View Details</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Edit fontSize="small" /></ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ color: "#EF4444" }}>
            <ListItemIcon><Delete fontSize="small" sx={{ color: "#EF4444" }} /></ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default InnovationSubmissionPage;
