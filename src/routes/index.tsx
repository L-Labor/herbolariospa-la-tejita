import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Leaf,
  Sparkles,
  Hand,
  Flower2,
  Footprints,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  ShoppingBag,
  Info,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Globe,
  Star,
  Quote,
  Check,
  Truck,
  ShieldCheck,
  Package,
  CalendarCheck,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import heroImg from "@/assets/hero-spa.jpg";
import productAloe from "@/assets/product-aloe.jpg";
import productMoringa from "@/assets/product-moringa.jpg";
import productOil from "@/assets/product-oil.jpg";
import productHoney from "@/assets/product-honey.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3a.png";
import gallery4 from "@/assets/gallery-4a.avif";
import gallery5 from "@/assets/gallery-5a.png";
import gallery6 from "@/assets/gallery-6a.png";
import nail1 from "@/assets/nail-1a.avif";
import nail2 from "@/assets/nail-2a.avif";
import nail3 from "@/assets/nail-3a.avif";
import nail4 from "@/assets/nail-4a.avif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Herbolario Spa La Tejita — Bienestar natural en Tenerife" },
      {
        name: "description",
        content:
          "Centro de bienestar y belleza en La Tejita, Tenerife. Masajes, manicura rusa, pedicura spa, faciales y tienda de productos naturales canarios.",
      },
    ],
  }),
  component: Index,
});

const FRESHA =
  "https://www.fresha.com/en-GB/a/herbolario-spa-la-tejita-calle-hernan-cortes-nr2-local-28-bcsrz2cb?pId=649551";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Herbolario+Spa+La+Tejita+Calle+Hernan+Cortes+2+Local+28+Tenerife";

type Lang = "ES" | "EN" | "IT" | "DE";

const T: Record<Lang, Record<string, string>> = {
  ES: {
    nav_services: "Servicios",
    nav_shop: "Tienda",
    nav_team: "Equipo",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    book: "Reservar",
    book_full: "Reservar Cita",
    hero_eyebrow: "Bienestar & Belleza — Tenerife",
    hero_title: "Tu bienestar natural en La Tejita.",
    hero_sub:
      "En Herbolario Spa La Tejita, creemos que el equipo es el corazón de nuestro éxito. Un grupo de profesionales apasionados, comprometidos con tu bienestar y tu satisfacción.",
    hero_cta: "Ver Tratamientos",
    hero_team: "Conoce al equipo",
    services_kicker: "02 — Servicios",
    services_title: "Rituales pensados para tu equilibrio.",
    services_lead:
      "Cada tratamiento se diseña con técnica, productos cuidados y la atención humana que define nuestra casa.",
    s1_title: "Masajes Relajantes",
    s1_price: "desde 60€",
    s1_desc: "Liberación de tensión con técnicas profesionales en un entorno de calma absoluta.",
    s2_title: "Pedicura Spa",
    s2_price: "consulta",
    s2_desc: "Ritual completo de cuidado para los pies con baño herbal y exfoliación natural.",
    s3_title: "Manicura Rusa",
    s3_price: "desde 37€",
    s3_desc: "Acabado impecable y duradero con la técnica rusa de máxima precisión.",
    s4_title: "Faciales",
    s4_price: "consulta",
    s4_desc: "Rituales que devuelven luminosidad, equilibrio y suavidad a tu rostro.",
    shop_kicker: "03 — Tienda",
    shop_title: "Productos naturales de las Islas.",
    shop_lead: "Selección de productos canarios elaborados con respeto a la tierra.",
    shop_cta: "Comprar",
    p1: "Gel Puro de Aloe Vera de Tenerife (250ml)",
    p2: "Cápsulas de Moringa Canaria Bio",
    p3: "Aceite Esencial de Lavanda y Caléndula",
    p4: "Miel de Flores de la Isla con Jalea Real",
    team_kicker: "04 — Equipo",
    team_title: "Manos expertas, atención cercana.",
    role_gloria: "Experta en belleza y uñas",
    role_roberto: "Terapeuta Profesional",
    role_irina: "Master en uñas y belleza",
    gallery_kicker: "05 — Galería",
    gallery_title: "Resultados que hablan por sí solos.",
    gallery_lead: "Una muestra de nuestro trabajo en manicura, faciales y tratamientos.",
    contact_kicker: "06 — Contacto",
    contact_title: "Reserva tu próxima visita.",
    contact_lead: "Te esperamos en el corazón de La Tejita para diseñar juntos tu ritual de bienestar.",
    addr_label: "Dirección",
    phone_label: "Teléfono",
    hours_label: "Horario",
    hours_value: "Lun – Vie: 10:00 – 19:00\nSábados: 10:00 – 15:00\nDomingos: cerrado",
    ai_note:
      "Transparencia: este sitio web ha sido diseñado y desarrollado con asistencia de inteligencia artificial.",
    rights: "Todos los derechos reservados.",
  },
  EN: {
    nav_services: "Services",
    nav_shop: "Shop",
    nav_team: "Team",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    book: "Book",
    book_full: "Book Now",
    hero_eyebrow: "Wellness & Beauty — Tenerife",
    hero_title: "Your natural wellness in La Tejita.",
    hero_sub:
      "At Herbolario Spa La Tejita, our team is the heart of everything we do. A group of passionate professionals committed to your wellbeing and satisfaction.",
    hero_cta: "View Treatments",
    hero_team: "Meet the team",
    services_kicker: "02 — Services",
    services_title: "Rituals designed for your balance.",
    services_lead:
      "Every treatment is crafted with technique, carefully chosen products and the human attention that defines our house.",
    s1_title: "Relaxing Massages",
    s1_price: "from 60€",
    s1_desc: "Release tension with professional techniques in an environment of absolute calm.",
    s2_title: "Spa Pedicure",
    s2_price: "on request",
    s2_desc: "A complete foot care ritual with herbal bath and natural exfoliation.",
    s3_title: "Russian Manicure",
    s3_price: "from 37€",
    s3_desc: "Flawless, long-lasting finish using the high-precision Russian technique.",
    s4_title: "Facials",
    s4_price: "on request",
    s4_desc: "Rituals that bring radiance, balance and softness back to your skin.",
    shop_kicker: "03 — Shop",
    shop_title: "Natural products from the Islands.",
    shop_lead: "A selection of Canary Island products crafted with respect for the land.",
    shop_cta: "Buy",
    p1: "Pure Aloe Vera Gel from Tenerife (250ml)",
    p2: "Bio Canary Moringa Capsules",
    p3: "Lavender & Calendula Essential Oil",
    p4: "Island Wildflower Honey with Royal Jelly",
    team_kicker: "04 — Team",
    team_title: "Expert hands, close attention.",
    role_gloria: "Beauty & nails expert",
    role_roberto: "Professional Therapist",
    role_irina: "Master in nails & beauty",
    gallery_kicker: "05 — Gallery",
    gallery_title: "Results that speak for themselves.",
    gallery_lead: "A glimpse of our work in manicure, facials and treatments.",
    contact_kicker: "06 — Contact",
    contact_title: "Book your next visit.",
    contact_lead: "We look forward to welcoming you to the heart of La Tejita to design your wellness ritual.",
    addr_label: "Address",
    phone_label: "Phone",
    hours_label: "Hours",
    hours_value: "Mon – Fri: 10:00 – 19:00\nSaturday: 10:00 – 15:00\nSunday: closed",
    ai_note:
      "Transparency: this website was designed and developed with the assistance of artificial intelligence.",
    rights: "All rights reserved.",
  },
  IT: {
    nav_services: "Servizi",
    nav_shop: "Shop",
    nav_team: "Team",
    nav_gallery: "Galleria",
    nav_contact: "Contatti",
    book: "Prenota",
    book_full: "Prenota Ora",
    hero_eyebrow: "Benessere & Bellezza — Tenerife",
    hero_title: "Il tuo benessere naturale a La Tejita.",
    hero_sub:
      "In Herbolario Spa La Tejita il team è il cuore del nostro successo. Professionisti appassionati, dedicati al tuo benessere e alla tua soddisfazione.",
    hero_cta: "Vedi Trattamenti",
    hero_team: "Conosci il team",
    services_kicker: "02 — Servizi",
    services_title: "Rituali pensati per il tuo equilibrio.",
    services_lead:
      "Ogni trattamento è realizzato con tecnica, prodotti selezionati e l'attenzione umana che ci contraddistingue.",
    s1_title: "Massaggi Rilassanti",
    s1_price: "da 60€",
    s1_desc: "Sciogli le tensioni con tecniche professionali in un ambiente di calma assoluta.",
    s2_title: "Pedicure Spa",
    s2_price: "su richiesta",
    s2_desc: "Rituale completo per i piedi con bagno alle erbe ed esfoliazione naturale.",
    s3_title: "Manicure Russa",
    s3_price: "da 37€",
    s3_desc: "Finitura impeccabile e duratura con la tecnica russa di massima precisione.",
    s4_title: "Trattamenti Viso",
    s4_price: "su richiesta",
    s4_desc: "Rituali che restituiscono luminosità, equilibrio e morbidezza al viso.",
    shop_kicker: "03 — Shop",
    shop_title: "Prodotti naturali dalle Isole.",
    shop_lead: "Una selezione di prodotti canari realizzati nel rispetto della terra.",
    shop_cta: "Acquista",
    p1: "Gel Puro di Aloe Vera di Tenerife (250ml)",
    p2: "Capsule di Moringa Canaria Bio",
    p3: "Olio Essenziale di Lavanda e Calendula",
    p4: "Miele di Fiori dell'Isola con Pappa Reale",
    team_kicker: "04 — Team",
    team_title: "Mani esperte, attenzione personale.",
    role_gloria: "Esperta di bellezza e unghie",
    role_roberto: "Terapista Professionale",
    role_irina: "Master in unghie e bellezza",
    gallery_kicker: "05 — Galleria",
    gallery_title: "Risultati che parlano da soli.",
    gallery_lead: "Un assaggio del nostro lavoro in manicure, trattamenti viso e trattamenti corpo.",
    contact_kicker: "06 — Contatti",
    contact_title: "Prenota la tua prossima visita.",
    contact_lead: "Ti aspettiamo nel cuore di La Tejita per disegnare insieme il tuo rituale di benessere.",
    addr_label: "Indirizzo",
    phone_label: "Telefono",
    hours_label: "Orari",
    hours_value: "Lun – Ven: 10:00 – 19:00\nSabato: 10:00 – 15:00\nDomenica: chiuso",
    ai_note:
      "Trasparenza: questo sito è stato progettato e sviluppato con l'assistenza dell'intelligenza artificiale.",
    rights: "Tutti i diritti riservati.",
  },
  DE: {
    nav_services: "Leistungen",
    nav_shop: "Shop",
    nav_team: "Team",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",
    book: "Buchen",
    book_full: "Termin buchen",
    hero_eyebrow: "Wellness & Schönheit — Teneriffa",
    hero_title: "Dein natürliches Wohlbefinden in La Tejita.",
    hero_sub:
      "Im Herbolario Spa La Tejita ist unser Team das Herzstück. Eine Gruppe leidenschaftlicher Profis, die sich deinem Wohl und deiner Zufriedenheit widmen.",
    hero_cta: "Behandlungen ansehen",
    hero_team: "Lerne das Team kennen",
    services_kicker: "02 — Leistungen",
    services_title: "Rituale für dein Gleichgewicht.",
    services_lead:
      "Jede Behandlung wird mit Technik, ausgewählten Produkten und der persönlichen Aufmerksamkeit gestaltet, die unser Haus auszeichnet.",
    s1_title: "Entspannungsmassagen",
    s1_price: "ab 60€",
    s1_desc: "Spannungen lösen mit professionellen Techniken in absoluter Ruhe.",
    s2_title: "Spa-Pediküre",
    s2_price: "auf Anfrage",
    s2_desc: "Komplettes Fußpflege-Ritual mit Kräuterbad und natürlichem Peeling.",
    s3_title: "Russische Maniküre",
    s3_price: "ab 37€",
    s3_desc: "Makelloses, langanhaltendes Finish mit der präzisen russischen Technik.",
    s4_title: "Gesichtsbehandlungen",
    s4_price: "auf Anfrage",
    s4_desc: "Rituale, die deinem Gesicht Strahlkraft, Balance und Geschmeidigkeit zurückgeben.",
    shop_kicker: "03 — Shop",
    shop_title: "Naturprodukte von den Inseln.",
    shop_lead: "Eine Auswahl kanarischer Produkte, mit Respekt vor der Erde hergestellt.",
    shop_cta: "Kaufen",
    p1: "Reines Aloe Vera Gel aus Teneriffa (250ml)",
    p2: "Bio Kanarische Moringa Kapseln",
    p3: "Ätherisches Öl Lavendel & Ringelblume",
    p4: "Inselblütenhonig mit Gelée Royale",
    team_kicker: "04 — Team",
    team_title: "Expertenhände, persönliche Betreuung.",
    role_gloria: "Expertin für Schönheit & Nägel",
    role_roberto: "Professioneller Therapeut",
    role_irina: "Master in Nägeln & Schönheit",
    gallery_kicker: "05 — Galerie",
    gallery_title: "Ergebnisse, die für sich sprechen.",
    gallery_lead: "Ein Einblick in unsere Arbeit bei Maniküre, Gesichts- und Körperbehandlungen.",
    contact_kicker: "06 — Kontakt",
    contact_title: "Buche deinen nächsten Besuch.",
    contact_lead: "Wir erwarten dich im Herzen von La Tejita, um gemeinsam dein Wellness-Ritual zu gestalten.",
    addr_label: "Adresse",
    phone_label: "Telefon",
    hours_label: "Öffnungszeiten",
    hours_value: "Mo – Fr: 10:00 – 19:00\nSamstag: 10:00 – 15:00\nSonntag: geschlossen",
    ai_note:
      "Transparenz: Diese Website wurde mit Unterstützung künstlicher Intelligenz gestaltet und entwickelt.",
    rights: "Alle Rechte vorbehalten.",
  },
};

const LANGS: Lang[] = ["ES", "EN", "IT", "DE"];

const products = [
  { img: productAloe, key: "p1", price: "19,00€" },
  { img: productMoringa, key: "p2", price: "24,50€" },
  { img: productOil, key: "p3", price: "15,00€" },
  { img: productHoney, key: "p4", price: "12,00€" },
];

const services = [
  { icon: Hand, key: "s1" },
  { icon: Footprints, key: "s2" },
  { icon: Sparkles, key: "s3" },
  { icon: Flower2, key: "s4" },
];

const team = [
  { name: "Gloria", roleKey: "role_gloria", initials: "GL", icon: Sparkles, specialty: "Nails & Beauty" },
  { name: "Roberto", roleKey: "role_roberto", initials: "RB", icon: Hand, specialty: "Therapy" },
  { name: "Irina", roleKey: "role_irina", initials: "IR", icon: Flower2, specialty: "Aesthetics" },
];



const NAV_ITEMS: Array<[string, string]> = [
  ["nav_services", "#servicios"],
  ["nav_shop", "#tienda"],
  ["nav_team", "#equipo"],
  ["nav_gallery", "#portafolio"],
  ["nav_reviews", "#opiniones"],
  ["nav_contact", "#contacto"],
];

// Translation overrides + additions for portfolio & reviews sections.
const TX: Record<Lang, Record<string, string>> = {
  ES: {
    nav_reviews: "Opiniones",
    // Hero rediseñado — dual journey
    hero_eyebrow: "Spa & Tienda Natural — Tenerife",
    hero_title: "Bienestar y productos naturales en La Tejita.",
    hero_sub:
      "Centro de masajes, faciales y manicura en Tenerife — y tienda de cosmética bio, aromaterapia y suplementos naturales de Canarias.",
    cta_book: "Reservar tratamiento",
    cta_shop: "Comprar productos naturales",
    // Split journey
    journey_kicker: "Dos caminos, una casa",
    journey_title: "Elige tu experiencia.",
    svc_card_tag: "Spa",
    svc_card_title: "Servicios de bienestar",
    svc_card_desc: "Tratamientos manuales en nuestro centro de La Tejita, con reserva online.",
    svc_b1: "Masajes, faciales, manicura rusa y pedicura spa",
    svc_b2: "Equipo experto y atmósfera de calma",
    svc_b3: "Reserva 24/7 en Fresha",
    svc_card_cta: "Reservar tratamiento",
    shop_card_tag: "Tienda",
    shop_card_title: "Productos naturales",
    shop_card_desc: "Cosmética bio, aromaterapia y suplementos elaborados en Canarias.",
    shop_b1: "Vitaminas y suplementos naturales",
    shop_b2: "Aromaterapia y cosmética bio",
    shop_b3: "Envío a toda Canarias sin aduanas",
    shop_card_cta: "Ver productos",
    // Service durations & outcomes
    s1_dur: "60 / 90 min",
    s2_dur: "50 min",
    s3_dur: "75 min",
    s4_dur: "60 min",
    s_book: "Reservar",
    s_includes: "Incluye",
    s1_out: "Alivio de tensión muscular y descanso profundo.",
    s2_out: "Pies suaves, hidratados y cuidados al detalle.",
    s3_out: "Manicura impecable con duración de hasta 4 semanas.",
    s4_out: "Piel luminosa, equilibrada y revitalizada.",
    // Shop trust & shipping
    trust1: "100% productos naturales",
    trust2: "Origen Canarias",
    trust3: "Envío sin aduanas",
    trust4: "Atención local en Tenerife",
    shop_shipping: "Envío gratuito en Tenerife desde 40€ · Resto de Canarias 24–72h · Recogida en tienda",
    shop_add: "Añadir",
    portfolio_kicker: "05 — Portafolio",
    portfolio_title: "Trabajos reales del equipo.",
    portfolio_lead:
      "Una selección curada de manicura artística, faciales y rituales corporales realizados en nuestro centro.",
    portfolio_book: "Reservar este servicio",
    portfolio_more: "Ver galería completa de Irina",
    irina_title: "Uñas por Irina — Manicura artística",
    irina_desc:
      "Diseños geométricos, manicura rusa de precisión y pedicura spa. Una muestra del trabajo de Irina, Master en uñas y belleza.",
    work_manicure: "Manicura Rusa",
    work_pedicure: "Pedicura Spa",
    work_facial: "Ritual Facial",
    work_massage: "Masaje Relajante",
    work_nail_art: "Nail Art Geométrico",
    work_treatment: "Tratamiento Corporal",
    reviews_kicker: "06 — Opiniones",
    reviews_title: "Lo que dicen nuestros clientes.",
    reviews_count: "Basado en 62 valoraciones verificadas",
    reviews_all: "Ver todas las opiniones",
    contact_kicker: "07 — Contacto",
  },
  EN: {
    nav_reviews: "Reviews",
    hero_eyebrow: "Spa & Natural Shop — Tenerife",
    hero_title: "Wellness and natural products in La Tejita.",
    hero_sub:
      "Massages, facials and manicures in Tenerife — plus a curated shop of bio cosmetics, aromatherapy and natural supplements from the Canary Islands.",
    cta_book: "Book treatments",
    cta_shop: "Shop natural products",
    journey_kicker: "Two paths, one house",
    journey_title: "Choose your experience.",
    svc_card_tag: "Spa",
    svc_card_title: "Wellness services",
    svc_card_desc: "Hands-on treatments in our La Tejita centre, with online booking.",
    svc_b1: "Massages, facials, Russian manicure and spa pedicure",
    svc_b2: "Expert team and calm atmosphere",
    svc_b3: "24/7 booking on Fresha",
    svc_card_cta: "Book treatments",
    shop_card_tag: "Shop",
    shop_card_title: "Natural products",
    shop_card_desc: "Bio cosmetics, aromatherapy and supplements crafted in the Canary Islands.",
    shop_b1: "Vitamins and natural supplements",
    shop_b2: "Aromatherapy and bio cosmetics",
    shop_b3: "Shipping across the Canaries, no customs",
    shop_card_cta: "Browse products",
    s1_dur: "60 / 90 min",
    s2_dur: "50 min",
    s3_dur: "75 min",
    s4_dur: "60 min",
    s_book: "Book",
    s_includes: "Includes",
    s1_out: "Muscle tension release and deep rest.",
    s2_out: "Soft, hydrated, carefully treated feet.",
    s3_out: "Flawless manicure that lasts up to 4 weeks.",
    s4_out: "Radiant, balanced and revitalised skin.",
    trust1: "100% natural products",
    trust2: "Made in the Canaries",
    trust3: "No customs charges",
    trust4: "Local support in Tenerife",
    shop_shipping: "Free delivery in Tenerife over €40 · Rest of the Canaries 24–72h · In-store pickup",
    shop_add: "Add",
    portfolio_kicker: "05 — Portfolio",
    portfolio_title: "Real work by our team.",
    portfolio_lead:
      "A curated selection of artistic manicure, facials and body rituals performed at our centre.",
    portfolio_book: "Book this service",
    portfolio_more: "View Irina's full gallery",
    irina_title: "Nails by Irina — Artistic manicure",
    irina_desc:
      "Geometric designs, precision Russian manicure and spa pedicure. A glimpse of Irina's work, Master in nails & beauty.",
    work_manicure: "Russian Manicure",
    work_pedicure: "Spa Pedicure",
    work_facial: "Facial Ritual",
    work_massage: "Relaxing Massage",
    work_nail_art: "Geometric Nail Art",
    work_treatment: "Body Treatment",
    reviews_kicker: "06 — Reviews",
    reviews_title: "What our clients say.",
    reviews_count: "Based on 62 verified reviews",
    reviews_all: "See all reviews",
    contact_kicker: "07 — Contact",
  },
  IT: {
    nav_reviews: "Recensioni",
    hero_eyebrow: "Spa & Shop Naturale — Tenerife",
    hero_title: "Benessere e prodotti naturali a La Tejita.",
    hero_sub:
      "Centro di massaggi, trattamenti viso e manicure a Tenerife — e shop di cosmetica bio, aromaterapia e integratori naturali delle Canarie.",
    cta_book: "Prenota trattamenti",
    cta_shop: "Acquista prodotti naturali",
    journey_kicker: "Due percorsi, una casa",
    journey_title: "Scegli la tua esperienza.",
    svc_card_tag: "Spa",
    svc_card_title: "Servizi benessere",
    svc_card_desc: "Trattamenti manuali nel nostro centro di La Tejita, con prenotazione online.",
    svc_b1: "Massaggi, viso, manicure russa e pedicure spa",
    svc_b2: "Team esperto e atmosfera di calma",
    svc_b3: "Prenotazione 24/7 su Fresha",
    svc_card_cta: "Prenota trattamenti",
    shop_card_tag: "Shop",
    shop_card_title: "Prodotti naturali",
    shop_card_desc: "Cosmetica bio, aromaterapia e integratori realizzati nelle Canarie.",
    shop_b1: "Vitamine e integratori naturali",
    shop_b2: "Aromaterapia e cosmetica bio",
    shop_b3: "Spedizione in tutte le Canarie senza dogana",
    shop_card_cta: "Vedi prodotti",
    s1_dur: "60 / 90 min",
    s2_dur: "50 min",
    s3_dur: "75 min",
    s4_dur: "60 min",
    s_book: "Prenota",
    s_includes: "Include",
    s1_out: "Sollievo dalle tensioni muscolari e riposo profondo.",
    s2_out: "Piedi morbidi, idratati e curati nei dettagli.",
    s3_out: "Manicure impeccabile fino a 4 settimane.",
    s4_out: "Pelle luminosa, equilibrata e rivitalizzata.",
    trust1: "100% prodotti naturali",
    trust2: "Origine Canarie",
    trust3: "Senza dogana",
    trust4: "Supporto locale a Tenerife",
    shop_shipping: "Spedizione gratuita a Tenerife da 40€ · Resto delle Canarie 24–72h · Ritiro in negozio",
    shop_add: "Aggiungi",
    portfolio_kicker: "05 — Portfolio",
    portfolio_title: "Lavori reali del nostro team.",
    portfolio_lead:
      "Una selezione curata di manicure artistica, trattamenti viso e rituali corpo realizzati nel nostro centro.",
    portfolio_book: "Prenota questo servizio",
    portfolio_more: "Vedi la galleria completa di Irina",
    irina_title: "Unghie di Irina — Manicure artistica",
    irina_desc:
      "Design geometrici, manicure russa di precisione e pedicure spa. Un assaggio del lavoro di Irina, Master in unghie e bellezza.",
    work_manicure: "Manicure Russa",
    work_pedicure: "Pedicure Spa",
    work_facial: "Rituale Viso",
    work_massage: "Massaggio Rilassante",
    work_nail_art: "Nail Art Geometrico",
    work_treatment: "Trattamento Corpo",
    reviews_kicker: "06 — Recensioni",
    reviews_title: "Cosa dicono i nostri clienti.",
    reviews_count: "Basato su 62 recensioni verificate",
    reviews_all: "Vedi tutte le recensioni",
    contact_kicker: "07 — Contatti",
  },
  DE: {
    nav_reviews: "Bewertungen",
    hero_eyebrow: "Spa & Naturshop — Teneriffa",
    hero_title: "Wohlbefinden und Naturprodukte in La Tejita.",
    hero_sub:
      "Massagen, Gesichtsbehandlungen und Maniküre auf Teneriffa — und ein Shop für Bio-Kosmetik, Aromatherapie und natürliche Nahrungsergänzung von den Kanaren.",
    cta_book: "Behandlung buchen",
    cta_shop: "Naturprodukte kaufen",
    journey_kicker: "Zwei Wege, ein Haus",
    journey_title: "Wähle dein Erlebnis.",
    svc_card_tag: "Spa",
    svc_card_title: "Wellness-Leistungen",
    svc_card_desc: "Manuelle Behandlungen in unserem Studio in La Tejita, mit Online-Buchung.",
    svc_b1: "Massagen, Gesichtsbehandlungen, russische Maniküre und Spa-Pediküre",
    svc_b2: "Expertenteam und ruhige Atmosphäre",
    svc_b3: "24/7 Buchung über Fresha",
    svc_card_cta: "Behandlung buchen",
    shop_card_tag: "Shop",
    shop_card_title: "Naturprodukte",
    shop_card_desc: "Bio-Kosmetik, Aromatherapie und Nahrungsergänzung von den Kanaren.",
    shop_b1: "Vitamine und natürliche Nahrungsergänzung",
    shop_b2: "Aromatherapie und Bio-Kosmetik",
    shop_b3: "Versand auf allen Kanaren, ohne Zoll",
    shop_card_cta: "Produkte ansehen",
    s1_dur: "60 / 90 Min",
    s2_dur: "50 Min",
    s3_dur: "75 Min",
    s4_dur: "60 Min",
    s_book: "Buchen",
    s_includes: "Inklusive",
    s1_out: "Lösung muskulärer Spannungen und tiefe Erholung.",
    s2_out: "Weiche, gepflegte und mit Liebe behandelte Füße.",
    s3_out: "Makellose Maniküre, bis zu 4 Wochen haltbar.",
    s4_out: "Strahlende, ausgeglichene und revitalisierte Haut.",
    trust1: "100% Naturprodukte",
    trust2: "Aus den Kanaren",
    trust3: "Keine Zollgebühren",
    trust4: "Lokaler Support auf Teneriffa",
    shop_shipping: "Kostenloser Versand auf Teneriffa ab 40€ · Restliche Kanaren 24–72h · Abholung im Shop",
    shop_add: "Hinzufügen",
    portfolio_kicker: "05 — Portfolio",
    portfolio_title: "Echte Arbeiten unseres Teams.",
    portfolio_lead:
      "Eine kuratierte Auswahl künstlerischer Maniküren, Gesichtsbehandlungen und Körperrituale aus unserem Studio.",
    portfolio_book: "Diesen Service buchen",
    portfolio_more: "Vollständige Galerie von Irina",
    irina_title: "Nägel von Irina — Künstlerische Maniküre",
    irina_desc:
      "Geometrische Designs, präzise russische Maniküre und Spa-Pediküre. Ein Einblick in Irinas Arbeit, Master in Nägeln & Schönheit.",
    work_manicure: "Russische Maniküre",
    work_pedicure: "Spa-Pediküre",
    work_facial: "Gesichtsritual",
    work_massage: "Entspannungsmassage",
    work_nail_art: "Geometrisches Nail Art",
    work_treatment: "Körperbehandlung",
    reviews_kicker: "06 — Bewertungen",
    reviews_title: "Was unsere Kunden sagen.",
    reviews_count: "Basierend auf 62 verifizierten Bewertungen",
    reviews_all: "Alle Bewertungen ansehen",
    contact_kicker: "07 — Kontakt",
  },
};

const portfolio: Array<{ img: string; workKey: string }> = [
  { img: gallery1, workKey: "work_manicure" },
  { img: gallery2, workKey: "work_facial" },
  { img: gallery3, workKey: "work_pedicure" },
  { img: gallery4, workKey: "work_nail_art" },
  { img: gallery5, workKey: "work_massage" },
  { img: gallery6, workKey: "work_treatment" },
];

const irinaWorks = [nail1, nail2, nail4, nail3];

// Real public reviews (Fresha / Google) — kept verbatim per source language.
const reviews = [
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

function Index() {
  const [lang, setLang] = useState<Lang>("ES");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [irinaOpen, setIrinaOpen] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const langRef = useRef<HTMLDivElement>(null);
  const t = (k: string) => TX[lang]?.[k] ?? T[lang][k] ?? k;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-background/90 shadow-[0_1px_0_0_var(--border),0_8px_24px_-16px_rgba(38,70,83,0.18)] backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="text-[13px] font-medium tracking-tight md:text-sm">
              Herbolario Spa <span className="text-muted-foreground">La Tejita</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_ITEMS.map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="text-sm text-foreground/75 transition-colors hover:text-foreground"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language dropdown */}
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[11px] font-medium tracking-widest text-foreground/70 hover:text-foreground"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
                {lang}
                <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
              </button>
              {langOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 mt-2 min-w-[80px] overflow-hidden rounded-md border border-border bg-card shadow-lg"
                >
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-[11px] font-medium tracking-widest transition-colors ${
                        lang === l
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex md:px-4 md:py-2.5 md:text-sm"
            >
              <span className="hidden md:inline">{t("book_full")}</span>
              <span className="md:hidden">{t("book")}</span>
              <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={1.5} />
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-secondary lg:hidden"
              aria-label="Menú"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6">
            {NAV_ITEMS.map(([key, href]) => (
              <a
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base text-foreground/85 hover:bg-secondary"
              >
                {t(key)}
              </a>
            ))}
            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground sm:hidden"
            >
              {t("book_full")}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-24 md:pt-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t("hero_eyebrow")}
            </div>
            <h1 className="text-balance text-[2.25rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.05] lg:text-[4.25rem]">
              {t("hero_title")}
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-muted-foreground md:text-lg md:leading-relaxed">
              {t("hero_sub")}
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <a
                href={FRESHA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
                {t("cta_book")}
              </a>
              <a
                href="#tienda"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary sm:w-auto"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                {t("cta_shop")}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="Composición geométrica con piedras y hojas que evoca la calma del spa"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Journeys Split */}
      <section id="caminos" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              01 — {t("journey_kicker")}
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              {t("journey_title")}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {/* Services panel */}
            <a
              href="#servicios"
              className="group relative flex flex-col gap-6 overflow-hidden rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  {t("svc_card_tag")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.4} />
              </div>
              <div>
                <h3 className="text-2xl leading-tight md:text-3xl">{t("svc_card_title")}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {t("svc_card_desc")}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {["svc_b1", "svc_b2", "svc_b3"].map((k) => (
                  <li key={k} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                {t("svc_card_cta")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </a>

            {/* Shop panel */}
            <a
              href="#tienda"
              className="group relative flex flex-col gap-6 overflow-hidden rounded-lg bg-[oklch(0.95_0.012_85)] p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md bg-card px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  <Leaf className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  {t("shop_card_tag")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.4} />
              </div>
              <div>
                <h3 className="text-2xl leading-tight md:text-3xl">{t("shop_card_title")}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {t("shop_card_desc")}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {["shop_b1", "shop_b2", "shop_b3"].map((k) => (
                  <li key={k} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground">
                {t("shop_card_cta")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("services_kicker")}
              </div>
              <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
                {t("services_title")}
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground md:col-span-5">
              {t("services_lead")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, key }, i) => (
              <article
                key={key}
                className="group flex flex-col gap-5 rounded-lg bg-card p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl">{t(`${key}_title`)}</h3>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <span className="text-accent">{t(`${key}_price`)}</span>
                    <span className="text-border">·</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
                      {t(`${key}_dur`)}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`${key}_desc`)}</p>
                <p className="-mt-1 text-sm leading-relaxed text-foreground/85">{t(`${key}_out`)}</p>
                <a
                  href={FRESHA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {t("s_book")}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="tienda">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("shop_kicker")}
              </div>
              <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
                {t("shop_title")}
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground md:col-span-5">
              {t("shop_lead")}
            </p>
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-4 sm:gap-4 sm:p-5">
            {[
              { icon: Leaf, key: "trust1" },
              { icon: MapPin, key: "trust2" },
              { icon: ShieldCheck, key: "trust3" },
              { icon: Phone, key: "trust4" },
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-center gap-2.5 text-xs text-foreground/80 sm:text-sm">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="leading-snug">{t(key)}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.key}
                className="group flex flex-col overflow-hidden rounded-lg bg-card transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={t(p.key)}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/80 backdrop-blur">
                    <Leaf className="h-3 w-3 text-accent" strokeWidth={1.8} />
                    Bio
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-base leading-snug">{t(p.key)}</h3>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                    <Package className="h-3 w-3" strokeWidth={1.8} />
                    {t("trust2")}
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                    <span className="font-display text-2xl text-foreground">{p.price}</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-[11px] font-medium uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
                      {t("shop_add")}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Shipping note */}
          <div className="mt-8 flex items-start gap-3 rounded-lg bg-secondary/60 p-5 text-sm leading-relaxed text-foreground/80">
            <Truck className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
            <p>{t("shop_shipping")}</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t("team_kicker")}
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              {t("team_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {team.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.name} className="flex flex-col rounded-lg bg-card p-6">
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-md bg-secondary">
                    {/* Cohesive coral tint overlay so all portraits feel unified */}
                    <div className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.68_0.16_35/0.10),oklch(0.34_0.04_220/0.06))]" />
                    <span className="relative font-display text-7xl text-primary/85">{m.initials}</span>
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl">{m.name}</h3>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                        <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                        {m.specialty}
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{t(m.roleKey)}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portafolio">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t("portfolio_kicker")}
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              {t("portfolio_title")}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {t("portfolio_lead")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((w, i) => (
              <article
                key={i}
                className="group flex flex-col overflow-hidden rounded-lg bg-card transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(38,70,83,0.18)]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={w.img}
                    alt={t(w.workKey)}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t(w.workKey)}
                  </span>
                  <a
                    href={FRESHA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[11px] font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    {t("portfolio_book")}
                    <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Irina featured */}
          <div className="mt-12 overflow-hidden rounded-lg bg-secondary/60">
            <div className="grid gap-0 md:grid-cols-12">
              <div className="grid grid-cols-2 gap-1 bg-background p-1 md:col-span-7">
                {irinaWorks.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIrinaOpen(true)}
                    className="group relative aspect-square overflow-hidden rounded-md bg-card"
                    aria-label={t("portfolio_more")}
                  >
                    <img
                      src={src}
                      alt={`${t("irina_title")} — ${i + 1}`}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </button>
                ))}
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:col-span-5 md:p-12">
                <div className="inline-flex items-center gap-2 self-start rounded-md bg-card px-2.5 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  <Flower2 className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  Irina
                </div>
                <h3 className="text-2xl leading-tight md:text-3xl">{t("irina_title")}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t("irina_desc")}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setIrinaOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {t("portfolio_more")}
                  </button>
                  <a
                    href={FRESHA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
                  >
                    {t("portfolio_book")}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="opiniones" className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t("reviews_kicker")}
            </div>
            <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl md:leading-[1.1]">
              {t("reviews_title")}
            </h2>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-6xl text-foreground md:text-7xl">5.0</span>
              <span className="text-base text-muted-foreground">/ 5</span>
            </div>
            <div className="mt-3 flex items-center gap-1" aria-label="5 de 5 estrellas">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t("reviews_count")}</p>
          </div>

          {/* Carousel */}
          <div className="mt-14 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${reviewIdx * 100}%)` }}
            >
              {reviews.map((r, i) => (
                <div key={i} className="w-full shrink-0 px-1 md:px-3">
                  <article className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-lg bg-background p-8 text-center md:p-12">
                    <Quote className="h-6 w-6 text-accent" strokeWidth={1.4} />
                    <p className="text-balance text-lg leading-relaxed text-foreground md:text-xl">
                      "{r.text}"
                    </p>
                    <div className="flex items-center gap-1" aria-label={`${r.rating} estrellas`}>
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-foreground">{r.name}</span>
                      <span className="mx-2 text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{r.date}</span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setReviewIdx((s) => Math.max(0, s - 1))}
                disabled={reviewIdx === 0}
                aria-label="Anterior"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <div className="flex items-center gap-1.5 px-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewIdx(i)}
                    aria-label={`Reseña ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      reviewIdx === i ? "w-6 bg-accent" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setReviewIdx((s) => Math.min(reviews.length - 1, s + 1))}
                disabled={reviewIdx === reviews.length - 1}
                aria-label="Siguiente"
                className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              {t("reviews_all")}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* Irina modal */}
      <Dialog open={irinaOpen} onOpenChange={setIrinaOpen}>
        <DialogContent className="max-w-4xl border-border bg-background p-0 sm:rounded-lg">
          <DialogHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
            <DialogTitle className="font-display text-2xl font-normal text-foreground">
              {t("irina_title")}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {t("irina_desc")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-2 p-4 sm:p-6 md:grid-cols-4">
            {irinaWorks.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-md bg-secondary">
                <img
                  src={src}
                  alt={`${t("irina_title")} — ${i + 1}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-border px-6 py-5 sm:px-8">
            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              {t("portfolio_book")}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer / Contact */}
      <footer id="contacto" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60">
                {t("contact_kicker")}
              </div>
              <h2 className="text-[2rem] leading-[1.2] text-primary-foreground sm:text-4xl md:text-5xl md:leading-[1.1]">
                {t("contact_title")}
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-primary-foreground/75">
                {t("contact_lead")}
              </p>
              <a
                href={FRESHA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                {t("book_full")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              <div>
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 text-base text-primary-foreground">{t("addr_label")}</h3>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm leading-relaxed text-primary-foreground/75 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  C. Hernán Cortés, 2, Local 28<br />
                  C.C. La Tejita Street Market<br />
                  Santa Cruz de Tenerife
                </a>
              </div>
              <div>
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 text-base text-primary-foreground">{t("phone_label")}</h3>
                <a
                  href="tel:+34641948530"
                  className="mt-3 block text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  +34 641 94 85 30
                </a>
              </div>
              <div>
                <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 text-base text-primary-foreground">{t("hours_label")}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-primary-foreground/75">
                  {t("hours_value")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-start gap-3 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60">
            <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.4} />
            <p className="max-w-3xl leading-relaxed">{t("ai_note")}</p>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-primary-foreground/55 sm:flex-row sm:items-center">
            <span>
              © {new Date().getFullYear()} Herbolario Spa La Tejita. {t("rights")}
            </span>
            <span className="uppercase tracking-[0.18em]">Tenerife · Islas Canarias</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
