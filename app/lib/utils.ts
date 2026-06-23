import { WHATSAPP_NUMBER } from "./constants";

/** Builds https://wa.me/[AGENT_PHONE_NUMBER]?text=[ENCODED_TEXT] */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
