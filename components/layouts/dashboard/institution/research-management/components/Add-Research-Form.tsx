import { useGetTeam } from "@/hooks/school/useTeam";
import { CATEGORY } from "@/utils/enum";
import { RESEARCH_FORM_PROPS } from "@/utils/type";
import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
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
              {/* <Autocomplete
                renderInput={(params) => (
                  <TextField {...params} label="Please Select Team" />
                )}
                options={teamData}
                getOptionLabel={(option)=>option.}
              /> */}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddResearchForm;
