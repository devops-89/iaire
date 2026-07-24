import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

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
  icons: {
    icon: [
      {
        url: "/iaire_favicon.png?v=4",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/iaire_white.png?v=4",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/iaire_favicon.png?v=4",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/iaire_white.png?v=4",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/iaire_favicon.png?v=4",
  },
};

import LayoutWrapper from "@/components/layouts/LayoutWrapper";
import GlobalSnackbar from "@/components/widgets/GlobalSnackbar";
import Modal from "@/components/widgets/Modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Light Theme Browser Tabs (Dark Favicon) */}
        <link
          rel="icon"
          href="/iaire_favicon.png?v=4"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="shortcut icon"
          href="/iaire_favicon.png?v=4"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />

        {/* Dark Theme Browser Tabs (White Favicon) */}
        <link
          rel="icon"
          href="/iaire_white.png?v=4"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="shortcut icon"
          href="/iaire_white.png?v=4"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />

        <link rel="apple-touch-icon" href="/iaire_favicon.png?v=3" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable}`}
        suppressHydrationWarning
      >
        {/* <ThemeRegistry> */}
        <LayoutWrapper>
          <Modal />
          <GlobalSnackbar />
          {children}
        </LayoutWrapper>
        {/* </ThemeRegistry> */}
      </body>
    </html>
  );
}
