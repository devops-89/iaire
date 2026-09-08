"use client";
import Recommend from "@/components/modals/student/Recommend";
import BeamButton from "@/components/widgets/BeamButton";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  useGetAllUser,
  useUpdateTeacherStatus,
} from "@/hooks/common/useGetAllUser";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import useSnackbar from "@/store/useSnackbar";
import { STUDENT_HEADER_DATA } from "@/utils/constant";
import { APPROVAL_STATUS, COLORS, PLAN_STATUS, USER_ROLES } from "@/utils/enum";
import {
  aloeveraDisplay_medium,
  newBlack_medium,
  newBlack_semiBold,
} from "@/utils/fonts";
import { STUDENT_RESPONSE_PROPS } from "@/utils/type";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Box,
  Card,
  Chip,
  FormControl,
  IconButton,
  List,
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const StudentList = () => {
  const { institutionData } = useSignup();
  const isMember =
    (institutionData?.payments || []).length > 0 &&
    (institutionData?.payments || []).some(
      (val) => val?.status === PLAN_STATUS.SUCCESS,
    );
  const router = useRouter();
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
      onclick: () => {
        if (selectedStudent?.id) {
          router.push(
            `/dashboard/institution/student-management/${selectedStudent.id}/view-student`,
          );
          handleClosePopover();
        }
      },
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
          {/* {isMember ? (
            <Link href="/dashboard/institution/student-management/add-student">
              <BeamButton
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: "10px",
                  padding: "10px 20px",
                }}
                endIcon={<Add />}
              >
                Add Student
              </BeamButton>
            </Link>
          ) : (
            <BeamButton
              sx={{
                backgroundColor: "#7e7e7e",
                color: COLORS.WHITE,
                fontFamily: aloeveraDisplay_medium.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "10px",
                padding: "10px 20px",
              }}
              endIcon={<Lock />}
              onClick={() => showModal(<Plans role={USER_ROLES.SCHOOL} />)}
            >
              Unlock Feature
            </BeamButton>
          )} */}

          <Link href="/dashboard/institution/student-management/add-student">
            <BeamButton
              sx={{
                backgroundColor: COLORS.PRIMARY_NAVY,
                color: COLORS.WHITE,
                fontFamily: aloeveraDisplay_medium.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "10px",
                padding: "10px 20px",
              }}
              endIcon={<Add />}
            >
              Add Student
            </BeamButton>
          </Link>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {STUDENT_HEADER_DATA.map((val, i) => (
                    <TableCell
                      key={i}
                      sx={{
                        fontWeight: 600,
                        fontFamily: newBlack_semiBold.style.fontFamily,
                        fontSize: 16,
                      }}
                    >
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
                ) : userData?.length ? (
                  userData?.map((val: STUDENT_RESPONSE_PROPS, i: number) => (
                    <TableRow key={i}>
                      <TableCell
                        sx={{ fontFamily: newBlack_medium.style.fontFamily }}
                      >
                        {val.userId}
                      </TableCell>
                      <TableCell>
                        <Link
                          href={`/dashboard/institution/student-management/${val.id}/view-student`}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              color: COLORS.BLACK,
                              fontWeight: 500,
                              fontSize: 15,
                              fontFamily: newBlack_medium.style.fontFamily,
                              "&:hover": {
                                color: COLORS.PRIMARY_NAVY,
                              },
                            }}
                          >
                            {val.fullName || val.firstName + " " + val.lastName}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 12,
                              fontFamily: newBlack_medium.style.fontFamily,
                            }}
                          >
                            {val.email}
                          </Typography>
                        </Link>
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: newBlack_medium.style.fontFamily }}
                      >
                        {val.phone}
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: newBlack_medium.style.fontFamily }}
                      >
                        {val.grade}
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: newBlack_medium.style.fontFamily }}
                      >
                        {val.gender}
                      </TableCell>
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
                                  fontFamily: newBlack_medium.style.fontFamily,
                                },
                              }}
                            >
                              {Object.values(APPROVAL_STATUS).map((status) => (
                                <MenuItem
                                  key={status}
                                  value={status}
                                  sx={{
                                    fontSize: "13px",
                                    fontFamily:
                                      newBlack_medium.style.fontFamily,
                                  }}
                                >
                                  {status}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </TableCell>
                      {/* <TableCell>
                        {val.memberships?.[0]?.membershipCode || "--"}
                      </TableCell> */}
                      <TableCell>
                        <IconButton onClick={(e) => handlePopover(e, val)}>
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
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
