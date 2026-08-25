import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
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
import { useIssueNoc } from "@/hooks/school/useIssueNoc";

interface IssueNocModalProps {
  educatorId?: string | number | null;
}

const IssueNocValidationSchema = Yup.object().shape({
  dateOfJoining: Yup.string().required("Date of Joining is required"),
  lastWorkingDate: Yup.string().required("Last Working Date is required"),
  reason: Yup.string().required("Reason is required"),
  nocIssueDate: Yup.string().required("NOC Issue Date is required"),
  remarks: Yup.string(),
});

const IssueNocModal = ({ educatorId }: IssueNocModalProps) => {
  const { hideModal } = useModal();
  const { loading, issueNoc } = useIssueNoc();

  const [dateOfJoining, setDateOfJoining] = React.useState<Moment | null>(null);
  const [lastWorkingDate, setLastWorkingDate] = React.useState<Moment | null>(
    null,
  );
  const [nocIssueDate, setNocIssueDate] = React.useState<Moment | null>(null);

  const formik = useFormik({
    initialValues: {
      dateOfJoining: "",
      lastWorkingDate: "",
      reason: "Change of Institution",
      nocIssueDate: "",
      remarks: "",
    },
    validationSchema: IssueNocValidationSchema,
    onSubmit: async (values) => {
      if (educatorId) {
        issueNoc({
          userId: Number(educatorId),
          dateOfJoining: values.dateOfJoining,
          lastWorkingDate: values.lastWorkingDate,
          nocIssueDate: values.nocIssueDate,
          reason: values.reason,
        });
      }
    },
  });

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: 700, color: COLORS.PRIMARY_BLUE }}
      >
        Issue NOC
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Date of Joining"
                value={dateOfJoining}
                onChange={(value) => {
                  setDateOfJoining(value);
                  formik.setFieldValue(
                    "dateOfJoining",
                    moment(value).format("YYYY-MM-DD"),
                  );
                }}
                slotProps={{
                  textField: {
                    sx: {
                      ...DATE_PICKER_STYLE_VALIDATION,
                      width: "100%",
                    },
                    helperText:
                      formik.touched.dateOfJoining &&
                      formik.errors.dateOfJoining,
                    error:
                      formik.touched.dateOfJoining &&
                      Boolean(formik.errors.dateOfJoining),
                  },
                }}
                disableFuture
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Last Working Date"
                value={lastWorkingDate}
                onChange={(value) => {
                  setLastWorkingDate(value);
                  formik.setFieldValue(
                    "lastWorkingDate",
                    moment(value).format("YYYY-MM-DD"),
                  );
                }}
                slotProps={{
                  textField: {
                    sx: {
                      ...DATE_PICKER_STYLE_VALIDATION,
                      width: "100%",
                    },
                    helperText:
                      formik.touched.lastWorkingDate &&
                      formik.errors.lastWorkingDate,
                    error:
                      formik.touched.lastWorkingDate &&
                      Boolean(formik.errors.lastWorkingDate),
                  },
                }}
                disableFuture
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="NOC Issue Date"
                value={nocIssueDate}
                onChange={(value) => {
                  setNocIssueDate(value);
                  formik.setFieldValue(
                    "nocIssueDate",
                    moment(value).format("YYYY-MM-DD"),
                  );
                }}
                slotProps={{
                  textField: {
                    sx: {
                      ...DATE_PICKER_STYLE_VALIDATION,
                      width: "100%",
                    },
                    helperText:
                      formik.touched.nocIssueDate && formik.errors.nocIssueDate,
                    error:
                      formik.touched.nocIssueDate &&
                      Boolean(formik.errors.nocIssueDate),
                  },
                }}
                disableFuture
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Reason"
              fullWidth
              disabled
              value={formik.values.reason}
              sx={TEXTFIELD_STYLE_VALIDATION}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Remarks"
              fullWidth
              multiline
              rows={3}
              name="remarks"
              value={formik.values.remarks}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={TEXTFIELD_STYLE_VALIDATION}
              helperText={formik.touched.remarks && formik.errors.remarks}
              error={formik.touched.remarks && Boolean(formik.errors.remarks)}
            />
          </Grid>
        </Grid>
        <Box
          sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          <BeamButton color="inherit" onClick={hideModal}>
            Cancel
          </BeamButton>
          <BeamButton
            type="submit"
            disabled={loading}
            sx={{ color: COLORS.WHITE }}
          >
            {loading ? "Submitting..." : "Submit"}
          </BeamButton>
        </Box>
      </form>
    </Box>
  );
};

export default IssueNocModal;
