/* Effets propres au Jardin Solstice. Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les mesures et la bibliothèque d'effets (posés par attributs dans les pages).
   Effets du plan : soleil (arc du jour réel à Vaupillon), roue (roue de l'année), sachets (rangée de tisanes),
   disque (ouverture des Chambres), total (calculateur de séjour), itineraire (accès depuis La Loupe),
   etal (ouverture des Tisanes), horizon (ouverture de La ferme). */
import { demarrer, versObjet, quand } from './socle/index.js?v=3';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const html = document.documentElement;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const LIEU = { lat: 48.4611, lon: 0.9958, fuseau: 'Europe/Paris' };

/* ---------- Soleil du jour (équation du lever du soleil, précision de l'ordre de la minute) ---------- */
function soleilDuJour(date = new Date()) {
  const rad = Math.PI / 180;
  const J = date.getTime() / 86400000 + 2440587.5;
  const n = Math.round(J - 2451545.0009 - LIEU.lon / 360);
  const Jetoile = n + 2451545.0009 - LIEU.lon / 360;
  const M = (357.5291 + 0.98560028 * (Jetoile - 2451545)) % 360;
  const C = 1.9148 * Math.sin(M * rad) + 0.02 * Math.sin(2 * M * rad) + 0.0003 * Math.sin(3 * M * rad);
  const L = (M + C + 180 + 102.9372) % 360;
  const Jtransit = Jetoile + 0.0053 * Math.sin(M * rad) - 0.0069 * Math.sin(2 * L * rad);
  const decl = Math.asin(Math.sin(L * rad) * Math.sin(23.4397 * rad));
  const cosH = (Math.sin(-0.833 * rad) - Math.sin(LIEU.lat * rad) * Math.sin(decl)) / (Math.cos(LIEU.lat * rad) * Math.cos(decl));
  const H = Math.acos(Math.max(-1, Math.min(1, cosH))) / rad;
  const versDate = (j) => new Date((j - 2440587.5) * 86400000);
  return { lever: versDate(Jtransit - H / 360), coucher: versDate(Jtransit + H / 360) };
}
const heure = (d) => {
  const [h, m] = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: LIEU.fuseau, hourCycle: 'h23' }).format(d).split(':');
  return `${+h} h ${m}`;
};
const jourIso = (d) => new Intl.DateTimeFormat('en-CA', { timeZone: LIEU.fuseau, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
const SOLSTICES = [['2026-12-21', 'hiver'], ['2027-06-21', 'été'], ['2027-12-22', 'hiver'], ['2028-06-20', 'été'], ['2028-12-21', 'hiver'], ['2029-06-21', 'été'], ['2029-12-21', 'hiver']];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

let ciel = null;
function preparerSoleil() {
  const el = $('[data-ciel]');
  if (!el) return;
  const maintenant = new Date();
  const { lever, coucher } = soleilDuJour(maintenant);
  const duree = (coucher - lever) / 60000;
  $('[data-ciel-lever]', el).textContent = heure(lever);
  $('[data-ciel-coucher]', el).textContent = heure(coucher);
  const nuit = maintenant < lever || maintenant > coucher;
  let frac = (maintenant - lever) / (coucher - lever);
  frac = Math.max(0.04, Math.min(0.96, nuit ? (maintenant < lever ? 0.04 : 0.96) : frac));
  const jour = `${Math.floor(duree / 60)} h ${String(Math.round(duree % 60)).padStart(2, '0')} de jour`;
  $('[data-ciel-jour]', el).textContent = nuit ? `Nuit · ${jour} aujourd'hui` : jour;
  /* Position sur l'arc (repère du SVG 400 × 200, centre 200;196, rayon 176), en % de la boîte du ciel. */
  const a = Math.PI * (1 - frac);
  const x = 200 + 176 * Math.cos(a), y = 196 - 176 * Math.sin(a);
  const soleil = $('.ciel-soleil', el);
  soleil.style.setProperty('--sx', `${(x / 400) * 100}%`);
  soleil.style.setProperty('--sy', `${(y / 200) * 100}%`);
  soleil.classList.toggle('est-nuit', nuit);
  el.style.setProperty('--parcouru', String(nuit ? (maintenant < lever ? 0 : 1) : frac));
  /* Prochain solstice, compté en jours de calendrier à Vaupillon. */
  const auj = jourIso(maintenant);
  const prochain = SOLSTICES.find(([d]) => d >= auj);
  const info = $('[data-solstice]');
  if (prochain && info) {
    const jours = Math.round((Date.parse(prochain[0]) - Date.parse(auj)) / 86400000);
    const [, mm, jj] = prochain[0].split('-');
    const quand = `le ${+jj} ${MOIS[+mm - 1]}`;
    info.textContent = jours === 0 ? `Aujourd'hui, solstice d'${prochain[1]}` : `Solstice d'${prochain[1]} dans ${jours} jour${jours > 1 ? 's' : ''}, ${quand}`;
  }
  ciel = { el, frac: nuit ? (maintenant < lever ? 0 : 1) : frac, pos: frac, nuit, lever, coucher, texteJour: $('[data-ciel-jour]', el).textContent };
}

/* Le soleil se prend à la main : glissé le long de l'arc (ou flèches du clavier), il donne l'heure,
   éclaire la photo comme le soleil à ce moment-là, puis revient à sa place réelle. */
function soleilManipulable() {
  if (!ciel || !gsap) return;
  const { el, lever, coucher } = ciel;
  const s = $('.ciel-soleil', el), zone = $('.ciel-zone', el), ouv = el.closest('.ouv'), lueur = $('.ouv-lueur', ouv), jour = $('[data-ciel-jour]', el);
  if (!s || !zone || !ouv) return;
  const ASTUCE = 'Faites glisser le soleil';
  s.classList.add('est-manipulable');
  s.setAttribute('role', 'slider');
  s.setAttribute('tabindex', '0');
  s.setAttribute('aria-label', 'Soleil du jour à Vaupillon : faites-le glisser pour parcourir la journée');
  s.setAttribute('aria-valuemin', '0');
  s.setAttribute('aria-valuemax', '100');
  s.dataset.astuce = ASTUCE;
  const etat = { f: ciel.pos };
  let retour = null;
  const placer = (f, manipule) => {
    f = Math.max(0, Math.min(1, f));
    etat.f = f;
    const a = Math.PI * (1 - f), x = 200 + 176 * Math.cos(a), y = 196 - 176 * Math.sin(a);
    s.style.setProperty('--sx', `${(x / 400) * 100}%`);
    s.style.setProperty('--sy', `${(y / 200) * 100}%`);
    if (manipule) el.style.setProperty('--parcouru', String(f));
    const h = heure(new Date(lever.getTime() + f * (coucher - lever)));
    s.setAttribute('aria-valuenow', String(Math.round(f * 100)));
    s.setAttribute('aria-valuetext', `Soleil à ${h}`);
    if (!manipule) return;
    s.classList.remove('est-nuit');
    s.dataset.astuce = `Soleil à ${h}`;
    if (jour) jour.textContent = `Soleil à ${h}`;
    if (lueur) {
      const rz = zone.getBoundingClientRect(), ro = ouv.getBoundingClientRect();
      lueur.style.setProperty('--lx', `${((rz.left + (x / 400) * rz.width - ro.left) / ro.width) * 100}%`);
      lueur.style.setProperty('--ly', `${((rz.top + (y / 200) * rz.height - ro.top) / ro.height) * 100}%`);
      lueur.style.opacity = String(0.55 + 0.45 * (1 - Math.sin(Math.PI * f)));
    }
  };
  const lacher = () => {
    if (retour) retour.kill();
    retour = gsap.to(etat, {
      f: ciel.pos, duration: 1.6, delay: 1.2, ease: 'elastic.out(1, 0.7)',
      onUpdate: () => placer(etat.f, true),
      onComplete: () => {
        placer(ciel.pos, false);
        el.style.setProperty('--parcouru', String(ciel.frac));
        s.classList.toggle('est-nuit', ciel.nuit);
        s.dataset.astuce = ASTUCE;
        if (jour) jour.textContent = ciel.texteJour;
        if (lueur) gsap.to(lueur, { opacity: 0, duration: 0.8 });
      },
    });
  };
  const depuisPointeur = (e) => {
    const r = zone.getBoundingClientRect();
    const X = ((e.clientX - r.left) / r.width) * 400, Y = ((e.clientY - r.top) / r.height) * 200;
    let a = Math.atan2(196 - Y, X - 200);
    if (a < 0) a = X < 200 ? Math.PI : 0;
    placer(1 - a / Math.PI, true);
  };
  s.addEventListener('pointerdown', (e) => {
    if (retour) retour.kill();
    s.setPointerCapture(e.pointerId);
    s.classList.add('est-tenu');
    depuisPointeur(e);
    e.preventDefault();
  });
  s.addEventListener('pointermove', (e) => { if (s.hasPointerCapture(e.pointerId)) depuisPointeur(e); });
  const fin = (e) => { if (!s.classList.contains('est-tenu')) return; s.classList.remove('est-tenu'); if (s.hasPointerCapture(e.pointerId)) s.releasePointerCapture(e.pointerId); lacher(); };
  s.addEventListener('pointerup', fin);
  s.addEventListener('pointercancel', fin);
  s.addEventListener('keydown', (e) => {
    const pas = { ArrowRight: 0.04, ArrowUp: 0.04, ArrowLeft: -0.04, ArrowDown: -0.04, PageUp: 0.15, PageDown: -0.15 }[e.key];
    let f = pas !== undefined ? etat.f + pas : e.key === 'Home' ? 0 : e.key === 'End' ? 1 : null;
    if (f === null) return;
    e.preventDefault();
    if (retour) retour.kill();
    placer(f, true);
  });
  s.addEventListener('keyup', (e) => { if (/Arrow|Page|Home|End/.test(e.key)) lacher(); });
  placer(ciel.pos, false);
}
/* Un petit signe du soleil, une fois l'ouverture jouée : il montre qu'il se prend à la main. */
function soleilSigne() {
  const s = $('.ciel-soleil.est-manipulable');
  if (!s || !gsap || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  s.classList.add('montre-astuce');
  gsap.fromTo(s, { scale: 1 }, { scale: 1.12, duration: 0.35, yoyo: true, repeat: 3, ease: 'sine.inOut', delay: 0.4 });
  setTimeout(() => s.classList.remove('montre-astuce'), 3600);
}

/* Intro : l'arc se dessine, le soleil monte le long de l'arc jusqu'à sa place, puis glisse jusqu'au soleil de la page. */
function soleilIntro(tl) {
  const scene = $('.intro-scene'), objet = $('.intro-soleil');
  if (!scene || !objet) return;
  const r = scene.getBoundingClientRect();
  const k = r.width / 400;
  const pos = (deg) => ({ x: (200 + 170 * Math.cos(deg * Math.PI / 180)) * k, y: (200 - 170 * Math.sin(deg * Math.PI / 180)) * k * (r.height / (210 * k)) });
  const fin = pos(50);
  const p = { d: 180 };
  tl.fromTo('.intro-trajet', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 0.05);
  tl.fromTo(p, { d: 180 }, {
    d: 50, duration: 0.85, ease: 'power2.out',
    onUpdate: () => { const q = pos(p.d); gsap.set(objet, { x: q.x - fin.x, y: q.y - fin.y }); },
  }, 0.15);
  tl.fromTo('.intro-logo, .intro-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, 0.25)
    .to('.intro-logo, .intro-ligne, .intro-arc', { opacity: 0, duration: 0.25 }, 0.95);
}

function titreOuverture(tl, t0) {
  const debut = $('#debut');
  if (!debut || !$('.ouv-ligne', debut)) return;
  tl.fromTo($$('.ouv-ligne', debut), { y: 0, yPercent: 115 }, { y: 0, yPercent: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' }, t0)
    .fromTo($$('[data-anime="gsap"]', debut), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out' }, t0 + 0.1);
  if (ciel) tl.fromTo(ciel.el, { '--parcouru': 0 }, { '--parcouru': ciel.frac, duration: 1.1, ease: 'power2.out' }, t0);
  const disque = $('.chb-disque');
  if (disque) tl.fromTo(disque, { '--rayon-disque': '9%' }, { '--rayon-disque': '49%', duration: 1.3, ease: 'power3.inOut' }, t0 - 0.35);
  const etal = $$('[data-etal] .media');
  if (etal.length) tl.fromTo(etal, { y: 60, opacity: 0, rotation: (i) => [0, 4, -4][i] || 0 }, { y: 0, opacity: 1, rotation: 0, duration: 1, stagger: 0.12, ease: 'power3.out' }, t0 - 0.2);
  const horizon = $('.frm-media');
  if (horizon) tl.fromTo(horizon, { clipPath: 'inset(42% 0% 42% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power3.inOut' }, t0 - 0.45);
  const bandeau = $('.ani-bandeau');
  if (bandeau) tl.fromTo(bandeau, { clipPath: 'inset(0% 38% 0% 38% round 999px)' }, { clipPath: 'inset(0% 4% 0% 4% round 28px)', duration: 1.3, ease: 'power3.inOut' }, t0 - 0.4);
  const brume = $('.brume');
  if (brume) tl.fromTo(brume, { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'power2.out' }, t0);
  const trajet = $('[data-trajet]');
  if (trajet) tl.fromTo(trajet, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' }, t0)
    .fromTo('.carte-floudiere', { scale: 0.4 }, { scale: 1, duration: 0.6, ease: 'back.out(2)' }, t0 + 1.1);
}

/* Mouvements des ouvertures intérieures qui continuent au défilement. */
function ouverturesAuDefilement() {
  if (!gsap || !ST) return;
  const debut = $('#debut');
  const disque = $('.chb-disque');
  if (disque) gsap.fromTo(disque, { '--rayon-disque': '49%' }, { '--rayon-disque': '72%', ease: 'none', immediateRender: false, scrollTrigger: { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  $$('[data-etal] .media').forEach((m, i) => gsap.to(m, { y: [-50, -110, -20][i] || -40, ease: 'none', scrollTrigger: { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.4 } }));
  const horizon = $('.frm-media');
  if (horizon) gsap.fromTo(horizon, { clipPath: 'inset(0% 0% 0% 0% round 0px)' }, { clipPath: 'inset(0% 3% 7% 3% round 0px 0px 32px 32px)', ease: 'none', immediateRender: false, scrollTrigger: { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  const bandeau = $('.ani-bandeau');
  if (bandeau) gsap.fromTo(bandeau, { clipPath: 'inset(0% 4% 0% 4% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', immediateRender: false, scrollTrigger: { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  const brume = $('.brume');
  if (brume) gsap.to(brume, { xPercent: -18, ease: 'none', scrollTrigger: { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.6 } });
  const carte = $('.carte-acces');
  if (carte) gsap.to(carte, { y: -40, ease: 'none', scrollTrigger: { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.4 } });
}

/* ---------- Roue de l'année ---------- */
function preparerRoue() {
  const section = $('[data-roue]');
  if (!section || !gsap || !ST) return;
  const cercle = $('[data-roue-cercle]', section);
  const photos = $$('[data-roue-photo]', section);
  const saisons = $$('[data-roue-saison]', section);
  const arcs = $$('[data-roue-arc]', section);
  const ordre = ['hiver', 'printemps', 'ete', 'automne'];
  const auj = jourIso(new Date());
  const mois = +auj.slice(5, 7);
  const actuelle = mois === 12 || mois <= 2 ? 0 : mois <= 5 ? 1 : mois <= 8 ? 2 : 3;
  const milieu = [0, 3, 6, 9];
  saisons[actuelle].classList.add('est-actuelle');
  /* Repère d'aujourd'hui sur l'anneau. */
  const jourAn = (Date.parse(auj) - Date.parse(`${auj.slice(0, 4)}-01-01`)) / 86400000;
  gsap.set('[data-roue-aujourdhui]', { rotation: (jourAn / 365) * 360 + 0, svgOrigin: '200 200' });
  let courant = -1;
  const montrer = (i) => {
    if (i === courant) return;
    courant = i;
    photos.forEach((p, k) => gsap.to(p, { opacity: k === i ? 1 : 0, scale: k === i ? 1 : 1.08, duration: 0.6, overwrite: true }));
    arcs.forEach((a, k) => a.classList.toggle('est-active', k === i));
    saisons.forEach((s, k) => {
      if (k === i) gsap.fromTo(s, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5, overwrite: true, delay: 0.1 });
      else gsap.to(s, { autoAlpha: 0, y: -16, duration: 0.3, overwrite: true });
    });
  };
  gsap.set(saisons, { autoAlpha: 0 });
  gsap.set(photos, { opacity: 0 });
  montrer(actuelle);
  ST.create({
    trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6,
    onUpdate: (st) => {
      const p = st.progress;
      gsap.set(cercle, { rotation: -(milieu[actuelle] + p * 9) * 30, transformOrigin: '50% 50%' });
      const etape = Math.min(3, Math.floor(p * 4.0001));
      montrer((actuelle + etape) % 4);
    },
  });
  gsap.set(cercle, { rotation: -milieu[actuelle] * 30, transformOrigin: '50% 50%' });
  void ordre;
}

/* ---------- Rangées qui glissent au défilement (sachets de l'accueil, planches du jardin) ---------- */
function preparerRangees() {
  if (!gsap || !ST) return;
  $$('[data-sachets]').forEach((zone) => {
    const piste = $('.sachets-piste', zone);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 761px)', () => {
      zone.removeAttribute('tabindex'); zone.removeAttribute('role');
      const course = () => Math.max(0, piste.scrollWidth - zone.clientWidth + 40);
      const tw = gsap.fromTo(piste, { x: () => course() * 0.06 }, {
        x: () => -course(), ease: 'none',
        scrollTrigger: { trigger: zone.closest('section'), start: 'top 75%', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true },
      });
      return () => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(piste, { clearProps: 'transform' }); zone.setAttribute('tabindex', '0'); zone.setAttribute('role', 'region'); };
    });
    mm.add('(max-width: 760px)', () => {
      const tw = gsap.fromTo(piste, { x: 36 }, { x: -12, ease: 'none', scrollTrigger: { trigger: zone, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
      return () => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(piste, { clearProps: 'transform' }); };
    });
  });
}

/* ---------- Marchés : passés, prochain, à venir (date du jour à Vaupillon) ---------- */
function statutsDates() {
  const auj = jourIso(new Date());
  $$('[data-ateliers] [data-fin]').forEach((li) => {
    const passe = li.dataset.fin < auj;
    li.classList.toggle('est-passe', passe);
    $('[data-statut]', li).textContent = passe ? 'Terminé' : 'À venir';
  });
  let prochain = null;
  $$('[data-marches] [data-date]').forEach((li) => {
    const d = li.dataset.date, s = $('[data-statut]', li);
    li.classList.remove('est-passe', 'est-prochain');
    if (d < auj) { li.classList.add('est-passe'); s.textContent = 'Passé'; }
    else if (!prochain) { prochain = li; li.classList.add('est-prochain'); s.textContent = d === auj ? "Aujourd'hui" : 'Prochain'; }
    else s.textContent = 'À venir';
  });
  const compte = $('[data-marches-compte]');
  if (compte && $$('[data-marches] [data-date]').length) {
    if (!prochain) compte.textContent = "Les marchés de fin d'année sont passés : retrouvez-nous au Chardon ou à la ferme.";
    else {
      const j = Math.round((Date.parse(prochain.dataset.date) - Date.parse(auj)) / 86400000);
      const lieu = $('.marche-lieu', prochain).firstChild.textContent.trim(), ville = $('.marche-lieu span', prochain).textContent.split(' · ')[0];
      compte.textContent = `${j === 0 ? "Aujourd'hui" : j === 1 ? 'Demain' : `Dans ${j}\u00a0jours`}\u00a0: ${lieu}, ${ville}.`;
    }
  }
}

const euros = (n) => `${(Math.round(n * 100) / 100).toFixed(2).replace('.', ',').replace(',00', '')} €`;

/* ---------- Calculateur de séjour (Chambres) ---------- */
function preparerEstimer() {
  const f = $('[data-estimer]');
  if (!f) return;
  const total = $('[data-total]', f), detail = $('[data-detail]', f), lien = $('[data-estimer-lien]', f);
  const val = { nuits: 2, personnes: 2 };
  let affiche = 134;
  const bornes = () => {
    const r = $('input[name="chambre"]:checked', f);
    return { nuits: [1, 21], personnes: [1, +r.dataset.max] };
  };
  const maj = (anime = true) => {
    const r = $('input[name="chambre"]:checked', f);
    const b = bornes();
    val.personnes = Math.min(val.personnes, b.personnes[1]);
    $$('[data-valeur]', f).forEach((o) => { o.textContent = val[o.dataset.valeur]; });
    $$('[data-moins]', f).forEach((bt) => { bt.disabled = val[bt.dataset.moins] <= bornes()[bt.dataset.moins][0]; });
    $$('[data-plus]', f).forEach((bt) => { bt.disabled = val[bt.dataset.plus] >= bornes()[bt.dataset.plus][1]; });
    const p1 = +r.dataset.p1, p2 = +r.dataset.p2, sup = +r.dataset.sup;
    const parNuit = val.personnes === 1 ? p1 : p2 + Math.max(0, val.personnes - 2) * sup;
    let somme = parNuit * val.nuits;
    const assiette = $('input[name="assiette"]', f).checked;
    if (assiette) somme += val.personnes * 17.5 * val.nuits;
    const nom = r.closest('label').querySelector('strong').textContent;
    detail.textContent = `${nom}, ${val.nuits} nuit${val.nuits > 1 ? 's' : ''}, ${val.personnes} personne${val.personnes > 1 ? 's' : ''}\u00a0: ${euros(parNuit)} la nuit${assiette ? ', Assiette du jardin comprise (au plus, selon les soirs où elle est servie)' : ''}.`;
    const u = new URL(lien.href, location.href);
    u.search = `?sujet=sejour&chambre=${r.value}&nuits=${val.nuits}&personnes=${val.personnes}${assiette ? '&assiette=oui' : ''}`;
    lien.href = u.pathname + u.search + u.hash;
    const cible = Math.round(somme * 100) / 100;
    if (gsap && anime) {
      const o = { v: affiche };
      gsap.to(o, { v: cible, duration: 0.6, ease: 'power2.out', overwrite: true, onUpdate: () => { total.textContent = euros(o.v).replace(/ €$/, ''); } });
      gsap.fromTo(total, { y: -6 }, { y: 0, duration: 0.4, ease: 'back.out(3)' });
    } else total.textContent = euros(cible).replace(/ €$/, '');
    affiche = cible;
  };
  f.addEventListener('click', (e) => {
    const m = e.target.closest('[data-moins]'), p = e.target.closest('[data-plus]');
    if (m) { val[m.dataset.moins]--; maj(); }
    if (p) { val[p.dataset.plus]++; maj(); }
  });
  f.addEventListener('change', () => maj());
  f.addEventListener('submit', (e) => e.preventDefault());
  maj(false);
}

/* ---------- Catalogue des tisanes : filtres et recherche ---------- */
const normaliser = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/(\w{3,})s\b/g, '$1');
function preparerCatalogue() {
  const cat = $('[data-catalogue]');
  if (!cat) return;
  const cartes = $$('.tisane', cat), boutons = $$('[data-filtre]', cat), champ = $('[data-recherche]', cat), vide = $('[data-vide]', cat);
  const plus = $('[data-catalogue-plus]', cat), voirPlus = $('[data-voir-plus]', cat), piocher = $('[data-piocher]', cat);
  const params = new URLSearchParams(location.search);
  let famille = params.get('famille') || 'toutes';
  if (!boutons.some((b) => b.dataset.filtre === famille)) famille = 'toutes';
  /* Les 35 d'un coup font une longue page : on en montre une douzaine (six sur téléphone), le reste à la demande. */
  const limite = () => (matchMedia('(max-width: 760px)').matches ? 6 : 12);
  let ouvert = false;
  const correspond = (c, q) => (famille === 'toutes' || c.dataset.famille === famille) && (!q || normaliser(`${c.dataset.nom} ${c.dataset.plantes}`).includes(q));
  const appliquer = (anime) => {
    const q = normaliser(champ.value.trim());
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === famille)));
    const replie = !ouvert && famille === 'toutes' && !q;
    let n = 0;
    const montrees = [];
    cartes.forEach((c) => {
      let ok = correspond(c, q);
      if (ok) { n++; if (replie && n > limite()) ok = false; }
      if (ok && c.hidden) montrees.push(c);
      c.hidden = !ok;
    });
    vide.hidden = n > 0;
    const reste = replie ? n - limite() : 0;
    if (plus) { plus.hidden = reste <= 0; voirPlus.textContent = `Voir les ${reste} autres tisanes`; }
    if (anime && gsap && montrees.length) gsap.fromTo(montrees, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.02, clearProps: 'transform,opacity' });
    const u = new URL(location.href);
    if (famille === 'toutes') u.searchParams.delete('famille'); else u.searchParams.set('famille', famille);
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    if (ST) ST.refresh();
    return montrees;
  };
  boutons.forEach((b) => b.addEventListener('click', () => { famille = b.dataset.filtre; appliquer(true); }));
  champ.addEventListener('input', () => appliquer(true));
  if (voirPlus) voirPlus.addEventListener('click', () => {
    ouvert = true;
    const m = appliquer(true);
    if (m[0]) { const h = $('.tisane-nom', m[0]); h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  });
  /* Le hasard choisit une tisane parmi celles du filtre : la carte vient au centre et se signale. */
  let derniere = null;
  if (piocher) {
    piocher.hidden = false;
    piocher.addEventListener('click', () => {
      const q = normaliser(champ.value.trim());
      const choix = cartes.filter((c) => correspond(c, q) && c !== derniere);
      if (!choix.length) return;
      const c = choix[Math.floor(Math.random() * choix.length)];
      derniere = c;
      if (c.hidden) { ouvert = true; appliquer(false); }
      $$('.tisane.est-pioche', cat).forEach((x) => { x.classList.remove('est-pioche'); const b = $('.tisane-badge', x); if (b) b.remove(); });
      const badge = document.createElement('p');
      badge.className = 'tisane-badge'; badge.textContent = 'Tirée au sort';
      c.prepend(badge); c.classList.add('est-pioche');
      const doux = matchMedia('(prefers-reduced-motion: reduce)').matches;
      c.scrollIntoView({ behavior: doux ? 'auto' : 'smooth', block: 'center' });
      const nom = $('.tisane-nom', c); nom.setAttribute('tabindex', '-1');
      setTimeout(() => nom.focus({ preventScroll: true }), doux ? 0 : 650);
      if (gsap && !doux) {
        gsap.fromTo($('svg', piocher), { rotation: 0 }, { rotation: 360, duration: 0.6, ease: 'back.out(1.6)', transformOrigin: '50% 50%' });
        gsap.fromTo(c, { scale: 0.92, rotation: -2 }, { scale: 1, rotation: 0, duration: 0.9, delay: 0.55, ease: 'elastic.out(1, 0.55)', clearProps: 'transform' });
      }
    });
  }
  appliquer(false);
}

/* ---------- Chambres : une vignette touchée passe en grand, la grande prend sa place ---------- */
function preparerVignettes() {
  $$('[data-vignettes]').forEach((bloc) => {
    const grande = $('.chambre-grande', bloc.parentElement);
    if (!grande) return;
    $$('.chambre-vignette', bloc).forEach((v) => {
      v.classList.add('est-cliquable');
      v.setAttribute('role', 'button');
      v.setAttribute('tabindex', '0');
      const nommer = () => v.setAttribute('aria-label', `Afficher en grand : ${$('img', v).alt}`);
      nommer();
      const echanger = () => {
        const a = $('img', grande), b = $('img', v);
        const attrs = ['src', 'srcset', 'alt', 'width', 'height'];
        const va = attrs.map((k) => a.getAttribute(k)), vb = attrs.map((k) => b.getAttribute(k));
        const ca = grande.style.getPropertyValue('--cadrage'), cb = v.style.getPropertyValue('--cadrage');
        const appliquer = () => {
          attrs.forEach((k, i) => { if (vb[i] !== null) a.setAttribute(k, vb[i]); if (va[i] !== null) b.setAttribute(k, va[i]); });
          grande.style.setProperty('--cadrage', cb || '50% 50%'); v.style.setProperty('--cadrage', ca || '50% 50%');
          nommer();
        };
        if (!gsap || matchMedia('(prefers-reduced-motion: reduce)').matches) { appliquer(); return; }
        gsap.timeline()
          .to(a, { opacity: 0, scale: 1.04, duration: 0.22, ease: 'power2.in' })
          .call(appliquer)
          .fromTo(a, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity' })
          .fromTo(v, { scale: 0.92 }, { scale: 1, duration: 0.5, ease: 'back.out(2.4)', clearProps: 'transform' }, '<');
      };
      v.addEventListener('click', echanger);
      v.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); echanger(); } });
    });
  });
}

/* ---------- Animations : la journée en immersion, étape par étape (au toucher ou au défilement) ---------- */
function preparerJournee() {
  const bloc = $('[data-journee]');
  if (!bloc) return;
  const boutons = $$('[data-etape]', bloc), vues = $$('[data-vue]', bloc), soleil = $('.frise-soleil', bloc), etapes = $('.frise-etapes', bloc);
  let actif = 0;
  const montrer = (i) => {
    actif = i;
    boutons.forEach((b, k) => { b.setAttribute('aria-pressed', String(k === i)); b.closest('li').classList.toggle('est-active', k === i); });
    vues.forEach((v, k) => v.classList.toggle('est-active', k === i));
    if (soleil) {
      const li = boutons[i].closest('li');
      soleil.style.setProperty('--frise-x', `${li.offsetLeft}px`);
    }
  };
  boutons.forEach((b, i) => b.addEventListener('click', () => montrer(i)));
  window.addEventListener('resize', () => montrer(actif));
  if (ST) {
    let dernier = 0;
    ST.create({
      trigger: etapes, start: 'top 72%', endTrigger: bloc, end: 'bottom 62%',
      onUpdate: (st) => { const i = Math.min(boutons.length - 1, Math.floor(st.progress * boutons.length)); if (i !== dernier) { dernier = i; montrer(i); } },
    });
  }
  montrer(0);
}

/* ---------- Alentours : sommaire flottant qui suit la lecture ---------- */
function preparerSommaire() {
  const nav = $('[data-sommaire]');
  if (!nav || !ST) return;
  const liens = $$('a', nav), ul = $('ul', nav);
  const debut = $('#debut'), appel = $('#appel');
  ST.create({ trigger: debut, start: 'bottom 30%', endTrigger: appel, end: 'top 70%', onToggle: (st) => nav.classList.toggle('est-visible', st.isActive) });
  liens.forEach((a) => {
    const cible = document.getElementById(a.hash.slice(1));
    if (!cible) return;
    ST.create({
      trigger: cible, start: 'top 45%', end: 'bottom 45%',
      onToggle: (st) => {
        if (!st.isActive) { a.removeAttribute('aria-current'); return; }
        liens.forEach((x) => x.removeAttribute('aria-current'));
        a.setAttribute('aria-current', 'true');
        const g = a.offsetLeft - (ul.clientWidth - a.offsetWidth) / 2;
        ul.scrollTo({ left: Math.max(0, g), behavior: 'smooth' });
      },
    });
  });
}

/* ---------- Pied de page : le soleil du jour à Vaupillon ---------- */
function piedSoleil() {
  const p = $('[data-pied-soleil]');
  if (!p) return;
  const m = new Date(), { lever, coucher } = soleilDuJour(m);
  const nuit = m < lever || m > coucher;
  $('[data-pied-soleil-texte]', p).textContent = m < lever
    ? `Aujourd'hui à Vaupillon, le soleil se lève à ${heure(lever)}.`
    : m > coucher ? `Le soleil s'est couché à ${heure(coucher)} à Vaupillon ; nuit noire sur la ferme.` : `Aujourd'hui à Vaupillon, lever du soleil à ${heure(lever)}, coucher à ${heure(coucher)}.`;
  $('.pied-soleil-disque', p).classList.toggle('est-nuit', nuit);
  p.hidden = false;
}

/* ---------- Le soleil de la marge : du lever en haut de page au coucher en bas ---------- */
function filSoleil() {
  const f = $('[data-fil-soleil]');
  if (!f || !ST) return;
  const disque = $('.fil-soleil-disque', f);
  const maj = (p) => { disque.style.setProperty('--fil-y', `${p * f.clientHeight}px`); f.classList.toggle('est-nuit', p > 0.97); };
  ST.create({ start: 0, end: 'max', onUpdate: (st) => maj(st.progress), onRefresh: (st) => maj(st.progress) });
  maj(0);
  f.classList.add('est-pret');
}

/* ---------- Panier simulé (même panier dans tous les onglets) ---------- */
const CLE_PANIER = 'jardinsolstice:panier';
function lirePanier() {
  try {
    const p = JSON.parse(localStorage.getItem(CLE_PANIER) || '{}');
    if (!p || typeof p !== 'object' || Array.isArray(p)) throw new Error('panier abîmé');
    for (const k of Object.keys(p)) if (!(Number.isInteger(p[k]) && p[k] > 0 && p[k] < 100)) delete p[k];
    return p;
  } catch { try { localStorage.removeItem(CLE_PANIER); } catch {} return {}; }
}
function ecrirePanier(p) { try { localStorage.setItem(CLE_PANIER, JSON.stringify(p)); } catch {} }

function preparerPanier() {
  const dlg = $('[data-panier]');
  if (!dlg) return;
  const bouton = $('[data-panier-bouton]'), liste = $('[data-panier-liste]', dlg), msg = $('[data-panier-message]', dlg), commander = $('[data-panier-commander]', dlg);
  const fiches = Object.fromEntries($$('.tisane').map((c) => [c.dataset.cle, { nom: c.dataset.nom, prix: +c.dataset.prixUnitaire }]));
  let panier = lirePanier();
  let retourFocus = null;
  const rendre = () => {
    const lignes = Object.entries(panier).filter(([k]) => fiches[k]);
    let st = 0, n = 0;
    liste.replaceChildren(...lignes.map(([k, q]) => {
      st += fiches[k].prix * q; n += q;
      const li = document.createElement('li');
      li.innerHTML = `<span class="p-nom"></span><span class="p-qte"><button type="button" data-qte="-1" aria-label="Retirer un sachet"></button><span aria-live="polite"></span><button type="button" data-qte="1" aria-label="Ajouter un sachet">+</button></span><span class="p-prix"></span>`;
      li.dataset.cle = k;
      li.querySelector('.p-nom').textContent = fiches[k].nom;
      li.querySelector('[data-qte="-1"]').textContent = '−';
      li.querySelector('.p-qte > span').textContent = q;
      li.querySelector('.p-prix').textContent = `${q} × ${euros(fiches[k].prix)}`;
      li.querySelector('[data-qte="-1"]').setAttribute('aria-label', `Retirer un sachet de ${fiches[k].nom}`);
      li.querySelector('[data-qte="1"]').setAttribute('aria-label', `Ajouter un sachet de ${fiches[k].nom}`);
      return li;
    }));
    const port = st >= 75 || st === 0 ? 0 : 6;
    $('[data-panier-vide]', dlg).hidden = n > 0;
    $('[data-panier-sous-total]', dlg).textContent = euros(st);
    $('[data-panier-port]', dlg).textContent = st >= 75 ? 'offert' : euros(port);
    $('[data-panier-total]', dlg).textContent = euros(st + port);
    $('[data-panier-nombre]').textContent = n;
    $('[data-panier-total-bouton]').textContent = euros(st + port);
    bouton.hidden = n === 0;
    const manque = Math.max(0, 15 - st);
    msg.textContent = n === 0 ? '' : manque > 0 ? `Minimum 15 € pour un envoi : il manque ${euros(manque)}.` : st < 75 ? `Encore ${euros(75 - st)} pour le port offert.` : 'Port offert.';
    commander.setAttribute('aria-disabled', String(manque > 0));
    commander.classList.toggle('est-inactif', manque > 0);
    $$('.tisane').forEach((c) => { const b = $('[data-ajouter]', c); b.classList.toggle('est-ajoute', !!panier[c.dataset.cle]); b.textContent = panier[c.dataset.cle] ? `Ajouté · ${panier[c.dataset.cle]}` : 'Ajouter'; });
  };
  const ouvrir = () => {
    retourFocus = document.activeElement;
    dlg.hidden = false; html.classList.add('panier-ouvert'); bouton.setAttribute('aria-expanded', 'true');
    if (gsap) gsap.fromTo('.panier-tiroir', { xPercent: 100 }, { xPercent: 0, duration: 0.45, ease: 'power3.out' });
    $('.panier-fermer', dlg).focus();
  };
  const fermer = () => {
    dlg.hidden = true; html.classList.remove('panier-ouvert'); bouton.setAttribute('aria-expanded', 'false');
    (retourFocus && retourFocus.isConnected ? retourFocus : bouton).focus();
  };
  document.addEventListener('click', (e) => {
    const aj = e.target.closest('[data-ajouter]');
    if (aj) {
      const k = aj.dataset.ajouter;
      panier[k] = (panier[k] || 0) + 1; ecrirePanier(panier); rendre();
      if (gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        /* Un petit sachet part de la carte et file vers le panier. */
        const ra = aj.getBoundingClientRect(), rb = bouton.getBoundingClientRect();
        const vol = document.createElement('span');
        vol.className = 'vol-sachet'; vol.setAttribute('aria-hidden', 'true');
        vol.style.left = `${ra.left + ra.width / 2 - 11}px`; vol.style.top = `${ra.top + ra.height / 2 - 14}px`;
        document.body.append(vol);
        const dx = rb.left + 22 - (ra.left + ra.width / 2), dy = rb.top + rb.height / 2 - (ra.top + ra.height / 2);
        gsap.timeline({ onComplete: () => vol.remove() })
          .to(vol, { x: dx, duration: 0.7, ease: 'power1.inOut' }, 0)
          .to(vol, { y: Math.min(-60, dy * 0.3), duration: 0.3, ease: 'power2.out' }, 0)
          .to(vol, { y: dy, duration: 0.4, ease: 'power2.in' }, 0.3)
          .to(vol, { scale: 0.4, rotation: 140, opacity: 0.2, duration: 0.25 }, 0.5);
      }
      if (gsap) {
        gsap.fromTo(bouton, { scale: 0.85 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' });
        gsap.fromTo(aj, { scale: 0.9 }, { scale: 1, duration: 0.35, ease: 'back.out(3)' });
      }
    }
    const q = e.target.closest('[data-qte]');
    if (q) {
      const k = q.closest('li').dataset.cle;
      panier[k] = (panier[k] || 0) + +q.dataset.qte;
      if (panier[k] <= 0) delete panier[k];
      ecrirePanier(panier); rendre();
      if (!Object.keys(panier).length) $('.panier-fermer', dlg).focus();
    }
    if (e.target.closest('[data-panier-bouton]')) ouvrir();
    if (e.target.closest('[data-panier-fermer]')) fermer();
    if (e.target.closest('[data-panier-commander]') && commander.getAttribute('aria-disabled') === 'true') { e.preventDefault(); msg.focus && msg.focus(); }
  });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    if (e.key === 'Tab') {
      const f = $$('button, a[href]', dlg).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  window.addEventListener('storage', (e) => { if (e.key === CLE_PANIER) { panier = lirePanier(); rendre(); } });
  rendre();
}

/* ---------- Demande en étapes (Contact) ---------- */
function preparerDemande() {
  const f = $('[data-etapes]');
  if (!f) return;
  const etapes = $$('[data-etape]', f), annonce = $$('[data-etapes-annonce] li'), recap = $('[data-recap]');
  let i = 0;
  const sujet = () => ($('input[name="sujet"]:checked', f) || {}).value || 'sejour';
  const majSujet = () => {
    $$('[data-pour]', f).forEach((d) => { d.hidden = d.dataset.pour !== sujet(); });
    const p = lirePanier();
    const zone = $('[data-commande-recap]', f);
    const lignes = Object.entries(p).map(([k, q]) => `${q} × ${k.replace(/-/g, ' ')}`);
    if (zone && lignes.length) zone.textContent = `Votre panier : ${lignes.join(', ')}.`;
  };
  const majRecap = () => {
    const s = sujet(), v = (n) => (f.elements[n] ? f.elements[n].value : '');
    const titres = { sejour: 'Un séjour', table: "L'Assiette du jardin", commande: 'Une commande', groupe: 'Une visite de groupe', autre: 'Autre chose' };
    let t = titres[s];
    if (s === 'sejour') t += `${v('chambre') ? `, chambre ${v('chambre').replace(/^./, (x) => x.toUpperCase())}` : ''}, ${v('nuits') || 1} nuit(s), ${v('personnes') || 1} personne(s)${v('arrivee') ? `, arrivée le ${new Date(v('arrivee')).toLocaleDateString('fr-FR')}` : ''}${f.elements.assiette && f.elements.assiette.checked ? ', avec l’Assiette du jardin' : ''}`;
    if (s === 'table') t += `, ${v('adultes') || 1} adulte(s)${+v('enfants') ? ` et ${v('enfants')} enfant(s)` : ''}${v('soir') ? `, le ${new Date(v('soir')).toLocaleDateString('fr-FR')}` : ''}`;
    if (s === 'groupe') t += `, ${v('groupe') || 10} personnes`;
    if (v('nom')) t += ` · ${v('prenom')} ${v('nom')}`.replace('  ', ' ');
    recap.textContent = `${t}.`;
  };
  const aller = (n) => {
    const avant = f.offsetHeight;
    etapes.forEach((e, k) => { e.hidden = k !== n; });
    annonce.forEach((a, k) => a.classList.toggle('est-active', k === n));
    i = n;
    if (gsap) gsap.fromTo(f, { height: avant }, { height: f.offsetHeight, duration: 0.4, ease: 'power2.out', clearProps: 'height' });
    const leg = $('legend', etapes[n]);
    if (leg) { leg.setAttribute('tabindex', '-1'); leg.focus({ preventScroll: true }); }
    if (f.getBoundingClientRect().top < 0) f.scrollIntoView({ block: 'start' });
    if (ST) ST.refresh();
  };
  f.addEventListener('click', (e) => {
    if (e.target.closest('[data-suivant]')) { e.preventDefault(); aller(Math.min(etapes.length - 1, i + 1)); }
    if (e.target.closest('[data-precedent]')) { e.preventDefault(); aller(Math.max(0, i - 1)); }
  });
  f.addEventListener('change', () => { majSujet(); majRecap(); });
  f.addEventListener('input', majRecap);
  f.addEventListener('submit', () => {
    const invalide = $('[aria-invalid="true"]', f);
    if (invalide) { const k = etapes.findIndex((e) => e.contains(invalide)); if (k >= 0 && k !== i) { aller(k); invalide.focus(); } }
  }, true);
  majSujet(); majRecap();
}

/* ---------- Vente à la ferme : formulée selon la saison et le jour (heure de Vaupillon) ---------- */
function venteALaFerme() {
  const el = $('[data-vente]');
  if (!el) return;
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: LIEU.fuseau, month: 'numeric', weekday: 'short', hour: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  const mois = +p.month, h = +p.hour;
  if (mois >= 4 && mois <= 9) {
    el.textContent = p.weekday === 'Sat' && h < 19 ? "Vente à la ferme aujourd'hui de 17\u00a0h à 19\u00a0h" : 'Vente à la ferme le samedi de 17\u00a0h à 19\u00a0h, ou sur rendez-vous';
  } else el.textContent = 'En ce moment, vente à la ferme sur rendez-vous\u202f; le samedi de 17\u00a0h à 19\u00a0h dès avril';
}

demarrer({
  preparer() {
    preparerSoleil();
    soleilManipulable();
    statutsDates();
    preparerRoue();
    preparerRangees();
    ouverturesAuDefilement();
    preparerEstimer();
    preparerVignettes();
    preparerJournee();
    preparerSommaire();
    preparerCatalogue();
    preparerPanier();
    preparerDemande();
    venteALaFerme();
    piedSoleil();
    filSoleil();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    soleilIntro(tl);
    versObjet(tl, { a: 1.05, duree: 0.5, ouverture: 0.8 });
    titreOuverture(tl, 1.55);
    tl.call(soleilSigne, null, 3.1);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('#debut [data-anime="gsap"]', { clearProps: 'transform,opacity' });
    gsap.set('.ouv-ligne', { y: 0, yPercent: 0 });
    gsap.set('[data-etal] .media', { opacity: 1, y: 0, rotation: 0 });
    gsap.set('.frm-media', { clipPath: 'inset(0% 0% 0% 0%)' });
    gsap.set('.ani-bandeau', { clipPath: 'inset(0% 4% 0% 4% round 28px)' });
    gsap.set('.brume', { opacity: 1 });
    gsap.set('[data-trajet]', { strokeDashoffset: 0 });
    gsap.set('.carte-floudiere', { scale: 1 });
    const d = $('.chb-disque'); if (d) d.style.setProperty('--rayon-disque', '49%');
    if (ciel) ciel.el.style.setProperty('--parcouru', String(ciel.frac));
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.15 });
    titreOuverture(tl, 0);
    tl.call(soleilSigne, null, 1.4);
  },
});

quand('pret', () => { if (ST) ST.refresh(); });
