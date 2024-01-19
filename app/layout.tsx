import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mizu Design System",
  description: "Description to be updated.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
