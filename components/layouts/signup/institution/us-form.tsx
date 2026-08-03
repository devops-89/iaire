import React from "react";
import { Grid } from "@mui/material";
import { BOARDDATAPROPS } from "@/utils/type";
import { FormTextField } from "./FormComponents";
import { School } from "@mui/icons-material";

interface UsFormProps {
  formik: any;
  boardData: BOARDDATAPROPS[];
  boardLoading: boolean;
}

const Usform = ({ formik }: UsFormProps) => {
  return (
    <Grid size={{ xs: 12, md: 12 }}>
      <FormTextField
        name="isd"
        label="Independent School District (ISD)"
        placeholder="Enter ISD Code or Name"
        formik={formik}
        icon={<School />}
      />
    </Grid>
  );
};

export default Usform;
