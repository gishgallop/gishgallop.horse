import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn not to Gish Gallop",
  description:
    "Learn how to identify and respond to the Gish Gallop, a deceptive debate tactic that overwhelms with low-quality arguments.",
  keywords:
    "gish gallop, debate tactics, logical fallacies, skepticism, critical thinking, public education, health, science, covid19, vaccines, conspiracies, debate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </head>
      <GoogleAnalytics gaId="G-LVYSVC0JNY" />

      <body>{children}</body>
    </html>
  );
}
