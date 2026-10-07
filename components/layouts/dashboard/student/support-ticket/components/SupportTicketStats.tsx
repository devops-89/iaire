import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ConfirmationNumber, ContactSupport, Feedback } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";

interface SupportTicketStatsProps {
  totalCount: number;
  openCount: number;
  resolvedCount: number;
}

const SupportTicketStats: React.FC<SupportTicketStatsProps> = ({
  totalCount,
  openCount,
  resolvedCount,
}) => {
  return (
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
  );
};

export default SupportTicketStats;
