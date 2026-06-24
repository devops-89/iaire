"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useCreateTeacherInnovation } from "@/hooks/mentor/useTeacherInnovation";
import { addEducatorInnovationValidationSchema } from "@/utils/validationSchema";
import { Box, Card } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import InnovationForm from "@/components/layouts/dashboard/institution/innovation-management/components/InnovationForm";

const AddInnovation = () => {
  const { loading: createLoading, createTeacherInnovation } =
    useCreateTeacherInnovation();

  const formik = useFormik({
    initialValues: {
      title: "",
      problemDescription: "",
      solutionDescription: "",
      file: null as File | null,
      isDraft: false,
    },
    validationSchema: addEducatorInnovationValidationSchema,
    onSubmit: (values: any) => {
      createTeacherInnovation(values, values.isDraft);
    },
  });

  return (
    <EducatorDashboardLayout>
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
                href: "/dashboard",
              },
              {
                title: "Innovation Submission",
                href: "/dashboard/educator/innovation-management",
              },
              {
                title: "Add Innovation",
                href: "/dashboard/educator/innovation-management/add-innovation",
              },
            ]}
          />
          <InnovationForm
            formik={formik}
            submitLoading={createLoading}
            hideTeam={true}
          />
        </Card>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default AddInnovation;
