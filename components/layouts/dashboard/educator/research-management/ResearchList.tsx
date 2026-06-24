"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Plans from "@/components/modals/common/Plans";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import { RESEARCH_HEADER } from "@/utils/constant";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { aloeveraDisplay_medium, roboto } from "@/utils/fonts";
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
import moment from "moment";
import Link from "next/link";
import React, { useEffect } from "react";
import { Atom } from "react-loading-indicators";

const ResearchList = () => {
  const { showModal } = useModal();
  const { educatorData } = useSignup();

  const isMember =
    (educatorData?.payments?.length ?? 0) > 0 &&
    educatorData?.payments?.some(
      (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
    );

  const { researchData, fetchResearchData, loading } = useGetAllResearch();

  useEffect(() => {
    fetchResearchData();
  }, []);

  return (
    <EducatorDashboardLayout>
      <Box>
        <Card sx={{ p: 2, mt: 2 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ mb: 3 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: aloeveraDisplay_medium.style.fontFamily,
                fontWeight: 600,
                fontSize: 25,
                color: COLORS.BLACK,
              }}
            >
              Research Submissions
            </Typography>
            {isMember ? (
              <Link
                href="/dashboard/educator/research-management/add-research"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    color: COLORS.WHITE,
                    fontFamily: aloeveraDisplay_medium.style.fontFamily,
                    fontWeight: 600,
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
                </Button>
              </Link>
            ) : (
              <Button
                sx={{
                  backgroundColor: "#7e7e7e",
                  color: COLORS.WHITE,
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  fontWeight: 600,
                  fontSize: 16,
                  borderRadius: "10px",
                  padding: "10px 20px",
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
                  {RESEARCH_HEADER.map((item, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: 16,
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
                    <TableCell colSpan={RESEARCH_HEADER.length} align="center">
                      <Atom color={COLORS.PRIMARY_NAVY} size={"small"} />
                    </TableCell>
                  </TableRow>
                ) : researchData && researchData.length > 0 ? (
                  researchData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.displayId}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell>
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
                            ...(item.status === USER_STATUS.ACTIVE && {
                              bgcolor: "#ECFDF5",
                              color: "#10B981",
                            }),
                            ...(item.status === USER_STATUS.PENDING && {
                              bgcolor: "#FFFBEB",
                              color: "#F59E0B",
                            }),
                            ...(item.status === USER_STATUS.INACTIVE && {
                              bgcolor: "#FEF2F2",
                              color: "#EF4444",
                            }),
                            ...(item.status === USER_STATUS.BANNED && {
                              bgcolor: "#F9FAFB",
                              color: "#6B7280",
                            }),
                          }}
                        />
                      </TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={RESEARCH_HEADER.length} align="center">
                      No research submissions found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default ResearchList;
