import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'tinyLeague™',
  tagline: 'Hardware, Software, Sports',
  favicon: '/img/favicon.ico',
  url: 'https://digitalsportssolutions.com',
  baseUrl: '/docs/',

  onBrokenLinks: 'warn', // TODO 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          lastVersion: '1.1.0',
          includeCurrentVersion: false,
          versions: {
            '1.0.0': { label: '1.0.0' },
            '1.0.1': { label: '1.0.1' },
            '1.1.0': { label: '1.1.0' },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/DSS_CombinationMark.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'DSS Logo',
        src: 'img/DSS_CombinationMark.svg',
        srcDark: 'img/DSS_CombinationMark_White.svg',
        href: 'https://www.digitalsportssolutions.com/',
      },
      items: [
        {
          href: 'https://www.digitalsportssolutions.com/',
          label: 'Home',
          position: 'left',
          target: '_self',
          rel: null,
        },
        {
          href: 'https://www.digitalsportssolutions.com/tinyleague',
          label: 'tinyLeague',
          position: 'left',
          target: '_self',
          rel: null,
        },
        {
          href: 'https://www.digitalsportssolutions.com/products',
          label: 'Products',
          position: 'left',
          target: '_self',
          rel: null,
        },
        {
          href: 'https://www.digitalsportssolutions.com/about',
          label: 'About',
          position: 'left',
          target: '_self',
          rel: null,
        },
        {
          href: '/docs/',
          // label: 'Documentation',
          // Only one of "label" or "html" should be used
          html: '<b style="color: var(--dss-orange);">Documentation</b>',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    footer: {},
    prism: {
      theme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    // Load montserrat
    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  ],

  scripts: [],
};

export default config;
