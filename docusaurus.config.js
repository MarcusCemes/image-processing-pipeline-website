module.exports = {
  title: "Image Processing Pipeline",
  tagline: "A modern image build orchestrator",
  url: "https://ipp.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "MarcusCemes", // Usually your GitHub org/user name.
  projectName: "image-processing-pipeline", // Usually your repo name.
  themeConfig: {
    image: "src/social_preview.png",
    announcementBar: {
      id: "unreleased_notice",
      content:
        'This is for an unreleased version of IPP, for the current docs, visit <a href="https://ipp.mastermovies.uk" target="_blank" rel="noopener noreferrer" >ipp.mastermovies.uk</a>',
      backgroundColor: "#111",
      textColor: "#fff",
    },
    navbar: {
      title: "Image Processing Pipeline",
      logo: {
        alt: "Image Processing Pipeline logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "guide/",
          activeBasePath: "guide",
          label: "Guide",
          position: "left",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://github.com/MarcusCemes/image-processing-pipeline",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Guide",
              to: "guide/",
            },
            {
              label: "Docs",
              to: "docs/",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/MarcusCemes/image-processing-pipeline",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcus Cemes - MIT License`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebar-docs.js"),
          editUrl: "https://github.com/MarcusCemes/image-processing-pipeline-website/edit/master/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guide",
        /** The filesystem path */
        path: "guide",
        /** The URL path */
        routeBasePath: "guide",
        homePageId: "prerequisites",
        sidebarPath: require.resolve("./sidebar-guide.js"),
      },
    ],
  ],
};
