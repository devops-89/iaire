"use client";
import { newBlack_semiBold, roboto } from "@/utils/fonts";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import EducatorDashboardLayout from "../Index";
import { useDownloadNoc, useGetAllnocs } from "@/hooks/mentor/useGetNoc";
import moment from "moment";

const NocLayout = () => {
  const { loading, getAllnocs } = useGetAllnocs();
  const { downloadNoc, loading: isDownloading } = useDownloadNoc();
  const [nocData, setNocData] = useState<any[]>([]);

  useEffect(() => {
    fetchNocs();
  }, []);

  const fetchNocs = async () => {
    try {
      const res = await getAllnocs();
      setNocData(res?.data?.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = async (id: string) => {
    try {
      const res = await downloadNoc(id);
      // Assuming the API returns a URL in res.data.data or res.data
      const downloadUrl = res?.data?.data || res?.data;
      if (typeof downloadUrl === "string" && downloadUrl.startsWith("http")) {
        window.open(downloadUrl, "_blank");
      } else {
        console.log("Download response:", res);
      }
    } catch (err) {
      console.error("Failed to download NOC", err);
    }
  };

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
                }}
              >
                NOC Management
              </Typography>
            </Stack>

            {loading ? (
              <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
              </Box>
            ) : (
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="noc table">
                  <TableHead>
                    <TableRow>
                      {[
                        "School Name",
                        "Date of Joining",
                        "Last Working Date",
                        "NOC Issue Date",
                        "Reason",
                        "Action",
                      ].map((val, i) => (
                        <TableCell key={i}>{val}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {nocData.length > 0 ? (
                      nocData.map((row: any, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{ fontFamily: roboto.style.fontFamily }}
                          >
                            {row?.user?.school?.name || "-"}
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: roboto.style.fontFamily }}
                          >
                            {row?.dateOfJoining
                              ? moment(row.dateOfJoining).format("DD MMM YYYY")
                              : "-"}
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: roboto.style.fontFamily }}
                          >
                            {row?.lastWorkingDate
                              ? moment(row.lastWorkingDate).format(
                                  "DD MMM YYYY",
                                )
                              : "-"}
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: roboto.style.fontFamily }}
                          >
                            {row?.nocIssueDate
                              ? moment(row.nocIssueDate).format("DD MMM YYYY")
                              : "-"}
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: roboto.style.fontFamily }}
                          >
                            {row?.reason || "-"}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              color="primary"
                              onClick={() => handleDownload(row?.id)}
                              disabled={isDownloading}
                            >
                              <Download />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} align="center">
                          No NOCs found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Card>
        </Box>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default NocLayout;
