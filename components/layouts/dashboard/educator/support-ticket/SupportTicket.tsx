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
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
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
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

interface Ticket {
  id: string;
  subject: string;
  category: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  description: string;
  createdAt: string;
}

const DEFAULT_TICKETS: Ticket[] = [
  {
    id: "TKT-1002",
    subject: "Unable to access playbooks in resources",
    category: "Resource Access",
    priority: "HIGH",
    status: "OPEN",
    description:
      "When I try to download the playbooks under Resource Access, I get a blank screen. My subscription is active.",
    createdAt: "2026-06-22T10:00:00.000Z",
  },
  {
    id: "TKT-1001",
    subject: "Batch rescheduling inquiry",
    category: "Training",
    priority: "MEDIUM",
    status: "RESOLVED",
    description:
      "I would like to shift my scheduled training session from July 1st to July 15th due to university exams.",
    createdAt: "2026-06-18T14:30:00.000Z",
  },
];

const CATEGORIES = ["Technical Support", "Training", "Resource Access", "Billing", "Other"];

const SupportTicket = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");

  // Form states
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Technical Support");
  const [priority, setPriority] = useState<"LOW" | "MEDIUM" | "HIGH">("MEDIUM");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem("educator_support_tickets");
    if (stored) {
      setTickets(JSON.parse(stored));
    } else {
      localStorage.setItem(
        "educator_support_tickets",
        JSON.stringify(DEFAULT_TICKETS),
      );
      setTickets(DEFAULT_TICKETS);
    }
  }, []);

  const saveTickets = (updatedTickets: Ticket[]) => {
    localStorage.setItem(
      "educator_support_tickets",
      JSON.stringify(updatedTickets),
    );
    setTickets(updatedTickets);
  };

  const handleOpenAddDialog = () => {
    setSubject("");
    setCategory("Technical Support");
    setPriority("MEDIUM");
    setDescription("");
    setFormErrors({});
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!description.trim()) errors.description = "Description is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRaiseTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newTicket: Ticket = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: subject.trim(),
      category,
      priority,
      status: "OPEN",
      description: description.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newTicket, ...tickets];
    saveTickets(updated);
    handleCloseAddDialog();
  };

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseDrawer = () => {
    setSelectedTicket(null);
  };

  // Stats calculation
  const totalCount = tickets.length;
  const openCount = tickets.filter((t) => t.status === "OPEN").length;
  const resolvedCount = tickets.filter((t) => t.status === "RESOLVED").length;

  // Filter and search logic
  const filteredTickets = tickets.filter((t) => {
    const matchesSearch =
      t.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "ALL" || t.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

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
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleOpenAddDialog}
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
          </Button>
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
                    bgcolor: "rgba(1, 90, 80, 0.08)",
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
                {CATEGORIES.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
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
                  <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Ticket ID</TableCell>
                  <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Subject</TableCell>
                  <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Category</TableCell>
                  <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Date Created</TableCell>
                  <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Priority</TableCell>
                  <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket) => (
                    <TableRow
                      key={ticket.id}
                      hover
                      onClick={() => handleTicketClick(ticket)}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{ticket.id}</TableCell>
                      <TableCell sx={{ fontWeight: 500 }}>{ticket.subject}</TableCell>
                      <TableCell>{ticket.category}</TableCell>
                      <TableCell>{moment(ticket.createdAt).format("DD-MMM-YYYY")}</TableCell>
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

        {/* Dialog for Raising Ticket */}
        <Dialog
          open={openAddDialog}
          onClose={handleCloseAddDialog}
          maxWidth="sm"
          fullWidth
          sx={{
            "& .MuiDialog-paper": { borderRadius: "16px", p: 1 },
          }}
        >
          <form onSubmit={handleRaiseTicket}>
            <DialogTitle
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                color: COLORS.PRIMARY_NAVY,
              }}
            >
              Raise Support Ticket
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    placeholder="Brief summary of the issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    error={!!formErrors.subject}
                    helperText={formErrors.subject}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    select
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    select
                    label="Priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                  >
                    <MenuItem value="LOW">Low</MenuItem>
                    <MenuItem value="MEDIUM">Medium</MenuItem>
                    <MenuItem value="HIGH">High</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    placeholder="Provide details about the issue you are facing..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    error={!!formErrors.description}
                    helperText={formErrors.description}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button
                onClick={handleCloseAddDialog}
                sx={{
                  color: "#6b7280",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  fontFamily: montserrat.style.fontFamily,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    opacity: 0.9,
                  },
                }}
              >
                Submit Ticket
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Drawer for Ticket details */}
        <Drawer
          anchor="right"
          open={!!selectedTicket}
          onClose={handleCloseDrawer}
          PaperProps={{
            sx: { width: { xs: "100%", sm: 480 }, p: 4 },
          }}
        >
          {selectedTicket && (
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                Ticket Details
              </Typography>
              <Divider />
              <Box>
                <Typography variant="caption" color="text.secondary">
                  TICKET ID
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY }}>
                  {selectedTicket.id}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  SUBJECT
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {selectedTicket.subject}
                </Typography>
              </Box>
              <Stack direction="row" spacing={3}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    CATEGORY
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {selectedTicket.category}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    PRIORITY
                  </Typography>
                  <Box sx={{ mt: 0.5 }}>
                    <Chip
                      label={selectedTicket.priority}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        borderRadius: "6px",
                        fontSize: "12px",
                        ...(selectedTicket.priority === "HIGH" && {
                          bgcolor: "#FEF2F2",
                          color: "#EF4444",
                        }),
                        ...(selectedTicket.priority === "MEDIUM" && {
                          bgcolor: "#FFFBEB",
                          color: "#F59E0B",
                        }),
                        ...(selectedTicket.priority === "LOW" && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    STATUS
                  </Typography>
                  <Box sx={{ mt: 0.5 }}>
                    <Chip
                      label={selectedTicket.status}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        borderRadius: "6px",
                        fontSize: "12px",
                        ...(selectedTicket.status === "OPEN" && {
                          bgcolor: "#EFF6FF",
                          color: "#3B82F6",
                        }),
                        ...(selectedTicket.status === "IN_PROGRESS" && {
                          bgcolor: "#FFFBEB",
                          color: "#F59E0B",
                        }),
                        ...(selectedTicket.status === "RESOLVED" && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  CREATED ON
                </Typography>
                <Typography variant="body2">
                  {moment(selectedTicket.createdAt).format("DD-MMM-YYYY, hh:mm A")}
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
                  DESCRIPTION
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    bgcolor: "#f9fafb",
                    p: 2,
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {selectedTicket.description}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="outlined"
                fullWidth
                onClick={handleCloseDrawer}
                sx={{
                  textTransform: "none",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 600,
                }}
              >
                Close details
              </Button>
            </Stack>
          )}
        </Drawer>
      </Box>
    </EducatorDashboardLayout>
  );
};
export default SupportTicket;
