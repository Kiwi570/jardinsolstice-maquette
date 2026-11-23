/* Tisanes : ouverture en étal de photos, catalogue filtrable avec panier simulé, autres préparations,
   du champ à la tasse, où nous trouver, questions, appel final. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'tisanes', fichier: 'tisanes', imagePartage: 'tisanes-ouverture-1280.webp' };

const euros = (n) => (Number.isInteger(n) ? `${n} €` : `${n.toFixed(2).replace('.', ',')} €`);

export default (c) => html`
<section class="tis-ouv" id="debut">
  <div class="tis-ouv-texte">
    <p class="surtitre" data-anime="gsap">${c.t('tisanes.ouv.sur')}</p>
    <h1 class="tis-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('tisanes.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('tisanes.ouv.titre2')}</em></span></h1>
    <p class="masque-ecran-bas" data-anime="gsap">${c.t('tisanes.ouv.texte')}</p>
    <p data-anime="gsap"><a class="bouton" href="#catalogue" data-sans-transition data-action-principale>${c.t('tisanes.ouv.action')}</a></p>
    <p class="tis-info" data-info-cle data-anime="gsap">${c.t('tisanes.ouv.info')}</p>
  </div>
  <div class="etal" data-etal>
    ${c.media({ nom: 'tisanes-ouverture', alt: c.s('tisanes.ouv.alt'), cadrage: '50% 62%', priorite: true, classe: 'etal-a', sizes: '(max-width: 760px) 70vw, 30vw', attrs: 'data-iris-centre data-effet="etal"' })}
    ${c.media({ nom: 'produit-aromates', alt: c.s('tisanes.ouv.alt2'), classe: 'etal-b', sizes: '(max-width: 760px) 40vw, 18vw', attrs: 'data-effet="etal"' })}
    ${c.media({ nom: 'famille-simples', alt: c.s('tisanes.ouv.alt3'), classe: 'etal-c', sizes: '(max-width: 760px) 40vw, 18vw', attrs: 'data-effet="etal"' })}
  </div>
</section>

<section class="catalogue conteneur" id="catalogue" data-catalogue>
  <div class="catalogue-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('tisanes.cat.sur')}</p>
      <h2 data-anime="lignes">${c.tb('tisanes.cat.titre')}</h2>
    </div>
    <div class="catalogue-intro">
      <svg class="brin" viewBox="0 0 120 120" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M20 110 C 40 80, 60 50, 100 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M45 74 C 30 66, 22 52, 24 40 C 38 46, 46 58, 45 74 Z M60 56 C 74 52, 84 40, 86 28 C 72 30, 62 42, 60 56 Z M74 38 C 64 30, 60 20, 62 10 C 72 16, 76 26, 74 38 Z" stroke="currentColor" stroke-width="2"/></svg>
      <p data-anime>${c.t('tisanes.cat.texte')}</p>
    </div>
  </div>
  <div class="catalogue-outils" data-anime>
    <div class="filtres" role="group" aria-label="${c.s('tisanes.cat.filtrer')}">
      <button type="button" class="filtre" data-filtre="toutes" aria-pressed="true">${c.t('tisanes.cat.toutes')} <span>${c.donnees.tisanes.liste.length}</span></button>
      ${Object.entries(c.donnees.tisanes.familles).map(([k, f]) => html`<button type="button" class="filtre" data-filtre="${k}" aria-pressed="false">${f.nom} <span>${c.donnees.tisanes.liste.filter((t) => t.famille === k).length}</span></button>`)}
    </div>
    <div class="catalogue-droite">
    <div class="recherche champ"><label for="recherche-tisane">${c.t('tisanes.cat.chercher')}</label><input id="recherche-tisane" type="search" autocomplete="off" placeholder="${c.s('tisanes.cat.exemple')}" data-recherche></div>
    <button type="button" class="piocher" data-piocher hidden><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" stroke-width="1.8"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg><span>${c.t('tisanes.cat.piocher')}</span></button>
    </div>
  </div>
  <p class="catalogue-vide" data-vide hidden>${c.t('tisanes.cat.vide')}</p>
  <ul class="grille-tisanes" data-anime="cascade" data-grille-tisanes data-grille="retour">
    ${c.donnees.tisanes.liste.map((t) => {
      const f = c.donnees.tisanes.familles[t.famille];
      return html`<li class="tisane" data-famille="${t.famille}" data-cle="${t.cle}" data-nom="${t.nom}" data-plantes="${t.plantes}" data-prix-unitaire="${f.prix}">
        <p class="tisane-famille">${f.nom}</p>
        <h3 class="tisane-nom">${t.nom}</h3>
        ${t.note ? html`<p class="tisane-note">${t.note}</p>` : ''}
        ${t.famille !== 'simples' ? html`<p class="tisane-plantes">${t.plantes}</p>` : html`<p class="tisane-plantes">${c.t('tisanes.cat.simple')}</p>`}
        <div class="tisane-pied"><p class="tisane-prix" data-prix>${euros(f.prix)} <span>· ${f.poids}</span></p><button type="button" class="tisane-ajout" data-ajouter="${t.cle}" aria-label="${c.s('tisanes.cat.ajouterNom', { nom: t.nom })}">${c.t('tisanes.cat.ajouter')}</button></div>
      </li>`;
    })}
  </ul>
  <p class="catalogue-plus" data-catalogue-plus hidden><button type="button" class="bouton bouton--contour" data-voir-plus>${c.t('tisanes.cat.voirTout')}</button></p>
  <p class="catalogue-mention" data-anime>${c.t('tisanes.cat.mention')}</p>
</section>

<button type="button" class="panier-bouton" data-panier-bouton aria-controls="panier" aria-expanded="false" hidden><span class="panier-pastille" data-panier-nombre>0</span> <span>${c.t('tisanes.panier.bouton')}</span> <strong data-panier-total-bouton>0 €</strong></button>
<div class="panier" id="panier" data-panier role="dialog" aria-modal="true" aria-labelledby="panier-titre" data-recouvrement hidden>
  <div class="panier-fond" data-panier-fermer></div>
  <div class="panier-tiroir">
    <div class="panier-tete"><h2 id="panier-titre">${c.t('tisanes.panier.titre')}</h2><button type="button" class="panier-fermer" data-panier-fermer>${c.t('commun.fermer')}</button></div>
    <ul class="panier-liste" data-panier-liste></ul>
    <p class="panier-vide" data-panier-vide>${c.t('tisanes.panier.vide')}</p>
    <dl class="panier-calcul">
      <div><dt>${c.t('tisanes.panier.sousTotal')}</dt><dd data-prix data-panier-sous-total>0 €</dd></div>
      <div><dt>${c.t('tisanes.panier.port')}</dt><dd data-prix data-panier-port>6 €</dd></div>
      <div class="panier-total"><dt>${c.t('tisanes.panier.total')}</dt><dd data-prix data-panier-total>0 €</dd></div>
    </dl>
    <p class="panier-message" data-panier-message aria-live="polite"></p>
    <a class="bouton" href="${c.url('contact', 'demande', 'sujet=commande')}" data-libelle="${c.libelle('contact')}" data-panier-commander>${c.t('tisanes.panier.commander')}</a>
    <p class="panier-note">${c.t('tisanes.panier.note')}</p>
  </div>
</div>

<section class="produits bande-sombre" id="produits">
  <div class="conteneur">
    <div class="bande-tete">
      <p class="surtitre" data-anime>${c.t('tisanes.produits.sur')}</p>
      <h2 data-anime="lignes">${c.tb('tisanes.produits.titre')}</h2>
      <p data-anime>${c.t('tisanes.produits.texte')}</p>
    </div>
    <ul class="produits-grille" data-anime="cascade">${c.donnees.produits.map((p) => html`<li class="produit">
      ${c.media({ nom: p.image, alt: p.nom, classe: 'produit-media', sizes: '(max-width: 760px) 44vw, 26vw' })}
      <h3>${p.nom}</h3><p>${p.texte}</p></li>`)}</ul>
  </div>
</section>

<section class="champ-tasse conteneur" id="champ">
  <div class="bande-tete">
    <p class="surtitre" data-anime>${c.t('tisanes.champ.sur')}</p>
    <h2 data-anime="lignes">${c.tb('tisanes.champ.titre')}</h2>
  </div>
  <svg class="champ-trait" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" aria-hidden="true" data-fx="trace"><path d="M10 40 C 200 0, 400 60, 600 30 S 1000 0, 1190 34" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
  <ol class="etapes" data-anime="cascade">${c.donnees.etapes.map((e, i) => html`<li class="etape">
    ${c.media({ nom: e.image, alt: e.alt, classe: 'etape-media', sizes: '(max-width: 760px) 80vw, 22vw' })}
    <p class="etape-num">${i + 1}</p><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}</ol>
</section>

<section class="trouver conteneur" id="trouver">
  <div>
    <p class="surtitre" data-anime>${c.t('tisanes.trouver.sur')}</p>
    <h2 data-anime="lignes">${c.tb('tisanes.trouver.titre')}</h2>
    <div class="trouver-blocs" data-anime="cascade">
      <div><h3>${c.t('accueil.marches.chardonTitre')}</h3><p>${c.t('accueil.marches.chardonTexte')}</p></div>
      <div><h3>${c.t('accueil.marches.fermeTitre')}</h3><p>${c.t('tisanes.trouver.ferme')}</p></div>
      <div><h3>${c.t('tisanes.trouver.marchesTitre')}</h3><p data-marches-resume>${c.t('tisanes.trouver.marches')}</p></div>
    </div>
    <h3 class="trouver-sous" data-anime>${c.t('tisanes.trouver.revendeurs')}</h3>
    <div class="revendeurs" data-anime="cascade">${c.donnees.revendeurs.map((z) => html`<details class="zone"><summary>${z.zone} <span>${z.lieux.length}</span></summary><ul>${z.lieux.map((l) => html`<li>${l}</li>`)}</ul></details>`)}</div>
  </div>
  ${c.media({ nom: 'le-chardon', alt: c.s('tisanes.trouver.alt'), classe: 'trouver-media', sizes: '(max-width: 760px) 90vw, 34vw', attrs: 'data-fx="parallaxe"' })}
</section>

<section class="questions conteneur" id="questions">
  <div>
    <p class="surtitre" data-anime>${c.t('tisanes.questions.sur')}</p>
    <h2 data-anime="lignes">${c.tb('tisanes.questions.titre')}</h2>
    ${c.donnees.faq.filter((f) => f.page === 'tisanes').map((f) => html`<details class="faq-item" data-anime><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
  ${c.media({ nom: 'produit-hydrolats', alt: c.s('tisanes.questions.alt'), classe: 'questions-media', sizes: '(max-width: 760px) 90vw, 32vw', attrs: 'data-anime="rideau"' })}
</section>

<section class="fin fin--photo" id="commander">
  ${c.media({ nom: 'famille-gouteuses', alt: c.s('tisanes.fin.alt'), cadrage: '50% 40%', classe: 'fin-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="fin-texte conteneur">
    <h2 data-anime="lignes">${c.tb('tisanes.fin.titre')}</h2>
    <p data-anime>${c.t('tisanes.fin.texte')}</p>
    <p class="fin-actions" data-anime>
      <a class="bouton bouton--soleil" href="#catalogue" data-sans-transition>${c.t('tisanes.fin.panier')}</a>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=commande', classe: 'bouton bouton--contour', texte: c.t('tisanes.fin.ecrire') })}
    </p>
  </div>
</section>
`;
