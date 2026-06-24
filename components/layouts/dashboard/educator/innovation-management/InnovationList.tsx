"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Plans from "@/components/modals/common/Plans";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import { INNOVATION_HEADER } from "@/utils/constant";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_semiBold } from "@/utils/fonts";
import { Add, Lock } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
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
import { Atom } from "react-loading-indicators";

const InnovationList = () => {
  const { showModal } = useModal();
  const { educatorData } = useSignup();

  const isMember =
    (educatorData?.payments?.length ?? 0) > 0 &&
    educatorData?.payments?.some(
      (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
    );

  const { loading, fetchInnovationList, innovationData } =
    useGetAllInnovation();

  useEffect(() => {
    fetchInnovationList();
  }, []);

  return (
    <EducatorDashboardLayout>
      <Box>
        <Box sx={{ mt: 2 }}>
          <Card sx={{ p: 2 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ mb: 3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: newBlack_semiBold.style.fontFamily,
                  fontWeight: 500,
                  fontSize: 25,
                  color: COLORS.BLACK,
                }}
              >
                Innovation Management
              </Typography>
              {isMember ? (
                <Link
                  href="/dashboard/educator/innovation-management/add-innovation"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      backgroundColor: COLORS.PRIMARY_NAVY,
                      color: COLORS.WHITE,
                      fontFamily: aloeveraDisplay_medium.style.fontFamily,
                      fontWeight: 400,
                      fontSize: 14,
                      borderRadius: "10px",
                      padding: "8px 24px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: COLORS.PRIMARY_NAVY,
                        opacity: 0.9,
                      },
                    }}
                    endIcon={<Add />}
                  >
                    Add Innovation
                  </Button>
                </Link>
              ) : (
                <Button
                  sx={{
                    backgroundColor: "#7e7e7e",
                    color: COLORS.WHITE,
                    fontFamily: aloeveraDisplay_medium.style.fontFamily,
                    fontWeight: 400,
                    fontSize: 14,
                    borderRadius: "10px",
                    padding: "8px 24px",
                    textTransform: "none",
                  }}
                  endIcon={<Lock />}
                  onClick={() => showModal(<Plans role={USER_ROLES.TEACHER} />)}
                >
                  Unlock Feature
                </Button>
              )}
            </Stack>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {["Id", "Title", "Status"].map((val, i) => (
                      <TableCell key={i}>{val}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        <Atom color={COLORS.PRIMARY_NAVY} size={"small"} />
                      </TableCell>
                    </TableRow>
                  ) : innovationData && innovationData.length > 0 ? (
                    innovationData.map((val, i) => (
                      <TableRow key={i}>
                        <TableCell>{val.displayId}</TableCell>
                        <TableCell>
                          <Link
                            href={`/dashboard/educator/innovation-management/innovation-details/${val.id}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                color: COLORS.PRIMARY_NAVY,
                                fontWeight: 500,
                                fontSize: 15,
                                textDecoration: "underline",
                                textTransform: "capitalize",
                              }}
                            >
                              {val.title}
                            </Typography>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={val.status}
                            sx={{
                              backgroundColor:
                                val.status === USER_STATUS.PENDING.toUpperCase()
                                  ? COLORS.ACCENT_TAN
                                  : "red",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        No innovations found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Box>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default InnovationList;
