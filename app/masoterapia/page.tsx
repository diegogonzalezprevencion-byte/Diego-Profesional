import Link from "next/link";

export default function Masoterapia() {
  const services = [
    { name: "Masaje Relajante", duration: "60 minutos", price: "$25.000 CLP" },
    { name: "Masaje Descontracturante", duration: "60 minutos", price: "$30.000 CLP" },
    { name: "Masaje Mixto", duration: "90 minutos", price: "$40.000 CLP" },
    { name: "Piedras Calientes", duration: "75 minutos", price: "$38.000 CLP" },
    { name: "Piernas Cansadas", duration: "45 minutos", price: "$22.000 CLP" },
    { name: "Masaje Deportivo", duration: "60 minutos", price: "$35.000 CLP" }
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Área bienestar</div>
          <h1>Masoterapia Profesional</h1>
          <p>Servicios orientados al bienestar corporal, relajación, recuperación muscular y alivio de tensión física.</p>

          <div className="grid-3" style={{ marginTop: 28 }}>
            {services.map((service) => (
              <div className="card" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.duration}</p>
                <div className="price">{service.price}</div>
              </div>
            ))}
          </div>

          <div className="cta">
            <h2>Agenda de masoterapia</h2>
            <p>Selecciona servicio, fecha y horario disponible.</p>
            <Link className="btn secondary" href="/agenda-masoterapia">Agendar Masoterapia</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
