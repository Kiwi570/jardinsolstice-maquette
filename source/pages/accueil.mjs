/* Accueil : la saison du jour et le soleil réel de Vaupillon (lever, coucher, jours avant le solstice),
   puis la ferme, les chambres, la table, les tisanes, la roue de l'année, les marchés, la maison et l'appel final. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

const euros = (n) => (Number.isInteger(n) ? `${n} €` : `${n.toFixed(2).replace('.', ',')} €`);

export default (c) => html`
<section class="ouv ecran" id="debut" data-boucle-css>
  ${c.media({ nom: 'accueil-ouverture', alt: c.s('accueil.ouv.alt'), cadrage: '30% 45%', cadrageMobile: '40% 40%', priorite: true, classe: 'ouv-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="ouv-contenu">
    <div class="ciel" data-ciel data-effet="soleil">
      <div class="ciel-zone">
      <svg class="ciel-arc" viewBox="0 0 400 200" fill="none" aria-hidden="true">
        <path class="ciel-horizon" d="M0 196 H400"/>
        <path class="ciel-trajet" d="M24 196 A176 176 0 0 1 376 196" pathLength="1"/>
        <path class="ciel-parcouru" d="M24 196 A176 176 0 0 1 376 196" pathLength="1"/>
      </svg>
      <span class="ciel-soleil" data-iris-centre="disque" style="--sx:34%;--sy:30%"></span>
      </div>
      <div class="ciel-legende">
        <p class="ciel-lever"><span>${c.t('accueil.ouv.lever')}</span> <strong data-ciel-lever>–</strong></p>
        <p class="ciel-jour" data-ciel-jour>${c.t('accueil.ouv.jourSansJs')}</p>
        <p class="ciel-coucher"><span>${c.t('accueil.ouv.coucher')}</span> <strong data-ciel-coucher>–</strong></p>
      </div>
    </div>
    <p class="ouv-sur masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.ouv.sur')}</p>
    <h1 class="ouv-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('accueil.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('accueil.ouv.titre2')}</em></span></h1>
    <p class="ouv-texte masque-ecran-bas" data-anime="gsap">${c.t('accueil.ouv.texte')}</p>
    <div class="ouv-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=sejour', classe: 'bouton bouton--soleil', texte: c.t('accueil.ouv.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('tisanes', { classe: 'bouton bouton--contour', texte: c.t('accueil.ouv.action2') })}
    </div>
    <p class="ouv-info" data-info-cle data-anime="gsap"><span class="ouv-info-pastille" aria-hidden="true"></span><span data-solstice>${c.t('accueil.ouv.solstice')}</span></p>
  </div>
</section>

<section class="ferme conteneur" id="ferme">
  <div class="ferme-texte">
    <p class="surtitre" data-anime>${c.t('accueil.ferme.sur')}</p>
    <h2 data-anime="lignes">${c.tb('accueil.ferme.titre')}</h2>
    <p data-anime>${c.t('accueil.ferme.texte1')}</p>
    <p data-anime>${c.t('accueil.ferme.texte2')}</p>
    <ul class="reperes" data-anime="cascade">${c.donnees.reperes.map((r) => html`<li><strong>${r.fort}</strong> ${r.texte}</li>`)}</ul>
    <p data-anime>${c.lien('la-ferme', { classe: 'lien-fleche', texte: c.t('accueil.ferme.lien') })}</p>
  </div>
  <div class="ferme-images">
    ${c.media({ nom: 'accueil-ferme', alt: c.s('accueil.ferme.alt1'), classe: 'ferme-grande', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-fx="parallaxe"' })}
    ${c.media({ nom: 'magalie-sebastien', alt: c.s('accueil.ferme.alt2'), cadrage: '55% 35%', classe: 'ferme-portrait', sizes: '(max-width: 760px) 45vw, 18vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="chambres-bande bande-sombre" id="chambres">
  <div class="conteneur">
    <div class="bande-tete">
      <p class="surtitre" data-anime>${c.t('accueil.chambres.sur')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.chambres.titre')}</h2>
      <p data-anime>${c.t('accueil.chambres.texte')}</p>
    </div>
    <ul class="chambres-cartes" data-anime="cascade">
      ${c.donnees.chambres.map((ch) => html`<li class="chambre-carte" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: ch.image, alt: c.s('accueil.chambres.alt', { nom: ch.nom }), cadrage: ch.cadrage, classe: 'chambre-carte-media', sizes: '(max-width: 760px) 90vw, 30vw' })}
        <div class="chambre-carte-texte">
          <p class="chambre-plante">${ch.plante}</p>
          <h3>${c.lien('chambres', { ancre: ch.cle, texte: ch.nom, classe: 'lien-carte', attrs: 'data-superpose' })}</h3>
          <p>${ch.niveau}</p>
          <p class="chambre-prix" data-prix>${c.t('accueil.chambres.des')} <strong>${euros(ch.prix1)}</strong> ${c.t('accueil.chambres.nuit')}</p>
        </div>
      </li>`)}
    </ul>
    <p class="bande-pied" data-anime>${c.t('accueil.chambres.pied')} ${c.lien('chambres', { classe: 'lien-fleche', texte: c.t('accueil.chambres.lien') })}</p>
  </div>
</section>

<section class="table conteneur" id="table">
  ${c.media({ nom: 'assiette-herbes', alt: c.s('accueil.table.alt'), classe: 'table-media', sizes: '(max-width: 760px) 90vw, 38vw', attrs: 'data-fx="zoom"' })}
  <div class="table-carte">
    <p class="surtitre" data-anime>${c.t('accueil.table.sur')}</p>
    <h2 data-anime="lignes">${c.tb('accueil.table.titre')}</h2>
    <p data-anime>${c.t('accueil.table.texte')}</p>
    <ol class="menu-liste" data-anime="cascade">${c.donnees.assiette.map((m, i) => html`<li><span class="menu-num">${i + 1}</span><span>${m}</span></li>`)}</ol>
    <div class="table-prix" data-anime>
      <p data-prix><strong>17,50 €</strong> ${c.t('accueil.table.adulte')}</p>
      <p data-prix><strong>10 €</strong> ${c.t('accueil.table.enfant')}</p>
    </div>
    <p class="table-jours" data-anime>${c.t('accueil.table.jours')}</p>
    <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=table', classe: 'bouton', texte: c.t('accueil.table.reserver') })}</p>
  </div>
</section>

<section class="tisanes-bande" id="tisanes">
  <div class="conteneur tisanes-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.tisanes.sur')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.tisanes.titre')}</h2>
      <p data-anime>${c.t('accueil.tisanes.texte')}</p>
      <p data-anime>${c.lien('tisanes', { classe: 'bouton', texte: c.t('accueil.tisanes.lien') })}</p>
    </div>
    ${c.media({ nom: 'tisanes-panier', alt: c.s('accueil.tisanes.alt'), classe: 'tisanes-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-anime="rideau"' })}
  </div>
  <div class="sachets" data-sachets tabindex="0" role="region" aria-label="${c.s('accueil.tisanes.region')}">
    <ul class="sachets-piste" data-galerie data-effet="sachets">
      ${c.donnees.tisanesHiver.map((n) => {
        const t = c.donnees.tisanes.liste.find((x) => x.nom === n);
        const f = c.donnees.tisanes.familles[t.famille];
        return html`<li class="sachet" data-fx="vitesse" data-fx-force="2">
          <p class="sachet-famille">${f.nom}</p>
          <p class="sachet-nom">${t.nom}</p>
          ${t.note ? html`<p class="sachet-note">${t.note}</p>` : ''}
          <p class="sachet-plantes">${t.plantes}</p>
          <p class="sachet-prix" data-prix>${euros(f.prix)} <span>· ${f.poids}</span></p>
        </li>`;
      })}
    </ul>
  </div>
</section>

<section class="roue bande-sombre" id="saisons" data-scene data-roue>
  <div class="roue-cadre" data-collant>
    <div class="roue-tete conteneur">
      <p class="surtitre">${c.t('accueil.roue.sur')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.roue.titre')}</h2>
    </div>
    <div class="roue-corps conteneur">
      <div class="roue-visuel" aria-hidden="true">
        <svg class="roue-cercle" viewBox="0 0 400 400" data-roue-cercle data-effet="roue">
          <circle cx="200" cy="200" r="186" class="roue-anneau"/>
          ${[7.5, 10.5, 1.5, 4.5].map((o, i) => html`<circle cx="200" cy="200" r="186" class="roue-arc" pathLength="12" stroke-dasharray="2.9 9.1" stroke-dashoffset="${-(o + 0.05)}" data-roue-arc="${i}"/>`)}
          ${Array.from({ length: 12 }, (_, i) => html`<g transform="rotate(${i * 30} 200 200)"><line x1="200" y1="8" x2="200" y2="26" class="roue-graduation"/><text x="200" y="44" class="roue-mois" text-anchor="middle">${c.donnees.moisCourts[i]}</text></g>`)}
          <g data-roue-aujourdhui><circle cx="200" cy="14" r="9" class="roue-repere"/></g>
        </svg>
        <div class="roue-photos">${c.donnees.saisons.map((s, i) => c.media({ nom: s.image, alt: '', classe: `roue-photo roue-photo--${s.cle}`, sizes: '(max-width: 760px) 70vw, 30vw', attrs: `data-roue-photo="${i}"` }))}</div>
      </div>
      <ol class="roue-saisons">${c.donnees.saisons.map((s, i) => html`<li class="roue-saison" data-roue-saison="${i}" data-saison="${s.cle}">
        <p class="roue-mois-texte">${s.mois}</p>
        <h3>${s.nom}</h3>
        <ul>${s.faits.map((f) => html`<li>${f}</li>`)}</ul>
        <p class="roue-tisanes"><span>${c.t('accueil.roue.tisanes')}</span> ${s.tisanes}</p>
      </li>`)}</ol>
    </div>
  </div>
</section>

<section class="marches conteneur" id="marches">
  <div class="marches-texte">
    <p class="surtitre" data-anime>${c.t('accueil.marches.sur')}</p>
    <h2 data-anime="lignes">${c.tb('accueil.marches.titre')}</h2>
    <ol class="marches-liste" data-anime="cascade" data-marches>${c.donnees.marches.map((m) => html`<li class="marche" data-date="${m.date}">
      <p class="marche-jour">${m.jour}</p>
      <p class="marche-lieu">${m.lieu}<span>${m.ville} · ${m.horaires}</span></p>
      <p class="marche-statut" data-statut></p>
    </li>`)}</ol>
    <div class="marches-fixes" data-anime="cascade">
      <div><h3>${c.t('accueil.marches.chardonTitre')}</h3><p>${c.t('accueil.marches.chardonTexte')}</p></div>
      <div><h3>${c.t('accueil.marches.fermeTitre')}</h3><p>${c.t('accueil.marches.fermeTexte')}</p></div>
    </div>
    <p data-anime>${c.lien('tisanes', { ancre: 'trouver', classe: 'lien-fleche', texte: c.t('accueil.marches.lien') })}</p>
  </div>
  ${c.media({ nom: 'produit-sirops', alt: c.s('accueil.marches.alt'), classe: 'marches-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-fx="parallaxe"' })}
</section>

<section class="maison" id="maison">
  ${c.media({ nom: 'terres-cuites', alt: c.s('accueil.maison.alt'), classe: 'maison-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="maison-texte">
    <p class="surtitre" data-anime>${c.t('accueil.maison.sur')}</p>
    <h2 data-anime="lignes">${c.tb('accueil.maison.titre')}</h2>
    <p data-anime>${c.t('accueil.maison.texte')}</p>
    <ul class="maison-liste" data-anime="cascade">${c.donnees.maison.map((m) => html`<li><strong>${m.titre}</strong><span>${m.texte}</span></li>`)}</ul>
    <p data-anime>${c.lien('la-ferme', { ancre: 'maison', classe: 'lien-fleche', texte: c.t('accueil.maison.lien') })}</p>
  </div>
</section>

<section class="fin fin--photo" id="venir">
  ${c.media({ nom: 'grok/tasse-hiver', alt: c.s('accueil.fin.alt'), cadrage: '60% 50%', cadrageMobile: '50% 70%', classe: 'fin-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="fin-texte conteneur">
    <h2 data-anime="lignes">${c.tb('accueil.fin.titre')}</h2>
    <p data-anime>${c.t('accueil.fin.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=sejour', classe: 'bouton bouton--soleil', texte: c.t('accueil.fin.reserver'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('accueil.fin.appeler')} ${c.site.contact.telephone}</a>
    </p>
  </div>
</section>
`;
