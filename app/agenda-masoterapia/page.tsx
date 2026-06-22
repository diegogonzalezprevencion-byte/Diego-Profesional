import BookingForm from "../../components/BookingForm";

export const metadata = { title: "Agenda Masoterapia", description: "Agenda online para masoterapia profesional." };

export default function AgendaMasoterapia() {
  const services = ["Masaje Relajante - $25.000", "Masaje Descontracturante - $30.000", "Masaje Mixto - $40.000", "Piedras Calientes - $38.000", "Piernas Cansadas - $22.000", "Masaje Deportivo - $35.000"];
  return <main><section className="section"><div className="container"><div className="eyebrow">Calendario profesional</div><h1>Agenda Masoterapia</h1><p>Selecciona un día, revisa horarios disponibles y solicita tu reserva. El sistema preparará recordatorios.</p><BookingForm type="masoterapia" title="Reserva de Masoterapia" services={services} /></div></section></main>;
}
