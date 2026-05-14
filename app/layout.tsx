import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unità 6 — Metriche per la stima dei costi nei progetti informatici",
  description:
    "Presentazione accademica: metriche del software, stima dei costi (COCOMO, SLIM, COBRA, Delphi), valutazione della qualità (McCall-Boehm, ISO/IEC 9126).",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-ink-50 text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
