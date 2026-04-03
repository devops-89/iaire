import Breadcrumb from "@/components/widgets/Breadcrumb";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Add,
  MoreVert,
  RocketLaunch,
  Explore,
  Edit,
  Delete,
  Assessment,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const startups = [
  {
    id: "ST-881",
    name: "GreenTech Solutions",
    sector: "Clean Energy",
    date: "Nov 05, 2023",
    status: "Incubated",
  },
  {
    id: "ST-902",
    name: "EduPals AI",
    sector: "EdTech",
    date: "Jan 12, 2024",
    status: "Active",
  },
  {
    id: "ST-915",
    name: "SmartIrrigate",
    sector: "Agriculture",
    date: "Feb 20, 2024",
    status: "Phase 1",
  },
];

const StartupList = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
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
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mb: 4 }}
      >
        <Breadcrumb
          title="Startup Management"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard/student",
            },
            {
              title: "Startup Management",
              href: "/dashboard/student/startup-management",
            },
          ]}
        />
        <Link
          href="/dashboard/student/startup-management/add-startup"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            startIcon={<RocketLaunch />}
            sx={{
              bgcolor: COLORS.ACCENT_TAN,
              color: COLORS.WHITE,
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 700,
              textTransform: "none",
              fontFamily: montserrat.style.fontFamily,
              "&:hover": { bgcolor: "#B88A40" },
            }}
          >
            New Startup
          </Button>
        </Link>
      </Stack>

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
                  sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}
                >
                  Startup ID
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}
                >
                  Startup Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}
                >
                  Sector
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}
                >
                  Registration
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {startups.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell
                    sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 500 }}
                  >
                    {item.id}
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                    {item.sector}
                  </TableCell>
                  <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                    {item.date}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        bgcolor:
                          item.status === "Incubated"
                            ? "rgba(16, 185, 129, 0.1)"
                            : item.status === "Active"
                            ? "rgba(59, 130, 246, 0.1)"
                            : "rgba(107, 114, 128, 0.1)",
                        color:
                          item.status === "Incubated"
                            ? "#10B981"
                            : item.status === "Active"
                            ? "#3B82F6"
                            : "#6B7280",
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
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Assessment fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Report</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Explore fontSize="small" />
          </ListItemIcon>
          <ListItemText>Track Milestone</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText>Modify Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "#EF4444" }}>
          <ListItemIcon>
            <Delete fontSize="small" sx={{ color: "#EF4444" }} />
          </ListItemIcon>
          <ListItemText>Close Startup</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default StartupList;
