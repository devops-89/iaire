import EducatorNomination from "@/components/modals/TeacherNomination";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  useGetAllUser,
  useUpdateTeacherStatus,
} from "@/hooks/common/useGetAllUser";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";
import { TEACHER_HEADER, USER_TABS } from "@/utils/constant";
import { APPROVAL_STATUS, COLORS, USER_ROLES } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { TEACHER_REPONSE_PROPS } from "@/utils/type";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const statusOptions = ["Member", "Not a Member"];

const EducatorList = () => {
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

  const handleShowTeacherNominationModal = () => {
    handleClose();
    showModal(<EducatorNomination educatorId={selectedTeacher?.id ?? null} />);
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

  // console.log("user datat", userData);

  const listItems = [
    {
      label: "Issue NOC",
    },
    // {
    //   label: "Nominate For Training",
    //   onclick: handleShowTeacherNominationModal,
    // },
    {
      label: "View Profile",
      // onclick: () => showModal(<ViewTeacherProfile teacherId={selectedTeacher?.id ?? null} />),
    },
    {
      label: "Report",
    },
  ];

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
            title="Educator Management"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Educator Management",
                href: "/dashboard/institution/educator-management",
              },
            ]}
          />
          <Link href="/dashboard/institution/educator-management/add-educator">
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
              Add Educator
            </Button>
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
              label="Search"
              fullWidth
              sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
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
                {userData?.data.length ? (
                  userData?.data?.map((teacher: TEACHER_REPONSE_PROPS) => (
                    <TableRow key={teacher.id}>
                      <TableCell>{teacher.userId}</TableCell>
                      <TableCell>
                        {" "}
                        <Typography
                          sx={{
                            color: COLORS.BLACK,
                            fontWeight: 500,
                            fontSize: 15,
                          }}
                        >
                          {teacher?.firstName + " " + teacher?.lastName}
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                          {teacher.email}
                        </Typography>
                      </TableCell>
                      <TableCell>{teacher?.phone}</TableCell>
                      <TableCell>
                        {teacher?.primarySubjects?.join(",") || "N/A"}
                      </TableCell>
                      <TableCell>
                        {teacher?.approvalStatus ===
                        APPROVAL_STATUS.APPROVED ? (
                          <Chip
                            label={teacher?.approvalStatus}
                            color="success"
                          />
                        ) : (
                          <FormControl
                            size="small"
                            fullWidth
                            sx={{ minWidth: 120 }}
                          >
                            <Select
                              value={teacher?.approvalStatus}
                              onChange={(e) =>
                                handleStatusChange(teacher.id, e.target.value)
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
                      <TableCell>{teacher?.membershipId || "--"}</TableCell>

                      <TableCell>
                        <IconButton onClick={(e) => handleClick(e, teacher)}>
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
              <ListItemButton key={i}>
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
