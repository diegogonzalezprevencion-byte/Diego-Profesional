export function localBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.cl";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Diego Prevención",
    url: siteUrl,
    areaServed: "Chile",
    description: "Servicios profesionales de prevención de riesgos, regularización legal, matrices de riesgos, CPHS, capacitaciones e informes de gestión en Chile.",
    serviceType: [
      "Prevención de Riesgos",
      "Regularización Legal",
      "Matrices de Riesgos",
      "Capacitaciones",
      "Comité Paritario",
      "Informes de Gestión Preventiva"
    ]
  };
}
