export function localBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.cl";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Diego Profesional",
    url: siteUrl,
    areaServed: "Chile",
    description: "Servicios de prevención de riesgos y masoterapia profesional en Chile.",
    serviceType: ["Prevención de Riesgos", "Masoterapia Profesional"]
  };
}
