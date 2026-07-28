// Collects browser console errors/warnings per route.
//   node scripts/console-check.mjs
import { chromium } from 'playwright';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

const ROUTES = [
  '/',
  '/contact',
  '/tinyleague',
  '/services/web-mobile',
  '/work/ncda-nda',
  '/privacy',
  '/terms',
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();

let total = 0;

for (const route of ROUTES) {
  const messages = [];
  const onConsole = (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      messages.push(`[${msg.type()}] ${msg.text()}`);
    }
  };
  const onPageError = (err) => messages.push(`[pageerror] ${err.message}`);

  page.on('console', onConsole);
  page.on('pageerror', onPageError);

  await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForTimeout(600);

  page.off('console', onConsole);
  page.off('pageerror', onPageError);

  if (messages.length) {
    total += messages.length;
    console.log(`\n${route}`);
    for (const m of [...new Set(messages)]) console.log(`  ${m}`);
  }
}

await browser.close();
console.log(total === 0 ? '\nNo console errors or warnings.' : `\n${total} message(s).`);
