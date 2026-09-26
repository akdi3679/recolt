export const cookies = {
  // ─── Set to true ONLY if you use a non-exempt tracker ───
  // Non-exempt examples: Google Analytics, Meta Pixel, LinkedIn Insight,
  // Hotjar, embedded YouTube with tracking, any ad network.
  //
  // Exempt (CNIL): Plausible, Matomo (self-hosted/cloud certified),
  // Umami, AT Internet, Wysistat — cookieless audience measurement.
  requiresConsent: false,

  // Categories shown in the banner if requiresConsent is true
  categories: [
    {
      id: "necessary",
      label: "Strictement nécessaires",
      description:
        "Fonctionnement du site, sécurité, mémorisation de vos choix. Exemptés de consentement.",
      required: true,
      enabled: true,
    },
    {
      id: "analytics",
      label: "Mesure d'audience",
      description:
        "Statistiques anonymisées de visite. Aucun identifiant persistant.",
      required: false,
      enabled: false,
    },
    {
      id: "preferences",
      label: "Préférences",
      description:
        "Mémorisation de la langue, du thème, des préférences d'affichage.",
      required: false,
      enabled: false,
    },
  ],

  banner: {
    title: "Vos préférences de cookies",
    body: "Nous utilisons des cookies pour assurer le fonctionnement du site et, avec votre accord, pour mesurer son audience. Vous pouvez accepter ou refuser à tout moment.",
    acceptAll: "Tout accepter",
    rejectAll: "Tout refuser",
    customize: "Personnaliser",
    savePreferences: "Enregistrer mes choix",
    manageLabel: "Gérer les cookies",
  },

  // Storage key for the user's choice
  storageKey: "recolt-cookie-consent",
  // 6 months — CNIL recommendation
  consentDurationDays: 182,
} as const;