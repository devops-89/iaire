"use client";
import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  TextFieldProps,
  Typography,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";

export const LIGHT_INPUT_STYLE = {
  "& .MuiOutlinedInput-root": {
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    fontFamily: montserrat.style.fontFamily,
    fontSize: "0.92rem",
    height: "48px",
    transition: "all 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "rgba(148, 163, 184, 0.4)",
      borderWidth: "1.5px",
    },
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    "&:hover fieldset": {
      borderColor: "#2563EB",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2563EB",
      borderWidth: "1.5px",
      boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.15)",
    },
    "&.Mui-error fieldset": {
      borderColor: "#EF4444",
    },
    "& input::placeholder": {
      color: "#94A3B8 !important",
      opacity: "1 !important",
      WebkitTextFillColor: "#94A3B8",
    },
    "& input::-webkit-input-placeholder": {
      color: "#94A3B8 !important",
      opacity: "1 !important",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
  "& .MuiInputAdornment-root": {
    color: "#2563EB",
    marginRight: "10px",
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: montserrat.style.fontFamily,
    fontSize: "0.72rem",
    marginTop: "2px",
    color: "#EF4444",
  },
};

export const DARK_INPUT_STYLE = LIGHT_INPUT_STYLE;
export const COMPACT_DARK_INPUT_STYLE = {
  ...LIGHT_INPUT_STYLE,
  "& .MuiOutlinedInput-root": {
    ...LIGHT_INPUT_STYLE["& .MuiOutlinedInput-root"],
    height: "42px",
    fontSize: "0.85rem",
  },
};

interface FormTextFieldProps extends Omit<TextFieldProps, "name"> {
  name: string;
  formik: any;
  icon?: React.ReactNode;
  required?: boolean;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  placeholder,
  formik,
  icon,
  required,
  ...props
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      {label && (
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
          {label}
          {required && <span style={{ color: "#EF4444" }}>*</span>}
        </Typography>
      )}
      <TextField
        fullWidth
        name={name}
        placeholder={placeholder || (typeof label === "string" ? label : "")}
        value={formik.values[name] ?? ""}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && (formik.errors[name] as string)}
        slotProps={{
          input: {
            startAdornment: icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : undefined,
            ...props.slotProps?.input,
          },
        }}
        sx={{ ...LIGHT_INPUT_STYLE, ...props.sx }}
        {...props}
      />
    </Box>
  );
};

export const PasswordTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  placeholder,
  formik,
  required,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      {label && (
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
          {label}
          {required && <span style={{ color: "#EF4444" }}>*</span>}
        </Typography>
      )}
      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder || (typeof label === "string" ? label : "")}
        value={formik.values[name] ?? ""}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && (formik.errors[name] as string)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: "#2563EB", fontSize: 20 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "#94A3B8", p: 0.5 }}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: 20 }} />
                  ) : (
                    <Visibility sx={{ fontSize: 20 }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            ...props.slotProps?.input,
          },
        }}
        sx={{ ...LIGHT_INPUT_STYLE, ...props.sx }}
        {...props}
      />
    </Box>
  );
};
