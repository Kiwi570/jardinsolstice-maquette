/* Animations et stages : grand titre puis bandeau qui s'ouvre, le programme 2026 (dates passées marquées),
   le déroulé d'une journée en immersion, les visites de groupe, les stages, l'appel final. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'animations', fichier: 'animations', imagePartage: 'grok/animations-1280.webp' };

export default (c) => html`
<section class="ani-ouv" id="debut">
  <div class="ani-ouv-texte conteneur">
    <p class="surtitre" data-anime="gsap">${c.t('animations.ouv.sur')}</p>
    <h1 class="ani-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('animations.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('animations.ouv.titre2')}</em></span></h1>
    <div class="ani-ouv-bas" data-anime="gsap">
      <p class="masque-ecran-bas">${c.t('animations.ouv.texte')}</p>
      <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=groupe', classe: 'bouton', texte: c.t('animations.ouv.action'), attrs: 'data-action-principale' })}</p>
      <p class="ani-info" data-info-cle>${c.t('animations.ouv.info')}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/animations', alt: c.s('animations.ouv.alt'), cadrage: '50% 55%', priorite: true, classe: 'ani-bandeau', sizes: '100vw', attrs: 'data-iris-centre data-effet="bandeau"' })}
</section>

<section class="programme conteneur" id="programme">
  <div class="bande-tete">
    <p class="surtitre" data-anime>${c.t('animations.prog.sur')}</p>
    <h2 data-anime="lignes">${c.tb('animations.prog.titre')}</h2>
    <p data-anime>${c.t('animations.prog.texte')}</p>
  </div>
  <ul class="ateliers" data-anime="cascade" data-ateliers>${c.donnees.animations.map((a) => html`<li class="atelier" data-fin="${a.fin}">
    ${c.media({ nom: a.image, alt: a.alt, classe: 'atelier-media', sizes: '(max-width: 760px) 90vw, 30vw' })}
    <div class="atelier-texte">
      <p class="atelier-statut" data-statut>${c.t('animations.prog.passe')}</p>
      <h3>${a.titre}</h3>
      <p class="atelier-dates">${a.dates}</p>
      <p>${a.texte}</p>
      <dl class="atelier-infos">
        <div><dt>${c.t('animations.prog.horaires')}</dt><dd>${a.horaires}</dd></div>
        <div><dt>${c.t('animations.prog.tarif')}</dt><dd data-prix>${a.tarif}</dd></div>
        ${a.public ? html`<div><dt>${c.t('animations.prog.public')}</dt><dd>${a.public}</dd></div>` : ''}
      </dl>
    </div>
  </li>`)}</ul>
  <p class="programme-pied" data-anime>${c.t('animations.prog.pied')} ${c.lien('contact', { ancre: 'demande', params: 'sujet=autre', classe: 'lien-fleche', texte: c.t('animations.prog.prevenir') })}</p>
</section>

<section class="journee bande-sombre" id="journee">
  <div class="conteneur">
    <div class="bande-tete">
      <p class="surtitre" data-anime>${c.t('animations.journee.sur')}</p>
      <h2 data-anime="lignes">${c.tb('animations.journee.titre')}</h2>
      <p data-anime>${c.t('animations.journee.texte')}</p>
    </div>
    <div class="journee-corps" data-journee>
      <div class="frise">
        <svg class="frise-trait" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none" aria-hidden="true" data-fx="trace"><path d="M8 20 H1192" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span class="frise-soleil" aria-hidden="true"></span>
        <ol class="frise-etapes" data-anime="cascade">${c.donnees.journee.map((e, i) => html`<li${i === 0 ? ' class="est-active"' : ''}><p class="frise-heure">${e.heure}</p><h3><button type="button" class="frise-bouton" data-etape="${i}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-controls="journee-scene">${e.titre}</button></h3><p>${e.texte}</p></li>`)}</ol>
      </div>
      <div class="journee-scene" id="journee-scene">
        ${c.donnees.journee.map((e, i) => c.media({ nom: e.image, alt: e.alt, cadrage: e.cadrage, classe: `journee-vue${i === 0 ? ' est-active' : ''}`, sizes: '(max-width: 900px) 92vw, 80vw', attrs: `data-vue="${i}"` }))}
      </div>
    </div>
  </div>
</section>

<section class="groupes conteneur" id="groupes">
  ${c.media({ nom: 'groupe-jardin', alt: c.s('animations.groupes.alt'), classe: 'groupes-media', sizes: '(max-width: 760px) 90vw, 46vw', attrs: 'data-fx="zoom"' })}
  <div>
    <p class="surtitre" data-anime>${c.t('animations.groupes.sur')}</p>
    <h2 data-anime="lignes">${c.tb('animations.groupes.titre')}</h2>
    <p data-anime>${c.t('animations.groupes.texte')}</p>
    <p class="groupes-prix" data-prix data-anime><strong>50 €</strong> ${c.t('animations.groupes.prix')}</p>
    <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=groupe', classe: 'bouton', texte: c.t('animations.groupes.action') })}</p>
  </div>
</section>

<section class="stages conteneur" id="stages">
  <div>
    <p class="surtitre" data-anime>${c.t('animations.stages.sur')}</p>
    <h2 data-anime="lignes">${c.tb('animations.stages.titre')}</h2>
    <p data-anime>${c.t('animations.stages.texte')}</p>
    <ul class="stages-liste" data-anime="cascade">${c.donnees.stages.map((s) => html`<li>${s}</li>`)}</ul>
    <p data-anime>${c.t('animations.stages.dates')}</p>
  </div>
  ${c.media({ nom: 'tilleul', alt: c.s('ferme.cultures.alt2'), classe: 'stages-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-anime="rideau"' })}
</section>

<section class="appel bande-sombre" id="appel">
  <svg class="appel-arc" viewBox="0 0 600 300" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M30 290 A270 270 0 0 1 570 290" stroke="currentColor" stroke-width="2" data-fx-trait/><path d="M0 290 H600" stroke="currentColor" stroke-width="1.5" data-fx-trait/><circle class="appel-soleil" cx="300" cy="22" r="26"/></svg>
  <div class="conteneur appel-texte">
    <h2 data-anime="lignes">${c.tb('animations.appel.titre')}</h2>
    <p data-anime>${c.t('animations.appel.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=autre', classe: 'bouton', texte: c.t('animations.appel.prevenir') })}
      ${c.lien('chambres', { classe: 'bouton bouton--contour', texte: c.t('animations.appel.chambres') })}
    </p>
  </div>
</section>
`;
