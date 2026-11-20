# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 19:56:15 · 2 min · 2 page(s) · audit complet ciblé sur /animations,/alentours (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-185402-complet-cible-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (78), balayage (2)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182408-rapide-cible | rapide | /animations,/alentours | toutes | 3 | 7 | 1 | échecs |
| 20261120-183652-standard | standard | toutes | toutes | 0 | 11 | 1 | complet |
| **20261120-185402-complet-cible-partiel** (celle-ci) | complet | /animations,/alentours | fichiers, mesures, ecran | 1 | 1 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/alentours` — section#debut > div.ale-ouv-texte.conteneur:nth-of-type(2) > p.ale-info:nth-of-type(3) « Gare de La Loupe à 3 km · Véloscénie, de Paris au  » _(1000×560 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 3 étape(s) notée(s), 17 min de travail pour 45 min de budget, 2 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /alentours : aucune section épinglée ou plein écran.
- Tient dans l'écran /animations : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/alentours --seulement=fichiers,mesures
```
