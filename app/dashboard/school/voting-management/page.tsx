"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
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
  Checkbox,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { 
  MoreVert, 
  RemoveRedEye, 
  Edit, 
  Delete,
  HowToVote,
  Gavel
} from "@mui/icons-material";

const votes = [
  { 
    id: "V-882", 
    entry: "E-101", 
    voteEmail: "voter1@test.com", 
    userEmail: "studentA@iaire.com", 
    schedule: "Grand Finale 2024", 
    count: 1, 
    payment: "Done", 
    score: 85, 
    ip: "192.168.1.1", 
    session: "sess_abc123", 
    fingerprint: "fp_9921" 
  },
  { 
    id: "V-883", 
    entry: "E-102", 
    voteEmail: "voter2@test.com", 
    userEmail: "studentB@iaire.com", 
    schedule: "Semi Final North", 
    count: 1, 
    payment: "Pending", 
    score: 72, 
    ip: "192.168.1.2", 
    session: "sess_xyz789", 
    fingerprint: "fp_9042" 
  },
];

const VotingManagementPage = () => {
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
            Voting Management
          </Typography>
          <Typography sx={{ fontFamily: montserrat.style.fontFamily, color: "rgba(0,0,0,0.6)" }}>
            Review and adjust student innovation votes, judge scores, and payment statuses.
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ borderRadius: "24px", border: "1px solid #f0f0f0", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: '70vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow sx={{ "& .MuiTableCell-head": { bgcolor: "rgba(11, 23, 39, 0.02)", fontWeight: 700, fontFamily: montserrat.style.fontFamily, fontSize: '13px', py: 1.5 } }}>
                  <TableCell padding="checkbox"><Checkbox size="small" /></TableCell>
                  <TableCell>Vote ID</TableCell>
                  <TableCell>Entry ID</TableCell>
                  <TableCell>Vote Email</TableCell>
                  <TableCell>User Email</TableCell>
                  <TableCell>Schedule Name</TableCell>
                  <TableCell>Vote Count</TableCell>
                  <TableCell>Payment</TableCell>
                  <TableCell>Judge Score</TableCell>
                  <TableCell>IP</TableCell>
                  <TableCell>Session ID</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {votes.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell padding="checkbox"><Checkbox size="small" /></TableCell>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{item.id}</TableCell>
                    <TableCell>{item.entry}</TableCell>
                    <TableCell sx={{ fontSize: '13px' }}>{item.voteEmail}</TableCell>
                    <TableCell sx={{ fontSize: '13px' }}>{item.userEmail}</TableCell>
                    <TableCell sx={{ fontSize: '13px' }}>{item.schedule}</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.payment}
                        size="small"
                        sx={{
                          bgcolor: item.payment === "Done" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)",
                          color: item.payment === "Done" ? "#10B981" : "#F59E0B",
                          fontWeight: 700,
                          borderRadius: "6px",
                          fontSize: '11px'
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: COLORS.ACCENT_TAN }}>{item.score}</TableCell>
                    <TableCell sx={{ fontSize: '12px', color: 'gray' }}>{item.ip}</TableCell>
                    <TableCell sx={{ fontSize: '12px', color: 'gray' }}>{item.session}</TableCell>
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
            <ListItemText sx={{ ".MuiTypography-root": { fontSize: '14px', fontFamily: montserrat.style.fontFamily } }}>View Details</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Gavel fontSize="small" /></ListItemIcon>
            <ListItemText sx={{ ".MuiTypography-root": { fontSize: '14px', fontFamily: montserrat.style.fontFamily } }}>Audit Score</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon><Edit fontSize="small" /></ListItemIcon>
            <ListItemText sx={{ ".MuiTypography-root": { fontSize: '14px', fontFamily: montserrat.style.fontFamily } }}>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ color: "#EF4444" }}>
            <ListItemIcon><Delete fontSize="small" sx={{ color: "#EF4444" }} /></ListItemIcon>
            <ListItemText sx={{ ".MuiTypography-root": { fontSize: '14px', fontFamily: montserrat.style.fontFamily } }}>Delete Vote</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default VotingManagementPage;
