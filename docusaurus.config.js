// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gaveṣaṇā - गवेषणा",
  tagline: "A Material Research",
  favicon: "img/public/logo-no-background.svg",

  // Set the production url of your site here
  url: "https://arun-esh.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gaveshana", // Usually your GitHub org/user name.
  projectName: "gaveshana.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages", // The branch of the docs repo to publish.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 20,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],

  themes: [
    // ... Your other themes.
    // "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
    // ['@docusaurus/theme-mermaid'],

    // ['@docusaurus/theme-mermaid']
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/public/logo-no-background.png",
      navbar: {
        // title: "My Site",
        logo: {
          alt: "tree--com.svg",
          src: "img/public/logo-no-background.svg",
          // src: "img/public/solve-math-problem.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Concepts",
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: "SQL",
                href: "#",
              },
              {
                label: "Databases",
                href: "#",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/aruneshchoudhary/",
              },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/arun3sh",
              // },
              {
                label: "GitHub",
                to: "https://github.com/arun-esh",
              },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Github",
          //       to: "https://github.com/arun-esh/",
          //     },
          //     //
          //     //   label: 'GitHub',
          //     //   href: 'https://github.com/arun-esh/arun-esh.github.io',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tends to Zero, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      announcementBar: {
        id: "announcementBar_1",
        content: "🥳 This is awesome documentation platform!",
      },
    }),
};

export default config;
