"use client";
import { BOARDS, COUNTRIES, GENDER, INSTITUTIONS } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { educatorSignupValidationSchema } from "@/utils/validationSchema";
import { useSignup } from "@/store/useSignup";
import {
  BOARDDATAPROPS,
  COUNTRYDATAPROPS,
  EducatorInfo,
  INSTITUTION_BY_BOARD_PROPS,
} from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import { Visibility, VisibilityOff, CloudUpload } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  Container,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography} from "@mui/material";
import { useFormik } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import SignupStepper from "../SignupStepper";
import { useInstitutionByBoard } from "@/hooks/common/getInstitutionByBoard";
import { useMentorSignup } from "@/hooks/mentor/useMentorSignup";
import BeamButton from "@/components/widgets/BeamButton";

const EducatorSignup = () => {
  const router = useRouter();
  const { setEducatorData, educatorData: rawEducatorData } = useSignup();
  const educatorData = rawEducatorData as any;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { countryData } = useGetCountries();

  const { signupTeacher, loading } = useMentorSignup();

  const formik = useFormik<EducatorInfo>({
    initialValues: {
      profileImage: educatorData?.profileImage || null,
      board: educatorData?.board || null,
      school: educatorData?.school || null,
      firstName: educatorData?.firstName || "",
      lastName: educatorData?.lastName || "",
      email: educatorData?.email || "",
      phone: educatorData?.phone || "",
      password: educatorData?.password || "",
      confirmPassword: educatorData?.confirmPassword || "",
      country: educatorData?.country || null,
      state: educatorData?.state || "",
      countryCode: educatorData?.countryCode || "",
      primarySubjects: educatorData?.primarySubjects || [],
      isdCode: educatorData?.isdCode || "",
      gender: educatorData?.gender || "",
      experience: educatorData?.experience || "",
      role: USER_ROLES.EDUCATOR,
    },
    enableReinitialize: true,
    validationSchema: educatorSignupValidationSchema,
    onSubmit: (values) => {
      setEducatorData(values as any);

      router.push("/signup/review");
    },
  });

  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(
    educatorData?.country || null,
  );
  const { boardData, boardLoading } = useBoardByCountry(country);
  const { institutionData, loading: institutionLoading } =
    useInstitutionByBoard({
      country: country,
      boardId:
        country?.code === "IN"
          ? formik.values?.board?.id?.toString()
          : country?.code === "US"
            ? formik.values.isdCode
            : formik.values?.board?.id?.toString(),
    });

  const [phone, setPhone] = useState(
    `${educatorData?.countryCode} ${educatorData?.phone}`,
  );
  const handlePhoneChange = (value: string, countryData: MuiTelInputInfo) => {
    setPhone(value);
    const isValid = matchIsValidTel(value);
    if (isValid) {
      formik.setFieldError("phone", "");
      formik.setFieldValue("phone", countryData?.nationalNumber);
    } else {
      formik.setFieldError("phone", "Please Enter a Valid Phone Number");
    }
  };
  const countryChangeHandler = (_: any, newValue: any) => {
    setCountry(newValue);
    if (newValue) {
      formik.setFieldValue("country", newValue);
      formik.setFieldValue("isdCode", "");
      formik.setFieldValue("school", null);
      formik.setFieldValue("board", null);
    }
  };

  // const [board, setBoard] = useState();

  const boardChangeHandler = (e: any, newValue: any) => {
    if (newValue) {
      formik.setFieldValue("board", newValue);
    }
  };

  const isdChangeHandler = (e: any, newValue: any) => {
    if (newValue) {
      formik.setFieldValue("isdCode", newValue);
    }
  };

  const [school, setSchool] = useState<INSTITUTION_BY_BOARD_PROPS | null>(
    educatorData?.school || null,
  );

  const institutionChangeHandler = (e: any, newValue: any) => {
    setSchool(newValue);
    if (newValue) {
      formik.setFieldValue("school", newValue);
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 8,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.05) 0%, rgba(209, 160, 84, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            py: 5,
            px: { xs: 3, md: 5 },
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box sx={{ mt: 3 }}>
            <SignupStepper activeStep={0} />
          </Box>
          <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: 30,
                fontWeight: 800,
                color: COLORS.PRIMARY_NAVY,
                mb: 1,
                textAlign: "center",
              }}
            >
              Mentor Registration
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 16,
                color: "rgba(0,0,0,0.6)",
                mb: 1,
                textAlign: "center",
              }}
            >
              Join the IAIRE network to empower your students and manage
              innovations.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ lg: 12 }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Avatar
                      src={
                        formik.values.profileImage
                          ? URL.createObjectURL(formik.values.profileImage)
                          : undefined
                      }
                      sx={{
                        width: 120,
                        height: 120,
                        // margin: "0 auto",
                        bgcolor: "rgba(0,0,0,0.05)",
                        color: "rgba(0,0,0,0.4)",
                      }}
                    >
                      <CloudUpload sx={{ width: 60, height: 60 }} />
                    </Avatar>
                    <BeamButton
                      variant="text"
                      color="primary"
                      component="label"
                      sx={{ mt: 1 }}
                    >
                      Upload Photo
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          formik.setFieldTouched("profileImage", true);
                          if (file) {
                            formik.setFieldValue("profileImage", file);
                          } else {
                            formik.setFieldValue("profileImage", null);
                          }
                        }}
                      />
                    </BeamButton>
                    <FormHelperText
                      sx={{
                        fontSize: 12,
                        textAlign: "center",
                        width: "100%",
                        display: "block",
                      }}
                      error
                    >
                      {formik.touched.profileImage &&
                        (formik.errors.profileImage as string)}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                  <Autocomplete
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Country"
                        error={
                          formik.touched.country &&
                          Boolean(formik.errors.country)
                        }
                        helperText={
                          formik.touched.country &&
                          (formik.errors.country as string)
                        }
                      />
                    )}
                    options={countryData}
                    getOptionLabel={(option) => option.name}
                    onChange={countryChangeHandler}
                    value={country}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                  {country?.code === "IN" ? (
                    <Autocomplete
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Board"
                          error={
                            formik.touched.board && Boolean(formik.errors.board)
                          }
                          helperText={
                            formik.touched.board &&
                            (formik.errors.board as string)
                          }
                        />
                      )}
                      options={boardData}
                      getOptionLabel={(option) => option.name}
                      onChange={boardChangeHandler}
                      value={formik.values.board}
                    />
                  ) : country?.code === "US" ? (
                    <Autocomplete
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select ISD Code"
                          error={
                            formik.touched.isdCode &&
                            Boolean(formik.errors.isdCode)
                          }
                          helperText={
                            formik.touched.isdCode &&
                            (formik.errors.isdCode as string)
                          }
                        />
                      )}
                      options={boardData}
                      getOptionLabel={(option: any) => option}
                      onChange={isdChangeHandler}
                      value={formik.values.isdCode || null}
                    />
                  ) : (
                    <Autocomplete
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Board"
                          error={
                            formik.touched.board && Boolean(formik.errors.board)
                          }
                          helperText={
                            formik.touched.board &&
                            (formik.errors.board as string)
                          }
                        />
                      )}
                      options={boardData}
                      getOptionLabel={(option) => option.name}
                      onChange={boardChangeHandler}
                      value={formik.values.board}
                    />
                  )}
                </Grid>

                <Grid size={{ xs: 12, lg: 4 }}>
                  <Autocomplete
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Institution"
                        error={
                          formik.touched.school && Boolean(formik.errors.school)
                        }
                        helperText={
                          formik.touched.school &&
                          (formik.errors.school as string)
                        }
                      />
                    )}
                    options={institutionData}
                    getOptionLabel={(option) => option.name}
                    onChange={institutionChangeHandler}
                    value={school}
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    label="First Name"
                    placeholder="John"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName &&
                      (formik.errors.firstName as string)
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    placeholder="Doe"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName &&
                      (formik.errors.lastName as string)
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    placeholder="email@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={
                      formik.touched.email && (formik.errors.email as string)
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <MuiTelInput
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={
                      formik.touched.phone && (formik.errors.phone as string)
                    }
                    defaultCountry={
                      (formik.values.country?.code as any) || "US"
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password &&
                      (formik.errors.password as string)
                    }
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    fullWidth
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="••••••••"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      (formik.errors.confirmPassword as string)
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Autocomplete
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Gender"
                        error={
                          formik.touched.gender && Boolean(formik.errors.gender)
                        }
                        helperText={
                          formik.touched.gender &&
                          (formik.errors.gender as string)
                        }
                      />
                    )}
                    options={GENDER}
                    getOptionLabel={(option: any) => option}
                    onChange={(e, value) => {
                      formik.setFieldValue("gender", value);
                    }}
                    value={formik.values.gender}
                  />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <TextField
                    label="Experience"
                    type="number"
                    fullWidth
                    error={
                      formik.touched.experience &&
                      Boolean(formik.errors.experience)
                    }
                    helperText={
                      formik.touched.experience &&
                      (formik.errors.experience as string)
                    }
                    id="experience"
                    name="experience"
                    value={formik.values.experience}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Grid>

                <Grid size={{ xs: 12, lg: 12 }}>
                  <Autocomplete
                    multiple
                    freeSolo
                    options={[]}
                    value={formik.values.primarySubjects}
                    onChange={(e, newValue) => {
                      formik.setFieldValue("primarySubjects", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Primary Subjects"
                        placeholder="Type a subject and press Enter"
                        error={
                          formik.touched.primarySubjects &&
                          Boolean(formik.errors.primarySubjects)
                        }
                        helperText={
                          formik.touched.primarySubjects &&
                          (formik.errors.primarySubjects as string)
                        }
                      />
                    )}
                  />
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                  <BeamButton
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: COLORS.ACCENT_TAN,
                      color: COLORS.BLACK,
                      py: 1.5,
                      fontWeight: 600,
                      fontSize: 16,
                      fontFamily: montserrat.style.fontFamily,
                      textTransform: "none",
                      boxShadow: "0px 8px 20px rgba(209, 160, 84, 0.3)",
                      "&:hover": {
                        bgcolor: "#B88A40",
                        boxShadow: "0px 10px 25px rgba(209, 160, 84, 0.4)",
                      },
                      width: 200,
                    }}
                  >
                    Review Profile
                  </BeamButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default EducatorSignup;
