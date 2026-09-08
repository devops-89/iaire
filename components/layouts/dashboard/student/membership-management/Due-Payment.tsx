import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Stack,
  Chip,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  InfoOutlined,
  CheckCircle,
  WorkspacePremium,
} from "@mui/icons-material";
import { roboto, montserrat } from "@/utils/fonts";
import { COLORS, USER_STATUS, USER_ROLES } from "@/utils/enum";
import moment from "moment";
import { useModal } from "@/store/useModal";
import { useMakePayment } from "@/hooks/common/useCreatePayment";
import Plans from "@/components/modals/common/Plans";
import BeamButton from "@/components/widgets/BeamButton";
import {
  glassCardStyle,
  navyGradient,
  goldGradient,
  glassBorder,
} from "./styles";

interface DuePaymentProps {
  isMember: boolean;
  activeMembership: any;
  studentData: any;
  planData: any[];
  planLoading: boolean;
  handleDownloadCertificate: () => void;
}

const DuePayment: React.FC<DuePaymentProps> = ({
  isMember,
  activeMembership,
  studentData,
  planData,
  planLoading,
  handleDownloadCertificate,
}) => {
  const { showModal } = useModal();
  const { makePayment, loading: paymentLoading } = useMakePayment();

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={4}>
            {isMember ? (
              // Digital Membership Pass Card (Active)
              <Card
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  background: navyGradient,
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(26, 40, 71, 0.15)",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-20%",
                    right: "-20%",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    background: "rgba(223, 186, 115, 0.08)",
                    pointerEvents: "none",
                  },
                }}
              >
                <Stack spacing={4}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 800,
                        fontFamily: roboto.style.fontFamily,
                        color: "#DFBA73",
                        letterSpacing: "1px",
                      }}
                    >
                      IAIRE ACADEMY PASS
                    </Typography>
                    <Chip
                      icon={
                        <WorkspacePremium
                          sx={{ color: "#1A2847 !important" }}
                        />
                      }
                      label="ACTIVE"
                      sx={{
                        bgcolor: "#DFBA73",
                        color: "#1A2847",
                        fontWeight: 800,
                        px: 1,
                      }}
                    />
                  </Stack>

                  <Box sx={{ my: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255,255,255,0.6)",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                      }}
                    >
                      MEMBER LEVEL
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        fontFamily: roboto.style.fontFamily,
                        textTransform: "capitalize",
                        color: "#fff",
                        mt: 0.5,
                      }}
                    >
                      {activeMembership?.membership?.type?.replace("-", " ") ||
                        "Student Member"}
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid size={6}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.5)",
                          fontWeight: 600,
                        }}
                      >
                        PASSCODE / MEMBERSHIP ID
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontFamily: montserrat.style.fontFamily,
                        }}
                      >
                        {activeMembership?.membership?.membershipCode || "N/A"}
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.5)",
                          fontWeight: 600,
                        }}
                      >
                        EXPIRATION DATE
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontFamily: montserrat.style.fontFamily,
                        }}
                      >
                        {activeMembership?.membership?.expiryDate
                          ? moment(
                              activeMembership.membership.expiryDate,
                            ).format("DD-MMMM-YYYY")
                          : "Non-Expiring"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Card>
            ) : (
              // Due Payment Action Card
              <Card sx={glassCardStyle}>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "12px",
                        background: "rgba(245, 158, 11, 0.1)",
                        display: "flex",
                      }}
                    >
                      <InfoOutlined sx={{ color: "#F59E0B" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontFamily: roboto.style.fontFamily,
                        color: COLORS.PRIMARY_NAVY,
                      }}
                    >
                      Membership Payment Outstanding
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Your student membership is currently inactive. Complete your
                    annual dues payment to instantly unlock innovation
                    submissions, research reviews, playbooks, and certificates.
                  </Typography>

                  <Box sx={{ borderTop: glassBorder, pt: 3 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 3 }}
                    >
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontWeight: 600 }}
                        >
                          MEMBERSHIP FEE
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            color: COLORS.PRIMARY_NAVY,
                            fontFamily: roboto.style.fontFamily,
                          }}
                        >
                          $
                          {planLoading
                            ? "--"
                            : (planData?.[0]?.price ?? "99.00")}{" "}
                          <Typography
                            component="span"
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            /year
                          </Typography>
                        </Typography>
                      </Box>
                      <Chip
                        label="UNPAID"
                        color="warning"
                        sx={{ fontWeight: 800 }}
                      />
                    </Stack>

                    <BeamButton
                      fullWidth
                      variant="contained"
                      sx={{
                        background: goldGradient,
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: 16,
                        p: 1.8,
                        borderRadius: "14px",
                        textTransform: "none",
                        boxShadow: "0 10px 20px rgba(223, 186, 115, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 12px 24px rgba(223, 186, 115, 0.3)",
                        },
                      }}
                      disabled={paymentLoading || planLoading}
                      onClick={() => {
                        if (planData?.[0]?.id) {
                          makePayment({
                            planId: planData[0].id,
                            userId: studentData?.id,
                          });
                        }
                      }}
                    >
                      {paymentLoading
                        ? "Processing..."
                        : "Pay Dues & Activate Membership"}
                    </BeamButton>
                  </Box>
                </Stack>
              </Card>
            )}

            {/* Certificate Download Card */}
            {isMember && (
              <Card sx={glassCardStyle}>
                <Stack spacing={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontFamily: roboto.style.fontFamily,
                      color: COLORS.PRIMARY_NAVY,
                    }}
                  >
                    Certificate Download
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Download your official IAIRE Membership Certificate to
                    showcase your academic standing and credentials.
                  </Typography>
                  <BeamButton
                    variant="contained"
                    sx={{
                      background: goldGradient,
                      color: "#fff",
                      fontWeight: 800,
                      p: 1.8,
                      borderRadius: "14px",
                      textTransform: "none",
                      boxShadow: "0 10px 20px rgba(223, 186, 115, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.01)",
                        boxShadow: "0 12px 24px rgba(223, 186, 115, 0.2)",
                      },
                    }}
                    onClick={handleDownloadCertificate}
                  >
                    Download Membership Certificate
                  </BeamButton>
                </Stack>
              </Card>
            )}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          {/* Membership Privileges */}
          <Card sx={{ ...glassCardStyle, border: glassBorder }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontFamily: roboto.style.fontFamily,
                color: COLORS.PRIMARY_NAVY,
                mb: 3,
              }}
            >
              Access & Privileges
            </Typography>

            <Stack spacing={2.5}>
              {(
                planData?.[0]?.limits?.map((limit: any) =>
                  limit.key
                    .replace(/_/g, " ")
                    .toLowerCase()
                    .replace(/\b\w/g, (c: string) => c.toUpperCase()),
                ) || []
              ).map((privilege: string, i: number) => (
                <Stack
                  key={i}
                  direction="row"
                  spacing={1.8}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "rgba(223, 186, 115, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.2,
                    }}
                  >
                    <CheckCircle sx={{ color: "#C5A059", fontSize: 16 }} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontFamily: montserrat.style.fontFamily,
                      color: "text.primary",
                    }}
                  >
                    {privilege}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>

        <Grid size={12}>
          {/* Payment History */}
          <Card sx={glassCardStyle}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontFamily: roboto.style.fontFamily,
                color: COLORS.PRIMARY_NAVY,
                mb: 3,
              }}
            >
              Payment & Billing Records
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      "& th": {
                        borderBottom: "2px solid rgba(0,0,0,0.06)",
                        fontWeight: 700,
                      },
                    }}
                  >
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                      Invoice / Code
                    </TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                      Membership Type
                    </TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                      Billing Date
                    </TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                      Dues Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData?.payments && studentData.payments.length > 0 ? (
                    studentData.payments.map((payment: any, index: number) => (
                      <TableRow
                        key={payment.id || index}
                        hover
                        sx={{
                          "& td": {
                            borderBottom: "1px solid rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        <TableCell
                          sx={{
                            fontFamily: montserrat.style.fontFamily,
                            fontWeight: 600,
                          }}
                        >
                          {payment.membership?.membershipCode || "-"}
                        </TableCell>
                        <TableCell
                          sx={{
                            textTransform: "capitalize",
                            fontFamily: montserrat.style.fontFamily,
                          }}
                        >
                          {payment.membership?.type?.replace("-", " ") ||
                            "Student Membership"}
                        </TableCell>
                        <TableCell
                          sx={{ fontFamily: montserrat.style.fontFamily }}
                        >
                          {payment.createdAt
                            ? moment(payment.createdAt).format("DD-MMMM-YYYY")
                            : "-"}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={payment.status || "UNPAID"}
                            size="small"
                            sx={{
                              fontWeight: 800,
                              fontSize: "11px",
                              textTransform: "uppercase",
                              ...(payment.status?.toUpperCase() ===
                              USER_STATUS.ACTIVE.toUpperCase()
                                ? { bgcolor: "#ECFDF5", color: "#10B981" }
                                : { bgcolor: "#FFFBEB", color: "#F59E0B" }),
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        align="center"
                        sx={{ py: 6, color: "text.secondary" }}
                      >
                        No payment invoices found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DuePayment;
