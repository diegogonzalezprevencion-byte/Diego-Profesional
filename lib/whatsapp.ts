export function buildWhatsAppUrl(message: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56912345678";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
