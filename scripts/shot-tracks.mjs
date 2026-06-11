import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));
for (const key of ['city', 'stars']) {
  await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.click(`.track-card[data-track="${key}"]`);
  await page.waitForTimeout(4500);
  await page.screenshot({ path: `shots/track-${key}.png` });
}
console.log(errors.length ? 'ОШИБКИ:\n' + errors.join('\n') : 'ок');
await browser.close();
