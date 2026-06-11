import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.click('.track-card[data-track="candy"]');
await page.waitForTimeout(3800);
/* у каждого движения свой пиковый момент */
const peaks = { wink: 1000, kiss: 1150, flip: 650, karate: 1050, twirl: 850, starjump: 1000, dance: 1100 };
for (const [mv, peak] of Object.entries(peaks)) {
  await page.evaluate((m) => window.__celebrate(m), mv);
  await page.waitForTimeout(peak);
  await page.screenshot({ path: `shots/mv-${mv}.png` });
  await page.waitForTimeout(2300 - peak + 300); // дождаться конца движения
}
console.log(errors.length ? 'ОШИБКИ:\n' + errors.join('\n') : 'ок');
await browser.close();
