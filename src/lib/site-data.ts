import {
  Hand,
  Sparkles,
  Footprints,
  Flower2,
  type LucideIcon,
} from "lucide-react";

import heroImg from "@/assets/hero-spa.jpg";
import productAloe from "@/assets/product-aloe.jpg";
import productMoringa from "@/assets/product-moringa.jpg";
import productOil from "@/assets/product-oil.jpg";
import productHoney from "@/assets/product-honey.jpg";
import gallery1 from "@/assets/gallery-nails-pink.jpg";
import gallery2 from "@/assets/gallery-massage.jpg";
import gallery3 from "@/assets/gallery-pedicure.png";
import gallery4 from "@/assets/gallery-nails-biab.jpg";
import gallery5 from "@/assets/gallery-5a.png";
import gallery6 from "@/assets/gallery-6a.png";
import nail1 from "@/assets/nail-1a.avif";
import nail2 from "@/assets/nail-2a.avif";
import nail3 from "@/assets/nail-3a.avif";
import nail4 from "@/assets/nail-4a.avif";
import teamGloria from "@/assets/team-gloria.jpg";
import teamRoberto from "@/assets/team-roberto.jpg";
import teamIrina from "@/assets/team-irina.jpg";

export { heroImg, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 };
export const nailWorks = [nail1, nail2, nail4, nail3];

export const FRESHA =
  "https://www.fresha.com/en-GB/a/herbolario-spa-la-tejita-calle-hernan-cortes-nr2-local-28-bcsrz2cb?pId=649551";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Herbolario+Spa+La+Tejita+Calle+Hernan+Cortes+2+Local+28+Tenerife";
export const PHONE = "+34 641 94 85 30";
export const PHONE_TEL = "+34641948530";
export const EMAIL = "hola@herbolariospalatejita.es";
export const WHATSAPP_NUMBER = "34641948530";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ADDRESS_LINES = [
  "C. Hernán Cortés, 2, Local 28",
  "C.C. La Tejita Street Market",
  "Santa Cruz de Tenerife",
];

export const HOURS_VALUE =
  "Lun – Vie: 10:00 – 19:00\nSábados: 10:00 – 15:00\nDomingos: cerrado";

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Tratamientos", to: "/tratamientos" },
  { label: "Tienda", to: "/tienda" },
  { label: "Sobre nosotros", to: "/sobre-nosotros" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
];

// ---------------- Treatments ----------------

export type ServiceCat = "faciales" | "masajes" | "manos" | "pies";

export type Service = {
  key: string;
  icon: LucideIcon;
  title: string;
  price: string;
  duration: string;
  description: string;
  benefit: string;
  cat: ServiceCat;
};

export const services: Service[] = [
  {
    key: "s1",
    icon: Hand,
    title: "Masajes Relajantes",
    price: "desde 60€",
    duration: "60 / 90 min",
    description:
      "Liberación de tensión con técnicas profesionales en un entorno de calma absoluta.",
    benefit: "Alivio de tensión muscular y descanso profundo.",
    cat: "masajes",
  },
  {
    key: "s2",
    icon: Footprints,
    title: "Pedicura Spa",
    price: "consulta",
    duration: "50 min",
    description:
      "Ritual completo de cuidado para los pies con baño herbal y exfoliación natural.",
    benefit: "Pies suaves, hidratados y cuidados al detalle.",
    cat: "pies",
  },
  {
    key: "s3",
    icon: Sparkles,
    title: "Manicura Rusa",
    price: "desde 37€",
    duration: "75 min",
    description:
      "Acabado impecable y duradero con la técnica rusa de máxima precisión.",
    benefit: "Manicura impecable con duración de hasta 4 semanas.",
    cat: "manos",
  },
  {
    key: "s4",
    icon: Flower2,
    title: "Faciales",
    price: "consulta",
    duration: "60 min",
    description:
      "Rituales que devuelven luminosidad, equilibrio y suavidad a tu rostro.",
    benefit: "Piel luminosa, equilibrada y revitalizada.",
    cat: "faciales",
  },
];

export const SERVICE_CATEGORIES: Array<{ label: string; value: ServiceCat | "all" }> = [
  { label: "Todos", value: "all" },
  { label: "Faciales", value: "faciales" },
  { label: "Masajes", value: "masajes" },
  { label: "Manos", value: "manos" },
  { label: "Pies", value: "pies" },
];


// ---------------- Products ----------------

export type ProductCat =
  | "facial"
  | "corporal"
  | "herbolario"
  | "canarias";

export type ProductBadge = "new" | "bestseller";

export type Product = {
  key: string;
  name: string;
  description: string;
  price: string;
  priceEur: number;
  img: string;
  cat: ProductCat;
  bio?: boolean;
  canarias?: boolean;
  badge?: ProductBadge;
};

export const products: Product[] = [
  {
    key: "p1",
    name: "Gel Puro de Aloe Vera de Tenerife",
    description: "Hidratante puro extraído en Tenerife (250 ml).",
    price: "19,00€",
    priceEur: 19.00,
    img: productAloe,
    cat: "corporal",
    bio: true,
    canarias: true,
    badge: "bestseller",
  },
  {
    key: "p2",
    name: "Cápsulas de Moringa Canaria Bio",
    description: "Suplemento ecológico rico en nutrientes.",
    price: "24,50€",
    priceEur: 24.50,
    img: productMoringa,
    cat: "herbolario",
    bio: true,
    canarias: true,
    badge: "bestseller",
  },
  {
    key: "p3",
    name: "Aceite Esencial de Lavanda y Caléndula",
    description: "Mezcla relajante para difusor y masaje.",
    price: "15,00€",
    priceEur: 15.00,
    img: productOil,
    cat: "corporal",
    bio: true,
  },
  {
    key: "p4",
    name: "Miel de Flores de la Isla con Jalea Real",
    description: "Miel artesanal con jalea real de la isla.",
    price: "12,00€",
    priceEur: 12.00,
    img: productHoney,
    cat: "canarias",
    canarias: true,
  },
  {
    key: "p5",
    name: "Vitamina D3 + K2 Natural",
    description: "Defensas y huesos fuertes, fórmula bio.",
    price: "18,00€",
    priceEur: 18.00,
    img: productMoringa,
    cat: "herbolario",
    bio: true,
    badge: "new",
  },
  {
    key: "p6",
    name: "Crema Facial Aloe & Caléndula",
    description: "Hidratación diaria con extractos canarios.",
    price: "22,00€",
    priceEur: 22.00,
    img: productAloe,
    cat: "facial",
    bio: true,
    canarias: true,
  },
  {
    key: "p7",
    name: "Infusión Detox de Hierbas Canarias",
    description: "Mezcla depurativa con poleo y manzanilla.",
    price: "9,50€",
    priceEur: 9.50,
    img: productOil,
    cat: "herbolario",
    bio: true,
    canarias: true,
    badge: "new",
  },
  {
    key: "p8",
    name: "Té Verde Bio con Hierbabuena",
    description: "Antioxidante natural, sabor refrescante.",
    price: "11,00€",
    priceEur: 11.00,
    img: productHoney,
    cat: "herbolario",
    bio: true,
  },
  {
    key: "p9",
    name: "Aceite Esencial de Eucalipto Bio",
    description: "Aliado respiratorio para difusor o vapor.",
    price: "16,00€",
    priceEur: 16.00,
    img: productOil,
    cat: "corporal",
    bio: true,
    badge: "bestseller",
  },
  {
    key: "p10",
    name: "Aceite de Oliva Virgen Extra Canario",
    description: "Prensado en frío, sabor afrutado intenso.",
    price: "14,00€",
    priceEur: 14.00,
    img: productHoney,
    cat: "canarias",
    bio: true,
    canarias: true,
  },
  {
    key: "p11",
    name: "Sérum Facial de Vitamina C Bio",
    description: "Luminosidad y antioxidante natural.",
    price: "28,00€",
    priceEur: 28.00,
    img: productAloe,
    cat: "facial",
    bio: true,
    canarias: true,
    badge: "new",
  },
  {
    key: "p12",
    name: "Cápsulas de Cúrcuma + Pimienta Negra",
    description: "Antiinflamatorio natural de alta absorción.",
    price: "21,00€",
    priceEur: 21.00,
    img: productMoringa,
    cat: "herbolario",
    bio: true,
  },
];

export const PRODUCT_CATEGORIES: Array<{ label: string; value: ProductCat | "all" }> = [
  { label: "Todos", value: "all" },
  { label: "Cuidado facial", value: "facial" },
  { label: "Cuidado corporal", value: "corporal" },
  { label: "Herbolario", value: "herbolario" },
  { label: "Canarias / local", value: "canarias" },
];

// ---------------- Team ----------------

export type TeamSpecialty = "nailsBeauty" | "therapy" | "beautyTreatments";

export type TeamMember = {
  name: string;
  role: string;
  specialtyKey: TeamSpecialty;
  photo: string;
  icon: LucideIcon;
};

export const team: TeamMember[] = [
  {
    name: "Gloria",
    role: "Experta en belleza y uñas",
    specialtyKey: "nailsBeauty",
    photo: teamGloria,
    icon: Sparkles,
  },
  {
    name: "Roberto",
    role: "Terapeuta profesional",
    specialtyKey: "therapy",
    photo: teamRoberto,
    icon: Hand,
  },
  {
    name: "Irina",
    role: "Master en uñas y belleza",
    specialtyKey: "nailsBeauty",
    photo: teamIrina,
    icon: Sparkles,
  },
];

// Public Google Maps profile (139 reviews, 5.0)
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Herbolario+Spa+La+Tejita";

// ---------------- Portfolio ----------------

export const portfolio = [
  { img: gallery1, label: "Manicura Rusa" },
  { img: gallery2, label: "Masaje Facial Japonés KOBIDO" },
  { img: gallery3, label: "Pedicura Spa" },
  { img: gallery4, label: "BIAB / SOAP NAILS" },
  { img: gallery5, label: "Masaje Relajante" },
  { img: gallery6, label: "Masaje + Chakra Balance" },
];

// ---------------- Reviews ----------------

export const reviews = [
  {
    name: "Laia P.",
    date: "2025",
    rating: 5,
    text:
      "Una experiencia maravillosa. Irina es una artista con las uñas: precisión, cuidado y un acabado impecable. Repetiré sin duda.",
  },
  {
    name: "Marco R.",
    date: "2025",
    rating: 5,
    text:
      "Massaggio rilassante eccezionale con Roberto. Ambiente curato e professionale, sono uscito completamente rigenerato.",
  },
  {
    name: "Sophie K.",
    date: "2025",
    rating: 5,
    text:
      "Lovely facial with Gloria — calm space, attentive care and beautiful natural products. Highly recommended in Tenerife.",
  },
  {
    name: "Anna B.",
    date: "2025",
    rating: 5,
    text:
      "Perfekte russische Maniküre, sehr sauber und langanhaltend. Das Team ist herzlich und professionell. Sehr empfehlenswert!",
  },
  {
    name: "Carmen D.",
    date: "2024",
    rating: 5,
    text:
      "El mejor centro de bienestar de la zona. Trato cercano, productos naturales y resultados visibles desde la primera sesión.",
  },
];

// ---------------- Blog ----------------

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  tag: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuidar-tu-piel",
    title: "3 gestos sencillos para cuidar tu piel cada día",
    excerpt:
      "Pequeñas rutinas naturales que marcan la diferencia en la salud y luminosidad de tu piel.",
    tag: "Cuidado facial",
    paragraphs: [
      "Cuidar la piel no necesita rituales largos ni productos complicados. Limpiar con suavidad, hidratar a diario y proteger del sol son tres gestos que, repetidos en el tiempo, transforman cómo se ve y se siente tu rostro.",
      "Apuesta por texturas suaves, ingredientes reconocibles y momentos para ti. Tu piel agradece la constancia más que la intensidad.",
    ],
  },
  {
    slug: "por-que-cosmetica-natural",
    title: "Por qué elegir cosmética más natural",
    excerpt:
      "Beneficios reales de incluir cosmética bio y de proximidad en tu rutina.",
    tag: "Cosmética bio",
    paragraphs: [
      "La cosmética natural prioriza ingredientes vegetales, fórmulas respetuosas y procesos cuidados. El resultado es una experiencia más amable para la piel y para el entorno.",
      "Elegir productos elaborados en Canarias también te conecta con la tierra: aloe vera de Tenerife, aceites suaves y plantas locales que llevan generaciones acompañando el bienestar de la isla.",
    ],
  },
  {
    slug: "rituales-de-autocuidado",
    title: "Un momento para vos: rituales de autocuidado en casa",
    excerpt:
      "Ideas simples para crear pequeños rituales de bienestar entre visita y visita.",
    tag: "Bienestar",
    paragraphs: [
      "Una infusión templada, una vela suave y unos minutos para respirar. Los rituales más poderosos suelen ser los más sencillos, los que se repiten y se vuelven parte del día.",
      "Combina pequeñas acciones —aplicar un aceite con calma, dedicar tiempo a las manos, hidratarte tras la ducha— y notarás cómo el cuidado se convierte en un hábito que te acompaña.",
    ],
  },
];
