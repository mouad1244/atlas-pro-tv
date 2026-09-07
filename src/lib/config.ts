export const SITE = {
  name: "Atlas Pro TV",
  tagline: "IPTV Premium France",
  domain: "atlasprotv.fr",
  // TODO: remplacez par votre vrai numéro WhatsApp (format international, sans "+" ni espaces)
  whatsappNumber: "212645703926",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Accueil", href: "#home" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Appareils", href: "#devices" },
  { label: "Avis", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export type Plan = {
  id: string;
  name: string;
  screens: string;
  duration: string;
  price: string;
  oldPrice: string;
  perMonth: string;
  featured: boolean;
  badge?: string;
  bonusMonths?: number;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "decouverte",
    name: "Découverte",
    screens: "1 écran",
    duration: "6 mois",
    price: "24,99",
    oldPrice: "39,99",
    perMonth: "≈ 4,17€ / mois",
    featured: false,
    features: [
      "1 écran actif avec activation officielle",
      "Streaming HD, Full HD et 4K",
      "+18 000 chaînes TV en direct",
      "+40 000 films & séries en VOD",
      "Replay 7 jours et guide TV (EPG)",
      "Support client francophone 7j/7",
    ],
  },
  {
    id: "populaire",
    name: "Populaire",
    screens: "2 écrans",
    duration: "12 mois",
    price: "59,99",
    oldPrice: "99,99",
    perMonth: "≈ 5,00€ / mois",
    featured: true,
    badge: "Le plus choisi",
    bonusMonths: 4,
    features: [
      "2 écrans utilisables simultanément",
      "Streaming HD, Full HD et 4K",
      "+18 000 chaînes TV en direct",
      "+40 000 films & séries en VOD",
      "Replay 7 jours et guide TV (EPG)",
      "Installation assistée offerte",
      "Support client prioritaire 7j/7",
    ],
  },
  {
    id: "famille",
    name: "Famille",
    screens: "3 écrans",
    duration: "12 mois",
    price: "79,99",
    oldPrice: "129,99",
    perMonth: "≈ 6,67€ / mois",
    featured: false,
    bonusMonths: 4,
    features: [
      "3 écrans utilisables simultanément",
      "Streaming HD, Full HD et 4K",
      "Catalogue complet + nouveautés",
      "Replay 7 jours et guide TV (EPG)",
      "Installation assistée offerte",
      "Support client prioritaire 7j/7",
      "Satisfait ou remboursé 7 jours",
    ],
  },
];

export const FEATURES = [
  {
    title: "+18 000 chaînes en direct",
    desc: "France, Belgique, Suisse, sport, cinéma, info et divertissement, sans coupure.",
  },
  {
    title: "VOD 4K illimitée",
    desc: "Plus de 40 000 films et séries, catalogue enrichi chaque semaine.",
  },
  {
    title: "Multi-écran",
    desc: "Regardez sur TV, mobile, tablette et PC selon la formule choisie.",
  },
  {
    title: "Replay & EPG",
    desc: "Rattrapez vos programmes sur 7 jours avec un guide TV complet.",
  },
  {
    title: "Serveurs stables 99,9%",
    desc: "Infrastructure dédiée pour un streaming fluide, même en heure de pointe.",
  },
  {
    title: "Support francophone",
    desc: "Une équipe disponible 7j/7 pour l'installation et le suivi de votre accès.",
  },
];

export const DEVICES = [
  {
    title: "Smart TV & Android TV",
    desc: "Samsung, LG, Android TV, Fire TV et box Android compatibles.",
  },
  {
    title: "Mobile & tablette",
    desc: "Application dédiée pour Android et iOS, installation en 2 minutes.",
  },
  {
    title: "PC & Mac",
    desc: "Regardez sur grand écran via notre lecteur compatible Windows et macOS.",
  },
  {
    title: "Box & récepteurs",
    desc: "Compatible MAG, Formuler et la majorité des box IPTV du marché.",
  },
];

export const STEPS = [
  {
    title: "Choisissez votre forfait",
    desc: "Sélectionnez le nombre d'écrans et la durée qui correspondent à vos besoins.",
  },
  {
    title: "Recevez vos accès",
    desc: "Vos identifiants sont envoyés par email et WhatsApp en quelques minutes.",
  },
  {
    title: "Installez et regardez",
    desc: "Suivez notre guide pas à pas et profitez de vos programmes en direct.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Camille L.",
    role: "Paris",
    photo: "/assets/testimonials/camille.jpg",
    text: "Activation en moins de 10 minutes et une image nickel en 4K sur ma Smart TV. Le support répond vraiment vite sur WhatsApp.",
  },
  {
    name: "Julien M.",
    role: "Lyon",
    photo: "/assets/testimonials/julien.jpg",
    text: "J'utilise le pack 2 écrans avec ma compagne, aucune coupure même le soir en heure de pointe. Très bon rapport qualité-prix.",
  },
  {
    name: "Sophie B.",
    role: "Marseille",
    photo: "/assets/testimonials/sophie.jpg",
    text: "Le catalogue VOD est énorme et mis à jour régulièrement. Les chaînes sport passent sans latence pendant les matchs.",
  },
  {
    name: "Nadia R.",
    role: "Bruxelles",
    photo: "/assets/testimonials/nadia.jpg",
    text: "Installation assistée par le support, tout s'est fait en visio en 15 minutes. Je recommande pour toute la famille.",
  },
  {
    name: "Thomas D.",
    role: "Toulouse",
    photo: "/assets/testimonials/thomas.jpg",
    text: "Compatible avec ma box Android et mon iPhone, je passe de l'un à l'autre sans souci. Le replay est vraiment pratique.",
  },
  {
    name: "Fatima K.",
    role: "Genève",
    photo: "/assets/testimonials/fatima.jpg",
    text: "Trois écrans actifs en même temps chez nous, chacun regarde ce qu'il veut. Aucun bug depuis plusieurs mois.",
  },
];

export const FAQS = [
  {
    q: "Comment se déroule la livraison de mon abonnement ?",
    a: "La livraison est instantanée et automatisée. Dès validation de votre paiement, vos identifiants de connexion sont envoyés par e-mail et WhatsApp, généralement en moins de 15 minutes.",
  },
  {
    q: "Ai-je besoin d'une parabole ou d'un décodeur satellite ?",
    a: "Non. Notre service fonctionne uniquement via Internet (IPTV). Une connexion stable d'au moins 10 Mbps est recommandée pour profiter du direct en HD ou 4K.",
  },
  {
    q: "Puis-je utiliser mon abonnement sur plusieurs appareils ?",
    a: "Oui, selon la formule choisie (1, 2 ou 3 écrans) vous pouvez regarder en simultané sur plusieurs appareils : Smart TV, mobile, tablette, PC ou box Android.",
  },
  {
    q: "Quels appareils sont compatibles avec Atlas Pro TV ?",
    a: "Le service fonctionne sur la majorité des équipements : Smart TV (Samsung, LG), Android TV, Fire Stick, box Android, smartphones et tablettes iOS/Android, PC et Mac.",
  },
  {
    q: "Ai-je besoin d'un VPN pour utiliser le service ?",
    a: "Non, aucun VPN n'est nécessaire. Notre service est optimisé pour fonctionner directement, ce qui garantit une connexion plus rapide et plus stable.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons les paiements par carte bancaire, Apple Pay, Google Pay et virement. Tous les paiements sont sécurisés et chiffrés.",
  },
];
