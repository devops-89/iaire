import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { Grid, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { useEffect, useState } from "react";

interface MOTHER_INFORMATION_PROPS {
  formik: FormikProps<UPDATE_PROFILE_FORM_PROPS>;
}

const MotherInformation = ({ formik }: MOTHER_INFORMATION_PROPS) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (formik.values.countryCode || formik.values.motherPhone) {
      setPhone(`${formik.values.countryCode}${formik.values.motherPhone}`);
    }
  }, [formik.values.motherPhone, formik.values.countryCode]);

  const phoneChangeHandler = (
    newValue: string,
    countryData: MuiTelInputInfo,
  ) => {
    setPhone(newValue);
    const isValid = matchIsValidTel(newValue);

    if (isValid) {
      formik.setFieldValue("motherPhone", countryData.nationalNumber);
      formik.setFieldError("motherPhone", "");
    } else {
      formik.setFieldError("motherPhone", "Invalid Phone Number");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <TextField
          label="Mother's Name"
          fullWidth
          id="motherName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.motherName && Boolean(formik.errors.motherName)}
          helperText={formik.touched.motherName && formik.errors.motherName}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Mother's Email"
          fullWidth
          id="motherEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.motherEmail && Boolean(formik.errors.motherEmail)
          }
          helperText={formik.touched.motherEmail && formik.errors.motherEmail}
        />
      </Grid>
      <Grid size={6}>
        <MuiTelInput
          label="Mother's Phone"
          fullWidth
          onChange={phoneChangeHandler}
          error={
            formik.touched.motherPhone && Boolean(formik.errors.motherPhone)
          }
          helperText={formik.touched.motherPhone && formik.errors.motherPhone}
          value={phone}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Mother's Profession"
          fullWidth
          id="motherProfession"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.motherProfession &&
            Boolean(formik.errors.motherProfession)
          }
          helperText={
            formik.touched.motherProfession && formik.errors.motherProfession
          }
        />
      </Grid>
    </Grid>
  );
};

export default MotherInformation;
