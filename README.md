# Jardin Solstice : maquette

Maquette de démonstration du futur site du Jardin Solstice (GAEC Jardin Solstice, La Floudière, Vaupillon), d'après jardinsolstice.com.
Adresse prévue : https://jardinsolstice-maquette.vercel.app

Direction « Au rythme du soleil » : fond chaux, vert de sauge, soleil bas d'hiver ; titres Fraunces, texte Figtree.
L'accueil calcule chaque jour le lever et le coucher du soleil à Vaupillon, le nombre de jours avant le prochain solstice, la saison en cours (roue de l'année) et le statut des marchés (passés, prochain, à venir).

## Pages

- Accueil : ouverture de saison et soleil du jour, la ferme, les 3 chambres, l'Assiette du jardin, une sélection de tisanes, la roue de l'année, les marchés de fin d'année, la maison qui respire, appel final.
- Chambres : Rubus, Tilia, Borago et leurs tarifs, petit-déjeuner et Assiette du jardin, calculateur de séjour, conditions.
- Tisanes : catalogue des 35 tisanes (filtres, recherche, panier simulé), sirops et autres préparations, du champ à la tasse, points de vente, questions.
- La ferme : Magalie et Sébastien, le jardin, les cultures, la maison et ses nuits noires, questions et engagements.
- Contact : itinéraire depuis la gare de La Loupe, demande en trois étapes (séjour, table, commande, groupe, autre), accès.
- Animations et stages (v2) : programme 2026 marqué « Terminé » automatiquement, déroulé d'une journée en immersion, visites de groupe, stages.
- Aux alentours (v2) : balades, vélo, jardins, patrimoine, loisirs, tables du samedi, bonnes adresses bio, coups de cœur.
- 404.

Pages du site actuel non reprises : On parle de nous, Blog, Marchés et points de vente (repris en partie sur l'accueil et la page Tisanes).

## À fournir par le client (à compléter)

- Mentions légales : éditeur (GAEC Jardin Solstice, SIRET 852 655 877 00011, adresse, responsable de la publication), hébergeur : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (adresse publiée par Vercel, vérifiée le 20 novembre 2026).
- Politique de confidentialité (formulaire de demande, panier).
- Assurances, numéro d'immatriculation de tourisme si les chambres en ont un, taxe de séjour (montant par personne et par nuit).
- Crédits photo : les photos des chambres portent la signature d'un photographe (« David Comm… ») : nom complet à confirmer.
- Crédits des illustrations générées (12 images Grok, mention « Illustration générée » à garder sur le site final).

## Retiré ou remplacé faute d'information

- Heure de départ : le site indique « avant midi » (page des chambres) et « avant 11 h » (conditions). La maquette affiche « avant 11 h, à confirmer à la réservation ». À trancher.
- Deux numéros : 02 37 81 15 82 partout, 07 89 56 77 16 sur la page des points de vente. La maquette n'affiche que le premier. À confirmer.
- Sous-titres des tisanes qui parlent de santé ou de maladie (« pour les hypertendus », « diurétique », « allergies saisonnières », « compagne de l'amincissement », « santé intestinale », « favorise la circulation », « confort articulaire », « pour une bonne nuit », « accompagne le cycle féminin », « pour le moral »…) : retirés. Une denrée alimentaire ne peut pas revendiquer de prévenir ou de soigner une maladie (règlement UE 1169/2011, art. 7.3), et les allégations de santé sur les plantes restent encadrées par le règlement CE 1924/2006. Seuls les sous-titres de goût ou de moment sont gardés (« Au goût de citron », « Au coin du feu ! »…). À valider avec le client.
- Prix des boissons du soir (cidre, bière, vin, jus) : listés sans libellés sur le site, donc non affichés (« en supplément »).
- Prix des sirops, hydrolats, vinaigres, baumes, huiles : non publiés (bon de commande PDF), remplacés par « Prix et disponibilités sur le bon de commande ».
- Animations et stages : le programme 2026 est terminé (marqué « Terminé ») ; aucune date 2027 n'est inventée. Stages : pas de programme publié, la page invite à écrire.
- Aux alentours : seules deux durées figurent sur le site (La Feverole à 10 min, Centre Souffles à 25 min) ; aucune autre distance n'est donnée.
- Durée des forfaits « du lundi au vendredi » et « du lundi au dimanche » : reprise telle quelle, sans nombre de nuits.
- Petit-déjeuner : son prix n'est indiqué que dans les forfaits de Borago.
- Taxe de séjour et périodes de fermeture : absentes du site actuel.

## Corrections faites au passage

« Fêne » → Frêne (Sous-Bois), « escholtzia » → eschscholzia, « dracacéphale » → dracocéphale, « gde » → grande, « camomille all. » → camomille allemande, « Gislaine » → Ghislaine de Féligonde.

## À retirer à la mise en ligne définitive

- La consigne noindex (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`).
- Le panier, le calculateur et la demande simulés (rien n'est envoyé ni payé) : à brancher sur un vrai envoi.
- Les mentions « à compléter » du pied de page, une fois les pages légales écrites.

## À garder

- La mention « Illustration générée » sur les 12 images créées par IA.

## Travailler sur la maquette

Les textes sont dans `donnees/textes/fr.json` et les données dans `donnees/*.json` ; les pages se génèrent avec `node outils/generer.mjs`. Ne jamais modifier les pages `.html` à la main. Audit : `node _audit/audit.mjs` (voir `_audit/README.md`).

## Photos d'origine

Le dossier `recu/` (photos récupérées sur le site actuel, 64 Mo) n'est pas dans le zip : il est dans les zips d'images envoyés le 20 novembre (dossier `jardinsolstice-recu`). Le zip garde les images Grok (`recu/grok/`) et `plan-images.json`, qui dit quelle photo va où.
