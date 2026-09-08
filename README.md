# Portfolio — Serigne Bassirou NDIAYE

V2 Data Scientist / ML & AI Engineer. Next.js, TypeScript, Tailwind CSS. Site français statique, sans service externe nécessaire.

## Développement
Node.js 20.9+ et pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
```

L’export prêt à héberger est généré dans `out/`. Déployer ce répertoire sur un hébergement statique (Sites, Vercel ou autre). Pour GitHub Pages sous `/portfolio`, configurer `basePath: '/portfolio'` et préfixer les liens de ressources locales avant reconstruction ; la version actuelle vise un domaine racine.

## Contenu
Modifier `app/page.tsx`, le thème dans `app/globals.css`, les métadonnées dans `app/layout.tsx`. Remplacer le CV dans `public/cv-serigne-ndiaye.pdf` lorsque nécessaire. Les données éditoriales proviennent du CV joint à la conversation. Consulter `docs/AUDIT.md` pour les sources et les points à confirmer.

## Publication
`.openai/hosting.json` identifie l’aperçu Sites et le dossier statique. Le dépôt GitHub d’origine reste le remote `origin`. Le travail V2 est isolé sur `feat/portfolio-v2` ; aucun remplacement automatique de main.
