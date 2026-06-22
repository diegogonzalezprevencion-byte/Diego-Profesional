export const metadata = {
  title: "Políticas de atención y privacidad",
  description: "Políticas generales de atención, privacidad y uso de datos."
};

export default function Politicas() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Información legal</div>
          <h1>Políticas de atención y privacidad</h1>
          <div className="card">
            <h2>Uso de datos</h2>
            <p>Los datos ingresados en formularios y reservas se utilizan únicamente para gestionar solicitudes, confirmar horarios y mantener comunicación relacionada con el servicio solicitado.</p>
            <h2>Reservas</h2>
            <p>Las reservas ingresadas quedan inicialmente en estado pendiente y deben ser confirmadas por el administrador.</p>
            <h2>Masoterapia</h2>
            <p>Los servicios de masoterapia no reemplazan atención médica ni kinesiológica. Ante dolor severo, lesiones, fiebre o síntomas persistentes se recomienda consultar a un profesional de salud.</p>
            <h2>Prevención de Riesgos</h2>
            <p>Los servicios de prevención de riesgos se ajustan al alcance acordado con cada cliente y a la información proporcionada por la empresa solicitante.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
