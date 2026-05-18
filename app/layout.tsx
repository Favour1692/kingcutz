import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import AosInit from "@/components/AosInit";
import { bodytext } from "@/fonts";

export const metadata: Metadata = {
  title: "KingCutz barbershop",
  description: "A beautiful single-page site for a barbershop, kingcutz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodytext.className} antialiased overflow-x-hidden`}
    >
      <body className="">
        <AosInit />
        <header>
          <Navbar />
        </header>
        <main className="bg-background text-muted overflow-x-hidden">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
