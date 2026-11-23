# Rapport d’audit

Projet : `jardinsolstice-maquette` · 23/11/2026 15:26:01 · 31 min · 8 page(s) · audit complet

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261123-135515-complet` · version ?v=3
- Échecs : **16**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (312), balayage (7), films d’ouverture (14), films de transition (14), bords de l’écran (8), intro accélérable et passable (7), menu (1), clavier (8), liens et boutons (8), liens profonds (16), liens vers la page en cours (7), changements de hauteur (7), parcours du projet (1), fluidité (14), défilement selon l’appareil (5), mouvement (14), effets du plan (3), souris immobile (3), vitesse (7), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 7 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 7 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /tisanes |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=3)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-134505-rapide | rapide | toutes | toutes | 27 | 9 | 2 | échecs |
| 20261123-135157-rapide-partiel | rapide | toutes | fichiers, mesures, parcours | 0 | 2 | 0 | complet |
| **20261123-135515-complet** (celle-ci) | complet | toutes | toutes | 16 | 10 | 1 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — ol.marches-tuiles.fx-fini > li.marche.est-prochain:nth-of-type(1) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « NOV. » — avec div.marches-texte > ol.marches-tuiles.fx-fini > li.marche.est-prochain:nth-of-type(1) > p.marche-statut:nth-of-type(2) « Prochain » _(375×667 normal, 320×568 normal, 320×568 sansWebgl, 375×667 sansWebgl)_
- **textes qui se chevauchent** — `/` — ol.marches-tuiles.fx-fini > li.marche.est-prochain:nth-of-type(1) > p.marche-date:nth-of-type(1) > span.marche-num:nth-of-type(1) « 29 » — avec div.marches-texte > ol.marches-tuiles.fx-fini > li.marche.est-prochain:nth-of-type(1) > p.marche-statut:nth-of-type(2) « Prochain » _(768×1024 normal, 768×1024 sansWebgl)_

### zone tactile sous 44 px (10)

- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes.fx-fini > li."est-active".est-active:nth-of-type(1) > h3 > button.frise-bouton « Visite des cultures » — 144 × 23 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +6)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes.fx-fini > li:nth-of-type(2) > h3 > button.frise-bouton « Récolte » — 61 × 23 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +6)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes.fx-fini > li:nth-of-type(3) > h3 > button.frise-bouton « Séchage » — 69 × 23 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +6)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes.fx-fini > li:nth-of-type(4) > h3 > button.frise-bouton « Transformation » — 129 × 23 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +6)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes.fx-fini > li:nth-of-type(5) > h3 > button.frise-bouton « Fin de la journée » — 133 × 23 px _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +6)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes > li."est-active":nth-of-type(1) > h3 > button.frise-bouton « Visite des cultures » — 144 × 23 px _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes > li:nth-of-type(2) > h3 > button.frise-bouton « Récolte » — 61 × 23 px _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes > li:nth-of-type(3) > h3 > button.frise-bouton « Séchage » — 69 × 23 px _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes > li:nth-of-type(4) > h3 > button.frise-bouton « Transformation » — 129 × 23 px _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs)_
- **zone tactile sous 44 px** — `/animations` — ol.frise-etapes > li:nth-of-type(5) > h3 > button.frise-bouton « Fin de la journée » — 133 × 23 px _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs)_

### texte coupé (1)

- **texte coupé** — `/animations` — div#journee-scene > figure.media.journee-vue:nth-of-type(5) > figcaption.mention-ia « Illustration générée » — coupé par div#journee-scene « Illustration générée » _(844×390 normal, 768×1024 normal, 1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, +14)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/animations` — div#journee-scene > figure.media.journee-vue:nth-of-type(1) > picture > img « Les cultures en bandes entre les haies, vues du ha » — immersion (3/5, faible, 64 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/animations` — div#journee-scene > figure.media.journee-vue:nth-of-type(1) > picture > img « Les cultures en bandes entre les haies, vues du ha » — immersion (3/5, faible, 32 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_

### élément sans nom accessible (1)

- **élément sans nom accessible** — `/tisanes` — section#catalogue > p.catalogue-plus:nth-of-type(2) > button.bouton.bouton--contour _(390×844 sansJs, 1366×768 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 60 × 47 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (1)

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/chambres` — à 69 ms (différence 59 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/chambres` — à 67 ms (différence 53 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 74 ms (différence 49 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (4.0 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/chambres` — écran différent à la même position après rechargement (4.9 %), voir comparaisons/rechargement-chambres-*.png _(1366×768)_
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

- Numéro de version des fichiers : ?v=3
- Journal v3 : 1 étape(s) notée(s), 16 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2899 ms depuis le premier octet
- Ouverture /alentours (1366×768) : 2899 ms depuis le premier octet
- Ouverture /animations (1366×768) : 2877 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2910 ms depuis le premier octet
- film de l'ouverture /chambres 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2900 ms depuis le premier octet
- Ouverture /la-ferme (1366×768) : 2898 ms depuis le premier octet
- Ouverture /tisanes (1366×768) : 2904 ms depuis le premier octet
- film de l'ouverture /tisanes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2893 ms depuis le premier octet
- Ouverture /alentours (390×844) : 2900 ms depuis le premier octet
- Ouverture /animations (390×844) : 2901 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2896 ms depuis le premier octet
- Ouverture /contact (390×844) : 2911 ms depuis le premier octet
- Ouverture /la-ferme (390×844) : 2902 ms depuis le premier octet
- Ouverture /tisanes (390×844) : 2897 ms depuis le premier octet
- Bords de l’écran : 642 images d’intro, 61 de voile et 226 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /alentours : aucune section épinglée ou plein écran.
- Tient dans l'écran /animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-ferme : aucune section épinglée ou plein écran.
- Tient dans l'écran /tisanes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 443, tâche la plus longue 50 ms
- Fluidité /alentours 1366×768 (molette) : 0 % d'images lentes sur 327, tâche la plus longue 0 ms
- Fluidité /animations 1366×768 (molette) : 0 % d'images lentes sur 281, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 383, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 180, tâche la plus longue 0 ms
- Fluidité /la-ferme 1366×768 (molette) : 0 % d'images lentes sur 341, tâche la plus longue 0 ms
- Fluidité /tisanes 1366×768 (molette) : 0 % d'images lentes sur 386, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1358, tâche la plus longue 0 ms
- Fluidité /alentours 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /animations 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /la-ferme 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /tisanes 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /alentours : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /animations : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-ferme : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /tisanes : 0.36 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/animations,/tisanes --seulement=fichiers,mesures
```
