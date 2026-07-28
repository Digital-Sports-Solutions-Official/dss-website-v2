// Responsive screenshot harness.
//   node scripts/screenshot.mjs [--tag baseline] [--routes /,/contact] [--widths 375,768]
// Requires a dev/prod server already running on BASE_URL.
import { chromium } from 'playwright';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

const ALL_ROUTES = [
  '/',
  '/contact',
  '/tinyleague',
  '/services/smart-devices',
  '/services/web-mobile',
  '/services/data',
  '/work/ncda-nda',
  '/work/2011-robotics',
  '/privacy',
  '/terms',
];

const ALL_VIEWPORTS = [
  { name: '320-mobile-xs', width: 320, height: 640, isMobile: true },
  { name: '375-mobile', width: 375, height: 812, isMobile: true },
  { name: '414-mobile-lg', width: 414, height: 896, isMobile: true },
  { name: '768-tablet', width: 768, height: 1024, isMobile: false },
  { name: '1024-laptop', width: 1024, height: 768, isMobile: false },
  { name: '1440-desktop', width: 1440, height: 900, isMobile: false },
];

function arg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : process.argv[i + 1];
}

const tag = arg('--tag', 'current');
const routes = arg('--routes')?.split(',') ?? ALL_ROUTES;
const widths = arg('--widths')?.split(',').map(Number);
const viewports = widths ? ALL_VIEWPORTS.filter((v) => widths.includes(v.width)) : ALL_VIEWPORTS;

const outRoot = path.join('.screenshots', tag);

/** Reports any element wider than the viewport, which is the usual cause of mobile side-scroll. */
const overflowProbe = () => {
  const docWidth = document.documentElement.clientWidth;
  const offenders = [];
  for (const el of document.querySelectorAll('body *')) {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;
    if (rect.right > docWidth + 1 || rect.left < -1) {
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.getAttribute('class') || '').slice(0, 90),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
      });
    }
  }
  return {
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: docWidth,
    offenders: offenders.slice(0, 8),
  };
};

const browser = await chromium.launch();
await rm(outRoot, { recursive: true, force: true });

const problems = [];

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
    isMobile: vp.isMobile,
    hasTouch: vp.isMobile,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();

  for (const route of routes) {
    const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
    const dir = path.join(outRoot, vp.name);
    await mkdir(dir, { recursive: true });

    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 60_000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(350);

    const probe = await page.evaluate(overflowProbe);
    if (probe.scrollWidth > probe.clientWidth + 1) {
      problems.push({ viewport: vp.name, route, ...probe });
    }

    await page.screenshot({ path: path.join(dir, `${slug}.png`), fullPage: true });
    process.stdout.write(`  ${vp.name.padEnd(14)} ${route}\n`);
  }

  await context.close();
}

await browser.close();

if (problems.length === 0) {
  console.log('\nNo horizontal overflow detected.');
} else {
  console.log('\nHORIZONTAL OVERFLOW:');
  for (const p of problems) {
    console.log(`\n  ${p.viewport} ${p.route}  (scroll ${p.scrollWidth} > client ${p.clientWidth})`);
    for (const o of p.offenders) {
      console.log(`    <${o.tag}> [${o.left}..${o.right}] ${o.cls}`);
    }
  }
}
