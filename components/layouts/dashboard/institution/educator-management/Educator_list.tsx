import EducatorNomination from "@/components/modals/TeacherNomination";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  useGetAllUser,
  useUpdateTeacherStatus,
} from "@/hooks/common/useGetAllUser";
import { useSchoolSignup } from "@/hooks/school/useSignup";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import useSnackbar from "@/store/useSnackbar";
import { TEACHER_HEADER, USER_TABS } from "@/utils/constant";
import {
  APPROVAL_STATUS,
  COLORS,
  PLAN_STATUS,
  USER_ROLES,
  USER_STATUS,
} from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { TEACHER_REPONSE_PROPS } from "@/utils/type";
import { Add, Lock, MoreVert } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Card,
  Chip,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Popover,
  Select,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import Plans from "@/components/modals/common/Plans";
import BeamButton from "@/components/widgets/BeamButton";
import RejectReason from "@/components/modals/school/RejectReason";
import IssueNocModal from "@/components/modals/school/IssueNocModal";
import ReportEducatorModal from "@/components/modals/school/ReportEducatorModal";
import { useDebounceCallback } from "@/hooks/common/useDeboounce";

const statusOptions = ["Member", "Not a Member"];

const EducatorList = () => {
  const router = useRouter();
  const { showModal } = useModal();
  const { setSnackbar } = useSnackbar();

  const [tabValue, setTabValue] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTeacher, setSelectedTeacher] =
    useState<TEACHER_REPONSE_PROPS | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    teacher: TEACHER_REPONSE_PROPS,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeacher(teacher);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    setSelectedStatus(newValue === "ALL" ? null : newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTeacher(null);
  };

  const { updateStatus, loading: statusLoading } = useUpdateTeacherStatus();

  const handleStatusChange = async (id: string | number, newStatus: string) => {
    try {
      await updateStatus(id, newStatus as APPROVAL_STATUS);
      fetchUserData(data);
      setSnackbar("Status updated successfully", "success");
    } catch (err) {
      setSnackbar("Failed to update status", "error");
    }
  };

  let data = {
    page: 1,
    limit: 10,
    role: USER_ROLES.TEACHER,
    approvalStatus: selectedStatus,
  };

  const { userData, loading, fetchUserData } = useGetAllUser();
  const [search, setSearch] = useState("");

  const listItems = [
    {
      label: "Issue NOC",
      onclick: () =>
        showModal(<IssueNocModal educatorId={selectedTeacher?.id} />),
    },

    {
      label: "Report",
      onclick: () =>
        showModal(<ReportEducatorModal educatorId={selectedTeacher?.id} />),
    },
  ];

  const debouncedFetchUsers = useDebounceCallback((value: string) => {
    fetchUserData({ ...data, search: value });
  }, 500);

  const searchHandler = (e: any) => {
    setSearch(e.target.value);
    debouncedFetchUsers(e.target.value);
  };

  const { institutionData } = useSignup();
  // const isMember =
  //   (institutionData?.payments || []).length > 0 &&
  //   (institutionData?.payments || []).some(
  //     (val) => val?.status === PLAN_STATUS.SUCCESS,
  //   );

  useEffect(() => {
    fetchUserData(data);
  }, [selectedStatus]);

  return (
    <Box>
      <Card sx={{ p: 2, boxShadow: "0px 0px 4px 4px #000000040" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="Mentor Management"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Mentor Management",
                href: "/dashboard/institution/educator-management",
              },
            ]}
          />
          {/* {isMember ? (
            <Link href="/dashboard/institution/educator-management/add-educator">
              <BeamButton
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
                Add Educator
              </BeamButton>
            </Link>
          ) : (
            <BeamButton
              sx={{
                backgroundColor: "#7e7e7e",
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
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
          <Link href="/dashboard/institution/educator-management/add-educator">
            <BeamButton
              sx={{
                backgroundColor: COLORS.PRIMARY_NAVY,
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                padding: "10px 20px",
              }}
              endIcon={<Add />}
            >
              Add Educator
            </BeamButton>
          </Link>
        </Stack>

        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          sx={{
            borderBottom: "1px solid #E0E0E0",
            mt: 1,
            mb: 2,
            "& .MuiTabs-indicator": {
              backgroundColor: COLORS.PRIMARY_NAVY,
            },
            "& .Mui-selected": {
              color: COLORS.PRIMARY_NAVY,
            },
          }}
        >
          {USER_TABS.map((val, i) => (
            <Tab label={val.label} key={i} value={val.value} />
          ))}
        </Tabs>

        <Grid container spacing={3} mt={2}>
          <Grid size={3}>
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Status"
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
              options={statusOptions}
              renderOption={(props, option) => (
                <Box component={"li"} {...props}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 500,
                    }}
                  >
                    {option}
                  </Typography>
                </Box>
              )}
            />
          </Grid>
          <Grid size={9}>
            <TextField
              // label="Search"
              fullWidth
              sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
              onChange={searchHandler}
              value={search}
              placeholder="Search by name, email or mobile number..."
            />
          </Grid>
        </Grid>

        <TableContainer sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                {TEACHER_HEADER.map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={12} sx={{ textAlign: "center" }}>
                    <Atom color={COLORS.PRIMARY_NAVY} />
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {userData?.length ? (
                  userData?.map((teacher: TEACHER_REPONSE_PROPS) => (
                    <TableRow
                      key={teacher.id}
                      hover
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push(
                          `/dashboard/institution/educator-management/${teacher.id}/view-educator`,
                        )
                      }
                    >
                      <TableCell>{teacher.userId}</TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: COLORS.BLACK,
                            fontWeight: 500,
                            fontSize: 15,
                          }}
                        >
                          {teacher?.firstName + " " + teacher?.lastName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: COLORS.BLACK,
                            fontWeight: 500,
                            fontSize: 15,
                          }}
                        >
                          {teacher?.email}
                        </Typography>
                      </TableCell>
                      <TableCell>{teacher?.phone}</TableCell>

                      <TableCell onClick={(e) => e.stopPropagation()}>
                        {teacher?.approvalStatus ===
                        APPROVAL_STATUS.APPROVED ? (
                          <Chip
                            label={teacher?.approvalStatus}
                            sx={{
                              backgroundColor: "#00800030",
                              color: "#008000",
                              fontWeight: 600,
                              minWidth: 120,
                            }}
                          />
                        ) : (
                          <FormControl
                            size="small"
                            fullWidth
                            sx={{ minWidth: 120, borderRadius: "20px" }}
                          >
                            <Select
                              value={teacher?.approvalStatus}
                              onChange={(e) =>
                                e.target.value === APPROVAL_STATUS.REJECTED
                                  ? showModal(
                                      <RejectReason
                                        teacherId={teacher.id}
                                        onSuccess={() => fetchUserData(data)}
                                      />,
                                    )
                                  : handleStatusChange(
                                      teacher.id,
                                      e.target.value,
                                    )
                              }
                              sx={{
                                fontSize: "13px",
                                height: "32px",
                                "& .MuiSelect-select": {
                                  color:
                                    teacher?.approvalStatus ===
                                    APPROVAL_STATUS.APPROVED
                                      ? "#2e7d32"
                                      : teacher?.approvalStatus ===
                                          APPROVAL_STATUS.PENDING
                                        ? "#ed6c02"
                                        : "#d32f2f",
                                  fontWeight: 600,
                                },
                                borderRadius: "20px",
                              }}
                            >
                              {Object.values(APPROVAL_STATUS).map((status) => (
                                <MenuItem
                                  key={status}
                                  value={status}
                                  sx={{ fontSize: "13px" }}
                                >
                                  {status}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </TableCell>
                      {/* <TableCell>
                        {teacher?.membershipCode || "--"}
                      </TableCell> */}

                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClick(e, teacher);
                          }}
                        >
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
            )}
          </Table>
        </TableContainer>
        <Popover
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          sx={{
            "& .MuiPopover-paper": {
              width: 210,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(14px)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              mt: 1,
              overflow: "hidden",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <List>
            {listItems.map((val, i) => (
              <ListItemButton
                key={i}
                onClick={() => {
                  if (val.onclick) val.onclick();
                  setAnchorEl(null);
                }}
              >
                <ListItemText primary={val.label} />
              </ListItemButton>
            ))}
          </List>
        </Popover>
      </Card>
    </Box>
  );
};

export default EducatorList;
