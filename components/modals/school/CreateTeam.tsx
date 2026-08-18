"use client";
import {
  Autocomplete,
  Box,
  Card,
  Grid,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { CATEGORY_TYPES } from "@/utils/constant";
import { useGetAllUser } from "@/hooks/common/useGetAllUser";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import {
  CREATE_TEAM_REQUEST,
  STUDENT_RESPONSE_PROPS,
  TEACHER_REPONSE_PROPS,
} from "@/utils/type";
import { useFormik } from "formik";
import { addTeamValidationSchema } from "@/utils/validationSchema";
import useSnackbar from "@/store/useSnackbar";
import { schoolControllers } from "@/app/api/schoolControllers";
import { useRouter } from "next/navigation";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import { aloeveraDisplay_medium, newBlack_light, roboto } from "@/utils/fonts";
import { useAddTeam } from "@/hooks/school/useTeam";
import BeamButton from "@/components/widgets/BeamButton";

const AddTeams = () => {
  const { userData, fetchUserData, loading, setUserData } = useGetAllUser();
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  const { loading: createTeamLoading, createTeam } = useAddTeam();

  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      mentorId: "",
      studentIds: [],
      assistantMentorId: "",
    },
    validationSchema: addTeamValidationSchema,
    onSubmit: async (values) => {
      createTeam(values as unknown as CREATE_TEAM_REQUEST);
    },
  });

  const handleOpenMentor = () => {
    setUserData([]);
    fetchUserData({
      page: 1,
      limit: 100,
      role: USER_ROLES.TEACHER,
      approvalStatus: "APPROVED",
    });
  };

  const handleOpenStudent = () => {
    setUserData([]);
    fetchUserData({
      page: 1,
      limit: 100,
      role: USER_ROLES.STUDENT,
      approvalStatus: "APPROVED",
    });
  };

  return (
    <Box>
      <Box>
        {/* <Breadcrumb
          title="Add Team"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard/institution",
            },
            {
              title: "Team Management",
              href: "/dashboard/institution/team-management",
            },
            {
              title: "Add Team",
              href: "/dashboard/institution/team-management/add-team",
            },
          ]}
        /> */}
        <Typography
          variant="h5"
          sx={{
            fontSize: 30,
            fontFamily: aloeveraDisplay_medium.style.fontFamily,
            fontWeight: 600,
          }}
        >
          Add Team
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid size={12}>
            <TextField
              label="Team Title"
              fullWidth
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
            />
          </Grid>
          <Grid size={12}>
            <Autocomplete
              options={CATEGORY_TYPES}
              value={formik.values.type}
              onChange={(_, newValue) =>
                formik.setFieldValue("type", newValue || "")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Category"
                  fullWidth
                  error={formik.touched.type && Boolean(formik.errors.type)}
                  helperText={
                    formik.touched.type && (formik.errors.type as string)
                  }
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
              renderOption={(props, option) => (
                <Box {...props} component={"li"}>
                  <Typography
                    sx={{
                      fontFamily: newBlack_light.style.fontFamily,
                      fontSize: 16,
                      textTransform: "capitalize",
                    }}
                  >
                    {option}
                  </Typography>
                </Box>
              )}
            />
          </Grid>
          <Grid size={12}>
            <Autocomplete
              onOpen={handleOpenMentor}
              options={userData || []}
              getOptionLabel={(option: TEACHER_REPONSE_PROPS) =>
                `${option.firstName} ${option.lastName} (${option.email})`
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              loading={loading}
              onChange={(_, newValue) =>
                formik.setFieldValue("mentorId", newValue ? newValue.id : "")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Mentor"
                  error={
                    formik.touched.mentorId && Boolean(formik.errors.mentorId)
                  }
                  helperText={
                    formik.touched.mentorId &&
                    (formik.errors.mentorId as string)
                  }
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Autocomplete
              multiple
              filterSelectedOptions
              onOpen={handleOpenStudent}
              options={userData || []}
              getOptionLabel={(option: STUDENT_RESPONSE_PROPS) =>
                `${option.fullName || option.firstName + " " + option.lastName} (${option.email})`
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              loading={loading}
              onChange={(_, newValue) =>
                formik.setFieldValue(
                  "studentIds",
                  newValue.map((v) => v.id),
                )
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Students"
                  error={
                    formik.touched.studentIds &&
                    Boolean(formik.errors.studentIds)
                  }
                  helperText={
                    formik.touched.studentIds &&
                    (formik.errors.studentIds as string)
                  }
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Autocomplete
              onOpen={handleOpenStudent}
              options={userData || []}
              getOptionLabel={(option: STUDENT_RESPONSE_PROPS) =>
                `${option.fullName || option.firstName + " " + option.lastName} (${option.email})`
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              loading={loading}
              onChange={(_, newValue) =>
                formik.setFieldValue("assistantMentorId", newValue?.id)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Assistant Mentor"
                  error={
                    formik.touched.studentIds &&
                    Boolean(formik.errors.studentIds)
                  }
                  helperText={
                    formik.touched.studentIds &&
                    (formik.errors.studentIds as string)
                  }
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <BeamButton
              onClick={() => formik.handleSubmit()}
              disabled={formik.isSubmitting}
              sx={{
                backgroundColor: COLORS.PRIMARY_NAVY,
                color: COLORS.WHITE,
                px: 4,
                borderRadius: "10px",
                fontFamily: aloeveraDisplay_medium.style.fontFamily,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              {createTeamLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit"
              )}
            </BeamButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddTeams;
