# Rapport d’audit

Projet : `jardinsolstice-maquette` · 20/11/2026 18:23:47 · 18 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/chambres,/tisanes,/la-ferme,/contact,/404

## Résumé

- Statut : **51 échec(s)**
- Passe : `20261120-170606-rapide-cible` · version ?v=1
- Échecs : **51**
- À regarder : **31**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (3), souris immobile (2), vitesse (5), captures (1)

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

## Échecs

### image de partage (5)

- **image de partage** — `chambres.html` — fichier introuvable : /assets/partage/chambres-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `la-ferme.html` — fichier introuvable : /assets/partage/la-ferme-fr.jpg
- **image de partage** — `tisanes.html` — fichier introuvable : /assets/partage/tisanes-fr.jpg

### élément sans nom accessible (6)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(1366×768 normal, 390×844 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal)_
- **élément sans nom accessible** — `/chambres` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/la-ferme` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs)_
- **élément sans nom accessible** — `/tisanes` — body#haut > header > div.entete-rangee > a.entete-logo _(1366×768 normal, 390×844 normal, 390×844 sansJs)_

### premier écran : information clé hors de l’écran (7)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-contenu > p.ouv-info:nth-of-type(3) « Solstice d'hiver le 21 décembre » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-texte > p.introuvable-info:nth-of-type(4) « 02 37 81 15 82 · jardinsolstice@orange.fr » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/chambres` — section#debut > div.chb-ouv-texte > p.chb-info:nth-of-type(3) « De 62 € à 77 € la nuit · petit-déjeuner de 7 h à 1 » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) « En ce moment, vente à la ferme sur rendez-vous ; l » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) « Vente à la ferme d'avril à septembre, le samedi de » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/la-ferme` — section#debut > div.frm-ouv-texte.conteneur > div.frm-ouv-bas > p.frm-info:nth-of-type(3) « Lieu-dit La Floudière, Vaupillon (Eure-et-Loir) ·  » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/tisanes` — section#debut > div.tis-ouv-texte:nth-of-type(1) > p.tis-info:nth-of-type(4) « 5,75 € les 30 à 40 g · expédition chaque lundi · p » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### élément recouvert (4)

- **élément recouvert** — `/` — ul.chambres-cartes.fx-fini > li.chambre-carte:nth-of-type(1) > div.chambre-carte-texte > p.chambre-prix:nth-of-type(3) « dès 62 € la nuit » — par li.chambre-carte:nth-of-type(1) > div.chambre-carte-texte > h3 > a.lien-carte « Rubus » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.chambres-cartes.fx-fini > li.chambre-carte:nth-of-type(2) > div.chambre-carte-texte > p.chambre-prix:nth-of-type(3) « dès 62 € la nuit » — par li.chambre-carte:nth-of-type(2) > div.chambre-carte-texte > h3 > a.lien-carte « Tilia » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.chambres-cartes.fx-fini > li.chambre-carte:nth-of-type(3) > div.chambre-carte-texte > p.chambre-prix:nth-of-type(3) « dès 72 € la nuit » — par li.chambre-carte:nth-of-type(3) > div.chambre-carte-texte > h3 > a.lien-carte « Borago » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > svg.carte-svg > g.carte-bifurcation:nth-of-type(2) — par section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--bif:nth-of-type(3) « Les Gaudonnières : à droite » _(390×844 normal, 1366×768 normal)_

### premier écran : bouton principal hors de l’écran (5)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-contenu > div.ouv-actions:nth-of-type(2) > a.bouton.bouton--soleil:nth-of-type(1) « Réserver une chambre » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-texte > p:nth-of-type(3) > a.bouton:nth-of-type(1) « Retour à l'accueil » _(844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/chambres` — section#debut > div.chb-ouv-texte > div.chb-ouv-actions > a.bouton « Estimer mon séjour » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p:nth-of-type(2) > a.bouton « Faire une demande » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/tisanes` — section#debut > div.tis-ouv-texte:nth-of-type(1) > p:nth-of-type(3) > a.bouton « Choisir mes tisanes » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### contraste sur image (3)

- **contraste sur image** — `/` — div.ciel:nth-of-type(1) > div.ciel-legende:nth-of-type(2) > p.ciel-coucher:nth-of-type(3) > span « Coucher » — 4.06:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.ciel:nth-of-type(1) > div.ciel-legende:nth-of-type(2) > p.ciel-coucher:nth-of-type(3) > span « Coucher » — 3.49:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.ouv-contenu > p.ouv-sur.masque-ecran-tres-bas:nth-of-type(1) « Micro-ferme bio · Vaupillon, dans le Perche » — 3.98:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — span[data-audit-surimage="0"] ; strong[data-ciel-lever=""] ; .ciel-jour — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/` — span[data-audit-surimage="0"] ; strong[data-ciel-lever=""] ; span[data-audit-surimage="2"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/chambres` — div.conteneur.chb-table-grille > figure.media.chb-table-media > picture > img « Légumes d'hiver du potager sur une table de ferme » — grok/legumes-hiver (4/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/chambres` — div.chambre-images:nth-of-type(1) > figure.media.chambre-grande > picture > img « La chambre Rubus » — chambre-rubus (3/5, faible, 29 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/chambres` — div.chambre-images:nth-of-type(1) > figure.media.chambre-grande > picture > img « La chambre Borago » — chambre-borago (3/5, faible, 29 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/chambres` — div.conteneur.chb-table-grille > figure.media.chb-table-media > picture > img « Légumes d'hiver du potager sur une table de ferme » — grok/legumes-hiver (4/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/chambres` — section#rubus > div.chambre-texte:nth-of-type(2) > p.chambre-plante-titre:nth-of-type(1) « La ronce, en latin » — avec section#rubus > div.chambre-texte:nth-of-type(2) > h2 « Rubus » _(1366×768 normal)_
- **textes qui se chevauchent** — `/chambres` — section#tilia > div.chambre-texte:nth-of-type(2) > p.chambre-plante-titre:nth-of-type(1) « Le tilleul, en latin » — avec section#tilia > div.chambre-texte:nth-of-type(2) > h2 « Tilia » _(1366×768 normal)_
- **textes qui se chevauchent** — `/chambres` — section#borago > div.chambre-texte:nth-of-type(2) > p.chambre-plante-titre:nth-of-type(1) « La bourrache, en latin » — avec section#borago > div.chambre-texte:nth-of-type(2) > h2 « Borago » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--gare:nth-of-type(1) « Gare de La Loupe » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--rail:nth-of-type(5) « Paris-Montparnasse – Le Mans » _(844×390 normal)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) > strong « La Floudière » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-note:nth-of-type(6) « Plan schématique, sans échelle » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-etiquette.carte-etiquette--floudiere:nth-of-type(4) « La Floudière 3 km de la gare » — avec section#debut > div.carte-acces:nth-of-type(2) > p.carte-note:nth-of-type(6) « Plan schématique, sans échelle » _(320×568 sansJs)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/tisanes` — section#debut > div.tis-ouv-texte:nth-of-type(1) > h1.tis-titre « Une quarantaine de plantes, cultivées ici » — haut 438 px, bas 566 px, zone 65–503 px _(320×568 sansJs)_

### transition : élément visible, caché puis réaffiché (flash) (6)

- **transition : élément visible, caché puis réaffiché (flash)** — `/chambres → /tisanes` — section#debut > div.etal > figure.media.etal-a _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/chambres → /tisanes` — figure.media.etal-a > picture > img « Paniers de fleurs de souci et de mauve f » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/chambres → /tisanes` — section#debut > div.etal > figure.media.etal-b _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/chambres → /tisanes` — figure.media.etal-b > picture > img « Pots d'herbes aromatiques séchées » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/chambres → /tisanes` — section#debut > div.etal > figure.media.etal-c _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/chambres → /tisanes` — figure.media.etal-c > picture > img « Sachets de menthe verte, menthe bergamot » _(1366×768 film, 390×844 film)_

### clavier (2)

- **clavier** — `/chambres` — input «  » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/contact` — input «  » — le focus arrive sur un élément caché _(1366×768)_

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

### grille : objet d’ouverture hors du premier écran (2)

- **grille : objet d’ouverture hors du premier écran** — `/` — 50 × 50 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/contact` — 48 × 48 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.roue-visuel > div.roue-photos > figure.media.roue-photo:nth-of-type(4) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#venir > figure.media.fin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/chambres` — section#table > div.conteneur.chb-table-grille > figure.media.chb-table-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/chambres` — section#conditions > figure.media.conditions-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.carte-acces:nth-of-type(2) > p.carte-note:nth-of-type(6) « Plan schématique, sans échelle » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/la-ferme` — section#nuit > figure.media.nuit-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/tisanes` — ol.etapes.fx-fini > li.etape:nth-of-type(3) > figure.media.etape-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (3)

- **section sans visuel** — `/chambres` — section#estimer « Estimer son séjour Votre séjour, en un coup d'œil  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « Votre demande Réserver, commander, demander Trois  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/tisanes` — section#catalogue « Les 35 tisanes Classiques, saisonnières, goûteuses » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### typographie française (2)

- **typographie française** — `/chambres` — section#estimer > form.estimer-outil > div.estimer-total:nth-of-type(2) > p.estimer-detail:nth-of-type(3) « Rubus, 2 nuits, 2 personnes : 67 € la nuit. » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — section#debut > div.ctc-ouv-texte:nth-of-type(1) > p.ctc-info:nth-of-type(3) > span « En ce moment, vente à la ferme sur rendez-vous ; l » — espace insécable manquante avant ou après « ; » _(1366×768 normal)_

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 189 ms (différence 27 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 87 ms (différence 34 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 154 ms (différence 25 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/chambres` — à 66 ms (différence 58 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/chambres` — à 75 ms (différence 49 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/chambres` — écran différent à la même position après rechargement (6.6 %), voir comparaisons/rechargement-chambres-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/tisanes` — écran différent à la même position après rechargement (29.7 %), voir comparaisons/rechargement-tisanes-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/chambres` — span — total : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.sachets-piste — sachets : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/la-ferme` — ul.sachets-piste — herbier : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

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
- Audit rapide : étapes lourdes sur /, /chambres, /contact, /la-ferme, /tisanes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2872 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2710 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2894 ms depuis le premier octet
- Ouverture /la-ferme (1366×768) : 2732 ms depuis le premier octet
- Ouverture /tisanes (1366×768) : 2814 ms depuis le premier octet
- Ouverture / (390×844) : 2884 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2717 ms depuis le premier octet
- Ouverture /contact (390×844) : 2888 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /la-ferme (390×844) : 2731 ms depuis le premier octet
- Ouverture /tisanes (390×844) : 2791 ms depuis le premier octet
- film de l'ouverture /tisanes 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /tisanes 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 357 images d’intro, 26 de voile et 112 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-ferme : aucune section épinglée ou plein écran.
- Tient dans l'écran /tisanes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 501, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 400, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 178, tâche la plus longue 0 ms
- Fluidité /la-ferme 1366×768 (molette) : 0 % d'images lentes sur 325, tâche la plus longue 0 ms
- Fluidité /tisanes 1366×768 (molette) : 0 % d'images lentes sur 460, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1378, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /la-ferme 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /tisanes 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.77 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-ferme : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /tisanes : 0.48 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,parcours
```
