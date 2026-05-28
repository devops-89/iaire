import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { Grid, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { useState } from "react";

interface FATHER_INFORMATION_PROPS {
  formik: FormikProps<UPDATE_PROFILE_FORM_PROPS>;
}

const FatherInformation = ({ formik }: FATHER_INFORMATION_PROPS) => {
  const [phone, setPhone] = useState("");

  const phoneChangeHandler = (
    newValue: string,
    countryInfo: MuiTelInputInfo,
  ) => {
    setPhone(newValue);

    const isValid = matchIsValidTel(newValue);
    if (isValid) {
      formik.setFieldValue("fatherPhone", countryInfo.nationalNumber);
      formik.setFieldError("fatherPhone", "");
    } else {
      formik.setFieldError("fatherPhone", "Invalid Phone Number");
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid size={6}>
        <TextField
          label="Father's Name"
          fullWidth
          onChange={formik.handleChange}
          id="fatherName"
          error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
          helperText={formik.touched.fatherName && formik.errors.fatherName}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Father's Email"
          fullWidth
          id="fatherEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.fatherEmail && Boolean(formik.errors.fatherEmail)
          }
          helperText={formik.touched.fatherEmail && formik.errors.fatherEmail}
        />
      </Grid>
      <Grid size={6}>
        <MuiTelInput
          label="Father's Phone"
          fullWidth
          onChange={phoneChangeHandler}
          error={
            formik.touched.fatherPhone && Boolean(formik.errors.fatherPhone)
          }
          helperText={formik.touched.fatherPhone && formik.errors.fatherPhone}
          value={phone}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Father's Profession"
          fullWidth
          id="fatherProfession"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.fatherProfession &&
            Boolean(formik.errors.fatherProfession)
          }
          helperText={
            formik.touched.fatherProfession && formik.errors.fatherProfession
          }
        />
      </Grid>
    </Grid>
  );
};

export default FatherInformation;
