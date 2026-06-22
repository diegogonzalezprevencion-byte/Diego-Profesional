"use client";

import { useState } from "react";

type BookingFormProps = {
  type: "prevencion" | "masoterapia";
  title: string;
  services: string[];
};

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"];

export default function BookingForm({ type, title, services }: BookingFormProps) {
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid-2">
      <div className="card calendar-box">
        <h2>{title}</h2>
        <p>
          Selecciona servicio, fecha y horario disponible. En la Fase 4 esta reserva se guardará
          en Supabase y podrá ser gestionada desde panel administrador.
        </p>

        <label className="label">
          Servicio
          <select className="select" value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="label">
          Fecha
          <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <div>
          <strong>Horarios disponibles</strong>
          <div className="slot-grid" style={{ marginTop: 12 }}>
            {timeSlots.map((slot) => (
              <button
                type="button"
                className={time === slot ? "slot active" : "slot"}
                key={slot}
                onClick={() => setTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Datos de contacto</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            Nombre completo
            <input className="input" required value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label className="label">
            Correo
            <input className="input" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label className="label">
            Teléfono / WhatsApp
            <input className="input" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <button className="btn" type="submit">Solicitar reserva</button>
        </form>

        {submitted && (
          <div className="notice" style={{ marginTop: 18 }}>
            <strong>Solicitud generada.</strong>
            <p style={{ color: "#14532d", marginBottom: 0 }}>
              Servicio: {service}<br />
              Fecha: {date || "No seleccionada"}<br />
              Hora: {time || "No seleccionada"}<br />
              Área: {type === "prevencion" ? "Prevención de Riesgos" : "Masoterapia"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
