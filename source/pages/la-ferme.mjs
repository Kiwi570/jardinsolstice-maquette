/* La ferme : ouverture plein cadre qui s'ouvre comme un horizon, Magalie et Sébastien, le jardin en rangée qui glisse,
   les cultures, la maison qui respire et ses nuits noires, les questions, les engagements. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'la-ferme', fichier: 'la-ferme', imagePartage: 'ferme-ouverture-1280.webp' };

export default (c) => html`
<section class="frm-ouv ecran" id="debut">
  ${c.media({ nom: 'ferme-ouverture', alt: c.s('ferme.ouv.alt'), cadrage: '59% 40%', cadrageMobile: '62% 40%', priorite: true, classe: 'frm-media', sizes: '100vw', attrs: 'data-iris-centre data-effet="horizon"' })}
  <div class="frm-ouv-texte conteneur">
    <p class="surtitre surtitre--clair" data-anime="gsap">${c.t('ferme.ouv.sur')}</p>
    <h1 class="frm-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('ferme.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('ferme.ouv.titre2')}</em></span></h1>
    <div class="frm-ouv-bas" data-anime="gsap">
      <p class="masque-ecran-bas">${c.t('ferme.ouv.texte')}</p>
      <p><a class="bouton bouton--soleil" href="#nous" data-sans-transition data-action-principale>${c.t('ferme.ouv.action')}</a></p>
      <p class="frm-info" data-info-cle>${c.t('ferme.ouv.info')}</p>
    </div>
  </div>
</section>

<section class="nous conteneur" id="nous">
  <div class="nous-tete">
    <p class="surtitre" data-anime>${c.t('ferme.nous.sur')}</p>
    <h2 data-anime="lignes">${c.tb('ferme.nous.titre')}</h2>
    <p data-anime>${c.t('ferme.nous.texte')}</p>
  </div>
  <div class="nous-grille">
    ${c.media({ nom: 'magalie-sebastien', alt: c.s('accueil.ferme.alt2'), cadrage: '55% 35%', classe: 'nous-photo', sizes: '(max-width: 760px) 80vw, 26vw', attrs: 'data-anime="rideau"' })}
    <div class="nous-personnes" data-anime="cascade">
      <article><h3>Magalie</h3><p class="nous-role">${c.t('ferme.nous.magalieRole')}</p><p>${c.t('ferme.nous.magalie')}</p></article>
      <article><h3>Sébastien</h3><p class="nous-role">${c.t('ferme.nous.sebastienRole')}</p><p>${c.t('ferme.nous.sebastien')}</p></article>
    </div>
    ${c.media({ nom: 'abeilles', alt: c.s('ferme.nous.altAbeilles'), classe: 'nous-abeilles', sizes: '(max-width: 760px) 80vw, 24vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="jardin bande-sombre" id="jardin">
  <div class="conteneur bande-tete">
    <p class="surtitre" data-anime>${c.t('ferme.jardin.sur')}</p>
    <h2 data-anime="lignes">${c.tb('ferme.jardin.titre')}</h2>
    <p data-anime>${c.t('ferme.jardin.texte')}</p>
  </div>
  <div class="sachets herbier" data-sachets tabindex="0" role="region" aria-label="${c.s('ferme.jardin.region')}">
    <ul class="sachets-piste" data-galerie data-effet="herbier">${c.donnees.jardin.map((j) => html`<li class="planche-herbier" data-fx="vitesse" data-fx-force="2">
      ${c.media({ nom: j.image, alt: j.titre, classe: 'planche-media', sizes: '(max-width: 760px) 70vw, 22vw' })}
      <h3>${j.titre}</h3><p>${j.texte}</p></li>`)}</ul>
  </div>
</section>

<section class="cultures conteneur" id="cultures">
  <div class="cultures-texte">
    <p class="surtitre" data-anime>${c.t('ferme.cultures.sur')}</p>
    <h2 data-anime="lignes">${c.tb('ferme.cultures.titre')}</h2>
    <p data-anime>${c.t('ferme.cultures.texte')}</p>
    <ul class="cultures-chiffres" data-anime="cascade">${c.donnees.cultures.map((x) => html`<li><strong>${x.fort}</strong> ${x.texte}</li>`)}</ul>
    <ul class="cultures-methodes" data-anime="cascade">${c.donnees.methodes.map((m) => html`<li>${m}</li>`)}</ul>
  </div>
  <div class="cultures-images">
    ${c.media({ nom: 'chantier-lasagne', alt: c.s('ferme.cultures.alt1'), classe: 'cultures-a', sizes: '(max-width: 760px) 90vw, 36vw', attrs: 'data-anime="rideau"' })}
    ${c.media({ nom: 'tilleul', alt: c.s('ferme.cultures.alt2'), classe: 'cultures-b', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="maison-detail conteneur" id="maison">
  <div class="maison-detail-tete">
    <p class="surtitre" data-anime>${c.t('ferme.maison.sur')}</p>
    <h2 data-anime="lignes">${c.tb('ferme.maison.titre')}</h2>
    <p data-anime>${c.t('ferme.maison.texte')}</p>
  </div>
  ${c.media({ nom: 'plan-dessine', alt: c.s('ferme.maison.altPlan'), classe: 'plan-dessine', sizes: '(max-width: 760px) 92vw, 48vw', attrs: 'data-fx="zoom"' })}
  <div class="demarche" data-anime="cascade">${c.donnees.demarche.map((g) => html`<div class="demarche-groupe"><h3>${g.titre}</h3><ul>${g.items.map((i) => html`<li>${i}</li>`)}</ul></div>`)}</div>
</section>

<section class="nuit" id="nuit">
  ${c.media({ nom: 'grok/nuit-perche', alt: c.s('ferme.nuit.alt'), classe: 'nuit-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="14"' })}
  <div class="conteneur nuit-texte">
    <h2 data-anime="lignes">${c.tb('ferme.nuit.titre')}</h2>
    <p data-anime>${c.t('ferme.nuit.texte')}</p>
  </div>
</section>

<section class="questions conteneur" id="questions">
  <div>
    <p class="surtitre" data-anime>${c.t('ferme.questions.sur')}</p>
    <h2 data-anime="lignes">${c.tb('ferme.questions.titre')}</h2>
    ${c.donnees.faq.filter((f) => f.page === 'ferme').map((f) => html`<details class="faq-item" data-anime><summary>${f.q}</summary><p>${f.r}</p></details>`)}
    <h3 class="engagements-titre" data-anime>${c.t('ferme.questions.engagements')}</h3>
    <ul class="engagements" data-anime="cascade">${c.donnees.engagements.map((e) => html`<li>${e}</li>`)}</ul>
  </div>
  ${c.media({ nom: 'maison-parc', alt: c.s('ferme.questions.alt'), classe: 'questions-media', sizes: '(max-width: 760px) 90vw, 32vw', attrs: 'data-anime="rideau"' })}
</section>

<section class="appel bande-sombre" id="appel">
  <svg class="appel-arc" viewBox="0 0 600 300" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M30 290 A270 270 0 0 1 570 290" stroke="currentColor" stroke-width="2" data-fx-trait/><path d="M0 290 H600" stroke="currentColor" stroke-width="1.5" data-fx-trait/><circle class="appel-soleil" cx="160" cy="64" r="26"/></svg>
  <div class="conteneur appel-texte">
    <h2 data-anime="lignes">${c.tb('ferme.appel.titre')}</h2>
    <p data-anime>${c.t('ferme.appel.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=groupe', classe: 'bouton', texte: c.t('ferme.appel.groupe') })}
      ${c.lien('chambres', { classe: 'bouton bouton--contour', texte: c.t('ferme.appel.chambres') })}
    </p>
  </div>
</section>
`;
