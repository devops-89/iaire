"use client";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { INNOVATION_HEADER, STUDENT_INNOVATION_HEADER } from "@/utils/constant";
import { COLORS, USER_STATUS, USER_ROLES } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, Delete, Edit, Lock } from "@mui/icons-material";
import {
  Box,
  Chip,
  CircularProgress,
  IconButton,
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
import React, { useEffect } from "react";
import { useSignup } from "@/store/useSignup";
import { useModal } from "@/store/useModal";
import Plans from "@/components/modals/common/Plans";
import BeamButton from "@/components/widgets/BeamButton";

const InnovationList = () => {
  const { loading, fetchInnovationList, innovationData } =
    useGetAllInnovation();
  const { data: studentData } = useSignup();
  const { showModal } = useModal();

  const isMember =
    ((studentData?.payments?.length ?? 0) > 0 &&
      studentData?.payments?.some(
        (v: any) => v.membership?.status === "ACTIVE",
      )) ??
    false;

  const isPaymentPending = studentData?.payments?.some(
    (p: any) =>
      p.status === "PENDING" || p.membership?.status === "PAYMENT_PENDING",
  );

  useEffect(() => {
    fetchInnovationList();
  }, []);

  return (
    <Box>
      <Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="My Innovations"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/student",
              },
              {
                title: "Innovation Management",
                href: "/dashboard/student/innovation-management",
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
              href="/dashboard/student/innovation-management/add-innovation"
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
                  },
                }}
                endIcon={<Add />}
              >
                New Innovation
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

        <TableContainer sx={{ mt: 3, border: "none", boxShadow: "none" }}>
          <Table sx={{ borderCollapse: "separate", borderSpacing: "0 8px" }}>
            <TableHead>
              <TableRow sx={{ "& th": { borderBottom: "1px solid #E5E7EB" } }}>
                {STUDENT_INNOVATION_HEADER.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#111827",
                      paddingBottom: "12px",
                    }}
                  >
                    {item}
                  </TableCell>
                ))}
                <TableCell
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#111827",
                    paddingBottom: "12px",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <CircularProgress
                      size={30}
                      sx={{ color: COLORS.PRIMARY_NAVY }}
                    />
                  </TableCell>
                </TableRow>
              ) : innovationData && innovationData.length > 0 ? (
                innovationData.map((item, index) => (
                  <TableRow
                    key={item.id || index}
                    sx={{
                      "& td": { borderBottom: "1px solid #F3F4F6", py: 2.5 },
                    }}
                    hover
                  >
                    <TableCell
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        color: "#374151",
                        fontSize: 14,
                      }}
                    >
                      {item.displayId || item.id}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/dashboard/student/innovation-management/innovation-details/${item.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography
                          sx={{
                            color: COLORS.PRIMARY_NAVY,
                            fontWeight: 700,
                            fontSize: 14,
                            textDecoration: "underline",
                            fontFamily: roboto.style.fontFamily,
                            cursor: "pointer",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={item.status?.replace(/_/g, " ")}
                        size="small"
                        sx={{
                          fontWeight: 800,
                          fontFamily: roboto.style.fontFamily,
                          borderRadius: "6px",
                          fontSize: "12px",
                          padding: "2px 4px",
                          textTransform: "uppercase",
                          bgcolor: "#E5E7EB",
                          color: "#374151",
                          ...(item.status?.toUpperCase() ===
                            USER_STATUS.ACTIVE && {
                            bgcolor: "#ECFDF5",
                            color: "#10B981",
                          }),
                          ...(item.status?.toUpperCase() ===
                            USER_STATUS.PENDING && {
                            bgcolor: "#FFFBEB",
                            color: "#F59E0B",
                          }),
                          ...(item.status?.toUpperCase() ===
                            USER_STATUS.INACTIVE && {
                            bgcolor: "#FEF2F2",
                            color: "#EF4444",
                          }),
                          ...(item.status?.toUpperCase() ===
                            USER_STATUS.BANNED && {
                            bgcolor: "#F9FAFB",
                            color: "#6B7280",
                          }),
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Edit fontSize="small" sx={{ color: COLORS.BLACK }} />
                      </IconButton>
                      <IconButton>
                        <Delete fontSize="small" sx={{ color: COLORS.BLACK }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    align="center"
                    sx={{ py: 6, fontFamily: roboto.style.fontFamily }}
                  >
                    No innovations found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default InnovationList;
