import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";
import productAloe from "@/assets/product-aloe.jpg";
import productMoringa from "@/assets/product-moringa.jpg";
import productOil from "@/assets/product-oil.jpg";
import productHoney from "@/assets/product-honey.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

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
    book: "Reservar Cita",
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
    book: "Book Now",
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
    book: "Termin buchen",
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
  { name: "Gloria", roleKey: "role_gloria", initials: "GL" },
  { name: "Roberto", roleKey: "role_roberto", initials: "RB" },
  { name: "Irina", roleKey: "role_irina", initials: "IR" },
];

const galleryImgs = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

function Index() {
  const [lang, setLang] = useState<Lang>("ES");
  const [slide, setSlide] = useState(0);
  const t = (k: string) => T[lang][k] ?? k;

  const visibleSlides = 3;
  const maxSlide = Math.max(0, galleryImgs.length - visibleSlides);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="text-sm font-medium tracking-tight">
              Herbolario Spa <span className="text-muted-foreground">La Tejita</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ["nav_services", "#servicios"],
              ["nav_shop", "#tienda"],
              ["nav_team", "#equipo"],
              ["nav_gallery", "#galeria"],
              ["nav_contact", "#contacto"],
            ].map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center divide-x divide-border border border-border sm:flex">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-label={`Idioma ${l}`}
                  className={`px-2.5 py-1.5 text-[11px] font-medium tracking-widest transition-colors ${
                    lang === l
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href={FRESHA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("book")}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Mobile language selector */}
        <div className="flex items-center justify-center gap-2 border-t border-border py-2 sm:hidden">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`border border-border px-2.5 py-1 text-[11px] font-medium tracking-widest ${
                lang === l ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-3 border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 bg-accent" />
              {t("hero_eyebrow")}
            </div>
            <h1 className="text-balance text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              {t("hero_title")}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero_sub")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("hero_cta")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#equipo"
                className="text-sm font-medium underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                {t("hero_team")}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
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

      {/* Services */}
      <section id="servicios" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("services_kicker")}
              </div>
              <h2 className="text-4xl md:text-5xl">{t("services_title")}</h2>
            </div>
            <p className="text-muted-foreground md:col-span-5">{t("services_lead")}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 border border-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, key }, i) => (
              <article
                key={key}
                className={`group relative flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-secondary ${
                  i < services.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:border-border" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-border bg-background">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl">{t(`${key}_title`)}</h3>
                  <div className="mt-2 text-sm text-accent-foreground/80">{t(`${key}_price`)}</div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`${key}_desc`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="tienda" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("shop_kicker")}
              </div>
              <h2 className="text-4xl md:text-5xl">{t("shop_title")}</h2>
            </div>
            <p className="text-muted-foreground md:col-span-5">{t("shop_lead")}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.key}
                className="group flex flex-col border border-border bg-background"
              >
                <div className="aspect-square overflow-hidden border-b border-border bg-secondary">
                  <img
                    src={p.img}
                    alt={t(p.key)}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-base leading-snug">{t(p.key)}</h3>
                  <div className="mt-auto flex items-end justify-between gap-4">
                    <span className="font-display text-2xl">{p.price}</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
                      {t("shop_cta")}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("team_kicker")}
            </div>
            <h2 className="text-4xl md:text-5xl">{t("team_title")}</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col bg-background p-8">
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-secondary">
                  <span className="font-display text-7xl text-primary/80">{m.initials}</span>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t(m.roleKey)}</p>
                  </div>
                  <span className="h-2 w-2 bg-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("gallery_kicker")}
              </div>
              <h2 className="text-4xl md:text-5xl">{t("gallery_title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("gallery_lead")}</p>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                disabled={slide === 0}
                aria-label="Anterior"
                className="grid h-10 w-10 place-items-center border border-border bg-background hover:bg-foreground hover:text-background disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                disabled={slide === maxSlide}
                aria-label="Siguiente"
                className="grid h-10 w-10 place-items-center border border-border bg-background hover:bg-foreground hover:text-background disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Desktop carousel */}
          <div className="mt-12 hidden overflow-hidden md:block">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${slide} * (100% / 3 + 8px)))` }}
            >
              {galleryImgs.map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 pr-2"
                  style={{ width: "calc(100% / 3)" }}
                >
                  <div className="aspect-[4/5] overflow-hidden border border-border bg-background">
                    <img
                      src={src}
                      alt={`Trabajo ${i + 1}`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
            {galleryImgs.map((src, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden border border-border bg-background">
                <img
                  src={src}
                  alt={`Trabajo ${i + 1}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                {t("contact_kicker")}
              </div>
              <h2 className="text-4xl text-primary-foreground md:text-5xl">{t("contact_title")}</h2>
              <p className="mt-6 max-w-md text-primary-foreground/70">{t("contact_lead")}</p>
              <a
                href={FRESHA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                {t("book")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              <div>
                <MapPin className="h-5 w-5" strokeWidth={1.4} />
                <h3 className="mt-4 text-base text-primary-foreground">{t("addr_label")}</h3>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm leading-relaxed text-primary-foreground/70 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  C. Hernán Cortés, 2, Local 28<br />
                  C.C. La Tejita Street Market<br />
                  Santa Cruz de Tenerife
                </a>
              </div>
              <div>
                <Phone className="h-5 w-5" strokeWidth={1.4} />
                <h3 className="mt-4 text-base text-primary-foreground">{t("phone_label")}</h3>
                <a
                  href="tel:+34641948530"
                  className="mt-3 block text-sm text-primary-foreground/70 hover:text-primary-foreground"
                >
                  +34 641 94 85 30
                </a>
              </div>
              <div>
                <Clock className="h-5 w-5" strokeWidth={1.4} />
                <h3 className="mt-4 text-base text-primary-foreground">{t("hours_label")}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-primary-foreground/70">
                  {t("hours_value")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-start gap-3 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60">
            <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.4} />
            <p className="max-w-3xl leading-relaxed">{t("ai_note")}</p>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
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
