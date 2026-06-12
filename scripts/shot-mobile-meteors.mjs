import { chromium } from 'playwright';
const browser = await chromium.launch();

/* 1) телефон: скролл меню и запуск последней трассы */
const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
const errors = [];
phone.on('pageerror', (e) => errors.push(String(e)));
await phone.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await phone.waitForTimeout(800);
const scroll = await phone.evaluate(() => {
  const m = document.getElementById('menu');
  return { sh: m.scrollHeight, ch: m.clientHeight };
});
console.log('меню: scrollHeight', scroll.sh, '> clientHeight', scroll.ch, '→ скроллится:', scroll.sh > scroll.ch);
await phone.screenshot({ path: 'shots/mob1-top.png' });
await phone.locator('.track-card[data-track="space"]').scrollIntoViewIfNeeded();
await phone.screenshot({ path: 'shots/mob2-bottom.png' });
await phone.locator('.track-card[data-track="space"]').tap();
await phone.waitForTimeout(4000);
const hud = await phone.evaluate(() => document.getElementById('hud').classList.contains('visible'));
console.log('космос запустился с телефона:', hud);
await phone.screenshot({ path: 'shots/mob3-game.png' });
await phone.close();

/* 2) десктоп: метеоры в полёте */
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.click('.track-card[data-track="space"]');
await page.waitForTimeout(3800);
/* первые паттерны с z≈50: активация на ~z>−45..30 — ждём встречи */
for (let i = 0; i < 3; i++) {
  await page.waitForTimeout(1700);
  await page.screenshot({ path: `shots/met${i}.png` });
}
console.log(errors.length ? 'ОШИБКИ:\n' + errors.join('\n') : 'ошибок нет');
await browser.close();
