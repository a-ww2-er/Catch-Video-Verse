import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  Albert_Sans,
  DM_Sans,
  Geist,
  Geist_Mono,
  Yesteryear,
} from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});
const yesteryear = Yesteryear({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yester-year",
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Catch video verse",
  description: "Video sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          albertSans.variable,
          dmSans.variable,
          yesteryear.variable,
          "font-albert "
        )}
      >
        {children}
      </body>
    </html>
  );
}
