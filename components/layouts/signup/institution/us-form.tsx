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
import { School } from "@mui/icons-material";
import { BOARDDATAPROPS } from "@/utils/type";
import { LIGHT_INPUT_STYLE, FieldLabel } from "./FormComponents";
import { useGetIsdByCountry } from "@/hooks/common/useGetIsdByCountry";

interface UsFormProps {
  formik: any;
  countryId?: number;
  boardData?: BOARDDATAPROPS[] | any[];
  boardLoading?: boolean;
}

const Usform = ({
  formik,
  countryId,
  boardData = [],
  boardLoading = false,
}: UsFormProps) => {
  const targetCountryId = countryId || formik.values?.country?.id || 11;
  const { isdData, isdLoading } = useGetIsdByCountry(targetCountryId);

  const options: string[] =
    isdData && isdData.length > 0
      ? isdData
      : (boardData as string[]) || [];

  const isLoading = isdLoading || boardLoading;

  return (
    <Grid size={{ xs: 12, md: 12 }}>
      <Box sx={{ width: "100%" }}>
        <FieldLabel required>Independent School District (ISD)</FieldLabel>
        <Autocomplete
          freeSolo
          options={options}
          loading={isLoading}
          value={formik.values?.isd || ""}
          onChange={(_, newValue) => {
            formik.setFieldValue("isd", newValue || "");
          }}
          onInputChange={(_, newInputValue) => {
            formik.setFieldValue("isd", newInputValue || "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select or enter ISD Code / Name"
              error={formik.touched.isd && Boolean(formik.errors.isd)}
              helperText={formik.touched.isd && (formik.errors.isd as string)}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <InputAdornment position="start" sx={{ ml: 0.5 }}>
                        <School sx={{ color: "#2563EB", fontSize: 20 }} />
                      </InputAdornment>
                      {params.InputProps.startAdornment}
                    </>
                  ),
                  endAdornment: (
                    <>
                      {isLoading ? (
                        <CircularProgress
                          color="inherit"
                          size={18}
                          sx={{ mr: 1 }}
                        />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
              sx={LIGHT_INPUT_STYLE}
            />
          )}
        />
      </Box>
    </Grid>
  );
};

export default Usform;
