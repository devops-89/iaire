import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import React from "react";
import {
  CloudUpload,
  Delete,
  Badge as BadgeIcon,
  PictureAsPdf,
  InsertDriveFile,
} from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { BOARDDATAPROPS } from "@/utils/type";
import { LIGHT_INPUT_STYLE, FormTextField } from "./FormComponents";
import { montserrat } from "@/utils/fonts";

type BoardOptionType = BOARDDATAPROPS;

interface IndiaFormProps {
  formik: any;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  boardData: BOARDDATAPROPS[];
  boardLoading: boolean;
}

const FieldLabel = ({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <Typography
    sx={{
      color: "#334155",
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
      fontSize: "0.83rem",
      mb: 0.8,
      display: "flex",
      alignItems: "center",
      gap: 0.5,
    }}
  >
    {children}
    {required && <span style={{ color: "#EF4444" }}>*</span>}
  </Typography>
);

const IndiaForm = ({
  formik,
  handleFileChange,
  boardData,
  boardLoading,
}: IndiaFormProps) => {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const file = formik.values.affiliationCertificate;
    if (file) {
      const isImage =
        typeof File !== "undefined" && file instanceof File
          ? file.type.startsWith("image/")
          : typeof file === "string" &&
            /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file);

      if (isImage) {
        if (file instanceof File) {
          const url = URL.createObjectURL(file);
          setPreviewUrl(url);
          return () => {
            URL.revokeObjectURL(url);
          };
        } else if (typeof file === "string") {
          setPreviewUrl(file);
        }
      } else {
        setPreviewUrl(null);
      }
    } else {
      setPreviewUrl(null);
    }
  }, [formik.values.affiliationCertificate]);

  return (
    <>
      <Grid size={{ lg: 6, xs: 12 }}>
        <Box sx={{ width: "100%" }}>
          <FieldLabel required>Education Board</FieldLabel>
          <Autocomplete
            value={formik.values.affiliationType || null}
            isOptionEqualToValue={(option, value) => {
              if (value.id && option.id) {
                return option.id === value.id;
              }
              return option.name === value.name;
            }}
            onChange={(event, newValue) => {
              formik.setFieldValue("affiliationType", newValue || null);
            }}
            options={boardData as BoardOptionType[]}
            getOptionLabel={(option) => option.name}
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
                placeholder="Select Education Board"
                error={
                  formik.touched.affiliationType &&
                  Boolean(formik.errors.affiliationType)
                }
                helperText={
                  formik.touched.affiliationType &&
                  (formik.errors.affiliationType as string)
                }
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <InputAdornment position="start" sx={{ ml: 0.5 }}>
                          <BadgeIcon sx={{ color: "#2563EB", fontSize: 20 }} />
                        </InputAdornment>
                        {params.InputProps.startAdornment}
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
      <Grid size={{ lg: 6, xs: 12 }}>
        <FormTextField
          name="affiliationNumber"
          label="License / Affiliation Number"
          placeholder="License or Registration ID"
          formik={formik}
          icon={<BadgeIcon />}
          required
        />
      </Grid>

      <Grid size={12}>
        <Box
          sx={{
            p: 3,
            border: "2px dashed rgba(37, 99, 235, 0.3)",
            borderRadius: "16px",
            textAlign: "center",
            bgcolor: "rgba(59, 130, 246, 0.03)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "rgba(59, 130, 246, 0.08)",
              borderColor: "#2563EB",
            },
            ...(formik.errors.affiliationCertificate &&
              formik.touched.affiliationCertificate && {
                borderColor: "#EF4444",
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
                    color: "#2563EB",
                    bgcolor: "rgba(59, 130, 246, 0.1)",
                    p: 2,
                    mb: 1,
                    "&:hover": {
                      bgcolor: "rgba(59, 130, 246, 0.2)",
                    },
                  }}
                >
                  <CloudUpload sx={{ fontSize: 32 }} />
                </IconButton>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 600,
                    color: "#0F172A",
                    cursor: "pointer",
                  }}
                >
                  Upload Affiliation Certificate{" "}
                  <span style={{ color: "#EF4444" }}>*</span>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#64748B",
                    fontFamily: montserrat.style.fontFamily,
                  }}
                >
                  Supports PDF, JPG, PNG (Max 5MB)
                </Typography>
              </label>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#FFFFFF",
                p: 2,
                borderRadius: "12px",
                border: "1px solid #E2E8F0",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {previewUrl ? (
                  <Box
                    component="img"
                    src={previewUrl}
                    alt="Preview"
                    sx={{
                      width: 48,
                      height: 48,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <PictureAsPdf sx={{ fontSize: 40, color: "#EF4444" }} />
                )}
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 600,
                      color: "#0F172A",
                    }}
                  >
                    {formik.values.affiliationCertificate?.name ||
                      "Affiliation Certificate"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#64748B" }}>
                    File uploaded successfully
                  </Typography>
                </Box>
              </Box>

              <IconButton
                onClick={() =>
                  formik.setFieldValue("affiliationCertificate", null)
                }
                sx={{ color: "#EF4444" }}
              >
                <Delete />
              </IconButton>
            </Box>
          )}
        </Box>
        {formik.touched.affiliationCertificate &&
          formik.errors.affiliationCertificate && (
            <FormHelperText
              error
              sx={{
                mx: 1.5,
                mt: 0.5,
                fontFamily: montserrat.style.fontFamily,
                fontSize: "0.72rem",
              }}
            >
              {formik.errors.affiliationCertificate as string}
            </FormHelperText>
          )}
      </Grid>
    </>
  );
};

export default IndiaForm;
