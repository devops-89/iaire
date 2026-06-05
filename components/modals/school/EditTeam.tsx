"use client";
import { useGetAllUser } from "@/hooks/common/useGetAllUser";
import { useAddTeam, useEditTeam } from "@/hooks/school/useTeam";
import useSnackbar from "@/store/useSnackbar";
import { CATEGORY_TYPES } from "@/utils/constant";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_light } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import {
  CREATE_TEAM_REQUEST,
  STUDENT_RESPONSE_PROPS,
  TEACHER_REPONSE_PROPS,
  TEAM_DETAILS_RESPONSE,
  USER_DETAILS_PROPS,
} from "@/utils/type";
import { addTeamValidationSchema } from "@/utils/validationSchema";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const EditTeams = ({ value }: { value: TEAM_DETAILS_RESPONSE }) => {
  const { userData, fetchUserData, loading, setUserData } = useGetAllUser();
  const { setSnackbar } = useSnackbar();
  const router = useRouter();
  const { loading: editTeamLoading, editTeamData } = useEditTeam();

  const formik = useFormik({
    initialValues: {
      title: value?.title || "",
      type: value?.type || "",
      mentorId: value?.mentorId || "",
      studentIds: value?.members?.map((v) => v.studentId) || [],
    },
    validationSchema: addTeamValidationSchema,
    onSubmit: async (values) => {
      editTeamData(values as unknown as CREATE_TEAM_REQUEST, value.id);
    },
  });

  const [mentor, setMentor] = useState<USER_DETAILS_PROPS | null>(
    value?.mentor || null,
  );
  const [students, setStudents] = useState<STUDENT_RESPONSE_PROPS[]>(
    value?.members?.map((v) => v.student) || [],
  );

  const handleChangeMentor = (
    e: SyntheticEvent,
    newValue: USER_DETAILS_PROPS | null,
  ) => {
    setMentor(newValue);
    formik.setFieldValue("mentorId", newValue ? newValue.id : "");
  };

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
        <Typography
          variant="h5"
          sx={{
            fontSize: 30,
            fontFamily: aloeveraDisplay_medium.style.fontFamily,
            fontWeight: 600,
          }}
        >
          Edit Team
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
              options={userData?.data || []}
              getOptionLabel={(option: USER_DETAILS_PROPS) =>
                `${option.firstName} ${option.lastName} (${option.email})`
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              loading={loading}
              value={mentor}
              onChange={handleChangeMentor}
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
              options={userData?.data || []}
              getOptionLabel={(option: STUDENT_RESPONSE_PROPS) =>
                `${option.fullName || option.firstName + " " + option.lastName} (${option.email})`
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              loading={loading}
              value={students}
              onChange={(_, newValue) => {
                setStudents(newValue);
                formik.setFieldValue(
                  "studentIds",
                  newValue.map((v) => v.id),
                );
              }}
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
          <Grid size={6}>
            <Button
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
              {editTeamLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit"
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EditTeams;
