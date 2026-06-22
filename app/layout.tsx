import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.cl"),
  title: {
    default: "Diego Profesional | Prevención de Riesgos y Masoterapia",
    template: "%s | Diego Profesional"
  },
  description: "Servicios profesionales de prevención de riesgos, regularización legal, capacitaciones, matrices de riesgos y masoterapia profesional en Chile.",
  keywords: ["prevención de riesgos", "masoterapia", "capacitaciones", "matrices de riesgos", "Chile", "masaje relajante", "masaje descontracturante"],
  openGraph: {
    title: "Diego Profesional | Prevención de Riesgos y Masoterapia",
    description: "Agenda servicios profesionales de prevención de riesgos y masoterapia.",
    type: "website",
    locale: "es_CL"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
