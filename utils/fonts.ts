import {
  Inter,
  Montserrat,
  Poppins,
  Roboto,
  Roboto_Slab,
} from "next/font/google";
import localFont from "next/font/local";
export const roboto = Roboto_Slab({
  weight: "variable",
  subsets: ["latin"],
});

export const montserrat = Roboto_Slab({
  weight: "variable",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
});

// export const aloeveraDisplay_medium = localFont({
//   src: "../public/fonts/aloevera/AloeveraDisplay-Medium.ttf",
//   variable: "--font-aloevera",
//   weight: "500",
// });
export const aloeveraDisplay_medium = Poppins({
  weight: "500",
  subsets: ["latin"],
});

// export const newBlack_medium = localFont({
//   src: "../public/fonts/newBlack/NewBlackTypeface-Medium.ttf",
//   weight: "500",
//   variable: "--font-newBlack",
// });

export const newBlack_medium = Roboto_Slab({
  weight: "500",
  subsets: ["latin"],
});

export const newBlack_light = localFont({
  src: "../public/fonts/newBlack/NewBlackTypeface-Light.ttf",
  weight: "300",
  variable: "--font-newBlack",
});

export const newBlack_semiBold = localFont({
  src: "../public/fonts/newBlack/NewBlackTypeface-SemiBold.ttf",
  weight: "600",
  variable: "--font-newBlack",
});
