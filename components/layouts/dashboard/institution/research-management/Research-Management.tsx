import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import { RESEARCH_HEADER } from "@/utils/constant";
import { COLORS, PLAN_STATUS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { aloeveraDisplay_medium, roboto } from "@/utils/fonts";
import { Add, Delete, Edit, Lock } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React, { useEffect } from "react";
import Plans from "@/components/modals/common/Plans";

const ResearchManagement = () => {
  const { showModal } = useModal();
  const { institutionData } = useSignup();
  const isMember =
    (institutionData?.payments || []).length > 0 &&
    (institutionData?.payments || []).some(
      (val) => val?.status === PLAN_STATUS.SUCCESS,
    );

  const { researchData, fetchResearchData, loading } = useGetAllResearch();

  useEffect(() => {
    fetchResearchData();
  }, []);

  console.log("first", researchData);

  return (
    <Box>
      <Card sx={{ p: 2 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="Research Submissions"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Research Submissions",
                href: "/dashboard/institution/research-submission",
              },
            ]}
          />
          {isMember ? (
            <Link
              href="/dashboard/institution/research-submission/add-research"
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
              }}
              endIcon={<Lock />}
              onClick={() => showModal(<Plans role={USER_ROLES.SCHOOL} />)}
            >
              Unlock Feature
            </Button>
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
                    }}
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {researchData?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
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
                  <TableCell>
                    <IconButton>
                      <Edit fontSize="small" sx={{ color: COLORS.BLACK }} />
                    </IconButton>
                    <IconButton>
                      <Delete fontSize="small" sx={{ color: COLORS.BLACK }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default ResearchManagement;
