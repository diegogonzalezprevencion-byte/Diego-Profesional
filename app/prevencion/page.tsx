import Link from "next/link";

export default function Prevencion() {
  const services = [
    "Regularización legal en Seguridad y Salud Ocupacional",
    "Informes de gestión preventiva",
    "Matrices de identificación de peligros y evaluación de riesgos",
    "Capacitaciones en prevención de riesgos",
    "Inducción para personas nuevas",
    "Procedimientos de trabajo seguro",
    "Investigación de accidentes del trabajo",
    "Apoyo a Comités Paritarios",
    "Preparación documental para fiscalizaciones"
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Área empresas</div>
          <h1>Servicios de Prevención de Riesgos</h1>
          <p>
            Acompañamiento profesional para fortalecer el cumplimiento legal,
            la gestión documental, la capacitación y el control preventivo.
          </p>

          <div className="grid-3" style={{ marginTop: 28 }}>
            {services.map((service) => (
              <div className="card" key={service}>
                <h3>{service}</h3>
                <p>Servicio adaptable según rubro, tamaño de empresa, sucursal y requerimiento legal.</p>
              </div>
            ))}
          </div>

          <div className="cta">
            <h2>Agenda para empresas</h2>
            <p>Solicita una reunión, diagnóstico o visita técnica mediante la agenda online.</p>
            <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
