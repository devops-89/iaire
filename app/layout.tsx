import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IAIRE - International Academy for IRE",
  description:
    "Nurturing a Culture of Innovation, Research and Entrepreneurship",
};

import LayoutWrapper from "@/components/layouts/LayoutWrapper";
import Modal from "@/components/widgets/Modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {/* <ThemeRegistry> */}
        <LayoutWrapper>
          <Modal />
          {children}
        </LayoutWrapper>
        {/* </ThemeRegistry> */}
      </body>
    </html>
  );
}
