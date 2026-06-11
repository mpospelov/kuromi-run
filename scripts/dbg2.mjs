import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.click('.track-card[data-track="space"]');
await page.waitForTimeout(3600);
await page.evaluate(() => { window.__dbgSpeed = () => { const d = window.__debug(); return d; }; });
await page.evaluate(() => window.__warp(2590));
for (let i = 0; i < 10; i++) {
  await page.waitForTimeout(350);
  const d = await page.evaluate(() => window.__debug());
  console.log(i, JSON.stringify(d));
}
await browser.close();
