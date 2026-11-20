# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 18:50:07 · 7 min · 6 page(s) · audit standard (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261120-174327-standard-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (3), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-170606-rapide-cible | rapide | /,/chambres,/tisanes,/la-ferme,/contact,/404 | toutes | 51 | 31 | 1 | échecs |
| 20261120-172733-standard | standard | toutes | toutes | 18 | 10 | 1 | échecs |
| **20261120-174327-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, parcours | 5 | 5 | 0 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — div.roue-visuel > div.roue-photos > figure.media.roue-photo:nth-of-type(4) > figcaption.mention-ia « Illustration générée » — coupé par div.roue-corps.conteneur:nth-of-type(2) > div.roue-visuel > div.roue-photos > figure.media.roue-photo:nth-of-type(4) « Illustration générée » _(320×568 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--d928:nth-of-type(2) « D928 vers Nogent-le-Rotrou » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) > strong « La Floudière » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--d928:nth-of-type(2) « D928 vers Nogent-le-Rotrou » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) « La Floudière 3 km de la gare » _(320×568 normal, 320×568 sansJs)_

### élément recouvert (2)

- **élément recouvert** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--d928:nth-of-type(2) « D928 vers Nogent-le-Rotrou » — par section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) « La Floudière 3 km de la gare » _(390×844 normal)_
- **élément recouvert** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > svg.carte-svg > g.carte-bifurcation:nth-of-type(2) — par section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--bif:nth-of-type(3) « Les Gaudonnières : à droite » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (1)

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/chambres` — écran différent à la même position après rechargement (6.4 %), voir comparaisons/rechargement-chambres-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/tisanes` — écran différent à la même position après rechargement (29.7 %), voir comparaisons/rechargement-tisanes-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 24 min de travail pour 80 min de budget, 6 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /tisanes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact --seulement=fichiers,mesures
```
