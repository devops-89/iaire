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
  MenuBook, 
  RemoveRedEye, 
  Edit, 
  Delete,
  CloudUpload
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const researches = [
  { id: "RES-442", title: "Impact of AI on Primary Education", journal: "Global Edu Journal", date: "Sep 20, 2023", status: "Published" },
  { id: "RES-501", title: "Renewable Energy in School Curriculums", journal: "Sustainability Weekly", date: "Jan 10, 2024", status: "Under Review" },
  { id: "RES-512", title: "Mental Health Strategies for Students", journal: "Mental Health Today", date: "Feb 15, 2024", status: "Draft" },
];

const ResearchSubmissionPage = () => {
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
              Research Submissions
            </Typography>
            <Typography sx={{ fontFamily: montserrat.style.fontFamily, color: "rgba(0,0,0,0.6)" }}>
              Oversee and submit research publications from your faculty and students.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<CloudUpload />}
            onClick={() => router.push("/dashboard/school/research-submission/submit")}
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
            Submit Research
          </Button>
        </Box>

        <Paper elevation={0} sx={{ borderRadius: "24px", border: "1px solid #f0f0f0", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "rgba(11, 23, 39, 0.02)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Research ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Publication Title</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Journal</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Date Submitted</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {researches.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 500 }}>{item.id}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{item.title}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.journal}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          bgcolor: item.status === "Published" ? "rgba(16, 185, 129, 0.1)" : item.status === "Under Review" ? "rgba(245, 158, 11, 0.1)" : "rgba(107, 114, 128, 0.1)",
                          color: item.status === "Published" ? "#10B981" : item.status === "Under Review" ? "#F59E0B" : "#6B7280",
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
            <ListItemIcon><RemoveRedEye fontSize="small" /></ListItemIcon>
            <ListItemText>View Paper</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><MenuBook fontSize="small" /></ListItemIcon>
            <ListItemText>Track Publication</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Edit fontSize="small" /></ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ color: "#EF4444" }}>
            <ListItemIcon><Delete fontSize="small" sx={{ color: "#EF4444" }} /></ListItemIcon>
            <ListItemText>Retract Paper</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default ResearchSubmissionPage;
