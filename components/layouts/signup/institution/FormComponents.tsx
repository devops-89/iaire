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

export const DARK_INPUT_STYLE = {
  "& .MuiOutlinedInput-root": {
    color: "#FFFFFF",
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: "12px",
    fontFamily: montserrat.style.fontFamily,
    fontSize: "0.92rem",
    height: "48px",
    transition: "all 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.12)",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "rgba(96, 165, 250, 0.5)",
      backgroundColor: "rgba(255, 255, 255, 0.06)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#60A5FA",
      borderWidth: "1.5px",
      boxShadow: "0 0 0 3px rgba(96, 165, 250, 0.2)",
    },
    "&.Mui-error fieldset": {
      borderColor: "#F87171",
    },
    "& input::placeholder": {
      color: "rgba(255, 255, 255, 0.4)",
      opacity: 1,
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
    color: "#60A5FA",
    marginRight: "10px",
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: montserrat.style.fontFamily,
    fontSize: "0.75rem",
    marginTop: "4px",
    color: "#F87171",
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
            color: "rgba(255, 255, 255, 0.85)",
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
          {required && <span style={{ color: "#F87171" }}>*</span>}
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
        sx={{ ...DARK_INPUT_STYLE, ...props.sx }}
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
            color: "rgba(255, 255, 255, 0.85)",
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
          {required && <span style={{ color: "#F87171" }}>*</span>}
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
                <Lock sx={{ color: "#60A5FA", fontSize: 20 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "rgba(255, 255, 255, 0.5)", p: 0.5 }}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: 20 }} />
                  ) : (
                    <Visibility sx={{ fontSize: 20 }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={{ ...DARK_INPUT_STYLE, ...props.sx }}
        {...props}
      />
    </Box>
  );
};
