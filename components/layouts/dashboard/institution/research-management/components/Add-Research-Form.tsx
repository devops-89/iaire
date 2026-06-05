import { useGetTeam } from "@/hooks/school/useTeam";
import { CATEGORY, COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium } from "@/utils/fonts";
import { RESEARCH_FORM_PROPS } from "@/utils/type";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProps } from "formik";
import React, { useEffect } from "react";

interface AddResearchFormProps {
  formik: FormikProps<RESEARCH_FORM_PROPS>;
  isLoading: boolean;
}

const AddResearchForm = ({ formik, isLoading }: AddResearchFormProps) => {
  const { fetchData, loading: teamLoading, teamData } = useGetTeam();

  useEffect(() => {
    fetchData({
      type: CATEGORY.RESEARCH,
    });
  }, []);

  return (
    <Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid size={6}>
              <TextField
                label="Research Title*"
                fullWidth
                id="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.touched.title && !!formik.errors.title}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Research Topic*"
                fullWidth
                id="topic"
                onChange={formik.handleChange}
                value={formik.values.topic}
                error={formik.touched.topic && !!formik.errors.topic}
                helperText={formik.touched.topic && formik.errors.topic}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Research Description*"
                fullWidth
                multiline
                rows={4}
                id="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={
                  formik.touched.description && !!formik.errors.description
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid size={12}>
              <Autocomplete
                options={teamData?.data || []}
                getOptionLabel={(option) => option.title}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={
                  teamData?.data?.find(
                    (team) => team.id === formik.values.teamId,
                  ) || null
                }
                onChange={(_, newValue) => {
                  formik.setFieldValue("teamId", newValue ? newValue.id : "");
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Please Select Team"
                    error={formik.touched.teamId && !!formik.errors.teamId}
                    helperText={formik.touched.teamId && formik.errors.teamId}
                  />
                )}
              />
            </Grid>
            <Grid size={6}>
              <Button
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                  textTransform: "none",
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  width: 180,
                  p: 1.5,
                }}
                type="submit"
                disabled={teamLoading || isLoading}
              >
                {isLoading ? <CircularProgress size={20} /> : "Submit Research"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddResearchForm;
