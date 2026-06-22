import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Servicios profesionales en Chile</div>
            <h1>Prevención de Riesgos y Masoterapia Profesional</h1>
            <p>Soluciones integrales para empresas y servicios de bienestar físico mediante masoterapia profesional.</p>
            <div className="badge-list">
              <span className="badge">WhatsApp automático</span>
              <span className="badge">Contacto web</span>
              <span className="badge">Reservas</span>
              <span className="badge">Panel administrador</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
              <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
            </p>
          </div>
          <div className="hero-card">
            <h2>Fase 6: Automatizaciones</h2>
            <p>Esta versión suma WhatsApp, contacto web y preparación para confirmaciones por correo.</p>
            <ul className="list">
              <li>Botón flotante de WhatsApp</li>
              <li>Mensaje automático de reserva</li>
              <li>Formulario de contacto</li>
              <li>API de contacto</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
