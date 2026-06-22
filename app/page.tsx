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
              Soluciones integrales para empresas que necesitan cumplir obligaciones legales
              en seguridad y salud ocupacional, junto con servicios de bienestar físico mediante
              masoterapia profesional.
            </p>
            <div className="badge-list">
              <span className="badge">Regularización legal</span>
              <span className="badge">Matrices de riesgos</span>
              <span className="badge">Capacitaciones</span>
              <span className="badge">Agenda online</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
              <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
            </p>
          </div>

          <div className="hero-card">
            <h2>Fase 3: Reservas</h2>
            <p>
              Esta versión incorpora páginas de agenda para ambas áreas, con selección de servicio,
              fecha, hora y datos del cliente.
            </p>
            <ul className="list">
              <li>Agenda Prevención</li>
              <li>Agenda Masoterapia</li>
              <li>Formulario de reserva</li>
              <li>Confirmación visual</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
