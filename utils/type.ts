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

export interface SchoolInfo {
  schoolName: string;
  principalName: string;
  affiliationType: string;
  affiliationNumber: string;
  affiliationCertificate: File | null;
  email: string;
  phone: string;
  website: string;
  address: string;
  registrationNumber?: string;
  role: USER_ROLES.SCHOOL;
  membershipLevel: MEMBERSHIP_LEVEL;
  certifiedTeachers: number;
  publications: number;
  hasSelectionBoardApproval: boolean;
  password?: string;
  confirmPassword?: string;
}

export interface TeacherInfo {
  board: string;
  school: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  confirmPassword?: string;
  role: USER_ROLES.TEACHER;
}

