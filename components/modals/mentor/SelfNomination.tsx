import { CustomTabPanel } from "@/components/widgets/TabPanels";
import { useBatches } from "@/hooks/mentor/getBatches";
import { CATEGORY_TYPES, MODE_TRAINING } from "@/utils/constant";
import { CATEGORY, COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Tab,
  Tabs,
  Typography,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useSelfNominateTeacher,
  useTrainingList,
} from "@/hooks/mentor/useNominateTeacher";

const TeacherSelfNomination = ({ batchId }: { batchId?: string }) => {
  const [tabValue, setTabValue] = useState(CATEGORY.INNOVATION);
  const { batchData, batchLoading } = useBatches(tabValue);
  const [selectedBatch, setSelectedBatch] = useState<any | null>(null);

  const { getTeacherTrainingList } = useTrainingList();
  const { selfNominateTeacher, loading } = useSelfNominateTeacher();

  const formik = useFormik({
    initialValues: {
      answers: {} as Record<string, string>,
      trainingMode: null as any,
    },
    enableReinitialize: true,
    validationSchema: Yup.lazy(() => {
      const shape: any = {
        trainingMode: Yup.object()
          .nullable()
          .required("Training mode is required"),
      };

      const answerShape: any = {};
      if (selectedBatch?.questions) {
        selectedBatch.questions.forEach((q: any, index: number) => {
          if (q.required) {
            const fieldId = q.id || String(index);
            answerShape[fieldId] = Yup.string().required(
              "This field is required",
            );
          }
        });
      }
      shape.answers = Yup.object().shape(answerShape);

      return Yup.object(shape);
    }),
    onSubmit: async (values) => {
      const payload = {
        mode: values.trainingMode?.label,
        batchId: selectedBatch?.id,
        answers: Object.entries(values.answers).map(([questionId, answer]) => ({
          questionId,
          answer,
        })),
      };

      await selfNominateTeacher(payload);

      formik.resetForm();
      // console.log(
      //   "Nomination Submitted Payload:",
      //   JSON.stringify(payload, null, 2),
      // );
      // // TODO: send the payload to backend
    },
  });

  console.log("firstnumber", formik.errors);

  const handleTabChange = (event: React.SyntheticEvent, newValue: CATEGORY) => {
    setTabValue(newValue);
    setSelectedBatch(null);
    formik.resetForm();
  };

  const questionDataHandler = (data: any) => {
    setSelectedBatch(data);
    formik.resetForm();
  };

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: roboto.style.fontFamily,
            fontWeight: 700,
            color: COLORS.BLACK,
          }}
        >
          Select Your Preferred Batch
        </Typography>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontFamily: roboto.style.fontFamily,
            },
          }}
        >
          {CATEGORY_TYPES.map((val, i) => (
            <Tab label={val} key={i} value={val} />
          ))}
        </Tabs>

        {CATEGORY_TYPES.map((val, i) => (
          <CustomTabPanel index={val} value={tabValue} key={i}>
            <Grid container spacing={2}>
              {batchData
                ?.filter((item) => {
                  if (!item?.startDate) return false;
                  return (
                    moment(item.startDate)
                      .startOf("day")
                      .diff(moment().startOf("day"), "days") >= 7
                  );
                })
                .map((item, j) => (
                  <Grid size={4} key={j}>
                    <CardActionArea
                      sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.20)",
                        borderRadius: "10px",
                        border:
                          selectedBatch?.id === item?.id
                            ? "1px solid " + COLORS.PRIMARY_NAVY
                            : "",
                        color: COLORS.BLACK,
                      }}
                      onClick={() => questionDataHandler(item)}
                    >
                      <Typography>{`Batch ${j + 1}`}</Typography>
                      <Typography sx={{ fontSize: 12 }}>
                        Start Date : {moment(item?.startDate).format("LL")}
                      </Typography>
                      <Typography sx={{ fontSize: 12 }}>
                        End Date : {moment(item?.endDate).format("LL")}
                      </Typography>
                    </CardActionArea>
                  </Grid>
                ))}
            </Grid>
          </CustomTabPanel>
        ))}

        {selectedBatch && (
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 600,
                color: COLORS.BLACK,
                mb: 2,
              }}
            >
              Please Answer the Following Questions
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                {selectedBatch?.questions?.map((q: any, index: number) => {
                  const fieldId = q.id || String(index);
                  return (
                    <Grid size={12} key={fieldId}>
                      {q.type === "TEXT" && (
                        <TextField
                          fullWidth
                          name={`answers.${fieldId}`}
                          label={q.question}
                          variant="outlined"
                          value={formik.values.answers[fieldId] || ""}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.answers?.[fieldId] &&
                            Boolean((formik.errors.answers as any)?.[fieldId])
                          }
                          helperText={
                            formik.touched.answers?.[fieldId] &&
                            (formik.errors.answers as any)?.[fieldId]
                          }
                        />
                      )}
                    </Grid>
                  );
                })}

                <Grid size={12}>
                  <Autocomplete
                    options={MODE_TRAINING}
                    getOptionLabel={(option: any) => option.label || ""}
                    value={formik.values.trainingMode}
                    onChange={(e, value) =>
                      formik.setFieldValue("trainingMode", value)
                    }
                    onBlur={() => formik.setFieldTouched("trainingMode", true)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Training Mode"
                        error={
                          formik.touched.trainingMode &&
                          Boolean(formik.errors.trainingMode)
                        }
                        helperText={
                          formik.touched.trainingMode &&
                          (formik.errors.trainingMode as string)
                        }
                      />
                    )}
                    sx={{ mt: 2 }}
                  />
                </Grid>

                <Grid size={12}>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: COLORS.PRIMARY_NAVY,
                      color: COLORS.WHITE,
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 600,
                      mt: 2,
                      width: "100px",
                      textTransform: "none",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TeacherSelfNomination;
