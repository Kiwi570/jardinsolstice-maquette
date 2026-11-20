# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 19:53:57 · 17 min · 8 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-183652-standard` · version ?v=2
- Échecs : **0**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (88), balayage (7), films d’ouverture (6), films de transition (6), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (8), liens et boutons (8), liens profonds (16), liens vers la page en cours (7), changements de hauteur (3), parcours du projet (1), fluidité (6), défilement selon l’appareil (5), mouvement (6), effets du plan (3), souris immobile (2), vitesse (7), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 7 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182408-rapide-cible | rapide | /animations,/alentours | toutes | 3 | 7 | 1 | échecs |
| **20261120-183652-standard** (celle-ci) | standard | toutes | toutes | 0 | 11 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (1)

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/chambres` — à 81 ms (différence 59 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/chambres` — à 88 ms (différence 53 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/chambres` — écran différent à la même position après rechargement (5.8 %), voir comparaisons/rechargement-chambres-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/tisanes` — écran différent à la même position après rechargement (29.7 %), voir comparaisons/rechargement-tisanes-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 16 min de travail pour 40 min de budget, 1 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /tisanes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2876 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2745 ms depuis le premier octet
- Ouverture /tisanes (1366×768) : 2754 ms depuis le premier octet
- Ouverture / (390×844) : 2902 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2698 ms depuis le premier octet
- Ouverture /tisanes (390×844) : 2802 ms depuis le premier octet
- Bords de l’écran : 247 images d’intro, 21 de voile et 108 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /alentours : aucune section épinglée ou plein écran.
- Tient dans l'écran /animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-ferme : aucune section épinglée ou plein écran.
- Tient dans l'écran /tisanes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 545, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 384, tâche la plus longue 0 ms
- Fluidité /tisanes 1366×768 (molette) : 1 % d'images lentes sur 447, tâche la plus longue 73 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1379, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /tisanes 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Vitesse / : 0.63 s de calcul au chargement (téléphone ralenti).
- Vitesse /alentours : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /animations : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-ferme : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /tisanes : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
