/* Contact : l'itinéraire depuis la gare de La Loupe qui se trace, la demande par étapes (séjour, table, commande,
   groupe, autre) préremplie depuis l'adresse, l'accès, la vente à la ferme. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'plan-dessine-960.webp' };

export default (c) => html`
<section class="ctc-ouv conteneur" id="debut">
  <div class="ctc-ouv-texte">
    <p class="surtitre" data-anime="gsap">${c.t('contact.ouv.sur')}</p>
    <h1 class="ctc-titre"><span class="ouv-ligne-masque"><span class="ouv-ligne">${c.t('contact.ouv.titre1')}</span></span><span class="ouv-ligne-masque"><em class="ouv-ligne">${c.t('contact.ouv.titre2')}</em></span></h1>
    <ul class="ctc-coord masque-ecran-tres-bas" data-anime="gsap">
      <li><span>${c.t('contact.ouv.tel')}</span><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></li>
      <li class="masque-ecran-bas"><span>${c.t('contact.ouv.email')}</span><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></li>
      <li class="masque-ecran-bas"><span>${c.t('contact.ouv.adresse')}</span>${c.site.contact.adresse}</li>
    </ul>
    <p data-anime="gsap"><a class="bouton" href="#demande" data-sans-transition data-action-principale>${c.t('contact.ouv.action')}</a></p>
    <p class="ctc-info" data-info-cle data-anime="gsap"><span data-vente>${c.t('contact.ouv.vente')}</span></p>
  </div>
  <div class="carte-acces" data-effet="itineraire">
    <svg class="carte-svg" viewBox="0 0 520 440" fill="none" role="img" aria-labelledby="carte-titre" data-visuel>
      <title id="carte-titre">${c.t('contact.carte.titre')}</title>
      <path class="carte-rail" d="M10 110 C 120 120, 200 92, 300 104 S 470 90, 512 96"/>
      <path class="carte-route" d="M14 300 C 120 280, 180 230, 236 150 C 252 128, 270 112, 300 104" />
      <path class="carte-route carte-route--d928" d="M300 104 C 330 170, 372 230, 420 286 S 490 372, 510 420"/>
      <path class="carte-chemin" d="M360 218 C 330 236, 300 262, 276 300" />
      <path class="carte-trajet" data-trajet d="M300 104 C 318 142, 340 182, 360 218 C 330 236, 300 262, 276 300" pathLength="1"/>
      <g class="carte-gare" data-repere><circle cx="300" cy="104" r="9"/></g>
      <g class="carte-bifurcation" data-repere><circle cx="360" cy="218" r="6"/></g>
    </svg>
    <span class="carte-floudiere" data-iris-centre="disque"></span>
    <p class="carte-etiquette carte-etiquette--gare" data-repere>${c.t('contact.carte.gare')}</p>
    <p class="carte-etiquette carte-etiquette--d928" data-repere>${c.t('contact.carte.d928')}</p>
    <p class="carte-etiquette carte-etiquette--bif" data-repere>${c.t('contact.carte.bifurcation')}</p>
    <p class="carte-etiquette carte-etiquette--floudiere" data-repere><strong>La Floudière</strong> ${c.t('contact.carte.distance')}</p>
    <p class="carte-etiquette carte-etiquette--rail" data-repere>${c.t('contact.carte.rail')}</p>
    <p class="carte-note">${c.t('contact.carte.note')}</p>
  </div>
</section>

<section class="demande bande-sombre" id="demande">
  <div class="conteneur demande-grille">
    <div class="demande-tete">
      <svg class="demande-arc" viewBox="0 0 240 110" fill="none" aria-hidden="true" data-visuel data-fx="trace"><path d="M10 104 A110 110 0 0 1 230 104" stroke="currentColor" stroke-width="2" data-fx-trait/><path d="M0 104 H240" stroke="currentColor" stroke-width="1.5" data-fx-trait/><circle class="appel-soleil" cx="190" cy="38" r="12"/></svg>
      <p class="surtitre" data-anime>${c.t('contact.demande.sur')}</p>
      <h2 data-anime="lignes">${c.tb('contact.demande.titre')}</h2>
      <p data-anime>${c.t('contact.demande.texte')}</p>
      <ol class="etapes-annonce" data-etapes-annonce data-anime="cascade">
        <li class="est-active">${c.t('contact.demande.e1')}</li><li>${c.t('contact.demande.e2')}</li><li>${c.t('contact.demande.e3')}</li>
      </ol>
      <div class="recap" aria-live="polite" data-anime>
        <p class="recap-titre">${c.t('contact.demande.recap')}</p>
        <p data-recap>${c.t('contact.demande.recapVide')}</p>
      </div>
    </div>
    <form class="formulaire demande-form" data-formulaire data-etapes action="#" novalidate data-anime>
      <fieldset class="etape-form" data-etape="1">
        <legend>${c.t('contact.demande.e1')}</legend>
        <div class="choix-sujets">${c.donnees.sujets.map((s, i) => html`<label class="choix-sujet"><input type="radio" name="sujet" value="${s.cle}"${i === 0 ? ' checked' : ''}><span><strong>${s.titre}</strong>${s.texte}</span></label>`)}</div>
        <button type="button" class="bouton" data-suivant>${c.t('contact.demande.suivant')}</button>
      </fieldset>
      <fieldset class="etape-form" data-etape="2" hidden>
        <legend>${c.t('contact.demande.e2')}</legend>
        <div data-pour="sejour" class="champs-grille">
          <div class="champ"><label for="f-chambre">${c.t('contact.demande.chambre')}</label><select id="f-chambre" name="chambre"><option value="">${c.t('contact.demande.indifferent')}</option>${c.donnees.chambres.map((ch) => html`<option value="${ch.cle}">${ch.nom}</option>`)}</select></div>
          <div class="champ"><label for="f-arrivee">${c.t('contact.demande.arrivee')}</label><input id="f-arrivee" name="arrivee" type="date"></div>
          <div class="champ"><label for="f-nuits">${c.t('contact.demande.nuits')}</label><input id="f-nuits" name="nuits" type="number" min="1" max="21" inputmode="numeric" value="2"></div>
          <div class="champ"><label for="f-personnes">${c.t('contact.demande.personnes')}</label><input id="f-personnes" name="personnes" type="number" min="1" max="6" inputmode="numeric" value="2"></div>
          <label class="estimer-option"><input type="checkbox" name="assiette" value="oui"> <span>${c.t('contact.demande.assiette')}</span></label>
        </div>
        <div data-pour="table" class="champs-grille" hidden>
          <div class="champ"><label for="f-soir">${c.t('contact.demande.soir')}</label><input id="f-soir" name="soir" type="date"></div>
          <div class="champ"><label for="f-adultes">${c.t('contact.demande.adultes')}</label><input id="f-adultes" name="adultes" type="number" min="1" max="12" inputmode="numeric" value="2"></div>
          <div class="champ"><label for="f-enfants">${c.t('contact.demande.enfants')}</label><input id="f-enfants" name="enfants" type="number" min="0" max="10" inputmode="numeric" value="0"></div>
          <div class="champ champ--large"><label for="f-regimes">${c.t('contact.demande.regimes')}</label><input id="f-regimes" name="regimes"></div>
        </div>
        <div data-pour="commande" hidden>
          <p class="commande-recap" data-commande-recap>${c.t('contact.demande.commandeVide')}</p>
          <p>${c.lien('tisanes', { ancre: 'catalogue', classe: 'lien-fleche', texte: c.t('contact.demande.commandeLien') })}</p>
        </div>
        <div data-pour="groupe" class="champs-grille" hidden>
          <div class="champ"><label for="f-groupe">${c.t('contact.demande.groupeNombre')}</label><input id="f-groupe" name="groupe" type="number" min="10" max="30" inputmode="numeric" value="12"></div>
          <div class="champ"><label for="f-date-groupe">${c.t('contact.demande.groupeDate')}</label><input id="f-date-groupe" name="dateGroupe" type="date"></div>
          <p class="champ--large aide">${c.t('contact.demande.groupeAide')}</p>
        </div>
        <div data-pour="autre" hidden><p class="aide">${c.t('contact.demande.autreAide')}</p></div>
        <div class="etape-boutons"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('contact.demande.precedent')}</button><button type="button" class="bouton" data-suivant>${c.t('contact.demande.suivant')}</button></div>
      </fieldset>
      <fieldset class="etape-form" data-etape="3" hidden>
        <legend>${c.t('contact.demande.e3')}</legend>
        <div class="champs-grille">
          <div class="champ"><label for="f-nom">${c.t('contact.demande.nom')}</label><input id="f-nom" name="nom" autocomplete="family-name" required></div>
          <div class="champ"><label for="f-prenom">${c.t('contact.demande.prenom')}</label><input id="f-prenom" name="prenom" autocomplete="given-name"></div>
          <div class="champ"><label for="f-email">${c.t('contact.demande.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
          <div class="champ"><label for="f-tel">${c.t('contact.demande.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
          <div class="champ champ--large"><label for="f-message">${c.t('contact.demande.message')}</label><textarea id="f-message" name="message" rows="4"></textarea></div>
        </div>
        <p class="mention-donnees">${c.t('contact.demande.donnees')} <span class="a-completer">${c.t('commun.confidentialite')} ${c.t('commun.aCompleter')}</span></p>
        <div class="etape-boutons"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('contact.demande.precedent')}</button><button type="submit" class="bouton bouton--soleil">${c.t('contact.demande.envoyer')}</button></div>
      </fieldset>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

<section class="acces conteneur" id="acces">
  <div>
    <p class="surtitre" data-anime>${c.t('contact.acces.sur')}</p>
    <h2 data-anime="lignes">${c.tb('contact.acces.titre')}</h2>
    <dl class="acces-liste" data-anime="cascade">${c.donnees.acces.map((a) => html`<div><dt>${a.titre}</dt><dd>${a.texte}</dd></div>`)}</dl>
  </div>
  <div class="acces-images">
    ${c.media({ nom: 'plan-dessine', alt: c.s('ferme.maison.altPlan'), classe: 'acces-plan', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-anime="rideau"' })}
    ${c.media({ nom: 'contact-maison', alt: c.s('contact.acces.altMaison'), classe: 'acces-maison', sizes: '(max-width: 760px) 60vw, 20vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>
`;
