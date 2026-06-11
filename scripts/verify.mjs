/* Сквозная проверка игры в headless-браузере: меню → забег → переменка → финиш */
import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = process.env.GAME_URL || 'http://localhost:5199/';
const OUT = 'shots';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));

const shot = (name) => page.screenshot({ path: `${OUT}/${name}.png` });
const visible = (sel) => page.evaluate((s) => document.querySelector(s)?.classList.contains('visible'), sel);

await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await shot('01-menu');

const cards = await page.locator('.track-card').count();
console.log(`карточек трасс в меню: ${cards}`);
if (cards !== 3) throw new Error('ожидалось 3 карточки трасс');

/* старт самой короткой трассы */
await page.click('.track-card[data-track="candy"]');
await page.waitForTimeout(1000);
await shot('02-countdown');
await page.waitForTimeout(2600); // конец отсчёта
console.log('hud виден:', await visible('#hud'));

/* управление: полосы, прыжок, подкат */
await page.keyboard.press('ArrowLeft');
await page.waitForTimeout(400);
await page.keyboard.press('ArrowUp');
await page.waitForTimeout(250);
await shot('03-jump');
await page.keyboard.press('ArrowRight');
await page.waitForTimeout(500);
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(200);
await shot('04-slide');

/* пауза */
await page.keyboard.press('Escape');
await page.waitForTimeout(300);
if (!await visible('#pause-overlay')) throw new Error('пауза не открылась');
await shot('05-pause');
await page.click('#btn-resume');
await page.waitForTimeout(300);

/* бежим до финиша; книжные переменки закрываем, первую фотографируем */
let bookShots = 0, hudCountMax = 0;
const t0 = Date.now();
while (Date.now() - t0 < 150000) {
  if (await visible('#finish')) break;
  if (await visible('#book-break')) {
    if (++bookShots === 1) await shot('06-book-break');
    await page.click('#btn-book-continue');
  }
  const c = await page.evaluate(() => +document.getElementById('hud-count').textContent);
  hudCountMax = Math.max(hudCountMax, c);
  await page.waitForTimeout(500);
}
if (!await visible('#finish')) throw new Error('финиш не наступил за 150 секунд');
await page.waitForTimeout(2300); // звёзды появляются по очереди
await shot('07-finish');

const finishCount = await page.evaluate(() => document.getElementById('finish-count').textContent);
const finishTotal = await page.evaluate(() => document.getElementById('finish-total').textContent);
const starsEarned = await page.evaluate(() => document.querySelectorAll('#finish-stars .earned').length);
const saved = await page.evaluate(() => localStorage.getItem('kuromiRun.stars'));
console.log(`книжных переменок: ${bookShots}; макс. сладостей в HUD: ${hudCountMax}`);
console.log(`финиш: собрано ${finishCount} из ${finishTotal}, звёзд: ${starsEarned}, localStorage: ${saved}`);

/* назад в меню — звёзды должны отобразиться на карточке */
await page.click('#btn-finish-menu');
await page.waitForTimeout(500);
const menuStars = await page.evaluate(() =>
  document.querySelector('.track-card[data-track="candy"] .card-stars')?.querySelectorAll('.on').length);
console.log(`звёзд на карточке в меню: ${menuStars}`);
await shot('08-menu-stars');

if (errors.length) {
  console.log('ОШИБКИ КОНСОЛИ:');
  errors.forEach((e) => console.log('  ' + e));
  process.exitCode = 1;
} else {
  console.log('ошибок консоли нет ✓');
}
await browser.close();
