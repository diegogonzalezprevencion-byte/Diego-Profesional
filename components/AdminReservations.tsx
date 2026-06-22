"use client";

import { useEffect, useState } from "react";

type Reserva = {
  id: string;
  area: string;
  servicio: string;
  fecha: string;
  hora: string;
  nombre: string;
  email: string;
  telefono: string;
  estado: string;
};

export default function AdminReservations() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadReservas() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/reservas");
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudieron cargar las reservas.");
      }
      setReservas(data.reservas || []);
    } catch (err: any) {
      setError(err.message || "No se pudieron cargar las reservas.");
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, estado: string) {
    try {
      const response = await fetch(`/api/reservas/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado })
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudo actualizar la reserva.");
      }
      await loadReservas();
    } catch (err: any) {
      alert(err.message || "No se pudo actualizar la reserva.");
    }
  }

  useEffect(() => {
    loadReservas();
  }, []);

  return (
    <div className="card">
      <h2>Reservas registradas</h2>
      {loading && <p>Cargando reservas...</p>}
      {error && <div className="error">{error}</div>}

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Área</th>
              <th>Servicio</th>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.area}</td>
                <td>{reserva.servicio}</td>
                <td>{reserva.nombre}</td>
                <td>{reserva.email}<br />{reserva.telefono}</td>
                <td>{reserva.estado}</td>
                <td>
                  <div className="admin-actions">
                    <button className="btn" onClick={() => updateStatus(reserva.id, "confirmada")}>Confirmar</button>
                    <button className="btn gray" onClick={() => updateStatus(reserva.id, "pendiente")}>Pendiente</button>
                    <button className="btn red" onClick={() => updateStatus(reserva.id, "cancelada")}>Cancelar</button>
                  </div>
                </td>
              </tr>
            ))}
            {!loading && reservas.length === 0 && (
              <tr>
                <td colSpan={8}>No hay reservas registradas.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
