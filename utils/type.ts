import {
  CATEGORY,
  GENDER_TYPE,
  PLAN_LIMIT_TYPE,
  TRAINING_MODE,
  USER_ROLES,
} from "./enum";

export enum MEMBERSHIP_LEVEL {
  INSTITUTIONAL = "Institutional Member",
  ACCREDITED = "Accredited Institutional Member",
  CHARTERED = "Chartered Institutional Member",
  FELLOW = "Fellow Institution of IAIRE",
}

export interface SIGNUP_RESPONSE {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string | null;
}

export interface InstitutionInfo {
  institutionName: string;
  principalName: string;
  email: string;
  phone: string;
  website: string;
  contactPersonName?: string;
  contactPersonEmail?: string;
  contactPersonPhone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  registrationNumber?: string;
  role: USER_ROLES.INSTITUTION;
  membershipLevel: MEMBERSHIP_LEVEL;
  certifiedEducators: number;
  publications: number;
  hasSelectionBoardApproval: boolean;
  password?: string;
  confirmPassword?: string;
  affiliationType?: { id?: number; name: string; code?: string } | string;
  affiliationNumber?: string;
  affiliationCertificate?: File | null;
  country?: {
    id: number;
    name: string;
    code: string;
  };
  isd?: string;
  registrationYear: string;
}

export interface EducatorInfo {
  email: string;
  countryCode: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
  board: BOARDDATAPROPS | null;
  school: INSTITUTION_BY_BOARD_PROPS | null;
  profileImage: File | null;
  country: COUNTRYDATAPROPS | null;
  state: string;
  isdCode?: string;
  primarySubjects: string[];
  gender: string;
  experience: string;
  role: string;
}

export interface STATSCARDDATA {
  title: string;
  count: string;
  icon: any;
}

export interface STATSCARDPROPS {
  title: string;
  data: STATSCARDDATA[];
}

export interface TEAM_LIST_HEADER {
  label: string;
}

export interface TEAM_LIST_DATA_PROPS {
  id: string;
  teamName: string;
  mentorName: string;
  assistantMentorName: string;
}

export interface COUNTRYDATAPROPS {
  id: number;
  name: string;
  code: string;
}

export interface BOARDDATAPROPS {
  id: number | string;
  name: string;
  code: string;
  countryId: number;
  country: {
    countryId: number;
    name: string;
    code: string;
  };
}

export interface VERIFY_OTP_REQUEST {
  email: string;
  otp: string;
}

export interface LOGIN_REQUEST {
  identifier: string;
  password: string;
}

export interface MENTOR_SIGNUP_REQUEST {
  countryId: number;
  profileImage?: File | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  // confirmPassword?: string;
  institutionId: number;
  primarySubjects: string[];
  boardId?: number;
  isdCode?: string;
  gender: string;
  experience: string;
}

export interface INSTITUTION_BY_BOARD_PROPS {
  id: number;
  name: string;
  code?: string;
  address?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  logo?: File | null;
  affiliationCertificate?: string;
  affiliationNumber?: string;
  website?: null;
  registrationYear: number;
  isActive: boolean;
  boardId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface PLAN_RESPONSE_PROPS {
  id: number;
  code: string;
  name: string;
  target: string;
  price: number;
  currency: string;
  billingCycle: string;
  trialDays?: number;
  isActive?: boolean;
  stripeProductId?: string;
  stripePriceId?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  limits: {
    key: PLAN_LIMIT_TYPE;
    value: number;
  }[];
}

export interface ALL_USER_REQUEST_PROPS {
  page?: number;
  limit?: number;
  role?: string;
  approvalStatus?: string | null;
}

export interface TEACHER_REPONSE_PROPS {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  primarySubjects: string[];
  approvalStatus: string;
  membershipId: string;
  userId: string;
}

export interface INSTITUTION_ADD_EDUCATOR_REQUEST {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  primarySubjects: string[];
  category: string;
  gender: string;
  experienceYear: string;
  experienceMonth: string;
  password: string;
}

export interface NOMINATE_TEACHER_FOR_TRAINING_REQUEST {
  // teacherId?: number;
  // title: string;
  // type: CATEGORY;
  // availableFrom: Date | string;
  // availableTo: Date | string;
  // mode: TRAINING_MODE;
  batchId: number;
  mode: string;
  answers: {
    questionId: string;
    answer: string;
  }[];
}

export interface INSTITUTION_ADD_STUDENT_REQUEST {
  email: string;
  firstName: string;
  lastname: string;
  password: string;
  phone: string;
  countryCode: string;
  fatherName: string;
  fatherEmail: string;
  fatherPhone: string;
  fatherProfession: string;
  motherName: string;
  motherEmail: string;
  motherPhone: string;
  motherProfession: string;
  grade: string;
  gender: GENDER_TYPE;
  profileImage: File | null;
  dob: string;
}
