import { STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS } from "@/utils/type";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { FormikProps } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { useEffect, useState } from "react";
import { aloeveraDisplay_medium } from "@/utils/fonts";

interface GUARDIAN_INFO {
  formik: FormikProps<STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS>;
}

const GuardianInformation = ({ formik }: GUARDIAN_INFO) => {
  const [fatherPhoneVal, setFatherPhoneVal] = useState("");
  const [motherPhoneVal, setMotherPhoneVal] = useState("");

  useEffect(() => {
    if (formik.values.fatherPhone) {
      setFatherPhoneVal(formik.values.fatherPhone);
    }
  }, [formik.values.fatherPhone]);

  useEffect(() => {
    if (formik.values.motherPhone) {
      setMotherPhoneVal(formik.values.motherPhone);
    }
  }, [formik.values.motherPhone]);

  const handleFatherPhoneChange = (
    newValue: string,
    countryData: MuiTelInputInfo,
  ) => {
    setFatherPhoneVal(newValue);
    const validTel = matchIsValidTel(newValue);
    if (validTel) {
      formik.setFieldValue("fatherPhone", countryData?.nationalNumber);
    } else {
      formik.setFieldError("fatherPhone", "Please enter a valid phone number");
    }
  };

  const handleMotherPhoneChange = (
    newValue: string,
    countryData: MuiTelInputInfo,
  ) => {
    setMotherPhoneVal(newValue);
    const validTel = matchIsValidTel(newValue);
    if (validTel) {
      formik.setFieldValue("motherPhone", countryData?.nationalNumber);
    } else {
      formik.setFieldError("motherPhone", "Please enter a valid phone number");
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: aloeveraDisplay_medium.style.fontFamily,
          fontSize: 25,
          my: 2,
        }}
      >
        Father's Information
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Father's Name"
            fullWidth
            id="fatherName"
            name="fatherName"
            value={formik.values.fatherName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fatherName && Boolean(formik.errors.fatherName)
            }
            helperText={
              formik.touched.fatherName && (formik.errors.fatherName as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Father's Email"
            fullWidth
            id="fatherEmail"
            name="fatherEmail"
            value={formik.values.fatherEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fatherEmail && Boolean(formik.errors.fatherEmail)
            }
            helperText={
              formik.touched.fatherEmail &&
              (formik.errors.fatherEmail as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MuiTelInput
            defaultCountry="US"
            label="Father's Phone Number"
            fullWidth
            value={fatherPhoneVal}
            onChange={handleFatherPhoneChange}
            error={
              formik.touched.fatherPhone && Boolean(formik.errors.fatherPhone)
            }
            helperText={
              formik.touched.fatherPhone &&
              (formik.errors.fatherPhone as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Father's Profession"
            fullWidth
            id="fatherProfession"
            name="fatherProfession"
            value={formik.values.fatherProfession}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fatherProfession &&
              Boolean(formik.errors.fatherProfession)
            }
            helperText={
              formik.touched.fatherProfession &&
              (formik.errors.fatherProfession as string)
            }
          />
        </Grid>
      </Grid>

      <Typography
        sx={{
          fontFamily: aloeveraDisplay_medium.style.fontFamily,
          fontSize: 25,
          my: 2,
        }}
      >
        Mother's Information
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Mother's Name"
            fullWidth
            id="motherName"
            name="motherName"
            value={formik.values.motherName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.motherName && Boolean(formik.errors.motherName)
            }
            helperText={
              formik.touched.motherName && (formik.errors.motherName as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Mother's Email"
            fullWidth
            id="motherEmail"
            name="motherEmail"
            value={formik.values.motherEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.motherEmail && Boolean(formik.errors.motherEmail)
            }
            helperText={
              formik.touched.motherEmail &&
              (formik.errors.motherEmail as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MuiTelInput
            defaultCountry="US"
            label="Mother's Phone Number"
            fullWidth
            value={motherPhoneVal}
            onChange={handleMotherPhoneChange}
            error={
              formik.touched.motherPhone && Boolean(formik.errors.motherPhone)
            }
            helperText={
              formik.touched.motherPhone &&
              (formik.errors.motherPhone as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Mother's Profession"
            fullWidth
            id="motherProfession"
            name="motherProfession"
            value={formik.values.motherProfession}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.motherProfession &&
              Boolean(formik.errors.motherProfession)
            }
            helperText={
              formik.touched.motherProfession &&
              (formik.errors.motherProfession as string)
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuardianInformation;
