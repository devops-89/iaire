"use client";
import React, { use } from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import { Box, Grid, Typography, IconButton, Breadcrumbs, Link, Button } from "@mui/material";
import { ArrowBack, NavigateNext } from "@mui/icons-material";
import { useFormik } from "formik";
import { paymentValidationSchema } from "@/utils/validationSchema";
import { useRouter } from "next/navigation";
import PaymentForm from "@/components/dashboard/school/membership-management/PaymentForm";
import PaymentSummary from "@/components/dashboard/school/membership-management/PaymentSummary";
import { INVOICES } from "@/components/dashboard/school/membership-management/InvoiceList";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";

const InvoicePaymentPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();
  
  const selectedInvoice = INVOICES.find((inv) => inv.id === id);

  const formik = useFormik({
    initialValues: {
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: paymentValidationSchema,
    onSubmit: (values) => {
      console.log("Dues payment submitted:", values, selectedInvoice);
      alert(`Payment of ${selectedInvoice?.amount} successful! Invoice ${id} cleared.`);
      router.push("/dashboard/school/membership-management/pay-dues");
    },
  });

  if (!selectedInvoice) {
    return (
      <SchoolDashboardLayout>
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5">Invoice not found</Typography>
          <Button onClick={() => router.push("/dashboard/school/membership-management/pay-dues")}>
            Back to Invoices
          </Button>
        </Box>
      </SchoolDashboardLayout>
    );
  }

  return (
    <SchoolDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs 
            separator={<NavigateNext fontSize="small" />} 
            sx={{ mb: 2, fontFamily: montserrat.style.fontFamily }}
          >
            <Link 
              underline="hover" 
              color="inherit" 
              href="/dashboard/school/membership-management/pay-dues"
              sx={{ cursor: 'pointer', fontSize: '14px' }}
            >
              Invoices
            </Link>
            <Typography color="text.primary" sx={{ fontSize: '14px', fontWeight: 600 }}>
              Payment for {id}
            </Typography>
          </Breadcrumbs>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton 
              onClick={() => router.back()}
              sx={{ 
                bgcolor: "rgba(11, 23, 39, 0.05)",
                color: COLORS.PRIMARY_NAVY,
                "&:hover": { bgcolor: "rgba(11, 23, 39, 0.1)" }
              }}
            >
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 700,
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                Complete Payment
              </Typography>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Processing payment for {selectedInvoice.description}
              </Typography>
            </Box>
          </Box>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <PaymentForm formik={formik} />
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <PaymentSummary selectedInvoice={selectedInvoice} />
            </Grid>
          </Grid>
        </form>
      </Box>
    </SchoolDashboardLayout>
  );
};

export default InvoicePaymentPage;
