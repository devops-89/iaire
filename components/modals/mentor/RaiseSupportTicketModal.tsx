"use client";
import React from "react";
import { useModal } from "@/store/useModal";
import { useCreateSupportTicket } from "@/hooks/mentor/useTeacherSupport";
import { ASSISTANCE_CATEGORY, COLORS, PRIORITY } from "@/utils/enum";
import { ASSISTANCE_RESPONSE_DATA_PROPS } from "@/utils/type";
import { raiseSupportTicketValidationSchema } from "@/utils/validationSchema";
import { montserrat } from "@/utils/fonts";
import { useFormik } from "formik";
import { CATEGORY_OPTIONS, PRIORITY_OPTIONS } from "@/utils/constant";
import BeamButton from "@/components/widgets/BeamButton";
import {
  Autocomplete,
  Box,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography} from "@mui/material";

interface RaiseSupportTicketModalProps {
  onTicketRaised: () => void;
}

const RaiseSupportTicketModal = ({ onTicketRaised }: RaiseSupportTicketModalProps) => {
  const { hideModal } = useModal();
  const { loading, raiseTicket } = useCreateSupportTicket();

  const formik = useFormik({
    initialValues: {
      subject: "",
      category: "",
      priority: "",
      description: "",
    },
    validationSchema: raiseSupportTicketValidationSchema,
    onSubmit: async (values) => {
      const payload: ASSISTANCE_RESPONSE_DATA_PROPS = {
        subject: values.subject.trim(),
        description: values.description.trim(),
        category: values.category as ASSISTANCE_CATEGORY,
        priority: values.priority as PRIORITY,
      };

      await raiseTicket(payload, () => {
        onTicketRaised();
      });
    },
  });

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          color: COLORS.PRIMARY_NAVY,
          mb: 3,
        }}
      >
        Raise Support Ticket
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <TextField
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              placeholder="Brief summary of the issue"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && !!formik.errors.subject}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={CATEGORY_OPTIONS}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              value={
                CATEGORY_OPTIONS.find(
                  (option) => option.value === formik.values.category,
                ) || null
              }
              onChange={(_, newValue) => {
                formik.setFieldValue("category", newValue ? newValue.value : "");
              }}
              onBlur={formik.handleBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="category"
                  label="Category"
                  placeholder="Select Category"
                  error={formik.touched.category && !!formik.errors.category}
                  helperText={formik.touched.category && formik.errors.category}
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={PRIORITY_OPTIONS}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              value={
                PRIORITY_OPTIONS.find(
                  (option) => option.value === formik.values.priority,
                ) || null
              }
              onChange={(_, newValue) => {
                formik.setFieldValue("priority", newValue ? newValue.value : "");
              }}
              onBlur={formik.handleBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="priority"
                  label="Priority"
                  placeholder="Select Priority"
                  error={formik.touched.priority && !!formik.errors.priority}
                  helperText={formik.touched.priority && formik.errors.priority}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="description"
              name="description"
              label="Description"
              placeholder="Provide details about the issue you are facing..."
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && !!formik.errors.description}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>

          <Grid size={12}>
            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
              <BeamButton
                onClick={hideModal}
                disabled={loading}
                sx={{
                  color: "#6b7280",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Cancel
              </BeamButton>
              <BeamButton
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  fontFamily: montserrat.style.fontFamily,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  "&:hover": {
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    opacity: 0.9,
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Ticket"}
              </BeamButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RaiseSupportTicketModal;
