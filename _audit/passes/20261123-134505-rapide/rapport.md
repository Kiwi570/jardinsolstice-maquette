# Rapport d’audit

Projet : `jardinsolstice-maquette` · 23/11/2026 14:50:46 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **27 échec(s)**
- Passe : `20261123-134505-rapide` · version ?v=3
- Échecs : **27**
- À regarder : **9**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (10), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (3), souris immobile (2), vitesse (1), captures (1)

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

### texte sous 12 px (27)

- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche.est-prochain:nth-of-type(1) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « NOV. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche.est-prochain:nth-of-type(1) > p.marche-statut:nth-of-type(2) « Prochain » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(2) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(2) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(3) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(3) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(4) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(4) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(5) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(5) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(6) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(6) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(7) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(7) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(8) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(8) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles.fx-fini > li.marche:nth-of-type(9) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — div.marches-texte > ol.marches-tuiles.fx-fini > li.marche:nth-of-type(9) > p.marche-statut:nth-of-type(2) « À venir » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(1) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « NOV. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(2) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(3) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(4) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(5) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(6) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(7) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(8) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — ol.marches-tuiles > li.marche:nth-of-type(9) > p.marche-date:nth-of-type(1) > span.marche-mois:nth-of-type(2) « DÉC. » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 3 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### typographie française (1)

- **typographie française** — `/` — section#marches > div.marches-texte > p.marches-compte:nth-of-type(2) > span:nth-of-type(2) « Dans 6 jours : Foire Saint-André, Chartres (28). » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 82 ms (différence 49 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/chambres` — à 70 ms (différence 53 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

- **parcours:projet** : locator.click: Timeout 30000ms exceeded.
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=3
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2909 ms depuis le premier octet
- Ouverture / (390×844) : 2898 ms depuis le premier octet
- Bords de l’écran : 59 images d’intro, 7 de voile et 28 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 444, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Vitesse / : 0.39 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
