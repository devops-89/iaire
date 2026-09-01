"use client";
import React from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Public, School, ArrowBack, CheckCircle } from "@mui/icons-material";
import BeamButton from "@/components/widgets/BeamButton";
import { LIGHT_INPUT_STYLE, FieldLabel } from "../institution/FormComponents";
import { montserrat } from "@/utils/fonts";
import { COUNTRYDATAPROPS, INSTITUTION_BY_BOARD_PROPS } from "@/utils/type";

interface Step3AcademicProps {
  formik: any;
  countryData: any[];
  country: COUNTRYDATAPROPS | null;
  countryChangeHandler: (_: any, newValue: any) => void;
  boardData: any[];
  boardChangeHandler: (_: any, newValue: any) => void;
  isdChangeHandler: (_: any, newValue: any) => void;
  institutionData: any[];
  school: INSTITUTION_BY_BOARD_PROPS | null;
  institutionChangeHandler: (_: any, newValue: any) => void;
  handlePrevStep: () => void;
  handleReviewSubmit: (e: any) => void;
  reviewLoading: boolean;
}

const Step3Academic: React.FC<Step3AcademicProps> = ({
  formik,
  countryData,
  country,
  countryChangeHandler,
  boardData,
  boardChangeHandler,
  isdChangeHandler,
  institutionData,
  school,
  institutionChangeHandler,
  handlePrevStep,
  handleReviewSubmit,
  reviewLoading,
}) => {
  return (
    <Grid container spacing={2.5} sx={{ mt: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel>Country*</FieldLabel>
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
                required
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
        <Box sx={{ width: "100%" }}>
          <FieldLabel>
            {country?.code === "US" ? "ISD Code*" : "Board*"}
          </FieldLabel>
          {country?.code === "IN" ? (
            <Autocomplete
              options={boardData}
              getOptionLabel={(option) => option.name}
              value={formik.values.board}
              onChange={boardChangeHandler}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Board"
                  error={formik.touched.board && Boolean(formik.errors.board)}
                  helperText={
                    formik.touched.board && (formik.errors.board as string)
                  }
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <School sx={{ color: "#2563EB", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={LIGHT_INPUT_STYLE}
                />
              )}
            />
          ) : country?.code === "US" ? (
            <Autocomplete
              options={boardData}
              getOptionLabel={(option: any) => option}
              value={formik.values.isdCode || null}
              onChange={isdChangeHandler}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select ISD Code"
                  error={
                    formik.touched.isdCode && Boolean(formik.errors.isdCode)
                  }
                  helperText={
                    formik.touched.isdCode && (formik.errors.isdCode as string)
                  }
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <School sx={{ color: "#2563EB", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={LIGHT_INPUT_STYLE}
                />
              )}
            />
          ) : (
            <Autocomplete
              options={boardData}
              getOptionLabel={(option) => option.name}
              value={formik.values.board}
              onChange={boardChangeHandler}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Board"
                  error={formik.touched.board && Boolean(formik.errors.board)}
                  helperText={
                    formik.touched.board && (formik.errors.board as string)
                  }
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <School sx={{ color: "#2563EB", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={LIGHT_INPUT_STYLE}
                />
              )}
            />
          )}
        </Box>
      </Grid>

      <Grid size={12}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel>Institution / School*</FieldLabel>
          <Autocomplete
            options={institutionData}
            getOptionLabel={(option) => option.name}
            value={school}
            onChange={institutionChangeHandler}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Institution"
                error={formik.touched.school && Boolean(formik.errors.school)}
                helperText={
                  formik.touched.school && (formik.errors.school as string)
                }
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <School sx={{ color: "#2563EB", fontSize: 20 }} />
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
            type="submit"
            variant="contained"
            endIcon={!reviewLoading && <CheckCircle />}
            onClick={handleReviewSubmit}
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
              "Review Profile & Submit"
            )}
          </BeamButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Step3Academic;
