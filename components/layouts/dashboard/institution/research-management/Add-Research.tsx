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
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { addResearchValidationSchema } from "@/utils/validationSchema";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import { MenuBook, Topic, Description } from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { RESEARCH_FORM_PROPS } from "@/utils/type";
import AddResearchForm from "./components/Add-Research-Form";

const AddResearch = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik<RESEARCH_FORM_PROPS>({
    initialValues: {
      title: "",
      topic: "",
      description: "",
      teamId: "",
    },
    validationSchema: addResearchValidationSchema,
    onSubmit: (values) => {},
  });

  return (
    <Box sx={{ p: 1 }}>
      <Card
        sx={{
          mt: 4,
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Breadcrumb
          title="Add Research"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard/institution",
            },
            {
              title: "Research Submissions",
              href: "/dashboard/institution/research-submission",
            },
            {
              title: "Add Research",
              href: "/dashboard/institution/research-submission/add-research",
            },
          ]}
        />
        <AddResearchForm isLoading={loading} formik={formik} />
      </Card>
    </Box>
  );
};

export default AddResearch;
