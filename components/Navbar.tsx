import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link className="brand" href="/">Diego Profesional</Link>
        <div className="nav-links">
          <Link href="/prevencion">Prevención</Link>
          <Link href="/masoterapia">Masoterapia</Link>
          <Link href="/agenda-prevencion">Agenda Prevención</Link>
          <Link href="/agenda-masoterapia">Agenda Masoterapia</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
