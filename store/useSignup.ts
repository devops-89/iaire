import {
  InstitutionInfo,
  SIGNUP_RESPONSE,
  MEMBERSHIP_LEVEL,
  EducatorInfo,
  USER_DETAILS_RESPONSE,
} from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SignupStore {
  data: USER_DETAILS_RESPONSE | null;
  institutionData: USER_DETAILS_RESPONSE | null;
  educatorData: USER_DETAILS_RESPONSE | null;
  setUserData: (data: USER_DETAILS_RESPONSE | null) => void;
  setInstitutionData: (data: USER_DETAILS_RESPONSE | null) => void;
  setEducatorData: (data: USER_DETAILS_RESPONSE | null) => void;
  clearAll: () => void;
}

export const useSignup = create<SignupStore>()(
  persist(
    (set) => ({
      data: null,
      institutionData: null,
      educatorData: null,
      setUserData: (data) => set({ data }),
      setInstitutionData: (data) => set({ institutionData: data }),
      setEducatorData: (data) => set({ educatorData: data }),
      clearAll: () =>
        set({ data: null, institutionData: null, educatorData: null }),
    }),
    {
      name: "signup-storage",
      partialize: (state) => ({
        ...state,
        institutionData: state.institutionData
          ? {
              ...state.institutionData,
              affiliationCertificate: null,
              logo: null,
            }
          : null,
        educatorData: state.educatorData
          ? { ...state.educatorData, profileImage: null }
          : null,
      }),
    },
  ),
);
