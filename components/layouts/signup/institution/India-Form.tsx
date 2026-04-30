import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Stack,
  Badge,
  InputAdornment,
  Autocomplete,
  createFilterOptions,
} from "@mui/material";
import React from "react";
import { CloudUpload, Delete, Badge as BadgeIcon } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { BOARDDATAPROPS } from "@/utils/type";

type BoardOptionType =
  | BOARDDATAPROPS
  | { inputValue?: string; name: string; code: string; id: number };
const filter = createFilterOptions<BoardOptionType>();

interface IndiaFormProps {
  formik: any;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  boardData: BOARDDATAPROPS[];
  boardLoading: boolean;
}

const IndiaForm = ({
  formik,
  handleFileChange,
  boardData,
  boardLoading,
}: IndiaFormProps) => {
  return (
    <>
      <Grid size={{ lg: 6, xs: 12 }}>
        <Autocomplete
          value={formik.values.affiliationType || null}
          isOptionEqualToValue={(option, value) => {
            if (value.id && option.id) {
              return option.id === value.id;
            }
            return option.name === value.name;
          }}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              formik.setFieldValue("affiliationType", {
                name: newValue,
                code: "",
                id: 0,
              });
            } else if (
              newValue &&
              "inputValue" in newValue &&
              newValue.inputValue
            ) {
              formik.setFieldValue("affiliationType", {
                name: newValue.inputValue,
                code: "",
                id: 0,
              });
            } else {
              formik.setFieldValue("affiliationType", newValue || null);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.name,
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                name: `${inputValue}`,
                id: 0,
                code: "",
                countryId: 0,
                country: { countryId: 0, name: "", code: "" },
              });
            }
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          freeSolo
          options={boardData as BoardOptionType[]}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if ("inputValue" in option && option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          loading={boardLoading}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props as any;
            return (
              <li key={key || option.name} {...optionProps}>
                {option.name}
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Education Board"
              error={
                formik.touched.affiliationType &&
                Boolean(formik.errors.affiliationType)
              }
              helperText={
                formik.touched.affiliationType && formik.errors.affiliationType
              }
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <InputAdornment position="start" sx={{ ml: 1 }}>
                        <BadgeIcon />
                      </InputAdornment>
                      {params.InputProps.startAdornment}
                    </>
                  ),
                },
              }}
              sx={TEXTFIELD_STYLE_VALIDATION}
            />
          )}
        />
      </Grid>
      <Grid size={{ lg: 6, xs: 12 }}>
        <TextField
          fullWidth
          name="affiliationNumber"
          label="Enter License/ Affiliation Number"
          placeholder="License or Registration ID"
          value={formik.values.affiliationNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.affiliationNumber &&
            Boolean(formik.errors.affiliationNumber)
          }
          helperText={
            formik.touched.affiliationNumber && formik.errors.affiliationNumber
          }
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={TEXTFIELD_STYLE_VALIDATION}
        />
      </Grid>

      <Grid size={12}>
        <Box
          sx={{
            p: 4,
            border: "2px dashed rgba(11, 23, 39, 0.1)",
            borderRadius: "20px",
            textAlign: "center",
            bgcolor: "rgba(11, 23, 39, 0.02)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "rgba(209, 160, 84, 0.05)",
              borderColor: COLORS.ACCENT_TAN,
            },
            ...(formik.errors.affiliationCertificate &&
              formik.touched.affiliationCertificate && {
                borderColor: "#d32f2f",
              }),
          }}
        >
          {!formik.values.affiliationCertificate ? (
            <>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                style={{ display: "none" }}
                id="upload-certificate"
                onChange={handleFileChange}
              />
              <label htmlFor="upload-certificate">
                <IconButton
                  component="span"
                  sx={{
                    color: COLORS.PRIMARY_NAVY,
                    mb: 1,
                    bgcolor: "rgba(11, 23, 39, 0.05)",
                  }}
                >
                  <CloudUpload sx={{ fontSize: 44 }} />
                </IconButton>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: COLORS.PRIMARY_NAVY,
                    mt: 1,
                  }}
                >
                  Upload License / Affiliation certificate
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "gray", mt: 0.5 }}>
                  Drag and drop or click to browse (PDF, JPG, PNG)
                </Typography>
              </label>
            </>
          ) : (
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent="center"
              sx={{ py: 1 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Badge color="success" variant="dot">
                  <Typography
                    sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY }}
                  >
                    {(formik.values.affiliationCertificate as File).name}
                  </Typography>
                </Badge>
              </Box>
              <IconButton
                size="small"
                sx={{
                  color: "#d32f2f",
                  bgcolor: "rgba(211, 47, 47, 0.05)",
                }}
                onClick={() =>
                  formik.setFieldValue("affiliationCertificate", null)
                }
              >
                <Delete />
              </IconButton>
            </Stack>
          )}
          {formik.touched.affiliationCertificate &&
            formik.errors.affiliationCertificate && (
              <Typography
                variant="caption"
                color="error"
                sx={{ mt: 1, display: "block", fontWeight: 600 }}
              >
                {formik.errors.affiliationCertificate as string}
              </Typography>
            )}
        </Box>
      </Grid>
    </>
  );
};

export default IndiaForm;
