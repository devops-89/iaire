import React from "react";
import { Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import BeamButton from "@/components/widgets/BeamButton";
import { COLORS } from "@/utils/enum";
import { montserrat } from "@/utils/fonts";
import { useModal } from "@/store/useModal";
import RaiseSupportTicketModal from "@/components/modals/student/RaiseSupportTicketModal";

interface SupportTicketHeaderProps {
  onTicketRaised: () => void;
}

const SupportTicketHeader: React.FC<SupportTicketHeaderProps> = ({
  onTicketRaised,
}) => {
  const { showModal } = useModal();

  return (
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
            href: "/dashboard/student",
          },
          {
            title: "Request Support",
            href: "/dashboard/student/support-ticket",
          },
        ]}
      />
      <BeamButton
        variant="contained"
        startIcon={<Add />}
        onClick={() =>
          showModal(<RaiseSupportTicketModal onTicketRaised={onTicketRaised} />)
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
  );
};

export default SupportTicketHeader;
