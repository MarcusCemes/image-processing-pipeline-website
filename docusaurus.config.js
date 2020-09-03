module.exports = {
  title: "Image Processing Pipeline",
  tagline: "An image build orchestrator for the modern web",
  url: "https://ipp.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "MarcusCemes", // Usually your GitHub org/user name.
  projectName: "image-processing-pipeline", // Usually your repo name.
  themeConfig: {
    image: "img/social_preview.png",
    announcementBar: {
      id: "unreleased_notice",
      content:
        'This is for an unreleased version of IPP, for the current docs, visit <a href="https://ipp.mastermovies.uk" target="_blank" rel="noopener noreferrer" >ipp.mastermovies.uk</a>',
      backgroundColor: "#111",
      textColor: "#fff",
    },
    navbar: {
      title: "Image Processing Pipeline",
      hideOnScroll: true,
      logo: {
        alt: "Image Processing Pipeline logo",
        src: "img/logo.svg",
      },
      items: [
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
    algolia: {
      apiKey: "912e77f3afa7a4189802586da8f1922e",
      indexName: "marcuscemes_image-processing-pipeline",
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Guide",
              to: "docs/guide/prerequisites",
            },
            {
              label: "CLI",
              to: "docs/cli/installation",
            },
            {
              label: "Webpack",
              to: "docs/webpack/installation",
            },
            {
              label: "Reference",
              to: "docs/reference/cli",
            },
          ],
        },
        {
          title: "GitHub",
          items: [
            {
              label: "Repository",
              to: "https://github.com/MarcusCemes/image-processing-pipeline",
            },
            {
              label: "Issues",
              to: "https://github.com/MarcusCemes/image-processing-pipeline/issues",
            },
            {
              label: "Contributing",
              to: "https://github.com/MarcusCemes/image-processing-pipeline/#contributing",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcus Cemes - MIT License`,
    },
  },
  plugins: ["demo-plugin"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
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
};
