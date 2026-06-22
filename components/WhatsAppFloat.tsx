import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function WhatsAppFloat() {
  const message = "Hola, quiero solicitar información sobre servicios de Prevención de Riesgos.";
  return <a className="whatsapp-float" href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">WhatsApp</a>;
}
