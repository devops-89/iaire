import React from "react";
import {
  Card,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { Ticket } from "./TicketDetailsDrawer";
import { COLORS, SUPPORT_TICKET_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { SUPPORT_TICKET_HEADER, getCategoryLabel } from "@/utils/constant";

interface SupportTicketTableProps {
  loading: boolean;
  tickets: Ticket[];
  onTicketClick: (ticket: Ticket) => void;
}

const SupportTicketTable: React.FC<SupportTicketTableProps> = ({
  loading,
  tickets,
  onTicketClick,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
        border: "1px solid #e0e0e0",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {SUPPORT_TICKET_HEADER.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: 15,
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
                <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                  <CircularProgress
                    size={30}
                    sx={{ color: COLORS.PRIMARY_NAVY }}
                  />
                </TableCell>
              </TableRow>
            ) : tickets.length > 0 ? (
              tickets.map((ticket) => (
                <TableRow
                  key={ticket.id}
                  hover
                  onClick={() => onTicketClick(ticket)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell
                    sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}
                  >
                    TKT-{ticket.displayId || ticket.id}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>
                    {ticket.subject}
                  </TableCell>
                  <TableCell>{getCategoryLabel(ticket.category)}</TableCell>
                  <TableCell>
                    {moment(ticket.createdAt).format("DD-MMM-YYYY")}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={ticket.priority}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        borderRadius: "6px",
                        fontSize: "12px",
                        ...(ticket.priority === "HIGH" && {
                          bgcolor: "#FEF2F2",
                          color: "#EF4444",
                        }),
                        ...(ticket.priority === "MEDIUM" && {
                          bgcolor: "#FFFBEB",
                          color: "#F59E0B",
                        }),
                        ...(ticket.priority === "LOW" && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={ticket.status.replace("_", " ")}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        borderRadius: "6px",
                        fontSize: "12px",
                        ...(ticket.status === SUPPORT_TICKET_STATUS.OPEN && {
                          bgcolor: "#EFF6FF",
                          color: "#3B82F6",
                        }),
                        ...(ticket.status ===
                          SUPPORT_TICKET_STATUS.IN_PROGRESS && {
                          bgcolor: "#FFFBEB",
                          color: "#F59E0B",
                        }),
                        ...(ticket.status ===
                          SUPPORT_TICKET_STATUS.RESOLVED && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                        ...(ticket.status === SUPPORT_TICKET_STATUS.CLOSED && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                        ...(ticket.status ===
                          SUPPORT_TICKET_STATUS.REOPENED && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                  No support tickets found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SupportTicketTable;
