import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plate & Frame — Food photography, sharpened by AI",
  description:
    "An AI-powered food photography studio for chefs and restaurants. Critique your shots, plan compositions, master lighting, and apply chef-grade editing presets.",
  openGraph: {
    title: "Plate & Frame",
    description:
      "Food photography, sharpened by AI. Built for working chefs and restaurants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bone text-ink">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
