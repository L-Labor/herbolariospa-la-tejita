import type { Lang } from "./types";

export type Dict = {
  nav: {
    home: string;
    treatments: string;
    shop: string;
    about: string;
    blog: string;
    contact: string;
  };
  cta: {
    book: string;
    bookShort: string;
    shop: string;
    bookTreatment: string;
    whatsapp: string;
    seeAll: string;
    seeTreatments: string;
    seeShop: string;
    contact: string;
  };
  cart: {
    title: string;
    empty: string;
    keepShopping: string;
    subtotal: string;
    viewCart: string;
    checkout: string;
    addToCart: string;
    added: string;
    qty: string;
    remove: string;
    items_one: string;
    items_other: string;
    yourCart: string;
    orderViaWa: string;
    clear: string;
  };
  shop: {
    title: string;
    intro: string;
    filters: string;
    bestsellers: string;
    bestsellersTitle: string;
    bestsellersIntro: string;
    bio: string;
    canarias: string;
    bestseller: string;
    new: string;
    trust1: string;
    trust2: string;
    trust3: string;
    trust4: string;
    noCart: string;
  };
  checkout: {
    title: string;
    intro: string;
    contact: string;
    shipping: string;
    notes: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postal: string;
    island: string;
    notesPh: string;
    submit: string;
    summary: string;
    noPayment: string;
    backToCart: string;
    empty: string;
  };
  footer: {
    contactKicker: string;
    cta: string;
    intro: string;
    address: string;
    phone: string;
    hours: string;
    rights: string;
    region: string;
  };
  common: {
    language: string;
    translationNotice: string;
    backHome: string;
  };
  team: {
    nailsBeauty: string;
    therapy: string;
    beautyTreatments: string;
  };
  reviews: {
    fromGoogle: string;
    seeAll: string;
  };
};

const es: Dict = {
  nav: {
    home: "Inicio",
    treatments: "Tratamientos",
    shop: "Tienda",
    about: "Sobre nosotros",
    blog: "Blog",
    contact: "Contacto",
  },
  cta: {
    book: "Reservar Cita",
    bookShort: "Reservar",
    shop: "Tienda",
    bookTreatment: "Reservar tratamiento",
    whatsapp: "WhatsApp",
    seeAll: "Ver todos",
    seeTreatments: "Ver tratamientos",
    seeShop: "Ir a la tienda",
    contact: "Contacto",
  },
  cart: {
    title: "Tu carrito",
    empty: "Tu carrito está vacío.",
    keepShopping: "Seguir comprando",
    subtotal: "Subtotal",
    viewCart: "Ver carrito",
    checkout: "Pagar",
    addToCart: "Añadir al carrito",
    added: "Añadido",
    qty: "Cantidad",
    remove: "Quitar",
    items_one: "artículo",
    items_other: "artículos",
    yourCart: "Tu carrito",
    orderViaWa: "Pedir por WhatsApp",
    clear: "Vaciar carrito",
  },
  shop: {
    title: "Productos naturales de las Islas.",
    intro:
      "Cosmética natural, productos bio y selección de origen canario. Las compras se gestionan por carrito, WhatsApp o en tienda.",
    filters: "Categorías",
    bestsellers: "Más vendidos",
    bestsellersTitle: "Productos más vendidos esta semana",
    bestsellersIntro:
      "Una selección de los favoritos de nuestros clientes — productos naturales y bio elaborados en Canarias.",
    bio: "BIO",
    canarias: "Origen Canarias",
    bestseller: "Más vendido",
    new: "Nuevo",
    trust1: "100% Natural",
    trust2: "Envío gratis desde 40€ en Tenerife",
    trust3: "Origen Canarias",
    trust4: "Resto de Canarias 24-72h",
    noCart:
      "Sin pago online por el momento: confirmamos tu pedido por WhatsApp tras enviar el carrito.",
  },
  checkout: {
    title: "Finalizar pedido",
    intro:
      "Completa tus datos y enviaremos tu pedido directamente a WhatsApp para confirmar disponibilidad, envío y pago.",
    contact: "Datos de contacto",
    shipping: "Envío",
    notes: "Notas (opcional)",
    name: "Nombre y apellidos",
    email: "Email",
    phone: "Teléfono",
    address: "Dirección",
    city: "Ciudad",
    postal: "Código postal",
    island: "Isla",
    notesPh: "Comentarios sobre tu pedido",
    submit: "Enviar pedido por WhatsApp",
    summary: "Resumen del pedido",
    noPayment:
      "No hay pago online: al enviar, abriremos WhatsApp con el resumen para confirmar todo contigo.",
    backToCart: "Volver al carrito",
    empty: "Tu carrito está vacío. Añade productos antes de finalizar.",
  },
  footer: {
    contactKicker: "Contacto",
    cta: "Reserva tu próxima visita.",
    intro:
      "Te esperamos en el corazón de La Tejita para diseñar juntos tu ritual de bienestar.",
    address: "Dirección",
    phone: "Teléfono",
    hours: "Horario",
    rights: "Todos los derechos reservados.",
    region: "Tenerife · Islas Canarias",
  },
  common: {
    language: "Idioma",
    translationNotice: "",
    backHome: "Volver al inicio",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    treatments: "Treatments",
    shop: "Shop",
    about: "About us",
    blog: "Blog",
    contact: "Contact",
  },
  cta: {
    book: "Book now",
    bookShort: "Book",
    shop: "Shop",
    bookTreatment: "Book a treatment",
    whatsapp: "WhatsApp",
    seeAll: "See all",
    seeTreatments: "See treatments",
    seeShop: "Go to shop",
    contact: "Contact",
  },
  cart: {
    title: "Your cart",
    empty: "Your cart is empty.",
    keepShopping: "Keep shopping",
    subtotal: "Subtotal",
    viewCart: "View cart",
    checkout: "Checkout",
    addToCart: "Add to cart",
    added: "Added",
    qty: "Quantity",
    remove: "Remove",
    items_one: "item",
    items_other: "items",
    yourCart: "Your cart",
    orderViaWa: "Order via WhatsApp",
    clear: "Clear cart",
  },
  shop: {
    title: "Natural products from the Islands.",
    intro:
      "Natural cosmetics, organic products and selected Canary Islands brands. Checkout via cart, WhatsApp or in store.",
    filters: "Categories",
    bestsellers: "Bestsellers",
    bestsellersTitle: "This week's bestsellers",
    bestsellersIntro:
      "A selection of our customers' favourites — natural and organic products made in the Canary Islands.",
    bio: "ORGANIC",
    canarias: "Made in Canarias",
    bestseller: "Bestseller",
    new: "New",
    trust1: "100% Natural",
    trust2: "Free shipping from €40 in Tenerife",
    trust3: "Made in Canarias",
    trust4: "Rest of Canarias 24-72h",
    noCart:
      "No online payment for now: we confirm your order via WhatsApp after you submit the cart.",
  },
  checkout: {
    title: "Complete your order",
    intro:
      "Fill in your details and we'll send the order summary to WhatsApp to confirm stock, shipping and payment.",
    contact: "Contact details",
    shipping: "Shipping",
    notes: "Notes (optional)",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    city: "City",
    postal: "Postal code",
    island: "Island",
    notesPh: "Any comments about your order",
    submit: "Send order via WhatsApp",
    summary: "Order summary",
    noPayment:
      "No online payment: when you submit, WhatsApp opens with the summary so we can confirm everything with you.",
    backToCart: "Back to cart",
    empty: "Your cart is empty. Add products before checking out.",
  },
  footer: {
    contactKicker: "Contact",
    cta: "Book your next visit.",
    intro:
      "Visit us in the heart of La Tejita to design your wellness ritual together.",
    address: "Address",
    phone: "Phone",
    hours: "Hours",
    rights: "All rights reserved.",
    region: "Tenerife · Canary Islands",
  },
  common: {
    language: "Language",
    translationNotice: "Extended editorial content is currently available in Spanish. Shop, treatments and checkout remain fully localized.",
    backHome: "Back to home",
  },
};

const de: Dict = {
  nav: {
    home: "Start",
    treatments: "Behandlungen",
    shop: "Shop",
    about: "Über uns",
    blog: "Blog",
    contact: "Kontakt",
  },
  cta: {
    book: "Termin buchen",
    bookShort: "Buchen",
    shop: "Shop",
    bookTreatment: "Behandlung buchen",
    whatsapp: "WhatsApp",
    seeAll: "Alle ansehen",
    seeTreatments: "Behandlungen ansehen",
    seeShop: "Zum Shop",
    contact: "Kontakt",
  },
  cart: {
    title: "Dein Warenkorb",
    empty: "Dein Warenkorb ist leer.",
    keepShopping: "Weiter einkaufen",
    subtotal: "Zwischensumme",
    viewCart: "Warenkorb ansehen",
    checkout: "Zur Kasse",
    addToCart: "In den Warenkorb",
    added: "Hinzugefügt",
    qty: "Menge",
    remove: "Entfernen",
    items_one: "Artikel",
    items_other: "Artikel",
    yourCart: "Dein Warenkorb",
    orderViaWa: "Per WhatsApp bestellen",
    clear: "Warenkorb leeren",
  },
  shop: {
    title: "Naturprodukte von den Inseln.",
    intro:
      "Naturkosmetik, Bio-Produkte und eine Auswahl kanarischer Marken. Bestellung per Warenkorb, WhatsApp oder im Laden.",
    filters: "Kategorien",
    bestsellers: "Bestseller",
    bestsellersTitle: "Bestseller dieser Woche",
    bestsellersIntro:
      "Eine Auswahl der Lieblingsprodukte unserer Kundinnen und Kunden — natürlich und bio, hergestellt auf den Kanaren.",
    bio: "BIO",
    canarias: "Aus den Kanaren",
    bestseller: "Bestseller",
    new: "Neu",
    trust1: "100% Natürlich",
    trust2: "Gratis Versand ab 40€ auf Teneriffa",
    trust3: "Aus den Kanaren",
    trust4: "Restliche Kanaren 24-72h",
    noCart:
      "Noch keine Online-Zahlung: Wir bestätigen deine Bestellung per WhatsApp nach dem Absenden.",
  },
  checkout: {
    title: "Bestellung abschließen",
    intro:
      "Trag deine Daten ein und wir senden die Zusammenfassung per WhatsApp, um Verfügbarkeit, Versand und Zahlung zu bestätigen.",
    contact: "Kontaktdaten",
    shipping: "Versand",
    notes: "Hinweise (optional)",
    name: "Vor- und Nachname",
    email: "E-Mail",
    phone: "Telefon",
    address: "Adresse",
    city: "Stadt",
    postal: "Postleitzahl",
    island: "Insel",
    notesPh: "Anmerkungen zu deiner Bestellung",
    submit: "Bestellung per WhatsApp senden",
    summary: "Bestellübersicht",
    noPayment:
      "Keine Online-Zahlung: Nach dem Absenden öffnet sich WhatsApp mit der Zusammenfassung.",
    backToCart: "Zurück zum Warenkorb",
    empty: "Dein Warenkorb ist leer. Bitte füge Produkte hinzu.",
  },
  footer: {
    contactKicker: "Kontakt",
    cta: "Buche deinen nächsten Besuch.",
    intro:
      "Wir erwarten dich im Herzen von La Tejita, um dein Wohlfühl-Ritual gemeinsam zu gestalten.",
    address: "Adresse",
    phone: "Telefon",
    hours: "Öffnungszeiten",
    rights: "Alle Rechte vorbehalten.",
    region: "Teneriffa · Kanarische Inseln",
  },
  common: {
    language: "Sprache",
    translationNotice: "Ausführliche redaktionelle Inhalte sind derzeit auf Spanisch verfügbar. Shop, Behandlungen und Kasse sind vollständig lokalisiert.",
    backHome: "Zur Startseite",
  },
};

const it: Dict = {
  nav: {
    home: "Home",
    treatments: "Trattamenti",
    shop: "Shop",
    about: "Chi siamo",
    blog: "Blog",
    contact: "Contatti",
  },
  cta: {
    book: "Prenota ora",
    bookShort: "Prenota",
    shop: "Shop",
    bookTreatment: "Prenota un trattamento",
    whatsapp: "WhatsApp",
    seeAll: "Vedi tutti",
    seeTreatments: "Vedi trattamenti",
    seeShop: "Vai allo shop",
    contact: "Contatti",
  },
  cart: {
    title: "Il tuo carrello",
    empty: "Il tuo carrello è vuoto.",
    keepShopping: "Continua a comprare",
    subtotal: "Subtotale",
    viewCart: "Vedi carrello",
    checkout: "Checkout",
    addToCart: "Aggiungi al carrello",
    added: "Aggiunto",
    qty: "Quantità",
    remove: "Rimuovi",
    items_one: "articolo",
    items_other: "articoli",
    yourCart: "Il tuo carrello",
    orderViaWa: "Ordina via WhatsApp",
    clear: "Svuota carrello",
  },
  shop: {
    title: "Prodotti naturali dalle Isole.",
    intro:
      "Cosmesi naturale, prodotti bio e una selezione di marchi delle Canarie. Acquisto via carrello, WhatsApp o in negozio.",
    filters: "Categorie",
    bestsellers: "Più venduti",
    bestsellersTitle: "I più venduti della settimana",
    bestsellersIntro:
      "Una selezione dei preferiti dei nostri clienti — prodotti naturali e bio realizzati alle Canarie.",
    bio: "BIO",
    canarias: "Origine Canarie",
    bestseller: "Più venduto",
    new: "Nuovo",
    trust1: "100% Naturale",
    trust2: "Spedizione gratis da 40€ a Tenerife",
    trust3: "Origine Canarie",
    trust4: "Resto delle Canarie 24-72h",
    noCart:
      "Nessun pagamento online per ora: confermiamo l'ordine via WhatsApp dopo l'invio.",
  },
  checkout: {
    title: "Completa l'ordine",
    intro:
      "Compila i tuoi dati e invieremo il riepilogo via WhatsApp per confermare disponibilità, spedizione e pagamento.",
    contact: "Dati di contatto",
    shipping: "Spedizione",
    notes: "Note (opzionale)",
    name: "Nome e cognome",
    email: "Email",
    phone: "Telefono",
    address: "Indirizzo",
    city: "Città",
    postal: "CAP",
    island: "Isola",
    notesPh: "Commenti sul tuo ordine",
    submit: "Invia ordine via WhatsApp",
    summary: "Riepilogo ordine",
    noPayment:
      "Nessun pagamento online: all'invio si aprirà WhatsApp con il riepilogo per confermare tutto.",
    backToCart: "Torna al carrello",
    empty: "Il tuo carrello è vuoto. Aggiungi prodotti prima del checkout.",
  },
  footer: {
    contactKicker: "Contatti",
    cta: "Prenota la tua prossima visita.",
    intro:
      "Ti aspettiamo nel cuore di La Tejita per disegnare insieme il tuo rituale di benessere.",
    address: "Indirizzo",
    phone: "Telefono",
    hours: "Orari",
    rights: "Tutti i diritti riservati.",
    region: "Tenerife · Isole Canarie",
  },
  common: {
    language: "Lingua",
    translationNotice: "I contenuti editoriali estesi sono attualmente disponibili in spagnolo. Shop, trattamenti e checkout restano completamente localizzati.",
    backHome: "Torna alla home",
  },
};

export const DICTS: Record<Lang, Dict> = { es, en, de, it };
