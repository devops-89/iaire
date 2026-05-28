"use client";
import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  TextFieldProps,
} from "@mui/material";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

interface FormTextFieldProps extends Omit<TextFieldProps, "name"> {
  name: string;
  formik: any;
  icon?: React.ReactNode;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  formik,
  icon,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      name={name}
      value={formik.values[name]}
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
      sx={{ ...TEXTFIELD_STYLE_VALIDATION, ...props.sx }}
      {...props}
    />
  );
};

export const PasswordTextField: React.FC<FormTextFieldProps> = ({
  name,
  formik,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      type={showPassword ? "text" : "password"}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && (formik.errors[name] as string)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      sx={{ ...TEXTFIELD_STYLE_VALIDATION, ...props.sx }}
      {...props}
    />
  );
};
