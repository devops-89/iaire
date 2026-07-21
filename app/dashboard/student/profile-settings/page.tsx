"use client";
import React, { useState, useEffect } from "react";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import {
  Box,
  Typography,
  Card,
  Grid,
  Tabs,
  Tab,
  Stack,
  TextField,
  Avatar,
  CircularProgress,
  MenuItem,
  FormControl,
  InputLabel,
  Select} from "@mui/material";
import {
  Person,
  Lock,
  Mail,
  PhotoCamera,
} from "@mui/icons-material";
import { roboto, montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { useSignup } from "@/store/useSignup";
import useSnackbar from "@/store/useSnackbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import BeamButton from "@/components/widgets/BeamButton";

// Design Styling Helpers
const glassCardStyle = {
  p: 4,
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.08)",
  },
};

const goldGradient = "linear-gradient(135deg, #DFBA73 0%, #C5A059 100%)";

const ProfileSettings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const { data: studentData, setUserData } = useSignup();
  const { setSnackbar } = useSnackbar();

  // MuiTelInput local state for raw input string
  const initialPhone = studentData?.isdCode
    ? `+${studentData.isdCode}${studentData.phone}`
    : studentData?.phone || "";
  const [phoneVal, setPhoneVal] = useState(initialPhone);

  // Sync state if studentData loads asynchronously
  useEffect(() => {
    if (studentData?.phone) {
      setPhoneVal(
        studentData.isdCode
          ? `+${studentData.isdCode}${studentData.phone}`
          : studentData.phone,
      );
    }
  }, [studentData]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Edit Profile Formik
  const profileFormik = useFormik({
    initialValues: {
      firstName: studentData?.firstName || "",
      lastName: studentData?.lastName || "",
      gender: studentData?.gender ? studentData.gender.toUpperCase() : "",
      grade: studentData?.grade || "",
      profileImage: null as File | null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      gender: Yup.string().required("Gender is required"),
      grade: Yup.string().required("Grade is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        let avatarUrl = studentData?.profileImage;
        if (values.profileImage) {
          avatarUrl = URL.createObjectURL(values.profileImage);
        }

        const updated = {
          ...studentData,
          firstName: values.firstName,
          lastName: values.lastName,
          gender: values.gender,
          grade: values.grade,
          profileImage: avatarUrl,
          profileImageDownloadUrl: avatarUrl,
        };

        setUserData(updated as any);
        setSnackbar("Profile details updated successfully!", "success");
        setLoading(false);
      }, 1000);
    },
  });

  // Change Password Formik
  const passwordFormik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New password is required"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Please confirm your new password"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setTimeout(() => {
        setSnackbar("Password changed successfully!", "success");
        resetForm();
        setLoading(false);
      }, 1000);
    },
  });

  // Update Contact Formik
  const contactFormik = useFormik({
    initialValues: {
      email: studentData?.email || "",
      phone: studentData?.phone || "",
      isdCode: studentData?.isdCode || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      isdCode: Yup.string().required("ISD Code is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setTimeout(() => {
        const updated = {
          ...studentData,
          email: values.email,
          phone: values.phone,
          isdCode: values.isdCode,
        };
        setUserData(updated as any);
        setSnackbar("Contact details updated successfully!", "success");
        setLoading(false);
      }, 1000);
    },
  });

  const renderEditProfile = () => {
    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        profileFormik.setFieldValue("profileImage", event.target.files[0]);
      }
    };

    const previewUrl = profileFormik.values.profileImage
      ? URL.createObjectURL(profileFormik.values.profileImage)
      : studentData?.profileImageDownloadUrl || studentData?.profileImage || "";

    return (
      <form onSubmit={profileFormik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 2 }}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={previewUrl}
                sx={{
                  width: 140,
                  height: 140,
                  bgcolor: COLORS.ACCENT_TAN,
                  color: COLORS.PRIMARY_NAVY,
                  border: `4px solid ${COLORS.PRIMARY_NAVY}`,
                  fontSize: 48,
                  fontWeight: 800,
                }}
              >
                {profileFormik.values.firstName?.[0]?.toUpperCase() || "S"}
              </Avatar>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="avatar-upload-input"
                type="file"
                onChange={handleAvatarChange}
              />
              <label htmlFor="avatar-upload-input">
                <BeamButton
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    minWidth: 40,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: goldGradient,
                    color: "#fff",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    "&:hover": {
                      opacity: 0.9,
                    },
                  }}
                >
                  <PhotoCamera sx={{ fontSize: 20 }} />
                </BeamButton>
              </label>
            </Box>
            <Typography variant="caption" sx={{ mt: 2, color: "text.secondary", fontWeight: 600, textAlign: "center" }}>
              Click camera icon to upload profile photo
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={3}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name*"
                    name="firstName"
                    value={profileFormik.values.firstName}
                    onChange={profileFormik.handleChange}
                    onBlur={profileFormik.handleBlur}
                    error={profileFormik.touched.firstName && !!profileFormik.errors.firstName}
                    helperText={profileFormik.touched.firstName && profileFormik.errors.firstName}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Name*"
                    name="lastName"
                    value={profileFormik.values.lastName}
                    onChange={profileFormik.handleChange}
                    onBlur={profileFormik.handleBlur}
                    error={profileFormik.touched.lastName && !!profileFormik.errors.lastName}
                    helperText={profileFormik.touched.lastName && profileFormik.errors.lastName}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth error={profileFormik.touched.gender && !!profileFormik.errors.gender}>
                    <InputLabel id="gender-select-label">Gender*</InputLabel>
                    <Select
                      labelId="gender-select-label"
                      name="gender"
                      value={profileFormik.values.gender}
                      label="Gender*"
                      onChange={profileFormik.handleChange}
                      onBlur={profileFormik.handleBlur}
                    >
                      <MenuItem value="MALE">Male</MenuItem>
                      <MenuItem value="FEMALE">Female</MenuItem>
                      <MenuItem value="PREFER NOT TO SAY">Prefer not to say</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Grade / Level*"
                    name="grade"
                    value={profileFormik.values.grade}
                    onChange={profileFormik.handleChange}
                    onBlur={profileFormik.handleBlur}
                    error={profileFormik.touched.grade && !!profileFormik.errors.grade}
                    helperText={profileFormik.touched.grade && profileFormik.errors.grade}
                  />
                </Grid>
              </Grid>

              <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.06)", pt: 3 }}>
                <BeamButton
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  sx={{
                    background: goldGradient,
                    color: "#fff",
                    fontWeight: 800,
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    boxShadow: "0 6px 12px rgba(223, 186, 115, 0.15)",
                  }}
                >
                  {loading ? <CircularProgress size={20} color="inherit" /> : "Save Profile Details"}
                </BeamButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </form>
    );
  };

  const renderChangePassword = () => {
    return (
      <form onSubmit={passwordFormik.handleSubmit}>
        <Stack spacing={3} sx={{ maxWidth: 600 }}>
          <TextField
            fullWidth
            type="password"
            label="Current Password*"
            name="currentPassword"
            value={passwordFormik.values.currentPassword}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            error={passwordFormik.touched.currentPassword && !!passwordFormik.errors.currentPassword}
            helperText={passwordFormik.touched.currentPassword && passwordFormik.errors.currentPassword}
          />
          <TextField
            fullWidth
            type="password"
            label="New Password*"
            name="newPassword"
            value={passwordFormik.values.newPassword}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            error={passwordFormik.touched.newPassword && !!passwordFormik.errors.newPassword}
            helperText={passwordFormik.touched.newPassword && passwordFormik.errors.newPassword}
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm New Password*"
            name="confirmNewPassword"
            value={passwordFormik.values.confirmNewPassword}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            error={passwordFormik.touched.confirmNewPassword && !!passwordFormik.errors.confirmNewPassword}
            helperText={passwordFormik.touched.confirmNewPassword && passwordFormik.errors.confirmNewPassword}
          />
          <Box sx={{ pt: 2 }}>
            <BeamButton
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                background: goldGradient,
                color: "#fff",
                fontWeight: 800,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 6px 12px rgba(223, 186, 115, 0.15)",
              }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Change Password"}
            </BeamButton>
          </Box>
        </Stack>
      </form>
    );
  };

  const renderUpdateContact = () => {
    const handlePhoneChange = (value: string, info: MuiTelInputInfo) => {
      setPhoneVal(value);
      const isValid = matchIsValidTel(value);
      if (isValid) {
        contactFormik.setFieldValue("phone", info.nationalNumber);
        contactFormik.setFieldValue("isdCode", info.countryCallingCode);
      } else {
        contactFormik.setFieldError("phone", "Please Enter Valid Phone Number");
      }
    };

    return (
      <form onSubmit={contactFormik.handleSubmit}>
        <Stack spacing={3} sx={{ maxWidth: 600 }}>
          <TextField
            fullWidth
            label="Email Address*"
            name="email"
            type="email"
            value={contactFormik.values.email}
            onChange={contactFormik.handleChange}
            onBlur={contactFormik.handleBlur}
            error={contactFormik.touched.email && !!contactFormik.errors.email}
            helperText={contactFormik.touched.email && contactFormik.errors.email}
          />
          <MuiTelInput
            fullWidth
            label="Phone Number*"
            value={phoneVal}
            onChange={handlePhoneChange}
            onBlur={contactFormik.handleBlur}
            error={contactFormik.touched.phone && !!contactFormik.errors.phone}
            helperText={contactFormik.touched.phone && contactFormik.errors.phone}
            defaultCountry="US"
          />
          <Box sx={{ pt: 2 }}>
            <BeamButton
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                background: goldGradient,
                color: "#fff",
                fontWeight: 800,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 6px 12px rgba(223, 186, 115, 0.15)",
              }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Update Contact Details"}
            </BeamButton>
          </Box>
        </Stack>
      </form>
    );
  };

  return (
    <StudentDashboardLayout>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontFamily: roboto.style.fontFamily,
            color: COLORS.PRIMARY_NAVY,
            mb: 1,
          }}
        >
          Account Settings
        </Typography>
        <Typography
          sx={{
            color: "rgba(0,0,0,0.5)",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          Update your account profile photo, credentials, password, and contact details.
        </Typography>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 4,
          "& .MuiTabs-indicator": {
            height: "3px",
            borderRadius: "3px",
            background: goldGradient,
          },
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              textTransform: "none",
              fontSize: "16px",
              pb: 2,
              color: "text.secondary",
              "&.Mui-selected": {
                color: COLORS.PRIMARY_NAVY,
              },
            },
          }}
        >
          <Tab icon={<Person sx={{ fontSize: 18 }} />} iconPosition="start" label="Edit Profile" />
          <Tab icon={<Lock sx={{ fontSize: 18 }} />} iconPosition="start" label="Change Password" />
          <Tab icon={<Mail sx={{ fontSize: 18 }} />} iconPosition="start" label="Update Email / Phone" />
        </Tabs>
      </Box>

      {/* Forms Container */}
      <Card sx={glassCardStyle}>
        {tabValue === 0 && renderEditProfile()}
        {tabValue === 1 && renderChangePassword()}
        {tabValue === 2 && renderUpdateContact()}
      </Card>
    </StudentDashboardLayout>
  );
};

export default ProfileSettings;
