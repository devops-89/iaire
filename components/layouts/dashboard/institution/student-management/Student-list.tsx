"use client";
import Recommend from "@/components/modals/student/Recommend";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  useGetAllUser,
  useUpdateTeacherStatus,
} from "@/hooks/common/useGetAllUser";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { STUDENT_HEADER_DATA } from "@/utils/constant";
import { APPROVAL_STATUS, COLORS, USER_ROLES } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { STUDENT_RESPONSE_PROPS } from "@/utils/type";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Popover,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Atom } from "react-loading-indicators";
import Link from "next/link";
import { useEffect, useState } from "react";

const StudentList = () => {
  const { showModal } = useModal();
  const { setSnackbar } = useSnackbar();
  const [selectedStudent, setSelectedStudent] = useState<any>("");
  const { updateStatus } = useUpdateTeacherStatus();

  const handleStatusChange = async (id: string | number, newStatus: string) => {
    try {
      await updateStatus(id, newStatus as APPROVAL_STATUS);
      fetchUserData(data);
      setSnackbar("Status updated successfully", "success");
    } catch (err) {
      setSnackbar("Failed to update status", "error");
    }
  };

  const handleRecommendation = () => {
    showModal(<Recommend studentData={selectedStudent} />);
    setAnchorEl(null);
  };

  const listData = [
    {
      label: "Recommend for Head Girl/Boy",
      onclick: handleRecommendation,
    },
    {
      label: "View Profile",
    },
  ];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handlePopover = (
    e: React.MouseEvent<HTMLButtonElement>,
    studentData: any,
  ) => {
    setAnchorEl(e.currentTarget);
    setSelectedStudent(studentData);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedStudent("");
  };

  let data = {
    page: 1,
    limit: 10,
    role: USER_ROLES.STUDENT,
  };
  const { fetchUserData, loading, userData } = useGetAllUser();
  console.log("userData", userData);

  useEffect(() => {
    fetchUserData(data);
  }, []);

  return (
    <Box>
      <Card sx={{ p: 2, boxShadow: "0px 0px 4px 4px #000000040" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="Student Management"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Student Management",
                href: "/dashboard/institution/student-management",
              },
            ]}
          />
          <Link href="/dashboard/institution/student-management/add-student">
            <Button
              sx={{
                backgroundColor: COLORS.PRIMARY_NAVY,
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "10px",
                padding: "10px 20px",
              }}
              endIcon={<Add />}
            >
              Add Student
            </Button>
          </Link>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {STUDENT_HEADER_DATA.map((val, i) => (
                    <TableCell key={i} sx={{ fontWeight: 600 }}>
                      {val}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={12} sx={{ textAlign: "center" }}>
                      <Atom color={COLORS.PRIMARY_NAVY} />
                    </TableCell>
                  </TableRow>
                ) : userData?.data.length ? (
                  userData?.data.map(
                    (val: STUDENT_RESPONSE_PROPS, i: number) => (
                      <TableRow key={i}>
                        <TableCell>{val.userId}</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              color: COLORS.BLACK,
                              fontWeight: 500,
                              fontSize: 15,
                            }}
                          >
                            {val.fullName}
                          </Typography>
                          <Typography sx={{ fontSize: 12 }}>
                            {val.email}
                          </Typography>
                        </TableCell>
                        <TableCell>{val.phone}</TableCell>
                        <TableCell>{val.grade}</TableCell>
                        <TableCell>{val.gender}</TableCell>
                        <TableCell>
                          {val?.approvalStatus === APPROVAL_STATUS.APPROVED ? (
                            <Chip label={val?.approvalStatus} color="success" />
                          ) : (
                            <FormControl
                              size="small"
                              fullWidth
                              sx={{ minWidth: 120 }}
                            >
                              <Select
                                value={val?.approvalStatus}
                                onChange={(e) =>
                                  handleStatusChange(val.id, e.target.value)
                                }
                                sx={{
                                  fontSize: "13px",
                                  height: "32px",
                                  "& .MuiSelect-select": {
                                    color:
                                      val?.approvalStatus ===
                                      APPROVAL_STATUS.APPROVED
                                        ? "#2e7d32"
                                        : val?.approvalStatus ===
                                            APPROVAL_STATUS.PENDING
                                          ? "#ed6c02"
                                          : "#d32f2f",
                                    fontWeight: 600,
                                  },
                                }}
                              >
                                {Object.values(APPROVAL_STATUS).map(
                                  (status) => (
                                    <MenuItem
                                      key={status}
                                      value={status}
                                      sx={{ fontSize: "13px" }}
                                    >
                                      {status}
                                    </MenuItem>
                                  ),
                                )}
                              </Select>
                            </FormControl>
                          )}
                        </TableCell>
                        <TableCell>
                          {val.memberships[0]?.membershipCode || "--"}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={(e) => handlePopover(e, val)}>
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ),
                  )
                ) : (
                  <TableRow>
                    <TableCell colSpan={12}>
                      <Typography sx={{ textAlign: "center", mt: 2 }}>
                        No Data Found
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Popover
          sx={{
            "& .MuiPopover-paper": {
              // width: 210,
              backgroundColor: "#ffffff30",
              backdropFilter: "blur(14px)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              mt: 1,
              overflow: "hidden",
            },
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <List>
            {listData.map((val, i) => (
              <ListItemButton onClick={val.onclick}>
                <ListItemText
                  primary={val.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Popover>
      </Card>
    </Box>
  );
};

export default StudentList;
