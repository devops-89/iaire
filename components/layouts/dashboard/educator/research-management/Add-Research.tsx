"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useCreateResearch } from "@/hooks/school/useResearch";
import { addEducatorResearchValidationSchema } from "@/utils/validationSchema";
import { RESEARCH_FORM_PROPS } from "@/utils/type";
import { Box, Card } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import AddResearchForm from "@/components/layouts/dashboard/institution/research-management/components/Add-Research-Form";

const AddResearch = () => {
  const { addResearch, loading } = useCreateResearch();

  const formik = useFormik<RESEARCH_FORM_PROPS>({
    initialValues: {
      title: "",
      topic: "",
      description: "",
      teamId: "",
    },
    validationSchema: addEducatorResearchValidationSchema,
    onSubmit: (values) => {
      const { teamId, ...payload } = values;
      addResearch(payload);
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
            title="Add Research"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard",
              },
              {
                title: "Research Submissions",
                href: "/dashboard/educator/research-management",
              },
              {
                title: "Add Research",
                href: "/dashboard/educator/research-management/add-research",
              },
            ]}
          />
          <AddResearchForm isLoading={loading} formik={formik} hideTeam={true} />
        </Card>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default AddResearch;
