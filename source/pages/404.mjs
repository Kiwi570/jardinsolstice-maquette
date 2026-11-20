/* Page 404 aux couleurs du client, avec son image. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-iris-centre data-fx="zoom"' })}
  <div class="introuvable-texte">
    <p class="surtitre" data-anime>404</p>
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p class="masque-ecran-bas" data-anime>${c.t('introuvable.texte')}</p>
    <p data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('tisanes', { classe: 'bouton bouton--contour' })}</p>
    <p class="introuvable-info" data-info-cle data-anime>${c.site.contact.telephone} · ${c.site.contact.email}</p>
  </div>
</section>
`;
