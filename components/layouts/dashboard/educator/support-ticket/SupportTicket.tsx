"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Add,
  ConfirmationNumber,
  ContactSupport,
  Feedback,
  Search,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useModal } from "@/store/useModal";
import RaiseSupportTicketModal from "@/components/modals/mentor/RaiseSupportTicketModal";
import { useGetAllSupportTickets } from "@/hooks/mentor/useTeacherSupport";
import TicketDetailsDrawer, { Ticket } from "./components/TicketDetailsDrawer";
import { CATEGORY_OPTIONS, SUPPORT_TICKET_HEADER } from "@/utils/constant";
import BeamButton from "@/components/widgets/BeamButton";

const getCategoryLabel = (cat: string) => {
  const map: Record<string, string> = {
    TECHNICAL_SUPPORT: "Technical Support",
    TRAINING: "Training",
    RESOURCE_ACCESS: "Resource Access",
    BILLING: "Billing",
    OTHER: "Other",
  };
  return map[cat] || cat;
};

const SupportTicket = () => {
  const { showModal } = useModal();
  const { tickets, fetchTickets, loading } = useGetAllSupportTickets();
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleTicketRaised = () => {
    fetchTickets();
  };

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseDrawer = () => {
    setSelectedTicket(null);
  };

  // Stats calculation
  const totalCount = Array.isArray(tickets) ? tickets.length : 0;
  const openCount = Array.isArray(tickets)
    ? tickets.filter((t) => t?.status === "OPEN").length
    : 0;
  const resolvedCount = Array.isArray(tickets)
    ? tickets.filter((t) => t?.status === "RESOLVED").length
    : 0;

  // Filter and search logic
  const filteredTickets = Array.isArray(tickets)
    ? tickets.filter((t) => {
        const matchesSearch =
          (t?.subject?.toLowerCase() || "").includes(
            searchTerm.toLowerCase(),
          ) ||
          String(t?.id || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory =
          categoryFilter === "ALL" ||
          t?.category === categoryFilter ||
          getCategoryLabel(t?.category || "") ===
            getCategoryLabel(categoryFilter);
        return matchesSearch && matchesCategory;
      })
    : [];

  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: 1 }}>
        {/* Header & Breadcrumb */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Breadcrumb
            title="Request Support"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard",
              },
              {
                title: "Request Support",
                href: "/dashboard/educator/support-ticket",
              },
            ]}
          />
          <BeamButton
            variant="contained"
            startIcon={<Add />}
            onClick={() =>
              showModal(
                <RaiseSupportTicketModal onTicketRaised={handleTicketRaised} />,
              )
            }
            sx={{
              backgroundColor: COLORS.PRIMARY_NAVY,
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "10px",
              padding: "10px 24px",
              "&:hover": {
                backgroundColor: COLORS.PRIMARY_NAVY,
                opacity: 0.9,
              },
            }}
          >
            Raise Support Ticket
          </BeamButton>
        </Stack>

        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: "16px",
                border: "1px solid #e0e0e0",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", p: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(248, 93, 0, 0.08)",
                    p: 2,
                    borderRadius: "12px",
                    mr: 2,
                    color: COLORS.PRIMARY_NAVY,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ConfirmationNumber sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Total Tickets
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {totalCount}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: "16px",
                border: "1px solid #e0e0e0",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", p: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(245, 158, 11, 0.08)",
                    p: 2,
                    borderRadius: "12px",
                    mr: 2,
                    color: "#F59E0B",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ContactSupport sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Open Tickets
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {openCount}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: "16px",
                border: "1px solid #e0e0e0",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", p: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(16, 185, 129, 0.08)",
                    p: 2,
                    borderRadius: "12px",
                    mr: 2,
                    color: "#10B981",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Feedback sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Resolved Tickets
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {resolvedCount}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Filter / Search Bar */}
        <Card
          sx={{
            p: 3,
            mb: 4,
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
            border: "1px solid #e0e0e0",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search ticket by ID or Subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                label="Category Filter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <MenuItem value="ALL">All Categories</MenuItem>
                {CATEGORY_OPTIONS.map((cat) => (
                  <MenuItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Card>

        {/* Tickets Table */}
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
                ) : filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket) => (
                    <TableRow
                      key={ticket.id}
                      hover
                      onClick={() => handleTicketClick(ticket)}
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
                          label={ticket.status}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            borderRadius: "6px",
                            fontSize: "12px",
                            ...(ticket.status === "OPEN" && {
                              bgcolor: "#EFF6FF",
                              color: "#3B82F6",
                            }),
                            ...(ticket.status === "IN_PROGRESS" && {
                              bgcolor: "#FFFBEB",
                              color: "#F59E0B",
                            }),
                            ...(ticket.status === "RESOLVED" && {
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

        {/* Drawer for Ticket details */}
        <TicketDetailsDrawer
          ticket={selectedTicket}
          open={!!selectedTicket}
          onClose={handleCloseDrawer}
        />
      </Box>
    </EducatorDashboardLayout>
  );
};
export default SupportTicket;
