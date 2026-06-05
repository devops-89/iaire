import Breadcrumb from "@/components/widgets/Breadcrumb";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
  Stack,
  Autocomplete,
  IconButton,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addInstitutionInnovationValidationSchema } from "@/utils/validationSchema";
import { CATEGORY, COLORS, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat, newBlack_light } from "@/utils/fonts";
import {
  Title,
  Category,
  Description,
  CheckCircle,
  CloudUpload,
  Delete,
  InsertDriveFile,
} from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { useGetTeam } from "@/hooks/school/useTeam";
import { useCreateInnovation } from "@/hooks/school/useInnovation";
import InnovationForm from "./components/InnovationForm";
import { INNOVATION_FORM_PROPS } from "@/utils/type";

const AddInnovation = () => {
  const { loading: createLoading, createInnovation } = useCreateInnovation();

  const formik = useFormik({
    initialValues: {
      title: "",
      team: null as any,
      problemDescription: "",
      solutionDescription: "",
      file: null as File | null,
    },
    validationSchema: addInstitutionInnovationValidationSchema,
    onSubmit: (values) => {
      createInnovation(values);
      // console.log("first", values);
    },
  });

  return (
    <Box sx={{ p: 1 }}>
      <Card
        sx={{
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Breadcrumb
          title="Add Innovation"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard/institution",
            },
            {
              title: "Innovation Submissions",
              href: "/dashboard/institution/innovation-submission",
            },
            {
              title: "Add Innovation",
              href: "/dashboard/institution/innovation-submission/add-innovation",
            },
          ]}
        />
        <InnovationForm formik={formik} submitLoading={createLoading} />
      </Card>
    </Box>
  );
};

export default AddInnovation;
