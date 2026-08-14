"use client";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InstitutionDashboardLayout from "../Index";
import { roboto, montserrat, inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { useGetUserDetailsById } from "@/hooks/common/getUserDetails";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowBack,
  Email,
  Phone,
  School,
  Work,
  Badge,
  CreditCard,
  Group,
  CheckCircle,
  Cancel,
} from "@mui/icons-material";
import ProfileCard from "./components/Profile-Card";
import { EDUCATOR_DETAILS_RESPONSE } from "@/utils/type";
import BeamButton from "@/components/widgets/BeamButton";
import { useModal } from "@/store/useModal";
import IssueNocModal from "@/components/modals/school/IssueNocModal";

const EducatorDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.slug as string;
  const { showModal } = useModal();

  const { data, loading } = useGetUserDetailsById(id);
  const educator = data as any;

  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.split(" ");
    return parts
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <InstitutionDashboardLayout>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            position: { xs: "static", md: "sticky" },
            top: { xs: "auto", md: "140px" },
            alignSelf: "flex-start",
            height: "calc(100vh - 150px)",
            overflowY: "auto",
          }}
        >
          <ProfileCard data={data as EDUCATOR_DETAILS_RESPONSE} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={4}>
            <Box>
              <BeamButton
                startIcon={<ArrowBack />}
                onClick={() => router.back()}
              >
                Back to Educator Management
              </BeamButton>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h4"
                  className={montserrat.className}
                  sx={{ fontWeight: 700 }}
                >
                  Educator Details
                </Typography>
                <BeamButton onClick={() => showModal(<IssueNocModal educatorId={id} />)}>
                  Issue NOC
                </BeamButton>
              </Stack>
            </Box>

            <Divider sx={{ my: 1 }} />

            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight={300}
              >
                <CircularProgress />
              </Box>
            ) : educator ? (
              <>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Card
                      elevation={0}
                      sx={{ border: "1px solid #e0e0e0", borderRadius: "12px" }}
                    >
                      <CardContent>
                        <Typography
                          className={montserrat.className}
                          sx={{
                            fontWeight: 700,
                            fontSize: "16px",
                            mb: 3,
                          }}
                        >
                          About
                        </Typography>
                        <Divider />
                        <List sx={{ py: 2, px: 1 }}>
                          <ListItem
                            disableGutters
                            sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}
                          >
                            <ListItemAvatar>
                              <Email
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  EMAIL ADDRESS
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  sx={{ fontSize: "14px", fontWeight: 500 }}
                                >
                                  {educator?.email || "-"}
                                </Typography>
                              }
                            />
                          </ListItem>
                          <ListItem
                            disableGutters
                            sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}
                          >
                            <ListItemAvatar>
                              <Phone
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  PHONE NUMBER
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  sx={{ fontSize: "14px", fontWeight: 500 }}
                                >
                                  {educator?.phone
                                    ? educator.phone.startsWith("+")
                                      ? educator.phone
                                      : `+${educator.phone}`
                                    : "-"}
                                </Typography>
                              }
                            />
                          </ListItem>
                          <ListItem
                            disableGutters
                            sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}
                          >
                            <ListItemAvatar>
                              <Badge
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  ROLE & CATEGORY
                                </Typography>
                              }
                              secondary={
                                <Stack spacing={1}>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    {educator?.role || "-"}
                                  </Typography>
                                  <Chip
                                    label={educator?.category || "-"}
                                    size="small"
                                    sx={{
                                      backgroundColor: "#F1F5F9",
                                      fontSize: "11px",
                                      fontWeight: 600,
                                      width: "fit-content",
                                    }}
                                  />
                                </Stack>
                              }
                            />
                          </ListItem>
                          <ListItem disableGutters sx={{ py: 1.5 }}>
                            <ListItemAvatar>
                              <CreditCard
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  MEMBERSHIP CODE
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  sx={{ fontSize: "14px", fontWeight: 500 }}
                                >
                                  {educator?.payments?.[0]?.membership
                                    ?.membershipCode ||
                                    educator?.membershipCode ||
                                    "-"}
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Card
                      elevation={0}
                      sx={{ border: "1px solid #e0e0e0", borderRadius: "12px" }}
                    >
                      <CardContent>
                        <Typography
                          className={montserrat.className}
                          sx={{
                            fontWeight: 700,
                            fontSize: "16px",
                            mb: 3,
                          }}
                        >
                          Institution Details
                        </Typography>
                        <Divider />
                        <List sx={{ py: 2, px: 1 }}>
                          <ListItem
                            disableGutters
                            sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}
                          >
                            <ListItemAvatar>
                              <School
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  SCHOOL / INSTITUTION NAME
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  sx={{ fontSize: "14px", fontWeight: 500 }}
                                >
                                  {educator?.school?.name ||
                                    educator?.institution?.name ||
                                    "-"}
                                </Typography>
                              }
                            />
                          </ListItem>
                          <ListItem
                            disableGutters
                            sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}
                          >
                            <ListItemAvatar>
                              <Badge
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  BOARD / AFFILIATION
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  sx={{ fontSize: "14px", fontWeight: 500 }}
                                >
                                  {educator?.board?.name ||
                                    educator?.boardId ||
                                    "-"}
                                </Typography>
                              }
                            />
                          </ListItem>
                          <ListItem disableGutters sx={{ py: 1.5 }}>
                            <ListItemAvatar>
                              <Work
                                sx={{
                                  color: "#757575",
                                  backgroundColor: "#F1F5F9",
                                  p: 1,
                                  borderRadius: "8px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "12px", color: "#757575" }}
                                >
                                  LOCATION
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  sx={{ fontSize: "14px", fontWeight: 500 }}
                                >
                                  {educator?.school?.city
                                    ? `${educator.school.city}, ${educator.school.state || ""}`
                                    : "-"}
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                {/* Membership & Payments Section */}
                <Card
                  sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}
                  elevation={0}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      mb={2}
                    >
                      <CreditCard sx={{ color: COLORS.PRIMARY_NAVY }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontWeight: 700,
                          color: COLORS.PRIMARY_BLUE,
                          fontSize: "16px",
                        }}
                      >
                        Membership &amp; Payment History
                      </Typography>
                    </Stack>
                    <Divider />

                    {!educator.payments || educator.payments.length === 0 ? (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontStyle: "italic", mt: 2 }}
                      >
                        No payment history found.
                      </Typography>
                    ) : (
                      <Stack spacing={3} mt={2}>
                        {educator.payments.map((payment: any) => (
                          <Box
                            key={payment.id}
                            sx={{
                              p: 3,
                              borderRadius: "12px",
                              backgroundColor: "#fcfdfe",
                              border: "1px solid #edf1f4",
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ display: "block", mb: 0.5 }}
                                >
                                  PLAN NAME
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 600,
                                    color: COLORS.PRIMARY_BLUE,
                                  }}
                                >
                                  {payment.plan?.name || "N/A"}
                                </Typography>
                              </Grid>

                              <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ display: "block", mb: 0.5 }}
                                >
                                  MEMBERSHIP CODE
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontFamily: inter.style.fontFamily }}
                                >
                                  {payment.membership?.membershipCode || "N/A"}
                                </Typography>
                              </Grid>

                              <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ display: "block", mb: 0.5 }}
                                >
                                  PAYMENT STATUS
                                </Typography>
                                <Chip
                                  label={payment.status}
                                  size="small"
                                  icon={
                                    payment.status?.toUpperCase() ===
                                    "SUCCESS" ? (
                                      <CheckCircle
                                        style={{ color: "#2e7d32" }}
                                      />
                                    ) : (
                                      <Cancel style={{ color: "#c62828" }} />
                                    )
                                  }
                                  sx={{
                                    backgroundColor:
                                      payment.status?.toUpperCase() ===
                                      "SUCCESS"
                                        ? "#e8f5e9"
                                        : "#ffebee",
                                    color:
                                      payment.status?.toUpperCase() ===
                                      "SUCCESS"
                                        ? "#2e7d32"
                                        : "#c62828",
                                    fontWeight: 600,
                                  }}
                                />
                              </Grid>

                              <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ display: "block", mb: 0.5 }}
                                >
                                  AMOUNT
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: 600 }}
                                >
                                  {payment.amount
                                    ? `${payment.amount.toFixed(2)} ${payment.currency}`
                                    : "N/A"}
                                </Typography>
                              </Grid>

                              <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ display: "block", mb: 0.5 }}
                                >
                                  ACTIVATED DATE
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "13px" }}
                                >
                                  {payment.membership?.activatedAt
                                    ? new Date(
                                        payment.membership.activatedAt,
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })
                                    : "N/A"}
                                </Typography>
                              </Grid>

                              <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ display: "block", mb: 0.5 }}
                                >
                                  EXPIRY DATE
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "13px" }}
                                >
                                  {payment.membership?.expiryDate
                                    ? new Date(
                                        payment.membership.expiryDate,
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })
                                    : "N/A"}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </>
            ) : (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No educator details found.
                </Typography>
              </Box>
            )}
          </Stack>
        </Grid>
      </Grid>
    </InstitutionDashboardLayout>
  );
};

export default EducatorDetails;
