/* Parcours propres au Jardin Solstice : calculateur de séjour, panier (deux onglets, donnée abîmée),
   filtres et recherche des tisanes, demande préremplie depuis l'adresse. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('1366×768') });
  try {
    /* Calculateur : Borago, 3 nuits, 3 personnes = (77 + 15) × 3 = 276 €. */
    await page.goto(BASE + '/chambres#estimer', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('input[name="chambre"][value="borago"]').check();
    await page.locator('[data-plus="nuits"]').click();
    await page.locator('[data-plus="personnes"]').click();
    await attendre(900);
    const total = await page.evaluate(() => parseFloat(document.querySelector('[data-total]').textContent.replace(/\s/g, '').replace(',', '.')));
    if (Math.abs(total - 276) > 0.005) R.echec('calculateur de séjour', `total affiché ${total} au lieu de 276`, { page: '/chambres', taille: '1366×768' });
    const lien = await page.locator('[data-estimer-lien]').getAttribute('href');
    if (!/chambre=borago/.test(lien) || !/nuits=3/.test(lien)) R.echec('calculateur de séjour', `lien de demande sans les choix : ${lien}`, { page: '/chambres' });

    /* Panier : 3 sachets à 5,75 € = 17,25 € + 6 € de port = 23,25 €. */
    await page.goto(BASE + '/tisanes', { waitUntil: 'load' });
    await attendrePret(page);
    await page.evaluate(() => localStorage.removeItem('jardinsolstice:panier'));
    await page.reload({ waitUntil: 'load' });
    await attendrePret(page);
    for (let i = 0; i < 3; i++) { await page.locator('[data-ajouter="coup-de-froid"]').click(); await attendre(150); }
    const t = await page.evaluate(() => document.querySelector('[data-panier-total]').textContent.replace(/\s/g, ''));
    if (t !== '23,25€') R.echec('panier', `total ${t} au lieu de 23,25 €`, { page: '/tisanes', taille: '1366×768' });
    const autre = await ctx.newPage();
    await autre.goto(BASE + '/tisanes', { waitUntil: 'load' });
    await attendrePret(autre);
    await page.locator('[data-ajouter="festive"]').click();
    await attendre(400);
    const n = await autre.evaluate(() => document.querySelector('[data-panier-nombre]').textContent.trim());
    if (n !== '4') R.echec('panier', `l'autre onglet affiche ${n} sachets au lieu de 4`, { page: '/tisanes' });
    await autre.close();
    await page.evaluate(() => localStorage.setItem('jardinsolstice:panier', '{abîmé'));
    await page.reload({ waitUntil: 'load' });
    if ((await attendrePret(page)) === 'jamais-pret') R.echec('panier', 'une donnée abîmée bloque le site', { page: '/tisanes' });
    const n2 = await page.evaluate(() => document.querySelector('[data-panier-nombre]').textContent.trim());
    if (n2 !== '0') R.echec('panier', `donnée abîmée non nettoyée (${n2})`, { page: '/tisanes' });

    /* Filtres et recherche. */
    await page.locator('[data-filtre="saisonnieres"]').click();
    await attendre(500);
    const vis = await page.evaluate(() => [...document.querySelectorAll('.tisane')].filter((c) => !c.hidden).length);
    if (vis !== 4) R.echec('filtres', `${vis} tisanes saisonnières affichées au lieu de 4`, { page: '/tisanes' });
    if (!/famille=saisonnieres/.test(page.url())) R.echec('filtres', 'le filtre n’est pas gardé dans l’adresse', { page: '/tisanes' });
    await page.locator('[data-filtre="toutes"]').click();
    await page.locator('[data-recherche]').fill('Tilleuls');
    await attendre(500);
    const tilleul = await page.evaluate(() => [...document.querySelectorAll('.tisane')].filter((c) => !c.hidden).length);
    if (tilleul < 5) R.echec('recherche', `« Tilleuls » ne trouve que ${tilleul} tisanes`, { page: '/tisanes' });

    /* Demande préremplie depuis l'adresse. */
    await page.goto(BASE + '/contact?sujet=table#demande', { waitUntil: 'load' });
    await attendrePret(page);
    const coche = await page.locator('input[name="sujet"][value="table"]').isChecked();
    if (!coche) R.echec('demande', 'le sujet « table » n’est pas prérempli', { page: '/contact' });
  } finally { await ctx.close(); }
}
