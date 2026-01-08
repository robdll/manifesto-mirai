import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import React from "react";
import "./globals.css";

// Fontes (Google Fonts) via next/font: carrega só o necessário, com otimizações do Next.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Condomínio Dona Miraí — Manifesto por uma gestão melhor",
  description:
    "Um manifesto por uma gestão transparente, organizada e participativa no Condomínio Dona Miraí. Sem caráter eleitoral — apenas reflexão e construção coletiva.",
  openGraph: {
    title: "Condomínio Dona Miraí — Manifesto",
    description:
      "Um convite para pensarmos juntos o futuro do nosso condomínio, com transparência, organização e participação.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={[
          "min-h-dvh antialiased",
          inter.variable,
          playfair.variable
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}


