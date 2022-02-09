module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "what-is-it",
        "motivation",
        "comparison",
        "how-it-works",
        "typescript",
      ],
    },
    {
      type: "category",
      label: "Guide",
      link: {
        type: "doc",
        id: "guide/introduction",
      },
      items: ["guide/installation", "guide/usage", "guide/next"],
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "generated-index",
        title: "Integrations",
        slug: "/integrations",
      },
      items: [
        "integrations/cli",
        "integrations/programmatic",
        "integrations/webpack",
        "integrations/vite",
      ],
    },
    {
      type: "category",
      label: "Cookbook",
      link: {
        type: "generated-index",
        title: "Cookbook",
        slug: "/cookbook",
      },
      items: ["cookbook/frontend", "cookbook/serverless"],
    },
    {
      type: "category",
      label: "Packages",
      link: {
        type: "generated-index",
        title: "Packages",
        slug: "/packages",
      },
      items: [
        "packages/cli",
        "packages/common",
        "packages/compress",
        "packages/core",
        "packages/primitive",
        "packages/testing",
        "packages/trace",
        "packages/webpack",
      ],
    },
    "troubleshooting",
  ],
};
