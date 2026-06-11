/* Снимок оригинального прототипа для сравнения освещения */
import { chromium } from 'playwright';

const URL = process.env.GAME_URL || 'http://localhost:5198/Kuromi%20Run.html';
const PREFIX = process.env.PREFIX || 'proto';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.click('.track-card[data-track="candy"]');
await page.waitForTimeout(3800);
await page.screenshot({ path: `shots/${PREFIX}-candy.png` });
if (errors.length) { console.log('ОШИБКИ:'); errors.forEach((e) => console.log('  ' + e)); }
else console.log('ок');
await browser.close();
