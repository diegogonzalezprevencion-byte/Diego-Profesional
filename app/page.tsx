import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Servicios profesionales en Chile</div>
            <h1>Prevención de Riesgos y Masoterapia Profesional</h1>
            <p>
              Soluciones integrales para empresas y servicios de bienestar físico mediante masoterapia profesional.
            </p>
            <div className="badge-list">
              <span className="badge">Reservas reales</span>
              <span className="badge">Panel administrador</span>
              <span className="badge">Disponibilidad editable</span>
              <span className="badge">Supabase</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
              <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
            </p>
          </div>

          <div className="hero-card">
            <h2>Fase 5: Administración</h2>
            <p>Esta versión incorpora panel administrador para revisar reservas y modificar disponibilidad.</p>
            <ul className="list">
              <li>Admin de reservas</li>
              <li>Estados de reserva</li>
              <li>Disponibilidad semanal</li>
              <li>PIN administrativo</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
