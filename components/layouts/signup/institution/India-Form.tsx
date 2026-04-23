import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  Stack,
  Badge,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { CloudUpload, Delete, Badge as BadgeIcon } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

interface IndiaFormProps {
  formik: any;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IndiaForm = ({ formik, handleFileChange }: IndiaFormProps) => {
  return (
    <>
      <Grid size={{ lg: 6, xs: 12 }}>
        <TextField
          fullWidth
          select
          name="affiliationType"
          label="Select Education Board"
          value={formik.values.affiliationType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.affiliationType &&
            Boolean(formik.errors.affiliationType)
          }
          helperText={
            formik.touched.affiliationType && formik.errors.affiliationType
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
        >
          <MenuItem value="CBSE">CBSE</MenuItem>
          <MenuItem value="ICSE">ICSE</MenuItem>
          <MenuItem value="State Board">State Board</MenuItem>
          <MenuItem value="IB">IB</MenuItem>
          <MenuItem value="IGCSE">IGCSE</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
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
