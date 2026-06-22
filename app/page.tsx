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
              <span className="badge">Supabase conectado</span>
              <span className="badge">Reservas reales</span>
              <span className="badge">Disponibilidad</span>
              <span className="badge">API Routes</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
              <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
            </p>
          </div>

          <div className="hero-card">
            <h2>Fase 4: Backend</h2>
            <p>
              Esta versión guarda reservas en Supabase y consulta disponibilidad desde la base de datos.
            </p>
            <ul className="list">
              <li>Tabla reservas</li>
              <li>Tabla disponibilidad</li>
              <li>API POST /api/reservas</li>
              <li>API GET /api/disponibilidad</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
