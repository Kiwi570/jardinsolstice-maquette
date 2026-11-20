/* Aux alentours : le bocage en plein cadre avec une brume qui glisse, puis balades, vélo, jardins,
   patrimoine, loisirs, tables et bonnes adresses du Perche, d'après la page du site actuel. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'alentours', fichier: 'alentours', imagePartage: 'grok/bocage-1280.webp' };

export default (c) => html`
<section class="ale-ouv ecran" id="debut" data-boucle-css>
  ${c.media({ nom: 'grok/bocage', alt: c.s('alentours.ouv.alt'), cadrage: '50% 60%', priorite: true, classe: 'ale-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
  <div class="brume" aria-hidden="true" data-effet="brume"></div>
  <div class="ale-ouv-texte conteneur">
    <p class="surtitre surtitre--clair" data-anime="gsap">${c.t('alentours.ouv.sur')}</p>
    <h1 class="ale-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('alentours.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('alentours.ouv.titre2')}</em></span></h1>
    <p class="masque-ecran-bas ale-intro" data-anime="gsap">${c.t('alentours.ouv.texte')}</p>
    <ul class="ale-ancres" data-anime="gsap">${c.donnees.alentours.map((r, i) => html`<li><a href="#${r.cle}" data-sans-transition${i === 0 ? ' data-action-principale' : ''}>${r.nav}</a></li>`)}</ul>
    <p class="ale-info" data-info-cle data-anime="gsap">${c.t('alentours.ouv.info')}</p>
  </div>
</section>

${c.donnees.alentours.map((r, i) => html`<section class="rubrique conteneur${i % 2 ? ' rubrique--inverse' : ''}" id="${r.cle}">
  <div class="rubrique-texte">
    <p class="surtitre" data-anime>${r.nav}</p>
    <h2 data-anime="lignes">${c.tb(`alentours.rubriques.${r.cle}`)}</h2>
    ${r.intro ? html`<p data-anime>${r.intro}</p>` : ''}
    <ul class="lieux" data-anime="cascade">${r.lieux.map((l) => html`<li><strong>${l.nom}</strong>${l.lieu ? html`<span>${l.lieu}</span>` : ''}</li>`)}</ul>
    ${r.lien ? html`<p data-anime>${c.lien(r.lien.page, { ancre: r.lien.ancre || '', params: r.lien.params || '', classe: 'lien-fleche', texte: r.lien.texte })}</p>` : ''}
  </div>
  ${r.image ? c.media({ nom: r.image, alt: r.alt, classe: `rubrique-media${r.petite ? ' rubrique-media--petite' : ''}`, sizes: r.petite ? '(max-width: 760px) 70vw, 24vw' : '(max-width: 760px) 90vw, 40vw', attrs: i % 2 ? 'data-fx="parallaxe"' : 'data-anime="rideau"' }) : r.cle === 'tables' ? html`<svg class="rubrique-dessin" viewBox="0 0 300 300" fill="none" aria-hidden="true" data-visuel data-fx="trace"><circle cx="150" cy="160" r="86" stroke="currentColor" stroke-width="2.5" data-fx-trait/><circle cx="150" cy="160" r="58" stroke="currentColor" stroke-width="1.5" data-fx-trait/><path d="M40 90 V230 M28 90 V130 Q40 146 52 130 V90 M260 90 Q276 130 260 170 V230" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-fx-trait/><circle class="appel-soleil" cx="150" cy="160" r="14"/></svg>` : html`<svg class="rubrique-dessin" viewBox="0 0 300 300" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M20 260 H280" stroke="currentColor" stroke-width="2" data-fx-trait/><path d="M50 260 V150 L100 110 L150 150 V260 M150 260 V90 L200 50 L250 90 V260 M85 260 V200 H115 V260 M185 260 V190 H215 V260 M200 50 V20" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" data-fx-trait/><circle class="appel-soleil" cx="252" cy="36" r="16"/></svg>`}
</section>`)}

<section class="coups bande-sombre" id="coups-de-coeur">
  <div class="conteneur">
    <div class="bande-tete">
      <p class="surtitre" data-anime>${c.t('alentours.coups.sur')}</p>
      <h2 data-anime="lignes">${c.tb('alentours.coups.titre')}</h2>
    </div>
    <ul class="coups-liste" data-anime="cascade">${c.donnees.coupsDeCoeur.map((x) => html`<li>
      ${x.image ? c.media({ nom: x.image, alt: x.alt, classe: 'coup-media', sizes: '(max-width: 760px) 90vw, 26vw' }) : ''}
      <h3>${x.nom}</h3><p class="coup-lieu">${x.lieu}</p><p>${x.texte}</p></li>`)}</ul>
  </div>
</section>

<section class="appel bande-sombre appel--suite" id="appel">
  <svg class="appel-arc" viewBox="0 0 600 300" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M30 290 A270 270 0 0 1 570 290" stroke="currentColor" stroke-width="2" data-fx-trait/><path d="M0 290 H600" stroke="currentColor" stroke-width="1.5" data-fx-trait/><circle class="appel-soleil" cx="480" cy="110" r="26"/></svg>
  <div class="conteneur appel-texte">
    <h2 data-anime="lignes">${c.tb('alentours.appel.titre')}</h2>
    <p data-anime>${c.t('alentours.appel.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=sejour', classe: 'bouton', texte: c.t('accueil.fin.reserver') })}
      ${c.lien('contact', { ancre: 'acces', classe: 'bouton bouton--contour', texte: c.t('alentours.appel.acces') })}
    </p>
  </div>
</section>
`;
