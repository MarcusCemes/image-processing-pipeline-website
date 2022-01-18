const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Image Processing Pipeline",
  tagline: "An image build orchestrator for the modern web",
  url: "https://ipp.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MarcusCemes",
  projectName: "image-processing-pipeline",
  themeConfig: {
    image: "/img/social_preview.jpg",
    navbar: {
      title: "Image Processing Pipeline",
      hideOnScroll: true,
      logo: {
        alt: "Project logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/MarcusCemes/image-processing-pipeline",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    algolia: {
      appId: "209V3XAFGT",
      apiKey: "7c422f0e76ad401b04bd8eba0a33a0d6",
      indexName: "marcuscemes_image-processing-pipeline",
      contextualSearch: false, // breaks search for non-versioned sites?
    },
    footer: {
      style: "light",
      logo: {
        alt: "Image Processing Pipeline Logo",
        src: "img/logo_footer.svg",
        href: "https://ipp.vercel.app",
      },
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Guide",
              to: "/docs/guide",
            },
            {
              label: "Privacy",
              to: "/privacy",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "CLI",
              to: "/docs/cli",
            },
            {
              label: "Webpack",
              to: "/docs/webpack",
            },
            {
              label: "Reference",
              to: "/docs/reference/cli",
            },
          ],
        },
        {
          title: "GitHub",
          items: [
            {
              label: "Repository",
              href: "https://github.com/MarcusCemes/image-processing-pipeline",
            },
            {
              label: "Issues",
              href: "https://github.com/MarcusCemes/image-processing-pipeline/issues",
            },
            {
              label: "Contributing",
              to: "/docs/contributing",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcus Cemes.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: ["plugin-analytics", "plugin-demo"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/MarcusCemes/image-processing-pipeline-website/edit/master/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/MarcusCemes/image-processing-pipeline-website/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
      },
    ],
  ],
};
