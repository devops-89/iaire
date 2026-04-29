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
  affiliationType?: string;
  affiliationNumber?: string;
  affiliationCertificate?: File | null;
  country?: string;
  isd?: string;
  registrationYear: string;
}

export interface EducatorInfo {
  board: string;
  institution: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  confirmPassword?: string;
  role: USER_ROLES.EDUCATOR;
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
  phoneCode: string;
  currencyCode: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
