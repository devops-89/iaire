"use client";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useCreateStudentInnovation } from "@/hooks/school/useInnovation";
import { addEducatorInnovationValidationSchema } from "@/utils/validationSchema";
import { Box, Card } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import InnovationForm from "@/components/layouts/dashboard/institution/innovation-management/components/InnovationForm";

const AddInnovation = () => {
  const { loading: createLoading, createStudentInnovation } =
    useCreateStudentInnovation();

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
      createStudentInnovation(values, values.isDraft);
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
              href: "/dashboard/student",
            },
            {
              title: "Innovation Management",
              href: "/dashboard/student/innovation-management",
            },
            {
              title: "Add Innovation",
              href: "/dashboard/student/innovation-management/add-innovation",
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
  );
};

export default AddInnovation;
