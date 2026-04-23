import { Grid, TextField } from "@mui/material";
import React from "react";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

interface UsFormProps {
  formik: any;
}

const Usform = ({ formik }: UsFormProps) => {
  return (
    <>
      <Grid size={{ xs: 12, md: 12 }}>
        <TextField
          fullWidth
          name="isd"
          label="Enter ISD"
          placeholder="Independent School District"
          value={formik.values.isd || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.isd && Boolean(formik.errors.isd)}
          helperText={formik.touched.isd && formik.errors.isd}
          sx={TEXTFIELD_STYLE_VALIDATION}
        />
      </Grid>
    </>
  );
};

export default Usform;
