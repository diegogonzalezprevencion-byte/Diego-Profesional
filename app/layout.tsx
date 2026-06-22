import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import LeadPopup from "../components/LeadPopup";
import JsonLd from "../components/JsonLd";
import { localBusinessSchema } from "../lib/schema";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.cl"),
  title: { default: "Diego Prevención | Prevención de Riesgos", template: "%s | Diego Profesional" },
  description: "Servicios profesionales de prevención de riesgos, regularización legal, capacitaciones, matrices de riesgos, CPHS e informes de gestión en Chile.",
  keywords: ["prevención de riesgos", "capacitaciones", "matrices de riesgos", "Chile", "DS 44", "Comité Paritario"],
  openGraph: { title: "Diego Prevención | Prevención de Riesgos", description: "Agenda servicios profesionales de prevención de riesgos.", type: "website", locale: "es_CL" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><JsonLd data={localBusinessSchema()} /><Navbar />{children}<LeadPopup /><WhatsAppFloat /><Footer /></body></html>;
}
