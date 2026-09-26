export const navigation = [
  { label: "Méthode", href: "/methode" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Laboratoire", href: "/laboratoire" },
  { label: "Secteur public", href: "/secteur-public" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
 explorer: [
  { label: "Méthode", href: "/methode" },
  { label: "RE-SOL", href: "/methode#re-sol" },
  { label: "PRU", href: "/methode#pru" },
  { label: "IPN-RECOLT", href: "/methode#ipn" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
],  organisation: [
    { label: "À propos", href: "/a-propos" },
    { label: "Équipe", href: "/equipe" },
    { label: "Laboratoire du Vivant", href: "/laboratoire" },
    { label: "Secteur public", href: "/secteur-public" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/politique-confidentialite" },
    { label: "Cookies", href: "/politique-cookies" },
  ],
} as const;