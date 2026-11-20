# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 20:33:46 · 31 min · 8 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-190239-complet` · version ?v=2
- Échecs : **0**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (312), balayage (7), films d’ouverture (14), films de transition (14), bords de l’écran (8), intro accélérable et passable (7), menu (1), clavier (8), liens et boutons (8), liens profonds (16), liens vers la page en cours (7), changements de hauteur (7), parcours du projet (1), fluidité (14), défilement selon l’appareil (5), mouvement (14), effets du plan (3), souris immobile (2), vitesse (7), captures (1)

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
| 20261120-183652-standard | standard | toutes | toutes | 0 | 11 | 1 | complet |
| 20261120-185402-complet-cible-partiel | complet | /animations,/alentours | fichiers, mesures, ecran | 1 | 1 | 0 | échecs |
| 20261120-185633-complet-cible-partiel | complet | /,/alentours,/la-ferme | fichiers, mesures | 0 | 1 | 0 | complet |
| **20261120-190239-complet** (celle-ci) | complet | toutes | toutes | 0 | 14 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### numéro de version (1)

- **numéro de version** — ?v=2 est celui de la dernière livraison : à changer avant de livrer

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 60 × 47 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (1)

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/chambres` — à 69 ms (différence 59 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 79 ms (différence 49 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/animations` — écran différent à la même position après rechargement (6.4 %), voir comparaisons/rechargement-animations-*.png _(1366×768)_
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
- Journal v2 : 5 étape(s) notée(s), 43 min de travail pour 75 min de budget, 2 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2888 ms depuis le premier octet
- Ouverture /alentours (1366×768) : 2875 ms depuis le premier octet
- Ouverture /animations (1366×768) : 2709 ms depuis le premier octet
- film de l'ouverture /animations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chambres (1366×768) : 2698 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2901 ms depuis le premier octet
- Ouverture /la-ferme (1366×768) : 2705 ms depuis le premier octet
- Ouverture /tisanes (1366×768) : 2772 ms depuis le premier octet
- Ouverture / (390×844) : 2889 ms depuis le premier octet
- Ouverture /alentours (390×844) : 2897 ms depuis le premier octet
- Ouverture /animations (390×844) : 2688 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2690 ms depuis le premier octet
- Ouverture /contact (390×844) : 2896 ms depuis le premier octet
- Ouverture /la-ferme (390×844) : 2725 ms depuis le premier octet
- Ouverture /tisanes (390×844) : 2787 ms depuis le premier octet
- film de l'ouverture /tisanes 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /la-ferme 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 555 images d’intro, 37 de voile et 217 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /alentours : aucune section épinglée ou plein écran.
- Tient dans l'écran /animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-ferme : aucune section épinglée ou plein écran.
- Tient dans l'écran /tisanes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 539, tâche la plus longue 0 ms
- Fluidité /alentours 1366×768 (molette) : 0 % d'images lentes sur 392, tâche la plus longue 0 ms
- Fluidité /animations 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 396, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 180, tâche la plus longue 0 ms
- Fluidité /la-ferme 1366×768 (molette) : 0 % d'images lentes sur 338, tâche la plus longue 0 ms
- Fluidité /tisanes 1366×768 (molette) : 0 % d'images lentes sur 454, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1374, tâche la plus longue 0 ms
- Fluidité /alentours 390×844 (doigt) : 0 % d'images lentes sur 1368, tâche la plus longue 0 ms
- Fluidité /animations 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /la-ferme 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /tisanes 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /alentours : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /animations : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-ferme : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /tisanes : 0.45 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
