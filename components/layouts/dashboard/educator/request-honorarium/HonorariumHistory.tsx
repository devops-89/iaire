"use client";
import HonorariumDetailsModal from "@/components/modals/mentor/HonorariumDetailsModal";
import { useGetAllHonorariums } from "@/hooks/mentor/useRequestHonorarium";
import { useModal } from "@/store/useModal";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Visibility } from "@mui/icons-material";
import {
  CircularProgress,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

const HISTORY_COLUMNS = [
  "Team",
  "Type",
  "Achievement",
  "Status",
  "Date Requested",
  "Action",
];

const tableHeaderSx = {
  fontFamily: roboto.style.fontFamily,
  fontSize: 15,
  fontWeight: 600,
};

const tableCellSx = {
  fontFamily: roboto.style.fontFamily,
  fontSize: 14,
};

const HonorariumHistory = () => {
  const { honorariums, fetchHonorariums, loading } = useGetAllHonorariums();
  const { showModal } = useModal();

  useEffect(() => {
    fetchHonorariums();
  }, []);

  const handleViewDetails = (id: string) => {
    showModal(<HonorariumDetailsModal id={id} />);
  };

  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ py: 6 }}>
        <CircularProgress />
        <Typography sx={{ mt: 2, ...tableCellSx }}>
          Loading requests...
        </Typography>
      </Stack>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {HISTORY_COLUMNS.map((col) => (
              <TableCell key={col} sx={tableHeaderSx}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {honorariums.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                No honorarium requests found
              </TableCell>
            </TableRow>
          ) : (
            honorariums.map((item, index) => (
              <TableRow key={item.id || index} hover>
                <TableCell sx={tableCellSx}>
                  {item.teamName || item.team?.title || "-"}
                </TableCell>
                <TableCell sx={tableCellSx}>{item.type || "-"}</TableCell>
                <TableCell sx={tableCellSx}>
                  {item.achievementType || "-"}
                </TableCell>
                <TableCell sx={tableCellSx}>{item.status || "-"}</TableCell>
                <TableCell sx={tableCellSx}>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "-"}
                </TableCell>
                <TableCell>
                  <Tooltip title="View Details">
                    <IconButton
                      size="small"
                      onClick={() =>
                        handleViewDetails(item.id?.toString() || "")
                      }
                      sx={{ color: COLORS.PRIMARY_NAVY }}
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HonorariumHistory;
