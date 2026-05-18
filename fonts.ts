import { Anton, Manrope, Inter } from "next/font/google";

export const bodytext = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodytext",
});

export const headings = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-headings",
});

export const logo = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
