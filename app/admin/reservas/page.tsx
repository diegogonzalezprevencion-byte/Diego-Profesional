import AdminGuard from "../../../components/AdminGuard";
import AdminReservations from "../../../components/AdminReservations";

export default function AdminReservasPage() {
  return (
    <AdminGuard>
      <main>
        <section className="section">
          <div className="container">
            <div className="eyebrow">Panel administrador</div>
            <h1>Gestión de Reservas</h1>
            <AdminReservations />
          </div>
        </section>
      </main>
    </AdminGuard>
  );
}
