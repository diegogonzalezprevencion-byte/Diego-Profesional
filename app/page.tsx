import Link from "next/link";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { posts } from "../lib/blog";

export default function Home() {
  const servicios = [
    ["Regularización Legal", "Diagnóstico y apoyo documental para mejorar el cumplimiento en Seguridad y Salud en el Trabajo."],
    ["Matrices de Riesgos", "Identificación de peligros, evaluación de riesgos y definición de controles preventivos."],
    ["Informes de Gestión", "Reportes ejecutivos, indicadores y seguimiento para gerencias, comités y sucursales."],
    ["Capacitaciones", "Charlas y formaciones en temas críticos de prevención de riesgos laborales."],
    ["Inducción Persona Nueva", "Apoyo para inducciones de trabajadores nuevos, registros y respaldos."],
    ["Comité Paritario", "Acompañamiento para constitución, reuniones, actas, programas y funcionamiento CPHS."],
    ["Planes de Emergencia", "Revisión documental y apoyo para gestión de emergencias y respuesta organizada."],
    ["Investigación de Accidentes", "Apoyo en análisis causal, medidas correctivas y registros de respaldo."]
  ];

  const proceso = [
    ["1", "Diagnóstico", "Revisamos la situación actual, brechas y necesidades preventivas."],
    ["2", "Plan de trabajo", "Definimos alcance, entregables, plazos y prioridad documental."],
    ["3", "Ejecución", "Desarrollamos matrices, informes, capacitaciones o regularización."],
    ["4", "Seguimiento", "La solicitud queda registrada para continuidad y control."]
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Servicios profesionales en Chile</div>
            <h1>Ingeniería en Prevención de Riesgos para empresas</h1>
            <p>
              Asesoría profesional para regularización legal, matrices de riesgos, CPHS,
              capacitaciones, inducciones, informes de gestión y cumplimiento preventivo.
            </p>
            <div className="badge-list">
              <span className="badge">D.S. N°44</span>
              <span className="badge">CPHS</span>
              <span className="badge">Matrices de Riesgos</span>
              <span className="badge">Capacitaciones</span>
              <span className="badge">Agenda Online</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Diagnóstico</Link>{" "}
              <Link className="btn secondary" href="/contacto">Solicitar Información</Link>
            </p>
          </div>
          <div className="hero-card">
            <div className="image-band">
              <div className="eyebrow" style={{ color: "#ccfbf1" }}>Gestión Preventiva</div>
              <h2>Orden documental, cumplimiento y control</h2>
              <p>Una web profesional para captar clientes, agendar reuniones y gestionar solicitudes preventivas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid-4">
            <div className="kpi"><strong>8</strong><span>Servicios preventivos</span></div>
            <div className="kpi"><strong>14</strong><span>Días visibles en agenda</span></div>
            <div className="kpi"><strong>3</strong><span>Artículos SEO base</span></div>
            <div className="kpi"><strong>3</strong><span>Landings locales</span></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="eyebrow">Servicios</div>
          <h2>Soluciones de Prevención de Riesgos</h2>
          <p>Servicios orientados a empresas, sucursales, oficinas, comités y equipos de trabajo.</p>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {servicios.map(([title, text]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="cta">
            <h2>¿Tu empresa necesita ordenar su gestión preventiva?</h2>
            <p>Agenda una reunión inicial para revisar necesidades, brechas documentales y próximos pasos.</p>
            <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow">Proceso de trabajo</div>
          <h2>Una metodología clara y profesional</h2>
          <div className="grid-4" style={{ marginTop: 28 }}>
            {proceso.map(([num, title, text]) => (
              <div className="card process-step" key={num}>
                <div className="step-number">{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-2">
          <div className="visual-card">
            <div className="visual-placeholder">Imagen sugerida: documentos legales, reunión técnica, matriz de riesgos</div>
          </div>
          <div>
            <div className="eyebrow">Cumplimiento legal</div>
            <h2>¿Qué exige el D.S. N°44?</h2>
            <p>
              El D.S. N°44 refuerza la necesidad de contar con una gestión preventiva sistemática,
              participativa, documentada y orientada a la mejora continua.
            </p>
            <ul className="list">
              <li>Identificación de peligros y evaluación de riesgos.</li>
              <li>Planificación de medidas preventivas.</li>
              <li>Participación de trabajadores y comités.</li>
              <li>Capacitación, información y registros.</li>
              <li>Seguimiento y mejora continua.</li>
            </ul>
            <Link className="btn" href="/agenda-prevencion">Solicitar asesoría</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <div className="eyebrow">Comité Paritario</div>
            <h2>¿Tu empresa cumple con el CPHS?</h2>
            <p>
              El Comité Paritario requiere orden documental, reuniones, actas, programas,
              investigación de accidentes, capacitaciones e inspecciones.
            </p>
            <ul className="list">
              <li>Constitución o regularización del comité.</li>
              <li>Actas y reuniones mensuales.</li>
              <li>Programa de trabajo y capacitaciones.</li>
              <li>Investigación de accidentes.</li>
              <li>Inspecciones y seguimiento preventivo.</li>
            </ul>
            <Link className="btn" href="/agenda-prevencion">Solicitar diagnóstico CPHS</Link>
          </div>
          <div className="visual-card">
            <div className="visual-placeholder">Imagen sugerida: comité, reunión de seguridad, checklist preventivo</div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="eyebrow">Blog profesional</div>
          <h2>Artículos de Prevención de Riesgos</h2>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {posts.map((post) => (
              <Link className="card" key={post.slug} href={`/blog/${post.slug}`}>
                <span className="badge">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="btn dark" href="/blog">Ver blog completo</Link>{" "}
            <Link className="btn secondary" href="/newsletter">Suscribirme al newsletter</Link>
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="cta">
            <h2>¿Necesitas apoyo preventivo?</h2>
            <p>Agenda una asesoría, solicita una regularización o escríbeme directamente por WhatsApp.</p>
            <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
            <a className="btn whatsapp" href={buildWhatsAppUrl("Hola, quiero solicitar información sobre servicios de Prevención de Riesgos.")} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
