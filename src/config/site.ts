// Configuration centrale du site QLF Group — un seul endroit à éditer.
// À renseigner avec les informations réelles de l'entreprise : ville, departement,
// adresse, anneeCreation, domaine, réseaux sociaux, + identifiants légaux
// (NINEA / RC / forme juridique / capital) dans src/pages/mentions-legales.astro.
export const site = {
  nomEntreprise: 'QLF Group',
  slogan: 'Votre confiance, notre fondation.',
  baseline: 'Construction de bâtiments, génie civil, rénovation et gestion de projets immobiliers.',
  metier: 'BTP',
  pays: 'Sénégal',
  paysCode: 'SN',
  zone: 'au Sénégal et en Afrique de l\'Ouest',
  ville: 'Dakar', // ⚠️ à confirmer
  departement: 'Dakar', // ⚠️ à confirmer (région)
  rayonKm: 30, // ⚠️ à confirmer (peu utilisé : intervention à l'échelle nationale/régionale)
  anneeCreation: 2024, // ⚠️ à confirmer
  telephone: '+221 77 338 59 76',
  telephoneRaw: '+221773385976',
  telephoneTertiaire: '+221 77 185 83 43',
  telephoneSecondaire: '+33 7 53 91 16 27',
  email: 'diolmayma@gmail.com',
  emailSecondaire: 'mamadou9788@gmail.com',
  emailDevis: 'diolmayma@gmail.com', // destinataire des demandes de devis (à confirmer côté Netlify Forms)
  whatsapp: '+221773385976',
  adresse: {
    rue: '', // ⚠️ à compléter
    codePostal: '',
    ville: 'Dakar', // ⚠️ à confirmer
  },
  horaires: 'Lun-Ven 8h-18h · Sam sur RDV', // ⚠️ à confirmer
  reseaux: {
    facebook: '',
    instagram: '',
  },
  domaine: 'https://example.com', // ⚠️ à confirmer
  // Mentions légales — laisser vide masque automatiquement la ligne sur la page.
  legal: {
    formeJuridique: '', // ex. SARL, SUARL, SA…
    ninea: '',
    rc: '', // n° Registre du Commerce
    capital: '',
    directeurPublication: '',
    assureur: '', // nom de l'assureur RC professionnelle (laisser vide pour masquer la section)
    assuranceContrat: '', // n° de contrat
    hebergeur: 'Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, USA',
  },
} as const;

export const services = [
  {
    slug: 'construction',
    titre: 'Construction de bâtiments',
    titreCourt: 'Construction',
    description: 'Villas, maisons individuelles, immeubles résidentiels, bâtiments commerciaux et administratifs.',
    icon: 'building',
  },
  {
    slug: 'genie-civil',
    titre: 'Génie civil',
    titreCourt: 'Génie civil',
    description: 'Fondations, gros œuvre, béton armé, voiries et réseaux divers (VRD) et ouvrages de génie civil.',
    icon: 'hardhat',
  },
  {
    slug: 'renovation',
    titre: 'Rénovation & réhabilitation',
    titreCourt: 'Rénovation',
    description: 'Réhabilitation de bâtiments anciens, extensions, surélévations et modernisation des infrastructures.',
    icon: 'hammer',
  },
  {
    slug: 'etudes',
    titre: 'Études & suivi de projets',
    titreCourt: 'Études',
    description: 'Études techniques, plans et conception, gestion et suivi de chantier, assistance à maîtrise d\'ouvrage.',
    icon: 'ruler',
  },
] as const;

export const valeurs = [
  { titre: 'Qualité', texte: 'Des réalisations durables et conformes aux standards les plus élevés.' },
  { titre: 'Professionnalisme', texte: 'Une équipe compétente, qualifiée et engagée.' },
  { titre: 'Respect des délais', texte: 'Une organisation rigoureuse pour livrer dans les temps.' },
  { titre: 'Confiance', texte: 'Une relation transparente avec nos clients et partenaires.' },
] as const;

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Zone d\'intervention', href: '/zone-intervention' },
  { label: 'Contact', href: '/contact' },
] as const;
