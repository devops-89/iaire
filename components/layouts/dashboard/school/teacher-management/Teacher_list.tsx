import Breadcrumb from "@/components/widgets/Breadcrumb";
import { TEACHER_DATA, TEACHER_HEADER } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { USER_STATUS } from "@/utils/enum";
import Link from "next/link";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { School } from "@mui/icons-material";

const TeacherList = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string | null>(
    null,
  );
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeacherId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTeacherId(null);
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Breadcrumb
          title="Teacher Management"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard/school",
            },
            {
              title: "Teacher Management",
              href: "/dashboard/school/teacher-management",
            },
          ]}
        />
        <Link href="/dashboard/school/teacher-management/add-teacher">
          <Button
            sx={{
              backgroundColor: COLORS.ACCENT_TAN,
              color: COLORS.WHITE,
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              fontSize: 16,
              borderRadius: "10px",
              padding: "10px 20px",
            }}
            endIcon={<Add />}
          >
            Add Teacher
          </Button>
        </Link>
      </Stack>

      <TableContainer sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {TEACHER_HEADER.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{ fontFamily: roboto.style.fontFamily, fontSize: 16 }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {TEACHER_DATA.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      fontWeight: 800,
                      fontFamily: roboto.style.fontFamily,
                      borderRadius: "8px",
                      fontSize: "13px",
                      padding: "4px 8px",
                      ...(item.status === USER_STATUS.ACTIVE && {
                        bgcolor: "#ECFDF5",
                        color: "#10B981",
                      }),
                      ...(item.status === USER_STATUS.PENDING && {
                        bgcolor: "#FFFBEB",
                        color: "#F59E0B",
                      }),
                      ...(item.status === USER_STATUS.INACTIVE && {
                        bgcolor: "#FEF2F2",
                        color: "#EF4444",
                      }),
                      ...(item.status === USER_STATUS.BANNED && {
                        bgcolor: "#F9FAFB",
                        color: "#6B7280",
                      }),
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleClick(e, item.id)}>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
            <School fontSize="small" />
          </ListItemIcon>
          <ListItemText>Select Teacher for training</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "#EF4444" }}>
          <ListItemIcon>
            <Delete fontSize="small" sx={{ color: "#EF4444" }} />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default TeacherList;
