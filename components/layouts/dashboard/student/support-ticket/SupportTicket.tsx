"use client";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetAllStudentSupportTickets } from "@/hooks/student/useStudentSupport";
import { SUPPORT_TICKET_STATUS } from "@/utils/enum";
import TicketDetailsDrawer, { Ticket } from "./components/TicketDetailsDrawer";
import SupportTicketHeader from "./components/SupportTicketHeader";
import SupportTicketStats from "./components/SupportTicketStats";
import SupportTicketFilter from "./components/SupportTicketFilter";
import SupportTicketTable from "./components/SupportTicketTable";
import { getCategoryLabel } from "@/utils/constant";

export { getCategoryLabel };

const SupportTicket = () => {
  const { tickets, fetchTickets, loading } = useGetAllStudentSupportTickets();
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
    ? tickets.filter((t) => t?.status === SUPPORT_TICKET_STATUS.OPEN).length
    : 0;
  const resolvedCount = Array.isArray(tickets)
    ? tickets.filter((t) => t?.status === SUPPORT_TICKET_STATUS.RESOLVED).length
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
    <StudentDashboardLayout>
      <Box sx={{ p: 1 }}>
        <SupportTicketHeader onTicketRaised={handleTicketRaised} />

        <SupportTicketStats
          totalCount={totalCount}
          openCount={openCount}
          resolvedCount={resolvedCount}
        />

        <SupportTicketFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />

        <SupportTicketTable
          loading={loading}
          tickets={filteredTickets}
          onTicketClick={handleTicketClick}
        />

        <TicketDetailsDrawer
          ticket={selectedTicket}
          open={!!selectedTicket}
          onClose={handleCloseDrawer}
        />
      </Box>
    </StudentDashboardLayout>
  );
};

export default SupportTicket;
