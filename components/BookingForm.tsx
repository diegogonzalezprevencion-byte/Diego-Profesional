"use client";

import { useEffect, useState } from "react";

type BookingFormProps = {
  type: "prevencion" | "masoterapia";
  title: string;
  services: string[];
};

export default function BookingForm({ type, title, services }: BookingFormProps) {
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSlots() {
      setTime("");
      setError("");
      setSubmittedMessage("");

      if (!date) {
        setSlots([]);
        return;
      }

      setLoadingSlots(true);
      try {
        const response = await fetch(`/api/disponibilidad?area=${type}&fecha=${date}`);
        const data = await response.json();

        if (!response.ok || !data.ok) {
          throw new Error(data.error || "No se pudo consultar disponibilidad.");
        }

        setSlots(data.slots || []);
      } catch (err: any) {
        setError(err.message || "No se pudo consultar disponibilidad.");
      } finally {
        setLoadingSlots(false);
      }
    }

    loadSlots();
  }, [date, type]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmittedMessage("");

    if (!date || !time) {
      setError("Debes seleccionar fecha y hora.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          area: type,
          servicio: service,
          fecha: date,
          hora: time,
          nombre: name,
          email,
          telefono: phone
        })
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudo guardar la reserva.");
      }

      setSubmittedMessage("Reserva registrada correctamente. Quedará pendiente de confirmación.");
      setName("");
      setEmail("");
      setPhone("");
      setTime("");
      setSlots((current) => current.filter((slot) => slot !== time));
    } catch (err: any) {
      setError(err.message || "No se pudo registrar la reserva.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid-2">
      <div className="card calendar-box">
        <h2>{title}</h2>
        <p>
          Selecciona servicio, fecha y horario disponible. Esta versión ya se conecta con Supabase
          mediante API Routes de Next.js.
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
          {loadingSlots && <p>Cargando horarios...</p>}
          {!loadingSlots && date && slots.length === 0 && <p>No hay horarios disponibles para esta fecha.</p>}
          <div className="slot-grid" style={{ marginTop: 12 }}>
            {slots.map((slot) => (
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

          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? "Guardando..." : "Solicitar reserva"}
          </button>
        </form>

        {submittedMessage && (
          <div className="notice" style={{ marginTop: 18 }}>
            <strong>{submittedMessage}</strong>
          </div>
        )}

        {error && (
          <div className="error" style={{ marginTop: 18 }}>
            <strong>{error}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
