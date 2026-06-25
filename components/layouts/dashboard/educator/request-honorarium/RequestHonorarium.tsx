"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { montserrat } from "@/utils/fonts";
import { Box, Card, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import HonorariumForm from "./HonorariumForm";
import HonorariumHistory from "./HonorariumHistory";

const RequestHonorarium = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: 1 }}>
        <Stack sx={{ mb: 4 }}>
          <Breadcrumb
            title="Request Honorarium"
            data={[
              { title: "Dashboard", href: "/dashboard" },
              {
                title: "Request Honorarium",
                href: "/dashboard/educator/request-honorarium",
              },
            ]}
          />
        </Stack>

        <Card
          sx={{
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e0e0e0",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            sx={{
              borderBottom: "1px solid #e0e0e0",
              px: 3,
              pt: 2,
              "& .MuiTab-root": {
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 600,
                textTransform: "none",
                fontSize: 15,
              },
            }}
          >
            <Tab label="Request Honorarium" />
            <Tab label="Request History" />
          </Tabs>

          <Box sx={{ p: 4 }}>
            {tabValue === 0 && (
              <HonorariumForm onSubmitSuccess={() => setTabValue(1)} />
            )}
            {tabValue === 1 && <HonorariumHistory />}
          </Box>
        </Card>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default RequestHonorarium;
