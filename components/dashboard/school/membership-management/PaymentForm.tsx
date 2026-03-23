"use client";
import React from "react";
import {
  Paper,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import {
  Person,
  CreditCard,
  CalendarToday,
  Lock,
  ArrowForward,
  VerifiedUser,
} from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";

interface PaymentFormProps {
  formik: any;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ formik }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "24px",
        border: "1px solid #f0f0f0",
        backgroundColor: COLORS.WHITE,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontWeight: 700,
          color: COLORS.PRIMARY_NAVY,
          mb: 3,
        }}
      >
        Payment Details
      </Typography>

      <Stack spacing={3}>
        <TextField
          label="Cardholder Name"
          placeholder="John Doe"
          fullWidth
          name="cardholderName"
          value={formik.values.cardholderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cardholderName && Boolean(formik.errors.cardholderName)}
          helperText={formik.touched.cardholderName && formik.errors.cardholderName}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: "rgba(0,0,0,0.4)" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
        />

        <TextField
          label="Card Number"
          placeholder="0000 0000 0000 0000"
          fullWidth
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            if (val.length <= 16) formik.setFieldValue("cardNumber", val);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
          helperText={formik.touched.cardNumber && formik.errors.cardNumber}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCard sx={{ color: "rgba(0,0,0,0.4)" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
        />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Expiry Date"
              placeholder="MM/YY"
              fullWidth
              name="expiryDate"
              value={formik.values.expiryDate}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, "");
                if (val.length >= 2) val = val.substring(0, 2) + "/" + val.substring(2);
                if (val.length <= 5) formik.setFieldValue("expiryDate", val);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
              helperText={formik.touched.expiryDate && formik.errors.expiryDate}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarToday sx={{ color: "rgba(0,0,0,0.4)" }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="CVV"
              placeholder="•••"
              fullWidth
              name="cvv"
              type="password"
              value={formik.values.cvv}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                if (val.length <= 4) formik.setFieldValue("cvv", val);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "rgba(0,0,0,0.4)" }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          fullWidth
          size="large"
          type="submit"
          endIcon={<ArrowForward />}
          sx={{
            bgcolor: COLORS.ACCENT_TAN,
            color: COLORS.BLACK,
            py: 2,
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: 800,
            textTransform: "none",
            fontFamily: montserrat.style.fontFamily,
            mt: 2,
            "&:hover": {
              bgcolor: "#B88A40",
              transform: "translateY(-2px)",
            },
          }}
        >
          Confirm Payment
        </Button>

        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <VerifiedUser sx={{ color: "#10B981", fontSize: 18 }} />
          <Typography sx={{ fontSize: 12, color: "rgba(0,0,0,0.5)", fontWeight: 500 }}>
            Secure 256-bit SSL encrypted payment
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaymentForm;
