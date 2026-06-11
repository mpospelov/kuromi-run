import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-angle=swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
page.on('pageerror', (e) => console.log('ERR:', e));
await page.goto('http://localhost:5199/tools/preview.html');
await page.waitForFunction(() => window.__done, null, { timeout: 120000 });
console.log('норма:', JSON.stringify(await page.evaluate(() => window.__norm)));
await page.screenshot({ path: 'shots/model-views.png' });
await browser.close();
