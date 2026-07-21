"use client";
import React from "react";
import { Drawer, Stack, Typography, Divider, Box, Chip} from "@mui/material";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import moment from "moment";
import BeamButton from "@/components/widgets/BeamButton";

export interface Ticket {
  id: string;
  subject: string;
  category: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  description: string;
  createdAt: string;
}

interface TicketDetailsDrawerProps {
  ticket: Ticket | null;
  open: boolean;
  onClose: () => void;
}

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

const TicketDetailsDrawer = ({ ticket, open, onClose }: TicketDetailsDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: "100%", sm: 480 }, p: 4 },
      }}
    >
      {ticket && (
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
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY }}
            >
              {ticket.id}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              SUBJECT
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {ticket.subject}
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            <Box>
              <Typography variant="caption" color="text.secondary">
                CATEGORY
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {getCategoryLabel(ticket.category)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">
                PRIORITY
              </Typography>
              <Box sx={{ mt: 0.5 }}>
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
              </Box>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">
                STATUS
              </Typography>
              <Box sx={{ mt: 0.5 }}>
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
              </Box>
            </Box>
          </Stack>
          <Box>
            <Typography variant="caption" color="text.secondary">
              CREATED ON
            </Typography>
            <Typography variant="body2">
              {moment(ticket.createdAt).format("DD-MMM-YYYY, hh:mm A")}
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mb: 1 }}
            >
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
              {ticket.description}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <BeamButton
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              textTransform: "none",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 600,
            }}
          >
            Close details
          </BeamButton>
        </Stack>
      )}
    </Drawer>
  );
};

export default TicketDetailsDrawer;
