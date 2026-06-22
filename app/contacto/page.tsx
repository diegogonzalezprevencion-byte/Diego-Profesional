export default function Contacto() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Contacto</div>
          <h1>Solicita información o agenda un servicio</h1>
          <p>
            Esta página queda preparada para integrar formulario funcional,
            WhatsApp, correo y sistema de reservas en las siguientes fases.
          </p>

          <div className="grid-2" style={{ marginTop: 28 }}>
            <div className="card">
              <h3>Prevención de Riesgos</h3>
              <p>Solicita diagnóstico, regularización, capacitación o apoyo documental.</p>
            </div>
            <div className="card">
              <h3>Masoterapia</h3>
              <p>Consulta disponibilidad para sesiones de bienestar y recuperación muscular.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
