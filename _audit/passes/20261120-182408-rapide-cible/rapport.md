# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 19:31:54 · 8 min · 2 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /animations,/alentours

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261120-182408-rapide-cible` · version ?v=2
- Échecs : **3**
- À regarder : **7**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (12), films d’ouverture (4), films de transition (4), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (11), liens vers la page en cours (2), changements de hauteur (2), parcours du projet (1), fluidité (4), défilement selon l’appareil (5), mouvement (4), effets du plan (3), vitesse (2), captures (1)

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

## Échecs

### image de partage (2)

- **image de partage** — `alentours.html` — fichier introuvable : /assets/partage/alentours-fr.jpg
- **image de partage** — `animations.html` — fichier introuvable : /assets/partage/animations-fr.jpg

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/animations` — section#groupes > figure.media.groupes-media > picture > img « Un groupe réuni sur la pelouse devant la maison » — groupe-jardin (3/5, faible, 30 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

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

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/animations` — écran différent à la même position après rechargement (6.5 %), voir comparaisons/rechargement-animations-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/animations` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_

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
- Journal v2 : 1 étape(s) notée(s), 3 min de travail pour 10 min de budget, 1 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /alentours, /animations.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /alentours (1366×768) : 2880 ms depuis le premier octet
- Ouverture /animations (1366×768) : 2708 ms depuis le premier octet
- Ouverture /alentours (390×844) : 2885 ms depuis le premier octet
- Ouverture /animations (390×844) : 2692 ms depuis le premier octet
- film de l'ouverture /animations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 120 images d’intro, 11 de voile et 55 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /alentours : aucune section épinglée ou plein écran.
- Tient dans l'écran /animations : aucune section épinglée ou plein écran.
- Fluidité /alentours 1366×768 (molette) : 0 % d'images lentes sur 382, tâche la plus longue 0 ms
- Fluidité /animations 1366×768 (molette) : 0 % d'images lentes sur 293, tâche la plus longue 0 ms
- Fluidité /alentours 390×844 (doigt) : 0 % d'images lentes sur 1371, tâche la plus longue 0 ms
- Fluidité /animations 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Vitesse /alentours : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /animations : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
