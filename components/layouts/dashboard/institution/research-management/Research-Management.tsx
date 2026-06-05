import Breadcrumb from "@/components/widgets/Breadcrumb";
import { RESEARCH_DATA, RESEARCH_HEADER } from "@/utils/constant";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { aloeveraDisplay_medium, roboto } from "@/utils/fonts";
import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
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
import Link from "next/link";
import React from "react";

const ResearchManagement = () => {
  return (
    <Box>
      <Box>
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
              {RESEARCH_DATA.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.topic}</TableCell>
                  <TableCell>{item.date}</TableCell>
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
      </Box>
    </Box>
  );
};

export default ResearchManagement;
