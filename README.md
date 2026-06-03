# Site QLF Group

Site vitrine de **QLF Group** — entreprise de BTP (construction de bâtiments, génie civil, rénovation, études & suivi de projets) au Sénégal et en Afrique de l'Ouest.

Réalisé avec **Astro** et **Tailwind CSS**. Toute la configuration (coordonnées, services, zone) est centralisée dans un seul fichier : `src/config/site.ts`.

## Prérequis

- [Node.js](https://nodejs.org) 18 ou supérieur (inclut `npm`)

## Installation & développement

```bash
npm install      # installe les dépendances
npm run dev      # serveur local sur http://localhost:4321
```

## Commandes

| Commande | Action |
|----------|--------|
| `npm run dev` | Lance le serveur de développement (rechargement à chaud) |
| `npm run build` | Génère le site final dans `dist/` |
| `npm run preview` | Prévisualise localement le site généré |

## Personnalisation

1. **Identité & coordonnées** — `src/config/site.ts` : nom, slogan, métier, téléphones, e-mails, WhatsApp, horaires, réseaux sociaux, domaine.
2. **Services** — tableau `services` dans `src/config/site.ts` (titre, description, icône). Une page se génère automatiquement par service.
3. **Couleurs** — `tailwind.config.mjs` (palettes `anthracite` et `chantier`).
4. **Polices** — Archivo (titres) + Hanken Grotesk (texte), chargées dans `src/layouts/BaseLayout.astro` et déclarées dans `tailwind.config.mjs`.
5. **Logo** — `public/img/logo-clair.jpg` (en-tête) et `public/img/logo-sombre.jpg` (pied de page).
6. **Photos de réalisations** — `public/realisations/` (galerie + visuels des pages services).
7. **Zone d'intervention** — tableau `regions` dans `src/pages/zone-intervention.astro` (alimente la liste **et** la carte Leaflet).
8. **Mentions légales** — compléter NINEA / RC, forme juridique, capital, directeur de publication, assureur et hébergeur dans `src/pages/mentions-legales.astro`.
9. **Domaine** — renseigner `site.domaine` dans `src/config/site.ts` **et** `astro.config.mjs`.

## Structure

```
public/
├── img/             logos
├── realisations/    photos de chantiers et perspectives
├── favicon.svg
└── robots.txt
src/
├── components/      Header, Footer, ServicePage, Icon
├── config/          site.ts (toute la configuration)
├── layouts/         BaseLayout.astro (HTML, SEO, JSON-LD)
├── pages/           routes du site (accueil, services, réalisations, etc.)
└── styles/          global.css (Tailwind + classes utilitaires)
```

## Mise en ligne (Netlify — gratuit)

1. Pousser le projet sur un dépôt GitHub.
2. Sur [Netlify](https://www.netlify.com) : **Add new site → Import from Git** → sélectionner le dépôt.
3. **Build command** : `npm run build` — **Publish directory** : `dist` (déjà définis dans `netlify.toml`).
4. Le **formulaire de devis** est détecté automatiquement (Netlify Forms). Les soumissions arrivent dans l'onglet *Forms* du tableau de bord Netlify ; y configurer une notification e-mail vers l'adresse souhaitée.
5. (Optionnel) Brancher un nom de domaine personnalisé dans **Domain settings**.

> L'offre gratuite de Netlify couvre l'hébergement, le HTTPS, les déploiements automatiques à chaque `git push`, et jusqu'à 100 soumissions de formulaire par mois.

## Informations à fournir pour finaliser

- Ville / siège, adresse complète, horaires réels
- Année de création
- Identifiants légaux : NINEA, RC, forme juridique, capital, assureur
- Nom de domaine définitif
- Liens des réseaux sociaux
- Validation des villes/régions couvertes
