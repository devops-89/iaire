import { USER_ROLES } from "./enum";

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
  boardId?: string;
  schoolId: string;
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
  id: number;
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
