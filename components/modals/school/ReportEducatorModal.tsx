import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useFormik } from "formik";
import moment, { Moment } from "moment";
import * as Yup from "yup";
import BeamButton from "@/components/widgets/BeamButton";
import { COLORS } from "@/utils/enum";
import {
  TEXTFIELD_STYLE_VALIDATION,
  DATE_PICKER_STYLE_VALIDATION,
} from "@/utils/style";
import { useModal } from "@/store/useModal";
import { REPORT_CATEGORY } from "@/utils/constant";

interface ReportEducatorModalProps {
  educatorId?: string | number | null;
}

const ReportEducatorValidationSchema = Yup.object().shape({
  category: Yup.string().required("Report category is required"),
  incidentDate: Yup.string().required("Incident date is required"),
  description: Yup.string().required("Incident description is required"),
  declaration: Yup.boolean().oneOf([true], "You must confirm the declaration"),
});

const ReportEducatorModal = ({ educatorId }: ReportEducatorModalProps) => {
  const { hideModal } = useModal();

  const [incidentDate, setIncidentDate] = React.useState<Moment | null>(null);

  const formik = useFormik({
    initialValues: {
      category: "",
      incidentDate: "",
      description: "",
      declaration: false,
    },
    validationSchema: ReportEducatorValidationSchema,
    onSubmit: async (values) => {
      // Mock API integration
      console.log("Submitting Report for Educator ID:", educatorId, values);
      hideModal();
    },
  });

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: 700, color: COLORS.PRIMARY_BLUE }}
      >
        Report Educator
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)}>
              <InputLabel id="category-label" sx={{
                // Adjust label styling to fit nicely inside or avoid overlapping
              }}>Report Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                label="Report Category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={TEXTFIELD_STYLE_VALIDATION}
              >
                {REPORT_CATEGORY.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Incident Date"
                value={incidentDate}
                onChange={(value) => {
                  setIncidentDate(value);
                  formik.setFieldValue(
                    "incidentDate",
                    moment(value).format("YYYY-MM-DD")
                  );
                }}
                slotProps={{
                  textField: {
                    sx: {
                      ...DATE_PICKER_STYLE_VALIDATION,
                      width: "100%",
                    },
                    helperText:
                      formik.touched.incidentDate && formik.errors.incidentDate,
                    error:
                      formik.touched.incidentDate &&
                      Boolean(formik.errors.incidentDate),
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={12}>
            <TextField
              label="Incident Description"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={TEXTFIELD_STYLE_VALIDATION}
              helperText={formik.touched.description && formik.errors.description}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
            />
          </Grid>
          <Grid size={12}>
            <FormControl error={formik.touched.declaration && Boolean(formik.errors.declaration)}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="declaration"
                    checked={formik.values.declaration}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    color="primary"
                    sx={{ mt: -0.5 }}
                  />
                }
                label={
                  <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 500, fontSize: 13 }}>
                    I confirm that the information provided in this report is accurate to the best of my knowledge and that this report is submitted in good faith. I understand that IAIRE may review the information provided and take appropriate action in accordance with its policies.
                  </Typography>
                }
                sx={{ alignItems: "flex-start" }}
              />
              {formik.touched.declaration && formik.errors.declaration && (
                <FormHelperText>{formik.errors.declaration}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <BeamButton color="inherit" onClick={hideModal}>
            Cancel
          </BeamButton>
          <BeamButton type="submit">Submit</BeamButton>
        </Box>
      </form>
    </Box>
  );
};

export default ReportEducatorModal;
