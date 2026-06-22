import BookingForm from "../../components/BookingForm";

export const metadata = {
  title: "Agenda Prevención de Riesgos",
  description: "Agenda una reunión, diagnóstico o visita técnica de prevención de riesgos."
};

export default function AgendaPrevencion() {
  const services = ["Reunión de diagnóstico preventivo", "Regularización legal", "Matriz de riesgos", "Capacitación", "Inducción persona nueva", "Informe de gestión", "Visita técnica"];
  return (
    <main><section className="section"><div className="container"><div className="eyebrow">Agenda online</div><h1>Agenda Prevención de Riesgos</h1><p>Reserva una reunión, diagnóstico o visita técnica.</p><BookingForm type="prevencion" title="Reserva para Prevención" services={services} /></div></section></main>
  );
}
