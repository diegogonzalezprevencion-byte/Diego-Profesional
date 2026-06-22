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
              <span className="badge">Masajes terapéuticos</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/prevencion">Ver Prevención</Link>{" "}
              <Link className="btn secondary" href="/masoterapia">Ver Masoterapia</Link>
            </p>
          </div>

          <div className="hero-card">
            <h2>Agenda tu servicio</h2>
            <p>
              En la Fase 3 se incorporará el sistema de agenda online con calendario,
              disponibilidad semanal y gestión administrativa.
            </p>
            <ul className="list">
              <li>Reservas para empresas</li>
              <li>Reservas para masoterapia</li>
              <li>Panel administrador</li>
              <li>Bloqueo de horarios</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h2>Prevención de Riesgos</h2>
            <p>
              Servicios orientados a empresas, sucursales, equipos de trabajo y cumplimiento normativo.
            </p>
            <Link className="btn" href="/prevencion">Conocer servicios</Link>
          </div>

          <div className="card">
            <h2>Masoterapia</h2>
            <p>
              Masajes relajantes, descontracturantes, piedras calientes, piernas cansadas y técnicas mixtas.
            </p>
            <Link className="btn secondary" href="/masoterapia">Ver valores</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
