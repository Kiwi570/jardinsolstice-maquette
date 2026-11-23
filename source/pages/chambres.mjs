/* Chambres : ouverture en disque solaire, les trois chambres et leurs tarifs, la table, le calculateur de séjour,
   les conditions, l'appel final. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'chambres', fichier: 'chambres', imagePartage: 'chambres-ouverture-1280.webp' };

const euros = (n) => (Number.isInteger(n) ? `${n} €` : `${n.toFixed(2).replace('.', ',')} €`);

export default (c) => html`
<section class="chb-ouv" id="debut">
  <div class="chb-ouv-texte">
    <p class="surtitre" data-anime="gsap">${c.t('chambres.ouv.sur')}</p>
    <h1 class="chb-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('chambres.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('chambres.ouv.titre2')}</em></span></h1>
    <p class="chb-ouv-intro masque-ecran-bas" data-anime="gsap">${c.t('chambres.ouv.texte')}</p>
    <div class="chb-ouv-actions" data-anime="gsap">
      ${c.lien('chambres', { ancre: 'estimer', classe: 'bouton', texte: c.t('chambres.ouv.action'), attrs: 'data-action-principale' })}
      <ul class="chb-raccourcis">${c.donnees.chambres.map((ch) => html`<li><a href="#${ch.cle}" data-sans-transition>${ch.nom}</a></li>`)}</ul>
    </div>
    <p class="chb-info" data-info-cle data-anime="gsap">${c.t('chambres.ouv.info')}</p>
  </div>
  ${c.media({ nom: 'chambres-ouverture', alt: c.s('chambres.ouv.alt'), cadrage: '55% 50%', cadrageMobile: '50% 45%', priorite: true, classe: 'chb-disque', sizes: '(max-width: 760px) 100vw, 56vw', attrs: 'data-iris-centre data-effet="disque"' })}
</section>

${c.donnees.chambres.map((ch, i) => html`<section class="chambre conteneur${i % 2 ? ' chambre--inverse' : ''}" id="${ch.cle}">
  <div class="chambre-images">
    ${c.media({ nom: ch.image, alt: c.s('accueil.chambres.alt', { nom: ch.nom }), cadrage: ch.cadrage, classe: 'chambre-grande', sizes: '(max-width: 760px) 92vw, 48vw', attrs: 'data-anime="rideau"' })}
    <div class="chambre-vignettes" data-anime="cascade" data-vignettes>${ch.galerie.map((g) => c.media({ nom: g.image, alt: g.alt, classe: 'chambre-vignette', sizes: '(max-width: 760px) 44vw, 22vw' }))}</div>
  </div>
  <div class="chambre-texte">
    <p class="chambre-plante-titre" data-anime>${c.t('chambres.chambre.plante', { plante: ch.plante })}</p>
    <h2 data-anime="lignes">${ch.nom}</h2>
    <p class="chambre-niveau" data-anime>${ch.niveau}${ch.label ? html` <span class="pastille-label">${ch.label}</span>` : ''}</p>
    <p data-anime>${ch.accroche}</p>
    <ul class="chambre-details" data-anime="cascade">${ch.details.map((d) => html`<li>${d}</li>`)}</ul>
    <div class="tarifs" data-anime>
      <h3 class="tarifs-titre">${c.t('chambres.chambre.tarifs')}</h3>
      <dl class="tarifs-tuiles">
        <div><dt>${c.t('chambres.chambre.une')}</dt><dd data-prix>${euros(ch.prix1)}</dd></div>
        <div><dt>${c.t('chambres.chambre.deux')}</dt><dd data-prix>${euros(ch.prix2)}</dd></div>
        <div><dt>${c.t('chambres.chambre.suppCourt')}</dt><dd data-prix>+ ${euros(ch.supplement)}</dd></div>
      </dl>
      <dl class="tarifs-forfaits">${ch.forfaits.map((f) => html`<div><dt>${c.t('chambres.chambre.forfait', { periode: f.periode })}</dt><dd data-prix>${euros(f.prix)}${f.prixPdj ? html`<span class="tarif-pdj">${c.t('chambres.chambre.avecPdj', { prix: euros(f.prixPdj) })}</span>` : ''}</dd></div>`)}</dl>
    </div>
    <p data-anime>${c.lien('contact', { ancre: 'demande', params: `sujet=sejour&chambre=${ch.cle}`, classe: 'bouton', texte: c.t('chambres.chambre.demander', { nom: ch.nom }) })}</p>
  </div>
</section>`)}

<section class="chb-table bande-sombre" id="table">
  <div class="conteneur chb-table-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('chambres.table.sur')}</p>
      <h2 data-anime="lignes">${c.tb('chambres.table.titre')}</h2>
      <div class="chb-table-cols" data-anime="cascade">
        <div>
          <h3>${c.t('chambres.table.pdjTitre')}</h3>
          <p>${c.t('chambres.table.pdjTexte')}</p>
        </div>
        <div>
          <h3>${c.t('chambres.table.assietteTitre')}</h3>
          <p>${c.t('chambres.table.assietteTexte')}</p>
          <p class="chb-table-prix" data-prix><strong>17,50 €</strong> ${c.t('accueil.table.adulte')} · <strong>10 €</strong> ${c.t('chambres.table.enfant')}</p>
          <p>${c.t('chambres.table.boissons')}</p>
        </div>
      </div>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'sujet=table', classe: 'bouton', texte: c.t('accueil.table.reserver') })}</p>
    </div>
    ${c.media({ nom: 'grok/legumes-hiver', alt: c.s('chambres.table.alt'), classe: 'chb-table-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="estimer conteneur" id="estimer">
  <div class="estimer-tete">
    <p class="surtitre" data-anime>${c.t('chambres.estimer.sur')}</p>
    <h2 data-anime="lignes">${c.tb('chambres.estimer.titre')}</h2>
    <p data-anime>${c.t('chambres.estimer.texte')}</p>
  </div>
  <form class="estimer-outil" data-estimer data-anime action="#" novalidate>
    <fieldset class="estimer-chambres">
      <legend>${c.t('chambres.estimer.chambre')}</legend>
      ${c.donnees.chambres.map((ch, i) => html`<label class="choix-chambre"><input type="radio" name="chambre" value="${ch.cle}" data-p1="${ch.prix1}" data-p2="${ch.prix2}" data-sup="${ch.supplement}" data-max="${ch.cle === 'tilia' ? 2 : ch.cle === 'rubus' ? 3 : 5}"${i === 0 ? ' checked' : ''}><img class="choix-vignette" src="/assets/images/${ch.image}-480.webp" alt="" width="48" height="48" loading="lazy"><span><strong>${ch.nom}</strong> ${c.t('chambres.estimer.des', { prix: euros(ch.prix1) })}</span></label>`)}
    </fieldset>
    <div class="estimer-compteurs">
      <div class="compteur-champ"><span id="lib-nuits">${c.t('chambres.estimer.nuits')}</span><div class="compteur-boutons"><button type="button" data-moins="nuits" aria-label="${c.s('chambres.estimer.moinsNuit')}">−</button><output id="v-nuits" aria-labelledby="lib-nuits" data-valeur="nuits">2</output><button type="button" data-plus="nuits" aria-label="${c.s('chambres.estimer.plusNuit')}">+</button></div></div>
      <div class="compteur-champ"><span id="lib-pers">${c.t('chambres.estimer.personnes')}</span><div class="compteur-boutons"><button type="button" data-moins="personnes" aria-label="${c.s('chambres.estimer.moinsPers')}">−</button><output id="v-pers" aria-labelledby="lib-pers" data-valeur="personnes">2</output><button type="button" data-plus="personnes" aria-label="${c.s('chambres.estimer.plusPers')}">+</button></div></div>
      <label class="estimer-option"><input type="checkbox" name="assiette" value="oui"> <span>${c.t('chambres.estimer.assiette')}</span></label>
    </div>
    <div class="estimer-total" aria-live="polite">
      <p class="estimer-total-libelle">${c.t('chambres.estimer.total')}</p>
      <p class="estimer-montant" data-prix><span data-total>134</span> €</p>
      <p class="estimer-detail" data-detail>${c.t('chambres.estimer.detailSansJs')}</p>
      <p class="estimer-note">${c.t('chambres.estimer.note')}</p>
      <a class="bouton bouton--soleil" href="${c.url('contact', 'demande', 'sujet=sejour')}" data-libelle="${c.libelle('contact')}" data-estimer-lien>${c.t('chambres.estimer.envoyer')}</a>
    </div>
  </form>
</section>

<section class="conditions conteneur" id="conditions">
  ${c.media({ nom: 'grok/linge', alt: c.s('chambres.conditions.alt'), classe: 'conditions-media', sizes: '(max-width: 760px) 90vw, 36vw', attrs: 'data-fx="zoom"' })}
  <div>
    <p class="surtitre" data-anime>${c.t('chambres.conditions.sur')}</p>
    <h2 data-anime="lignes">${c.tb('chambres.conditions.titre')}</h2>
    <dl class="conditions-liste" data-anime="cascade">${c.donnees.conditions.map((x) => html`<div><dt>${x.titre}</dt><dd>${x.texte}</dd></div>`)}</dl>
  </div>
</section>

<section class="appel bande-sombre" id="appel">
  <svg class="appel-arc" viewBox="0 0 600 300" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M30 290 A270 270 0 0 1 570 290" stroke="currentColor" stroke-width="2" data-fx-trait/><path d="M0 290 H600" stroke="currentColor" stroke-width="1.5" data-fx-trait/><circle class="appel-soleil" cx="440" cy="64" r="26"/></svg>
  <div class="conteneur appel-texte">
    <h2 data-anime="lignes">${c.tb('chambres.appel.titre')}</h2>
    <p data-anime>${c.t('chambres.appel.texte')}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=sejour', classe: 'bouton', texte: c.t('accueil.fin.reserver') })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('accueil.fin.appeler')} ${c.site.contact.telephone}</a>
    </p>
  </div>
</section>
`;
