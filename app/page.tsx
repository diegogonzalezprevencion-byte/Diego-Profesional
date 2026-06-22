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
              <span className="badge">SEO listo</span>
              <span className="badge">Sitemap</span>
              <span className="badge">Supabase</span>
              <span className="badge">Panel administrador</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
              <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
            </p>
          </div>
          <div className="hero-card">
            <h2>Versión Producción</h2>
            <p>Aplicación lista para GitHub, Vercel, Supabase y dominio personalizado.</p>
            <ul className="list">
              <li>Agenda online</li>
              <li>Panel privado</li>
              <li>SEO básico</li>
              <li>Robots y sitemap</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
