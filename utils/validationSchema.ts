import * as Yup from "yup";
import { MEMBER_TYPES } from "./enum";

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
      "Only Visa, Mastercard, and Amex are accepted",
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

export const institutionSignupValidationSchema = Yup.object({
  institutionName: Yup.string().required("Institution name is required"),
  principalName: Yup.string().required("Principal's name is required"),
  country: Yup.string().required("Please Select Country"),
  affiliationType: Yup.string().when("country", {
    is: (val: string) => val === "IN" || val === "AE",
    then: (schema) => schema.required("Affiliation type is required"),
    otherwise: (schema) => schema.optional(),
  }),
  affiliationNumber: Yup.string().when("country", {
    is: (val: string) => val === "IN" || val === "AE",
    then: (schema) => schema.required("Affiliation number is required"),
    otherwise: (schema) => schema.optional(),
  }),
  affiliationCertificate: Yup.mixed()
    .nullable()
    .when("country", {
      is: (val: string) => val === "IN" || val === "AE",
      then: (schema) => schema.required("Affiliation certificate is required"),
      otherwise: (schema) => schema.optional(),
    }),
  isd: Yup.string().when("country", {
    is: "US",
    then: (schema) => schema.required("ISD is required"),
    otherwise: (schema) => schema.optional(),
  }),
  email: Yup.string()
    .email("Invalid email")
    .required("Institution email is required"),
  phone: Yup.string()
    .test(
      "is-valid-phone",
      "Phone number must be at least 10 digits",
      (value) => {
        const digits = value?.replace(/\D/g, "");
        return digits ? digits.length >= 10 : false;
      },
    )
    .required("Phone number is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string().optional(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const addEducatorValidationSchema = Yup.object({
  memberType: Yup.string().required("Please Select Member Type"),
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .test(
      "is-valid-phone",
      "Phone number must be at least 10 digits",
      (value) => {
        const digits = value?.replace(/\D/g, "");
        return digits ? digits.length >= 10 : false;
      },
    )
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  experience: Yup.string().required("Experience is required"),
  category: Yup.string().required("Please Select Category"),
  memberId: Yup.string().when("memberType", {
    is: MEMBER_TYPES.EXISTING_MEMBER,
    then: (schema) => schema.required("Member ID is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export const addInnovationValidationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().required("Status is required"),
});

export const addResearchValidationSchema = Yup.object({
  title: Yup.string().required("Research Title is required"),
  topic: Yup.string().required("Topic is required"),
  abstract: Yup.string().required("Abstract is required"),
  status: Yup.string().required("Status is required"),
});

export const addStartupValidationSchema = Yup.object({
  startupName: Yup.string().required("Startup name is required"),
  sector: Yup.string().required("Sector is required"),
  description: Yup.string().required("Description is required"),
  founderName: Yup.string().required("Founder name is required"),
  status: Yup.string().required("Status is required"),
});

export const educatorSignupValidationSchema = Yup.object({
  board: Yup.string().required("Board is required"),
  institution: Yup.string().required("Institution is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
// Compatibility Aliases for Legacy School Dashboard
export const addTeacherValidationSchema = addEducatorValidationSchema;

export const TEACHERVALIDATIONSCHEMA = Yup.object({
  startDate: Yup.string().required("Please Choose Start Date"),
  endDate: Yup.string().required("Please Choose End Date"),
  category: Yup.string().required("Please Select Category"),
  mode: Yup.string().required("Please Select Mode of Training"),
});

export const STUDENTVALIDATIONSCHEMA = Yup.object({
  membershipType: Yup.string().required("Please Select Membership Type"),
  memberId: Yup.string().when("membershipType", {
    is: MEMBER_TYPES.EXISTING_MEMBER,
    then: (schema) => schema.required("Member ID is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .test(
      "is-valid-phone",
      "Phone number must be at least 10 digits",
      (value) => {
        const digits = value?.replace(/\D/g, "");
        return digits ? digits.length >= 10 : false;
      },
    )
    .required("Phone number is required"),
  category: Yup.string().required("Please Select Category"),
  grade: Yup.string().required("Please Enter Grade"),
  dob: Yup.string().required("Please Enter Date of Birth"),
  gender: Yup.string().required("Please Select Gender"),
});
