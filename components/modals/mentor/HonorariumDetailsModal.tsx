"use client";
import { useGetHonorariumDetails } from "@/hooks/mentor/useRequestHonorarium";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { CircularProgress, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

const detailLabelSx = {
  fontFamily: montserrat.style.fontFamily,
  fontWeight: 600,
  fontSize: 13,
  color: "#666",
};

const detailValueSx = {
  fontFamily: roboto.style.fontFamily,
  fontSize: 14,
  fontWeight: 500,
};

interface DetailRowProps {
  label: string;
  value: string | undefined;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography sx={detailLabelSx}>{label}</Typography>
    <Typography sx={detailValueSx}>{value || "-"}</Typography>
  </Grid>
);

interface HonorariumDetailsModalProps {
  id: string;
}

const HonorariumDetailsModal = ({ id }: HonorariumDetailsModalProps) => {
  const { details, fetchHonorariumDetails, loading } =
    useGetHonorariumDetails();

  useEffect(() => {
    fetchHonorariumDetails(id);
  }, [id]);

  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ py: 4 }}>
        <CircularProgress />
        <Typography
          sx={{
            mt: 2,
            fontFamily: roboto.style.fontFamily,
            fontSize: 14,
          }}
        >
          Loading details...
        </Typography>
      </Stack>
    );
  }

  if (!details) {
    return (
      <Typography
        align="center"
        sx={{ py: 4, fontFamily: roboto.style.fontFamily, color: "#999" }}
      >
        No details available
      </Typography>
    );
  }

  const creatorName = details.creator
    ? `${details.creator.firstName || ""} ${details.creator.lastName || ""}`.trim() || details.creator.email
    : "-";

  return (
    <>
      <Typography
        sx={{
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          fontSize: 20,
          color: COLORS.PRIMARY_NAVY,
          mb: 2,
        }}
      >
        Honorarium Details
      </Typography>
      <Grid container spacing={2.5}>
        <DetailRow
          label="Team"
          value={
            details.team?.title
              ? `${details.team.title} (${details.team.teamCode || ""})`
              : details.teamName
          }
        />
        <DetailRow label="School" value={details.school?.name} />
        <DetailRow label="Requested By" value={creatorName} />
        <DetailRow label="Type" value={details.type} />
        <DetailRow label="Achievement" value={details.achievementType} />
        <DetailRow label="Status" value={details.status} />
        <DetailRow
          label="Amount"
          value={details.amount !== null && details.amount !== undefined ? `₹${details.amount}` : "Pending Approval"}
        />
        <DetailRow
          label="Date Requested"
          value={
            details.createdAt
              ? new Date(details.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : undefined
          }
        />
        <Grid size={12}>
          <Typography sx={detailLabelSx}>Description</Typography>
          <Typography sx={detailValueSx}>{details.description || "-"}</Typography>
        </Grid>

        <Grid size={12}>
          <Divider sx={{ my: 1 }} />
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: 15,
              color: COLORS.PRIMARY_NAVY,
              mb: 1.5,
            }}
          >
            Bank Details
          </Typography>
        </Grid>

        <DetailRow
          label="Account Holder"
          value={details.accountHolderName}
        />
        <DetailRow label="Bank Name" value={details.bankName} />
        <DetailRow label="Account Number" value={details.accountNumber} />
        <DetailRow label="IFSC Code" value={details.ifscCode} />
        <DetailRow label="Branch Name" value={details.branchName} />
      </Grid>
    </>
  );
};

export default HonorariumDetailsModal;
