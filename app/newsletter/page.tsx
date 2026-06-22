import NewsletterForm from "../../components/NewsletterForm";

export const metadata = {
  title: "Newsletter",
  description: "Suscripción a novedades de prevención de riesgos, bienestar y masoterapia."
};

export default function NewsletterPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Newsletter</div>
          <h1>Recibe información útil</h1>
          <p>Suscríbete para recibir contenidos sobre prevención de riesgos, D.S. 44, CPHS, bienestar y masoterapia.</p>
          <div className="grid-2" style={{ marginTop: 28 }}>
            <div className="card">
              <h2>Suscripción</h2>
              <NewsletterForm />
            </div>
            <div className="card">
              <h2>Temas incluidos</h2>
              <ul className="list">
                <li>D.S. N°44 y cumplimiento legal.</li>
                <li>Comité Paritario.</li>
                <li>Ergonomía y autocuidado.</li>
                <li>Masoterapia y bienestar corporal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
