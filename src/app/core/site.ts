/**
 * Single source of truth for site-wide content: navigation, branding, contact
 * links and the data-driven sections. Keeping these values here avoids
 * duplicating URLs and labels across the layout and section components.
 */

export interface NavLink {
  /** Visible label. */
  label: string;
  /** In-page anchor target, including the leading `#`. */
  fragment: `#${string}`;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** A scheduled live performance. Empty array hides the section. */
export interface Show {
  /** Human-readable date, e.g. "12 OCT 2026". */
  date: string;
  venue: string;
  city: string;
  /** Optional link to tickets or event info. */
  url?: string;
}

/** A listen link. Empty array hides the section. */
export interface Track {
  title: string;
  /** Platform label, e.g. "Spotify" or "YouTube". */
  platform: string;
  url: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Inicio', fragment: '#inicio' },
  { label: 'Set', fragment: '#sobre-mi' },
  { label: 'Contacto', fragment: '#contacto' },
];

export const WHATSAPP_PHONE = '34619869942';

/** Builds a WhatsApp deep link with a prefilled message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl(
  'Hola Juan, me gustaría hablar contigo sobre disponibilidad para un directo o colaboración musical.',
);

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: '¿Cómo reservo una actuación?',
    answer:
      'Escríbeme por el formulario o por WhatsApp con la fecha, el lugar y el tipo de evento. Te confirmo disponibilidad lo antes posible.',
  },
  {
    question: '¿Dónde tocas?',
    answer:
      'Tengo base en Tenerife y estoy abierto a desplazamientos y a colaboraciones dentro y fuera de la isla.',
  },
  {
    question: '¿Qué repertorio llevas?',
    answer:
      'Jazz y blues con pulso de club: temas propios, estándares y arreglos de autor, adaptados al ambiente de la sala.',
  },
  {
    question: '¿Qué formato encaja mejor en mi espacio?',
    answer:
      'El formato se ajusta al aforo y al tipo de evento. Cuéntame qué tienes en mente y buscamos la mejor opción juntos.',
  },
];

/**
 * Data-driven sections. Fill these arrays to enable the matching section; while
 * they are empty the section is not rendered.
 */
export const UPCOMING_SHOWS: readonly Show[] = [];
export const TRACKS: readonly Track[] = [];
export const GALLERY: readonly GalleryItem[] = [];
