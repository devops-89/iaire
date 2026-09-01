import { COLORS } from "./enum";

export const TEXTFIELD_STYLE_VALIDATION = {
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
    {
      WebkitAppearance: "none",
      margin: 0,
    },
};
export const DATE_PICKER_STYLE_VALIDATION = {
  "& .MuiPickersOutlinedInput-root": {
    borderColor: "rgba(0,0,0,0.1)",
    // borderRadius: "10px",
  },
  // "& .MuiInputLabel-root": {
  //   color: "rgba(0, 0, 0, 0.6)",
  //   "& .Mui-focused": {
  //     color: COLORS.PRIMARY_NAVY,
  //   },
  // },
};
