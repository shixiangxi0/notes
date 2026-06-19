// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - render next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '双世界理论',
      link: {
        type: 'doc',
        id: 'dual-world-theory/前言/index',
      },
      items: [
        {
          type: 'category',
          label: '前言',
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
          label: '理论',
          items: [
            'dual-world-theory/理论/双世界理论',
            'dual-world-theory/理论/因果传播网络',
            'dual-world-theory/理论/面向因果',
          ],
        },
        {
          type: 'category',
          label: '实践',
          items: [
            'dual-world-theory/实践/游戏架构实践',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '关于',
      items: [
        'about/关于双世界',
        'about/关于作者',
      ],
    },
  ],
};

export default sidebars;
