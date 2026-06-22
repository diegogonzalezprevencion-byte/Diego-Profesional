import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Diego Profesional | Prevención de Riesgos y Masoterapia",
  description: "Servicios profesionales de prevención de riesgos, gestión legal, capacitaciones y masoterapia profesional en Chile."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
