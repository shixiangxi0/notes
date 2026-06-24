// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'zh-Hans';
const isEn = locale === 'en';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: isEn ? 'Causality-Oriented Architecture Notes' : '面向因果的架构思考笔记',
  tagline: isEn ? 'Dual World Theory' : '双世界理论',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // Disabled v4 due to HMR issues with Rspack in dev mode
  // future: {
  //   v4: true,
  // },

  url: 'https://notes.shixiangxi.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: isEn ? 'Personal Notes' : '个人笔记',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: isEn ? 'Contents' : '目录',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: '<a href="mailto:sxxjack@163.com" aria-label="Email" style="display:inline-flex;align-items:center;justify-content:center;color:inherit;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
