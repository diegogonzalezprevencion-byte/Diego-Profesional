import Link from "next/link";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function Home() {
  const prevencion = [
    ["Regularización Legal", "Diagnóstico y apoyo documental para mejorar el cumplimiento en Seguridad y Salud en el Trabajo."],
    ["Matrices de Riesgos", "Identificación de peligros, evaluación de riesgos y definición de controles preventivos."],
    ["Informes de Gestión", "Reportes ejecutivos, indicadores y seguimiento para gerencias, comités y sucursales."],
    ["Capacitaciones", "Charlas y formaciones en temas críticos de prevención de riesgos laborales."],
    ["Inducción Persona Nueva", "Apoyo para inducciones de trabajadores nuevos, registros y respaldos."],
    ["Comité Paritario", "Acompañamiento para constitución, reuniones, actas, programas y funcionamiento CPHS."]
  ];

  const masoterapia = [
    ["Masaje Relajante", "60 minutos", "$25.000 CLP", false],
    ["Descontracturante", "60 minutos", "$30.000 CLP", true],
    ["Masaje Mixto", "90 minutos", "$40.000 CLP", false],
    ["Piedras Calientes", "75 minutos", "$38.000 CLP", false],
    ["Piernas Cansadas", "45 minutos", "$22.000 CLP", false],
    ["Masaje Deportivo", "60 minutos", "$35.000 CLP", false]
  ];

  const process = [
    ["1", "Diagnóstico", "Revisamos necesidad, contexto y objetivo del servicio."],
    ["2", "Plan de acción", "Definimos alcance, horario, entregable o tipo de sesión."],
    ["3", "Ejecución", "Realizamos la asesoría, capacitación, informe o atención."],
    ["4", "Seguimiento", "La reserva queda registrada y puede ser gestionada desde el panel."]
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Servicios profesionales en Chile</div>
            <h1>Prevención de Riesgos y Masoterapia Profesional</h1>
            <p>
              Una plataforma simple para contratar servicios de gestión preventiva para empresas
              y sesiones de bienestar corporal con agenda online, recordatorios y confirmación por WhatsApp.
            </p>
            <div className="badge-list">
              <span className="badge">Cumplimiento legal</span>
              <span className="badge">D.S. N°44</span>
              <span className="badge">CPHS</span>
              <span className="badge">Calendario profesional</span>
              <span className="badge">Recordatorios</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
              <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
            </p>
          </div>

          <div className="hero-card">
            <div className="image-band">
              <div className="eyebrow" style={{ color: "#ccfbf1" }}>Gestión + Bienestar</div>
              <h2>Atención profesional, ordenada y trazable</h2>
              <p>
                Agenda, disponibilidad, confirmaciones y recordatorios en una sola experiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid-4">
            <div className="kpi"><strong>2</strong><span>Áreas profesionales</span></div>
            <div className="kpi"><strong>14</strong><span>Días visibles en agenda</span></div>
            <div className="kpi"><strong>2</strong><span>Tipos de recordatorio</span></div>
            <div className="kpi"><strong>24/7</strong><span>Solicitud online</span></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="eyebrow">Soluciones según necesidad</div>
          <h2>¿Qué tipo de servicio necesitas?</h2>
          <div className="grid-2" style={{ marginTop: 28 }}>
            <div className="feature-card">
              <h3>Para empresas</h3>
              <p>
                Apoyo en cumplimiento legal, matrices de riesgos, informes de gestión,
                capacitaciones, inducciones y Comités Paritarios.
              </p>
              <ul className="list">
                <li>Gestión documental preventiva.</li>
                <li>Preparación para fiscalizaciones.</li>
                <li>Capacitaciones e inducciones.</li>
                <li>Diagnóstico de brechas SSO.</li>
              </ul>
              <Link className="btn" href="/agenda-prevencion">Agendar diagnóstico</Link>
            </div>

            <div className="feature-card">
              <h3>Para personas</h3>
              <p>
                Sesiones de masoterapia para relajación, descarga muscular, recuperación
                corporal y disminución de tensión física.
              </p>
              <ul className="list">
                <li>Masajes relajantes.</li>
                <li>Descontracturantes.</li>
                <li>Piedras calientes.</li>
                <li>Piernas cansadas y masaje mixto.</li>
              </ul>
              <Link className="btn secondary" href="/agenda-masoterapia">Reservar sesión</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="servicios-prevencion">
        <div className="container">
          <div className="eyebrow">Área empresas</div>
          <h2>Servicios de Prevención de Riesgos</h2>
          <p>Soluciones orientadas a cumplimiento legal, gestión documental, capacitación y control preventivo.</p>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {prevencion.map(([title, text]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow">Proceso de trabajo</div>
          <h2>Una experiencia clara de principio a fin</h2>
          <div className="grid-4" style={{ marginTop: 28 }}>
            {process.map(([num, title, text]) => (
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

      <section className="section soft" id="servicios-masoterapia">
        <div className="container">
          <div className="eyebrow">Área bienestar</div>
          <h2>Servicios de Masoterapia</h2>
          <p>Servicios orientados a relajación, descarga muscular y bienestar corporal general.</p>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {masoterapia.map(([name, duration, price, highlight]) => (
              <div className={highlight ? "price-card highlight" : "price-card"} key={String(name)}>
                {highlight && <span className="badge">Más solicitado</span>}
                <h3>{name}</h3>
                <p>{duration}</p>
                <div className="price">{price}</div>
              </div>
            ))}
          </div>
          <div className="cta">
            <h2>Reserva tu sesión</h2>
            <p>Selecciona el servicio, fecha y horario disponible desde la agenda online.</p>
            <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
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
              participativa y documentada.
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
              El Comité Paritario requiere orden documental, reuniones, actas, planificación,
              investigación de accidentes y seguimiento.
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
          <div className="eyebrow">Preguntas frecuentes</div>
          <h2>Preguntas frecuentes</h2>
          <div className="faq" style={{ marginTop: 26 }}>
            <details><summary>¿Cuándo una empresa necesita apoyo en prevención de riesgos?</summary><p>Cuando requiere ordenar documentación, preparar fiscalizaciones, capacitar trabajadores, elaborar matrices de riesgo o mejorar su gestión preventiva.</p></details>
            <details><summary>¿Qué empresas deberían revisar su cumplimiento del D.S. N°44?</summary><p>Empresas que necesitan actualizar su gestión preventiva, fortalecer participación, planificar controles y mantener registros asociados a seguridad y salud en el trabajo.</p></details>
            <details><summary>¿Qué incluye el apoyo al CPHS?</summary><p>Puede incluir constitución, regularización documental, actas, programas de trabajo, capacitaciones, investigaciones e inspecciones preventivas.</p></details>
            <details><summary>¿Cómo funciona la agenda online?</summary><p>Seleccionas el área, servicio, fecha y hora disponible. La solicitud queda registrada y pendiente de confirmación.</p></details>
            <details><summary>¿Los servicios de masoterapia reemplazan atención médica?</summary><p>No. La masoterapia es un servicio de bienestar y apoyo corporal.</p></details>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="cta">
            <h2>¿Necesitas ayuda profesional?</h2>
            <p>Agenda un servicio de prevención, reserva una sesión de masoterapia o escríbeme por WhatsApp.</p>
            <Link className="btn" href="/agenda-prevencion">Agendar Prevención</Link>{" "}
            <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>{" "}
            <a className="btn whatsapp" href={buildWhatsAppUrl("Hola, quiero solicitar información sobre tus servicios profesionales.")} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
