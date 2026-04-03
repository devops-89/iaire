import {
  SchoolInfo,
  SIGNUP_RESPONSE,
  MEMBERSHIP_LEVEL,
  TeacherInfo,
} from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SignupStore {
  data: SIGNUP_RESPONSE | null;
  schoolData: SchoolInfo | null;
  teacherData: TeacherInfo | null;
  setUserData: (data: SIGNUP_RESPONSE) => void;
  setSchoolData: (data: SchoolInfo) => void;
  setTeacherData: (data: TeacherInfo) => void;
  clearAll: () => void;
}

export const useSignup = create<SignupStore>()(
  persist(
    (set) => ({
      data: null,
      schoolData: null,
      teacherData: null,
      setUserData: (data) => set({ data }),
      setSchoolData: (data) => set({ schoolData: data }),
      setTeacherData: (data) => set({ teacherData: data }),
      clearAll: () => set({ data: null, schoolData: null, teacherData: null }),
    }),
    {
      name: "signup-storage",
      partialize: (state) => ({
        ...state,
        schoolData: state.schoolData
          ? { ...state.schoolData, affiliationCertificate: null }
          : {
              schoolName: "",
              role: USER_ROLES.SCHOOL,
              membershipLevel: MEMBERSHIP_LEVEL.INSTITUTIONAL,
              certifiedTeachers: 0,
              publications: 0,
              hasSelectionBoardApproval: false,
              affiliationCertificate: null,
            },
        teacherData: state.teacherData,
      }),
    }
  )
);

