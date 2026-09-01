import { COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium } from "@/utils/fonts";
import { STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS } from "@/utils/type";
import {
  Autocomplete,
  Avatar,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormikProps } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { useRef, useState } from "react";
import { GENDER } from "@/utils/constant";
import BeamButton from "@/components/widgets/BeamButton";

interface PERSONAL_INFORMATION_PROPS {
  formik: FormikProps<STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS>;
}

const PersonalInformation = ({ formik }: PERSONAL_INFORMATION_PROPS) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      formik.setFieldValue("profileImage", file);
    }
  };

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (
    newValue: string,
    countryData: MuiTelInputInfo,
  ) => {
    if (
      countryData?.nationalNumber &&
      countryData.nationalNumber.replace(/\D/g, "").length > 10
    ) {
      return;
    }
    setPhone(newValue);
    const validTel = matchIsValidTel(newValue);

    if (validTel) {
      formik.setFieldValue("phoneNumber", countryData?.nationalNumber);
      formik.setFieldValue("countryCode", countryData?.countryCallingCode);
    } else {
      formik.setFieldError("phoneNumber", "Please enter a valid phone number");
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: aloeveraDisplay_medium.style.fontFamily,
          fontSize: 25,
          my: 2,
        }}
      >
        Personal Information
      </Typography>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Avatar
            src={preview || undefined}
            sx={{ width: 80, height: 80, fontSize: 50 }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <Typography
            onClick={() => fileInputRef.current?.click()}
            sx={{
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
              textTransform: "capitalize",
              mt: 2,
              color: COLORS.PRIMARY_NAVY,
              cursor: "pointer",
            }}
          >
            Upload Image
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="First Name*"
            fullWidth
            id="firstName"
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={
              formik.touched.firstName && (formik.errors.firstName as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Last Name*"
            fullWidth
            id="lastName"
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={
              formik.touched.lastName && (formik.errors.lastName as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Email*"
            fullWidth
            id="email"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && (formik.errors.email as string)}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MuiTelInput
            defaultCountry="IN"
            fullWidth
            label="Phone Number*"
            id="phoneNumber"
            onChange={handlePhoneChange}
            value={phone}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={
              formik.touched.phoneNumber &&
              (formik.errors.phoneNumber as string)
            }
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password*"
            fullWidth
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            slotProps={{
              input: {
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
            id="password"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password*"
            fullWidth
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
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            id="confirmPassword"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Autocomplete
            options={GENDER}
            getOptionLabel={(option: any) => option}
            onChange={(e, value) => {
              formik.setFieldValue("gender", value);
            }}
            value={formik.values.gender || null}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Gender*"
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={
                  formik.touched.gender && (formik.errors.gender as string)
                }
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInformation;
