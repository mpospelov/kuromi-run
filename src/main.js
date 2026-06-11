/* Kuromi Run — движок: цикл, ввод, столкновения, экраны, книжные переменки */
import * as THREE from 'three';
import { SoundKit as SK } from './audio.js';
import { TrackKit as TK } from './tracks.js';
import { createKuromi, kuromiReady, CELEB_MOVES } from './kuromi.js';
import './style.css';

const LANE_X = TK.LANE_X;

/* прототип делался под three r128 (без управления цветом) — сохраняем его палитру как есть */
THREE.ColorManagement.enabled = false;

/* ===== список литературы для 1 класса (книжная переменка) ===== */
const BOOKS = [
  { a: 'Корней Чуковский', t: '«Мойдодыр» и «Айболит»', d: 'Весёлые стихи-сказки, которые легко читать вслух.' },
  { a: 'Самуил Маршак', t: '«Вот какой рассеянный»', d: 'Смешные стихи про рассеянного с улицы Бассейной.' },
  { a: 'Агния Барто', t: 'Стихи для детей', d: '«Игрушки» и другие короткие добрые стихи.' },
  { a: 'Владимир Сутеев', t: '«Сказки и картинки»', d: 'Маленькие сказки с картинками автора — то, что нужно для первого чтения.' },
  { a: 'Николай Носов', t: '«Живая шляпа», «Затейники»', d: 'Очень смешные рассказы про друзей и их выдумки.' },
  { a: 'Русские народные сказки', t: '«Гуси-лебеди», «Маша и медведь»', d: 'Любимые сказки, знакомые с детского сада.' },
  { a: 'Александр Пушкин', t: '«Сказка о рыбаке и рыбке»', d: 'Первая встреча с великим сказочником.' },
  { a: 'Виктор Драгунский', t: '«Денискины рассказы»', d: 'Истории про Дениску — добрые и очень весёлые.' }
];
let bookIdx = Math.floor(Math.random() * BOOKS.length);

/* ===== DOM ===== */
const $ = (id) => document.getElementById(id);
const screens = { menu: $('menu'), hud: $('hud'), finish: $('finish'), pause: $('pause-overlay'), countdown: $('countdown'), book: $('book-break') };
const canvas = $('game-canvas');
const confettiCanvas = $('confetti-canvas');

function showScreen(name) {
  Object.keys(screens).forEach((k) => screens[k].classList.toggle('visible', k === name));
}
function showOverlay(name, on) { screens[name].classList.toggle('visible', on); }

/* ===== three.js базис ===== */
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 400);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = w < h ? 70 : 58; // портрет — шире обзор
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

/* ===== состояние ===== */
let state = 'menu'; // menu | countdown | playing | paused | book | finishing | finish
let track = null, kuromi = null;
let player = null;
let lastTime = 0, elapsed = 0;
let itemLo = 0;
let hitCount = 0;
let shake = 0;

const STARS_KEY = 'kuromiRun.stars';
function loadStars() { try { return JSON.parse(localStorage.getItem(STARS_KEY)) || {}; } catch (e) { return {}; } }
function saveStars(obj) { localStorage.setItem(STARS_KEY, JSON.stringify(obj)); }

/* ===== меню ===== */
function starRow(n) {
  let s = '';
  for (let i = 0; i < 3; i++) s += '<span class="star ' + (i < n ? 'on' : '') + '">★</span>';
  return s;
}
function renderMenu() {
  const stars = loadStars();
  const wrap = $('track-cards');
  wrap.innerHTML = '';
  TK.DEFS.forEach((def) => {
    const btn = document.createElement('button');
    btn.className = 'track-card';
    btn.setAttribute('data-track', def.key);
    btn.innerHTML =
      '<span class="card-art" style="background:' + def.grad + '"></span>' +
      '<span class="card-name">' + def.name + '</span>' +
      '<span class="card-sub">' + def.sub + '</span>' +
      '<span class="card-stars">' + starRow(stars[def.key] || 0) + '</span>';
    btn.addEventListener('click', () => startRun(def.key));
    wrap.appendChild(btn);
  });
}

/* ===== запуск забега ===== */
async function startRun(key) {
  SK.tap();
  await kuromiReady;
  if (kuromi) scene.remove(kuromi.group); // модель общая — не отдаём её disposeScene
  TK.disposeScene(scene);
  track = TK.buildTrack(scene, key);
  kuromi = createKuromi();
  scene.add(kuromi.group);

  player = {
    lane: 1, x: 0, y: 0, vy: 0, z: 0,
    airborne: false, slideT: 0, slideOnLand: false,
    invuln: 0, collected: 0, celebT: 0,
    laneV: 0,                          // скорость пружины перестроения
    stumbleT: 0, landT: 0,             // спотыкание и сквош приземления
    speed: track.def.baseSpeed * 0.5   // стартуем с разгона
  };
  itemLo = 0; elapsed = 0; hitCount = 0; shake = 0;
  $('hud-count').textContent = '0';
  $('progress-fill').style.width = '0%';
  showScreen('hud');
  runCountdown();
}

function runCountdown() {
  state = 'countdown';
  const num = $('countdown-num');
  showOverlay('countdown', true);
  const seq = ['3', '2', '1', 'Беги!'];
  let i = 0;
  function step() {
    if (i < seq.length) {
      num.textContent = seq[i];
      num.classList.remove('pop'); void num.offsetWidth; num.classList.add('pop');
      SK.countTick(i === 3);
      i++;
      setTimeout(step, i === 4 ? 600 : 700);
    } else {
      showOverlay('countdown', false);
      state = 'playing';
      SK.startMusic(track.def.music);
    }
  }
  step();
}

/* ===== ввод ===== */
function tryLane(dir) {
  if (state !== 'playing') return;
  const nl = THREE.MathUtils.clamp(player.lane + dir, 0, 2);
  if (nl !== player.lane) { player.lane = nl; SK.swish(); }
}
function tryJump() {
  if (state !== 'playing') return;
  if (!player.airborne) {
    player.vy = 10.6; player.airborne = true; player.slideT = 0;
    SK.boing();
  }
}
function trySlide() {
  if (state !== 'playing') return;
  if (player.airborne) { player.vy = Math.min(player.vy, -16); player.slideOnLand = true; }
  else { player.slideT = 0.62; SK.swish(); }
}

window.addEventListener('keydown', (e) => {
  const k = e.code;
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'KeyA', 'KeyD', 'KeyW', 'KeyS'].includes(k)) e.preventDefault();
  if (k === 'ArrowLeft' || k === 'KeyA') tryLane(-1);
  else if (k === 'ArrowRight' || k === 'KeyD') tryLane(1);
  else if (k === 'ArrowUp' || k === 'Space' || k === 'KeyW') tryJump();
  else if (k === 'ArrowDown' || k === 'KeyS') trySlide();
  else if (k === 'Escape' && state === 'playing') pauseGame();
});

/* свайпы */
let touch = null;
canvas.addEventListener('touchstart', (e) => {
  SK.tap();
  const t = e.changedTouches[0];
  touch = { x: t.clientX, y: t.clientY, id: t.identifier, used: false };
}, { passive: true });
canvas.addEventListener('touchmove', (e) => {
  if (!touch || touch.used) return;
  const t = [...e.changedTouches].find((c) => c.identifier === touch.id);
  if (!t) return;
  const dx = t.clientX - touch.x, dy = t.clientY - touch.y;
  if (Math.abs(dx) < 34 && Math.abs(dy) < 34) return;
  touch.used = true;
  if (Math.abs(dx) > Math.abs(dy)) tryLane(dx > 0 ? 1 : -1);
  else if (dy < 0) tryJump();
  else trySlide();
}, { passive: true });
canvas.addEventListener('touchend', () => { touch = null; }, { passive: true });

/* ===== пауза / звук ===== */
function pauseGame() {
  if (state !== 'playing') return;
  state = 'paused';
  SK.stopMusic();
  showOverlay('pause', true);
}
function resumeGame() {
  showOverlay('pause', false);
  if (state === 'paused') { state = 'playing'; SK.startMusic(track.def.music); }
}
$('btn-pause').addEventListener('click', pauseGame);
$('btn-resume').addEventListener('click', resumeGame);
$('btn-restart').addEventListener('click', () => { showOverlay('pause', false); startRun(track.def.key); });
$('btn-pause-menu').addEventListener('click', () => { showOverlay('pause', false); goMenu(); });

function updateSoundButtons() {
  document.querySelectorAll('.btn-sound').forEach((b) => {
    b.classList.toggle('muted', !SK.isEnabled());
    b.setAttribute('aria-label', SK.isEnabled() ? 'Выключить звук' : 'Включить звук');
  });
}
document.querySelectorAll('.btn-sound').forEach((b) => {
  b.addEventListener('click', () => {
    SK.tap();
    SK.setEnabled(!SK.isEnabled());
    updateSoundButtons();
  });
});
updateSoundButtons();

function goMenu() {
  state = 'menu';
  SK.stopMusic();
  renderMenu();
  showScreen('menu');
}

/* ===== книжная переменка (каждое 3-е столкновение) ===== */
const BOOK_LOCK = 5; // секунд до разблокировки кнопки — переменку нельзя проскочить
let bookTimer = null;
function showBookBreak() {
  state = 'book';
  SK.stopMusic();
  const b = BOOKS[bookIdx % BOOKS.length];
  bookIdx++;
  $('book-author').textContent = b.a;
  $('book-title').textContent = b.t;
  $('book-desc').textContent = b.d;
  const btn = $('btn-book-continue');
  let left = BOOK_LOCK;
  btn.disabled = true;
  btn.textContent = 'Бежать дальше! (' + left + ')';
  clearInterval(bookTimer);
  bookTimer = setInterval(() => {
    left--;
    if (left <= 0) {
      clearInterval(bookTimer); bookTimer = null;
      btn.disabled = false;
      btn.textContent = 'Бежать дальше!';
    } else {
      btn.textContent = 'Бежать дальше! (' + left + ')';
    }
  }, 1000);
  showOverlay('book', true);
}
$('btn-book-continue').addEventListener('click', () => {
  showOverlay('book', false);
  if (state === 'book') { state = 'playing'; SK.startMusic(track.def.music); }
});

/* ===== сладости: зачисление + праздник на каждом полтиннике ===== */
const CELEB_DUR = 2.0;
let lastMove = -1;
function startCelebration(move) {
  if (!move) { /* случайное движение, но не то же, что в прошлый раз */
    let m;
    do { m = Math.floor(Math.random() * CELEB_MOVES.length); } while (m === lastMove);
    lastMove = m;
    move = CELEB_MOVES[m];
  }
  player.celebMove = move;
  player.celebT = CELEB_DUR;
  SK.starPop(2);
}
function addSweets(n) {
  const before = player.collected;
  player.collected += n;
  $('hud-count').textContent = player.collected;
  if (Math.floor(player.collected / 50) > Math.floor(before / 50)) startCelebration();
}
window.__celebrate = (move) => { if (player) startCelebration(move); }; // для отладки/тестов
window.__debug = () => ({
  state, children: scene.children.length,
  cam: camera.position.toArray().map((v) => +v.toFixed(2)),
  player: player ? { x: +player.x.toFixed(2), z: +player.z.toFixed(2) } : null,
  drawn: renderer.info.render.calls, tris: renderer.info.render.triangles
});

/* ===== столкновение: Куроми спотыкается, останавливается и роняет конфеты ===== */
function onHit() {
  if (player.invuln > 0) return;
  player.invuln = 2;
  player.stumbleT = 0.9; // цель скорости → 0, затем плавный разгон
  shake = 0.45;
  SK.thud();
  /* конфеты вылетают из Куроми дугами и падают на дорогу впереди */
  const n = Math.min(player.collected, 5);
  if (n > 0) {
    player.collected -= n;
    $('hud-count').textContent = player.collected;
    let placed = 0;
    for (const b of track.bonusPool) {
      if (placed >= n) break;
      if (b.active) continue;
      b.active = true;
      b.x = player.x;
      b.y = 1.0;
      b.z = player.z + 0.3;
      b.fly = {
        vx: (Math.random() - 0.5) * 5,
        vy: 4.5 + Math.random() * 2.5,
        vz: 3.5 + Math.random() * 3.5
      };
      placed++;
    }
  }
  hitCount++;
  if (hitCount % 3 === 0) setTimeout(() => { if (state === 'playing') showBookBreak(); }, 1200);
}

/* ===== финиш ===== */
function startFinish() {
  state = 'finishing';
  SK.stopMusic();
  SK.fanfare();
  burstConfetti();
  setTimeout(showFinishScreen, 1400);
}
function showFinishScreen() {
  state = 'finish';
  const pct = track.totalSweets ? player.collected / track.totalSweets : 0;
  const stars = pct >= 0.9 ? 3 : pct >= 0.75 ? 2 : pct >= 0.5 ? 1 : 0;
  const saved = loadStars();
  if ((saved[track.def.key] || 0) < stars) { saved[track.def.key] = stars; saveStars(saved); }

  $('finish-count').textContent = player.collected;
  $('finish-total').textContent = track.totalSweets;
  $('finish-msg').textContent =
    stars === 3 ? 'Невероятно! Ты собрала почти всё!' :
    stars === 2 ? 'Здорово! Отличный забег!' :
    stars === 1 ? 'Молодец! Попробуй собрать ещё больше!' :
    'Финиш! В следующий раз получится собрать больше сладостей!';

  const starEls = [...document.querySelectorAll('#finish-stars .big-star')];
  starEls.forEach((s) => s.classList.remove('earned', 'pop'));
  showScreen('finish');
  starEls.forEach((s, i) => {
    if (i < stars) {
      setTimeout(() => {
        s.classList.add('earned', 'pop');
        SK.starPop(i);
      }, 500 + i * 550);
    }
  });
  burstConfetti();
}
$('btn-again').addEventListener('click', () => startRun(track.def.key));
$('btn-finish-menu').addEventListener('click', goMenu);

/* ===== конфетти (2D-канвас поверх) ===== */
let confetti = [];
function burstConfetti() {
  const w = confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const colors = ['#ff8fc7', '#9b59d0', '#fff3df', '#ffd966', '#9fe8d8'];
  for (let i = 0; i < 120; i++) {
    confetti.push({
      x: Math.random() * w, y: -20 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 60, vy: 80 + Math.random() * 160,
      rot: Math.random() * 6, vr: (Math.random() - 0.5) * 8,
      s: 6 + Math.random() * 7, c: colors[i % colors.length], life: 4
    });
  }
}
function drawConfetti(dt) {
  const g = confettiCanvas.getContext('2d');
  g.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  if (!confetti.length) return;
  confetti.forEach((p) => {
    p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt; p.life -= dt;
    g.save(); g.translate(p.x, p.y); g.rotate(p.rot);
    g.fillStyle = p.c;
    g.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
    g.restore();
  });
  confetti = confetti.filter((p) => p.life > 0 && p.y < confettiCanvas.height + 30);
}

/* ===== игровой цикл ===== */
const tmpO = new THREE.Object3D();

function update(dt) {
  const p = player, T = track;
  /* скорость: цель растёт очень плавно, сам разгон/торможение — с инерцией;
     при спотыкании цель = 0 (полная остановка) */
  const prog = Math.min(1, p.z / T.length * 1.4);
  const targetSpeed = p.stumbleT > 0 ? 0 : T.def.baseSpeed + (T.def.maxSpeed - T.def.baseSpeed) * prog;
  p.speed += THREE.MathUtils.clamp(targetSpeed - p.speed, -34 * dt, 6.5 * dt);
  p.z += p.speed * dt;

  /* полосы: пружина с лёгким перелётом — движение «живое», не телепорт */
  const tx = LANE_X[p.lane];
  p.laneV += ((tx - p.x) * 60 - p.laneV * 10.5) * dt;
  p.x += p.laneV * dt;

  /* прыжок */
  if (p.airborne) {
    p.vy -= 30 * dt;
    p.y += p.vy * dt;
    if (p.y <= 0) {
      p.y = 0; p.vy = 0; p.airborne = false;
      p.landT = 0.16; // сквош при приземлении
      if (p.slideOnLand) { p.slideT = 0.55; p.slideOnLand = false; SK.swish(); }
    }
  }
  if (p.slideT > 0) p.slideT -= dt;
  if (p.invuln > 0) p.invuln -= dt;
  if (p.celebT > 0) p.celebT -= dt;
  if (p.stumbleT > 0) p.stumbleT -= dt;
  if (p.landT > 0) p.landT -= dt;

  const sliding = p.slideT > 0 ? 1 : 0;
  const pBot = p.y, pTop = p.y + (sliding ? 0.68 : 1.42);

  /* предметы: окно активности */
  const items = T.items;
  while (itemLo < items.length && items[itemLo].z < p.z - 4) itemLo++;
  let dirtyCandy = false;

  for (let i = itemLo; i < items.length; i++) {
    const it = items[i];
    if (it.z > p.z + 60) break;
    const dz = it.z - p.z;

    if (it.kind === 'candy' || it.kind === 'skull') {
      if (!it.taken) {
        /* вращение/парение в зоне видимости */
        if (it.kind === 'skull' && it.mesh) {
          it.mesh.rotation.y += dt * 2.4;
          it.mesh.position.y = it.y + Math.sin(elapsed * 3 + it.z) * 0.08;
        } else if (it.kind === 'candy' && dz < 40) {
          tmpO.position.set(it.x, it.y + Math.sin(elapsed * 3 + it.z) * 0.07, it.z);
          tmpO.rotation.set(0, elapsed * 2.5 + it.z, 0);
          tmpO.scale.set(1, 1, 1);
          tmpO.updateMatrix();
          T.candyIM.setMatrixAt(it.iid, tmpO.matrix);
          dirtyCandy = true;
        }
        /* сбор */
        if (Math.abs(dz) < 1.0 && Math.abs(it.x - p.x) < 0.95 && Math.abs(it.y - (p.y + 0.7)) < 1.05) {
          it.taken = true;
          addSweets(it.value);
          if (it.kind === 'skull') { SK.dingBig(); if (it.mesh) it.mesh.visible = false; }
          else {
            SK.ding();
            T.candyIM.setMatrixAt(it.iid, T.zeroMatrix);
            dirtyCandy = true;
          }
        }
      }
    } else if (p.invuln <= 0 && p.celebT <= 0 && Math.abs(dz) < 0.65 + p.speed * dt) {
      /* пока Куроми подмигивает в камеру, она «не смотрит» — столкновения не считаем */
      /* препятствие: пересечение по x и по высоте */
      const halfW = it.w / 2 + 0.28;
      if (Math.abs(it.x - p.x) < halfW && it.yBot < pTop && it.yTop > pBot) onHit();
    }
  }

  /* бонусные конфеты (рассыпанные при ударе) */
  for (const b of T.bonusPool) {
    if (!b.active) continue;
    if (b.z < p.z - 4) { b.active = false; T.candyIM.setMatrixAt(b.iid, T.zeroMatrix); dirtyCandy = true; continue; }
    if (b.fly) {
      /* полёт дугой после удара */
      b.fly.vy -= 18 * dt;
      b.x = THREE.MathUtils.clamp(b.x + b.fly.vx * dt, -3.1, 3.1);
      b.y += b.fly.vy * dt;
      b.z += b.fly.vz * dt;
      if (b.y <= 0.55 && b.fly.vy < 0) { b.y = 0.55; b.fly = null; }
    }
    tmpO.position.set(b.x, b.y + (b.fly ? 0 : Math.sin(elapsed * 4 + b.z) * 0.08), b.z);
    tmpO.rotation.set(0, elapsed * (b.fly ? 7 : 3), 0);
    tmpO.scale.set(1.15, 1.15, 1.15);
    tmpO.updateMatrix();
    T.candyIM.setMatrixAt(b.iid, tmpO.matrix);
    dirtyCandy = true;
    /* подобрать можно после приземления */
    if (!b.fly && Math.abs(b.z - p.z) < 1.0 && Math.abs(b.x - p.x) < 0.95 && p.y < 1.2) {
      b.active = false;
      addSweets(1);
      SK.ding();
      T.candyIM.setMatrixAt(b.iid, T.zeroMatrix);
    }
  }
  if (dirtyCandy) T.candyIM.instanceMatrix.needsUpdate = true;

  /* HUD прогресс */
  $('progress-fill').style.width = Math.min(100, p.z / T.length * 100).toFixed(1) + '%';

  /* персонаж */
  kuromi.group.position.set(p.x, 0, p.z);
  kuromi.update({
    t: elapsed, y: p.y, sliding: sliding, airborne: p.airborne,
    laneVel: p.laneV, runSpeed: p.speed,
    stumble: p.stumbleT > 0 ? Math.min(1, p.stumbleT / 0.55) : 0,
    squash: p.landT > 0 ? p.landT / 0.16 : 0,
    celebrate: p.celebT > 0 ? CELEB_DUR - p.celebT : -1,
    celebrateMove: p.celebMove
  });
  /* мигание неуязвимости (кроме празднования — там Куроми всегда видна) */
  kuromi.group.visible = p.celebT > 0 || p.invuln <= 0 || Math.floor(elapsed * 12) % 2 === 0;

  /* финиш */
  if (p.z >= T.length && state === 'playing') startFinish();
}

function render(dt) {
  const p = player;
  if (p) {
    if (shake > 0) shake -= dt;
    const sh = Math.max(0, shake);
    const sx = (Math.random() - 0.5) * sh * 0.3, sy = (Math.random() - 0.5) * sh * 0.2;
    camera.position.set(p.x * 0.55 + sx, 2.7 + p.y * 0.3 + sy, p.z - 5.4);
    camera.lookAt(p.x * 0.75, 1.15 + p.y * 0.25, p.z + 7);
    if (track && track.skyGroup) track.skyGroup.position.z = p.z;
  }
  renderer.render(scene, camera);
}

function loop(time) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (time - lastTime) / 1000 || 0.016);
  lastTime = time;
  if (state === 'playing') {
    elapsed += dt;
    update(dt);
  } else if (state === 'finishing') {
    elapsed += dt;
    /* добегаем сквозь арку, плавно замедляясь */
    player.speed = Math.max(3, player.speed - 8 * dt);
    player.z += player.speed * dt;
    kuromi.group.position.set(player.x, 0, player.z);
    kuromi.group.visible = true;
    kuromi.update({ t: elapsed, y: 0, sliding: 0, airborne: false, laneVel: 0, runSpeed: player.speed });
    $('progress-fill').style.width = '100%';
  }
  if (state !== 'menu') render(dt);
  drawConfetti(dt);
}

/* первый жест — разбудить аудио */
window.addEventListener('pointerdown', () => SK.tap(), { once: true });

goMenu();
requestAnimationFrame(loop);
