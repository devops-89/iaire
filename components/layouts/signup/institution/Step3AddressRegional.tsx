"use client";
import React from "react";
import {
  Box,
  Grid,
  Autocomplete,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  LocationOn,
  HomeWork,
  Map,
  LocationCity,
  MarkunreadMailbox,
  AccountCircle,
  AlternateEmail,
  ArrowBack,
  CheckCircle,
} from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";
import { US_STATES } from "@/utils/constant";
import { LIGHT_INPUT_STYLE, FormTextField, FieldLabel } from "./FormComponents";
import BeamButton from "@/components/widgets/BeamButton";

interface Step3AddressRegionalProps {
  formik: any;
  reviewLoading: boolean;
  handlePrevStep: () => void;
  onSubmitClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Step3AddressRegional: React.FC<Step3AddressRegionalProps> = ({
  formik,
  reviewLoading,
  handlePrevStep,
  onSubmitClick,
}) => {
  return (
    <Grid container spacing={2.5} sx={{ mt: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="addressLine1"
          label="Address Line 1"
          placeholder="Street address, P.O. box"
          formik={formik}
          icon={<LocationOn />}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="addressLine2"
          label="Address Line 2"
          placeholder="Apartment, suite, unit, building"
          formik={formik}
          icon={<HomeWork />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel required>State / Province</FieldLabel>
          {formik.values.country?.code === "US" ? (
            <Autocomplete
              options={US_STATES}
              getOptionLabel={(option: any) => option}
              value={formik.values.state || null}
              onChange={(_, newValue) => {
                formik.setFieldValue("state", newValue || "");
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select State"
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={
                    formik.touched.state && (formik.errors.state as string)
                  }
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Map sx={{ color: "#2563EB", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={LIGHT_INPUT_STYLE}
                />
              )}
            />
          ) : (
            <FormTextField
              name="state"
              placeholder="State name"
              formik={formik}
              icon={<Map />}
            />
          )}
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormTextField
          name="city"
          label="City"
          placeholder="City name"
          formik={formik}
          icon={<LocationCity />}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormTextField
          name="postalCode"
          label="Postal / Zip Code"
          placeholder="e.g. 10001"
          formik={formik}
          icon={<MarkunreadMailbox />}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormTextField
          name="contactPersonName"
          label="Contact Person Name"
          placeholder="Full Name"
          formik={formik}
          icon={<AccountCircle />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormTextField
          name="contactPersonEmail"
          label="Contact Person Email"
          placeholder="email@example.com"
          formik={formik}
          icon={<AlternateEmail />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormTextField
          name="contactPersonPhone"
          label="Contact Person Phone"
          placeholder="Phone Number"
          formik={formik}
          icon={<LocationOn />}
        />
      </Grid>

      <Grid size={12} sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, gap: 2 }}>
          <BeamButton
            variant="outlined"
            onClick={handlePrevStep}
            startIcon={<ArrowBack />}
            sx={{
              height: "48px",
              minWidth: "120px",
              bgcolor: "#F8FAFC",
              color: "#475569",
              border: "1.5px solid #CBD5E1",
              borderRadius: "14px",
              fontWeight: 700,
              fontSize: "0.92rem",
              textTransform: "none",
              fontFamily: montserrat.style.fontFamily,
              "&:hover": {
                bgcolor: "#F1F5F9",
                color: "#0F172A",
                borderColor: "#94A3B8",
              },
            }}
          >
            Back
          </BeamButton>

          <BeamButton
            fullWidth
            type="submit"
            variant="contained"
            disabled={reviewLoading}
            endIcon={!reviewLoading && <CheckCircle />}
            onClick={onSubmitClick}
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
            {reviewLoading ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              "Review Institution Details"
            )}
          </BeamButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Step3AddressRegional;
