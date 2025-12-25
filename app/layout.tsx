import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: [
    {
      path: "../public/Avenir_Next_Pro/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Avenir_Next_Pro/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Avenir_Next_Pro/AvenirNextLTPro-It.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-avenir",
});

export const metadata: Metadata = {
  title: "Setapp",
  description: "Setapp | The best apps for Mac and iOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} antialiased`}>{children}</body>
    </html>
  );
}
