const CONFIG = {
  // Reemplaza este número por tu WhatsApp con código de país, sin + ni espacios.
  whatsappNumber: "569XXXXXXXX",
  email: "contacto@tudominio.cl",
};

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

function buildWhatsAppMessage() {
  return encodeURIComponent(
    "Hola Diego, quiero solicitar información sobre asesoría en Prevención de Riesgos."
  );
}

function setWhatsAppLinks() {
  const links = document.querySelectorAll("[data-whatsapp]");
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  const href = number && !number.includes("XXXXXXXX")
    ? `https://wa.me/${number}?text=${buildWhatsAppMessage()}`
    : "#contacto";
  links.forEach((link) => link.setAttribute("href", href));
}
setWhatsAppLinks();

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nombre = data.get("nombre") || "";
    const empresa = data.get("empresa") || "";
    const servicio = data.get("servicio") || "";
    const mensaje = data.get("mensaje") || "";

    const subject = encodeURIComponent("Solicitud de asesoría en Prevención de Riesgos");
    const body = encodeURIComponent(
      `Hola Diego,\n\nMe gustaría solicitar una evaluación inicial.\n\nNombre: ${nombre}\nEmpresa: ${empresa}\nServicio de interés: ${servicio}\nMensaje: ${mensaje}\n\nSaludos.`
    );
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}
