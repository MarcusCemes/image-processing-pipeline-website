module.exports = {
  title: "Image Processing Pipeline",
  tagline: "A modern image build orchestrator",
  url: "https://ipp.now.sh",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "MarcusCemes", // Usually your GitHub org/user name.
  projectName: "image-processing-pipeline", // Usually your repo name.
  themeConfig: {
    image: "src/social_preview.png",
    navbar: {
      title: "Image Processing Pipeline",
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
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting started",
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/MarcusCemes/image-processing-pipeline/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/MarcusCemes/image-processing-pipeline/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
      },
    ],
  ],
};
