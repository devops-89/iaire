"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetTeam } from "@/hooks/school/useTeam";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { requestHonorariumValidationSchema } from "@/utils/validationSchema";
import {
  AccountBalance,
  AccountBalanceWallet,
  CheckCircle,
  HelpOutline,
  Work,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Chip,
  Grid,
  MenuItem,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";

interface HonorariumRequest {
  teamId: string;
  teamName: string;
  type: string;
  achievement: string;
  description: string;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branchName: string;
  createdAt: string;
}

const DEFAULT_REQUESTS: HonorariumRequest[] = [
  {
    teamId: "T-5829",
    teamName: "Alpha Squad",
    type: "Innovation",
    achievement: "Patent",
    description:
      "Successfully filed a patent for our automated smart agricultural irrigation system (Application No. 202611029837).",
    accountHolderName: "Rajesh Kumar",
    bankName: "State Bank of India",
    accountNumber: "39485728392",
    ifscCode: "SBIN0001827",
    branchName: "Delhi Main Branch",
    createdAt: "2026-06-15T09:30:00.000Z",
  },
];

const RequestHonorarium = () => {
  const [tabValue, setTabValue] = useState(0);
  const [requests, setRequests] = useState<HonorariumRequest[]>([]);
  const { fetchData, loading: teamLoading, teamData } = useGetTeam();

  useEffect(() => {
    // Fetch educator's teams
    fetchData();

    // Fetch requests from localStorage
    const stored = localStorage.getItem("educator_honorarium_requests");
    if (stored) {
      setRequests(JSON.parse(stored));
    } else {
      localStorage.setItem(
        "educator_honorarium_requests",
        JSON.stringify(DEFAULT_REQUESTS),
      );
      setRequests(DEFAULT_REQUESTS);
    }
  }, []);

  const saveRequests = (updated: HonorariumRequest[]) => {
    localStorage.setItem("educator_honorarium_requests", JSON.stringify(updated));
    setRequests(updated);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      teamId: "",
      type: "",
      achievement: "",
      description: "",
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      branchName: "",
    },
    validationSchema: requestHonorariumValidationSchema,
    onSubmit: (values) => {
      const selectedTeam = teamData?.data?.find(
        (t) => t.id.toString() === values.teamId,
      );

      const newRequest: HonorariumRequest = {
        teamId: values.teamId,
        teamName: selectedTeam ? selectedTeam.title : `Team ${values.teamId}`,
        type: values.type,
        achievement: values.achievement,
        description: values.description,
        accountHolderName: values.accountHolderName,
        bankName: values.bankName,
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        branchName: values.branchName,
        createdAt: new Date().toISOString(),
      };

      const updated = [newRequest, ...requests];
      saveRequests(updated);
      formik.resetForm();
      setTabValue(1); // Switch to History tab
    },
  });

  // Dynamically update achievements options based on type
  const getAchievementsOptions = () => {
    if (formik.values.type === "Innovation") {
      return ["Patent", "Startups"];
    }
    if (formik.values.type === "Research") {
      return ["Research Topic"];
    }
    return ["Patent", "Research Topic", "Startups"]; // Fallback
  };

  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: 1 }}>
        {/* Header & Breadcrumbs */}
        <Stack sx={{ mb: 4 }}>
          <Breadcrumb
            title="Request Honorarium"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard",
              },
              {
                title: "Request Honorarium",
                href: "/dashboard/educator/request-honorarium",
              },
            ]}
          />
        </Stack>

        <Card
          sx={{
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e0e0e0",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              borderBottom: "1px solid #e0e0e0",
              px: 3,
              pt: 2,
              "& .MuiTab-root": {
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 600,
                textTransform: "none",
                fontSize: 15,
              },
            }}
          >
            <Tab label="Request Honorarium" />
            <Tab label="Request History" />
          </Tabs>

          <Box sx={{ p: 4 }}>
            {tabValue === 0 && (
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  {/* Section 1: Honorarium Details */}
                  <Grid size={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <Work sx={{ color: COLORS.PRIMARY_NAVY }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          color: COLORS.PRIMARY_NAVY,
                        }}
                      >
                        Honorarium Request Details
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Autocomplete
                      options={teamData?.data || []}
                      getOptionLabel={(option) => `${option.title} (${option.teamCode})`}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      loading={teamLoading}
                      value={
                        teamData?.data?.find(
                          (t) => t.id.toString() === formik.values.teamId,
                        ) || null
                      }
                      onChange={(_, newValue) => {
                        formik.setFieldValue("teamId", newValue ? newValue.id.toString() : "");
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Team*"
                          error={formik.touched.teamId && !!formik.errors.teamId}
                          helperText={formik.touched.teamId && formik.errors.teamId}
                        />
                      )}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      select
                      label="Type*"
                      name="type"
                      value={formik.values.type}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("achievement", ""); // Reset achievement on type change
                      }}
                      error={formik.touched.type && !!formik.errors.type}
                      helperText={formik.touched.type && formik.errors.type}
                    >
                      <MenuItem value="Innovation">Innovation</MenuItem>
                      <MenuItem value="Research">Research</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={12}>
                    <TextField
                      fullWidth
                      select
                      label="Achievement*"
                      name="achievement"
                      disabled={!formik.values.type}
                      value={formik.values.achievement}
                      onChange={formik.handleChange}
                      error={formik.touched.achievement && !!formik.errors.achievement}
                      helperText={formik.touched.achievement && formik.errors.achievement}
                    >
                      {getAchievementsOptions().map((opt) => (
                        <MenuItem key={opt} value={opt}>
                          {opt}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Description / Supporting Notes*"
                      name="description"
                      placeholder="Provide a detailed description of the achievement..."
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      error={formik.touched.description && !!formik.errors.description}
                      helperText={formik.touched.description && formik.errors.description}
                    />
                  </Grid>

                  {/* Section 2: Bank Account Details */}
                  <Grid size={12} sx={{ mt: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <AccountBalance sx={{ color: COLORS.PRIMARY_NAVY }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          color: COLORS.PRIMARY_NAVY,
                        }}
                      >
                        Bank Account Details
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Account Holder Name*"
                      name="accountHolderName"
                      value={formik.values.accountHolderName}
                      onChange={formik.handleChange}
                      error={formik.touched.accountHolderName && !!formik.errors.accountHolderName}
                      helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Bank Name*"
                      name="bankName"
                      value={formik.values.bankName}
                      onChange={formik.handleChange}
                      error={formik.touched.bankName && !!formik.errors.bankName}
                      helperText={formik.touched.bankName && formik.errors.bankName}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Account Number*"
                      name="accountNumber"
                      value={formik.values.accountNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.accountNumber && !!formik.errors.accountNumber}
                      helperText={formik.touched.accountNumber && formik.errors.accountNumber}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="IFSC Code*"
                      name="ifscCode"
                      placeholder="e.g. SBIN0001234"
                      value={formik.values.ifscCode}
                      onChange={(e) => formik.setFieldValue("ifscCode", e.target.value.toUpperCase())}
                      error={formik.touched.ifscCode && !!formik.errors.ifscCode}
                      helperText={formik.touched.ifscCode && formik.errors.ifscCode}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Branch Name*"
                      name="branchName"
                      value={formik.values.branchName}
                      onChange={formik.handleChange}
                      error={formik.touched.branchName && !!formik.errors.branchName}
                      helperText={formik.touched.branchName && formik.errors.branchName}
                    />
                  </Grid>

                  <Grid size={12} sx={{ mt: 3 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: COLORS.PRIMARY_NAVY,
                        fontFamily: montserrat.style.fontFamily,
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "10px",
                        padding: "10px 30px",
                        "&:hover": {
                          backgroundColor: COLORS.PRIMARY_NAVY,
                          opacity: 0.9,
                        },
                      }}
                    >
                      Submit Honorarium Request
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}

            {tabValue === 1 && (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Team</TableCell>
                      <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Type</TableCell>
                      <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Achievement</TableCell>
                      <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontSize: 15, fontWeight: 600 }}>Date Requested</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {requests.length > 0 ? (
                      requests.map((req, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ fontWeight: 500 }}>{req.teamName}</TableCell>
                          <TableCell>{req.type}</TableCell>
                          <TableCell>{req.achievement}</TableCell>
                          <TableCell>{moment(req.createdAt).format("DD-MMM-YYYY")}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} align="center" sx={{ py: 6 }}>
                          No honorarium requests found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Card>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default RequestHonorarium;
