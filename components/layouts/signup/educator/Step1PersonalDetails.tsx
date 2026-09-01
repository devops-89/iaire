"use client";
import React from "react";
import {
  Avatar,
  Box,
  FormHelperText,
  Grid,
  Autocomplete,
  InputAdornment,
  TextField,
} from "@mui/material";
import { CloudUpload, Person, Wc, ArrowForward } from "@mui/icons-material";
import BeamButton from "@/components/widgets/BeamButton";
import {
  LIGHT_INPUT_STYLE,
  FormTextField,
  FieldLabel,
} from "../institution/FormComponents";
import { GENDER } from "@/utils/constant";
import { montserrat } from "@/utils/fonts";

interface Step1PersonalDetailsProps {
  formik: any;
  getProfileImageSrc: () => string | undefined;
  handleNextStep: () => void;
}

const Step1PersonalDetails: React.FC<Step1PersonalDetailsProps> = ({
  formik,
  getProfileImageSrc,
  handleNextStep,
}) => {
  return (
    <Grid container spacing={2.5} sx={{ mt: 1 }}>
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Avatar
            src={getProfileImageSrc()}
            sx={{
              width: 90,
              height: 90,
              bgcolor: "rgba(59, 130, 246, 0.06)",
              border: "2px dashed #2563EB",
              color: "#2563EB",
              boxShadow: "0 4px 15px rgba(37, 99, 235, 0.15)",
            }}
          >
            <CloudUpload sx={{ width: 40, height: 40 }} />
          </Avatar>

          <BeamButton
            variant="text"
            component="label"
            sx={{
              color: "#2563EB",
              fontFamily: montserrat.style.fontFamily,
              fontSize: 12,
              fontWeight: 600,
              textTransform: "none",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              bgcolor: "rgba(59, 130, 246, 0.08)",
              "&:hover": {
                bgcolor: "rgba(59, 130, 246, 0.16)",
                borderColor: "#2563EB",
              },
            }}
          >
            Upload Profile Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                formik.setFieldTouched("profileImage", true);
                if (file) {
                  formik.setFieldValue("profileImage", file);
                } else {
                  formik.setFieldValue("profileImage", null);
                }
              }}
            />
          </BeamButton>

          {formik.touched.profileImage && formik.errors.profileImage && (
            <FormHelperText error sx={{ fontSize: 11 }}>
              {formik.errors.profileImage as string}
            </FormHelperText>
          )}
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="firstName"
          label="First Name"
          placeholder="e.g. John"
          formik={formik}
          icon={<Person />}
          required
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormTextField
          name="lastName"
          label="Last Name"
          placeholder="e.g. Doe"
          formik={formik}
          icon={<Person />}
          required
        />
      </Grid>

      <Grid size={12}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel required>Gender</FieldLabel>
          <Autocomplete
            options={GENDER}
            getOptionLabel={(option: any) => option}
            value={formik.values.gender}
            onChange={(_, value) => formik.setFieldValue("gender", value)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Gender"
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={
                  formik.touched.gender && (formik.errors.gender as string)
                }
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Wc sx={{ color: "#2563EB", fontSize: 20 }} />
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

export default Step1PersonalDetails;
