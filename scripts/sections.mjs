// Section-level screenshots so individual blocks are readable.
//   node scripts/sections.mjs --route / --width 375 --tag baseline
import { chromium } from 'playwright';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

function arg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : process.argv[i + 1];
}

const route = arg('--route', '/');
const width = Number(arg('--width', '375'));
const tag = arg('--tag', 'sections');
const height = Number(arg('--height', width < 700 ? '812' : '900'));

const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
const outDir = path.join('.screenshots', tag, `${slug}-${width}`);

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: 2,
  isMobile: width < 700,
  hasTouch: width < 700,
  reducedMotion: 'reduce',
});
const page = await context.newPage();

await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 60_000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

const selector = arg('--selector');

// Direct children of <main> plus the shared chrome give one image per visual block.
const targets = selector
  ? await page.evaluate((sel) => {
      const out = [];
      document.querySelectorAll(sel).forEach((el, i) => {
        const label = `sel-${String(i + 1).padStart(2, '0')}`;
        el.setAttribute('data-shot', label);
        out.push(label);
      });
      return out;
    }, selector)
  : await page.evaluate(() => {
  const out = [];
  const push = (el, label) => {
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.height < 24) return;
    el.setAttribute('data-shot', label);
    out.push(label);
  };
  push(document.querySelector('nav'), 'nav');
  const main = document.querySelector('main');
  if (main) {
    [...main.children].forEach((child, i) => {
      const id = child.id || child.tagName.toLowerCase();
      push(child, `${String(i + 1).padStart(2, '0')}-${id}`);
    });
  }
  push(document.querySelector('footer'), 'zz-footer');
  return out;
});

const outSuffix = selector ? '-sel' : '';

const finalDir = `${outDir}${outSuffix}`;
await rm(finalDir, { recursive: true, force: true });
await mkdir(finalDir, { recursive: true });

for (const label of targets) {
  const el = page.locator(`[data-shot="${label}"]`);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  await el.screenshot({ path: path.join(finalDir, `${label}.png`) });
  process.stdout.write(`  ${label}\n`);
}

await context.close();
await browser.close();
console.log(`\nWrote ${targets.length} sections to ${finalDir}`);
