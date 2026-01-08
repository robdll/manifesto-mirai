import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-dvh antialiased bg-mist text-ink">
        {children}
      </body>
    </html>
  );
}


