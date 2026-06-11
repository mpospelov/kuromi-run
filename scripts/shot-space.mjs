import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.screenshot({ path: 'shots/sp0-menu.png' });
await page.click('.track-card[data-track="space"]');
await page.waitForTimeout(3800);
await page.screenshot({ path: 'shots/sp1-run.png' });
/* добежать до врат галактики (z=650) */
await page.evaluate(() => window.__warp(620));
await page.waitForTimeout(1200);
await page.screenshot({ path: 'shots/sp2-gate.png' });
/* подлетаем к финишу: солнце с орбитой планет */
await page.evaluate(() => window.__warp(2520));
await page.waitForTimeout(1500);
await page.screenshot({ path: 'shots/sp3-sun.png' });
/* финал: вспышка → волна → чёрная дыра всасывает планеты */
await page.evaluate(() => window.__warp(2598));
await page.waitForTimeout(800);
await page.screenshot({ path: 'shots/sp4-blast.png' });
await page.waitForTimeout(1200);
await page.screenshot({ path: 'shots/sp5-hole.png' });
await page.waitForTimeout(1400);
await page.screenshot({ path: 'shots/sp6-suck.png' });
await page.waitForTimeout(1500);
await page.screenshot({ path: 'shots/sp7-finish.png' });
console.log(errors.length ? 'ОШИБКИ:\n' + errors.join('\n') : 'ок');
await browser.close();
