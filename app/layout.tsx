import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopera | Consultoría Estratégica en Finanzas, Gestión y Crecimiento Empresarial",
  description: "Transformar caos en claridad. Consultoría estratégica para empresas que necesitan tomar control de su negocio, fortalecer sus procesos y construir una estrategia clara que les permita crecer de manera sostenible.",
  keywords: ["consultoría empresarial", "finanzas corporativas", "gestión empresarial", "crecimiento sostenible", "estrategia empresarial", "Santiago Lopera Mesa"],
  authors: [{ name: "Santiago Lopera Mesa" }],
  openGraph: {
    title: "Loopera | Consultoría Estratégica",
    description: "Transformar caos en claridad",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
