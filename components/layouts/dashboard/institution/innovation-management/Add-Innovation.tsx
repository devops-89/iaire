import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useCreateInnovation } from "@/hooks/school/useInnovation";
import { addInstitutionInnovationValidationSchema } from "@/utils/validationSchema";
import { Box, Card } from "@mui/material";
import { useFormik } from "formik";
import InnovationForm from "./components/InnovationForm";

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
