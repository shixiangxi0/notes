// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'zh-Hans';
const isEn = locale === 'en';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - render next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const labels = {
  dualWorldTheory: isEn ? 'Dual World Theory' : '双世界理论',
  preface: isEn ? 'Preface' : '前言',
  theory: isEn ? 'Theory' : '理论',
  practice: isEn ? 'Practice' : '实践',
  about: isEn ? 'About' : '关于',
  appendix: isEn ? 'Appendix' : '附录',
};

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: labels.dualWorldTheory,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'dual-world-theory/前言/index',
      },
      items: [
        {
          type: 'category',
          label: labels.preface,
          collapsed: false,
          link: {
            type: 'doc',
            id: 'dual-world-theory/前言/index',
          },
          items: [
            'dual-world-theory/前言/引子',
          ],
        },
        {
          type: 'category',
          label: labels.theory,
          collapsed: false,
          items: [
            'dual-world-theory/理论/双世界理论',
            'dual-world-theory/理论/因果传播网络',
            'dual-world-theory/理论/面向因果',
          ],
        },
        {
          type: 'category',
          label: labels.practice,
          collapsed: false,
          items: [
            'dual-world-theory/实践/游戏架构实践',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: labels.about,
      collapsed: false,
      items: [
        'about/关于双世界',
        'about/关于作者',
      ],
    },
    {
      type: 'category',
      label: labels.appendix,
      collapsed: false,
      items: [
        'appendix/alan-kay-on-oop',
      ],
    },
  ],
};

export default sidebars;
