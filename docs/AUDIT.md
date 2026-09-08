# Audit et architecture — Portfolio V2

## Base auditée
Dépôt DST-NDIAYE/portfolio, branche main, récupéré le 8 septembre 2026.
Ancienne application : index.html, style.css, responsive.css, images.

- Ancienne présentation étudiant Master 1 et dates de formation obsolètes.
- Trois témoignages « Client 1/2/3 » sans preuve.
- Galerie et catégories de template designer, compteurs sans données.
- Lien CV vide, ancres ne correspondant pas aux sections, formulaire action="#" sans service d’envoi.
- Fragment HTML cassé, maintenance, dépendances d’icônes externes et ancien copyright de template.

## Architecture retenue
Next.js App Router + TypeScript strict + Tailwind CSS 4. Export statique sans serveur ni compte tiers pour le fonctionnement. Une route et des ancres ; études de cas dans des éléments details accessibles sans JavaScript. Métadonnées dans app/layout.tsx ; présentation dans app/page.tsx ; thème et responsive dans app/globals.css. CV dans public.

## Sources éditoriales
CV utilisateur du 27 août 2026, joint à la conversation « orale ». Il prévaut sur les dates de l’ancien site. Coordonnées et liens également concordants avec le dépôt.
Les descriptions des travaux CDC sont des reformulations du CV. Aucun score, résultat chiffré ou succès de mise en production ajouté. Le diagramme de la page représente les domaines de travail, pas une architecture de production vérifiée.

## Informations à confirmer
- IvoireMaint : objectif, rôle, état, technologies et dépôt. Affiché uniquement dans la rubrique des prochaines présentations, sans étude de cas inventée.
- Noms exacts et justificatifs des 6 certifications Dataiku. Le nombre et les domaines sont explicitement mentionnés dans le CV.
- Dépôts publics ou démonstrations des projets personnels RAG/ML ; aucun lien de code interne publié.
- FastAPI, Docker et PyTorch ne sont pas présentés comme compétences acquises sur la seule suggestion de l’ancienne réponse ChatGPT.
- Aucun statut de diplôme obtenu ajouté : intitulés et périodes du CV sont repris.

## V1 livrable
Hero, à propos, projets, expérience, compétences regroupées, formation et certifications, contact, CV, GitHub, LinkedIn. Navigation clavier, focus visibles, lien d’évitement, tailles fluides et réduction des mouvements. Pas de formulaire fictif.
