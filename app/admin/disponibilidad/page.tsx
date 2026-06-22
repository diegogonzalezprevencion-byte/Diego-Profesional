import AdminGuard from "../../../components/AdminGuard";
import AdminAvailability from "../../../components/AdminAvailability";

export default function AdminDisponibilidadPage() {
  return <AdminGuard><main><section className="section"><div className="container"><div className="eyebrow">Panel administrador</div><h1>Gestión de Disponibilidad</h1><AdminAvailability /></div></section></main></AdminGuard>;
}
