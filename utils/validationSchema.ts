import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const paymentValidationSchema = Yup.object({
  cardholderName: Yup.string().required("Cardholder name is required"),
  cardNumber: Yup.string()
    .matches(
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/,
      "Only Visa, Mastercard, and Amex are accepted"
    )
    .required("Card number is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry (MM/YY)")
    .required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});
export const otpValidationSchema = Yup.object({
  otp: Yup.string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
});

export const schoolSignupValidationSchema = Yup.object({
  schoolName: Yup.string().required("School name is required"),
  principalName: Yup.string().required("Principal's name is required"),
  affiliationType: Yup.string().required("Affiliation type is required"),
  affiliationNumber: Yup.string().required("Affiliation number is required"),
  affiliationCertificate: Yup.mixed().required("Affiliation certificate is required"),
  email: Yup.string().email("Invalid email").required("School email is required"),
  phone: Yup.string()
    .test("is-valid-phone", "Phone number must be at least 10 digits", (value) => {
      const digits = value?.replace(/\D/g, "");
      return digits ? digits.length >= 10 : false;
    })
    .required("Phone number is required"),
  address: Yup.string().required("School address is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
