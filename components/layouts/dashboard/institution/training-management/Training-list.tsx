"use client";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  MenuItem,
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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import { montserrat, roboto } from "@/utils/fonts";
import { COLORS, TRAINING_NOMINATION_STATUS, USER_ROLES } from "@/utils/enum";
import { useModal } from "@/store/useModal";
import EducatorNomination from "@/components/modals/TeacherNomination";
import {
  SCHOOL_TRAINING_LIST_TABS,
  SCHOOL_TRAINING_NOMINATION_STATUS,
  TRAINING_NOMINATION_TABLE_HEADER,
  TRAINING_NOMINATION_TABLE_HEADER_INTERVIEW,
} from "@/utils/constant";
import { useTrainingList } from "@/hooks/mentor/useNominateTeacher";
import { MoreVert } from "@mui/icons-material";
import moment from "moment";
import { useApprovedNominateTeacher } from "@/hooks/school/useTeacherAdd";
import { Atom } from "react-loading-indicators";
import RejectReason from "@/components/modals/school/RejectReason";
import TeacherSelfNomination from "@/components/modals/mentor/SelfNomination";
import InstitutionDashboardLayout from "../Index";

const InstitutionTrainingList = () => {
  const { showModal } = useModal();
  const { loading, data, getTeacherTrainingList } = useTrainingList();
  const handleModalOpen = () => {
    showModal(<TeacherSelfNomination />);
  };

  const [status, setStatus] = useState();

  const [role, setRole] = useState("");
  const { approveTeacherNominationLoading, ApproveTeacherNomination } =
    useApprovedNominateTeacher();

  const tabData =
    role === USER_ROLES.INSTITUTION
      ? SCHOOL_TRAINING_LIST_TABS
      : SCHOOL_TRAINING_LIST_TABS;

  const handleStatusChange = async (e: any, id: string) => {
    if (e.target.value === TRAINING_NOMINATION_STATUS.REJECTED) {
      showModal(<RejectReason />);
    } else {
      await ApproveTeacherNomination(id, e.target.value);
      getTeacherTrainingList(status);
      setStatus(e.target.value);
    }
  };

  useEffect(() => {
    const roles = localStorage.getItem("role");
    setRole(roles || "");

    if (status && status !== "ALL") {
      getTeacherTrainingList(status);
    } else {
      getTeacherTrainingList();
    }
  }, [status]);

  return (
    <InstitutionDashboardLayout>
      <Box>
        <Card sx={{ p: 2 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Breadcrumb
              title="Training Management"
              data={[
                {
                  title: "Dashboard",
                  href: "/dashboard",
                },
                {
                  title: "Training Management",
                  href: "/dashboard/educator/training-management",
                },
              ]}
            />
            {role === USER_ROLES.EDUCATOR && (
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  color: "#fff",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "14px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#e08e26",
                  },
                  p: 1.5,
                }}
                onClick={handleModalOpen}
              >
                Nominate Self For Training
              </Button>
            )}
          </Stack>
          <Tabs
            sx={{ mt: 2 }}
            value={status || "ALL"}
            onChange={(e, newValue) =>
              setStatus(newValue === "ALL" ? undefined : newValue)
            }
          >
            {tabData.map((val, i) => (
              <Tab label={val.label} value={val.value} key={i} />
            ))}
          </Tabs>
          <Box sx={{ mt: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {TRAINING_NOMINATION_TABLE_HEADER_INTERVIEW.map(
                      (item, idx) => (
                        <TableCell
                          key={idx}
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: 15,
                          }}
                        >
                          {item}
                        </TableCell>
                      ),
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell
                        colSpan={TRAINING_NOMINATION_TABLE_HEADER.length}
                        align="center"
                      >
                        <Atom color={COLORS.PRIMARY_NAVY} size={"small"} />
                      </TableCell>
                    </TableRow>
                  ) : data && data.length > 0 ? (
                    data.map((val: any, i: number) => (
                      <TableRow key={val?.id || i}>
                        <TableCell>{val?.id}</TableCell>
                        <TableCell>{val?.training?.type}</TableCell>

                        <TableCell>{val?.mode || "N/A"}</TableCell>
                        <TableCell>
                          {moment(val.training?.batch?.startDate)?.format(
                            "YYYY,MMM DD",
                          )}
                        </TableCell>
                        <TableCell>
                          {moment(val.training?.batch?.endDate)?.format(
                            "YYYY,MMM DD",
                          )}
                        </TableCell>

                        <TableCell>
                          {val.interviewScheduledAt
                            ? moment(val.interviewScheduledAt)?.format(
                                "YYYY,MMM DD , hh:mm A",
                              )
                            : "--"}
                        </TableCell>

                        {role === USER_ROLES.INSTITUTION ? (
                          val.status ===
                          TRAINING_NOMINATION_STATUS.INTERVIEW_SCHEDULED ? (
                            <TableCell>
                              {val.status?.replace(/_/g, " ")?.toUpperCase()}
                            </TableCell>
                          ) : (
                            <TableCell>
                              <Select
                                value={val.status}
                                size="small"
                                sx={{
                                  fontFamily: montserrat.style.fontFamily,
                                  fontSize: "13px",
                                  minWidth: "160px",
                                  borderRadius: "8px",
                                }}
                                displayEmpty
                                renderValue={(selected) => {
                                  if (
                                    selected ===
                                    TRAINING_NOMINATION_STATUS.SELF_NOMINATED
                                  ) {
                                    return "Self Nominated";
                                  }
                                  const statusObj =
                                    SCHOOL_TRAINING_NOMINATION_STATUS.find(
                                      (s) => s.value === selected,
                                    );
                                  return statusObj ? statusObj.label : selected;
                                }}
                                onChange={(e) => handleStatusChange(e, val.id)}
                              >
                                {SCHOOL_TRAINING_NOMINATION_STATUS.map(
                                  (status) => (
                                    <MenuItem
                                      key={status.value}
                                      value={status.value}
                                      sx={{
                                        fontFamily: montserrat.style.fontFamily,
                                        fontSize: "13px",
                                      }}
                                    >
                                      {status.label}
                                    </MenuItem>
                                  ),
                                )}
                              </Select>
                            </TableCell>
                          )
                        ) : val.status ===
                          TRAINING_NOMINATION_STATUS.SELF_NOMINATED ? (
                          <TableCell
                            sx={{
                              fontFamily: montserrat.style.fontFamily,
                              fontSize: "13px",
                              fontWeight: 500,
                            }}
                          >
                            Pending
                          </TableCell>
                        ) : (
                          <TableCell
                            sx={{
                              fontFamily: montserrat.style.fontFamily,
                              fontSize: "13px",
                              fontWeight: 500,
                            }}
                          >
                            {val?.status
                              ?.replace(/_/g, " ")
                              .toLowerCase()
                              .replace(/\b\w/g, (l: any) => l.toUpperCase()) ||
                              "N/A"}
                          </TableCell>
                        )}
                        <TableCell>
                          <IconButton>
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={TRAINING_NOMINATION_TABLE_HEADER.length}
                        align="center"
                      >
                        No nominations found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Card>
      </Box>
    </InstitutionDashboardLayout>
  );
};

export default InstitutionTrainingList;
