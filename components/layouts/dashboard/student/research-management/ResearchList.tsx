"use client";
import Plans from "@/components/modals/common/Plans";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import { RESEARCH_HEADER } from "@/utils/constant";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, Lock } from "@mui/icons-material";
import {
  Box,
  Card,
  Chip,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React, { useEffect } from "react";
import BeamButton from "@/components/widgets/BeamButton";

const ResearchList = () => {
  const { showModal } = useModal();
  const { data: studentData } = useSignup();

  const isMember =
    (studentData?.payments?.length ?? 0) > 0 &&
    studentData?.payments?.some(
      (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
    );

  const isPaymentPending = studentData?.payments?.some(
    (p: any) => p.status === "PENDING" || p.membership?.status === "PAYMENT_PENDING"
  );

  const { researchData, fetchResearchData, loading } = useGetAllResearch();

  useEffect(() => {
    fetchResearchData();
  }, []);

  return (
    <Box>
      <Card
        sx={{
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ mb: 3 }}
        >
          <Breadcrumb
            title="Research Submissions"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/student",
              },
              {
                title: "Research Management",
                href: "/dashboard/student/research-management",
              },
            ]}
          />
          {isPaymentPending ? (
            <BeamButton
              sx={{
                backgroundColor: "#7e7e7e",
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "10px",
                padding: "10px 20px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#7e7e7e",
                },
              }}
              endIcon={<Lock />}
              disabled
            >
              Payment Pending
            </BeamButton>
          ) : isMember ? (
            <Link
              href="/dashboard/student/research-management/add-research"
              style={{ textDecoration: "none" }}
            >
              <BeamButton
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  color: COLORS.WHITE,
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: "10px",
                  padding: "10px 20px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    opacity: 0.9,
                  },
                }}
                endIcon={<Add />}
              >
                Add Research
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
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#7e7e7e",
                },
              }}
              endIcon={<Lock />}
              onClick={() => showModal(<Plans role={USER_ROLES.STUDENT} />)}
            >
              Unlock Feature
            </BeamButton>
          )}
        </Stack>

        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {RESEARCH_HEADER.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={RESEARCH_HEADER.length}
                    align="center"
                    sx={{ py: 6 }}
                  >
                    <CircularProgress
                      size={30}
                      sx={{ color: COLORS.PRIMARY_NAVY }}
                    />
                  </TableCell>
                </TableRow>
              ) : researchData && researchData.length > 0 ? (
                researchData.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      {item.displayId}
                    </TableCell>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      {item.title}
                    </TableCell>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      {item.topic}
                    </TableCell>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      {moment(item.createdAt).format("DD-MMM-YYYY")}
                    </TableCell>
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
                          textTransform: "uppercase",
                          ...(item.status?.toUpperCase() === "PUBLISHED" && {
                            bgcolor: "#ECFDF5",
                            color: "#10B981",
                          }),
                          ...(item.status?.toUpperCase() === "PENDING" && {
                            bgcolor: "#FFFBEB",
                            color: "#F59E0B",
                          }),
                          ...(item.status?.toUpperCase() === "NOT_PUBLISHED" && {
                            bgcolor: "#FEF2F2",
                            color: "#EF4444",
                          }),
                          ...(item.status?.toUpperCase() === "ARCHIVED" && {
                            bgcolor: "#F9FAFB",
                            color: "#6B7280",
                          }),
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      -
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={RESEARCH_HEADER.length}
                    align="center"
                    sx={{ py: 6, fontFamily: roboto.style.fontFamily }}
                  >
                    No research submissions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default ResearchList;
