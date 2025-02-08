import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const isProduction = process.env.NODE_ENV === 'production';
console.log("🚀 ~ process.env.NODE_ENV:", process.env.NODE_ENV);
console.log("🚀 ~ isProduction:", isProduction);

const navBarItems = [
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'left',
    label: 'Tutorial',
    show: !isProduction,
  },
  {
    to: 'resources',
    label: '笔记',
    position: 'right',
    // items: [
    //   { label: '前端', to: '/blog' },
    //   { label: '后端', to: '/blog' },
    //   { label: 'CS', to: '/blog' },
    // ],
  },
  // {
  //   // to: 'https://juejin.cn/user/2656897734017608/posts',
  //   label: '博客',
  //   position: 'right',
  //   to: 'platform',
  // },
  {
    to: 'project',
    label: '项目',
    position: 'right',
  },
  {
    href: 'https://github.com/lao-jiawei',
    label: 'GitHub',
    position: 'right',
  },
].filter(({ show = true }) => show);

const config: Config = {
  title: 'Jv',
  tagline: '求知若渴，虚心若愚',
  favicon: 'img/logo.ico',
  url: 'https://lao-jiawei.github.io/',
  baseUrl: '/',
  organizationName: 'lao-jiawei', // Usually your GitHub org/user name.
  projectName: 'lao-jiawei.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    'docusaurus-plugin-sass',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'jv',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      //TODO: 调整目录结构
      items: navBarItems,
      // items: [
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'tutorialSidebar',
      //     position: 'left',
      //     label: 'Tutorial',
      //   },
      //   {
      //     to: 'resources',
      //     label: '笔记',
      //     position: 'right',
      //     // items: [
      //     //   { label: '前端', to: '/blog' },
      //     //   { label: '后端', to: '/blog' },
      //     //   { label: 'CS', to: '/blog' },
      //     // ],
      //   },
      //   // {
      //   //   // to: 'https://juejin.cn/user/2656897734017608/posts',
      //   //   label: '博客',
      //   //   position: 'right',
      //   //   to: 'platform',
      //   // },
      //   {
      //     to: 'project',
      //     label: '项目',
      //     position: 'right',
      //   },
      //   {
      //     href: 'https://github.com/lao-jiawei',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
