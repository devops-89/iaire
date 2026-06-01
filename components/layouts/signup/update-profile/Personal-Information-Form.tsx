import { GENDER } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { newBlack_medium } from "@/utils/fonts";
import { UPDATE_PROFILE_FORM_PROPS } from "@/utils/type";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FormikProps } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";

interface PERSONAL_INFORMATION_PROPS {
  formik: FormikProps<UPDATE_PROFILE_FORM_PROPS>;
}

const PersonalInformation = ({ formik }: PERSONAL_INFORMATION_PROPS) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (formik.values.phone) {
      setPhone(`${formik.values.countryCode}${formik.values.phone}`);
    }
  }, [formik.values.phone, formik.values.countryCode]);

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      formik.setFieldValue("profileImage", file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmpassword] =
    useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmpassword(!showConfirmPassword);
  };

  const phoneChangeHandler = (
    newValue: string,
    countryData: MuiTelInputInfo,
  ) => {
    setPhone(newValue);

    const isValid = matchIsValidTel(newValue);

    if (isValid) {
      formik.setFieldValue("phone", countryData.nationalNumber);
      formik.setFieldValue("countryCode", countryData.countryCallingCode);
      formik.setFieldError("phone", "");
    } else {
      formik.setFieldError("phone", "Invalid Phone Number");
    }
  };

  const genderChangeHandler = (e: SyntheticEvent, value: string | null) => {
    if (value) {
      formik.setFieldValue("gender", value);
      formik.setFieldError("gender", "");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Avatar
          src={preview ?? undefined}
          sx={{ width: 100, height: 100, objectFit: "cover" }}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          hidden
          onChange={handleImageChange}
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          sx={{
            textTransform: "none",
            fontFamily: newBlack_medium.style.fontFamily,
            color: COLORS.PRIMARY_NAVY,
            mt: 1,
          }}
        >
          Upload Profile Image
        </Button>
      </Grid>
      <Grid size={6}>
        <TextField
          label="First Name"
          fullWidth
          id="firstName"
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          value={formik.values.firstName}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Last Name"
          fullWidth
          id="lastName"
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          value={formik.values.lastName}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Email"
          fullWidth
          id="email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          value={formik.values.email}
        />
      </Grid>
      <Grid size={6}>
        <MuiTelInput
          label="Phone Number"
          fullWidth
          value={phone}
          onChange={phoneChangeHandler}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && (formik.errors.phone as string)}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Grade"
          fullWidth
          id="grade"
          onChange={formik.handleChange}
          error={formik.touched.grade && Boolean(formik.errors.grade)}
          helperText={formik.touched.grade && formik.errors.grade}
        />
      </Grid>
      <Grid size={6}>
        <Autocomplete
          renderInput={(params) => (
            <TextField
              {...params}
              label="Gender"
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={
                formik.touched.gender && (formik.errors.gender as string)
              }
            />
          )}
          options={GENDER}
          onChange={(e: SyntheticEvent, value: string | null) =>
            genderChangeHandler(e, value)
          }
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Password"
          fullWidth
          id="password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Confirm Password"
          fullWidth
          id="confirmPassword"
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowConfirmPassword}>
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInformation;
