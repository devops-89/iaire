import {
  CATEGORY,
  GENDER_TYPE,
  PLAN_LIMIT_TYPE,
  TRAINING_MODE,
  USER_ROLES,
  TRAINING_NOMINATION_STATUS,
  APPROVAL_STATUS,
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
  noOfTeachers: number;
  noOfStudents: number;
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

  userId: string;
  memberships: {
    membershipCode: number | string;
  };
}

export interface INSTITUTION_ADD_EDUCATOR_REQUEST {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  phoneNumber?: string;
  countryCode?: string;
  primarySubjects: string[];
  category: string;
  gender: string;
  experienceYear?: string;
  experienceYears?: string;
  experienceMonth?: string;
  password: string;
  isSchoolPay: boolean;
  memberShipCode?: string;
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
  lastName: string;
  // password: string;
  phone: string;
  // countryCode: string;
  // fatherName: string;
  // fatherEmail: string;
  // fatherPhone: string;
  // fatherProfession: string;
  // motherName: string;
  // motherEmail: string;
  // motherPhone: string;
  // motherProfession: string;
  // grade: string;
  // gender: GENDER_TYPE;
  // profileImage: File | null;
  // dob: string;
}

export interface STUDENT_RESPONSE_PROPS {
  id: number;
  email: string;
  username: string;
  phone: string;
  countryCode: string;
  isdCode: string | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  fullName: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  profileImage: string | null;
  hashedRefreshToken: string | null;
  lastLoginAt: string | null;
  tokenVersion: number;
  role: string;
  status: string;
  schoolId: number;
  grade: string;
  state: string | null;
  dob: string | null;
  spocDetails: string | null;
  city: string | null;
  totalSchools: number | null;
  totalStudents: number | null;
  totalTeachers: number | null;
  category: string | null;
  gender: string;
  approvalStatus: string;
  primarySubjects: string[];
  experienceYears: number | null;
  experienceMonths: number | null;
  fatherName: string;
  fatherEmail: string;
  fatherPhone: string;
  fatherProfession: string;
  motherName: string;
  motherEmail: string;
  motherPhone: string;
  motherProfession: string;
  school: INSTITUTION_BY_BOARD_PROPS & {
    countryId: number;
    schoolLogoDownloadUrl: string | null;
    contactPersonName: string;
    contactPersonEmail: string;
    contactPersonPhone: string;
  };
  boardId: number;
  board: {
    id: number;
    name: string;
    code: string;
    description: string | null;
    logo: string;
    isActive: boolean;
    state: string | null;
    countryId: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    boardLogoDownloadUrl: string;
  };
  countryId: number;
  country: {
    id: number;
    name: string;
    code: string;
    phoneCode: string;
    currencyCode: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
  payments: any[];
  memberships:
    | {
        membershipCode: string | number;
      }[]
    | null;
  approvedAt: string;
  rejectedAt: string | null;
  rejectReason: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  isNominated: boolean;
  userId: string;
  isMembershipActive: boolean;
  profileImageDownloadUrl: string | null;
}

export interface CREATE_TEAM_REQUEST {
  title: string;
  type: CATEGORY;
  mentorId: number | string;
  assistantMentorId?: number | string;
  studentIds: number[] | string[];
}

export interface USER_DETAILS_PROPS {
  id: number;
  email: string;
  username: string;
  phone: string;
  countryCode: string | null;
  isdCode: string | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  fullName: string | null;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  profileImage: string | null;
  password?: string;
  hashedRefreshToken?: string | null;
  lastLoginAt?: string | null;
  tokenVersion?: number;
  role: USER_ROLES;
  status: string;
  schoolId: number;
  grade: string | null;
  state: string | null;
  dob: string | null;
  spocDetails: string | null;
  city: string | null;
  totalSchools: number | null;
  totalStudents: number | null;
  totalTeachers: number | null;
  category: string | null;
  gender: GENDER_TYPE | null;
  approvalStatus: APPROVAL_STATUS;
  primarySubjects: string[];
  experienceYears: number | null;
  experienceMonths: number | null;
  fatherName: string | null;
  fatherEmail: string | null;
  fatherPhone: string | null;
  fatherProfession: string | null;
  motherName: string | null;
  motherEmail: string | null;
  motherPhone: string | null;
  motherProfession: string | null;
  boardId: number;
  countryId: number;
  approvedAt: string | null;
  rejectedAt: string | null;
  rejectReason: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface SCHOOL_DETAILS_PROPS {
  id: number;
  name: string;
  code: string | null;
  address: string | null;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zipCode: string;
  logo: string | null;
  affiliationCertificate: string | null;
  affiliationNumber: string;
  website: string;
  registrationYear: number;
  contactPersonName: string;
  contactPersonEmail: string;
  contactPersonPhone: string;
  isActive: boolean;
  boardId: number;
  countryId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface BOARD_DETAILS_PROPS {
  id: number;
  name: string;
  code: string;
  description: string | null;
  logo: string | null;
  isActive: boolean;
  state: string | null;
  countryId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface BATCH_QUESTION_PROPS {
  id: string;
  type: string;
  options: string[];
  question: string;
  required: boolean;
}

export interface BATCH_DETAILS_PROPS {
  id: number;
  name: string;
  description: string | null;
  category: CATEGORY;
  userRole: USER_ROLES;
  startDate: string;
  endDate: string;
  status: string;
  mode: TRAINING_MODE;
  isActive: boolean;
  questions: BATCH_QUESTION_PROPS[];
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface TRAINING_ANSWER_PROPS {
  answer: string;
  questionId: string;
}

export interface TRAINING_DETAILS_PROPS {
  id: number;
  title: string | null;
  description: string | null;
  type: CATEGORY;
  startDate: string | null;
  endDate: string | null;
  mode: TRAINING_MODE;
  status: string;
  answers: TRAINING_ANSWER_PROPS[];
  createdBy: number;
  createdByUser: USER_DETAILS_PROPS;
  schoolId: number;
  school: SCHOOL_DETAILS_PROPS;
  boardId: number;
  board: BOARD_DETAILS_PROPS;
  batchId: number;
  batch: BATCH_DETAILS_PROPS;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface TRAINING_NOMINATION_RESPONSE {
  id: number;
  trainingId: number;
  training: TRAINING_DETAILS_PROPS;
  teacherId: number;
  teacher: USER_DETAILS_PROPS;
  availableFrom: string | null;
  availableTo: string | null;
  mode: TRAINING_MODE;
  status: TRAINING_NOMINATION_STATUS;
  approvedBySchoolAdmin: boolean | null;
  schoolApprovedAt: string | null;
  approvedByIaireAdmin: boolean | null;
  iaireApprovedAt: string | null;
  rejectionReason: string | null;
  interviewScheduledAt: string | null;
  interviewScheduledBy: number | null;
  interviewMeetingLink: string | null;
  interviewCompletedAt: string | null;
  interviewCompletedBy: number | null;
  interviewComments: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface TEAM_MEMBER_PROPS {
  id: number;
  teamId: number;
  studentId: number;
  student: STUDENT_RESPONSE_PROPS;
  createdAt: string;
}

export interface TEAM_DETAILS_RESPONSE {
  id: number;
  title: string;
  type: CATEGORY;
  teamCode: string;
  mentorId: number;
  mentor: USER_DETAILS_PROPS;
  assistantMentorId: number | null;
  assistantMentor: USER_DETAILS_PROPS | null;
  members: TEAM_MEMBER_PROPS[];
  createdBy: number;
  createdByUser: USER_DETAILS_PROPS;
  schoolId: number;
  school: SCHOOL_DETAILS_PROPS;
  boardId: number;
  board: BOARD_DETAILS_PROPS;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  innovations?: INNOVATION_RESPONSE_DATA_PROPS[];
}

export interface SCHOOL_ADD_INNOVATION_REQUEST_PROPS {
  title: string;
  problemDescription: string;
  solution: string;
  teamId: string | number;
  isDraft?: boolean;
  attomeyFinalTemplate?: File | null;
}

export interface PAYMENT_MEMBERSHIP_PROPS {
  id?: number;
  userId?: number;
  type?: string;
  membershipCode?: string;
  status?: string;
  isSchoolInvited?: boolean;
  activatedAt?: string | null;
  expiryDate?: string | null;
  paymentDeadline?: string | null;
  createdAt?: string;
}

export interface PAYMENT_PLAN_PROPS {
  id?: number;
  code?: string;
  name?: string;
  target?: string;
  price?: number;
  currency?: string;
  billingCycle?: string;
  trialDays?: number;
  isActive?: boolean;
  countryId?: number;
  stripeProductId?: string | null;
  stripePriceId?: string | null;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface PAYMENT_DETAILS_PROPS {
  id?: number;
  membershipId?: number;
  membership?: PAYMENT_MEMBERSHIP_PROPS;
  subscriptionId?: string | null;
  userId?: number;
  planId?: number;
  plan?: PAYMENT_PLAN_PROPS;
  amount?: number;
  currency?: string;
  gateway?: string;
  stripeSessionId?: string | null;
  stripePaymentIntentId?: string | null;
  stripeChargeId?: string | null;
  status?: string;
  failureReason?: string | null;
  paidAt?: string | null;
  expiresAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface USER_DETAILS_RESPONSE {
  id?: number;
  email?: string;
  username?: string;
  phone?: string;
  countryCode?: string | null;
  isdCode?: string | null;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  profileImage?: string | null;
  hashedRefreshToken?: string | null;
  lastLoginAt?: string | null;
  tokenVersion?: number;
  role?: USER_ROLES;
  status?: string;
  schoolId?: number;
  grade?: string | null;
  state?: string | null;
  dob?: string | null;
  spocDetails?: string | null;
  city?: string | null;
  totalSchools?: number | null;
  totalStudents?: number | null;
  totalTeachers?: number | null;
  noOfStudents?: number | null;
  noOfTeachers?: number | null;
  category?: string | null;
  gender?: GENDER_TYPE | string | null;
  approvalStatus?: APPROVAL_STATUS;
  isSchoolPay?: boolean;
  primarySubjects?: string[];
  experienceYears?: number | null;
  experienceinYears?: number | null;
  experienceMonths?: number | null;
  fatherName?: string | null;
  fatherEmail?: string | null;
  fatherPhone?: string | null;
  fatherProfession?: string | null;
  motherName?: string | null;
  motherEmail?: string | null;
  motherPhone?: string | null;
  motherProfession?: string | null;
  school?: {
    id?: number;
    name?: string;
    code?: string | null;
    address?: string | null;
    addressLine1?: string;
    addressLine2?: string | null;
    city?: string;
    state?: string;
    zipCode?: string;
    logo?: string | null;
    affiliationCertificate?: string | null;
    affiliationNumber?: string;
    website?: string | null;
    registrationYear?: number;
    contactPersonName?: string;
    contactPersonEmail?: string;
    contactPersonPhone?: string;
    isActive?: boolean;
    boardId?: number;
    countryId?: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    schoolLogoDownloadUrl?: string | null;
  };
  boardId?: number;
  board?: {
    id?: number;
    name?: string;
    code?: string;
    description?: string | null;
    logo?: string | null;
    isActive?: boolean;
    state?: string | null;
    countryId?: number;
    country?: {
      id?: number;
      name?: string;
      code?: string;
      phoneCode?: string;
      currencyCode?: string;
      isActive?: boolean;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string | null;
    };
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    boardLogoDownloadUrl?: string | null;
  };
  countryId?: number;
  payments?: PAYMENT_DETAILS_PROPS[];
  approvedAt?: string | null;
  rejectedAt?: string | null;
  rejectReason?: string | null;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  profileImageDownloadUrl?: string | null;
  affiliationCertificateDownloadUrl?: string | null;
  userId?: string;
  students?: {
    id?: number;
    email?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    profileImage?: string | null;
    role?: string;
    status?: string;
    schoolId?: number;
    boardId?: number;
    createdAt?: string;
    updatedAt?: string;
    profileImageDownloadUrl?: string | null;
  }[];
  schoolAdmins?: {
    id?: number;
    email?: string;
    username?: string;
    firstName?: string | null;
    lastName?: string | null;
    profileImage?: string | null;
    role?: string;
    status?: string;
    schoolId?: number;
    boardId?: number;
    createdAt?: string;
    updatedAt?: string;
    profileImageDownloadUrl?: string | null;
  }[];
  // Institution signup fields (used when institutionData holds form data)
  institutionName?: string;
  principalName?: string;
  website?: string;
  addressLine1?: string;
  addressLine2?: string;
  postalCode?: string;
  isd?: string;
  affiliationType?: { id?: number; name: string; code?: string } | string;
  affiliationNumber?: string;
  affiliationCertificate?: File | null;
  registrationYear?: string;
  password?: string;
  confirmPassword?: string;
  contactPersonName?: string;
  contactPersonEmail?: string;
  contactPersonPhone?: string;
  country?: {
    id: number;
    name: string;
    code: string;
  };
  membershipLevel?: string;
  certifiedEducators?: number;
  publications?: number;
  hasSelectionBoardApproval?: boolean;
  registrationNumber?: string;
}

export interface UPDATE_PROFILE_FORM_PROPS {
  phone: string;
  countryCode: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
  email: string;
  profileImage: File | null;
  grade: string;
  fatherName: string;
  fatherEmail: string;
  fatherPhone: string;
  fatherProfession: string;
  motherName: string;
  motherEmail: string;
  motherPhone: string;
  motherProfession: string;
  gender: string;
  id?: number;
}

export interface INNOVATION_FORM_PROPS {
  title: string;
  team: any;
  problemDescription: string;
  solutionDescription: string;
  file: File | null;
  isDraft?: boolean;
}

export interface INNOVATION_RESPONSE_DATA_PROPS {
  id: number;
  title: string;
  problemDescription: string;
  solution: string;
  teamId: number;
  team: {
    id: number;
    title: string;
    type: string;
    teamCode: string;
    mentorId: number;
    assistantMentorId: number | null;
    createdBy: number;
    schoolId: number;
    boardId: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
  schoolId: number;
  school: {
    id: number;
    name: string;
    code: string | null;
    address: string | null;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    zipCode: string;
    logo: string | null;
    affiliationCertificate: string | null;
    affiliationNumber: string;
    website: string;
    registrationYear: number;
    contactPersonName: string;
    contactPersonEmail: string;
    contactPersonPhone: string;
    isActive: boolean;
    boardId: number;
    countryId: number;
    country: {
      id: number;
      name: string;
    };
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    schoolLogoDownloadUrl: string | null;
    affiliationCertificateDownloadUrl: string | null;
  };
  createdBy: number;
  creator: {
    id: number;
    email: string;
    username: string;
    phone: string | null;
    countryCode: string | null;
    isdCode: string | null;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    isBoardAdminManuallyVerfied?: boolean;
    fullName: string;
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    profileImage: string | null;
    password?: string;
    hashedRefreshToken?: string | null;
    lastLoginAt?: string | null;
    tokenVersion: number;
    role: string;
    status: string;
    schoolId: number;
    grade: string | null;
    state: string | null;
    dob: string | null;
    spocDetails: string | null;
    city: string | null;
    totalSchools: number | null;
    totalStudents: number | null;
    totalTeachers: number | null;
    noOfStudents: number | null;
    noOfTeachers: number | null;
    category: string | null;
    gender: string | null;
    approvalStatus: string;
    isSchoolPay?: boolean;
    primarySubjects?: string[];
    experienceYears: number | null;
    experienceinYears: number | null;
    experienceMonths: number | null;
    fatherName: string | null;
    fatherEmail: string | null;
    fatherPhone: string | null;
    fatherProfession: string | null;
    motherName: string | null;
    motherEmail: string | null;
    motherPhone: string | null;
    motherProfession: string | null;
    boardId: number;
    countryId: number;
    approvedAt: string | null;
    rejectedAt: string | null;
    rejectReason: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    profileImageDownloadUrl: string | null;
  };
  status: string;
  isDraft: boolean;
  attachments: string[] | string | null;
  attomeyFinalTemplate: string | null;
  reviewedBy: number | null;
  reviewer: any;
  reviewComments: string | null;
  reviewedAt: string | null;
  archiveComments: string | null;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  attorneyTemplateDownloadUrl: string | null;
  attachmentsDownloadUrls: string[];
}

export interface PAGINATION_PROPS_DATA {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface EDUCATOR_DETAILS_RESPONSE {
  id: number;
  email: string;
  username: string;
  phone: string | null;
  countryCode: string | null;
  isdCode: string | null;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isBoardAdminManuallyVerfied: boolean;
  fullName: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  profileImage: string | null;
  hashedRefreshToken: string | null;
  lastLoginAt: string | null;
  tokenVersion: number;
  role: string;
  status: string;
  schoolId: number;
  grade: string | null;
  state: string | null;
  dob: string | null;
  spocDetails: string | null;
  city: string | null;
  totalSchools: number | null;
  totalStudents: number | null;
  totalTeachers: number | null;
  noOfStudents: number | null;
  noOfTeachers: number | null;
  category: string | null;
  gender: string | null;
  approvalStatus: string;
  isSchoolPay: boolean;
  primarySubjects: string[];
  experienceYears: number | null;
  experienceinYears: number | null;
  experienceMonths: number | null;
  fatherName: string | null;
  fatherEmail: string | null;
  fatherPhone: string | null;
  fatherProfession: string | null;
  motherName: string | null;
  motherEmail: string | null;
  motherPhone: string | null;
  motherProfession: string | null;
  school: {
    id: number;
    name: string;
    code: string | null;
    address: string | null;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    zipCode: string;
    logo: string | null;
    affiliationCertificate: string | null;
    affiliationNumber: string;
    website: string;
    registrationYear: number;
    contactPersonName: string;
    contactPersonEmail: string;
    contactPersonPhone: string;
    isActive: boolean;
    boardId: number;
    countryId: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    schoolLogoDownloadUrl: string | null;
  };
  boardId: number;
  board: {
    id: number;
    name: string;
    code: string;
    description: string | null;
    logo: string | null;
    isActive: boolean;
    state: string | null;
    countryId: number;
    country: {
      id: number;
      name: string;
      code: string;
      phoneCode: string;
      currencyCode: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    boardLogoDownloadUrl: string | null;
  };
  countryId: number;
  payments: {
    id: number;
    membershipId: number;
    membership: {
      id: number;
      userId: number;
      type: string;
      membershipCode: string;
      status: string;
      isSchoolInvited: boolean;
      activatedAt: string;
      expiryDate: string;
      paymentDeadline: string | null;
      createdAt: string;
    };
    subscriptionId: string | null;
    userId: number;
    planId: number;
    plan: {
      id: number;
      code: string;
      name: string;
      target: string;
      price: number;
      currency: string;
      billingCycle: string;
      trialDays: number;
      isActive: boolean;
      countryId: number;
      stripeProductId: string;
      stripePriceId: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    amount: number;
    currency: string;
    gateway: string;
    stripeSessionId: string;
    stripePaymentIntentId: string;
    stripeChargeId: string | null;
    status: string;
    failureReason: string | null;
    paidAt: string;
    expiresAt: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
  approvedAt: string | null;
  rejectedAt: string | null;
  rejectReason: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  profileImageDownloadUrl: string | null;
  affiliationCertificateDownloadUrl: string | null;
  userId: string;
  teams: any[];
  students: {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    profileImage: string | null;
    role: string;
    status: string;
    schoolId: number;
    boardId: number;
    createdAt: string;
    updatedAt: string;
    profileImageDownloadUrl: string | null;
  }[];
  schoolAdmins: {
    id: number;
    email: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    profileImage: string | null;
    role: string;
    status: string;
    schoolId: number;
    boardId: number;
    createdAt: string;
    updatedAt: string;
    profileImageDownloadUrl: string | null;
  }[];
}
