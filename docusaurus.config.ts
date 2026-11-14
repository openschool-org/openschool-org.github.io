import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {lightCodeTheme, darkCodeTheme} from './src/theme-prism';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const SITE_URL = 'https://openschool.lk';

const SITE_DESCRIPTION =
  'OpenSchool is a free, open-source, self-hosted school management system built for Sri Lankan schools - covering academic years, students, guardians, attendance, timetables, and more.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenSchool',
  url: SITE_URL,
  logo: `${SITE_URL}/img/brand/logo.webp`,
  description: SITE_DESCRIPTION,
  areaServed: 'LK',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OpenSchool',
  url: SITE_URL,
};

const GITHUB_URL = 'https://github.com/openschool-org/openschool';

const config: Config = {
  title: 'OpenSchool',
  tagline: 'Digital Infrastructure for Sri Lankan Schools',
  favicon: 'img/favicons/favicon.webp',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'openschool-org',
  projectName: 'openschool-web',

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/webp', href: '/img/favicons/favicon.webp'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/img/favicons/favicon.webp'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'manifest', href: '/site.webmanifest'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'author', content: 'OpenSchool'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'twitter:card', content: 'summary_large_image'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(organizationJsonLd),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(websiteJsonLd),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/openschool-org/openschool-web/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/brand/og-cover.png',
    metadata: [
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {name: 'keywords', content: 'OpenSchool, open source, self-hosted, Sri Lanka, school management system, student information system, attendance management'},
      {name: 'theme-color', content: '#ffffff'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      // Used by the mobile sidebar header; the desktop navbar renders its
      // own brand - see the swizzled src/theme/Navbar/Content.
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo.webp',
        width: 28,
        height: 28,
      },
      title: 'OpenSchool',
      items: [
        {to: '/features', label: 'Features', position: 'left'},
        {type: 'docSidebar', sidebarId: 'docs', label: 'Documentation', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/community', label: 'Community', position: 'left'},
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          to: '/docs/setup',
          label: 'Get started',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo.webp',
        width: 24,
        height: 24,
      },
      links: [
        {
          title: 'Project',
          items: [
            {label: 'Features', to: '/features'},
            {label: 'About', to: '/about'},
            {label: 'Changelog', to: '/changelog'},
          ],
        },
        {
          title: 'Documentation',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Setup walkthrough', to: '/docs/setup'},
            {label: 'Architecture', to: '/docs/architecture'},
            {label: 'Decision records', to: '/docs/adr'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Get involved', to: '/community'},
            {label: 'Discussions', href: `${GITHUB_URL}/discussions`},
            {label: 'Issues', href: `${GITHUB_URL}/issues`},
            {label: 'Code of conduct', to: '/docs/code-of-conduct'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Apache License 2.0', href: `${GITHUB_URL}/blob/main/LICENSE`},
            {label: 'Security policy', href: `${GITHUB_URL}/blob/main/SECURITY.md`},
            {label: 'Privacy policy', to: '/privacy'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OpenSchool contributors · Apache License 2.0`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash', 'sql', 'ini', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
