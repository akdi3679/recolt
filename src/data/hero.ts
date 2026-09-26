import { brand } from "./brand";

export const hero = {
  eyebrow: "Bureau d'études · Ingénierie nourricière",

  headline: {
    line1: "En finir avec",
    line2Before: "la ",
    line2Emphasis: "ville-fournaise",
    line2After: ".",
  },

  problem: brand.problem,

  solution:
    "Nous concevons les infrastructures éponge et nourricières qui transforment chaque mètre carré urbain en espace vivant et productif.",

  ctas: {
    primary: { label: "Demander un diagnostic", href: "/contact" },
    secondary: { label: "Voir la méthode", href: "/methode" },
  },

  quote: brand.authority,
  quoteCaption: "Le principe RECOLT",

  image: {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1800&q=80",
    alt: "Terres cultivées vues du ciel",
  },

  stats: [],
} as const;