"use client";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { INNOVATION_HEADER } from "@/utils/constant";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, Delete, Edit } from "@mui/icons-material";
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
  Typography} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import BeamButton from "@/components/widgets/BeamButton";

const InnovationList = () => {
  const { loading, fetchInnovationList, innovationData } =
    useGetAllInnovation();

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
        </Stack>

        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {INNOVATION_HEADER.map((item, index) => (
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
                <TableCell
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: 16,
                    fontWeight: 600,
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
                  <TableRow key={item.id || index} hover>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      {item.displayId || item.id}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/dashboard/student/innovation-management/innovation-details/${item.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography
                          sx={{
                            color: COLORS.PRIMARY_NAVY || "#1a2a3a",
                            fontWeight: 500,
                            fontSize: 15,
                            textDecoration: "underline",
                            textTransform: "capitalize",
                            fontFamily: roboto.style.fontFamily,
                            cursor: "pointer",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily }}>
                      {item.team?.title || "-"}
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
