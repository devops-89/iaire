import {
  InstitutionInfo,
  SIGNUP_RESPONSE,
  MEMBERSHIP_LEVEL,
  EducatorInfo,
} from "@/utils/type";
import { USER_ROLES } from "@/utils/enum";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SignupStore {
  data: SIGNUP_RESPONSE | null;
  institutionData: InstitutionInfo | null;
  educatorData: EducatorInfo | null;
  setUserData: (data: SIGNUP_RESPONSE) => void;
  setInstitutionData: (data: InstitutionInfo) => void;
  setEducatorData: (data: EducatorInfo) => void;
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
          ? { ...state.institutionData, affiliationCertificate: null }
          : {
              institutionName: "",
              role: USER_ROLES.INSTITUTION,
              membershipLevel: MEMBERSHIP_LEVEL.INSTITUTIONAL,
              certifiedEducators: 0,
              publications: 0,
              hasSelectionBoardApproval: false,
              affiliationCertificate: null,
            },
        educatorData: state.educatorData,
      }),
    },
  ),
);
