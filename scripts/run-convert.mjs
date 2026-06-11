import { chromium } from 'playwright';
import fs from 'node:fs';
const browser = await chromium.launch();
const page = await browser.newPage();
page.on('console', (m) => console.log('[page]', m.text()));
await page.goto('http://localhost:5199/tools/convert.html');
await page.waitForFunction(() => window.__result, null, { timeout: 240000 });
const r = await page.evaluate(() => ({ stats: window.__result.stats, error: window.__result.error }));
if (r.error) { console.log('ОШИБКА:', r.error); process.exit(1); }
console.log(JSON.stringify(r.stats, null, 2));
const b64 = await page.evaluate(() => window.__result.glb);
fs.writeFileSync('assets-src/kuromi-raw.glb', Buffer.from(b64, 'base64'));
console.log('GLB:', (fs.statSync('assets-src/kuromi-raw.glb').size / 1048576).toFixed(1), 'MiB');
await browser.close();
