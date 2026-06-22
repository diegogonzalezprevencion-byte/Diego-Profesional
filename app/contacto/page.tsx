import ContactForm from "../../components/ContactForm";

export default function Contacto() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Contacto</div>
          <h1>Solicita información o agenda un servicio</h1>
          <p>Envíame tus datos y el detalle de lo que necesitas.</p>
          <div className="grid-2" style={{ marginTop: 28 }}>
            <div className="card">
              <h2>Formulario de contacto</h2>
              <ContactForm />
            </div>
            <div className="card">
              <h2>Atención profesional</h2>
              <p>Servicios de prevención de riesgos para empresas y masoterapia profesional para personas.</p>
              <p>También puedes usar el botón flotante de WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
