import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time Selection",
  description: "Official time selection website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
