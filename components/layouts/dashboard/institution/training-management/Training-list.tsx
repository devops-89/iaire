"use client";
import RejectReason from "@/components/modals/school/RejectReason";
import BeamButton from "@/components/widgets/BeamButton";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useTrainingList } from "@/hooks/mentor/useNominateTeacher";
import { useApprovedNominateTeacher } from "@/hooks/school/useTeacherAdd";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import {
  INSTITUTION_TRAINING_NOMINATION_TABLE_HEADER_INTERVIEW,
  SCHOOL_TRAINING_LIST_TABS,
  SCHOOL_TRAINING_NOMINATION_STATUS,
} from "@/utils/constant";
import {
  COLORS,
  PLAN_STATUS,
  TRAINING_MODE,
  TRAINING_NOMINATION_STATUS,
  USER_ROLES,
} from "@/utils/enum";
import {
  aloeveraDisplay_medium,
  montserrat,
  newBlack_medium,
  roboto,
} from "@/utils/fonts";
import { TRAINING_NOMINATION_RESPONSE } from "@/utils/type";
import {
  Box,
  Card,
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
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import InstitutionDashboardLayout from "../Index";

const InstitutionTrainingList = () => {
  const { showModal } = useModal();
  const { institutionData } = useSignup();
  const isMember =
    (institutionData?.payments || []).length > 0 &&
    (institutionData?.payments || []).some(
      (val) => val?.status === PLAN_STATUS.SUCCESS,
    );
  const { loading, data, getTeacherTrainingList } = useTrainingList();

  const [status, setStatus] = useState();

  const router = useRouter();
  const assignTeachers = () => {
    router.push("/dashboard/institution/training-management/assign-teachers");
  };

  const [role, setRole] = useState("");
  const { approveTeacherNominationLoading, ApproveTeacherNomination } =
    useApprovedNominateTeacher();

  const tabData =
    role === USER_ROLES.INSTITUTION
      ? SCHOOL_TRAINING_LIST_TABS
      : SCHOOL_TRAINING_LIST_TABS;

  const handleStatusChange = async (e: any, id: string | number) => {
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
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent={"space-between"}
            spacing={{ xs: 2, sm: 0 }}
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

            <BeamButton
              sx={{
                backgroundColor: COLORS.PRIMARY_NAVY,
                color: "#fff",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "20px",
                p: 1.5,
                whiteSpace: "nowrap",
                width: { xs: "100%", sm: "auto" },
              }}
              onClick={assignTeachers}
            >
              Assign Teachers
            </BeamButton>
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
                    {INSTITUTION_TRAINING_NOMINATION_TABLE_HEADER_INTERVIEW.map(
                      (item, idx) => (
                        <TableCell
                          key={idx}
                          sx={{
                            fontFamily: aloeveraDisplay_medium.style.fontFamily,
                            fontSize: 14,
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
                        colSpan={
                          INSTITUTION_TRAINING_NOMINATION_TABLE_HEADER_INTERVIEW.length
                        }
                        align="center"
                      >
                        <Atom color={COLORS.PRIMARY_NAVY} size={"small"} />
                      </TableCell>
                    </TableRow>
                  ) : data && data.length > 0 ? (
                    data.map((val: TRAINING_NOMINATION_RESPONSE, i: number) => (
                      <TableRow key={val?.id || i}>
                        <TableCell
                          sx={{
                            fontSize: 13,
                            fontFamily: newBlack_medium.style.fontFamily,
                          }}
                        >
                          {val?.id}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: 13,
                            fontFamily: newBlack_medium.style.fontFamily,
                          }}
                        >
                          {val?.teacher?.fullName || "N/A"}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: 13,
                            fontFamily: newBlack_medium.style.fontFamily,
                          }}
                        >
                          {val?.teacher?.email || "N/A"}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: 13,
                            fontFamily: newBlack_medium.style.fontFamily,
                          }}
                        >
                          {val?.training?.type}
                        </TableCell>

                        <TableCell
                          sx={{
                            fontSize: 13,
                            fontFamily: newBlack_medium.style.fontFamily,
                          }}
                        >
                          {val?.training?.mode ===
                          TRAINING_MODE.ANY_OF_THE_ABOVE
                            ? "Any As Available"
                            : val?.training?.mode || "N/A"}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: 13,
                            fontFamily: newBlack_medium.style.fontFamily,
                          }}
                        >
                          {moment(val.training?.batch?.startDate)?.format(
                            "YYYY,MMM DD",
                          )}
                        </TableCell>
                        <TableCell sx={{ fontSize: 13 }}>
                          {moment(val.training?.batch?.endDate)?.format(
                            "YYYY,MMM DD",
                          )}
                        </TableCell>

                        {role === USER_ROLES.INSTITUTION ? (
                          val.status ===
                          TRAINING_NOMINATION_STATUS.INTERVIEW_SCHEDULED ? (
                            <TableCell
                              sx={{
                                fontSize: 13,
                                fontFamily: newBlack_medium.style.fontFamily,
                              }}
                            >
                              {val.status?.replace(/_/g, " ")?.toUpperCase()}
                            </TableCell>
                          ) : (
                            <TableCell
                              sx={{
                                fontSize: 13,
                                fontFamily: roboto.style.fontFamily,
                              }}
                            >
                              <Select
                                value={val.status}
                                size="small"
                                sx={{
                                  fontFamily: newBlack_medium.style.fontFamily,
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
                                  return statusObj
                                    ? statusObj.label
                                    : ((selected as string)
                                        ?.replace(/_/g, " ")
                                        ?.toLowerCase()
                                        ?.replace(/\b\w/g, (l) =>
                                          l.toUpperCase(),
                                        ) ?? selected);
                                }}
                                onChange={(e) => handleStatusChange(e, val.id)}
                              >
                                {SCHOOL_TRAINING_NOMINATION_STATUS.map(
                                  (status) => (
                                    <MenuItem
                                      key={status.value}
                                      value={status.value}
                                      sx={{
                                        fontFamily:
                                          newBlack_medium.style.fontFamily,
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
                              fontFamily: newBlack_medium.style.fontFamily,
                              fontSize: "13px",
                              fontWeight: 500,
                            }}
                          >
                            Pending
                          </TableCell>
                        ) : (
                          <TableCell
                            sx={{
                              fontFamily: newBlack_medium.style.fontFamily,
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
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={
                          INSTITUTION_TRAINING_NOMINATION_TABLE_HEADER_INTERVIEW.length
                        }
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
