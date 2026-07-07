import { useRequestHonorarium } from "@/hooks/mentor/useRequestHonorarium";
import { useGetTeam } from "@/hooks/school/useTeam";
import { CATEGORY, COLORS } from "@/utils/enum";
import { montserrat } from "@/utils/fonts";
import { REQUEST_HONORARIUM_REQUEST_PROPS } from "@/utils/type";
import { requestHonorariumValidationSchema } from "@/utils/validationSchema";
import { AccountBalance, Work } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { HONORARIUM_CATEGORY } from "@/utils/constant";

const ACHIEVEMENT_MAP: Record<string, string[]> = {
  [CATEGORY.INNOVATION]: ["STARTUP", "PATENT", "OTHER"],
  [CATEGORY.RESEARCH]: ["RESEARCH TOPIC"],
};

const BANK_FIELDS: { name: string; label: string; placeholder?: string }[] = [
  { name: "accountHolderName", label: "Account Holder Name*" },
  { name: "bankName", label: "Bank Name*" },
  { name: "accountNumber", label: "Account Number*" },
  { name: "ifscCode", label: "IFSC Code*", placeholder: "e.g. SBIN0001234" },
  { name: "branchName", label: "Branch Name*" },
];

const getFieldProps = (formik: any, name: string) => ({
  name,
  value: formik.values[name],
  onChange: formik.handleChange,
  error: formik.touched[name] && !!formik.errors[name],
  helperText: formik.touched[name] && formik.errors[name],
});

// Helper for Autocomplete error/helperText
const getAutoCompleteError = (formik: any, name: string) => ({
  error: formik.touched[name] && !!formik.errors[name],
  helperText: formik.touched[name] && formik.errors[name],
});

interface HonorariumFormProps {
  onSubmitSuccess: () => void;
}

const HonorariumForm = ({ onSubmitSuccess }: HonorariumFormProps) => {
  const { fetchData, loading: teamLoading, teamData } = useGetTeam();
  const { loading: submitting, createHonorariumRequest } =
    useRequestHonorarium();

  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      teamId: "",
      type: "",
      achievement: "",
      description: "",
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      branchName: "",
    },
    validationSchema: requestHonorariumValidationSchema,
    onSubmit: async (values) => {
      const payload: REQUEST_HONORARIUM_REQUEST_PROPS = {
        teamId: values.teamId,
        type: values.type,
        achievementType: values.achievement,
        description: values.description,
        accountHolderName: values.accountHolderName,
        bankName: values.bankName,
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        branchName: values.branchName,
      };

      await createHonorariumRequest(payload, () => {
        formik.resetForm();
        onSubmitSuccess();
      });
    },
  });

  const achievementOptions =
    ACHIEVEMENT_MAP[formik.values.type] ||
    Object.values(ACHIEVEMENT_MAP).flat();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Section 1: Honorarium Details */}
        <Grid size={12}>
          <SectionHeader
            icon={<Work sx={{ color: COLORS.PRIMARY_NAVY }} />}
            title="Honorarium Request Details"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Autocomplete
            options={teamData}
            getOptionLabel={(o) => `${o.title} (${o.teamCode})`}
            isOptionEqualToValue={(o, v) => o.id === v.id}
            loading={teamLoading}
            value={
              teamData.find(
                (t) => t.id.toString() === formik.values.teamId,
              ) || null
            }
            onChange={(_, v) =>
              formik.setFieldValue("teamId", v ? v.id.toString() : "")
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Team*"
                {...getAutoCompleteError(formik, "teamId")}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Autocomplete
            options={HONORARIUM_CATEGORY.map((item) => item.label)}
            value={formik.values.type || null}
            onChange={(_, v) => {
              formik.setFieldValue("type", v || "");
              formik.setFieldValue("achievement", "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Type*"
                {...getAutoCompleteError(formik, "type")}
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <Autocomplete
            options={achievementOptions}
            disabled={!formik.values.type}
            value={formik.values.achievement || null}
            onChange={(_, v) => formik.setFieldValue("achievement", v || "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Achievement*"
                {...getAutoCompleteError(formik, "achievement")}
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description / Supporting Notes*"
            placeholder="Provide a detailed description of the achievement..."
            {...getFieldProps(formik, "description")}
          />
        </Grid>

        {/* Section 2: Bank Account Details */}
        <Grid size={12} sx={{ mt: 3 }}>
          <SectionHeader
            icon={<AccountBalance sx={{ color: COLORS.PRIMARY_NAVY }} />}
            title="Bank Account Details"
          />
        </Grid>

        {BANK_FIELDS.map(({ name, label, placeholder }) => (
          <Grid key={name} size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label={label}
              placeholder={placeholder}
              {...getFieldProps(formik, name)}
              {...(name === "ifscCode" && {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  formik.setFieldValue(
                    "ifscCode",
                    e.target.value.toUpperCase(),
                  ),
              })}
            />
          </Grid>
        ))}

        <Grid size={12} sx={{ mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={submitting}
            startIcon={
              submitting ? (
                <CircularProgress size={20} color="inherit" />
              ) : undefined
            }
            sx={{
              backgroundColor: COLORS.PRIMARY_NAVY,
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "10px",
              padding: "10px 30px",
              "&:hover": {
                backgroundColor: COLORS.PRIMARY_NAVY,
                opacity: 0.9,
              },
            }}
          >
            {submitting ? "Submitting..." : "Submit Honorarium Request"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HonorariumForm;
