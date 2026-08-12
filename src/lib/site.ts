export const PHONE_DISPLAY = "(55) 3512-1256";
export const PHONE_TEL = "+555535121256";
export const WHATSAPP_NUMBER = "5555996745666";
export const ADDRESS_LINE1 = "Av. Borges de Medeiros, 420 - Centro";
export const ADDRESS_LINE2 = "Santa Rosa - RS, 98780-001";
export const INSTAGRAM_URL = "https://instagram.com/hs.tintas";
export const FACEBOOK_URL = "https://facebook.com/HsTintas";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Borges+de+Medeiros,+420+-+Centro,+Santa+Rosa+-+RS,+98780-001";
export const MAPS_REVIEWS_URL =
  "https://www.google.com/search?q=H+S+Com%C3%A9rcio+de+Tintas+Santa+Rosa+RS+avalia%C3%A7%C3%B5es";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.%20Borges%20de%20Medeiros%2C%20420%20-%20Centro%2C%20Santa%20Rosa%20-%20RS%2C%2098780-001&output=embed";

export const DEFAULT_MESSAGE =
  "Olá! Encontrei a H S Tintas pelo site e gostaria de solicitar um orçamento.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
