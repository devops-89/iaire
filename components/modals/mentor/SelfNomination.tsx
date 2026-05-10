import { CustomTabPanel } from "@/components/widgets/TabPanels";
import { useBatches } from "@/hooks/mentor/getBatches";
import { CATEGORY_TYPES } from "@/utils/constant";
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
} from "@mui/material";
import moment from "moment";
import { useState } from "react";

const TeacherSelfNomination = () => {
  const [tabValue, setTabValue] = useState(CATEGORY.INNOVATION);
  const { batchData, batchLoading } = useBatches(tabValue);
  const [selectedBatch, setSelectedBatch] = useState<any | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: CATEGORY) => {
    setTabValue(newValue);
    setSelectedBatch(null);
  };

  //   const [questionData, setQuestionData] = useState([]);

  const questionDataHandler = (data: any) => {
    setSelectedBatch(data);
    // console.log("data", data);
  };

  console.log("first", batchData);
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
                            ? "1px solid" + COLORS.PRIMARY_NAVY
                            : "",
                        color:
                          selectedBatch?.id === item?.id
                            ? COLORS.BLACK
                            : COLORS.BLACK,
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
            <Grid container spacing={3}>
              {selectedBatch?.questions?.map((q: any, index: number) => (
                <Grid size={12} key={q.id || index}>
                  {q.type === "TEXT" && (
                    <TextField
                      fullWidth
                      label={q.question}
                      required={q.required}
                      variant="outlined"
                    />
                  )}

                  <Button
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
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TeacherSelfNomination;
