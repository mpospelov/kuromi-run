import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.click('.track-card[data-track="candy"]');
await page.waitForTimeout(3800);
for (const [mv, peak] of [['karate', 1080], ['starjump', 1150]]) {
  await page.evaluate((m) => window.__celebrate(m), mv);
  await page.waitForTimeout(peak);
  await page.screenshot({ path: `shots/mv-${mv}.png` });
  await page.waitForTimeout(2600 - peak);
}
console.log(errors.length ? 'ОШИБКИ:\n' + errors.join('\n') : 'ок');
await browser.close();
