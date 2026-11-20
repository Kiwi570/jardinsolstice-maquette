# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 18:42:29 · 15 min · 6 page(s) · audit standard

## Résumé

- Statut : **18 échec(s)**
- Passe : `20261120-172733-standard` · version ?v=1
- Échecs : **18**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (6), films de transition (6), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (3), fluidité (6), défilement selon l’appareil (5), mouvement (6), effets du plan (3), souris immobile (2), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-170606-rapide-cible | rapide | /,/chambres,/tisanes,/la-ferme,/contact,/404 | toutes | 51 | 31 | 1 | échecs |
| **20261120-172733-standard** (celle-ci) | standard | toutes | toutes | 18 | 10 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-contenu > div.ouv-actions:nth-of-type(2) > a.bouton.bouton--soleil:nth-of-type(1) « Réserver une chambre » _(320×568 normal)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-texte > p:nth-of-type(3) > a.bouton:nth-of-type(1) « Retour à l'accueil » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p:nth-of-type(2) > a.bouton « Faire une demande » _(320×568 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-contenu > p.ouv-info:nth-of-type(3) « Solstice d'hiver dans 31 jours, le 21 décembre » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-contenu > p.ouv-info:nth-of-type(3) « Solstice d'hiver le 21 décembre » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-texte > p.introuvable-info:nth-of-type(4) « 02 37 81 15 82 · jardinsolstice@orange.fr » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) « En ce moment, vente à la ferme sur rendez-vous ; l » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) « Vente à la ferme d'avril à septembre, le samedi de » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/tisanes` — section#debut > div.tis-ouv-texte:nth-of-type(1) > p.tis-info:nth-of-type(4) « 5,75 € les 30 à 40 g · expédition chaque lundi · p » _(320×568 normal, 320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/` — ol.roue-saisons > li.roue-saison.est-actuelle:nth-of-type(4) > ul > li:nth-of-type(3) « Asters et soleils nourrissent les abeilles jusqu'a » — coupé par section#saisons > div.roue-cadre « La roue de l'année Au fil des saisons JANV. FÉVR.  » _(320×568 normal)_

### contenu inaccessible (2)

- **contenu inaccessible** — `/` — section#tisanes > div.sachets:nth-of-type(2) > ul.sachets-piste > li.sachet:nth-of-type(6) « Les classiques Sérénité Un moment de calme Tilleul » — 3 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 sansJs)_
- **contenu inaccessible** — `/la-ferme` — section#jardin > div.sachets.herbier:nth-of-type(2) > ul.sachets-piste > li.planche-herbier:nth-of-type(6) « Le magnolia Les massifs se dessinent au fil des an » — 4 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--gare:nth-of-type(1) « Gare de La Loupe » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--rail:nth-of-type(5) « Paris-Montparnasse – Le Mans » _(768×1024 normal)_

### élément recouvert (3)

- **élément recouvert** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > svg.carte-svg > g.carte-bifurcation:nth-of-type(2) — par section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--d928:nth-of-type(2) « D928 vers Nogent-le-Rotrou » _(390×844 normal)_
- **élément recouvert** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > svg.carte-svg > g.carte-gare:nth-of-type(1) — par section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--rail:nth-of-type(5) « Paris-Montparnasse – Le Mans » _(768×1024 normal)_
- **élément recouvert** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--gare:nth-of-type(1) « Gare de La Loupe » — par section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--rail:nth-of-type(5) « Paris-Montparnasse – Le Mans » _(768×1024 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 846 px — largeurs : 800 à 1040 px (7 largeurs) _(balayage 320–1920 normal)_

### lien profond (1)

- **lien profond** — `/ → /chambres#tilia` — section pas en haut de l'écran (1883 px) _(1366×768 lien profond)_

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

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/chambres` — à 75 ms (différence 53 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/chambres` — écran différent à la même position après rechargement (6.4 %), voir comparaisons/rechargement-chambres-*.png _(1366×768)_
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

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 24 min de travail pour 80 min de budget, 6 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /tisanes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2854 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2716 ms depuis le premier octet
- film de l'ouverture /chambres 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /tisanes (1366×768) : 2793 ms depuis le premier octet
- Ouverture / (390×844) : 2890 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2766 ms depuis le premier octet
- Ouverture /tisanes (390×844) : 2807 ms depuis le premier octet
- Bords de l’écran : 208 images d’intro, 20 de voile et 81 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-ferme : aucune section épinglée ou plein écran.
- Tient dans l'écran /tisanes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 505, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 397, tâche la plus longue 0 ms
- Fluidité /tisanes 1366×768 (molette) : 0 % d'images lentes sur 449, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1376, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /tisanes 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Vitesse / : 0.76 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-ferme : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /tisanes : 0.51 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
