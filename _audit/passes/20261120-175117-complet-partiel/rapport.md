# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 18:57:55 · 7 min · 6 page(s) · audit complet (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261120-175117-complet-partiel` · version ?v=1
- Échecs : **8**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-170606-rapide-cible | rapide | /,/chambres,/tisanes,/la-ferme,/contact,/404 | toutes | 51 | 31 | 1 | échecs |
| 20261120-172733-standard | standard | toutes | toutes | 18 | 10 | 1 | échecs |
| 20261120-174327-standard-partiel | standard | toutes | fichiers, mesures, parcours | 5 | 5 | 0 | échecs |
| **20261120-175117-complet-partiel** (celle-ci) | complet | toutes | fichiers, mesures, ecran | 8 | 2 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-contenu > p.ouv-info:nth-of-type(3) « Solstice d'hiver dans 31 jours, le 21 décembre » _(375×667 normal, 375×667 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-texte > p.introuvable-info:nth-of-type(4) « 02 37 81 15 82 · jardinsolstice@orange.fr » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) « En ce moment, vente à la ferme sur rendez-vous ; l » _(1000×560 normal, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) « Vente à la ferme d'avril à septembre, le samedi de » _(1000×560 sansJs)_

### texte coupé (2)

- **texte coupé** — `/` — ol.roue-saisons > li.roue-saison.est-actuelle:nth-of-type(4) > p.roue-tisanes:nth-of-type(2) > span « Tisanes de saison : » — coupé par section#saisons > div.roue-cadre « La roue de l'année Au fil des saisons JANV. FÉVR.  » _(375×667 normal, 375×667 sansWebgl)_
- **texte coupé** — `/` — div.roue-corps.conteneur:nth-of-type(2) > ol.roue-saisons > li.roue-saison.est-actuelle:nth-of-type(4) > p.roue-tisanes:nth-of-type(2) « Tisanes de saison : Coup de froid, « l'hiver appro » — coupé par section#saisons > div.roue-cadre « La roue de l'année Au fil des saisons JANV. FÉVR.  » _(375×667 normal, 375×667 sansWebgl)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > ul.ctc-coord.masque-ecran-tres-bas > li:nth-of-type(3) « Adresse La Floudière, 5 rue de l'Hêtre, 28240 Vaup » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) > strong « La Floudière » _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > ul.ctc-coord.masque-ecran-tres-bas > li:nth-of-type(3) « Adresse La Floudière, 5 rue de l'Hêtre, 28240 Vaup » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) « La Floudière 3 km de la gare » _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (1)

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 24 min de travail pour 80 min de budget, 6 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-ferme : aucune section épinglée ou plein écran.
- Tient dans l'écran /tisanes : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/contact --seulement=fichiers,mesures
```
