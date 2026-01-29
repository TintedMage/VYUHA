import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYUHA - Visual Yield for Urban Hygiene Analysis",
  description: "Next.js application with Tailwind CSS and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
