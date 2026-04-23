import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EntrivoChatbot } from "@/components/EntrivoChatbot";

export const metadata: Metadata = {
  title: "Entrivo | Your Bridge to ASEAN",
  description:
    "Entrivo helps Indonesian MSMEs expand into Southeast Asian markets through professional, affordable, and fully digital consulting services."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <EntrivoChatbot />
      </body>
    </html>
  );
}
