"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { Email, Language, ArrowBack, ArrowForward } from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";
import { MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import {
  LIGHT_INPUT_STYLE,
  FormTextField,
  PasswordTextField,
  FieldLabel,
} from "./FormComponents";
import BeamButton from "@/components/widgets/BeamButton";

interface Step2ContactSecurityProps {
  formik: any;
  phone: string;
  handlePhoneChange: (value: string, countryDataInfo: MuiTelInputInfo) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Step2ContactSecurity: React.FC<Step2ContactSecurityProps> = ({
  formik,
  phone,
  handlePhoneChange,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <Grid container spacing={2.5} sx={{ mt: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="email"
          label="Official Email Address"
          placeholder="contact@institution.edu"
          formik={formik}
          icon={<Email />}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel required>Phone Number</FieldLabel>
          <MuiTelInput
            fullWidth
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && (formik.errors.phone as string)}
            defaultCountry={(formik.values.country?.code as any) || "US"}
            sx={{
              ...LIGHT_INPUT_STYLE,
              "& .MuiIconButton-root": { color: "#2563EB" },
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="website"
          label="Website URL"
          placeholder="https://www.institution.edu"
          formik={formik}
          icon={<Language />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <PasswordTextField
          name="password"
          label="Password"
          placeholder="Create a strong password"
          formik={formik}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <PasswordTextField
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          formik={formik}
          required
        />
      </Grid>

      <Grid size={12} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            gap: 2,
          }}
        >
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
            Next: Address & Regional Information
          </BeamButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Step2ContactSecurity;
