import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 800 } });
page.on('pageerror', (e) => console.log('ERR:', e));
await page.goto('http://localhost:5199/tools/face.html');
await page.waitForFunction(() => window.__done, null, { timeout: 120000 });
console.log('z-пробы:', JSON.stringify(await page.evaluate(() => window.__probes)));
await page.screenshot({ path: 'shots/model-face.png' });
await browser.close();
