import { CATEGORY_TYPES, MODE_TRAINING } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  DATE_PICKER_STYLE_VALIDATION,
  TEXTFIELD_STYLE_VALIDATION,
} from "@/utils/style";
import { TEACHERVALIDATIONSCHEMA } from "@/utils/validationSchema";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useFormik } from "formik";
import moment, { Moment } from "moment";
import React from "react";

const EducatorNomination = ({ educatorId }: { educatorId: string | null }) => {
  const [startDate, setStartDate] = React.useState<Moment | null>(null);
  const [endDate, setEndDate] = React.useState<Moment | null>(null);

  const startDateHandler = (value: any) => {
    setStartDate(value);
    // console.log("value start date timestamp", moment(value).unix());
    formik.setFieldValue("startDate", moment(value).unix());
  };
  const endDateHandler = (value: any) => {
    setEndDate(value);
    // console.log("value end date timestamp", moment(value).unix());
    formik.setFieldValue("endDate", moment(value).unix());
  };

  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      category: "",
      mode: "",
    },
    validationSchema: TEACHERVALIDATIONSCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box sx={{ width: 600, maxWidth: "100%" }}>
      <Typography
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontSize: 25,
          fontWeight: 500,
          color: "#000",
        }}
      >
        Educator Nomination Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ mt: 4 }} spacing={4}>
          <Grid size={6}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Select Availability Start Date"
                onChange={startDateHandler}
                disablePast
                slotProps={{
                  textField: {
                    sx: {
                      ...DATE_PICKER_STYLE_VALIDATION,
                      width: "100%",
                    },
                    helperText:
                      formik.touched.startDate && formik.errors.startDate,
                    error:
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate),
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={6}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Select Availability End Date"
                onChange={endDateHandler}
                //   disablePast
                slotProps={{
                  textField: {
                    sx: {
                      ...DATE_PICKER_STYLE_VALIDATION,
                      width: "100%",
                    },
                    helperText: formik.touched.endDate && formik.errors.endDate,
                    error:
                      formik.touched.endDate && Boolean(formik.errors.endDate),
                  },
                }}
                minDate={startDate || undefined}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={CATEGORY_TYPES}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Category"
                  sx={TEXTFIELD_STYLE_VALIDATION}
                  helperText={formik.touched.category && formik.errors.category}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                />
              )}
              onChange={(event, value) =>
                formik.setFieldValue("category", value?.label)
              }
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={MODE_TRAINING}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Mode of Training"
                  sx={TEXTFIELD_STYLE_VALIDATION}
                  helperText={formik.touched.mode && formik.errors.mode}
                  error={formik.touched.mode && Boolean(formik.errors.mode)}
                />
              )}
              onChange={(event, value) =>
                formik.setFieldValue("mode", value?.label)
              }
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            border: "1px solid" + COLORS.PRIMARY_NAVY,
            backgroundColor: COLORS.PRIMARY_NAVY,
            color: COLORS.WHITE,
            mt: 4,
            //   width: "100%",
            width: 150,
            height: 40,
            borderRadius: 1,
            textTransform: "none",
            fontFamily: roboto.style.fontFamily,
            fontSize: 16,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
            },
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default EducatorNomination;
