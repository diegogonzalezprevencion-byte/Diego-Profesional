import Link from "next/link";
import AdminGuard from "../../components/AdminGuard";

export const metadata = { title: "Panel Administrador", robots: { index: false, follow: false } };

export default function AdminPage() {
  return <AdminGuard><main><section className="section"><div className="container"><div className="eyebrow">Panel privado</div><h1>Panel Administrador</h1><p>Gestiona reservas, disponibilidad y recordatorios.</p><div className="grid-3" style={{ marginTop: 28 }}><div className="card"><h2>Reservas</h2><p>Revisa solicitudes y cambia su estado.</p><Link className="btn" href="/admin/reservas">Ver reservas</Link></div><div className="card"><h2>Disponibilidad</h2><p>Crea o elimina horarios disponibles.</p><Link className="btn secondary" href="/admin/disponibilidad">Gestionar disponibilidad</Link></div><div className="card"><h2>Recordatorios</h2><p>Revisa mensajes pendientes y envíalos por WhatsApp.</p><Link className="btn dark" href="/admin/recordatorios">Ver recordatorios</Link></div></div></div></section></main></AdminGuard>;
}
