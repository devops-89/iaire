import { COLORS } from "./enum";

export const TEXTFIELD_STYLE_VALIDATION = {
  "& .MuiInputLabel-root": { color: "rgba(0, 0, 0, 0.6)" },
  "& .MuiInputLabel-root.Mui-focused": { color: COLORS.PRIMARY_NAVY },
  "& .MuiOutlinedInput-root": {
    color: COLORS.BLACK,
    borderRadius: "10px",
    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
    "&:hover fieldset": { borderColor: COLORS.PRIMARY_NAVY },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.PRIMARY_NAVY,
    },
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "rgba(0, 0, 0, 0.4)",
    opacity: 1,
  },
};
