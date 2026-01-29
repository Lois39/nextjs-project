import type { Metadata } from "next";
import { geist, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "EventPal - Plan Every Detail, All in One Place",
  description: "EventPal helps you plan, manage, and execute events with clarity and confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
