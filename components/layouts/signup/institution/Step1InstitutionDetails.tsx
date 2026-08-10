"use client";
import React from "react";
import {
  Box,
  Grid,
  Autocomplete,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Business,
  Person,
  Public,
  School,
  Groups,
  ArrowForward,
} from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";
import { COUNTRYDATAPROPS } from "@/utils/type";
import IndiaForm from "./India-Form";
import UsForm from "./us-form";
import { LIGHT_INPUT_STYLE, FormTextField, FieldLabel } from "./FormComponents";
import BeamButton from "@/components/widgets/BeamButton";

interface Step1InstitutionDetailsProps {
  formik: any;
  country: COUNTRYDATAPROPS | null;
  countryData: COUNTRYDATAPROPS[];
  countryChangeHandler: (_: any, newValue: any) => void;
  boardData: any;
  boardLoading: boolean;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

const Step1InstitutionDetails: React.FC<Step1InstitutionDetailsProps> = ({
  formik,
  country,
  countryData,
  countryChangeHandler,
  boardData,
  boardLoading,
  handleFileChange,
  handleNextStep,
}) => {
  return (
    <Grid container spacing={2.5} sx={{ mt: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="institutionName"
          label="Institution Name"
          placeholder="e.g. Cambridge International"
          formik={formik}
          icon={<Business />}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="principalName"
          label="Principal's / Director's Name"
          placeholder="Full name of Principal/Director"
          formik={formik}
          icon={<Person />}
          required
        />
      </Grid>

      <Grid size={12}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel required>Choose a Country</FieldLabel>
          <Autocomplete
            options={countryData}
            getOptionLabel={(option) => option.name}
            value={country}
            onChange={countryChangeHandler}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Country"
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={
                  formik.touched.country && (formik.errors.country as string)
                }
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Public sx={{ color: "#2563EB", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={LIGHT_INPUT_STYLE}
              />
            )}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="totalTeacherCount"
          label="Total Number Of Teachers"
          placeholder="e.g. 50"
          type="number"
          formik={formik}
          icon={<School />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="totalStudentCount"
          label="Total Number Of Students"
          placeholder="e.g. 1200"
          type="number"
          formik={formik}
          icon={<Groups />}
        />
      </Grid>

      {country?.code === "IN" && (
        <IndiaForm
          formik={formik}
          boardData={boardData}
          boardLoading={boardLoading}
          handleFileChange={handleFileChange}
        />
      )}

      {country?.code === "US" && (
        <UsForm
          formik={formik}
          boardData={boardData}
          boardLoading={boardLoading}
        />
      )}

      <Grid size={12} sx={{ mt: 2 }}>
        <BeamButton
          fullWidth
          onClick={handleNextStep}
          endIcon={<ArrowForward />}
          sx={{
            height: "48px",
            background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
            color: "#FFFFFF",
            borderRadius: "14px",
            fontWeight: 700,
            fontSize: "0.92rem",
            textTransform: "none",
            fontFamily: montserrat.style.fontFamily,
            boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.4)",
            "&:hover": {
              background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
              boxShadow: "0 12px 25px -4px rgba(37, 99, 235, 0.5)",
              transform: "translateY(-1px)",
            },
            transition: "all 0.25s ease",
          }}
        >
          Next: Contact & Security
        </BeamButton>
      </Grid>
    </Grid>
  );
};

export default Step1InstitutionDetails;
