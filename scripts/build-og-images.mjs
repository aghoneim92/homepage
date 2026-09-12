// Renders the social preview cards in public/assets/og/.
//
// The cards are committed to the repo — the site serves them as static files —
// so this only needs running when the wording or the design changes:
//
//   node scripts/build-og-images.mjs
//
// It renders scripts/og-card.css in a local headless Chrome, with the site's own
// webfonts pulled from Google Fonts and inlined. macOS only, by way of `sips`.

import { execFileSync, spawn } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const outDir = join(publicDir, 'assets', 'og');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const WIDTH = 1200;
const HEIGHT = 630;
/** Rendered at 2x and resampled down, which sharpens the type considerably. */
const SCALE = 2;
const JPEG_QUALITY = 80;

/** @type {{ name: string, kicker: string, title: string, lede: string, chips?: string[], portrait?: string, collage?: string[] }[]} */
const cards = [
  {
    name: 'og-default',
    kicker: 'Senior Software Engineer',
    title: 'Ahmed<br />Ghoneim',
    lede: 'Twelve years of building things people use every day, mostly on the frontend.',
    portrait: '/assets/web/ahmed.jpg',
  },
  {
    name: 'og-resume',
    kicker: 'Ahmed Ghoneim',
    title: 'Resume',
    lede: 'Senior software engineer in Alexandria, Egypt. Frontend-leaning full-stack, remote for most of the last decade.',
    chips: ['React', 'TypeScript', 'Go', 'Python', 'Node.js', 'Postgres'],
  },
  {
    name: 'og-gallery',
    kicker: 'Ahmed Ghoneim',
    title: 'Gallery',
    lede: 'Coastlines, dinners and plastic bricks. The things I do when I am not at a keyboard.',
    collage: [
      '/assets/web/photo-sunset.jpg',
      '/assets/web/cook-salmon.jpg',
      '/assets/web/lego-trex.jpg',
    ],
  },
];

const css = readFileSync(join(root, 'scripts', 'og-card.css'), 'utf8');

const FONT_CSS_URL =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,800&family=Spectral:wght@400&display=block';
// Chrome's own UA, so Google Fonts answers with woff2 rather than a fallback format.
const CHROME_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36';

/**
 * Fetches the webfonts and inlines them as data URIs. Headless Chrome screenshots
 * the page the moment it loads, so anything left to fetch over the network would
 * either miss the frame or hang the render — this leaves nothing to fetch.
 */
async function inlineFonts() {
  const res = await fetch(FONT_CSS_URL, {
    headers: { 'User-Agent': CHROME_UA },
  });
  if (!res.ok) throw new Error(`Google Fonts returned ${res.status}`);
  const sheet = await res.text();

  // Only the latin cuts are used here, and they keep the page a fraction of the size.
  const blocks = sheet
    .split('/*')
    .filter((block) => /^\s*latin(-ext)?\s*\*\//.test(block))
    .map((block) => block.slice(block.indexOf('*/') + 2));

  return (
    await Promise.all(
      blocks.map(async (block) => {
        const url = block.match(/url\((https:[^)]+)\)/)?.[1];
        if (!url) return block;
        const font = Buffer.from(await (await fetch(url)).arrayBuffer());
        return block.replace(
          url,
          `data:font/woff2;base64,${font.toString('base64')}`,
        );
      }),
    )
  ).join('\n');
}

/** Inlines an image so the page has nothing to fetch off disk. */
function dataUri(src) {
  const bytes = readFileSync(join(publicDir, src));
  return `data:image/jpeg;base64,${bytes.toString('base64')}`;
}

function html(card, fontCss) {
  const visual = card.portrait
    ? `<div class="visual"><img class="portrait" src="${dataUri(card.portrait)}" alt="" /></div>`
    : card.collage
      ? `<div class="visual"><div class="collage">${card.collage
          .map((src) => `<img src="${dataUri(src)}" alt="" />`)
          .join('')}</div></div>`
      : '';
  const chips = card.chips
    ? `<ul class="chips">${card.chips.map((chip) => `<li>${chip}</li>`).join('')}</ul>`
    : '';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>${fontCss}</style>
    <style>${css}</style>
  </head>
  <body>
    <div class="card${visual ? '' : ' text-only'}">
      <div class="body">
        <p class="kicker">${card.kicker}</p>
        <h1 class="title">${card.title}</h1>
        <p class="lede">${card.lede}</p>
        ${chips}
      </div>
      ${visual}
      <div class="footer">
        <span class="site">ahmedghoneim.online</span>
        <span>Alexandria, Egypt</span>
      </div>
    </div>
  </body>
</html>
`;
}

/**
 * Chrome writes the screenshot and then keeps running, so rather than waiting on
 * the process we wait for the file to appear and stop growing, then shut it down.
 */
async function screenshot(page, shot, profile) {
  const chrome = spawn(
    CHROME,
    [
      // The old headless mode is the one whose --screenshot still works here.
      '--headless=old',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-background-networking',
      `--user-data-dir=${profile}`,
      `--force-device-scale-factor=${SCALE}`,
      `--window-size=${WIDTH},${HEIGHT}`,
      // Lets layout and font shaping settle before the frame is captured.
      '--virtual-time-budget=5000',
      `--screenshot=${shot}`,
      `file://${page}`,
    ],
    { stdio: 'ignore' },
  );

  try {
    let lastSize = -1;
    for (let tick = 0; tick < 120; tick++) {
      // oxlint-disable-next-line no-await-in-loop -- polling has to be sequential
      await sleep(500);
      if (!existsSync(shot)) continue;
      const { size } = statSync(shot);
      if (size > 0 && size === lastSize) return;
      lastSize = size;
    }
    throw new Error(`Chrome never produced ${shot}`);
  } finally {
    chrome.kill('SIGKILL');
  }
}

const fontCss = await inlineFonts();
const work = mkdtempSync(join(tmpdir(), 'og-cards-'));
mkdirSync(outDir, { recursive: true });

try {
  for (const card of cards) {
    const page = join(work, `${card.name}.html`);
    const shot = join(work, `${card.name}.png`);
    writeFileSync(page, html(card, fontCss));

    // oxlint-disable-next-line no-await-in-loop -- one Chrome at a time, on purpose
    await screenshot(page, shot, join(work, 'chrome-profile'));

    const out = join(outDir, `${card.name}.jpg`);
    execFileSync(
      'sips',
      [
        '--resampleWidth',
        String(WIDTH),
        '-s',
        'format',
        'jpeg',
        '-s',
        'formatOptions',
        String(JPEG_QUALITY),
        shot,
        '--out',
        out,
      ],
      { stdio: 'ignore' },
    );

    console.log(`wrote ${out.slice(root.length + 1)}`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
